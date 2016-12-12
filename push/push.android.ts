import * as common from "./push-common";

export class MobileServicePush extends common.MobileServicePush {
    public SENDER_ID: string = "<PROJECT_NUMBER>";

    constructor(nativeValue) {
        super(nativeValue);
        this._msPush = new com.microsoft.windowsazure.mobileservices.notifications.MobileServicePush(nativeValue, app.android.current);
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


class MyHandler extends com.microsoft.windowsazure.notifications.NotificationsHandler {
    public NOTIFICATION_ID: number = 1;
    public _msClient;

    constructor(msClient: MSClient) {
        super();
        this._msClient = msClient;
    }

    public onRegistered(gcmRegistrationId: string) {
        super.onRegistered(this, gcmRegistrationId);

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
    public onReceive(bundle: any) {
        let msg: string = bundle.getString("message");

        let contentIntent = android.app.PendingIntent.getActivity(app.android.context,
            0, // requestCode
            new android.content.Intent(app.android.context, ToDoActivity.class),
            0); // flags

        let notification: android.app.Notification = new android.support.v4.app.NotificationCompat.Builder(app.android.context)
            .setSmallIcon(R.drawable.ic_launcher)
            .setContentTitle("Notification Hub Demo")
            .setStyle(new android.support.v4.app.NotificationCompat.BigTextStyle().bigText(msg))
            .setContentText(msg)
            .setContentIntent(contentIntent)
            .build();

        let notificationManager: android.app.NotificationManager = new android.app.NotificationManager;
        app.android.context.getSystemService(app.android.context.NOTIFICATION_SERVICE);
        notificationManager.notify(this.NOTIFICATION_ID, notification);
    }
}