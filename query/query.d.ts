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
export class MobileServiceQuery {
    constructor(nativeValue: any);
    
    public read(): Promise<Array<any>>;
    
    public field(fieldName: string): this;
    public eq(value: string|number|boolean|Date): this;
    public ne(value: string|number|boolean|Date): this;
    public gt(value: string|number|Date): this;
    public ge(value: string|number|Date): this;
    public lt(value: number|Date): this;
    public le(value: number|Date): this;
    
    public startsWith(field: string, value: string): this;
    public endsWith(field: string, value: string): this;
    
    public and(): this;
    public or(): this;
    
    public orderBy(field: string, dir: SortDir): this;
    
    public skip(count: number): this;
    public top(count: number): this;
}

export enum SortDir {
    Asc,
    Desc
}