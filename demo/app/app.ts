import "./bundle-config";

import * as application from "application";

// This needs to be first as we override the whole app delegate!
// Needed only if you are using authentication. 
require("nativescript-azure-mobile-apps/client").MobileServiceClient.configureClientAuthAppDelegate();

require("nativescript-plugin-firebase");

application.start({ moduleName: "main-page" });
