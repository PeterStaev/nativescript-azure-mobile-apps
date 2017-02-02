import * as application from "application";

// these lines are required for switching back to your app after logging in on iOS when using a url scheme
if (application.ios) {
  application.ios.delegate = require("nativescript-azure-mobile-apps/client/clientauth-app-delegate").ClientAuthAppDelegate;
}

application.start({ moduleName: "main-page" });
