
declare class MSClient extends NSObject implements NSCopying {

	static alloc(): MSClient; // inherited from NSObject

	static clientWithApplicationURL(url: NSURL): MSClient;

	static clientWithApplicationURLString(urlString: string): MSClient;

	static new(): MSClient; // inherited from NSObject

	/* readonly */ applicationKey: string;

	/* readonly */ applicationURL: NSURL;

	connectionDelegateQueue: NSOperationQueue;

	currentUser: MSUser;

	/* readonly */ filters: NSArray;

	loginHost: NSURL;

	loginPrefix: string;

	/* readonly */ push: MSPush;

	syncContext: MSSyncContext;

	constructor(); // inherited from NSObject

	constructor(o: { applicationURL: NSURL; });

	clientWithFilter(filter: MSFilter): MSClient;

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	invokeAPIBodyHTTPMethodParametersHeadersCompletion(APIName: string, body: any, method: string, parameters: NSDictionary, headers: NSDictionary, completion: (p1: any, p2: NSHTTPURLResponse, p3: NSError) => void): void;

	invokeAPIDataHTTPMethodParametersHeadersCompletion(APIName: string, data: NSData, method: string, parameters: NSDictionary, headers: NSDictionary, completion: (p1: NSData, p2: NSHTTPURLResponse, p3: NSError) => void): void;

	loginViewControllerWithProviderCompletion(provider: string, completion: (p1: MSUser, p2: NSError) => void): MSLoginController;

	loginWithProviderControllerAnimatedCompletion(provider: string, controller: UIViewController, animated: boolean, completion: (p1: MSUser, p2: NSError) => void): void;

	loginWithProviderParametersControllerAnimatedCompletion(provider: string, parameters: NSDictionary, controller: UIViewController, animated: boolean, completion: (p1: MSUser, p2: NSError) => void): void;

	loginWithProviderTokenCompletion(provider: string, token: NSDictionary, completion: (p1: MSUser, p2: NSError) => void): void;

	logoutWithCompletion(completion: (p1: NSError) => void): void;

	self(): MSClient; // inherited from NSObjectProtocol

	syncTableWithName(tableName: string): MSSyncTable;

	tableWithName(tableName: string): MSTable;
}

declare class MSConnectionConfiguration extends NSObject {

	static alloc(): MSConnectionConfiguration; // inherited from NSObject

	static appConfiguration(): MSConnectionConfiguration;

	static new(): MSConnectionConfiguration; // inherited from NSObject

	apiEndpoint: string;

	tableEndpoint: string;

	constructor(); // inherited from NSObject

	revertToDefaultApiEndpoint(): void;

	revertToDefaultTableEndpoint(): void;

	self(): MSConnectionConfiguration; // inherited from NSObjectProtocol
}

declare class MSCoreDataStore extends NSObject implements MSSyncContextDataSource {

	static alloc(): MSCoreDataStore; // inherited from NSObject

	static new(): MSCoreDataStore; // inherited from NSObject

	/* readonly */ context: NSManagedObjectContext;

	handlesSyncTableOperations: boolean; // inherited from MSSyncContextDataSource

	constructor(); // inherited from NSObject

	constructor(o: { managedObjectContext: NSManagedObjectContext; });

	configTableName(): string; // inherited from MSSyncContextDataSource

	deleteItemsWithIdsTableOrError(items: NSArray, table: string): boolean; // inherited from MSSyncContextDataSource

	deleteUsingQueryOrError(query: MSQuery): boolean; // inherited from MSSyncContextDataSource

	errorTableName(): string; // inherited from MSSyncContextDataSource

	operationTableName(): string; // inherited from MSSyncContextDataSource

	readTableWithItemIdOrError(table: string, itemId: string): NSDictionary; // inherited from MSSyncContextDataSource

	readWithQueryOrError(query: MSQuery): MSSyncContextReadResult; // inherited from MSSyncContextDataSource

	self(): MSCoreDataStore; // inherited from NSObjectProtocol

	systemPropertiesForTable(table: string): number; // inherited from MSSyncContextDataSource

	tableItemFromManagedObject(object: NSObject): NSDictionary;

	upsertItemsTableOrError(items: NSArray, table: string): boolean; // inherited from MSSyncContextDataSource
}

