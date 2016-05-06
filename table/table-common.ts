
import * as definition from "nativescript-azure-mobile-apps/table";
import { MobileServiceQuery } from "nativescript-azure-mobile-apps/query";

export abstract class MobileServiceTable implements definition.MobileServiceTable {
    protected _msTable;

    constructor(nativeValue: any) {
        this._msTable = nativeValue;
    } 
    
    abstract read<T>(): Promise<Array<T>>
    abstract insert<T> (item: T): Promise<T>;
    abstract update<T> (item: T): Promise<T>;
    abstract deleteById(id: string|number): Promise<any>;
    abstract deleteItem<T>(item: T): Promise<any>;
    
    abstract where(): MobileServiceQuery;
}