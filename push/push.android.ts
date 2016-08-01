import * as common from "./push-common";
import * as utils from "../utils";
import {MobileServiceClient} from "nativescript-azure-mobile-apps/client";
import * as application from "application";

export class MobileServicePush extends common.MobileServicePush {
    constructor(client: MobileServiceClient) {
        super(client);
        this._msPush = new com.microsoft.windowsazure.mobileservices.notifications.MobileServicePush(client, application.android.currentContext)
    }

    public register(pnsHandle: string, templates?: Object) {
        if (templates !== undefined) {
            return this._msPush.register(pnsHandle, templates);
        } else {
            return this._msPush.register(pnsHandle);
        }        
    }

    public registerTemplate(pnsHandle: string, templateName: string, templateBody: string) {
        return this._msPush.registerTemplate(pnsHandle, templateName, templateBody);
    }

    public unregister() {
        return this._msPush.unregister();
    }
}
