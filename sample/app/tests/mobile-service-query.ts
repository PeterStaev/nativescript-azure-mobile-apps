/// <reference path="../../node_modules/nativescript-azure-mobile-apps/azure-mobile-apps.d.ts" />
import { MobileServiceClient, MobileServiceTable, MobileServiceQuery } from "nativescript-azure-mobile-apps";

mocha.setup({
    timeout: 110000
});

class TodoItem {
    public id: string;
    public text: string;
    public myNumber: number;
    public completed: boolean = false;
    public createdAt: Date
};

describe("MobileServiceQuery", () => {
    let client: MobileServiceClient;
    let table: MobileServiceTable;
    let testData: Array<TodoItem> = [];
    
    before((done) => {
        let promises: Array<Promise<TodoItem>> = [];
        let item: TodoItem;
        
        client = new MobileServiceClient("https://tangrainctest.azurewebsites.net");
        table = client.getTable("TodoItem");
        
        item = new TodoItem();
        item.text = "item1";
        item.myNumber = 1
        item.completed = false;
        testData.push(item);
        
        item = new TodoItem();
        item.text = "item2";
        item.myNumber = 2
        item.completed = true;
        testData.push(item);

        for (let loop = 0; loop < testData.length; loop++) {
            promises.push(table.insert(testData[loop]));
        }
        
        Promise.all(promises).then((results) => {
            testData = results;
            done();
        }, done);
    });
    
    describe("eq()", () => {

        it("Should filter by boolean", (done) => {
            table.where().field("completed").eq(true).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by string", (done) => {
            table.where().field("text").eq("item1").read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by number", (done) => {
            table.where().field("myNumber").eq(1).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by Date", (done) => {
            table.where().field("createdAt").eq(testData[0].createdAt).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });
    });
    
    after((done) => {
        let promises: Array<Promise<TodoItem>> = [];

        for (let loop = 0; loop < testData.length; loop++) {
            promises.push(table.deleteItem(testData[loop]));
        }
        Promise.all(promises).then(() => { done(); }, done);
    });
});
