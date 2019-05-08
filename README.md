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

## Configuration
For most of the functions the plugin you only need to know the name of your Azure mobile apps portal. The only thing that requires additional configuration is the social sign-in under iOS. For that please follow the steps explained [below](#ios-login-requirements)

Starting with version 2.0, due to updated libraries, Mircososft now reqiures the minimum SDK for Android to be 19. So you need to adjust 2 files in your app:
1. In the `app/App_Resources/Android/AndroidManifest.xml` you must have `android:minSdkVersion` set to 19 or above. 
2. In the `app/App_Resources/Android/app.gradle` you must ensure that in your `defaultConfig` you have `minSdkVersion` set to the same number as the one you set in the `AndroidManifest.xml` file. So assuming you are setting it to 19, your file should look something like this:
```groovy
android {  
  defaultConfig {  
    generatedDensities = []
    applicationId = "......"
    minSdkVersion 19
  }  
} 
```

## API

### `MobileServiceClient`

#### Static Methods
* **configureClientAuthAppDelegate(): void**  
Configures the iOS authentication delegate. You are required to call this before your applications starts in case you will be using social sign in under iOS!

#### Methods 
* **onstructor(string)**  
Initialize a new client with the given Azure portal url. 

* **getTable(string): MobileServiceTable**  
Gets a reference to the table with the given name.

* **login(AuthenticationProvider, string?): Promise<MobileServiceUser>**  
Performs a social sign in with the given provider and url scheme. 

* **loginFromCache(): boolean**  
Tries to login the user from a previously cached authentication. Returns `true` if successful. 

#### Properties 
* **user** - *MobileServiceUser*  
Returns the currently social signed in user.

* **push** - *MobileServicePush*
Returns a `MobileServicePush` object which you can use to work with push notifications. 

### `MobileServicePush`

#### Methods
* **register(string): Promise**  
Registers the given native push token for push notifications with Azure. 

* **registerWithTemplate(string, string, string): Promise**  
Registers the given native push token, template name and template for push notifications with Azure. For more information about templates see the usage [below](#register-with-a-template). 

* **registerWithTags(string, string[]): Promise**  
Registers the given native push token for push notifications with Azure and associates the given tags with the device installation. You can read more about tags [here](https://docs.microsoft.com/en-us/azure/notification-hubs/notification-hubs-tags-segment-push-message).

* **registerWithTagsAndTemplate(string, string[], string, string): Promise**  
This combines the above 2 methods, so you can register both with a template and tags. 

* **unregister(): Promise**  
Unregisters the device from Azure push notifications. 

#### Properties 
* **installationId** - *string*
Returns the `installationId` of the device what is registered with Azure's Notification Hubs. This is usefull, for example, in case you need custom tags and you need to call your backend to add the tags.

### `MobileServiceUser`

#### Static Methods
* **clearCachedAuthenticationInfo(): void**  
Clears the previously cached authentication info. 

* **getFromCache():MobileServiceUser**  
Returns the previously cached user. 

#### Methods
* **getProviderCredentials(): Promise<ProviderCredentials>**  
Returns various details about the current user (for example surname, given name, user id, claims, etc.).

#### Properties
* **userId** - *string*  
Gets the user id for this user. 

* **authenticationToken** - *string*  
Gets the OAuth token for this user. 

### `MobileServiceTable`

#### Methods
* **read(): Promise<Array<T>>**  
Returns all records in the table. 

* **insert(T): Promise<T>**  
Adds the given item to the table. Returns thie updated item (for example with id assigned).

* **update(T): Promise<T>**  
Updates a given item in the table. Returns the updated item. 

* **deleteById(number|string): Promise**  
Deletes the item with the given id from the table. 

* **deleteItem(T): Promise**  
Deletes the given item from the table. 

* **where(): MobileServiceQuery**  
Returns a query object which you can use to filter, order and page through the data in the table. 

### `MobileServiceQuery`
The query object provies a very easy to use chainable interface to filter, order and page through the data inside a table. 

#### Methods
* **field(string): this**  
Specifies that we will be filtering by the given field. After this you can apply one of the filtering operations. 

* **eq(string|number|boolean|Date): this**  
Filters the table by a previously specified `field` so that its value equals the given value.

* **ne(string|number|boolean|Date): this**  
Filters the table by a previously specified `field` so that its value is different than the given value.

* **gt(string|number||Date): this**  
Filters the table by a previously specified `field` so that its value is greater than the given value.

* **ge(string|number||Date): this**  
Filters the table by a previously specified `field` so that its value is greater than or equal to the given value.

* **lt(number||Date): this**  
Filters the table by a previously specified `field` so that its value is lower than the given value.

* **le(number||Date): this**  
Filters the table by a previously specified `field` so that its value is lower than or equal to the given value.

* **startsWith(string, string): this**  
Filter the table by the given field so that the values start with the given value. 

* **endsWith(string, string): this**  
Filter the table by the given field so that the values end with the given value. 

* **and(): this**  
Applies a logcal `AND` operator after which you can start another filter condition. 

* **or(): this**  
Applies a logcal `OR` operator after which you can start another filter condition. 

* **orderBy(string, SortDir): this**  
Orders the resultset by thegive field and direction. This should be applied after specifying your filters!

* **skip(number): this**  
Skips the given number of records from the current resultset. This should be applied after all filters and sorting. 

* **top(number): this**  
Takes only the given amount of records from the resultset. This should be applied after all filters and sorting.

* **read(): Promise<Array>**  
Reads and returns the records of the currently filtered, ordered and windowed resultset. 

## Usage
Note that there is no difference in using the plugin in Angular NativeScript apps, so the usage below is valid for Angular apps as well. 

### Create a client
```typescript
import { MobileServiceClient } from "nativescript-azure-mobile-apps/client";
var client = new MobileServiceClient("https://<PORTAL_NAME>.azurewebsites.net");
```
### Get a reference to a table
```typescript
var todoItemTable = client.getTable("TodoItem");
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

#### iOS login requirements
In versions 1.0.0 and lower login on iOS leveraged an in-app browser. This will be banned so we needed to
switch to SafariViewController which is not "in-app". So we need to be able to switch back and forth between
the external browser. The main benefit is this browser can leverage cookies already set by for instance a Facebook
login, so the user doesn't have to enter his credentials again.

It's a bit of work, but it's a one time effort and should take you about 5 minutes to complete these steps:

##### Custom URL Scheme
Switching to the external browser is not a problem, but switching back requires you to configure a 'Custom URL Scheme'.
Open `app/App_Resources/iOS/Info.plist` and add:

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>my.bundle.id</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>x-msauth-tns-azure-sample</string>
    </array>
  </dict>
</array>
``` 

Make sure the Custom URL Scheme string `x-msauth-tns-azure-sample` above is unique on the device of the user,
so including your bundle id would be a good start (replace the dots by dashes).

Also, replace `my.bundle.id` by your bundle id.

##### Add ALLOWED EXTERNAL REDIRECT URLS
Add `x-msauth-tns-azure-sample://easyauth.callback` to [the 'ALLOWED EXTERNAL REDIRECT URLS' field in these screenshots](https://github.com/Azure/azure-mobile-apps-ios-client/issues/123#issuecomment-272959238) of your Azure backend.

_Make sure to replace `x-msauth-tns-azure-sample` by your own Custom URL Scheme._

##### App Delegate wiring
Now that your app can be called from the external party it still can't switch back to the foreground unless
you wire up a method in the App Delegate. Don't worry, this plugin takes care of that for you, the only thing
you need to do is add this line just before `app.start()` in `app.js` / `app.ts`:

```js
// add this
require("nativescript-azure-mobile-apps/client").MobileServiceClient.configureClientAuthAppDelegate();

// something like this is already there
application.start({ moduleName: "main-page" });
```

##### Passing the URL Scheme to `login`
Note that calling `login` has changed a bit; you now need to pass a second parameter to this function to use the
new login mechanism. Failing to do so will fall back to the deprecated in-app browser authentication method.
Make sure to replace `x-msauth-tns-azure-sample` by the scheme you configured in `Info.plist` before.
You can leave it out if you only target Android.

```typescript
import { AuthenticationProvider } from "nativescript-azure-mobile-apps/user";
client.login(AuthenticationProvider.Google, "x-msauth-tns-azure-sample").then((user) => {  
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

### Push Notifications
**NOTE:** In order to work with push notifications you also need to install the `nativescript-plugin-firebase` plugin. 
You can do this by running the following command:
```
tns plugin add nativescript-plugin-firebase
```
When prompted  answer Yes to use the plugin in Push Only setup (in case you won't be using anything from the Firebase plugin)
You can read more on how to use the firebase push only setup [here](https://github.com/EddyVerbruggen/nativescript-plugin-firebase/blob/master/docs/NON_FIREBASE_MESSAGING.md).

#### Register
You need to call the push register with Azure in the `onPushTokenReceivedCallback` by passing the registration token 
returned by the plugin. 

```typescript
import { messaging } from "nativescript-plugin-firebase/messaging";

messaging.registerForPushNotifications({
    onPushTokenReceivedCallback: (token) => {
        client.push.register(token)
            .then(() => { console.log("Azure Register OK!", client.push.installationId); })
            .catch((e) => { console.error(e); });
    }
});
```

#### Register with a template
If you want to use a custom template for the notifications, you can use the `registerWithTemplate` method to pass 
your template name and body.

```typescript
import { messaging } from "nativescript-plugin-firebase/messaging";

let pushTemplates = {};
pushTemplates[platform.platformNames.android] = "{\"data\":{\"message\":\"$(param)\"}}";
pushTemplates[platform.platformNames.ios] = "{\"aps\":{\"alert\":\"$(param)\"}}";

messaging.registerForPushNotifications({
    onMessageReceivedCallback: (message) => {
        console.log(message);
    },
    onPushTokenReceivedCallback: (token) => {
        client.push.registerWithTemplate(token, "MyTemplate", pushTemplates[platform.device.os])
            .then(() => { console.log("Azure Register OK!", client.push.installationId); })
            .catch((e) => { console.error(e); });
    },
});
```

#### Unregister
```typescript
import { messaging } from "nativescript-plugin-firebase/messaging";

messaging.unregisterForPushNotifications()
    .then(() => {
        console.log("Device Unregister OK!");
        client.push.unregister()
            .then(() => console.log("Azure Unregister OK!"))
            .catch((e) => console.log(e));
    })
    .catch((e) => { console.error(e); });
```

## Demos
This repository includes a plain NativeScript demo. In order to run it execute the following in your shell:
```shell
$ git clone https://github.com/peterstaev/nativescript-azure-mobile-apps
$ cd nativescript-azure-mobile-apps
$ npm install
$ npm run demo-ios
```
This will run the plain NativeScript demo project on iOS. If you want to run it on Android simply use the `-android` instead of the `-ios` sufix. 

## Donate
[![Donate](https://img.shields.io/badge/paypal-donate-brightgreen.svg)](https://bit.ly/2AS9QKB)

`bitcoin:14fjysmpwLvSsAskvLASw6ek5XfhTzskHC`

![Donate](https://www.tangrainc.com/qr.png)