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
}