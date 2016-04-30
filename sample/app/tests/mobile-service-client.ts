/// <reference path="../../node_modules/nativescript-azure-mobile-apps/azure-mobile-apps.d.ts" />
import { MobileServiceClient, MobileServiceTable } from "nativescript-azure-mobile-apps";

describe("MobileServiceClient", () => {
    let client: MobileServiceClient;
    
    it("Should be created with valid URL", () => {
        client = new MobileServiceClient("https://tangrainctest.azurewebsites.net");
        assert.isTrue(client instanceof MobileServiceClient); 
    });
    
    it("Should return a table", () => {
        assert.isTrue(client.getTable("TodoItem") instanceof MobileServiceTable); 
    });
});