/*! *****************************************************************************
Copyright (c) 2016 Tangra Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */
import * as common from "./user-common";
import * as applicationSettings from "application-settings";
import {MobileServiceClient} from "nativescript-azure-mobile-apps/client";

global.moduleMerge(common, exports);

export class MobileServiceUser extends common.MobileServiceUser {   
    public static getFromCache(): MobileServiceUser {
        let userId  = applicationSettings.getString(common.MobileServiceUser.USER_ID_CACHE_KEY, null);
        let authenticationToken = applicationSettings.getString(common.MobileServiceUser.AUTHENTICATION_TOKEN_CACHE_KEY, null);
        let portalUrl = applicationSettings.getString(common.MobileServiceUser.PORTAL_URL_CACHE_KEY, null);
        
        if (userId === null || authenticationToken === null || portalUrl === null) {
            return null;
        }
        
        let nativeValue = new com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser(userId);
        nativeValue.setAuthenticationToken(authenticationToken);
        
        return new MobileServiceUser(nativeValue, portalUrl);
    }
    
    public static newUser(userId: string, client: MobileServiceClient) {
        var userObject = com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser(userId);
        client.setCurrentUser(userObject);
    }

    constructor(nativeValue: any, portalUrl: string) {
        super(nativeValue, portalUrl);
        
        if (nativeValue) {
            this.userId = nativeValue.getUserId();
            this.authenticationToken = nativeValue.getAuthenticationToken();
            this._cacheAuthenticationInfo();
        }
    }
}
