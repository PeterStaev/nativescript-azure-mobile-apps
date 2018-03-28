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
import * as definition from "../query";

export abstract class MobileServiceQuery implements definition.MobileServiceQuery {
    protected _msQuery;

    constructor(nativeValue: any) {
        this._msQuery = nativeValue;
    } 

    abstract read(): Promise<Array<any>>;
    
    abstract field(fieldName: string): this;
    abstract eq(value: string|number|boolean|Date): this;
    abstract ne(value: string|number|boolean|Date): this;
    abstract gt(value: string|number|Date): this;
    abstract ge(value: string|number|Date): this;
    abstract lt(value: number|Date): this;
    abstract le(value: number|Date): this;
    
    abstract startsWith(field: string, value: string): this;
    abstract endsWith(field: string, value: string): this;
    
    abstract and(): this;
    abstract or(): this;
    
    abstract orderBy(field: string, dir: definition.SortDir): this;
    
    abstract skip(count: number): this;
    abstract top(count: number): this;
}

export enum SortDir {
    Asc = 0, 
    Desc = 1
}