declare class MSDateOffset extends NSObject {

	static alloc(): MSDateOffset; // inherited from NSObject

	static new(): MSDateOffset; // inherited from NSObject

	static offsetFromDate(date: Date): MSDateOffset;

	date: Date;

	constructor(); // inherited from NSObject

	constructor(o: { date: Date; });

	self(): MSDateOffset; // inherited from NSObjectProtocol
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

declare class MSLoginController extends UIViewController {

	/* readonly */ activityIndicator: UIActivityIndicatorView;

	/* readonly */ client: MSClient;

	/* readonly */ provider: string;

	showToolbar: boolean;

	/* readonly */ toolbar: UIToolbar;

	toolbarPosition: UIBarPosition;

	constructor(o: { client: MSClient; provider: string; completion: (p1: MSUser, p2: NSError) => void; });

	constructor(o: { client: MSClient; provider: string; parameters: NSDictionary; completion: (p1: MSUser, p2: NSError) => void; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { nibName: string; bundle: NSBundle; }); // inherited from UIViewController

	self(): MSLoginController; // inherited from NSObjectProtocol
}

declare class MSManagedObjectObserver extends NSObject {

	static alloc(): MSManagedObjectObserver; // inherited from NSObject

	static new(): MSManagedObjectObserver; // inherited from NSObject

	observerActionCompleted: (p1: MSTableOperationTypes, p2: NSDictionary, p3: NSError) => void;

	constructor(); // inherited from NSObject

	constructor(o: { client: MSClient; context: NSManagedObjectContext; });

	self(): MSManagedObjectObserver; // inherited from NSObjectProtocol
}

declare class MSPullSettings extends NSObject {

	static alloc(): MSPullSettings; // inherited from NSObject

	static new(): MSPullSettings; // inherited from NSObject

	pageSize: number;

	constructor(); // inherited from NSObject

	constructor(o: { pageSize: number; });

	self(): MSPullSettings; // inherited from NSObjectProtocol
}

declare class MSPush extends NSObject {

	static alloc(): MSPush; // inherited from NSObject

	static new(): MSPush; // inherited from NSObject

	/* readonly */ client: MSClient;

	/* readonly */ installationId: string;

	constructor(); // inherited from NSObject

	constructor(o: { client: MSClient; });

	registerDeviceTokenCompletion(deviceToken: NSData, completion: (p1: NSError) => void): void;

	registerDeviceTokenTemplateCompletion(deviceToken: NSData, template: NSDictionary, completion: (p1: NSError) => void): void;

	self(): MSPush; // inherited from NSObjectProtocol

	unregisterWithCompletion(completion: (p1: NSError) => void): void;
}

declare class MSQuery extends NSObject implements NSCopying {

	static alloc(): MSQuery; // inherited from NSObject

	static new(): MSQuery; // inherited from NSObject

	fetchLimit: number;

	fetchOffset: number;

	includeTotalCount: boolean;

	orderBy: NSArray;

	parameters: NSDictionary;

	predicate: NSPredicate;

	selectFields: NSArray;

	syncTable: MSSyncTable;

	table: MSTable;

	constructor(); // inherited from NSObject

	constructor(o: { syncTable: MSSyncTable; });

	constructor(o: { syncTable: MSSyncTable; predicate: NSPredicate; });

	constructor(o: { table: MSTable; });

