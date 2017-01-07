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
    protected _msPush: MSPush;

    public register(registrationId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this._msPush.registerDeviceTokenCompletion(utils.deviceTokenToNsData(registrationId), (error) => {
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

    public registerWithTemplate(registrationId: string, templateName: string, templateBody: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let jsonTemplate = {};

                jsonTemplate[templateName] = { body: JSON.parse(templateBody) };
                this._msPush.registerDeviceTokenTemplateCompletion(utils.deviceTokenToNsData(registrationId), utils.getNativeObject(jsonTemplate), (error) => {
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
    
    public unregister(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this._msPush.unregisterWithCompletion((error) => {
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
}
