declare module "nativescript-azure-mobile-apps/auth" {    
    export class MobileServiceAuth {
       public login<T>(provider: string): Promise<any>; 
    }
}