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
import * as common from "./table-common";
import * as utils from "../utils";
import { MobileServiceQuery } from "../query";

export * from "./table-common";

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
                    
                    resolve(utils.getJsObject(queryResult.items));
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
                this._msTable.insertCompletion(utils.getNativeObject(item), (result, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }

                    resolve(utils.getJsObject(result));
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
                this._msTable.updateCompletion(utils.getNativeObject(item), (result, error) => {
                    if (error) {
                        reject(new Error(error.localizedDescription));
                        return;
                    }

                    resolve(utils.getJsObject(result));
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
                this._msTable.deleteCompletion(utils.getNativeObject(item), (result, error) => {
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