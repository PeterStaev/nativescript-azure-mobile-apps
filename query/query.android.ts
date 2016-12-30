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
import * as common from "./query-common";
import * as utils from "../utils";
import * as definition from "nativescript-azure-mobile-apps/query";

global.moduleMerge(common, exports);

export class MobileServiceQuery extends common.MobileServiceQuery {
    public read(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msQuery.execute();
                utils.futureToPromise(futureResult).then((result) => { resolve(utils.getJsObject(result)); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public field(fieldName: string): this {
        this._msQuery.field(fieldName);
        
        return this;
    }
    
    public eq(value: string|number|boolean|Date): this {
        this._msQuery.eq(utils.getNativeValueForComparison(value));
        
        return this;
    }
    
    public ne(value: string|number|boolean|Date): this {
        this._msQuery.ne(utils.getNativeValueForComparison(value));
        
        return this;
    }
    
    public gt(value: string|number|Date): this {
        this._msQuery.gt(utils.getNativeValueForComparison(value));
        
        return this;
    }
    
    public ge(value: string|number|Date): this {
        this._msQuery.ge(utils.getNativeValueForComparison(value));
        
        return this;
    }
    
    public lt(value: number|Date): this {
        this._msQuery.lt(utils.getNativeValueForComparison(value));
        
        return this;
    }
    
    public le(value: number|Date): this {
        this._msQuery.le(utils.getNativeValueForComparison(value));
        
        return this;
    }
    
    public startsWith(field: string, value: string): this {
        this._msQuery.startsWith(field, value);
        
        return this;
    }
    
    public endsWith(field: string, value: string): this {
        this._msQuery.endsWith(field, value);
        
        return this;
    }
    
    public and(): this {
        this._msQuery.and();
        
        return this;
    }
    
    public or(): this {
        this._msQuery.or();
        
        return this;
    }
    
    public orderBy(field: string, dir: definition.SortDir): this {
        let nativeDirection = 
                dir === definition.SortDir.Asc ? 
                com.microsoft.windowsazure.mobileservices.table.query.QueryOrder.Ascending :
                com.microsoft.windowsazure.mobileservices.table.query.QueryOrder.Descending;
        this._msQuery.orderBy(field, nativeDirection);
        
        return this;
    }
    
    public skip(count: number): this {
        this._msQuery.skip(count);
        
        return this;
    }
    
    public top(count: number): this {
        this._msQuery.top(count);
        
        return this;
    }
}
