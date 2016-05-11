import * as definition from "nativescript-azure-mobile-apps/user";

export abstract class MobileServiceUser implements definition.MobileServiceUser {
    
    abstract setUserId(userId: string): void;
    abstract setAuthenticationToken(authenticationToken: string): void;
    abstract getUserId(): string;
    abstract getAuthenticationToken(): string;
}