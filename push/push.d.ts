declare module "nativescript-azure-mobile-apps/push" {
    import {MobileServiceClient} from "nativescript-azure-mobile-apps/client"
    export class MobileServicePush extends  java.lang.Object {
        constructor(client: MobileServiceClient);

        public register(pnsHandle: string, templates?: Object): void;
        public registerTemplate(pnsHandle: string, templateName: string, templateBody: string): void;
        public unregister(): void;
    }
}