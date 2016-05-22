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
import * as definition from "nativescript-azure-mobile-apps/user";
import * as applicationSettings from "application-settings";

export class MobileServiceUser implements definition.MobileServiceUser {
    protected static USER_ID_CACHE_KEY = "nativescript-azure-mobile-apps.user.userId";
    protected static AUTHENTICATION_TOKEN_CACHE_KEY = "nativescript-azure-mobile-apps.user.authenticationToken";
    protected static PORTAL_URL_CACHE_KEY = "nativescript-azure-mobile-apps.user.portalUrl";

    protected _msUser;
    protected _url: string;
    
    public userId: string;
    public authenticationToken: string;
    get nativeValue(): any {
        return this._msUser;
    }
    
    public static clearCachedAuthenticationInfo() {
        applicationSettings.remove(MobileServiceUser.USER_ID_CACHE_KEY);
        applicationSettings.remove(MobileServiceUser.AUTHENTICATION_TOKEN_CACHE_KEY);
        applicationSettings.remove(MobileServiceUser.PORTAL_URL_CACHE_KEY);
    }
    
    public static getFromCache(): MobileServiceUser {
        // Abstract 
        return null;
    }
    
    constructor(nativeValue: any, portalUrl: string) {
        this._msUser = nativeValue; 
        this._url = portalUrl;
    }
    
    protected _cacheAuthenticationInfo() {
        applicationSettings.setString(MobileServiceUser.USER_ID_CACHE_KEY, this.userId);
        applicationSettings.setString(MobileServiceUser.AUTHENTICATION_TOKEN_CACHE_KEY, this.authenticationToken);
        applicationSettings.setString(MobileServiceUser.PORTAL_URL_CACHE_KEY, this._url);
    }
}