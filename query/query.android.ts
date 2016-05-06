
import * as common from "./query-common";
import * as utils from "../utils";

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
    
    public field(fieldName: string): MobileServiceQuery {
        this._msQuery.field(fieldName);
        return this;
    }
    
    public eq(value: string|number|boolean|Date): MobileServiceQuery {
        this._msQuery.eq(utils.getNativeValueForComparison(value));
        return this;
    }
}
