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
import * as common from "./client-common";
import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";
import { MobileServiceUser } from "nativescript-azure-mobile-apps/user";

export class MobileServiceClient extends common.MobileServiceClient {
    protected _msClient: MSClient; // Redeclaration for typing info

    constructor(url: string) {
        super(url);
        this._msClient = MSClient.clientWithApplicationURLString(url);
    }

    public getTable(tableName: string): MobileServiceTable {
        return new MobileServiceTable(this._msClient.tableWithName(tableName));
    }
    public getUser(provider: string): Promise<MobileServiceUser> {
        return new Promise((resolve, reject) => {
            try {
                
                console.log("ios trying");
            }
            catch (e) {
                reject(e);
            }
        });
    }
}