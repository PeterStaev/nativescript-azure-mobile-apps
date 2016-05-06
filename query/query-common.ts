import * as definition from "nativescript-azure-mobile-apps/query";

export abstract class MobileServiceQuery implements definition.MobileServiceQuery {
    protected _msQuery;

    constructor(nativeValue: any) {
        this._msQuery = nativeValue;
    } 

    abstract read(): Promise<Array<any>>;
    
    abstract field(fieldName: string): MobileServiceQuery;
    abstract eq(value: string|number|boolean|Date): MobileServiceQuery;
}
