import * as common from "./push-common";
import * as application from "application";

export class MobileServicePush extends common.MobileServicePush {
    constructor(nativeValue) {
        super(nativeValue);
        this._msPush = new com.microsoft.windowsazure.mobileservices.notifications.MobileServicePush(nativeValue, application.android.currentContext);
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

/*export class MyHandler extends com.microsoft.windowsazure.notifications.NotificationsHandler {
    public static NOTIFICATION_ID: number = 1;

    public onRegistered(gcmRegistrationId: string) {

        //super(application.android.currentContext, gcmRegistrationId);
        return new Promise((resolve, reject) => {
            try {
                this._msClient.getPush().register(gcmRegistrationId);
                return null;
            }
            catch (e) {
                reject(e);
            }
        });
    }
}*/