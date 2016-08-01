import * as common from "./push-common";

export class MobileServicePush extends common.MobileServicePush {
    protected _msPush: MSPush;

    constructor(nativeValue) {
        super(nativeValue);
        this._msPush = new MSPush({client: nativeValue});
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