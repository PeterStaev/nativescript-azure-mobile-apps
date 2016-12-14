
import * as definition from "nativescript-azure-mobile-apps/push";
import {MobileServiceClient} from "nativescript-azure-mobile-apps/client";

export abstract class MobileServicePush extends java.lang.Object implements definition.MobileServicePush {
    protected _msPush;
    protected _msClient;

    constructor(client: MobileServiceClient) {
        super();
        this._msClient = client;
    }

    abstract register(pnsHandle: string, templates?: Object): void;
    abstract registerTemplate(pnsHandle: string, templateName: string, templateBody: string): void;
    abstract unregister(): void;
}