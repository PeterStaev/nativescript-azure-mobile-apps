declare module "nativescript-azure-mobile-apps/push" {
    export class MobileServicePush extends  java.lang.Object {
        public nativeValue: any; /* readonly */
        
        constructor(nativeValue: any);
              
        public register(pnsHandle: string, templates?: Object): void;
        public registerTemplate(pnsHandle: string, templateName: string, templateBody: string): void;
        public unregister(): void;
    }
}