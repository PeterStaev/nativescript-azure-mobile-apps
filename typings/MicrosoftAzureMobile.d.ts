
declare class MSClient extends NSObject implements NSCopying {
	
		static alloc(): MSClient; // inherited from NSObject
	
		static clientWithApplicationURL(url: NSURL): MSClient;
	
		static clientWithApplicationURLString(urlString: string): MSClient;
	
		static new(): MSClient; // inherited from NSObject
	
		readonly applicationURL: NSURL;
	
		connectionDelegateQueue: NSOperationQueue;
	
		currentUser: MSUser;
	
		readonly filters: NSArray<MSFilter>;
	
		loginHost: NSURL;
	
		loginPrefix: string;
	
		readonly push: MSPush;
	
		syncContext: MSSyncContext;
	
		constructor(o: { applicationURL: NSURL; });
	
		clientWithFilter(filter: MSFilter): MSClient;
	
		copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
	
		initWithApplicationURL(url: NSURL): this;
	
		invokeAPIBodyHTTPMethodParametersHeadersCompletion(APIName: string, body: any, method: string, parameters: NSDictionary<any, any>, headers: NSDictionary<any, any>, completion: (p1: any, p2: NSHTTPURLResponse, p3: NSError) => void): void;
	
		invokeAPIDataHTTPMethodParametersHeadersCompletion(APIName: string, data: NSData, method: string, parameters: NSDictionary<any, any>, headers: NSDictionary<any, any>, completion: (p1: NSData, p2: NSHTTPURLResponse, p3: NSError) => void): void;
	
		loginViewControllerWithProviderCompletion(provider: string, completion: (p1: MSUser, p2: NSError) => void): MSLoginController;
	
		loginWithProviderControllerAnimatedCompletion(provider: string, controller: UIViewController, animated: boolean, completion: (p1: MSUser, p2: NSError) => void): void;
	
		loginWithProviderParametersControllerAnimatedCompletion(provider: string, parameters: NSDictionary<any, any>, controller: UIViewController, animated: boolean, completion: (p1: MSUser, p2: NSError) => void): void;
	
		loginWithProviderTokenCompletion(provider: string, token: NSDictionary<any, any>, completion: (p1: MSUser, p2: NSError) => void): void;
	
		loginWithProviderUrlSchemeControllerAnimatedCompletion(provider: string, urlScheme: string, controller: UIViewController, animated: boolean, completion: (p1: MSUser, p2: NSError) => void): void;
	
		loginWithProviderUrlSchemeParametersControllerAnimatedCompletion(provider: string, urlScheme: string, parameters: NSDictionary<any, any>, controller: UIViewController, animated: boolean, completion: (p1: MSUser, p2: NSError) => void): void;
	
		logoutWithCompletion(completion: (p1: NSError) => void): void;
	
		refreshUserWithCompletion(completion: (p1: MSUser, p2: NSError) => void): void;
	
		resumeWithURL(URL: NSURL): boolean;
	
		syncTableWithName(tableName: string): MSSyncTable;
	
