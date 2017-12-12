import javalangException = java.lang.Exception;
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class ApiJsonOperationCallback {
					/**
					 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.ApiJsonOperationCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCompleted(param0: com.google.gson.JsonElement, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					});
					public onCompleted(param0: com.google.gson.JsonElement, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class ApiOperationCallback {
					/**
					 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.ApiOperationCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCompleted(param0: javalangObject, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					});
					public onCompleted(param0: javalangObject, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class MobileServiceActivityResult {
					public getErrorMessage(): string;
					public constructor(param0: boolean, param1: string);
					public isLoggedIn(): boolean;
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class MobileServiceApplication {
					public constructor();
					public static getInstallationId(param0: androidcontentContext): string;
				}
			}
		}
	}
}

import javanetURL = java.net.URL;
import javautilHashMap = java.util.HashMap;
import androidcontentIntent = android.content.Intent;
import androidappActivity = android.app.Activity;
import androidaccountsAccount = android.accounts.Account;
import javalangClass = java.lang.Class;
import javautilList = java.util.List;
import javalangreflectType = java.lang.reflect.Type;
/// <reference path="./android.accounts.Account.d.ts" />
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.google.gson.GsonBuilder.d.ts" />
/// <reference path="./com.google.gson.JsonDeserializer.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.google.gson.JsonSerializer.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.ApiJsonOperationCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.ApiOperationCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceActivityResult.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.ServiceFilterResponseCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.authentication.CustomTabsLoginManager.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.MobileServiceConnection.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilter.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.notifications.MobileServicePush.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.MobileServiceTable.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceJsonSyncTable.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceSyncContext.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceSyncTable.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class MobileServiceClient {
					public static UTF8_ENCODING: string;
					public static GOOGLE_ACCOUNT_TYPE: string;
					public static GOOGLE_USER_INFO_SCOPE: string;
					public invokeApi(param0: string, param1: com.microsoft.windowsazure.mobileservices.ApiJsonOperationCallback): void;
					public getSyncTable<T>(param0: string, param1: javalangClass<T>): com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceSyncTable;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: com.google.gson.JsonObject, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public login(param0: string, param1: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
					public login(param0: string, param1: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public login(param0: string, param1: string, param2: number): void;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: com.google.gson.JsonObject, param2: javautilHashMap<any, any>): com.google.common.util.concurrent.ListenableFuture;
					public withFilter(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilter): com.microsoft.windowsazure.mobileservices.MobileServiceClient;
					public getSyncTable<T>(param0: javalangClass<T>): com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceSyncTable;
					public getOkHttpClientFactory(): com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory;
					public login(param0: string, param1: com.google.gson.JsonObject, param2: javautilHashMap<any, any>): com.google.common.util.concurrent.ListenableFuture;
					public invokeApi<T>(param0: string, param1: javalangObject, param2: string, param3: javautilList<any>, param4: javalangClass<T>): com.google.common.util.concurrent.ListenableFuture;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: com.google.gson.JsonObject, param2: javautilHashMap<any, any>, param3: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: string, param2: number): void;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider): com.google.common.util.concurrent.ListenableFuture;
					public setGsonBuilder(param0: com.google.gson.GsonBuilder): void;
					public invokeApi(param0: string, param1: native.Array<number>, param2: string, param3: javautilList<any>, param4: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: string): com.google.common.util.concurrent.ListenableFuture;
					public getTable<T>(param0: javalangClass<T>): com.microsoft.windowsazure.mobileservices.table.MobileServiceTable;
					public getSyncContext(): com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceSyncContext;
					public getPush(): com.microsoft.windowsazure.mobileservices.notifications.MobileServicePush;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: javautilHashMap<any, any>): com.google.common.util.concurrent.ListenableFuture;
					public loginWithGoogleAccount(param0: androidappActivity, param1: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public setAlternateLoginHost(param0: javanetURL): void;
					public registerSerializer(param0: javalangreflectType, param1: com.google.gson.JsonSerializer): void;
					public login(param0: string, param1: com.google.gson.JsonObject, param2: javautilHashMap<any, any>, param3: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public invokeApi<T>(param0: string, param1: javalangObject, param2: string, param3: javautilList<any>, param4: javalangClass<T>, param5: com.microsoft.windowsazure.mobileservices.ApiOperationCallback): void;
					public invokeApi<T>(param0: string, param1: javalangClass<T>): com.google.common.util.concurrent.ListenableFuture;
					public loginWithGoogleAccount(param0: androidappActivity, param1: string, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public login(param0: string, param1: string, param2: javautilHashMap<any, any>): com.google.common.util.concurrent.ListenableFuture;
					public invokeApi<T>(param0: string, param1: string, param2: javautilList<any>, param3: javalangClass<T>): com.google.common.util.concurrent.ListenableFuture;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: string, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public setAndroidHttpClientFactory(param0: com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory): void;
					public loginWithGoogleAccount(param0: androidappActivity, param1: androidaccountsAccount, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public getAlternateLoginHost(): javanetURL;
					public getContext(): androidcontentContext;
					public invokeApi(param0: string, param1: com.google.gson.JsonElement): com.google.common.util.concurrent.ListenableFuture;
					public login(param0: string, param1: string): com.google.common.util.concurrent.ListenableFuture;
					public getAppUrl(): javanetURL;
					public loginWithGoogleAccount(param0: androidappActivity, param1: string): com.google.common.util.concurrent.ListenableFuture;
					public invokeApi(param0: string, param1: string, param2: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
					public setLoginUriPrefix(param0: string): void;
					public refreshUser(param0: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public isLoginInProgress(): boolean;
					public invokeApi<T>(param0: string, param1: javalangObject, param2: javalangClass<T>): com.google.common.util.concurrent.ListenableFuture;
					public invokeApi<T>(param0: string, param1: javalangClass<T>, param2: com.microsoft.windowsazure.mobileservices.ApiOperationCallback): void;
					public login(param0: string, param1: string, param2: javautilHashMap<any, any>, param3: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public setCurrentUser(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser): void;
					public login(param0: string, param1: javautilHashMap<any, any>, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public getLoginUriPrefix(): string;
					public constructor(param0: javanetURL, param1: androidcontentContext, param2: com.google.gson.GsonBuilder);
					public loginWithGoogleAccount(param0: androidappActivity, param1: androidaccountsAccount, param2: string, param3: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public getCustomTabsLoginManager(): com.microsoft.windowsazure.mobileservices.authentication.CustomTabsLoginManager;
					public login(param0: string, param1: string, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public getTable(param0: string): com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable;
					public invokeApi<T>(param0: string, param1: string, param2: javautilList<any>, param3: javalangClass<T>, param4: com.microsoft.windowsazure.mobileservices.ApiOperationCallback): void;
					public invokeApi(param0: string, param1: com.google.gson.JsonElement, param2: string, param3: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
					public invokeApi(param0: string, param1: native.Array<number>, param2: string, param3: javautilList<any>, param4: javautilList<any>, param5: com.microsoft.windowsazure.mobileservices.ServiceFilterResponseCallback): void;
					public setContext(param0: androidcontentContext): void;
					public getServiceFilter(): com.microsoft.windowsazure.mobileservices.http.ServiceFilter;
					public getTable<T>(param0: string, param1: javalangClass<T>): com.microsoft.windowsazure.mobileservices.table.MobileServiceTable;
					public getCurrentUser(): com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser;
					public invokeApi(param0: string, param1: com.google.gson.JsonElement, param2: string, param3: javautilList<any>, param4: com.microsoft.windowsazure.mobileservices.ApiJsonOperationCallback): void;
					public registerDeserializer(param0: javalangreflectType, param1: com.google.gson.JsonDeserializer): void;
					public refreshUser(): com.google.common.util.concurrent.ListenableFuture;
					public onActivityResult(param0: androidcontentIntent): com.microsoft.windowsazure.mobileservices.MobileServiceActivityResult;
					public login(param0: string): com.google.common.util.concurrent.ListenableFuture;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: string, param2: javautilHashMap<any, any>): com.google.common.util.concurrent.ListenableFuture;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public invokeApi<T>(param0: string, param1: javalangObject, param2: javalangClass<T>, param3: com.microsoft.windowsazure.mobileservices.ApiOperationCallback): void;
					public login(param0: string, param1: com.google.gson.JsonObject, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public login(param0: string, param1: string, param2: number, param3: javautilHashMap<any, any>): void;
					public constructor(param0: string, param1: androidcontentContext, param2: com.google.gson.GsonBuilder);
					public constructor(param0: javanetURL, param1: androidcontentContext);
					public constructor(param0: string, param1: androidcontentContext);
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: string, param2: number, param3: javautilHashMap<any, any>): void;
					public loginWithGoogleAccount(param0: androidappActivity): com.google.common.util.concurrent.ListenableFuture;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
					public logout(): com.google.common.util.concurrent.ListenableFuture;
					public invokeApi(param0: string, param1: string, param2: javautilList<any>, param3: com.microsoft.windowsazure.mobileservices.ApiJsonOperationCallback): void;
					public getGsonBuilder(): com.google.gson.GsonBuilder;
					public loginWithGoogleAccount(param0: androidappActivity, param1: androidaccountsAccount): com.google.common.util.concurrent.ListenableFuture;
					public invokeApi(param0: string, param1: com.google.gson.JsonElement, param2: com.microsoft.windowsazure.mobileservices.ApiJsonOperationCallback): void;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: string, param2: javautilHashMap<any, any>, param3: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public login(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider, param1: javautilHashMap<any, any>, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					public invokeApi(param0: string): com.google.common.util.concurrent.ListenableFuture;
					public loginWithGoogleAccount(param0: androidappActivity, param1: androidaccountsAccount, param2: string): com.google.common.util.concurrent.ListenableFuture;
					public createConnection(): com.microsoft.windowsazure.mobileservices.http.MobileServiceConnection;
					public getSyncTable(param0: string): com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceJsonSyncTable;
				}
			}
		}
	}
}

import javalangThrowable = java.lang.Throwable;
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class MobileServiceException {
					public constructor(param0: string, param1: javalangThrowable);
					public constructor(param0: string);
					public static getServiceResponse(param0: javalangThrowable): com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse;
					public getResponse(): com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse;
					public constructor(param0: javalangThrowable);
					public constructor(param0: string, param1: javalangThrowable, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
					public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
				}
			}
		}
	}
}

import javautilEnumSet = java.util.EnumSet;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.EnumSet.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class MobileServiceFeatures {
					public static TypedTable: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public static UntypedTable: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public static TypedApiCall: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public static JsonApiCall: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public static GenericApiCall: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public static AdditionalQueryParameters: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public static Offline: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public static OpportunisticConcurrency: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public getValue(): string;
					public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.MobileServiceFeatures;
					public static featuresToString(param0: javautilEnumSet<any>): string;
					public static values(): native.Array<com.microsoft.windowsazure.mobileservices.MobileServiceFeatures>;
				}
			}
		}
	}
}

import javautilCollection = java.util.Collection;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class MobileServiceList {
					public getNextLink(): string;
					public constructor(param0: javautilCollection<any>, param1: number, param2: string);
					public constructor(param0: javautilCollection<any>, param1: number);
					public getTotalCount(): number;
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class ServiceFilterResponseCallback {
					/**
					 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.ServiceFilterResponseCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onResponse(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse, param1: javalangException): void;
					});
					public onResponse(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse, param1: javalangException): void;
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export class UserAuthenticationCallback {
					/**
					 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCompleted(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					});
					public onCompleted(param0: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class CustomTabsClientHelper {
					}
				}
			}
		}
	}
}

import androidosBundle = android.os.Bundle;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class CustomTabsIntermediateActivity {
						public onSaveInstanceState(param0: androidosBundle): void;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public static createLoginCompletionIntent(param0: androidcontentContext, param1: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceUser, param2: string): androidcontentIntent;
						public onRestoreInstanceState(param0: androidosBundle): void;
						public onResume(): void;
						public onNewIntent(param0: androidcontentIntent): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.authentication.CustomTabsLoginState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class CustomTabsLoginActivity {
						public onSaveInstanceState(param0: androidosBundle): void;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public onDestroy(): void;
						public onRestoreInstanceState(param0: androidosBundle): void;
						public getMobileServiceClient(): com.microsoft.windowsazure.mobileservices.MobileServiceClient;
						public onResume(): void;
						public getLoginState(): com.microsoft.windowsazure.mobileservices.authentication.CustomTabsLoginState;
						public setMobileServiceClient(param0: com.microsoft.windowsazure.mobileservices.MobileServiceClient): void;
						public performCodeExchange(param0: string, param1: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
						public onNewIntent(param0: androidcontentIntent): void;
						public setLoginState(param0: com.microsoft.windowsazure.mobileservices.authentication.CustomTabsLoginState): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class CustomTabsLoginManager {
						public static KEY_LOGIN_USER_ID: string;
						public static KEY_LOGIN_AUTHENTICATION_TOKEN: string;
						public static KEY_LOGIN_ERROR: string;
						public constructor(param0: string, param1: string, param2: string);
						public authenticate(param0: string, param1: string, param2: javautilHashMap<any, any>, param3: androidcontentContext, param4: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class CustomTabsLoginState {
						public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: javautilHashMap<any, any>);
						public getCodeVerifier(): string;
						public getAlternateLoginHost(): string;
						public getLoginUriPrefix(): string;
						public getAuthenticationProvider(): string;
						public getUriScheme(): string;
						public getLoginParameters(): javautilHashMap<any, any>;
						public getAppUrl(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class LoginManager {
						public authenticate(param0: string, param1: androidcontentContext, param2: javautilHashMap<any, any>): com.google.common.util.concurrent.ListenableFuture;
						public refreshUser(param0: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
						public refreshUser(): com.google.common.util.concurrent.ListenableFuture;
						public authenticate(param0: string, param1: string): com.google.common.util.concurrent.ListenableFuture;
						public authenticate(param0: string, param1: string, param2: javautilHashMap<any, any>, param3: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
						public showLoginUI(param0: string, param1: string, param2: androidcontentContext, param3: com.microsoft.windowsazure.mobileservices.authentication.LoginManager.LoginUIOperationCallback): void;
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceClient);
						public authenticate(param0: string, param1: androidcontentContext, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
						public authenticate(param0: string, param1: androidcontentContext, param2: javautilHashMap<any, any>, param3: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
						public authenticate(param0: string, param1: string, param2: javautilHashMap<any, any>): com.google.common.util.concurrent.ListenableFuture;
						public authenticate(param0: string, param1: androidcontentContext): com.google.common.util.concurrent.ListenableFuture;
						public authenticate(param0: string, param1: string, param2: com.microsoft.windowsazure.mobileservices.UserAuthenticationCallback): void;
					}
					export module LoginManager {
						export class LoginUIOperationCallback {
							/**
							 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.authentication.LoginManager$LoginUIOperationCallback interface with the provided implementation.
							 */
							public constructor(implementation: {
								onCompleted(param0: string, param1: javalangException): void;
							});
							public onCompleted(param0: string, param1: javalangException): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class MobileServiceAuthenticationProvider {
						public static MicrosoftAccount: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider;
						public static Google: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider;
						public static Twitter: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider;
						public static Facebook: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider;
						public static WindowsAzureActiveDirectory: com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider;
						public static values(): native.Array<com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider>;
						public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.authentication.MobileServiceAuthenticationProvider;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class MobileServiceUser {
						public getUserId(): string;
						public setUserId(param0: string): void;
						public setAuthenticationToken(param0: string): void;
						public getAuthenticationToken(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class RedirectUrlActivity {
						public constructor();
						public onCreate(param0: androidosBundle): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class TokenRequestAsyncTask extends com.microsoft.windowsazure.mobileservices.http.RequestAsyncTask {
						public onPostExecute(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module authentication {
					export class UriHelper {
						public static normalizeAndUrlEncodeParameters(param0: javautilHashMap<any, any>, param1: string): string;
						public static createHostOnlyUrl(param0: javanetURL): javanetURL;
						public static CombinePath(param0: string, param1: string): string;
						public static normalizeParameters(param0: javautilHashMap<any, any>): string;
						public static normalizeProvider(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class HttpConstants {
						public static PostMethod: string;
						public static GetMethod: string;
						public static DeleteMethod: string;
						public static PatchMethod: string;
						public static ContentType: string;
						public static PutMethod: string;
						public static HttpsProtocol: string;
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.ServiceFilterResponseCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class MobileServiceConnection {
						public static JSON_CONTENTTYPE: string;
						public start(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest, param1: com.microsoft.windowsazure.mobileservices.ServiceFilterResponseCallback): void;
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceClient);
						public start(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest): com.google.common.util.concurrent.ListenableFuture;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.EnumSet.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class MobileServiceHttpClient {
						public static X_ZUMO_FEATURES: string;
						public request(param0: string, param1: native.Array<number>, param2: string, param3: javautilList<any>, param4: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceClient);
						public request(param0: string, param1: native.Array<number>, param2: string, param3: javautilList<any>, param4: javautilList<any>, param5: javautilEnumSet<any>): com.google.common.util.concurrent.ListenableFuture;
						public request(param0: string, param1: string, param2: string, param3: javautilList<any>, param4: javautilList<any>, param5: javautilEnumSet<any>): com.google.common.util.concurrent.ListenableFuture;
						public getClient(): com.microsoft.windowsazure.mobileservices.MobileServiceClient;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class NextServiceFilterCallback {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.http.NextServiceFilterCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onNext(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest): com.google.common.util.concurrent.ListenableFuture;
						});
						public onNext(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest): com.google.common.util.concurrent.ListenableFuture;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.OkHttpClient.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class OkHttpClientFactory {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							createOkHttpClient(): com.squareup.okhttp.OkHttpClient;
						});
						public createOkHttpClient(): com.squareup.okhttp.OkHttpClient;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactoryImpl.d.ts" />
/// <reference path="./com.squareup.okhttp.OkHttpClient.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class OkHttpClientFactoryImpl {
						public constructor();
						public createOkHttpClient(): com.squareup.okhttp.OkHttpClient;
					}
					export module OkHttpClientFactoryImpl {
						export class UserAgentInterceptor {
							public constructor(param0: com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactoryImpl, param1: string);
							public intercept(param0: com.squareup.okhttp.Interceptor.Chain): com.squareup.okhttp.Response;
						}
					}
				}
			}
		}
	}
}

import javalangVoid = java.lang.Void;
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceException.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.MobileServiceConnection.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export abstract class RequestAsyncTask {
						public mTaskException: com.microsoft.windowsazure.mobileservices.MobileServiceException;
						public constructor(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest, param1: com.microsoft.windowsazure.mobileservices.http.MobileServiceConnection);
						public doInBackground(param0: native.Array<javalangVoid>): com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse;
						public executeTask(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.NextServiceFilterCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class ServiceFilter {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.http.ServiceFilter interface with the provided implementation.
						 */
						public constructor(implementation: {
							handleRequest(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest, param1: com.microsoft.windowsazure.mobileservices.http.NextServiceFilterCallback): com.google.common.util.concurrent.ListenableFuture;
						});
						public handleRequest(param0: com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest, param1: com.microsoft.windowsazure.mobileservices.http.NextServiceFilterCallback): com.google.common.util.concurrent.ListenableFuture;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class ServiceFilterRequest {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequest interface with the provided implementation.
						 */
						public constructor(implementation: {
							getHeaders(): com.squareup.okhttp.Headers;
							addHeader(param0: string, param1: string): void;
							removeHeader(param0: string): void;
							getContent(): string;
							getRawContent(): native.Array<number>;
							getUrl(): string;
							setUrl(param0: string): void;
							getMethod(): string;
							execute(): com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse;
						});
						public getContent(): string;
						public getRawContent(): native.Array<number>;
						public getUrl(): string;
						public getMethod(): string;
						public getHeaders(): com.squareup.okhttp.Headers;
						public addHeader(param0: string, param1: string): void;
						public removeHeader(param0: string): void;
						public setUrl(param0: string): void;
						public execute(): com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class ServiceFilterRequestImpl {
						public static delete(param0: com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory, param1: string, param2: native.Array<number>): com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequestImpl;
						public getContent(): string;
						public static patch(param0: com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory, param1: string, param2: native.Array<number>): com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequestImpl;
						public getRawContent(): native.Array<number>;
						public getUrl(): string;
						public addHeader(param0: string, param1: string): void;
						public static delete(param0: com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory, param1: string): com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequestImpl;
						public setUrl(param0: string): void;
						public static put(param0: com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory, param1: string, param2: native.Array<number>): com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequestImpl;
						public getMethod(): string;
						public getHeaders(): com.squareup.okhttp.Headers;
						public removeHeader(param0: string): void;
						public static post(param0: com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory, param1: string, param2: native.Array<number>): com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequestImpl;
						public static get(param0: com.microsoft.windowsazure.mobileservices.http.OkHttpClientFactory, param1: string): com.microsoft.windowsazure.mobileservices.http.ServiceFilterRequestImpl;
						public execute(): com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.StatusLine.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class ServiceFilterResponse {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse interface with the provided implementation.
						 */
						public constructor(implementation: {
							getHeaders(): com.squareup.okhttp.Headers;
							getContent(): string;
							getRawContent(): native.Array<number>;
							getStatus(): com.squareup.okhttp.internal.http.StatusLine;
						});
						public getStatus(): com.squareup.okhttp.internal.http.StatusLine;
						public getContent(): string;
						public getRawContent(): native.Array<number>;
						public getHeaders(): com.squareup.okhttp.Headers;
					}
				}
			}
		}
	}
}

import javaioInputStream = java.io.InputStream;
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.StatusLine.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module http {
					export class ServiceFilterResponseImpl {
						public getStatus(): com.squareup.okhttp.internal.http.StatusLine;
						public constructor(param0: com.squareup.okhttp.Response);
						public static getUngzippedContent(param0: com.squareup.okhttp.Response): javaioInputStream;
						public getContent(): string;
						public getRawContent(): native.Array<number>;
						public getHeaders(): com.squareup.okhttp.Headers;
					}
				}
			}
		}
	}
}

