import * as common from "./auth-common";
 
export class MobileServiceAuth extends common.MobileServiceAuth {

    public login(provider: string): MobileServiceAuth {
        return new MobileServiceAuth(provider);
    }
}