	constructor(o: { table: MSTable; predicate: NSPredicate; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	orderByAscending(field: string): void;

	orderByDescending(field: string): void;

	queryStringOrError(): string;

	readWithCompletion(completion: (p1: MSQueryResult, p2: NSError) => void): void;

	self(): MSQuery; // inherited from NSObjectProtocol
}

declare class MSQueryResult extends NSObject {

	static alloc(): MSQueryResult; // inherited from NSObject

	static new(): MSQueryResult; // inherited from NSObject

	/* readonly */ items: NSArray;

	/* readonly */ nextLink: string;

	/* readonly */ totalCount: number;

	constructor(); // inherited from NSObject

	constructor(o: { items: NSArray; totalCount: number; nextLink: string; });

	self(): MSQueryResult; // inherited from NSObjectProtocol
}

declare class MSSyncContext extends NSObject {

	static alloc(): MSSyncContext; // inherited from NSObject

	static new(): MSSyncContext; // inherited from NSObject

	dataSource: MSSyncContextDataSource;

	delegate: MSSyncContextDelegate;

	/* readonly */ pendingOperationsCount: number;

	constructor(); // inherited from NSObject

	constructor(o: { delegate: MSSyncContextDelegate; dataSource: MSSyncContextDataSource; callback: NSOperationQueue; });

	pushWithCompletion(completion: (p1: NSError) => void): NSOperation;

	self(): MSSyncContext; // inherited from NSObjectProtocol
}

interface MSSyncContextDataSource extends NSObjectProtocol {

	handlesSyncTableOperations: boolean;

	configTableName(): string;

	deleteItemsWithIdsTableOrError(items: NSArray, table: string): boolean;

	deleteUsingQueryOrError(query: MSQuery): boolean;

	errorTableName(): string;

	operationTableName(): string;

	readTableWithItemIdOrError(table: string, itemId: string): NSDictionary;

	readWithQueryOrError(query: MSQuery): MSSyncContextReadResult;

	systemPropertiesForTable?(table: string): number;

	upsertItemsTableOrError(items: NSArray, table: string): boolean;
}
declare var MSSyncContextDataSource: {

	prototype: MSSyncContextDataSource;
};

interface MSSyncContextDelegate extends NSObjectProtocol {

	syncContextOnPushCompleteWithErrorCompletion?(context: MSSyncContext, error: NSError, completion: () => void): void;

	tableOperationOnComplete?(operation: MSTableOperation, completion: (p1: NSDictionary, p2: NSError) => void): void;
}
declare var MSSyncContextDelegate: {

	prototype: MSSyncContextDelegate;
};

declare class MSSyncContextReadResult extends NSObject {

	static alloc(): MSSyncContextReadResult; // inherited from NSObject

	static new(): MSSyncContextReadResult; // inherited from NSObject

	/* readonly */ items: NSArray;

	/* readonly */ totalCount: number;

	constructor(); // inherited from NSObject

	constructor(o: { count: number; items: NSArray; });

	self(): MSSyncContextReadResult; // inherited from NSObjectProtocol
}

declare class MSSyncTable extends NSObject {

	static alloc(): MSSyncTable; // inherited from NSObject

	static new(): MSSyncTable; // inherited from NSObject

	/* readonly */ client: MSClient;

	/* readonly */ name: string;

	constructor(); // inherited from NSObject

	constructor(o: { name: string; client: MSClient; });

	deleteCompletion(item: NSDictionary, completion: (p1: NSError) => void): void;

	forcePurgeWithCompletion(completion: (p1: NSError) => void): NSOperation;

	insertCompletion(item: NSDictionary, completion: (p1: NSDictionary, p2: NSError) => void): void;

	pullWithQueryQueryIdCompletion(query: MSQuery, queryId: string, completion: (p1: NSError) => void): NSOperation;

	pullWithQueryQueryIdSettingsCompletion(query: MSQuery, queryId: string, pullSettings: MSPullSettings, completion: (p1: NSError) => void): NSOperation;

	purgeWithQueryCompletion(query: MSQuery, completion: (p1: NSError) => void): NSOperation;

	query(): MSQuery;

	queryWithPredicate(predicate: NSPredicate): MSQuery;

	readWithCompletion(completion: (p1: MSQueryResult, p2: NSError) => void): void;

	readWithIdCompletion(itemId: string, completion: (p1: NSDictionary, p2: NSError) => void): void;

	readWithPredicateCompletion(predicate: NSPredicate, completion: (p1: MSQueryResult, p2: NSError) => void): void;

	self(): MSSyncTable; // inherited from NSObjectProtocol

	updateCompletion(item: NSDictionary, completion: (p1: NSError) => void): void;
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

	/* readonly */ client: MSClient;

	/* readonly */ name: string;

	constructor(); // inherited from NSObject

	constructor(o: { name: string; client: MSClient; });

	deleteCompletion(item: NSDictionary, completion: (p1: any, p2: NSError) => void): void;

	deleteParametersCompletion(item: NSDictionary, parameters: NSDictionary, completion: (p1: any, p2: NSError) => void): void;

	deleteWithIdCompletion(itemId: any, completion: (p1: any, p2: NSError) => void): void;

	deleteWithIdParametersCompletion(itemId: any, parameters: NSDictionary, completion: (p1: any, p2: NSError) => void): void;

	insertCompletion(item: NSDictionary, completion: (p1: NSDictionary, p2: NSError) => void): void;

	insertParametersCompletion(item: NSDictionary, parameters: NSDictionary, completion: (p1: NSDictionary, p2: NSError) => void): void;

	query(): MSQuery;

	queryWithPredicate(predicate: NSPredicate): MSQuery;

	readWithCompletion(completion: (p1: MSQueryResult, p2: NSError) => void): void;

	readWithIdCompletion(itemId: any, completion: (p1: NSDictionary, p2: NSError) => void): void;

	readWithIdParametersCompletion(itemId: any, parameters: NSDictionary, completion: (p1: NSDictionary, p2: NSError) => void): void;

	readWithPredicateCompletion(predicate: NSPredicate, completion: (p1: MSQueryResult, p2: NSError) => void): void;

	readWithQueryStringCompletion(queryString: string, completion: (p1: MSQueryResult, p2: NSError) => void): void;

	self(): MSTable; // inherited from NSObjectProtocol

	undeleteCompletion(item: NSDictionary, completion: (p1: NSDictionary, p2: NSError) => void): void;

	undeleteParametersCompletion(item: NSDictionary, parameters: NSDictionary, completion: (p1: NSDictionary, p2: NSError) => void): void;

	updateCompletion(item: NSDictionary, completion: (p1: NSDictionary, p2: NSError) => void): void;

	updateParametersCompletion(item: NSDictionary, parameters: NSDictionary, completion: (p1: NSDictionary, p2: NSError) => void): void;
}

declare class MSTableOperation extends NSObject {

	static alloc(): MSTableOperation; // inherited from NSObject

	static new(): MSTableOperation; // inherited from NSObject

	item: NSDictionary;

	/* readonly */ itemId: string;

	/* readonly */ tableName: string;

	/* readonly */ type: MSTableOperationTypes;

	constructor(); // inherited from NSObject

	cancelPush(): void;

	executeWithCompletion(completion: (p1: NSDictionary, p2: NSError) => void): void;

	self(): MSTableOperation; // inherited from NSObjectProtocol
}

declare class MSTableOperationError extends NSObject {

	static alloc(): MSTableOperationError; // inherited from NSObject

	static new(): MSTableOperationError; // inherited from NSObject

	/* readonly */ code: number;

	/* readonly */ domain: string;

	/* readonly */ guid: string;

	handled: boolean;

	/* readonly */ item: NSDictionary;

	/* readonly */ itemId: string;

	/* readonly */ operation: MSTableOperationTypes;

	/* readonly */ serverItem: NSDictionary;

	/* readonly */ statusCode: number;

	/* readonly */ table: string;

	constructor(); // inherited from NSObject

	constructor(o: { operation: MSTableOperation; item: NSDictionary; context: MSSyncContext; error: NSError; });

	constructor(o: { operation: MSTableOperation; item: NSDictionary; error: NSError; });

	constructor(o: { serializedItem: NSDictionary; });

	constructor(o: { serializedItem: NSDictionary; context: MSSyncContext; });

	cancelOperationAndDiscardItemWithCompletion(completion: (p1: NSError) => void): void;

	cancelOperationAndUpdateItemCompletion(item: NSDictionary, completion: (p1: NSError) => void): void;

	keepOperationAndUpdateItemCompletion(item: NSDictionary, completion: (p1: NSError) => void): void;

	modifyOperationTypeAndUpdateItemCompletion(type: MSTableOperationTypes, item: NSDictionary, completion: (p1: NSError) => void): void;

	modifyOperationTypeCompletion(type: MSTableOperationTypes, completion: (p1: NSError) => void): void;

	self(): MSTableOperationError; // inherited from NSObjectProtocol

	serialize(): NSDictionary;
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

	/* readonly */ userId: string;

	constructor(); // inherited from NSObject

	constructor(o: { userId: string; });

	copyWithZone(zone: interop.Pointer): any; // inherited from NSCopying

	self(): MSUser; // inherited from NSObjectProtocol
}

declare var MicrosoftAzureMobileVersionNumber: number;

declare var MicrosoftAzureMobileVersionString: interop.Reference<number>;
