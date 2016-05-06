import * as types from "utils/types";

export function futureToPromise(future: any /* ListenableFuture */): Promise<any> {
    return new Promise((resolve, reject) => {
        com.google.common.util.concurrent.Futures.addCallback(future, new com.google.common.util.concurrent.FutureCallback({
            onSuccess: (result) => {
                resolve(result);
            }
            , onFailure: (t /* Throwable */) => {
                reject(new Error(t.getMessage()));
            }
        }));
    });
}

export function getNativeValueForComparison(value: string|number|boolean|Date): any {
    if (types.isNumber(value)) {
        // To my understanding Azure does not use the types strictly
        // So always use the "bigger" type
        if (value.toString().indexOf(".") >= 0) {
            return new java.lang.Double(<number>value);
        }
        else {
            return new java.lang.Long(<number>value);
        }
    }
    else {
        return value;
    }
}

export function getNativeObject(jsObject: any): any  { /* JsonObject */
    let parser = new com.google.gson.JsonParser();
    return parser.parse(JSON.stringify(jsObject)).getAsJsonObject();
}

export function getJsObject(jsonObject: any): any {
    let gson = new com.google.gson.Gson();
    return JSON.parse(gson.toJson(jsonObject));
}