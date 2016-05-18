declare module "nativescript-azure-mobile-apps/user" {

    export class MobileServiceUser {
        mAuthenticationToken: string;
        mUserId: string;
        
        constructor(o: { userId: string; });
    }
}