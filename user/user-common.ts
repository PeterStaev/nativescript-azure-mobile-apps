import * as definition from "nativescript-azure-mobile-apps/user";

export abstract class MobileServiceUser implements definition.MobileServiceUser {
    mAuthenticationToken: string;
    mUserId: string;
}