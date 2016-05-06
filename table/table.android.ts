import * as common from "./table-common";
import * as utils from "../utils";
import { MobileServiceQuery } from "nativescript-azure-mobile-apps/query";

global.moduleMerge(common, exports);

export class MobileServiceTable extends common.MobileServiceTable {   
    public read<T>(): Promise<Array<T>> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msTable.execute();
                utils.futureToPromise(futureResult).then((result) => { resolve(utils.getJsObject(result)); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public insert<T>(item: T): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            try {
                let futureResult = this._msTable.insert(utils.getNativeObject(item));
                utils.futureToPromise(futureResult).then((result) => { resolve(utils.getJsObject(result)); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    public update<T> (item: T): Promise<T> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msTable.update(utils.getNativeObject(item));
                utils.futureToPromise(futureResult).then((result) => { resolve(utils.getJsObject(result)); }, reject);
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
                utils.futureToPromise(futureResult).then(() => { resolve(); }, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }
    
    public deleteItem<T>(item: T): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msTable.delete(utils.getNativeObject(item));
                utils.futureToPromise(futureResult).then(() => { resolve(); }, reject);
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
