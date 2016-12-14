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
declare module "nativescript-azure-mobile-apps/client" {
    import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";
    import { MobileServiceUser, AuthenticationProvider } from "nativescript-azure-mobile-apps/user";
    
    export class MobileServiceClient {
        public user: MobileServiceUser;

        constructor (url: string);
                
        public getTable (tableName: string): MobileServiceTable;
        public login(provider: AuthenticationProvider): Promise<MobileServiceUser>;
        public loginFromCache(): boolean;
        public setCurrentUser(user: MobileServiceUser): void;
    }
}