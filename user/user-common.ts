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
import * as http from "http";

export enum AuthenticationProvider {
    AzureActiveDirectory = 0, 
    Google = 1, 
    Facebook = 2, 
    Twitter = 3, 
    MicrosoftAccount = 4
}

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
    
    public getProviderCredentials(): Promise<ProviderCredentials> {
        return new Promise((resolve, reject) => {
            http.getJSON({
                method: "GET", 
                url: `${this._url}/.auth/me`, 
                headers: { "x-zumo-auth": this.authenticationToken }
            }).then((result: Array<Object>) => {
                if (result.length > 0) {
                    resolve(new ProviderCredentials(result[0]));
                }
                else {
                    reject(new Error("Missing Provider Credentials!"));
                }
            }, reject);
        });
    }
}

let providerMap = [];
providerMap[AuthenticationProvider.AzureActiveDirectory] = "aad";
providerMap[AuthenticationProvider.Google] = "google";
providerMap[AuthenticationProvider.Facebook] = "facebook";
providerMap[AuthenticationProvider.MicrosoftAccount] = "microsoftaccount";
providerMap[AuthenticationProvider.Twitter] = "twitter";

export class ProviderCredentials implements definition.ProviderCredentials {
    public userId: string;
    public claims: { [type: string]: string } = {};
    public accessToken: string;
    public accessTokenSecret: string = null;
    public expiresOn: Date = null;
    public refreshToken: string = null;
    public idToken: string = null;
    public authenticationToken: string = null;
    public provider: definition.AuthenticationProvider;
    
    get givenName(): string {
        return this.claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"];
    }
    get surname(): string {
        return this.claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname"];
    }
    get name(): string {
        /* tslint:disable:no-string-literal */
        return this.claims["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] || this.claims["name"];
        /* tslint:enable */
    }
    
    constructor(serviceResponse: any) {
        this.userId = serviceResponse.user_id;
        this.accessToken = serviceResponse.access_token;
        this.provider = providerMap.indexOf(serviceResponse.provider_name);
        
        if (serviceResponse.access_token_secret) {
            this.accessTokenSecret = serviceResponse.access_token_secret;
        }
        if (serviceResponse.expires_on) {
            this.expiresOn = new Date(serviceResponse.expires_on);
        }
        if (serviceResponse.refresh_token) {
            this.refreshToken = serviceResponse.refresh_token;
        }
        if (serviceResponse.id_token) {
            this.idToken = serviceResponse.id_token;
        }
        if (serviceResponse.authentication_token) {
            this.authenticationToken = serviceResponse.authentication_token;
        }
        
        (<Array<{ typ: string, val: string }>>serviceResponse.user_claims).forEach((item) => { this.claims[item.typ] = item.val; });
    }
}