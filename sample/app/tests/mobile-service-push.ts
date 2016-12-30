import * as application from "application";
import { MobileServiceClient } from "nativescript-azure-mobile-apps/client";
import { MobileServicePush } from "nativescript-azure-mobile-apps/push";
let pushPlugin = require("nativescript-push-notifications");

const FCM_SENDER_ID: string = "271351633466";

describe("MobileServicePush", () => {
    let client: MobileServiceClient;
    
    before(()  => {
        client = new MobileServiceClient("https://tangrainctest.azurewebsites.net");
    });

    it("Should register", (done) => {
        if (application.android) {
            pushPlugin.register({ senderID: FCM_SENDER_ID }, (data) => {
                client.push.register(data).then(done, done);
            }, done);
        }
        else if (application.ios) {
            // TODO
            done();
        }
    });

    it("Should registerWithTemplate", (done) => {
        if (application.android) {
            pushPlugin.register({ senderID: FCM_SENDER_ID }, (data) => {
                client.push.registerWithTemplate(data, "TestTemplate", "{\"data\":{\"message\":\"$(param)\"}}").then(done, done);
            }, done);
        }
        else if (application.ios) {
            // TODO
            done();
        }
    });

    it("Should unregister", (done) => {
        if (application.android) {
            pushPlugin.unregister(() => {
                client.push.unregister().then(done, done);
            }, done, { senderID: FCM_SENDER_ID });
        }
        else if (application.ios) {
            // TODO
            done();
        }
    });
});