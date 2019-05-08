import { MobileServiceClient } from "nativescript-azure-mobile-apps/client";
import { MobileServiceTable } from "nativescript-azure-mobile-apps/table";
import { AuthenticationProvider } from "nativescript-azure-mobile-apps/user";
import * as  dialogs from "ui/dialogs";
import { ActivityIndicator } from "ui/activity-indicator";
import { Page } from "ui/page";
import { EventData } from "data/observable";
import * as platform from "platform";

import { messaging } from "nativescript-plugin-firebase/messaging";

class TodoItem {
    public id: string;
    public text: string;
    public completed: boolean;
}

let client: MobileServiceClient;
let todoItemTable: MobileServiceTable;
let item: TodoItem;
let ai: ActivityIndicator;

let pushTemplates = {};
pushTemplates[platform.platformNames.android] = JSON.stringify({
    data: {
        title: "$(title)",
        message: "$(message)",
    },
    notification: {
        title: "$(title)",
        text: "$(message)",
    },
});
pushTemplates[platform.platformNames.ios] = JSON.stringify({
    aps: {
        alert: {
            title: "$(title)",
            body: "$(message)",
        },
        sound: "default",
        badge: 1,
    },
});

export function onNavigatingTo(args: EventData) {
    client = new MobileServiceClient("https://tangrainctest.azurewebsites.net");
    todoItemTable = client.getTable("TodoItem");
    ai = (<Page>args.object).getViewById<ActivityIndicator>("ai");
}

export function onAddItemTap(args) {
    ai.busy = true;

    item = new TodoItem();
    item.text = "NativeScript Rocks";
    item.completed = false;

    todoItemTable.insert(item).then((updatedItem) => {
        ai.busy = false;

        item = updatedItem;
        dialogs.alert("Item added!");
    }, (e) => {
        ai.busy = false;

        console.log("Error adding item!", e);
    });
}

export function onUpdateItemTap(args) {
    if (!item) {
        dialogs.alert("There is no item. Use Add first!");
        return;
    }

    ai.busy = true;

    item.completed = true;

    todoItemTable.update(item).then((updatedItem) => {
        ai.busy = false;

        item = updatedItem;
        dialogs.alert("Item update successfully!");
    }, (e) => {
        ai.busy = false;

        console.log("Error updating item!", e);
    });
}

export function onGetAllItemsTap(args) {
    ai.busy = true;

    todoItemTable.read().then((results) => {
        ai.busy = false;

        dialogs.alert(`There are total ${results.length} items`);
    }, (e) => {
        ai.busy = false;

        console.log("Error getting incomplete items!", e);
    });
}

export function onGetCompletedItemsTap(args) {
    ai.busy = true;

    todoItemTable.where().field("completed").eq(true).read().then((results) => {
        ai.busy = false;

        dialogs.alert(`There are ${results.length} completed items`);
    }, (e) => {
        ai.busy = false;

        console.log("Error getting incomplete items!", e);
    });
}

export function onDeleteItemTap(args) {
    if (!item) {
        dialogs.alert("There is no item. Use Add first!");
        return;
    }

    ai.busy = true;

    todoItemTable.deleteItem(item).then(() => {
        ai.busy = false;

        dialogs.alert("Item deleted successfully!");
        item = null;
    }, (e) => {
        ai.busy = false;

        console.log("Error deleting item!", e);
    });
}

export function onLoginTap(args) {
    ai.busy = true;

    if (client.loginFromCache()) {
        console.log(`Logged in via cached credentials! UserID: ${client.user.userId}`);

        ai.busy = false;
    }
    else {
        client.login(AuthenticationProvider.Google, "x-msauth-tns-azure-sample").then((user) => {
            console.log(`Logged In! UserID: ${user.userId}`);

            user.getProviderCredentials().then((result) => {
                console.log(`Surname: ${result.surname}`);
                console.log(`Given Name: ${result.givenName}`);
                console.log(`Name: ${result.name}`);

                ai.busy = false;
            });
        }, (e) => {
            ai.busy = false;

            console.log("Error Logging in!", e);
        });
    }
}

export function onPushRegisterTap() {
    messaging.registerForPushNotifications({
        onMessageReceivedCallback: (message) => {
            console.log(message);
        },
        onPushTokenReceivedCallback: (token) => {
            client.push.register(token)
                .then(() => { console.log("Azure Register OK!", client.push.installationId); })
                .catch((e) => { console.error(e); });
        }
    });
}

export function onPushTemplateRegisterTap() {
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
}

export function onPushTagsRegisterTap() {
    messaging.registerForPushNotifications({
        onMessageReceivedCallback: (message) => {
            console.log(message);
        },
        onPushTokenReceivedCallback: (token) => {
            client.push.registerWithTags(token, ["test1"])
                .then(() => { console.log("Azure Register OK!", client.push.installationId); })
                .catch((e) => { console.error(e); });
        },
    });
}

export function onPushUnregisterTap() {
    messaging.unregisterForPushNotifications()
        .then(() => {
            console.log("Device Unregister OK!");
            client.push.unregister()
                .then(() => console.log("Azure Unregister OK!"))
                .catch((e) => console.log(e));
        })
        .catch((e) => { console.error(e); });
}