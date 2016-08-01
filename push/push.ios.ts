
import * as common from "./push-common";
//import {MobileServiceClient} from "nativescript-azure-mobile-apps/client";

export class MobileServicePush extends common.MobileServicePush {
    protected _msPush: MSPush;

    constructor(client) {
        super(client);
        this._msPush = new MSPush({client});
    }

    public register(pnsHandle: string, templates?: Object) {
        return null;
    }

    public registerTemplate(pnsHandle: string, templateName: string, templateBody: string) {
        return null;
    }

    public unregister() {
        return null;
    }
}