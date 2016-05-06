import { MobileServiceClient } from "nativescript-azure-mobile-apps/client";
import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";
import { MobileServiceQuery } from "nativescript-azure-mobile-apps/query";

mocha.setup({
    timeout: 110000
});

class TodoItem {
    public id: string;
    public text: string;
    public completed: boolean = false;
};

describe("MobileServiceTable", () => {
    let client: MobileServiceClient;
    let table: MobileServiceTable;
    let item: TodoItem;
    
    before(() => {
        client = new MobileServiceClient("https://tangrainctest.azurewebsites.net");
        table = client.getTable("TodoItem");
        
        item = new TodoItem();
        item.text = "Test run";
    });
    
    it("Should insert a new item", (done) => {
        table.insert(item).then((updatedItem) => {
            item = updatedItem;
            
            assert.isDefined(item.id);
            assert.isNotNull(item.id);
            done();
        }, done);
    });
    
    it("Should update an existing item", (done) => {
        item.completed = true;
        
        table.update(item).then((updatedItem) => {
            item = updatedItem;
            
            assert.isTrue(item.completed);
            done();
        }, done);
    });
    
    it("Should return all items", (done) => {
        table.read<TodoItem>().then((results) => {
            assert.isAbove(results.length, 0);
            done();
        }, done);
    });
    
    it("Should delete an item", (done) => {
        table.deleteItem(item).then(done, done);
    });
    
    it("Should delete an item by ID", (done) => {
        let newItem = new TodoItem();
        newItem.text = "Test Run 2nd item";
        
        table.insert(newItem).then((updatedItem) => {
            table.deleteById(updatedItem.id).then(done, done);
        }, done);
    });
    
    it("Should return query on where()", () => {
        assert.isTrue(table.where() instanceof MobileServiceQuery);
    });
});