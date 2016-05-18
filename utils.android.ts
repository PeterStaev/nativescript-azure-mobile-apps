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
import * as types from "utils/types";
import {MobileServiceUser} from "nativescript-azure-mobile-apps/user";
import * as appSettings from "application-settings";

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

export function setCache(user: MobileServiceUser){
    appSettings.setString("mUserId", user.mUserId); // Set User ID as an application setting
    appSettings.setString("mUserTkn", user.mAuthenticationToken);
}

export function getCache(): MobileServiceUser {
    let mUserId = appSettings.getString("mUserId"); // retrieve User ID (if cached)
    let mUserTkn = appSettings.getString("mUserTkn"); // retrieve Auth token (if cached)
    if (mUserId === undefined || mUserTkn === undefined) {
        console.log("No Cached Values");
        return null; // if there aren't any cached values, return null
    }
    let id = {userId: mUserId};
    let user = new MobileServiceUser(id);
    user.mAuthenticationToken = mUserTkn;
    user.mUserId = mUserId;
    return user;
}