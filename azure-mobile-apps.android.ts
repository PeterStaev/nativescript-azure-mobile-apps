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
import * as application from "application";
import * as types from "utils/types";
 
export class MobileServiceClient extends common.MobileServiceClient {
    constructor(url: string) {
        super(url);
        this._msClient = new com.microsoft.windowsazure.mobileservices.MobileServiceClient(url, application.android.currentContext);
        this._msClient.setAndroidHttpClientFactory(new com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory({
            createOkHttpClient: () => {
                let client = new com.squareup.okhttp.OkHttpClient();
                client.setReadTimeout(20, java.util.concurrent.TimeUnit.SECONDS);
                client.setWriteTimeout(20, java.util.concurrent.TimeUnit.SECONDS);
                return client;
            }
        }));
    }
    
    public getTable(tableName: string): MobileServiceTable {
        return new MobileServiceTable(this._msClient.getTable(tableName));
    }
}

export class MobileServiceTable extends common.MobileServiceTable {   
    public read<T>(): Promise<Array<T>> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msTable.execute();
                futureToPromise(futureResult).then((result) => { resolve(<Array<T>>getJsObjectFromJsonObject(result)); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public insert<T>(item: T): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            try {
                let futureResult = this._msTable.insert(getJsonObjectFromJsObject(item));
                futureToPromise(futureResult).then((result) => { resolve(<T>getJsObjectFromJsonObject(result)); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    public update<T> (item: T): Promise<T> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msTable.update(getJsonObjectFromJsObject(item));
                futureToPromise(futureResult).then((result) => { resolve(<T>getJsObjectFromJsonObject(result)); }, reject);
            }
            catch (e) {
                reject(e);
            }            
        });
    }
    
    public deleteById(id: string|number): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msTable.delete(id);
                futureToPromise(futureResult).then(() => { resolve(); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public deleteItem<T>(item: T): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msTable.delete(getJsonObjectFromJsObject(item));
                futureToPromise(futureResult).then(() => { resolve(); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public where(): MobileServiceQuery {
        return new MobileServiceQuery(this._msTable.where());
    }
}

export class MobileServiceQuery extends common.MobileServiceQuery {
    public read(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msQuery.execute();
                futureToPromise(futureResult).then((result) => { resolve(getJsObjectFromJsonObject(result)); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public field(fieldName: string): MobileServiceQuery {
        this._msQuery.field(fieldName);
        return this;
    }
    
    public eq(value: string|number|boolean|Date): MobileServiceQuery{
        this._msQuery.eq(getNativeValueForComparison(value));
        return this;
    }
}

function getNativeValueForComparison(value: string|number|boolean|Date): any {
    if (types.isNumber(value)) {
        // To my understanding Azure does not use the types strictly
        // So always use the "bigger" type
        if (value.toString().indexOf(".") >= 0) {
            return new java.lang.Double(<number>value);
        }
        else {
            return new java.lang.Long(<number>value);
        }
    }
    else {
        return value;
    }
}

function futureToPromise(future: any /* ListenableFuture */): Promise<any> {
    return new Promise((resolve, reject) => {
        com.google.common.util.concurrent.Futures.addCallback(future, new com.google.common.util.concurrent.FutureCallback({
            onSuccess: (result) => {
                resolve(result);
            }
            , onFailure: (t /* Throwable */) => {
                reject(new Error(t.getMessage()));
            }
        }));
    });
}

function getJsonObjectFromJsObject(jsObject: Object): any  { /* JsonObject */
    let parser = new com.google.gson.JsonParser();
    return parser.parse(JSON.stringify(jsObject)).getAsJsonObject();
}

function getJsObjectFromJsonObject(jsonObject): Object {
    let gson = new com.google.gson.Gson();
    return JSON.parse(gson.toJson(jsonObject));
}