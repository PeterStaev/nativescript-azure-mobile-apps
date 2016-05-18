declare module "nativescript-azure-mobile-apps/user" {

    export class MobileServiceUser {
        constructor(o: { userId: string; });

        setUserId(userId: string): void;
        setAuthenticationToken(authenticationToken: string): void;
        getUserId(): string;
        getAuthenticationToken(): string;
    }
}