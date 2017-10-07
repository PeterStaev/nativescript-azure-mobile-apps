import "./bundle-config";

import * as application from "application";

require("nativescript-azure-mobile-apps/client").MobileServiceClient.configureClientAuthAppDelegate();

application.start({ moduleName: "main-page" });
