import * as definition from "nativescript-azure-mobile-apps/client";
import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";

export abstract class MobileServiceClient implements definition.MobileServiceClient {
    protected _msClient;
    protected _url;
    
    constructor(url: string) {
        this._url = url;
    }

    abstract getTable(tableName: string): MobileServiceTable;
}