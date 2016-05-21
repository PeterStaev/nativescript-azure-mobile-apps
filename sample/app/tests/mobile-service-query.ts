import { MobileServiceClient } from "nativescript-azure-mobile-apps/client";
import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";
import { MobileServiceQuery } from "nativescript-azure-mobile-apps/query";

mocha.setup({
    timeout: 110000
});

class TodoItem {
    public id: string;
    public text: string;
    public myNumber: number;
    public completed: boolean = false;
    public myDate: Date;
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
        item.myDate = new Date(2016, 0, 1);
        testData.push(item);
        
        item = new TodoItem();
        item.text = "item2";
        item.myNumber = 2
        item.completed = true;
        item.myDate = new Date(2016, 0, 2);
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
            table.where().field("myDate").eq(testData[0].myDate).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });
    });
    
    describe("ne()", () => {

        it("Should filter by boolean", (done) => {
            table.where().field("completed").ne(true).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by string", (done) => {
            table.where().field("text").ne("item1").read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by number", (done) => {
            table.where().field("myNumber").ne(1).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by Date", (done) => {
            table.where().field("myDate").ne(testData[0].myDate).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });
    });
    
    describe("gt()", () => {

        it("Should filter by string", (done) => {
            table.where().field("text").gt("item1").read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by number", (done) => {
            table.where().field("myNumber").gt(1).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by Date", (done) => {
            table.where().field("myDate").gt(testData[0].myDate).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });
    });

    describe("ge()", () => {

        it("Should filter by string", (done) => {
            table.where().field("text").ge("item1").read().then((results) => {
                assert.isAbove(results.length, 1);
                done();
            }, done);
        });

        it("Should filter by number", (done) => {
            table.where().field("myNumber").ge(1).read().then((results) => {
                assert.isAbove(results.length, 1);
                done();
            }, done);
        });

        it("Should filter by Date", (done) => {
            table.where().field("myDate").ge(testData[0].myDate).read().then((results) => {
                assert.isAbove(results.length, 1);
                done();
            }, done);
        });
    });
    
    describe("lt()", () => {

        it("Should filter by number", (done) => {
            table.where().field("myNumber").lt(2).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });

        it("Should filter by Date", (done) => {
            table.where().field("myDate").lt(testData[1].myDate).read().then((results) => {
                assert.isAbove(results.length, 0);
                done();
            }, done);
        });
    });

    describe("le()", () => {

        it("Should filter by number", (done) => {
            table.where().field("myNumber").le(2).read().then((results) => {
                assert.isAbove(results.length, 1);
                done();
            }, done);
        });

        it("Should filter by Date", (done) => {
            table.where().field("myDate").le(testData[1].myDate).read().then((results) => {
                assert.isAbove(results.length, 1);
                done();
            }, done);
        });
    });
    
    describe("startsWith()", () => {

        it("Should filter by string", (done) => {
            table.where().startsWith("text", "item").read().then((results) => {
                assert.isAbove(results.length, 1);
                done();
            }, done);
        });
    });
    
    describe("endsWith()", () => {

        it("Should filter by string", (done) => {
            table.where().endsWith("text", "1").read().then((results) => {
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
