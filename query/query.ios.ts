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

global.moduleMerge(common, exports);

export class MobileServiceQuery extends common.MobileServiceQuery {
    protected _msQuery: MSQuery; // Redeclaration for typing info
    private _filters: Array<string> = [];
    private _filterArgs: Array<any> = [];
    
    public read(): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            try {
                this._msQuery.predicate = NSPredicate.predicateWithFormatArgumentArray(this._filters.join(" && "), utils.getNativeObject(this._filterArgs));
                this._msQuery.readWithCompletion((queryResult, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }
                    
                    resolve(utils.getJsObject(queryResult.items));
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
        this._filterArgs.push(utils.getNativeValueForComparison(value));
        this._filters.push("(%K == %@)");

        return this;
    }
        
    public ne(value: string|number|boolean|Date): MobileServiceQuery {
        this._filterArgs.push(utils.getNativeValueForComparison(value));
        this._filters.push("(%K != %@)");

        return this;
    }

    public gt(value: string|number|Date): MobileServiceQuery {
        this._filterArgs.push(utils.getNativeValueForComparison(value));
        this._filters.push("(%K > %@)");

        return this;
    }
}