import * as common from "./push-common";

export class MobileServicePush extends common.MobileServicePush {
    protected _msPush: MSPush;

    constructor(nativeValue) {
        super(nativeValue);
        this._msPush = new MSPush({ client: nativeValue });
    }

    public register(pnsHandle: string, templates?: Object) {
        return null;
    }

    public registerTemplate(pnsHandle: string, templateName: string, templateBody: string) {
        /*var template = new iOSTemplate;
        template = { templateName: { "body": templateBody } }
        // NSData should contain device Token? http://azure.github.io/azure-mobile-services/iOS/v3/Classes/MSPush.html#//api/name/registerDeviceToken:template:completion:
        this._msClient.push.registerDeviceToken(new NSData(), template, function (error) {
            if (error) {
                console.log("ERROR " + error);
            }
        })*/
    }

    public unregister() {
        return null;
    }
}

class IosTemplate { "templateName": { "body": { "aps": { "alert": "$(message)" } } }; }