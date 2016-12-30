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
import * as common from "./push-common";
import * as utils from "../utils";

global.moduleMerge(common, exports);

export class MobileServicePush extends common.MobileServicePush {   
    public register(registrationId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msPush.register(registrationId);
                utils.futureToPromise(futureResult).then(resolve, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    public registerWithTemplate(registrationId: string, templateName: string, templateBody: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msPush.registerTemplate(registrationId, templateName, templateBody);
                utils.futureToPromise(futureResult).then(resolve, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }  
    
    public unregister(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let futureResult = this._msPush.unregister();
                utils.futureToPromise(futureResult).then(resolve, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }    
}
