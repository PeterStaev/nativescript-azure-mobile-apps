import * as common from "./table-common";
import * as utils from "../utils";
import { MobileServiceQuery } from "nativescript-azure-mobile-apps/query";

global.moduleMerge(common, exports);

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