		tableWithName(tableName: string): MSTable;
	}
	
	declare class MSConnectionConfiguration extends NSObject {
	
		static alloc(): MSConnectionConfiguration; // inherited from NSObject
	
		static appConfiguration(): MSConnectionConfiguration;
	
		static new(): MSConnectionConfiguration; // inherited from NSObject
	
		apiEndpoint: string;
	
		tableEndpoint: string;
	
		revertToDefaultApiEndpoint(): void;
	
		revertToDefaultTableEndpoint(): void;
	}
	
	declare class MSCoreDataStore extends NSObject implements MSSyncContextDataSource {
	
		static alloc(): MSCoreDataStore; // inherited from NSObject
	
		static new(): MSCoreDataStore; // inherited from NSObject
	
		readonly context: NSManagedObjectContext;
	
		readonly debugDescription: string; // inherited from NSObjectProtocol
	
		readonly description: string; // inherited from NSObjectProtocol
	
		handlesSyncTableOperations: boolean; // inherited from MSSyncContextDataSource
	
		readonly hash: number; // inherited from NSObjectProtocol
	
		readonly isProxy: boolean; // inherited from NSObjectProtocol
	
		readonly superclass: typeof NSObject; // inherited from NSObjectProtocol
	
		readonly  // inherited from NSObjectProtocol
	
		constructor(o: { managedObjectContext: NSManagedObjectContext; });
	
		class(): typeof NSObject;
	
		configTableName(): string;
	
		conformsToProtocol(aProtocol: any /* Protocol */): boolean;
	
		deleteItemsWithIdsTableOrError(items: NSArray<string>, table: string): boolean;
	
		deleteUsingQueryOrError(query: MSQuery): boolean;
	
		errorTableName(): string;
	
		initWithManagedObjectContext(context: NSManagedObjectContext): this;
	
		isEqual(object: any): boolean;
	
		isKindOfClass(aClass: typeof NSObject): boolean;
	
		isMemberOfClass(aClass: typeof NSObject): boolean;
	
		operationTableName(): string;
	
		performSelector(aSelector: string): any;
	
		performSelectorWithObject(aSelector: string, object: any): any;
	
		performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;
	
		readTableWithItemIdOrError(table: string, itemId: string): NSDictionary<any, any>;
	
		readWithQueryOrError(query: MSQuery): MSSyncContextReadResult;
	
		respondsToSelector(aSelector: string): boolean;
	
		retainCount(): number;
	
		self(): this;
	
		systemPropertiesForTable(table: string): number;
	
		tableItemFromManagedObject(object: NSManagedObject): NSDictionary<any, any>;
	
		upsertItemsTableOrError(items: NSArray<NSDictionary<any, any>>, table: string): boolean;
	}
	
	declare class MSDateOffset extends NSObject {
	
		static alloc(): MSDateOffset; // inherited from NSObject
	
		static new(): MSDateOffset; // inherited from NSObject
	
		static offsetFromDate(date: Date): MSDateOffset;
	
		date: Date;
	
		constructor(o: { date: Date; });
	
		initWithDate(date: Date): this;
	}
	
	declare var MSErrorDomain: string;
	
	declare var MSErrorPushResultKey: string;
	
	declare var MSErrorRequestKey: string;
	
	declare var MSErrorResponseKey: string;
	
	declare var MSErrorServerItemKey: string;
	
	interface MSFilter extends NSObjectProtocol {
	
		handleRequestNextResponse(request: NSURLRequest, next: (p1: NSURLRequest, p2: (p1: NSHTTPURLResponse, p2: NSData, p3: NSError) => void) => void, response: (p1: NSHTTPURLResponse, p2: NSData, p3: NSError) => void): void;
	}
	declare var MSFilter: {
	
		prototype: MSFilter;
	};
	
	declare class MSInstallation extends NSObject {
	
		static alloc(): MSInstallation; // inherited from NSObject
	
		static installationWithInstallationIdPlatformPushChannelPushVariablesTagsTemplates(installationId: string, platform: string, pushChannel: string, pushVariables: NSDictionary<any, any>, tags: NSArray<any>, templates: NSDictionary<any, any>): any;
	
		static installationWithInstallationIdPlatformPushChannelPushVariablesTagsTemplatesExpirationTimePushChannelExpired(installationId: string, platform: string, pushChannel: string, pushVariables: NSDictionary<any, any>, tags: NSArray<any>, templates: NSDictionary<any, any>, expirationTime: Date, pushChannelExpired: boolean): any;
	
		static new(): MSInstallation; // inherited from NSObject
	
		readonly expirationTime: Date;
	
		installationId: string;
	
		platform: string;
	
		pushChannel: string;
	
		readonly pushChannelExpired: boolean;
	
		pushVariables: NSDictionary<any, any>;
	
		tags: NSArray<any>;
	
		templates: NSDictionary<any, any>;
	}
	
	declare class MSInstallationTemplate extends NSObject {
	
		static alloc(): MSInstallationTemplate; // inherited from NSObject
	
		static installationTemplateWithBodyExpiryTags(body: string, expiry: string, tags: NSArray<any>): any;
	
		static new(): MSInstallationTemplate; // inherited from NSObject
	
		body: string;
	
		expiry: string;
	
		tags: NSArray<any>;
	}
	
	declare class MSLoginController extends UIViewController {
	
		static alloc(): MSLoginController; // inherited from NSObject
	
		static new(): MSLoginController; // inherited from NSObject
	
		readonly activityIndicator: UIActivityIndicatorView;
	
		readonly client: MSClient;
	
		readonly provider: string;
	
		showToolbar: boolean;
	
		readonly toolbar: UIToolbar;
	
		toolbarPosition: UIBarPosition;
	
		constructor(o: { client: MSClient; provider: string; completion: (p1: MSUser, p2: NSError) => void; });
	
		constructor(o: { client: MSClient; provider: string; parameters: NSDictionary<any, any>; completion: (p1: MSUser, p2: NSError) => void; });
	
		initWithClientProviderCompletion(client: MSClient, provider: string, completion: (p1: MSUser, p2: NSError) => void): this;
	
		initWithClientProviderParametersCompletion(client: MSClient, provider: string, parameters: NSDictionary<any, any>, completion: (p1: MSUser, p2: NSError) => void): this;
	}
	
	declare class MSManagedObjectObserver extends NSObject {
	
		static alloc(): MSManagedObjectObserver; // inherited from NSObject
	
		static new(): MSManagedObjectObserver; // inherited from NSObject
	
		observerActionCompleted: (p1: MSTableOperationTypes, p2: NSDictionary<any, any>, p3: NSError) => void;
	
		constructor(o: { client: MSClient; context: NSManagedObjectContext; });
	
		initWithClientContext(client: MSClient, context: NSManagedObjectContext): this;
	}
	
	declare class MSPullSettings extends NSObject {
	
		static alloc(): MSPullSettings; // inherited from NSObject
	
		static new(): MSPullSettings; // inherited from NSObject
	
		pageSize: number;
	
		constructor(o: { pageSize: number; });
	
		initWithPageSize(pageSize: number): this;
	}
	
	declare class MSPush extends NSObject {
	
		static alloc(): MSPush; // inherited from NSObject
	
		static new(): MSPush; // inherited from NSObject
	
		readonly client: MSClient;
	
		readonly installationId: string;
	
		constructor(o: { client: MSClient; });
	
		initWithClient(client: MSClient): this;
	
		registerDeviceTokenCompletion(deviceToken: NSData, completion: (p1: NSError) => void): void;
	
		registerDeviceTokenTemplateCompletion(deviceToken: NSData, template: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
	
		registerInstallationCompletion(installation: MSInstallation, completion: (p1: NSError) => void): void;
	
		unregisterWithCompletion(completion: (p1: NSError) => void): void;
	}
	
	declare class MSQuery extends NSObject implements NSCopying {
	
		static alloc(): MSQuery; // inherited from NSObject
	
		static new(): MSQuery; // inherited from NSObject
	
		fetchLimit: number;
	
		fetchOffset: number;
	
		includeTotalCount: boolean;
	
		orderBy: NSArray<NSSortDescriptor>;
	
		parameters: NSDictionary<any, any>;
	
		predicate: NSPredicate;
	
		selectFields: NSArray<string>;
	
		syncTable: MSSyncTable;
	
		table: MSTable;
	
		constructor(o: { syncTable: MSSyncTable; });
	
		constructor(o: { syncTable: MSSyncTable; predicate: NSPredicate; });
	
		constructor(o: { table: MSTable; });
	
		constructor(o: { table: MSTable; predicate: NSPredicate; });
	
		copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
	
		initWithSyncTable(table: MSSyncTable): this;
	
		initWithSyncTablePredicate(table: MSSyncTable, predicate: NSPredicate): this;
	
		initWithTable(table: MSTable): this;
	
		initWithTablePredicate(table: MSTable, predicate: NSPredicate): this;
	
		orderByAscending(field: string): void;
	
		orderByDescending(field: string): void;
	
		queryStringOrError(): string;
	
		readWithCompletion(completion: (p1: MSQueryResult, p2: NSError) => void): void;
	}
	
	declare class MSQueryResult extends NSObject {
	
		static alloc(): MSQueryResult; // inherited from NSObject
	
		static new(): MSQueryResult; // inherited from NSObject
	
		readonly items: NSArray<NSDictionary<any, any>>;
	
		readonly nextLink: string;
	
		readonly totalCount: number;
	
		constructor(o: { items: NSArray<NSDictionary<any, any>>; totalCount: number; nextLink: string; });
	
		initWithItemsTotalCountNextLink(items: NSArray<NSDictionary<any, any>>, totalCount: number, nextLink: string): this;
	}
	
	declare class MSSyncContext extends NSObject {
	
		static alloc(): MSSyncContext; // inherited from NSObject
	
		static new(): MSSyncContext; // inherited from NSObject
	
		dataSource: MSSyncContextDataSource;
	
		delegate: MSSyncContextDelegate;
	
		readonly pendingOperationsCount: number;
	
		constructor(o: { delegate: MSSyncContextDelegate; dataSource: MSSyncContextDataSource; callback: NSOperationQueue; });
	
		initWithDelegateDataSourceCallback(delegate: MSSyncContextDelegate, dataSource: MSSyncContextDataSource, callbackQueue: NSOperationQueue): this;
	
		pushWithCompletion(completion: (p1: NSError) => void): NSOperation;
	}
	
	interface MSSyncContextDataSource extends NSObjectProtocol {
	
		handlesSyncTableOperations: boolean;
	
		configTableName(): string;
	
		deleteItemsWithIdsTableOrError(items: NSArray<string>, table: string): boolean;
	
		deleteUsingQueryOrError(query: MSQuery): boolean;
	
		errorTableName(): string;
	
		operationTableName(): string;
	
		readTableWithItemIdOrError(table: string, itemId: string): NSDictionary<any, any>;
	
		readWithQueryOrError(query: MSQuery): MSSyncContextReadResult;
	
		systemPropertiesForTable?(table: string): number;
	
		upsertItemsTableOrError(items: NSArray<NSDictionary<any, any>>, table: string): boolean;
	}
	declare var MSSyncContextDataSource: {
	
		prototype: MSSyncContextDataSource;
	};
	
	interface MSSyncContextDelegate extends NSObjectProtocol {
	
		syncContextOnPushCompleteWithErrorCompletion?(context: MSSyncContext, error: NSError, completion: () => void): void;
	
		tableOperationOnComplete?(operation: MSTableOperation, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	}
	declare var MSSyncContextDelegate: {
	
		prototype: MSSyncContextDelegate;
	};
	
	declare class MSSyncContextReadResult extends NSObject {
	
		static alloc(): MSSyncContextReadResult; // inherited from NSObject
	
		static new(): MSSyncContextReadResult; // inherited from NSObject
	
		readonly items: NSArray<NSDictionary<any, any>>;
	
		readonly totalCount: number;
	
		constructor(o: { count: number; items: NSArray<NSDictionary<any, any>>; });
	
		initWithCountItems(count: number, items: NSArray<NSDictionary<any, any>>): this;
	}
	
	declare class MSSyncTable extends NSObject {
	
		static alloc(): MSSyncTable; // inherited from NSObject
	
		static new(): MSSyncTable; // inherited from NSObject
	
		readonly client: MSClient;
	
		readonly name: string;
	
		constructor(o: { name: string; client: MSClient; });
	
		deleteCompletion(item: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
	
		forcePurgeWithCompletion(completion: (p1: NSError) => void): NSOperation;
	
		initWithNameClient(tableName: string, client: MSClient): this;
	
		insertCompletion(item: NSDictionary<any, any>, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		pullWithQueryQueryIdCompletion(query: MSQuery, queryId: string, completion: (p1: NSError) => void): NSOperation;
	
		pullWithQueryQueryIdSettingsCompletion(query: MSQuery, queryId: string, pullSettings: MSPullSettings, completion: (p1: NSError) => void): NSOperation;
	
		purgeWithQueryCompletion(query: MSQuery, completion: (p1: NSError) => void): NSOperation;
	
		query(): MSQuery;
	
		queryWithPredicate(predicate: NSPredicate): MSQuery;
	
		readWithCompletion(completion: (p1: MSQueryResult, p2: NSError) => void): void;
	
		readWithIdCompletion(itemId: string, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		readWithPredicateCompletion(predicate: NSPredicate, completion: (p1: MSQueryResult, p2: NSError) => void): void;
	
		updateCompletion(item: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
	}
	
	declare var MSSystemColumnCreatedAt: string;
	
	declare var MSSystemColumnDeleted: string;
	
	declare var MSSystemColumnId: string;
	
	declare var MSSystemColumnUpdatedAt: string;
	
	declare var MSSystemColumnVersion: string;
	
	declare const enum MSSystemProperties {
	
		PropertyNone = 0,
	
		PropertyCreatedAt = 1,
	
		PropertyUpdatedAt = 2,
	
		PropertyVersion = 4,
	
		PropertyDeleted = 8,
	
		PropertyAll = 65535
	}
	
	declare class MSTable extends NSObject {
	
		static alloc(): MSTable; // inherited from NSObject
	
		static new(): MSTable; // inherited from NSObject
	
		readonly client: MSClient;
	
		readonly name: string;
	
		constructor(o: { name: string; client: MSClient; });
	
		deleteCompletion(item: NSDictionary<any, any>, completion: (p1: any, p2: NSError) => void): void;
	
		deleteParametersCompletion(item: NSDictionary<any, any>, parameters: NSDictionary<any, any>, completion: (p1: any, p2: NSError) => void): void;
	
		deleteWithIdCompletion(itemId: any, completion: (p1: any, p2: NSError) => void): void;
	
		deleteWithIdParametersCompletion(itemId: any, parameters: NSDictionary<any, any>, completion: (p1: any, p2: NSError) => void): void;
	
		initWithNameClient(tableName: string, client: MSClient): this;
	
		insertCompletion(item: NSDictionary<any, any>, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		insertParametersCompletion(item: NSDictionary<any, any>, parameters: NSDictionary<any, any>, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		query(): MSQuery;
	
		queryWithPredicate(predicate: NSPredicate): MSQuery;
	
		readWithCompletion(completion: (p1: MSQueryResult, p2: NSError) => void): void;
	
		readWithIdCompletion(itemId: any, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		readWithIdParametersCompletion(itemId: any, parameters: NSDictionary<any, any>, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		readWithPredicateCompletion(predicate: NSPredicate, completion: (p1: MSQueryResult, p2: NSError) => void): void;
	
		readWithQueryStringCompletion(queryString: string, completion: (p1: MSQueryResult, p2: NSError) => void): void;
	
		undeleteCompletion(item: NSDictionary<any, any>, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		undeleteParametersCompletion(item: NSDictionary<any, any>, parameters: NSDictionary<any, any>, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		updateCompletion(item: NSDictionary<any, any>, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	
		updateParametersCompletion(item: NSDictionary<any, any>, parameters: NSDictionary<any, any>, completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	}
	
	declare class MSTableOperation extends NSObject {
	
		static alloc(): MSTableOperation; // inherited from NSObject
	
		static new(): MSTableOperation; // inherited from NSObject
	
		item: NSDictionary<any, any>;
	
		readonly itemId: string;
	
		readonly tableName: string;
	
		readonly type: MSTableOperationTypes;
	
		cancelPush(): void;
	
		executeWithCompletion(completion: (p1: NSDictionary<any, any>, p2: NSError) => void): void;
	}
	
	declare class MSTableOperationError extends NSObject {
	
		static alloc(): MSTableOperationError; // inherited from NSObject
	
		static new(): MSTableOperationError; // inherited from NSObject
	
		readonly code: number;
	
		readonly domain: string;
	
		readonly guid: string;
	
		handled: boolean;
	
		readonly item: NSDictionary<any, any>;
	
		readonly itemId: string;
	
		readonly operation: MSTableOperationTypes;
	
		readonly serverItem: NSDictionary<any, any>;
	
		readonly statusCode: number;
	
		readonly table: string;
	
		constructor(o: { operation: MSTableOperation; item: NSDictionary<any, any>; context: MSSyncContext; error: NSError; });
	
		constructor(o: { operation: MSTableOperation; item: NSDictionary<any, any>; error: NSError; });
	
		constructor(o: { serializedItem: NSDictionary<any, any>; });
	
		constructor(o: { serializedItem: NSDictionary<any, any>; context: MSSyncContext; });
	
		cancelOperationAndDiscardItemWithCompletion(completion: (p1: NSError) => void): void;
	
		cancelOperationAndUpdateItemCompletion(item: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
	
		initWithOperationItemContextError(operation: MSTableOperation, item: NSDictionary<any, any>, context: MSSyncContext, error: NSError): this;
	
		initWithOperationItemError(operation: MSTableOperation, item: NSDictionary<any, any>, error: NSError): this;
	
		initWithSerializedItem(item: NSDictionary<any, any>): this;
	
		initWithSerializedItemContext(item: NSDictionary<any, any>, context: MSSyncContext): this;
	
		keepOperationAndUpdateItemCompletion(item: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
	
		modifyOperationTypeAndUpdateItemCompletion(type: MSTableOperationTypes, item: NSDictionary<any, any>, completion: (p1: NSError) => void): void;
	
		modifyOperationTypeCompletion(type: MSTableOperationTypes, completion: (p1: NSError) => void): void;
	
		serialize(): NSDictionary<any, any>;
	}
	
	declare const enum MSTableOperationTypes {
	
		Insert = 0,
	
		Update = 1,
	
		Delete = 2
	}
	
	declare class MSUser extends NSObject implements NSCopying {
	
		static alloc(): MSUser; // inherited from NSObject
	
		static new(): MSUser; // inherited from NSObject
	
		mobileServiceAuthenticationToken: string;
	
		readonly userId: string;
	
		constructor(o: { userId: string; });
	
		copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
	
		initWithUserId(userId: string): this;
	}
	
	declare var MicrosoftAzureMobileVersionNumber: number;
	
	declare var MicrosoftAzureMobileVersionString: interop.Reference<number>;
	