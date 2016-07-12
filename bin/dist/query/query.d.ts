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
declare module "nativescript-azure-mobile-apps/query" {
    export class MobileServiceQuery {
        constructor(nativeValue: any);
        
        public read(): Promise<Array<any>>;
        
        public field(fieldName: string): MobileServiceQuery;
        public eq(value: string|number|boolean|Date): MobileServiceQuery;
        public ne(value: string|number|boolean|Date): MobileServiceQuery;
        public gt(value: string|number|Date): MobileServiceQuery;
        public ge(value: string|number|Date): MobileServiceQuery;
        public lt(value: number|Date): MobileServiceQuery;
        public le(value: number|Date): MobileServiceQuery;
        
        public startsWith(field: string, value: string): MobileServiceQuery;
        public endsWith(field: string, value: string): MobileServiceQuery;
        
        public and(): MobileServiceQuery;
        public or(): MobileServiceQuery;
        
        public orderBy(field: string, dir: SortDir): MobileServiceQuery;
        
        public skip(count: number): MobileServiceQuery;
        public top(count: number): MobileServiceQuery;
    }
    
    export enum SortDir {
        Asc,
        Desc
    }
}