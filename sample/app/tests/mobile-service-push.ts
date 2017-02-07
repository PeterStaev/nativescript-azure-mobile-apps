import * as application from "application";
import { MobileServiceClient } from "nativescript-azure-mobile-apps/client";
let pushPlugin = require("nativescript-push-notifications");

let androidPushSettings = { senderID: "271351633466" };

mocha.setup({
    timeout: 110000
});

describe("MobileServicePush", () => {
    let client: MobileServiceClient;
    
    before(()  => {
        client = new MobileServiceClient("https://tangrainctest.azurewebsites.net");
    });

    it("Should register", (done) => {
        if (application.android) {
            pushPlugin.register(androidPushSettings, (data) => {
                client.push.register(data).then(done, done);
            }, done);
        }
        else if (application.ios) {
            // iOS Push Notifications do not work on Simulator!
            done();
        }
    });

    it("Should registerWithTemplate", (done) => {
        if (application.android) {
            pushPlugin.register(androidPushSettings, (data) => {
                client.push.registerWithTemplate(data, "TestTemplate", "{\"data\":{\"message\":\"$(param)\"}}").then(done, done);
            }, done);
        }
        else if (application.ios) {
            // iOS Push Notifications do not work on Simulator!
            done();
        }
    });

    it("Should unregister", (done) => {
        if (application.android) {
            pushPlugin.unregister(() => {
                client.push.unregister().then(done, done);
            }, done, androidPushSettings);
        }
        else if (application.ios) {
            // iOS Push Notifications do not work on Simulator!
            done();
        }
    });
});