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
import * as definition from "../client";
import { MobileServiceTable } from "../table";
import { MobileServiceUser, AuthenticationProvider } from "../user";
import { MobileServicePush } from "../push";

export abstract class MobileServiceClient implements definition.MobileServiceClient {
    protected _msClient;
    protected _url;

    public user: MobileServiceUser;
    public push: MobileServicePush;

    public static configureClientAuthAppDelegate(): void {
        // nothing to do by default
    }

    constructor(url: string) {
        this._url = url;
    }

    abstract getTable(tableName: string): MobileServiceTable;
    abstract login(provider: AuthenticationProvider, urlScheme?: string): Promise<MobileServiceUser>;
    abstract loginFromCache(): boolean;
}
