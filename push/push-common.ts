import * as definition from "nativescript-azure-mobile-apps/push";
import {MobileServiceClient} from "nativescript-azure-mobile-apps/client";

export abstract class MobileServicePush extends java.lang.Object implements definition.MobileServicePush {
    protected _msPush;
    protected _msClient;

    constructor(nativeValue: any) {
        super();
        this._msClient = nativeValue;
    }

    get nativeValue(): any {
        return this._msClient;
    }

    abstract register(pnsHandle: string, templates?: Object): void;
    abstract registerTemplate(pnsHandle: string, templateName: string, templateBody: string): void;
    abstract unregister(): void;
}