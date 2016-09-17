# NativeScript Azure Mobile Apps plugin
[![Build Status](https://travis-ci.org/PeterStaev/nativescript-azure-mobile-apps.svg?branch=master)](https://travis-ci.org/PeterStaev/nativescript-azure-mobile-apps)
[![npm downloads](https://img.shields.io/npm/dm/nativescript-azure-mobile-apps.svg)](https://www.npmjs.com/package/nativescript-azure-mobile-apps)
[![npm downloads](https://img.shields.io/npm/dt/nativescript-azure-mobile-apps.svg)](https://www.npmjs.com/package/nativescript-azure-mobile-apps)
[![npm](https://img.shields.io/npm/v/nativescript-azure-mobile-apps.svg)](https://www.npmjs.com/package/nativescript-azure-mobile-apps)

A NativeScript Azure Mobile Apps plugin.


## Installation
Run the following command from the root of your project:

`tns plugin add nativescript-azure-mobile-apps`

This command automatically installs the necessary files, as well as stores nativescript-azure-mobile-apps as a dependency in your project's package.json file.

## Usage

### Create a client
```typescript
/// <reference path="../node_modules/nativescript-azure-mobile-apps/azure-mobile-apps.d.ts" />
import { MobileServiceClient } from "nativescript-azure-mobile-apps/client";
var client = new MobileServiceClient("https://<PORTAL_NAME>.azurewebsites.net");
```
### Get a reference to a table
```typescript
var todoItemTable = client.getTable("TodoItem");;
```
### Get all items in a table
```typescript
todoItemTable.read<TodoItem>().then(function(results) {
    // results is array of TodoItem-s
    console.log(results.length);
    console.log(results[0].id);
});
```
### Add an item to a table
```typescript
var item = new TodoItem();
item.text = "NativeScript Rocks!";
todoItemTable.insert(item).then(function(result) {
    // result is the inserted item with the id changed
    console.log(result.id);
});
```

### Update an item
```typescript
item.text = "Changed Text";
todoItemTable.update(item).then(function(result) {
    // result is the updated item
    console.log(result);
});
```
### Delete an item
```typescript
todoItemTable.deleteItem(item).then(function() {
    console.log("Deleted!");
});
```
### Delete an item by ID
```typescript
todoItemTable.deleteById("some id").then(function() {
    console.log("Deleted!");
});
```

### Query table
```typescript
todoItemTable.where().field("completed").eq(true).read().then(function(results) {
    console.log("There are " + results.length.toString() + "completed items");
});
```
Currently the following filters are supported:
* **eq(value)** - Equals
* **ne(value)** - Not Equals
* **gt(value)** - Greater
* **ge(value)** - Greater or Equal
* **lt(value)** - Lower
* **le(value)** - Lower or Equal
* **startsWith(field, value)** - String starts with
* **endsWith(field, value)** - String ends with

If you want to filter the result by more than one condition, you can add additional filters by using `and()` and `or()` methods.

### Sorting
```typescript
import { SortDir } from "nativescript-azure-mobile-apps/query";
todoItemTable.where().field("completed").eq(true).orderBy("createdAt", SortDir.Desc).read().then(function(results) {
    // ...
});
```

### Paging
```typescript
import { SortDir } from "nativescript-azure-mobile-apps/query";
todoItemTable.where().field("completed").eq(true).orderBy("createdAt", SortDir.Asc).skip(2).top(3).read().then(function(results) {
    // Skips 2 completed tasks and returns the next 3 ordered chronologically by creation. 
});
```

### User Authentication (Social Sign In)
```typescript
import { AuthenticationProvider } from "nativescript-azure-mobile-apps/user";
client.login(AuthenticationProvider.Google).then((user) => {  
    console.log(`Logged In! UserID:${user.userId}`);
}, (e) => {
    console.log("Error Logging in!", e);
});
```

Once authenticated the userId and token are cached so you can login by simply calling:
```typescript
client.loginFromCache(); // Will return true if there are cached credentials and will setup the client accordingly
```

If you want to get additional information about the user (like  provider token, name, email, profile photo etc.) you can do this by calling `getProviderCredentials()`:
```typescript
client.user.getProviderCredentials().then((result) => {
    console.log(`Surname: ${result.surname}`);
    console.log(`Given Name: ${result.givenName}`);
    console.log(`Name: ${result.name}`);
});
```
Note: Since each provider provides different amount of details (also depends on what you have authorized in the Azure portal), 
if you are looking for some specific information, you should check the `claims` property of the result. 
It is a dictionary containing all the information that is returned from Azure. 

If you want to remove the cached authentication info you should use:
```typescript
import { MobileServiceUser } from "nativescript-azure-mobile-apps/user";
MobileServiceUser.clearCachedAuthenticationInfo();
```
