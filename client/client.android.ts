import * as common from "./client-common";
import * as application from "application";
import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";

global.moduleMerge(common, exports);

export class MobileServiceClient extends common.MobileServiceClient {
    constructor(url: string) {
        super(url);
        this._msClient = new com.microsoft.windowsazure.mobileservices.MobileServiceClient(url, application.android.currentContext);
        this._msClient.setAndroidHttpClientFactory(new com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory({
            createOkHttpClient: () => {
                let client = new com.squareup.okhttp.OkHttpClient();
                client.setReadTimeout(20, java.util.concurrent.TimeUnit.SECONDS);
                client.setWriteTimeout(20, java.util.concurrent.TimeUnit.SECONDS);
                return client;
            }
        }));
    }
    
    public getTable(tableName: string): MobileServiceTable {
        return new MobileServiceTable(this._msClient.getTable(tableName));
    }
}