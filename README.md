# NativeScript Azure Mobile Apps plugin
[![Build Status](https://travis-ci.org/PeterStaev/nativescript-azure-mobile-apps.svg?branch=master)](https://travis-ci.org/PeterStaev/nativescript-azure-mobile-apps)

A NativeScript Azure Mobile Apps plugin. Currently supporting basic CRUD and query functions


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