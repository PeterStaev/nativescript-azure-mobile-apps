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
export enum AuthenticationProvider {
    AzureActiveDirectory, 
    Google, 
    Facebook, 
    Twitter, 
    MicrosoftAccount
}

export class MobileServiceUser {             
    public userId: string;
    public authenticationToken: string;
    public nativeValue: any; /* readonly */
    
    public static clearCachedAuthenticationInfo(): void;    
    public static getFromCache(): MobileServiceUser;
    
    constructor(nativeValue: any, portalUrl: string);    
    
    public getProviderCredentials(): Promise<ProviderCredentials>;    
}   

export class ProviderCredentials {
    public userId: string;
    public claims: { [type: string]: string };
    public accessToken: string;
    public accessTokenSecret: string;
    public expiresOn: Date;
    public refreshToken: string;
    public idToken: string;
    public authenticationToken: string;
    public provider: AuthenticationProvider;
    
    public givenName: string; /* readonly */
    public surname: string; /* readonly */
    public name: string; /* readonly */
}
