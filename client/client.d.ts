declare module "nativescript-azure-mobile-apps/client" {
    import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";
    
    export class MobileServiceClient {
        constructor (url: string);
        public getTable (tableName: string): MobileServiceTable;
    }
}