import javautilDate = java.util.Date;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module notifications {
					export class Installation {
						public expirationTime: javautilDate;
						public installationId: string;
						public platform: string;
						public pushChannel: string;
						public pushChannelExpired: boolean;
						public pushVariables: javautilHashMap<any, any>;
						public tags: javautilList<any>;
						public templates: javautilHashMap<any, any>;
						public constructor(installationId: string, platform: string, pushChannel: string, pushVariables: javautilHashMap<string, string>, tags: javautilList<string>, templates: javautilHashMap<string, com.microsoft.windowsazure.mobileservices.notifications.InstallationTemplate>);
						public constructor(installationId: string, platform: string, pushChannel: string, pushVariables: javautilHashMap<string, string>, tags: javautilList<string>, templates: javautilHashMap<string, com.microsoft.windowsazure.mobileservices.notifications.InstallationTemplate>, expirationTime: javautilDate, expired: boolean);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module notifications {
					export class InstallationTemplate {
						public body: string;
						public tags: javautilList<any>;
						public constructor(body: string, tags: javautilList<any>);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.notifications.Installation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.notifications.RegistrationCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.notifications.UnregisterCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module notifications {
					export class MobileServicePush {
						public register(param0: string, param1: com.microsoft.windowsazure.mobileservices.notifications.RegistrationCallback): void;
						public unregister(): com.google.common.util.concurrent.ListenableFuture;
						public registerTemplate(param0: string, param1: string, param2: string, param3: com.microsoft.windowsazure.mobileservices.notifications.RegistrationCallback): void;
						public registerTemplate(param0: string, param1: string, param2: string): com.google.common.util.concurrent.ListenableFuture;
						public unregister(param0: com.microsoft.windowsazure.mobileservices.notifications.UnregisterCallback): void;
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceClient, param1: androidcontentContext);
						public register(param0: com.microsoft.windowsazure.mobileservices.notifications.Installation): com.google.common.util.concurrent.ListenableFuture;
						public register(param0: string): com.google.common.util.concurrent.ListenableFuture;
						public register(param0: string, param1: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module notifications {
					export class RegistrationCallback {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.notifications.RegistrationCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onRegister(param0: javalangException): void;
						});
						public onRegister(param0: javalangException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module notifications {
					export class RegistrationGoneException {
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module notifications {
					export class UnregisterCallback {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.notifications.UnregisterCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onUnregister(param0: javalangException): void;
						});
						public onUnregister(param0: javalangException): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class DateTimeOffset {
						public constructor(param0: javautilDate);
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceException.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServiceConflictException extends com.microsoft.windowsazure.mobileservices.MobileServiceException {
						public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: string, param1: javalangThrowable);
						public getItem(): javalangObject;
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceException, param1: javalangObject);
						public setItem(param0: javalangObject): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceException.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServiceConflictExceptionJson extends com.microsoft.windowsazure.mobileservices.table.MobileServiceExceptionBase {
						public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceException, param1: com.google.gson.JsonObject);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceException.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServiceExceptionBase extends com.microsoft.windowsazure.mobileservices.MobileServiceException {
						public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public getValue(): com.google.gson.JsonObject;
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceException, param1: com.google.gson.JsonObject);
						public setValue(param0: com.google.gson.JsonObject): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

import javalangInteger = java.lang.Integer;
import javalangLong = java.lang.Long;
/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableJsonQueryCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryOrder.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServiceJsonTable extends com.microsoft.windowsazure.mobileservices.table.MobileServiceTableBase {
						public insert(param0: com.google.gson.JsonObject, param1: com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback): void;
						public delete(param0: javalangLong, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public execute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.TableJsonQueryCallback): void;
						public update(param0: com.google.gson.JsonObject, param1: com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback): void;
						public lookUp(param0: javalangObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: com.google.gson.JsonObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public lookUp(param0: javalangObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback): void;
						public delete(param0: com.google.gson.JsonObject, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public update(param0: com.google.gson.JsonObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.MobileServiceClient);
						public update(param0: com.google.gson.JsonObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback): void;
						public undelete(param0: com.google.gson.JsonObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback): void;
						public delete(param0: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: javalangInteger, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public delete(param0: javalangInteger): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: com.google.gson.JsonObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public insert(param0: com.google.gson.JsonObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: string): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: string, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public delete(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public undelete(param0: com.google.gson.JsonObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public execute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: javalangInteger, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public execute(param0: com.microsoft.windowsazure.mobileservices.table.TableJsonQueryCallback): void;
						public update(param0: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
						public top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public lookUp(param0: javalangObject): com.google.common.util.concurrent.ListenableFuture;
						public includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public delete(param0: javalangLong, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public delete(param0: string, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public insert(param0: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
						public execute(param0: string): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: javalangLong): com.google.common.util.concurrent.ListenableFuture;
						public execute(): com.google.common.util.concurrent.ListenableFuture;
						public parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public undelete(param0: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
						public select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public where(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public where(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public lookUp(param0: javalangObject, param1: com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback): void;
						public insert(param0: com.google.gson.JsonObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback): void;
						public skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						public executeInternal(): com.google.common.util.concurrent.ListenableFuture;
						public undelete(param0: com.google.gson.JsonObject, param1: com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceException.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServicePreconditionFailedException extends com.microsoft.windowsazure.mobileservices.MobileServiceException {
						public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: string, param1: javalangThrowable);
						public getItem(): javalangObject;
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceException, param1: javalangObject);
						public setItem(param0: javalangObject): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceException.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServicePreconditionFailedExceptionJson extends com.microsoft.windowsazure.mobileservices.table.MobileServiceExceptionBase {
						public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: javalangThrowable);
						public constructor(param0: string, param1: javalangThrowable, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse);
						public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceException, param1: com.google.gson.JsonObject);
						public constructor(param0: string, param1: javalangThrowable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServiceSystemColumns {
						public static Id: string;
						public static Version: string;
						public static CreatedAt: string;
						public static UpdatedAt: string;
						public static Deleted: string;
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServiceSystemProperty {
						public static CreatedAt: com.microsoft.windowsazure.mobileservices.table.MobileServiceSystemProperty;
						public static UpdatedAt: com.microsoft.windowsazure.mobileservices.table.MobileServiceSystemProperty;
						public static Version: com.microsoft.windowsazure.mobileservices.table.MobileServiceSystemProperty;
						public static Deleted: com.microsoft.windowsazure.mobileservices.table.MobileServiceSystemProperty;
						public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.MobileServiceSystemProperty;
						public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.MobileServiceSystemProperty>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableOperationCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableQueryCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryOrder.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class MobileServiceTable extends com.microsoft.windowsazure.mobileservices.table.MobileServiceTableBase {
						public parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public delete(param0: javalangLong, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public update(param0: javalangObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public lookUp(param0: javalangObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableOperationCallback): void;
						public lookUp(param0: javalangObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public undelete(param0: javalangObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: string|number): com.google.common.util.concurrent.ListenableFuture;
						public orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public where(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.MobileServiceClient);
						public delete(param0: javalangInteger, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public delete(param0: javalangObject, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public execute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.TableQueryCallback): void;
						public delete(param0: javalangInteger): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: javalangObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: string): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: string, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public delete(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						// public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.MobileServiceClient, param2: javalangClass);
						public update(param0: javalangObject, param1: com.microsoft.windowsazure.mobileservices.table.TableOperationCallback): void;
						public execute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.common.util.concurrent.ListenableFuture;
						public undelete(param0: javalangObject): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: javalangInteger, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public lookUp(param0: javalangObject): com.google.common.util.concurrent.ListenableFuture;
						public undelete(param0: javalangObject, param1: com.microsoft.windowsazure.mobileservices.table.TableOperationCallback): void;
						public update(param0: javalangObject): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: javalangLong, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public insert(param0: javalangObject, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public lookUp(param0: javalangObject, param1: com.microsoft.windowsazure.mobileservices.table.TableOperationCallback): void;
						public delete(param0: string, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public insert(param0: javalangObject, param1: com.microsoft.windowsazure.mobileservices.table.TableOperationCallback): void;
						public insert(param0: javalangObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableOperationCallback): void;
						public execute(param0: string): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: javalangLong): com.google.common.util.concurrent.ListenableFuture;
						public execute(): com.google.common.util.concurrent.ListenableFuture;
						public undelete(param0: javalangObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableOperationCallback): void;
						public insert(param0: javalangObject): com.google.common.util.concurrent.ListenableFuture;
						public update(param0: javalangObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableOperationCallback): void;
						public where(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						public delete(param0: javalangObject, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public execute(param0: com.microsoft.windowsazure.mobileservices.table.TableQueryCallback): void;
					}
				}
			}
		}
	}
}

import javautilTreeMap = java.util.TreeMap;
/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceFeatures.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.EnumSet.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.TreeMap.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export abstract class MobileServiceTableBase {
						public static TABLES_URL: string;
						public static SystemPropertyNameToEnum: javautilTreeMap<any, any>;
						public static VersionSystemPropertyName: string;
						public static IdProperties: javautilList<any>;
						public mClient: com.microsoft.windowsazure.mobileservices.MobileServiceClient;
						public mTableName: string;
						public mFeatures: javautilEnumSet<any>;
						public delete(param0: javalangLong, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public validateId(param0: javalangObject): void;
						public static isIntegerClass<T>(param0: javalangClass<T>): boolean;
						public addFeature(param0: com.microsoft.windowsazure.mobileservices.MobileServiceFeatures): void;
						public isStringType(param0: javalangObject): boolean;
						public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.MobileServiceClient);
						public static getEtagFromValue(param0: string): string;
						public isValidTypeId(param0: com.google.gson.JsonElement): boolean;
						public containsSpecialCharacter(param0: string): boolean;
						public static removeSystemProperties(param0: com.google.gson.JsonObject): com.google.gson.JsonObject;
						public delete(param0: javalangInteger, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public isNumericType(param0: javalangObject): boolean;
						public delete(param0: javalangInteger): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: string): com.google.common.util.concurrent.ListenableFuture;
						public delete(param0: string, param1: javautilList<any>, param2: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public validateId(param0: com.google.gson.JsonObject): javalangObject;
						public isValidStringId(param0: string): boolean;
						public static getValueFromEtag(param0: string): string;
						public delete(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public getStringValue(param0: javalangObject): string;
						public delete(param0: javalangInteger, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public isDefaultStringId(param0: string): boolean;
						public updateIdProperty(param0: com.google.gson.JsonObject): void;
						public containsControlCharacter(param0: string): boolean;
						public delete(param0: javalangLong, param1: com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback): void;
						public static getIdPropertyClass<T>(param0: javalangClass<T>): javalangClass<T>;
						public delete(param0: string, param1: javautilList<any>): com.google.common.util.concurrent.ListenableFuture;
						public patchOriginalEntityWithResponseEntity(param0: com.google.gson.JsonObject, param1: com.google.gson.JsonObject): com.google.gson.JsonObject;
						public getNumericValue(param0: javalangObject): number;
						public static transformHttpException(param0: javalangThrowable): javalangThrowable;
						public getClient(): com.microsoft.windowsazure.mobileservices.MobileServiceClient;
						public delete(param0: javalangLong): com.google.common.util.concurrent.ListenableFuture;
						public static getSystemProperties<T>(param0: javalangClass<T>): javautilEnumSet<any>;
						public isValidNumericId(param0: number): boolean;
						public isDefaultNumericId(param0: number): boolean;
						public getTableName(): string;
						public getObjectId(param0: javalangObject): javalangObject;
						public static getVersionSystemProperty(param0: com.google.gson.JsonObject): string;
						public static getSystemProperties(param0: com.google.gson.JsonObject): javautilEnumSet<any>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class TableDeleteCallback {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.TableDeleteCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onCompleted(param0: javalangException, param1: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
						});
						public onCompleted(param0: javalangException, param1: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class TableJsonOperationCallback {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.TableJsonOperationCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onCompleted(param0: javalangObject, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
						});
						public onCompleted(param0: javalangObject, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class TableJsonQueryCallback {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.TableJsonQueryCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onCompleted(param0: com.google.gson.JsonElement, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
						});
						public onCompleted(param0: com.google.gson.JsonElement, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class TableOperationCallback {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.TableOperationCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onCompleted(param0: javalangObject, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
						});
						public onCompleted(param0: javalangObject, param1: javalangException, param2: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export class TableQueryCallback {
						/**
						 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.TableQueryCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onCompleted(param0: javautilList<any>, param1: number, param2: javalangException, param3: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
						});
						public onCompleted(param0: javautilList<any>, param1: number, param2: javalangException, param3: com.microsoft.windowsazure.mobileservices.http.ServiceFilterResponse): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class BinaryOperatorKind {
							public static Or: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static And: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Eq: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Ne: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Gt: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Ge: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Lt: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Le: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Add: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Sub: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Mul: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Div: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static Mod: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
							public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind>;
							public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorKind;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class BinaryOperatorNode {
							public getKind(): com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public accept(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class BinaryOperatorNodeMerger {
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class ConstantNode {
							public getKind(): com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public accept(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class ConstantNodeMerger {
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

import javalangNumber = java.lang.Number;
/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableJsonQueryCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryOrder.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class ExecutableJsonQuery {
							public val(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public add(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getTableName(): string;
							public ne(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public length(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public endsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mul(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public val(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public year(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public minute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public lt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public or(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public le(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public add(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toUpper(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public le(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public add(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public le(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public trim(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeProjection(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public gt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public lt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public mul(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mul(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public gt(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: string, param1: number, param2: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public subStringOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public round(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public lt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getOrderBy(): javautilList<any>;
							public mul(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public constructor();
							public gt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public length(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public field(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public mod(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public sub(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public execute(): com.google.common.util.concurrent.ListenableFuture;
							public eq(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public ge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeProjection(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public ge(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public length(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public removeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public month(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public startsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public or(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toLower(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public round(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public subString(param0: string, param1: number, param2: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public div(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public constructor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query);
							public subStringOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public val(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public endsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public month(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public hasDeleted(): boolean;
							public val(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getSkip(): number;
							public getProjection(): javautilList<any>;
							public val(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public gt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getTop(): number;
							public sub(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public or(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public le(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public val(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public trim(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public sub(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public trim(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public mul(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public and(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public lt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public setQueryNode(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNode): void;
							public ne(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public month(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public endsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public ne(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hour(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public ge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public replace(param0: string, param1: string, param2: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public mod(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public ceiling(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public floor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public eq(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public tableName(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toLower(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public trim(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public second(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public replace(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public not(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public startsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public gt(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public month(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public and(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getQueryNode(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public ne(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public replace(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public second(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hour(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public hour(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public floor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toLower(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public div(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public ceiling(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public toUpper(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public minute(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public toLower(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public mul(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public or(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public lt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public day(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public field(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hour(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public toUpper(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public year(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public add(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public div(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public length(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public sub(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public year(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public replace(param0: string, param1: string, param2: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: string, param1: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public startsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public and(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public add(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public ge(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public mod(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public endsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public le(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public execute(param0: com.microsoft.windowsazure.mobileservices.table.TableJsonQueryCallback): void;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public tableName(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public subString(param0: string, param1: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public setTable(param0: com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable): void;
							public getUserDefinedParameters(): javautilList<any>;
							public hasInlineCount(): boolean;
							public startsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public and(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public day(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public toUpper(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public removeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public ge(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public add(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public year(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public gt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
							public indexOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableJsonQuery;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.MobileServiceTable.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.TableQueryCallback.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryOrder.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class ExecutableQuery {
							public eq(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getTableName(): string;
							public hour(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public length(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public endsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public and(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public val(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public val(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public startsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public subStringOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public mul(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public lt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ge(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public add(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public trim(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public trim(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public mul(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public length(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public minute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public indexOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public mul(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public year(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ceiling(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public endsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public indexOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public gt(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: string, param1: number, param2: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public toLower(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public lt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getOrderBy(): javautilList<any>;
							public mul(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public constructor();
							public gt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public mod(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public removeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public sub(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public execute(): com.google.common.util.concurrent.ListenableFuture;
							public div(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public length(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeProjection(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ge(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public length(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public month(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public removeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public val(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public startsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public or(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public floor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public not(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public round(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toUpper(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public endsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public year(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public div(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public constructor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query);
							public ne(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ge(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ge(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public month(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public day(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hasDeleted(): boolean;
							public val(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public replace(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getSkip(): number;
							public eq(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public getProjection(): javautilList<any>;
							public setTable(param0: com.microsoft.windowsazure.mobileservices.table.MobileServiceTable): void;
							public gt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getTop(): number;
							public eq(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public hour(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public subString(param0: string, param1: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public val(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mul(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public trim(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public lt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public setQueryNode(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNode): void;
							public sub(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public gt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public lt(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public month(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ceiling(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public le(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public sub(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public tableName(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public trim(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public startsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public startsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public month(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public div(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public and(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getQueryNode(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public replace(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ne(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ne(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public hour(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public lt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public or(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public hour(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public floor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toLower(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public replace(param0: string, param1: string, param2: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public toLower(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public removeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public or(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public field(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toUpper(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public year(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public le(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public sub(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public div(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public removeProjection(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public sub(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public year(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public replace(param0: string, param1: string, param2: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: string, param1: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public round(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ne(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public toLower(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ge(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public or(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public and(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toUpper(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public mod(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public subString(param0: string, param1: number, param2: number): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public endsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public le(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mul(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public val(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getUserDefinedParameters(): javautilList<any>;
							public hasInlineCount(): boolean;
							public div(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public toUpper(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public field(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public le(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public tableName(param0: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public ge(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public and(): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public execute(param0: com.microsoft.windowsazure.mobileservices.table.TableQueryCallback): void;
							public gt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
							public eq(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.ExecutableQuery;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class FieldNode {
							public getKind(): com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public accept(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class FieldNodeMerger {
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class FunctionCallKind {
							public static Year: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Month: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Day: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Hour: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Minute: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Second: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Floor: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Ceiling: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Round: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static ToLower: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static ToUpper: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Length: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Trim: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static StartsWith: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static EndsWith: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static SubstringOf: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Concat: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static IndexOf: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Substring: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static Replace: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class FunctionCallNode {
							public getKind(): com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public getFunctionCallKind(): com.microsoft.windowsazure.mobileservices.table.query.FunctionCallKind;
							public addArgument(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNode): void;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public accept(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor): javalangObject;
							public getArguments(): javautilList<any>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class FunctionCallNodeMerger {
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryOrder.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class Query {
							/**
							 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.query.Query interface with the provided implementation.
							 */
							public constructor(implementation: {
								deepClone(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								getQueryNode(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
								setQueryNode(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNode): void;
								hasInlineCount(): boolean;
								hasDeleted(): boolean;
								getOrderBy(): javautilList<any>;
								getProjection(): javautilList<any>;
								getUserDefinedParameters(): javautilList<any>;
								getTop(): number;
								getSkip(): number;
								getTableName(): string;
								tableName(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.Query;
								top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
								skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
								includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								removeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								removeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								removeProjection(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.Query;
								field(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								val(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								val(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
								val(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								val(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
								val(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
								and(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								and(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								or(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								or(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								not(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								not(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								not(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ge(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ge(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ge(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ge(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
								le(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								le(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								le(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								le(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
								gt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								gt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								gt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								gt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
								gt(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								lt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								lt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								lt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								lt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
								eq(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								eq(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								eq(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								eq(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
								eq(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								eq(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
								eq(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ne(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ne(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ne(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ne(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ne(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ne(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ne(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
								add(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								add(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								add(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								sub(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								sub(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								sub(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								mul(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								mul(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								mul(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								div(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								div(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								div(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								mod(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								mod(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								mod(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
								year(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								year(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								month(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								month(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								day(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								day(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								hour(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								hour(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								minute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								minute(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								second(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								second(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								floor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								ceiling(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								round(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								toLower(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								toLower(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								toUpper(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								toUpper(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								length(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								length(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								trim(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								trim(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								startsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								startsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								endsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								endsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								subStringOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								subStringOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								indexOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								indexOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
								subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								subString(param0: string, param1: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
								subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								subString(param0: string, param1: number, param2: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
								replace(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
								replace(param0: string, param1: string, param2: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							});
							public includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getTableName(): string;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public length(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public endsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ceiling(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public tableName(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public trim(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public trim(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mul(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public startsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: string, param1: number, param2: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public month(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public and(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getQueryNode(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public replace(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getOrderBy(): javautilList<any>;
							public mul(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hour(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hour(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public floor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toLower(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toLower(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeProjection(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public or(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public field(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toUpper(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public length(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public year(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public startsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public or(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public round(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public year(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public replace(param0: string, param1: string, param2: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: string, param1: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public and(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hasDeleted(): boolean;
							public val(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getSkip(): number;
							public ne(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getProjection(): javautilList<any>;
							public endsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getTop(): number;
							public le(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getUserDefinedParameters(): javautilList<any>;
							public hasInlineCount(): boolean;
							public mul(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toUpper(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public setQueryNode(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNode): void;
							public month(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryOrder.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryBase {
							public includeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getTableName(): string;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public length(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public endsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ceiling(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public tableName(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public trim(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public trim(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mul(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public select(param0: native.Array<string>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public startsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: string, param1: number, param2: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public month(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public and(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getQueryNode(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public replace(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public second(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getOrderBy(): javautilList<any>;
							public mul(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hour(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hour(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public floor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toLower(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toLower(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeProjection(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public or(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public field(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toUpper(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public length(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public year(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public removeInlineCount(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public includeDeleted(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public startsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public or(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public round(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public year(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public replace(param0: string, param1: string, param2: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public div(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subString(param0: string, param1: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public eq(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public top(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public and(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public hasDeleted(): boolean;
							public val(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public add(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ge(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public parameter(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public subStringOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getSkip(): number;
							public ne(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getProjection(): javautilList<any>;
							public endsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getTop(): number;
							public le(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public orderBy(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public gt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public indexOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public not(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public skip(param0: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public sub(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public day(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public getUserDefinedParameters(): javautilList<any>;
							public hasInlineCount(): boolean;
							public mul(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public val(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public mod(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public toUpper(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public le(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public lt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public minute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public setQueryNode(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNode): void;
							public month(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public ne(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryException {
							public constructor(param0: string, param1: javalangThrowable);
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryNode {
							/**
							 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.query.QueryNode interface with the provided implementation.
							 */
							public constructor(implementation: {
								deepClone(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
								getKind(): com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
								accept(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor): javalangObject;
							});
							public getKind(): com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public accept(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryNodeKind {
							public static Constant: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public static Field: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public static UnaryOperator: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public static BinaryOperator: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public static FunctionCall: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind>;
							public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryNodeMerger {
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryNodeODataWriter {
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryNodeSQLWriter {
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryNodeVisitor {
							/**
							 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor interface with the provided implementation.
							 */
							public constructor(implementation: {
								visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
								visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
								visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
								visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
								visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							});
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryODataWriter {
							public constructor();
							public static getRowSetModifiers(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): string;
							public static getRowFilter(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryOperations {
							public static subStringOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static eq(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static day(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static startsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static val(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static and(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static toLower(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static month(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static le(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static tableName(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static second(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static mul(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static div(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static div(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static eq(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static sub(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static subString(param0: string, param1: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ne(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static lt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static add(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static mul(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static minute(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ge(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static hour(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static mod(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static mod(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static toUpper(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static not(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static and(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static eq(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static endsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static day(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static trim(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static val(param0: native.Array<number>): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static eq(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static length(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static le(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static round(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static le(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static mod(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static not(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static gt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static val(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public constructor();
							public static ne(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static toUpper(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static or(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static not(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static mul(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static gt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ceiling(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static subStringOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static val(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static subString(param0: string, param1: number, param2: number): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static add(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static gt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static toLower(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static length(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static le(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static hour(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static endsWith(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static val(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static lt(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static year(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static div(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static field(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ne(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ge(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static eq(param0: boolean): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ne(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static sub(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static floor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static year(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static replace(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query, param2: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static add(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ne(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static second(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static replace(param0: string, param1: string, param2: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static indexOf(param0: string, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static eq(param0: javautilDate): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static or(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ge(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ge(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static sub(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static month(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static startsWith(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static minute(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static subString(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static lt(): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static concat(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static gt(param0: javalangNumber): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static ne(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static indexOf(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static lt(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static query(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.microsoft.windowsazure.mobileservices.table.query.Query;
							public static trim(param0: string): com.microsoft.windowsazure.mobileservices.table.query.Query;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QueryOrder {
							public static Ascending: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder;
							public static Descending: com.microsoft.windowsazure.mobileservices.table.query.QueryOrder;
							public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.query.QueryOrder>;
							public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.query.QueryOrder;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class QuerySQLWriter {
							public constructor();
							public static getWhereClause(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): string;
							public static getOrderByClause(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): string;
							public static getLimitClause(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): string;
							public static getSelectClause(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class UnaryOperatorKind {
							public static Not: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorKind;
							public static Parenthesis: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorKind;
							public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorKind>;
							public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorKind;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class UnaryOperatorNode {
							public getKind(): com.microsoft.windowsazure.mobileservices.table.query.QueryNodeKind;
							public deepClone(): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public accept(param0: com.microsoft.windowsazure.mobileservices.table.query.QueryNodeVisitor): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.ConstantNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FieldNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.QueryNode.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module query {
						export class UnaryOperatorNodeMerger {
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.UnaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.BinaryOperatorNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FunctionCallNode): javalangObject;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.FieldNode): com.microsoft.windowsazure.mobileservices.table.query.QueryNode;
							public visit(param0: com.microsoft.windowsazure.mobileservices.table.query.ConstantNode): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonDeserializationContext.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonSerializationContext.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module serialization {
						export class DateSerializer {
							public constructor();
							public serialize(param0: javautilDate, param1: javalangreflectType, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
							public static deserialize(param0: string): javautilDate;
							public static serialize(param0: javautilDate): string;
							public deserialize(param0: com.google.gson.JsonElement, param1: javalangreflectType, param2: com.google.gson.JsonDeserializationContext): javautilDate;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.Gson.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module serialization {
						export class JsonEntityParser {
							public constructor();
							public static parseResults<T>(param0: com.google.gson.JsonElement, param1: com.google.gson.Gson, param2: javalangClass<T>): javautilList<any>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonSerializationContext.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module serialization {
						export class LongSerializer {
							public constructor();
							public serialize(param0: javalangLong, param1: javalangreflectType, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.EnumSet.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export class MobileServiceJsonSyncTable {
							public mFeatures: javautilEnumSet<any>;
							public pull(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.common.util.concurrent.ListenableFuture;
							public delete(param0: string): com.google.common.util.concurrent.ListenableFuture;
							public getName(): string;
							public pull(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.google.common.util.concurrent.ListenableFuture;
							public delete(param0: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
							public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.MobileServiceClient);
							public lookUp(param0: string): com.google.common.util.concurrent.ListenableFuture;
							public update(param0: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
							public purge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.common.util.concurrent.ListenableFuture;
							public insert(param0: com.google.gson.JsonObject): com.google.common.util.concurrent.ListenableFuture;
							public read(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.common.util.concurrent.ListenableFuture;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.synchandler.MobileServiceSyncHandler.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export class MobileServiceSyncContext {
							public cancelAndUpdateItem(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError): void;
							public getPendingOperations(): number;
							public initialize(param0: com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore, param1: com.microsoft.windowsazure.mobileservices.table.sync.synchandler.MobileServiceSyncHandler): com.google.common.util.concurrent.ListenableFuture;
							public updateOperationAndItem(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError, param1: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind, param2: com.google.gson.JsonObject): void;
							public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceClient);
							public getStore(): com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore;
							public push(): com.google.common.util.concurrent.ListenableFuture;
							public getHandler(): com.microsoft.windowsazure.mobileservices.table.sync.synchandler.MobileServiceSyncHandler;
							public cancelAndDiscardItem(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError): void;
							public cancelAndUpdateItem(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError, param1: com.google.gson.JsonObject): void;
							public isInitialized(): boolean;
						}
						export module MobileServiceSyncContext {
							export class LockProtectedOperation {
							}
							export class PushSyncRequest {
							}
							export class PushSyncRequestConsumer {
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.common.util.concurrent.ListenableFuture.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export class MobileServiceSyncTable {
							public update(param0: javalangObject): com.google.common.util.concurrent.ListenableFuture;
							public pull(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.common.util.concurrent.ListenableFuture;
							public delete(param0: javalangObject): com.google.common.util.concurrent.ListenableFuture;
							public delete(param0: string): com.google.common.util.concurrent.ListenableFuture;
							public getName(): string;
							public pull(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string): com.google.common.util.concurrent.ListenableFuture;
							// public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.MobileServiceClient, param2: javalangClass);
							public lookUp(param0: string): com.google.common.util.concurrent.ListenableFuture;
							public purge(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.common.util.concurrent.ListenableFuture;
							public insert(param0: javalangObject): com.google.common.util.concurrent.ListenableFuture;
							public read(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.common.util.concurrent.ListenableFuture;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module localstore {
							export class ColumnDataInfo {
								public constructor(param0: com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType, param1: string);
								public getOriginalName(): string;
								public getColumnDataType(): com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module localstore {
							export class ColumnDataType {
								public static Boolean: com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
								public static Integer: com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
								public static Real: com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
								public static String: com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
								public static Date: com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
								public static DateTimeOffset: com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
								public static Other: com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
								public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType;
								public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.sync.localstore.ColumnDataType>;
							}
						}
					}
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module localstore {
							export class MobileServiceLocalStore {
								/**
								 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore interface with the provided implementation.
								 */
								public constructor(implementation: {
									initialize(): void;
									defineTable(param0: string, param1: javautilMap<any, any>): void;
									read(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.gson.JsonElement;
									lookup(param0: string, param1: string): com.google.gson.JsonObject;
									upsert(param0: string, param1: com.google.gson.JsonObject, param2: boolean): void;
									upsert(param0: string, param1: native.Array<com.google.gson.JsonObject>, param2: boolean): void;
									delete(param0: string, param1: string): void;
									delete(param0: string, param1: native.Array<string>): void;
									delete(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): void;
								});
								public read(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.gson.JsonElement;
								public lookup(param0: string, param1: string): com.google.gson.JsonObject;
								public upsert(param0: string, param1: com.google.gson.JsonObject, param2: boolean): void;
								public delete(param0: string, param1: string): void;
								public delete(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): void;
								public delete(param0: string, param1: native.Array<string>): void;
								public initialize(): void;
								public defineTable(param0: string, param1: javautilMap<any, any>): void;
								public upsert(param0: string, param1: native.Array<com.google.gson.JsonObject>, param2: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module localstore {
							export class MobileServiceLocalStoreException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor(param0: string);
								public constructor(param0: javalangThrowable);
							}
						}
					}
				}
			}
		}
	}
}

import androiddatabasesqliteSQLiteDatabaseCursorFactory = android.database.sqlite.SQLiteDatabase.CursorFactory;
import androiddatabaseDatabaseErrorHandler = android.database.DatabaseErrorHandler;
import androiddatabasesqliteSQLiteDatabase = android.database.sqlite.SQLiteDatabase;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.DatabaseErrorHandler.d.ts" />
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.google.gson.JsonElement.d.ts" />
/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module localstore {
							export class SQLiteLocalStore {
								public constructor(param0: androidcontentContext, param1: string, param2: androiddatabasesqliteSQLiteDatabaseCursorFactory, param3: number, param4: androiddatabaseDatabaseErrorHandler);
								public constructor(param0: androidcontentContext, param1: string, param2: androiddatabasesqliteSQLiteDatabaseCursorFactory, param3: number);
								public lookup(param0: string, param1: string): com.google.gson.JsonObject;
								public onUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
								public delete(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): void;
								public delete(param0: string, param1: native.Array<string>): void;
								public defineTable(param0: string, param1: javautilMap<any, any>): void;
								public read(param0: com.microsoft.windowsazure.mobileservices.table.query.Query): com.google.gson.JsonElement;
								public onCreate(param0: androiddatabasesqliteSQLiteDatabase): void;
								public upsert(param0: string, param1: com.google.gson.JsonObject, param2: boolean): void;
								public delete(param0: string, param1: string): void;
								public initialize(): void;
								public upsert(param0: string, param1: native.Array<com.google.gson.JsonObject>, param2: boolean): void;
							}
							export module SQLiteLocalStore {
								export class Statement {
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export abstract class AbstractTableOperation {
								public getTableItemId(): string;
								public setOperationState(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState): void;
								public getTableName(): string;
								public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState, param5: com.google.gson.JsonObject);
								public getKind(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public getItem(): com.google.gson.JsonObject;
								public getItemId(): string;
								public setItem(param0: com.google.gson.JsonObject): void;
								public constructor(param0: string, param1: string);
								public getCreatedAt(): javautilDate;
								public accept(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor): javalangObject;
								public getId(): string;
								public getOperationState(): com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class DeleteOperation extends com.microsoft.windowsazure.mobileservices.table.sync.operations.AbstractTableOperation {
								public getTableItemId(): string;
								public setOperationState(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState): void;
								public getTableName(): string;
								public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState, param5: com.google.gson.JsonObject);
								public getKind(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public getItem(): com.google.gson.JsonObject;
								public getItemId(): string;
								public setItem(param0: com.google.gson.JsonObject): void;
								public constructor(param0: string, param1: string);
								public getCreatedAt(): javautilDate;
								public accept(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor): javalangObject;
								public getId(): string;
								public getOperationState(): com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class DeleteOperationCollapser {
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class InsertOperation extends com.microsoft.windowsazure.mobileservices.table.sync.operations.AbstractTableOperation {
								public getTableItemId(): string;
								public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState);
								public setOperationState(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState): void;
								public getTableName(): string;
								public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState, param5: com.google.gson.JsonObject);
								public getKind(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public getItem(): com.google.gson.JsonObject;
								public getItemId(): string;
								public setItem(param0: com.google.gson.JsonObject): void;
								public constructor(param0: string, param1: string);
								public getCreatedAt(): javautilDate;
								public accept(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor): javalangObject;
								public getId(): string;
								public getOperationState(): com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class InsertOperationCollapser {
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class LocalTableOperationProcessor {
								public getItem(): com.google.gson.JsonObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangVoid;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangObject;
								public setItem(param0: com.google.gson.JsonObject): void;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangVoid;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangObject;
								public constructor(param0: com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore, param1: com.google.gson.JsonObject);
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangVoid;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class MobileServiceTableOperationState {
								public static Pending: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
								public static Attempted: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
								public static Failed: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
								public static parse(param0: number): com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
								public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState>;
								public getValue(): number;
								public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.MobileServiceClient.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class RemoteTableOperationProcessor {
								public constructor(param0: com.microsoft.windowsazure.mobileservices.MobileServiceClient, param1: com.google.gson.JsonObject);
								public getItem(): com.google.gson.JsonObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): com.google.gson.JsonObject;
								public setItem(param0: com.google.gson.JsonObject): void;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): com.google.gson.JsonObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): com.google.gson.JsonObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class TableOperation {
								/**
								 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation interface with the provided implementation.
								 */
								public constructor(implementation: {
									getId(): string;
									getKind(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
									getTableName(): string;
									getItemId(): string;
									getTableItemId(): string;
									getCreatedAt(): javautilDate;
									accept(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor): javalangObject;
									getOperationState(): com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
									setOperationState(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState): void;
									getItem(): com.google.gson.JsonObject;
									setItem(param0: com.google.gson.JsonObject): void;
								});
								public getKind(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public getItem(): com.google.gson.JsonObject;
								public getItemId(): string;
								public getTableItemId(): string;
								public setItem(param0: com.google.gson.JsonObject): void;
								public setOperationState(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState): void;
								public getCreatedAt(): javautilDate;
								public getTableName(): string;
								public accept(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor): javalangObject;
								public getId(): string;
								public getOperationState(): com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class TableOperationCollapser {
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangObject;
								public constructor(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceSyncContext.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class TableOperationError {
								public constructor(param0: string, param1: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind, param2: string, param3: string, param4: com.google.gson.JsonObject, param5: string, param6: javalangInteger, param7: string, param8: com.google.gson.JsonObject);
								public modifyOperationType(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind): void;
								public getClientItem(): com.google.gson.JsonObject;
								public getTableName(): string;
								public getOperationId(): string;
								public getServerItem(): com.google.gson.JsonObject;
								public cancelAndUpdateItem(): void;
								public setContext(param0: com.microsoft.windowsazure.mobileservices.table.sync.MobileServiceSyncContext): void;
								public getStatusCode(): javalangInteger;
								public getErrorMessage(): string;
								public getItemId(): string;
								public cancelAndUpdateItem(param0: com.google.gson.JsonObject): void;
								public getOperationKind(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public cancelAndDiscardItem(): void;
								public keepOperationAndUpdateItem(param0: com.google.gson.JsonObject): void;
								public getCreatedAt(): javautilDate;
								public static create(param0: string, param1: string, param2: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind, param3: string, param4: string, param5: com.google.gson.JsonObject, param6: string, param7: javalangInteger, param8: string, param9: com.google.gson.JsonObject, param10: javautilDate): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError;
								public getServerResponse(): string;
								public getId(): string;
								public modifyOperationTypeAndUpdateItem(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind, param1: com.google.gson.JsonObject): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class TableOperationKind {
								public static Insert: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public static Update: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public static Delete: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public getValue(): number;
								public static parse(param0: number): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class TableOperationVisitor {
								/**
								 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor interface with the provided implementation.
								 */
								public constructor(implementation: {
									visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangObject;
									visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangObject;
									visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangObject;
								});
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class UpdateOperation extends com.microsoft.windowsazure.mobileservices.table.sync.operations.AbstractTableOperation {
								public getTableItemId(): string;
								public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState);
								public setOperationState(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState): void;
								public getTableName(): string;
								public constructor(param0: string, param1: string, param2: string, param3: javautilDate, param4: com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState, param5: com.google.gson.JsonObject);
								public getKind(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind;
								public getItem(): com.google.gson.JsonObject;
								public getItemId(): string;
								public setItem(param0: com.google.gson.JsonObject): void;
								public constructor(param0: string, param1: string);
								public getCreatedAt(): javautilDate;
								public accept(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationVisitor): javalangObject;
								public getId(): string;
								public getOperationState(): com.microsoft.windowsazure.mobileservices.table.sync.operations.MobileServiceTableOperationState;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module operations {
							export class UpdateOperationCollapser {
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.DeleteOperation): javalangObject;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.UpdateOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public visit(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.InsertOperation): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonArray.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module pull {
							export class IncrementalPullStrategy extends com.microsoft.windowsazure.mobileservices.table.sync.pull.PullStrategy {
								public static initializeStore(param0: com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore): void;
								public constructor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: string, param2: com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore, param3: com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable);
								public onResultsProcessed(param0: com.google.gson.JsonArray): void;
								public initialize(): void;
								public moveToNextPage(param0: number): boolean;
								public constructor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonArray.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.query.Query.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module pull {
							export class PullStrategy {
								public onResultsProcessed(param0: com.google.gson.JsonArray): void;
								public getLastQuery(): com.microsoft.windowsazure.mobileservices.table.query.Query;
								public initialize(): void;
								public moveToNextPage(param0: number): boolean;
								public constructor(param0: com.microsoft.windowsazure.mobileservices.table.query.Query, param1: com.microsoft.windowsazure.mobileservices.table.MobileServiceJsonTable);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module push {
							export class MobileServicePushCompletionResult {
								public setStatus(param0: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus): void;
								public setOperationErrors(param0: javautilList<any>): void;
								public getStatus(): com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus;
								public constructor();
								public getInternalError(): javalangThrowable;
								public setInternalError(param0: javalangThrowable): void;
								public getOperationErrors(): javautilList<any>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushCompletionResult.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module push {
							export class MobileServicePushFailedException {
								public getPushCompletionResult(): com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushCompletionResult;
								public constructor(param0: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushCompletionResult);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module push {
							export class MobileServicePushStatus {
								public static Complete: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus;
								public static CancelledByNetworkError: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus;
								public static CancelledByAuthenticationError: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus;
								public static CancelledByLocalStoreError: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus;
								public static InternalError: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus;
								public getValue(): number;
								public static valueOf(param0: string): com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus;
								public static values(): native.Array<com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus>;
								public static parse(param0: number): com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushStatus;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module queue {
							export class OperationErrorList {
								public static load(param0: com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore): com.microsoft.windowsazure.mobileservices.table.sync.queue.OperationErrorList;
								public add(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError): void;
								public clear(): void;
								public static initializeStore(param0: com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore): void;
								public countPending(): number;
								public getAll(): javautilList<any>;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module queue {
							export class OperationQueue {
								public dequeue(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public countPending(param0: string): number;
								public static initializeStore(param0: com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore): void;
								public countPending(): number;
								public updateOperationAndItem(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError, param1: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationKind, param2: com.google.gson.JsonObject): void;
								public static load(param0: com.microsoft.windowsazure.mobileservices.table.sync.localstore.MobileServiceLocalStore): com.microsoft.windowsazure.mobileservices.table.sync.queue.OperationQueue;
								public enqueue(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation): void;
								public unbookmark(param0: com.microsoft.windowsazure.mobileservices.table.sync.queue.OperationQueue.Bookmark): void;
								public peek(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public element(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								public removeOperationWithErrorFromQueue(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperationError): void;
								public bookmark(): com.microsoft.windowsazure.mobileservices.table.sync.queue.OperationQueue.Bookmark;
							}
							export module OperationQueue {
								export class Bookmark {
									public isCancelled(): boolean;
									public isCurrentBookmark(): boolean;
									public dequeue(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
									public peek(): com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation;
								}
								export class BookmarkQueueItem {
								}
								export class OperationQueueItem {
									public getId(): string;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.RemoteTableOperationProcessor.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushCompletionResult.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module synchandler {
							export class MobileServiceSyncHandler {
								/**
								 * Constructs a new instance of the com.microsoft.windowsazure.mobileservices.table.sync.synchandler.MobileServiceSyncHandler interface with the provided implementation.
								 */
								public constructor(implementation: {
									executeTableOperation(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.RemoteTableOperationProcessor, param1: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation): com.google.gson.JsonObject;
									onPushComplete(param0: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushCompletionResult): void;
								});
								public executeTableOperation(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.RemoteTableOperationProcessor, param1: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation): com.google.gson.JsonObject;
								public onPushComplete(param0: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushCompletionResult): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module synchandler {
							export class MobileServiceSyncHandlerException {
								public constructor(param0: string, param1: javalangThrowable);
								public constructor(param0: string);
								public constructor(param0: javalangThrowable);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.JsonObject.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.RemoteTableOperationProcessor.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation.d.ts" />
/// <reference path="./com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushCompletionResult.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module table {
					export module sync {
						export module synchandler {
							export class SimpleSyncHandler {
								public executeTableOperation(param0: com.microsoft.windowsazure.mobileservices.table.sync.operations.RemoteTableOperationProcessor, param1: com.microsoft.windowsazure.mobileservices.table.sync.operations.TableOperation): com.google.gson.JsonObject;
								public onPushComplete(param0: com.microsoft.windowsazure.mobileservices.table.sync.push.MobileServicePushCompletionResult): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module threading {
					export class MultiLockDictionary {
						public lock(param0: javalangObject): com.microsoft.windowsazure.mobileservices.threading.MultiLockDictionary.MultiLock;
						public constructor();
						public unLock(param0: com.microsoft.windowsazure.mobileservices.threading.MultiLockDictionary.MultiLock): void;
					}
					export module MultiLockDictionary {
						export class MultiLock {
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module microsoft {
		export module windowsazure {
			export module mobileservices {
				export module threading {
					export class MultiReadWriteLockDictionary {
						public constructor();
						public unLockRead(param0: com.microsoft.windowsazure.mobileservices.threading.MultiReadWriteLockDictionary.MultiReadWriteLock): void;
						public lockRead(param0: javalangObject): com.microsoft.windowsazure.mobileservices.threading.MultiReadWriteLockDictionary.MultiReadWriteLock;
						public lockWrite(param0: javalangObject): com.microsoft.windowsazure.mobileservices.threading.MultiReadWriteLockDictionary.MultiReadWriteLock;
						public unLockWrite(param0: com.microsoft.windowsazure.mobileservices.threading.MultiReadWriteLockDictionary.MultiReadWriteLock): void;
					}
					export module MultiReadWriteLockDictionary {
						export class MultiReadWriteLock {
							public constructor();
						}
					}
				}
			}
		}
	}
}

