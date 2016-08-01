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
import {MobileServiceClient} from "nativescript-azure-mobile-apps/client";

export class MobileServicePush extends common.MobileServicePush {
    protected _msPush: MSPush;

    constructor(client: MobileServiceClient) {
        super(client);
        this._msPush = new MSPush({client});
    }

    public register(pnsHandle: string, templates?: Object) {
        return null;
    }

    public registerTemplate(pnsHandle: string, templateName: string, templateBody: string) {
        return null;
    }

    public unregister() {
        return null;
    }
}