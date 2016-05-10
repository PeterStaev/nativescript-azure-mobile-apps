import * as definition from "nativescript-azure-mobile-apps/auth";

export abstract class MobileServiceAuth implements definition.MobileServiceAuth {
    protected _msClient;
    protected _provider;
    
    constructor(provider: string) {
        this._provider = provider;
    }
    
    abstract login(provider: string);
}