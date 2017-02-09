import { MobileServiceClient } from "nativescript-azure-mobile-apps/client";
import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";
import { MobileServicePush } from "nativescript-azure-mobile-apps/push";

describe("MobileServiceClient", () => {
    let client: MobileServiceClient;
    
    it("Should be created with valid URL", () => {
        client = new MobileServiceClient("https://tangrainctest.azurewebsites.net");
        assert.isTrue(client instanceof MobileServiceClient); 
    });
    
    it("Should return a table", () => {
        assert.isTrue(client.getTable("TodoItem") instanceof MobileServiceTable); 
    });

    it("Should init a push object", () => {
        assert.isTrue(client.push instanceof MobileServicePush); 
    });    
});