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

import * as definition from "nativescript-azure-mobile-apps";

export abstract class MobileServiceClient implements definition.MobileServiceClient {
    protected _msClient;
    protected _url;
    
    constructor(url: string) {
        this._url = url;
    }

    abstract getTable(tableName: string): MobileServiceTable;
}

export abstract class MobileServiceTable implements definition.MobileServiceTable {
    protected _msTable;

    constructor(nativeValue: any) {
        this._msTable = nativeValue;
    } 
    
    abstract read<T>(): Promise<Array<T>>
    abstract insert<T> (item: T): Promise<T>;
    abstract update<T> (item: T): Promise<T>;
    abstract deleteById(id: string|number): Promise<any>;
    abstract deleteItem<T>(item: T): Promise<any>;
    
    abstract where(): MobileServiceQuery;
}

export abstract class MobileServiceQuery implements definition.MobileServiceQuery {
    protected _msQuery;

    constructor(nativeValue: any) {
        this._msQuery = nativeValue;
    } 

    abstract read(): Promise<any>;
    
    abstract field(fieldName: string): MobileServiceQuery;
    abstract eq(value: string|number|boolean|Date): MobileServiceQuery;
}
