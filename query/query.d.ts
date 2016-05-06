
declare module "nativescript-azure-mobile-apps/query" {
    export class MobileServiceQuery {
        constructor(nativeValue: any);
        
        public read(): Promise<Array<any>>;
        
        public field(fieldName: string): MobileServiceQuery;
        public eq(value: string|number|boolean|Date): MobileServiceQuery;
    }
}