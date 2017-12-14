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
import * as application from "application";

import * as common from "./push-common";
import * as utils from "../utils";

export * from "./push-common";

const PUSH_PLATFORM = "gcm";

export class MobileServicePush extends common.MobileServicePush {   
    protected _msPush: com.microsoft.windowsazure.mobileservices.notifications.MobileServicePush;

    get installationId(): string {
        return com.microsoft.windowsazure.mobileservices.MobileServiceApplication.getInstallationId(application.android.currentContext);
    }
    
    public register(registrationId: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const futureResult = this._msPush.register(registrationId);
                utils.futureToPromise(futureResult).then(resolve, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }

    public registerWithTemplate(registrationId: string, templateName: string, templateBody: string): Promise<any> {
        return this.registerWithTagsAndTemplate(
            registrationId,
            null,
            templateName,
            templateBody,
        );
    }
    
    public registerWithTags(registrationId: string, tags: string[]): Promise<any> {
        return this.registerWithTagsAndTemplate(
            registrationId,
            tags,
            null,
            null,
        );
    }
    
    public registerWithTagsAndTemplate(registrationId: string, tags: string[], templateName: string, templateBody: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                let tagsAsList: java.util.List<string> = null;
                let templates: java.util.HashMap<string, com.microsoft.windowsazure.mobileservices.notifications.InstallationTemplate> = null;

                if (tags && tags.length > 0) {
                    tagsAsList = java.util.Arrays.asList(tags);
                }

                if (templateName && templateBody) {
                    templates = new java.util.HashMap<string, com.microsoft.windowsazure.mobileservices.notifications.InstallationTemplate>();
                    templates.put(templateName, new com.microsoft.windowsazure.mobileservices.notifications.InstallationTemplate(templateBody, null));
                }

                const installation = new com.microsoft.windowsazure.mobileservices.notifications.Installation(
                    this.installationId,
                    PUSH_PLATFORM,
                    registrationId,
                    null,
                    tagsAsList,
                    templates,
                );
                const futureResult = this._msPush.register(installation);
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
                const futureResult = this._msPush.unregister();
                utils.futureToPromise(futureResult).then(resolve, reject);
            }
            catch (e) {
                reject(e);
            }
        });
    }    
}
