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

import * as common from "./azure-mobile-apps-common";
 
export class MobileServiceClient extends common.MobileServiceClient {
    protected _msClient: MSClient; // Redeclaration for typing info
    
    constructor(url: string) {
        super(url);
        this._msClient = MSClient.clientWithApplicationURLString(url);
    }
    
    public getTable(tableName: string): MobileServiceTable {
        return new MobileServiceTable(this._msClient.tableWithName(tableName));
    }
}

export class MobileServiceTable extends common.MobileServiceTable {   
    protected _msTable: MSTable; // Redeclaration for typing info
    
    public read<T>(): Promise<Array<T>> {
        return new Promise((resolve, reject) => {
            try {
                this._msTable.readWithCompletion((queryResult, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }
                    
                    resolve(getJsObject(queryResult.items));
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public insert<T>(item: T): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            try {
                this._msTable.insertCompletion(getNativeObject(item), (result, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }

                    resolve(getJsObject(result));
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }

    public update<T> (item: T): Promise<T> {
        return new Promise((resolve, reject) => {
            try {
                this._msTable.updateCompletion(getNativeObject(item), (result, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }

                    resolve(getJsObject(result));
                });
            }
            catch (e) {
                reject(e);
            }            
        });
    }
    
    public deleteById(id: string|number): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this._msTable.deleteWithIdCompletion(id, (result, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }
                    
                    resolve();
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public deleteItem<T>(item: T): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this._msTable.deleteCompletion(getNativeObject(item), (result, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }

                    resolve();
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public where(): MobileServiceQuery {
        return new MobileServiceQuery(this._msTable.query());
    }
}

export class MobileServiceQuery extends common.MobileServiceQuery {
    protected _msQuery: MSQuery; // Redeclaration for typing info
    private _filters: Array<string> = [];
    private _filterArgs: Array<any> = [];
    
    public read(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            try {
                this._msQuery.predicate = NSPredicate.predicateWithFormatArgumentArray(this._filters.join(" && "), getNativeObject(this._filterArgs));
                this._msQuery.readWithCompletion((queryResult, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }
                    
                    resolve(getJsObject(queryResult.items));
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public field(fieldName: string): MobileServiceQuery {
        this._filterArgs.push(fieldName);
        return this;
    }
    
    public eq(value: string|number|boolean|Date): MobileServiceQuery {
        this._filterArgs.push(getNativeValueForComparison(value));
        this._filters.push("(%K == %@)");

        return this;
    }
}

function getNativeValueForComparison(value: string|number|boolean|Date): any {
    if (value instanceof Date) {
        // There is a problem with {N} wrapping NSDate so we just use ISO String to filter
        return (<Date>value).toISOString();
    }

    return value;
}

function getNativeObject(object: any): any {
    if (object instanceof Array) {
        return getNSArrayFromJsArray(object);
    }
    
    if (object !== null && object !== undefined && typeof object === "object") {
        return getNSDictionaryFromJsObject(object);
    }
    
    return object;
}

function getNSArrayFromJsArray(array: Array<any>): NSArray {
    let result = new NSMutableArray();
    
    for (let loop = 0; loop < array.length; loop++) {
        result.addObject(getNativeObject(array[loop]));
    }
    
    return result;
}

function getNSDictionaryFromJsObject(object: Object): NSDictionary {
    let result = new NSMutableDictionary();
    
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.setValueForKey(getNativeObject(object[key]), key);
        }
    }
    
    return result;
}

function getJsObject(object: any): any {
    if (object instanceof NSDictionary) {
        return getJsObjectFromNSDictionary(object);
    }
    
    if (object instanceof NSArray) {
        return getJsArrayFromNSArray(object);
    }
    
    return object;
}

function getJsArrayFromNSArray(array: NSArray): Array<Object> {
    let result = [];
    
    for (let loop = 0; loop < array.count; loop ++) {
        result.push(getJsObject(array.objectAtIndex(loop)));
    }
    
    return result;
}

function getJsObjectFromNSDictionary(dictionary: NSDictionary): Object {
    let keys = dictionary.allKeys;
    let result = {};
    
    for (let loop = 0; loop < keys.count; loop++) {
        let key = keys[loop];
        let item = dictionary.objectForKey(key);
        
        result[key] = getJsObject(item);
    }
    
    return result;
}