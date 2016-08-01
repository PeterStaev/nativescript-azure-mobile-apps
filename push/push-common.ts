
import * as definition from "nativescript-azure-mobile-apps/push";
import {MobileServiceClient} from "nativescript-azure-mobile-apps/client"

export abstract class MobileServicePush extends java.lang.Object implements definition.MobileServicePush {
    protected _msPush;
    protected _msClient;
    protected _context;

    constructor(client: MobileServiceClient, context: android.content.Context) {
        super();
        this._msClient = client;
        this._context = context;
    }

    abstract register(pnsHandle: string, templates?: Object): void;
    abstract registerTemplate(pnsHandle: string, templateName: string, templateBody: string): void;
    abstract unregister(): void;
}