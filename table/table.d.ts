declare module "nativescript-azure-mobile-apps/table" {
    import { MobileServiceQuery } from "nativescript-azure-mobile-apps/query";
        
    export class MobileServiceTable {
        constructor(nativeValue: any);
        
        public read<T>(): Promise<Array<T>>
        public insert<T> (item: T): Promise<T>;
        public update<T> (item: T): Promise<T>;
        public deleteById(id: string|number): Promise<any>;
        public deleteItem<T>(item: T): Promise<any>;
        
        public where(): MobileServiceQuery;
    }   
}