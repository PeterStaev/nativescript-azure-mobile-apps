// declare module com {
//     export module squareup {
//         export module okhttp {
//             export class OkHttpClient { 
//                 public setReadTimeout(param0: number, param1: java.util.concurrent.TimeUnit);
//                 public setWriteTimeout(param0: number, param1: java.util.concurrent.TimeUnit);
//             }
//             export class Response { }
//             export class Headers { }

//             export module Interceptor { 
//                 export class Chain { }
//             }

//             export module internal {
//                 export module http {
//                     export class StatusLine { }
//                 }
//             }
//         }

//     }
// }
import javaxnetSocketFactory = javax.net.SocketFactory;
import javaxnetsslSSLSocketFactory = javax.net.ssl.SSLSocketFactory;
import javaxnetsslHostnameVerifier = javax.net.ssl.HostnameVerifier;
import javanetProxy = java.net.Proxy;
import javanetProxySelector = java.net.ProxySelector;
/// <reference path="./com.squareup.okhttp.Authenticator.d.ts" />
/// <reference path="./com.squareup.okhttp.CertificatePinner.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.ProxySelector.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.SocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Address {
				public getUriPort(): number;
				public getProtocols(): javautilList<string>;
				public getProxy(): javanetProxy;
				public getCertificatePinner(): com.squareup.okhttp.CertificatePinner;
				public getAuthenticator(): com.squareup.okhttp.Authenticator;
				public getSocketFactory(): javaxnetSocketFactory;
				public constructor(param0: string, param1: number, param2: javaxnetSocketFactory, param3: javaxnetsslSSLSocketFactory, param4: javaxnetsslHostnameVerifier, param5: com.squareup.okhttp.CertificatePinner, param6: com.squareup.okhttp.Authenticator, param7: javanetProxy, param8: javautilList<any>, param9: javautilList<any>, param10: javanetProxySelector);
				public getProxySelector(): javanetProxySelector;
				public getConnectionSpecs(): javautilList<string>;
				public getHostnameVerifier(): javaxnetsslHostnameVerifier;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public getUriHost(): string;
				public getSslSocketFactory(): javaxnetsslSSLSocketFactory;
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Authenticator {
				/**
				 * Constructs a new instance of the com.squareup.okhttp.Authenticator interface with the provided implementation.
				 */
				public constructor(implementation: {
					authenticate(param0: javanetProxy, param1: com.squareup.okhttp.Response): com.squareup.okhttp.Request;
					authenticateProxy(param0: javanetProxy, param1: com.squareup.okhttp.Response): com.squareup.okhttp.Request;
				});
				public authenticateProxy(param0: javanetProxy, param1: com.squareup.okhttp.Response): com.squareup.okhttp.Request;
				public authenticate(param0: javanetProxy, param1: com.squareup.okhttp.Response): com.squareup.okhttp.Request;
			}
		}
	}
}

import javaioFile = java.io.File;
import okioSink = okio.Sink;
import okioBufferedSource = okio.BufferedSource;
import okioSource = okio.Source;
/// <reference path="./com.squareup.okhttp.Cache.d.ts" />
/// <reference path="./com.squareup.okhttp.MediaType.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Cache {
				public getRequestCount(): number;
				public getHitCount(): number;
				public close(): void;
				public getDirectory(): javaioFile;
				public isClosed(): boolean;
				public urls(): javautilIterator<any>;
				public constructor(param0: javaioFile, param1: number);
				public flush(): void;
				public getWriteAbortCount(): number;
				public initialize(): void;
				public delete(): void;
				public getSize(): number;
				public getNetworkCount(): number;
				public evictAll(): void;
				public getMaxSize(): number;
				public getWriteSuccessCount(): number;
			}
			export module Cache {
				export class CacheRequestImpl {
					public body(): okioSink;
					public constructor(param0: com.squareup.okhttp.Cache, param1: com.squareup.okhttp.internal.DiskLruCache.Editor);
					public abort(): void;
				}
				export class CacheResponseBody extends com.squareup.okhttp.ResponseBody {
					public constructor();
					public source(): okioBufferedSource;
					public contentType(): com.squareup.okhttp.MediaType;
					public contentLength(): number;
					public constructor(param0: com.squareup.okhttp.internal.DiskLruCache.Snapshot, param1: string, param2: string);
				}
				export class Entry {
					public constructor(param0: com.squareup.okhttp.Response);
					public writeTo(param0: com.squareup.okhttp.internal.DiskLruCache.Editor): void;
					public matches(param0: com.squareup.okhttp.Request, param1: com.squareup.okhttp.Response): boolean;
					public constructor(param0: okioSource);
					public response(param0: com.squareup.okhttp.Request, param1: com.squareup.okhttp.internal.DiskLruCache.Snapshot): com.squareup.okhttp.Response;
				}
			}
		}
	}
}

import javautilconcurrentTimeUnit = java.util.concurrent.TimeUnit;
/// <reference path="./com.squareup.okhttp.CacheControl.d.ts" />
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class CacheControl {
				public static FORCE_NETWORK: com.squareup.okhttp.CacheControl;
				public static FORCE_CACHE: com.squareup.okhttp.CacheControl;
				public maxAgeSeconds(): number;
				public noTransform(): boolean;
				public maxStaleSeconds(): number;
				public mustRevalidate(): boolean;
				public toString(): string;
				public minFreshSeconds(): number;
				public sMaxAgeSeconds(): number;
				public onlyIfCached(): boolean;
				public isPublic(): boolean;
				public isPrivate(): boolean;
				public noCache(): boolean;
				public noStore(): boolean;
				public static parse(param0: com.squareup.okhttp.Headers): com.squareup.okhttp.CacheControl;
			}
			export module CacheControl {
				export class Builder {
					public noCache(): com.squareup.okhttp.CacheControl.Builder;
					public onlyIfCached(): com.squareup.okhttp.CacheControl.Builder;
					public noTransform(): com.squareup.okhttp.CacheControl.Builder;
					public maxAge(param0: number, param1: javautilconcurrentTimeUnit): com.squareup.okhttp.CacheControl.Builder;
					public constructor();
					public noStore(): com.squareup.okhttp.CacheControl.Builder;
					public maxStale(param0: number, param1: javautilconcurrentTimeUnit): com.squareup.okhttp.CacheControl.Builder;
					public build(): com.squareup.okhttp.CacheControl;
					public minFresh(param0: number, param1: javautilconcurrentTimeUnit): com.squareup.okhttp.CacheControl.Builder;
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Callback.d.ts" />
/// <reference path="./com.squareup.okhttp.Connection.d.ts" />
/// <reference path="./com.squareup.okhttp.OkHttpClient.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Call {
				public isCanceled(): boolean;
				public cancel(): void;
				public execute(): com.squareup.okhttp.Response;
				public constructor(param0: com.squareup.okhttp.OkHttpClient, param1: com.squareup.okhttp.Request);
				public enqueue(param0: com.squareup.okhttp.Callback): void;
			}
			export module Call {
				export class ApplicationInterceptorChain {
					public proceed(param0: com.squareup.okhttp.Request): com.squareup.okhttp.Response;
					public connection(): com.squareup.okhttp.Connection;
					public request(): com.squareup.okhttp.Request;
				}
				export class AsyncCall extends com.squareup.okhttp.internal.NamedRunnable {
					public execute(): void;
				}
			}
		}
	}
}

import javaioIOException = java.io.IOException;
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Callback {
				/**
				 * Constructs a new instance of the com.squareup.okhttp.Callback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onFailure(param0: com.squareup.okhttp.Request, param1: javaioIOException): void;
					onResponse(param0: com.squareup.okhttp.Response): void;
				});
				public onResponse(param0: com.squareup.okhttp.Response): void;
				public onFailure(param0: com.squareup.okhttp.Request, param1: javaioIOException): void;
			}
		}
	}
}

import javasecuritycertCertificate = java.security.cert.Certificate;
/// <reference path="./com.squareup.okhttp.CertificatePinner.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.Certificate.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class CertificatePinner {
				public static DEFAULT: com.squareup.okhttp.CertificatePinner;
				public static pin(param0: javasecuritycertCertificate): string;
				public check(param0: string, param1: javautilList<any>): void;
				public check(param0: string, param1: native.Array<javasecuritycertCertificate>): void;
			}
			export module CertificatePinner {
				export class Builder {
					public constructor();
					public add(param0: string, param1: native.Array<string>): com.squareup.okhttp.CertificatePinner.Builder;
					public build(): com.squareup.okhttp.CertificatePinner;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Challenge {
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public getRealm(): string;
				public getScheme(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class CipherSuite {
				public static TLS_RSA_WITH_NULL_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_NULL_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_EXPORT_WITH_RC4_40_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_RC4_128_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_RC4_128_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_EXPORT_WITH_DES40_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_DES_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_WITH_DES_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_WITH_DES_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_EXPORT_WITH_RC4_40_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_RC4_128_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_DES_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_WITH_DES_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_WITH_RC4_128_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_WITH_DES_CBC_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_WITH_3DES_EDE_CBC_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_WITH_RC4_128_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_EXPORT_WITH_RC4_40_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_KRB5_EXPORT_WITH_RC4_40_MD5: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_NULL_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_AES_128_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_AES_256_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_128_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_128_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_256_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_256_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_AES_128_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_AES_256_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_AES_128_GCM_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_RSA_WITH_AES_256_GCM_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_128_GCM_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_RSA_WITH_AES_256_GCM_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_128_GCM_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DHE_DSS_WITH_AES_256_GCM_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_AES_128_GCM_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_DH_anon_WITH_AES_256_GCM_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_EMPTY_RENEGOTIATION_INFO_SCSV: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_NULL_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_RC4_128_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_NULL_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_RC4_128_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_NULL_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_RC4_128_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_NULL_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_RC4_128_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_anon_WITH_NULL_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_anon_WITH_RC4_128_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_anon_WITH_AES_128_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_anon_WITH_AES_256_CBC_SHA: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256: com.squareup.okhttp.CipherSuite;
				public static TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384: com.squareup.okhttp.CipherSuite;
				public static forJavaName(param0: string): com.squareup.okhttp.CipherSuite;
				public static values(): native.Array<com.squareup.okhttp.CipherSuite>;
				public static valueOf(param0: string): com.squareup.okhttp.CipherSuite;
			}
		}
	}
}

import javanetSocket = java.net.Socket;
/// <reference path="./com.squareup.okhttp.ConnectionPool.d.ts" />
/// <reference path="./com.squareup.okhttp.Handshake.d.ts" />
/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.Route.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Connection {
				public getHandshake(): com.squareup.okhttp.Handshake;
				public constructor(param0: com.squareup.okhttp.ConnectionPool, param1: com.squareup.okhttp.Route);
				public getProtocol(): com.squareup.okhttp.Protocol;
				public getRoute(): com.squareup.okhttp.Route;
				public toString(): string;
				public getSocket(): javanetSocket;
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Address.d.ts" />
/// <reference path="./com.squareup.okhttp.Connection.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class ConnectionPool {
				public constructor(param0: number, param1: number);
				public static getDefault(): com.squareup.okhttp.ConnectionPool;
				public get(param0: com.squareup.okhttp.Address): com.squareup.okhttp.Connection;
				public getSpdyConnectionCount(): number;
				public evictAll(): void;
				public getConnectionCount(): number;
				public getMultiplexedConnectionCount(): number;
				public getHttpConnectionCount(): number;
			}
		}
	}
}

import javaxnetsslSSLSocket = javax.net.ssl.SSLSocket;
/// <reference path="./com.squareup.okhttp.CipherSuite.d.ts" />
/// <reference path="./com.squareup.okhttp.ConnectionSpec.d.ts" />
/// <reference path="./com.squareup.okhttp.TlsVersion.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class ConnectionSpec {
				public static MODERN_TLS: com.squareup.okhttp.ConnectionSpec;
				public static COMPATIBLE_TLS: com.squareup.okhttp.ConnectionSpec;
				public static CLEARTEXT: com.squareup.okhttp.ConnectionSpec;
				public isCompatible(param0: javaxnetsslSSLSocket): boolean;
				public cipherSuites(): javautilList<any>;
				public isTls(): boolean;
				public tlsVersions(): javautilList<any>;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public supportsTlsExtensions(): boolean;
				public toString(): string;
			}
			export module ConnectionSpec {
				export class Builder {
					public tlsVersions(param0: native.Array<string>): com.squareup.okhttp.ConnectionSpec.Builder;
					public build(): com.squareup.okhttp.ConnectionSpec;
					public supportsTlsExtensions(param0: boolean): com.squareup.okhttp.ConnectionSpec.Builder;
					public cipherSuites(param0: native.Array<string>): com.squareup.okhttp.ConnectionSpec.Builder;
					public tlsVersions(param0: native.Array<com.squareup.okhttp.TlsVersion>): com.squareup.okhttp.ConnectionSpec.Builder;
					public constructor(param0: com.squareup.okhttp.ConnectionSpec);
					public cipherSuites(param0: native.Array<com.squareup.okhttp.CipherSuite>): com.squareup.okhttp.ConnectionSpec.Builder;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Credentials {
				public static basic(param0: string, param1: string): string;
			}
		}
	}
}

import javautilconcurrentExecutorService = java.util.concurrent.ExecutorService;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.concurrent.ExecutorService.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Dispatcher {
				public cancel(param0: javalangObject): void;
				public getQueuedCallCount(): number;
				public getMaxRequests(): number;
				public constructor(param0: javautilconcurrentExecutorService);
				public setMaxRequests(param0: number): void;
				public getMaxRequestsPerHost(): number;
				public getExecutorService(): javautilconcurrentExecutorService;
				public setMaxRequestsPerHost(param0: number): void;
				public getRunningCallCount(): number;
				public constructor();
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.RequestBody.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class FormEncodingBuilder {
				public add(param0: string, param1: string): com.squareup.okhttp.FormEncodingBuilder;
				public build(): com.squareup.okhttp.RequestBody;
				public addEncoded(param0: string, param1: string): com.squareup.okhttp.FormEncodingBuilder;
				public constructor();
			}
		}
	}
}

import javaxnetsslSSLSession = javax.net.ssl.SSLSession;
import javasecurityPrincipal = java.security.Principal;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.Principal.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Handshake {
				public peerPrincipal(): javasecurityPrincipal;
				public peerCertificates(): javautilList<any>;
				public equals(param0: javalangObject): boolean;
				public static get(param0: string, param1: javautilList<any>, param2: javautilList<any>): com.squareup.okhttp.Handshake;
				public hashCode(): number;
				public localCertificates(): javautilList<any>;
				public localPrincipal(): javasecurityPrincipal;
				public static get(param0: javaxnetsslSSLSession): com.squareup.okhttp.Handshake;
				public cipherSuite(): string;
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Headers {
				public get(param0: string): string;
				public newBuilder(): com.squareup.okhttp.Headers.Builder;
				public value(param0: number): string;
				public static of(param0: native.Array<string>): com.squareup.okhttp.Headers;
				public names(): javautilSet<any>;
				public values(param0: string): javautilList<any>;
				public static of(param0: javautilMap<any, any>): com.squareup.okhttp.Headers;
				public getDate(param0: string): javautilDate;
				public toMultimap(): javautilMap<any, any>;
				public toString(): string;
				public name(param0: number): string;
				public size(): number;
			}
			export module Headers {
				export class Builder {
					public set(param0: string, param1: string): com.squareup.okhttp.Headers.Builder;
					public add(param0: string): com.squareup.okhttp.Headers.Builder;
					public add(param0: string, param1: string): com.squareup.okhttp.Headers.Builder;
					public constructor();
					public build(): com.squareup.okhttp.Headers;
					public removeAll(param0: string): com.squareup.okhttp.Headers.Builder;
					public get(param0: string): string;
				}
			}
		}
	}
}

import javanetURI = java.net.URI;
/// <reference path="./com.squareup.okhttp.HttpUrl.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class HttpUrl {
				public uri(): javanetURI;
				public encodedPathSegments(): javautilList<any>;
				public queryParameter(param0: string): string;
				public url(): javanetURL;
				public encodedPath(): string;
				public scheme(): string;
				public encodedPassword(): string;
				public password(): string;
				public hashCode(): number;
				public isHttps(): boolean;
				public encodedQuery(): string;
				public static defaultPort(param0: string): number;
				public querySize(): number;
				public pathSize(): number;
				public static parse(param0: string): com.squareup.okhttp.HttpUrl;
				public pathSegments(): javautilList<any>;
				public queryParameterValues(param0: string): javautilList<any>;
				public fragment(): string;
				public queryParameterValue(param0: number): string;
				public encodedFragment(): string;
				public static get(param0: javanetURI): com.squareup.okhttp.HttpUrl;
				public queryParameterName(param0: number): string;
				public toString(): string;
				public host(): string;
				public encodedUsername(): string;
				public query(): string;
				public equals(param0: javalangObject): boolean;
				public newBuilder(): com.squareup.okhttp.HttpUrl.Builder;
				public username(): string;
				public static get(param0: javanetURL): com.squareup.okhttp.HttpUrl;
				public queryParameterNames(): javautilSet<any>;
				public port(): number;
				public resolve(param0: string): com.squareup.okhttp.HttpUrl;
			}
			export module HttpUrl {
				export class Builder {
					public scheme(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public setEncodedQueryParameter(param0: string, param1: string): com.squareup.okhttp.HttpUrl.Builder;
					public encodedPath(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public addEncodedQueryParameter(param0: string, param1: string): com.squareup.okhttp.HttpUrl.Builder;
					public removePathSegment(param0: number): com.squareup.okhttp.HttpUrl.Builder;
					public toString(): string;
					public constructor();
					public host(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public port(param0: number): com.squareup.okhttp.HttpUrl.Builder;
					public addQueryParameter(param0: string, param1: string): com.squareup.okhttp.HttpUrl.Builder;
					public setEncodedPathSegment(param0: number, param1: string): com.squareup.okhttp.HttpUrl.Builder;
					public fragment(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public password(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public addEncodedPathSegment(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public encodedPassword(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public query(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public encodedQuery(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public encodedUsername(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public addPathSegment(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public encodedFragment(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public setPathSegment(param0: number, param1: string): com.squareup.okhttp.HttpUrl.Builder;
					public setQueryParameter(param0: string, param1: string): com.squareup.okhttp.HttpUrl.Builder;
					public removeAllEncodedQueryParameters(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public build(): com.squareup.okhttp.HttpUrl;
					public username(param0: string): com.squareup.okhttp.HttpUrl.Builder;
					public removeAllQueryParameters(param0: string): com.squareup.okhttp.HttpUrl.Builder;
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Connection.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Interceptor {
				/**
				 * Constructs a new instance of the com.squareup.okhttp.Interceptor interface with the provided implementation.
				 */
				public constructor(implementation: {
					intercept(param0: com.squareup.okhttp.Interceptor.Chain): com.squareup.okhttp.Response;
				});
				public intercept(param0: com.squareup.okhttp.Interceptor.Chain): com.squareup.okhttp.Response;
			}
			export module Interceptor {
				export class Chain {
					/**
					 * Constructs a new instance of the com.squareup.okhttp.Interceptor$Chain interface with the provided implementation.
					 */
					public constructor(implementation: {
						request(): com.squareup.okhttp.Request;
						proceed(param0: com.squareup.okhttp.Request): com.squareup.okhttp.Response;
						connection(): com.squareup.okhttp.Connection;
					});
					public proceed(param0: com.squareup.okhttp.Request): com.squareup.okhttp.Response;
					public connection(): com.squareup.okhttp.Connection;
					public request(): com.squareup.okhttp.Request;
				}
			}
		}
	}
}

import javaniocharsetCharset = java.nio.charset.Charset;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class MediaType {
				public charset(param0: javaniocharsetCharset): javaniocharsetCharset;
				public charset(): javaniocharsetCharset;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public type(): string;
				public subtype(): string;
				public toString(): string;
				public static parse(param0: string): com.squareup.okhttp.MediaType;
			}
		}
	}
}

import okioByteString = okio.ByteString;
import okioBufferedSink = okio.BufferedSink;
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.MediaType.d.ts" />
/// <reference path="./com.squareup.okhttp.RequestBody.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class MultipartBuilder {
				public static MIXED: com.squareup.okhttp.MediaType;
				public static ALTERNATIVE: com.squareup.okhttp.MediaType;
				public static DIGEST: com.squareup.okhttp.MediaType;
				public static PARALLEL: com.squareup.okhttp.MediaType;
				public static FORM: com.squareup.okhttp.MediaType;
				public addFormDataPart(param0: string, param1: string, param2: com.squareup.okhttp.RequestBody): com.squareup.okhttp.MultipartBuilder;
				public addPart(param0: com.squareup.okhttp.Headers, param1: com.squareup.okhttp.RequestBody): com.squareup.okhttp.MultipartBuilder;
				public addFormDataPart(param0: string, param1: string): com.squareup.okhttp.MultipartBuilder;
				public build(): com.squareup.okhttp.RequestBody;
				public constructor(param0: string);
				public type(param0: com.squareup.okhttp.MediaType): com.squareup.okhttp.MultipartBuilder;
				public addPart(param0: com.squareup.okhttp.RequestBody): com.squareup.okhttp.MultipartBuilder;
				public constructor();
			}
			export module MultipartBuilder {
				export class MultipartRequestBody extends com.squareup.okhttp.RequestBody {
					public writeTo(param0: okioBufferedSink): void;
					public constructor();
					public constructor(param0: com.squareup.okhttp.MediaType, param1: okioByteString, param2: javautilList<any>, param3: javautilList<any>);
					public contentType(): com.squareup.okhttp.MediaType;
					public contentLength(): number;
				}
			}
		}
	}
}

import javanetCookieHandler = java.net.CookieHandler;
/// <reference path="./com.squareup.okhttp.Authenticator.d.ts" />
/// <reference path="./com.squareup.okhttp.Cache.d.ts" />
/// <reference path="./com.squareup.okhttp.Call.d.ts" />
/// <reference path="./com.squareup.okhttp.CertificatePinner.d.ts" />
/// <reference path="./com.squareup.okhttp.ConnectionPool.d.ts" />
/// <reference path="./com.squareup.okhttp.Dispatcher.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.CookieHandler.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.ProxySelector.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
/// <reference path="./javax.net.SocketFactory.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocketFactory.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class OkHttpClient {
				public setHostnameVerifier(param0: javaxnetsslHostnameVerifier): com.squareup.okhttp.OkHttpClient;
				public getFollowSslRedirects(): boolean;
				public networkInterceptors(): javautilList<any>;
				public setProtocols(param0: javautilList<any>): com.squareup.okhttp.OkHttpClient;
				public setFollowRedirects(param0: boolean): void;
				public getProtocols(): javautilList<any>;
				public newCall(param0: com.squareup.okhttp.Request): com.squareup.okhttp.Call;
				public getProxy(): javanetProxy;
				public constructor();
				public cancel(param0: javalangObject): com.squareup.okhttp.OkHttpClient;
				public setCookieHandler(param0: javanetCookieHandler): com.squareup.okhttp.OkHttpClient;
				public setSocketFactory(param0: javaxnetSocketFactory): com.squareup.okhttp.OkHttpClient;
				public getHostnameVerifier(): javaxnetsslHostnameVerifier;
				public getDispatcher(): com.squareup.okhttp.Dispatcher;
				public getSslSocketFactory(): javaxnetsslSSLSocketFactory;
				public setReadTimeout(param0: number, param1: javautilconcurrentTimeUnit): void;
				public setProxySelector(param0: javanetProxySelector): com.squareup.okhttp.OkHttpClient;
				public setCertificatePinner(param0: com.squareup.okhttp.CertificatePinner): com.squareup.okhttp.OkHttpClient;
				public getConnectionPool(): com.squareup.okhttp.ConnectionPool;
				public getCookieHandler(): javanetCookieHandler;
				public getWriteTimeout(): number;
				public getCache(): com.squareup.okhttp.Cache;
				public setConnectionPool(param0: com.squareup.okhttp.ConnectionPool): com.squareup.okhttp.OkHttpClient;
				public setFollowSslRedirects(param0: boolean): com.squareup.okhttp.OkHttpClient;
				public getFollowRedirects(): boolean;
				public setConnectTimeout(param0: number, param1: javautilconcurrentTimeUnit): void;
				public getReadTimeout(): number;
				public getCertificatePinner(): com.squareup.okhttp.CertificatePinner;
				public setConnectionSpecs(param0: javautilList<any>): com.squareup.okhttp.OkHttpClient;
				public getAuthenticator(): com.squareup.okhttp.Authenticator;
				public getSocketFactory(): javaxnetSocketFactory;
				public setWriteTimeout(param0: number, param1: javautilconcurrentTimeUnit): void;
				public setRetryOnConnectionFailure(param0: boolean): void;
				public getRetryOnConnectionFailure(): boolean;
				public getProxySelector(): javanetProxySelector;
				public getConnectionSpecs(): javautilList<any>;
				public setProxy(param0: javanetProxy): com.squareup.okhttp.OkHttpClient;
				public setDispatcher(param0: com.squareup.okhttp.Dispatcher): com.squareup.okhttp.OkHttpClient;
				public interceptors(): javautilList<any>;
				public setAuthenticator(param0: com.squareup.okhttp.Authenticator): com.squareup.okhttp.OkHttpClient;
				public clone(): com.squareup.okhttp.OkHttpClient;
				public setSslSocketFactory(param0: javaxnetsslSSLSocketFactory): com.squareup.okhttp.OkHttpClient;
				public getConnectTimeout(): number;
				public setCache(param0: com.squareup.okhttp.Cache): com.squareup.okhttp.OkHttpClient;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Protocol {
				public static HTTP_1_0: com.squareup.okhttp.Protocol;
				public static HTTP_1_1: com.squareup.okhttp.Protocol;
				public static SPDY_3: com.squareup.okhttp.Protocol;
				public static HTTP_2: com.squareup.okhttp.Protocol;
				public static valueOf(param0: string): com.squareup.okhttp.Protocol;
				public static get(param0: string): com.squareup.okhttp.Protocol;
				public toString(): string;
				public static values(): native.Array<com.squareup.okhttp.Protocol>;
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.CacheControl.d.ts" />
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.HttpUrl.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.RequestBody.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Request {
				public header(param0: string): string;
				public uri(): javanetURI;
				public cacheControl(): com.squareup.okhttp.CacheControl;
				public headers(): com.squareup.okhttp.Headers;
				public httpUrl(): com.squareup.okhttp.HttpUrl;
				public body(): com.squareup.okhttp.RequestBody;
				public newBuilder(): com.squareup.okhttp.Request.Builder;
				public toString(): string;
				public url(): javanetURL;
				public tag(): javalangObject;
				public isHttps(): boolean;
				public headers(param0: string): javautilList<any>;
				public urlString(): string;
				public method(): string;
			}
			export module Request {
				export class Builder {
					public cacheControl(param0: com.squareup.okhttp.CacheControl): com.squareup.okhttp.Request.Builder;
					public get(): com.squareup.okhttp.Request.Builder;
					public header(param0: string, param1: string): com.squareup.okhttp.Request.Builder;
					public removeHeader(param0: string): com.squareup.okhttp.Request.Builder;
					public headers(param0: com.squareup.okhttp.Headers): com.squareup.okhttp.Request.Builder;
					public patch(param0: com.squareup.okhttp.RequestBody): com.squareup.okhttp.Request.Builder;
					public url(param0: javanetURL): com.squareup.okhttp.Request.Builder;
					public put(param0: com.squareup.okhttp.RequestBody): com.squareup.okhttp.Request.Builder;
					public delete(param0: com.squareup.okhttp.RequestBody): com.squareup.okhttp.Request.Builder;
					public delete(): com.squareup.okhttp.Request.Builder;
					public build(): com.squareup.okhttp.Request;
					public url(param0: com.squareup.okhttp.HttpUrl): com.squareup.okhttp.Request.Builder;
					public tag(param0: javalangObject): com.squareup.okhttp.Request.Builder;
					public constructor();
					public method(param0: string, param1: com.squareup.okhttp.RequestBody): com.squareup.okhttp.Request.Builder;
					public addHeader(param0: string, param1: string): com.squareup.okhttp.Request.Builder;
					public url(param0: string): com.squareup.okhttp.Request.Builder;
					public post(param0: com.squareup.okhttp.RequestBody): com.squareup.okhttp.Request.Builder;
					public head(): com.squareup.okhttp.Request.Builder;
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.MediaType.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export abstract class RequestBody {
				public static create(param0: com.squareup.okhttp.MediaType, param1: javaioFile): com.squareup.okhttp.RequestBody;
				public static create(param0: com.squareup.okhttp.MediaType, param1: string): com.squareup.okhttp.RequestBody;
				public contentLength(): number;
				public writeTo(param0: okioBufferedSink): void;
				public contentType(): com.squareup.okhttp.MediaType;
				public static create(param0: com.squareup.okhttp.MediaType, param1: native.Array<number>): com.squareup.okhttp.RequestBody;
				public static create(param0: com.squareup.okhttp.MediaType, param1: okioByteString): com.squareup.okhttp.RequestBody;
				public constructor();
				public static create(param0: com.squareup.okhttp.MediaType, param1: native.Array<number>, param2: number, param3: number): com.squareup.okhttp.RequestBody;
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.CacheControl.d.ts" />
/// <reference path="./com.squareup.okhttp.Handshake.d.ts" />
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./com.squareup.okhttp.ResponseBody.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Response {
				public header(param0: string): string;
				public cacheResponse(): com.squareup.okhttp.Response;
				public handshake(): com.squareup.okhttp.Handshake;
				public protocol(): com.squareup.okhttp.Protocol;
				public message(): string;
				public priorResponse(): com.squareup.okhttp.Response;
				public cacheControl(): com.squareup.okhttp.CacheControl;
				public newBuilder(): com.squareup.okhttp.Response.Builder;
				public headers(): com.squareup.okhttp.Headers;
				public isRedirect(): boolean;
				public request(): com.squareup.okhttp.Request;
				public networkResponse(): com.squareup.okhttp.Response;
				public header(param0: string, param1: string): string;
				public toString(): string;
				public code(): number;
				public challenges(): javautilList<any>;
				public isSuccessful(): boolean;
				public headers(param0: string): javautilList<any>;
				public body(): com.squareup.okhttp.ResponseBody;
			}
			export module Response {
				export class Builder {
					public header(param0: string, param1: string): com.squareup.okhttp.Response.Builder;
					public networkResponse(param0: com.squareup.okhttp.Response): com.squareup.okhttp.Response.Builder;
					public addHeader(param0: string, param1: string): com.squareup.okhttp.Response.Builder;
					public body(param0: com.squareup.okhttp.ResponseBody): com.squareup.okhttp.Response.Builder;
					public handshake(param0: com.squareup.okhttp.Handshake): com.squareup.okhttp.Response.Builder;
					public cacheResponse(param0: com.squareup.okhttp.Response): com.squareup.okhttp.Response.Builder;
					public code(param0: number): com.squareup.okhttp.Response.Builder;
					public message(param0: string): com.squareup.okhttp.Response.Builder;
					public build(): com.squareup.okhttp.Response;
					public priorResponse(param0: com.squareup.okhttp.Response): com.squareup.okhttp.Response.Builder;
					public constructor();
					public request(param0: com.squareup.okhttp.Request): com.squareup.okhttp.Response.Builder;
					public removeHeader(param0: string): com.squareup.okhttp.Response.Builder;
					public headers(param0: com.squareup.okhttp.Headers): com.squareup.okhttp.Response.Builder;
					public protocol(param0: com.squareup.okhttp.Protocol): com.squareup.okhttp.Response.Builder;
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.MediaType.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export abstract class ResponseBody {
				public close(): void;
				public bytes(): native.Array<number>;
				public byteStream(): javaioInputStream;
				public static create(param0: com.squareup.okhttp.MediaType, param1: string): com.squareup.okhttp.ResponseBody;
				public contentLength(): number;
				public static create(param0: com.squareup.okhttp.MediaType, param1: number, param2: okioBufferedSource): com.squareup.okhttp.ResponseBody;
				public contentType(): com.squareup.okhttp.MediaType;
				public static create(param0: com.squareup.okhttp.MediaType, param1: native.Array<number>): com.squareup.okhttp.ResponseBody;
				public constructor();
				public source(): okioBufferedSource;
				public charStream(): javaioReader;
				public string(): string;
			}
		}
	}
}

import javanetInetSocketAddress = java.net.InetSocketAddress;
/// <reference path="./com.squareup.okhttp.Address.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.net.InetSocketAddress.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class Route {
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public constructor(param0: com.squareup.okhttp.Address, param1: javanetProxy, param2: javanetInetSocketAddress);
				public getProxy(): javanetProxy;
				public getAddress(): com.squareup.okhttp.Address;
				public getSocketAddress(): javanetInetSocketAddress;
				public requiresTunnel(): boolean;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export class TlsVersion {
				public static TLS_1_2: com.squareup.okhttp.TlsVersion;
				public static TLS_1_1: com.squareup.okhttp.TlsVersion;
				public static TLS_1_0: com.squareup.okhttp.TlsVersion;
				public static SSL_3_0: com.squareup.okhttp.TlsVersion;
				public static valueOf(param0: string): com.squareup.okhttp.TlsVersion;
				public static values(): native.Array<com.squareup.okhttp.TlsVersion>;
				public static forJavaName(param0: string): com.squareup.okhttp.TlsVersion;
				public javaName(): string;
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.ConnectionSpec.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class ConnectionSpecSelector {
					public configureSecureSocket(param0: javaxnetsslSSLSocket): com.squareup.okhttp.ConnectionSpec;
					public constructor(param0: javautilList<any>);
					public connectionFailed(param0: javaioIOException): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.internal.io.FileSystem.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class DiskLruCache {
					public evictAll(): void;
					public edit(param0: string): com.squareup.okhttp.internal.DiskLruCache.Editor;
					public delete(): void;
					public size(): number;
					public flush(): void;
					public static create(param0: com.squareup.okhttp.internal.io.FileSystem, param1: javaioFile, param2: number, param3: number, param4: number): com.squareup.okhttp.internal.DiskLruCache;
					public get(param0: string): com.squareup.okhttp.internal.DiskLruCache.Snapshot;
					public setMaxSize(param0: number): void;
					public snapshots(): javautilIterator<any>;
					public close(): void;
					public getDirectory(): javaioFile;
					public getMaxSize(): number;
					public remove(param0: string): boolean;
					public initialize(): void;
					public isClosed(): boolean;
				}
				export module DiskLruCache {
					export class Editor {
						public newSink(param0: number): okioSink;
						public commit(): void;
						public newSource(param0: number): okioSource;
						public abortUnlessCommitted(): void;
						public abort(): void;
					}
					export class Entry {
					}
					export class Snapshot {
						public getSource(param0: number): okioSource;
						public edit(): com.squareup.okhttp.internal.DiskLruCache.Editor;
						public close(): void;
						public getLength(param0: number): number;
						public key(): string;
					}
				}
			}
		}
	}
}

import okioBuffer = okio.Buffer;
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class FaultHidingSink {
					public constructor(param0: okioSink);
					public write(param0: okioBuffer, param1: number): void;
					public onException(param0: javaioIOException): void;
					public close(): void;
					public flush(): void;
				}
			}
		}
	}
}

import javautilloggingLogger = java.util.logging.Logger;
/// <reference path="./com.squareup.okhttp.Call.d.ts" />
/// <reference path="./com.squareup.okhttp.Callback.d.ts" />
/// <reference path="./com.squareup.okhttp.Connection.d.ts" />
/// <reference path="./com.squareup.okhttp.ConnectionPool.d.ts" />
/// <reference path="./com.squareup.okhttp.ConnectionSpec.d.ts" />
/// <reference path="./com.squareup.okhttp.OkHttpClient.d.ts" />
/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.InternalCache.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.Network.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.RouteDatabase.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.HttpEngine.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.Transport.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.logging.Logger.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export abstract class Internal {
					public static logger: javautilloggingLogger;
					public static instance: com.squareup.okhttp.internal.Internal;
					public addLenient(param0: com.squareup.okhttp.Headers.Builder, param1: string, param2: string): void;
					public connectAndSetOwner(param0: com.squareup.okhttp.OkHttpClient, param1: com.squareup.okhttp.Connection, param2: com.squareup.okhttp.internal.http.HttpEngine, param3: com.squareup.okhttp.Request): void;
					public isReadable(param0: com.squareup.okhttp.Connection): boolean;
					public static initializeInstanceForTests(): void;
					public network(param0: com.squareup.okhttp.OkHttpClient): com.squareup.okhttp.internal.Network;
					public callEnqueue(param0: com.squareup.okhttp.Call, param1: com.squareup.okhttp.Callback, param2: boolean): void;
					public routeDatabase(param0: com.squareup.okhttp.OkHttpClient): com.squareup.okhttp.internal.RouteDatabase;
					public constructor();
					public connectionRawSource(param0: com.squareup.okhttp.Connection): okioBufferedSource;
					public connectionRawSink(param0: com.squareup.okhttp.Connection): okioBufferedSink;
					public setProtocol(param0: com.squareup.okhttp.Connection, param1: com.squareup.okhttp.Protocol): void;
					public newTransport(param0: com.squareup.okhttp.Connection, param1: com.squareup.okhttp.internal.http.HttpEngine): com.squareup.okhttp.internal.http.Transport;
					public addLenient(param0: com.squareup.okhttp.Headers.Builder, param1: string): void;
					public setOwner(param0: com.squareup.okhttp.Connection, param1: com.squareup.okhttp.internal.http.HttpEngine): void;
					public recycle(param0: com.squareup.okhttp.ConnectionPool, param1: com.squareup.okhttp.Connection): void;
					public recycleCount(param0: com.squareup.okhttp.Connection): number;
					public callEngineReleaseConnection(param0: com.squareup.okhttp.Call): void;
					public internalCache(param0: com.squareup.okhttp.OkHttpClient): com.squareup.okhttp.internal.InternalCache;
					public setNetwork(param0: com.squareup.okhttp.OkHttpClient, param1: com.squareup.okhttp.internal.Network): void;
					public connectionSetOwner(param0: com.squareup.okhttp.Connection, param1: javalangObject): void;
					public clearOwner(param0: com.squareup.okhttp.Connection): boolean;
					public closeIfOwnedBy(param0: com.squareup.okhttp.Connection, param1: javalangObject): void;
					public setCache(param0: com.squareup.okhttp.OkHttpClient, param1: com.squareup.okhttp.internal.InternalCache): void;
					public apply(param0: com.squareup.okhttp.ConnectionSpec, param1: javaxnetsslSSLSocket, param2: boolean): void;
					public callEngineGetConnection(param0: com.squareup.okhttp.Call): com.squareup.okhttp.Connection;
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.CacheRequest.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.CacheStrategy.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class InternalCache {
					/**
					 * Constructs a new instance of the com.squareup.okhttp.internal.InternalCache interface with the provided implementation.
					 */
					public constructor(implementation: {
						get(param0: com.squareup.okhttp.Request): com.squareup.okhttp.Response;
						put(param0: com.squareup.okhttp.Response): com.squareup.okhttp.internal.http.CacheRequest;
						remove(param0: com.squareup.okhttp.Request): void;
						update(param0: com.squareup.okhttp.Response, param1: com.squareup.okhttp.Response): void;
						trackConditionalCacheHit(): void;
						trackResponse(param0: com.squareup.okhttp.internal.http.CacheStrategy): void;
					});
					public trackResponse(param0: com.squareup.okhttp.internal.http.CacheStrategy): void;
					public update(param0: com.squareup.okhttp.Response, param1: com.squareup.okhttp.Response): void;
					public get(param0: com.squareup.okhttp.Request): com.squareup.okhttp.Response;
					public trackConditionalCacheHit(): void;
					public remove(param0: com.squareup.okhttp.Request): void;
					public put(param0: com.squareup.okhttp.Response): com.squareup.okhttp.internal.http.CacheRequest;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export abstract class NamedRunnable {
					public name: string;
					public run(): void;
					public execute(): void;
					public constructor(param0: string, param1: native.Array<javalangObject>);
				}
			}
		}
	}
}

import javanetInetAddress = java.net.InetAddress;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.InetAddress.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class Network {
					/**
					 * Constructs a new instance of the com.squareup.okhttp.internal.Network interface with the provided implementation.
					 */
					public constructor(implementation: {
						resolveInetAddresses(param0: string): native.Array<javanetInetAddress>;
						<clinit>(): void;
					});
					public static DEFAULT: com.squareup.okhttp.internal.Network;
					public resolveInetAddresses(param0: string): native.Array<javanetInetAddress>;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class OptionalMethod<T> {
					public invokeOptionalWithoutCheckedException(param0: javalangObject, param1: native.Array<javalangObject>): javalangObject;
					public invoke(param0: javalangObject, param1: native.Array<javalangObject>): javalangObject;
					public invokeOptional(param0: javalangObject, param1: native.Array<javalangObject>): javalangObject;
					public isSupported(param0: javalangObject): boolean;
					public invokeWithoutCheckedException(param0: javalangObject, param1: native.Array<javalangObject>): javalangObject;
					public constructor(param0: javalangClass<T>, param1: string, param2: native.Array<javalangClass<T>>);
				}
			}
		}
	}
}

import javalangreflectMethod = java.lang.reflect.Method;
/// <reference path="./com.squareup.okhttp.internal.OptionalMethod.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
/// <reference path="./java.net.InetSocketAddress.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.SSLSocket.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class Platform {
					public getSelectedProtocol(param0: javaxnetsslSSLSocket): string;
					public connectSocket(param0: javanetSocket, param1: javanetInetSocketAddress, param2: number): void;
					public untagSocket(param0: javanetSocket): void;
					public afterHandshake(param0: javaxnetsslSSLSocket): void;
					public constructor();
					public tagSocket(param0: javanetSocket): void;
					public static get(): com.squareup.okhttp.internal.Platform;
					public getPrefix(): string;
					public configureTlsExtensions(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList<any>): void;
					public logW(param0: string): void;
				}
				export module Platform {
					export class Android extends com.squareup.okhttp.internal.Platform {
						public getSelectedProtocol(param0: javaxnetsslSSLSocket): string;
						public tagSocket(param0: javanetSocket): void;
						public constructor();
						public untagSocket(param0: javanetSocket): void;
						public configureTlsExtensions(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList<any>): void;
						public connectSocket(param0: javanetSocket, param1: javanetInetSocketAddress, param2: number): void;
						public constructor(param0: com.squareup.okhttp.internal.OptionalMethod<any>, param1: com.squareup.okhttp.internal.OptionalMethod<any>, param2: javalangreflectMethod, param3: javalangreflectMethod, param4: com.squareup.okhttp.internal.OptionalMethod<any>, param5: com.squareup.okhttp.internal.OptionalMethod<any>);
					}
					export class JdkWithJettyBootPlatform extends com.squareup.okhttp.internal.Platform {
						public getSelectedProtocol(param0: javaxnetsslSSLSocket): string;
						public constructor();
						public constructor(param0: javalangreflectMethod, param1: javalangreflectMethod, param2: javalangreflectMethod, param3: javalangClass<any>, param4: javalangClass<any>);
						public afterHandshake(param0: javaxnetsslSSLSocket): void;
						public configureTlsExtensions(param0: javaxnetsslSSLSocket, param1: string, param2: javautilList<any>): void;
					}
					export class JettyNegoProvider {
						public invoke(param0: javalangObject, param1: javalangreflectMethod, param2: native.Array<javalangObject>): javalangObject;
						public constructor(param0: javautilList<any>);
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Route.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class RouteDatabase {
					public constructor();
					public failed(param0: com.squareup.okhttp.Route): void;
					public connected(param0: com.squareup.okhttp.Route): void;
					public failedRoutesCount(): number;
					public shouldPostpone(param0: com.squareup.okhttp.Route): boolean;
				}
			}
		}
	}
}

import javaioCloseable = java.io.Closeable;
import javanetServerSocket = java.net.ServerSocket;
import javautilconcurrentThreadFactory = java.util.concurrent.ThreadFactory;
import javalangAssertionError = java.lang.AssertionError;
/// <reference path="./com.squareup.okhttp.HttpUrl.d.ts" />
/// <reference path="./java.io.Closeable.d.ts" />
/// <reference path="./java.lang.AssertionError.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.ServerSocket.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.concurrent.ThreadFactory.d.ts" />
/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
/// <reference path="./okio.Source.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class Util {
					public static EMPTY_BYTE_ARRAY: native.Array<number>;
					public static EMPTY_STRING_ARRAY: native.Array<string>;
					public static UTF_8: javaniocharsetCharset;
					public static intersect<T>(param0: javalangClass<T>, param1: native.Array<javalangObject>, param2: native.Array<javalangObject>): native.Array<javalangObject>;
					public static isAndroidGetsocknameError(param0: javalangAssertionError): boolean;
					public static threadFactory(param0: string, param1: boolean): javautilconcurrentThreadFactory;
					public static shaBase64(param0: string): string;
					public static closeQuietly(param0: javanetServerSocket): void;
					public static md5Hex(param0: string): string;
					public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
					public static closeQuietly(param0: javanetSocket): void;
					public static hostHeader(param0: com.squareup.okhttp.HttpUrl): string;
					public static equal(param0: javalangObject, param1: javalangObject): boolean;
					public static immutableList(param0: javautilList<any>): javautilList<any>;
					public static toHumanReadableAscii(param0: string): string;
					public static closeAll(param0: javaioCloseable, param1: javaioCloseable): void;
					public static discard(param0: okioSource, param1: number, param2: javautilconcurrentTimeUnit): boolean;
					public static immutableList(param0: native.Array<javalangObject>): javautilList<any>;
					public static closeQuietly(param0: javaioCloseable): void;
					public static skipAll(param0: okioSource, param1: number, param2: javautilconcurrentTimeUnit): boolean;
					public static immutableMap(param0: javautilMap<any, any>): javautilMap<any, any>;
					public static sha1(param0: okioByteString): okioByteString;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export class Version {
					public static userAgent(): string;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class ErrorCode {
						public static NO_ERROR: com.squareup.okhttp.internal.framed.ErrorCode;
						public static PROTOCOL_ERROR: com.squareup.okhttp.internal.framed.ErrorCode;
						public static INVALID_STREAM: com.squareup.okhttp.internal.framed.ErrorCode;
						public static UNSUPPORTED_VERSION: com.squareup.okhttp.internal.framed.ErrorCode;
						public static STREAM_IN_USE: com.squareup.okhttp.internal.framed.ErrorCode;
						public static STREAM_ALREADY_CLOSED: com.squareup.okhttp.internal.framed.ErrorCode;
						public static INTERNAL_ERROR: com.squareup.okhttp.internal.framed.ErrorCode;
						public static FLOW_CONTROL_ERROR: com.squareup.okhttp.internal.framed.ErrorCode;
						public static STREAM_CLOSED: com.squareup.okhttp.internal.framed.ErrorCode;
						public static FRAME_TOO_LARGE: com.squareup.okhttp.internal.framed.ErrorCode;
						public static REFUSED_STREAM: com.squareup.okhttp.internal.framed.ErrorCode;
						public static CANCEL: com.squareup.okhttp.internal.framed.ErrorCode;
						public static COMPRESSION_ERROR: com.squareup.okhttp.internal.framed.ErrorCode;
						public static CONNECT_ERROR: com.squareup.okhttp.internal.framed.ErrorCode;
						public static ENHANCE_YOUR_CALM: com.squareup.okhttp.internal.framed.ErrorCode;
						public static INADEQUATE_SECURITY: com.squareup.okhttp.internal.framed.ErrorCode;
						public static HTTP_1_1_REQUIRED: com.squareup.okhttp.internal.framed.ErrorCode;
						public static INVALID_CREDENTIALS: com.squareup.okhttp.internal.framed.ErrorCode;
						public httpCode: number;
						public spdyRstCode: number;
						public spdyGoAwayCode: number;
						public static fromSpdy3Rst(param0: number): com.squareup.okhttp.internal.framed.ErrorCode;
						public static fromSpdyGoAway(param0: number): com.squareup.okhttp.internal.framed.ErrorCode;
						public static valueOf(param0: string): com.squareup.okhttp.internal.framed.ErrorCode;
						public static values(): native.Array<com.squareup.okhttp.internal.framed.ErrorCode>;
						public static fromHttp2(param0: number): com.squareup.okhttp.internal.framed.ErrorCode;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.internal.framed.ErrorCode.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.HeadersMode.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.Settings.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class FrameReader {
						/**
						 * Constructs a new instance of the com.squareup.okhttp.internal.framed.FrameReader interface with the provided implementation.
						 */
						public constructor(implementation: {
							readConnectionPreface(): void;
							nextFrame(param0: com.squareup.okhttp.internal.framed.FrameReader.Handler): boolean;
						});
						public nextFrame(param0: com.squareup.okhttp.internal.framed.FrameReader.Handler): boolean;
						public readConnectionPreface(): void;
					}
					export module FrameReader {
						export class Handler {
							/**
							 * Constructs a new instance of the com.squareup.okhttp.internal.framed.FrameReader$Handler interface with the provided implementation.
							 */
							public constructor(implementation: {
								data(param0: boolean, param1: number, param2: okioBufferedSource, param3: number): void;
								headers(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList<any>, param5: com.squareup.okhttp.internal.framed.HeadersMode): void;
								rstStream(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
								settings(param0: boolean, param1: com.squareup.okhttp.internal.framed.Settings): void;
								ackSettings(): void;
								ping(param0: boolean, param1: number, param2: number): void;
								goAway(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode, param2: okioByteString): void;
								windowUpdate(param0: number, param1: number): void;
								priority(param0: number, param1: number, param2: number, param3: boolean): void;
								pushPromise(param0: number, param1: number, param2: javautilList<any>): void;
								alternateService(param0: number, param1: string, param2: okioByteString, param3: string, param4: number, param5: number): void;
							});
							public headers(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList<any>, param5: com.squareup.okhttp.internal.framed.HeadersMode): void;
							public windowUpdate(param0: number, param1: number): void;
							public ackSettings(): void;
							public data(param0: boolean, param1: number, param2: okioBufferedSource, param3: number): void;
							public rstStream(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
							public pushPromise(param0: number, param1: number, param2: javautilList<any>): void;
							public ping(param0: boolean, param1: number, param2: number): void;
							public priority(param0: number, param1: number, param2: number, param3: boolean): void;
							public settings(param0: boolean, param1: com.squareup.okhttp.internal.framed.Settings): void;
							public goAway(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode, param2: okioByteString): void;
							public alternateService(param0: number, param1: string, param2: okioByteString, param3: string, param4: number, param5: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.internal.framed.ErrorCode.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.Settings.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class FrameWriter {
						/**
						 * Constructs a new instance of the com.squareup.okhttp.internal.framed.FrameWriter interface with the provided implementation.
						 */
						public constructor(implementation: {
							connectionPreface(): void;
							ackSettings(param0: com.squareup.okhttp.internal.framed.Settings): void;
							pushPromise(param0: number, param1: number, param2: javautilList<any>): void;
							flush(): void;
							synStream(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList<any>): void;
							synReply(param0: boolean, param1: number, param2: javautilList<any>): void;
							headers(param0: number, param1: javautilList<any>): void;
							rstStream(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
							maxDataLength(): number;
							data(param0: boolean, param1: number, param2: okioBuffer, param3: number): void;
							settings(param0: com.squareup.okhttp.internal.framed.Settings): void;
							ping(param0: boolean, param1: number, param2: number): void;
							goAway(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode, param2: native.Array<number>): void;
							windowUpdate(param0: number, param1: number): void;
						});
						public connectionPreface(): void;
						public pushPromise(param0: number, param1: number, param2: javautilList<any>): void;
						public ackSettings(param0: com.squareup.okhttp.internal.framed.Settings): void;
						public synReply(param0: boolean, param1: number, param2: javautilList<any>): void;
						public flush(): void;
						public rstStream(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
						public goAway(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode, param2: native.Array<number>): void;
						public settings(param0: com.squareup.okhttp.internal.framed.Settings): void;
						public ping(param0: boolean, param1: number, param2: number): void;
						public maxDataLength(): number;
						public data(param0: boolean, param1: number, param2: okioBuffer, param3: number): void;
						public synStream(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList<any>): void;
						public headers(param0: number, param1: javautilList<any>): void;
						public windowUpdate(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.ErrorCode.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FramedConnection.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FramedStream.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.HeadersMode.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.IncomingStreamHandler.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.Ping.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.PushObserver.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.Settings.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class FramedConnection {
						public getProtocol(): com.squareup.okhttp.Protocol;
						public writeData(param0: number, param1: boolean, param2: okioBuffer, param3: number): void;
						public ping(): com.squareup.okhttp.internal.framed.Ping;
						public close(): void;
						public sendConnectionPreface(): void;
						public getIdleStartTimeNs(): number;
						public pushStream(param0: number, param1: javautilList<any>, param2: boolean): com.squareup.okhttp.internal.framed.FramedStream;
						public shutdown(param0: com.squareup.okhttp.internal.framed.ErrorCode): void;
						public flush(): void;
						public openStreamCount(): number;
						public newStream(param0: javautilList<any>, param1: boolean, param2: boolean): com.squareup.okhttp.internal.framed.FramedStream;
						public isIdle(): boolean;
					}
					export module FramedConnection {
						export class Builder {
							public constructor(param0: boolean, param1: javanetSocket);
							public handler(param0: com.squareup.okhttp.internal.framed.IncomingStreamHandler): com.squareup.okhttp.internal.framed.FramedConnection.Builder;
							public constructor(param0: string, param1: boolean, param2: javanetSocket);
							public protocol(param0: com.squareup.okhttp.Protocol): com.squareup.okhttp.internal.framed.FramedConnection.Builder;
							public build(): com.squareup.okhttp.internal.framed.FramedConnection;
							public pushObserver(param0: com.squareup.okhttp.internal.framed.PushObserver): com.squareup.okhttp.internal.framed.FramedConnection.Builder;
						}
						export class Reader extends com.squareup.okhttp.internal.NamedRunnable implements com.squareup.okhttp.internal.framed.FrameReader.Handler {
							public headers(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList<any>, param5: com.squareup.okhttp.internal.framed.HeadersMode): void;
							public windowUpdate(param0: number, param1: number): void;
							public execute(): void;
							public ackSettings(): void;
							public data(param0: boolean, param1: number, param2: okioBufferedSource, param3: number): void;
							public rstStream(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
							public pushPromise(param0: number, param1: number, param2: javautilList<any>): void;
							public ping(param0: boolean, param1: number, param2: number): void;
							public priority(param0: number, param1: number, param2: number, param3: boolean): void;
							public settings(param0: boolean, param1: com.squareup.okhttp.internal.framed.Settings): void;
							public goAway(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode, param2: okioByteString): void;
							public alternateService(param0: number, param1: string, param2: okioByteString, param3: string, param4: number, param5: number): void;
						}
					}
				}
			}
		}
	}
}

import okioTimeout = okio.Timeout;
/// <reference path="./com.squareup.okhttp.internal.framed.ErrorCode.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FramedConnection.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class FramedStream {
						public isLocallyInitiated(): boolean;
						public getConnection(): com.squareup.okhttp.internal.framed.FramedConnection;
						public writeTimeout(): okioTimeout;
						public reply(param0: javautilList<any>, param1: boolean): void;
						public getSource(): okioSource;
						public close(param0: com.squareup.okhttp.internal.framed.ErrorCode): void;
						public getId(): number;
						public getResponseHeaders(): javautilList<any>;
						public getErrorCode(): com.squareup.okhttp.internal.framed.ErrorCode;
						public closeLater(param0: com.squareup.okhttp.internal.framed.ErrorCode): void;
						public getRequestHeaders(): javautilList<any>;
						public isOpen(): boolean;
						public readTimeout(): okioTimeout;
						public getSink(): okioSink;
					}
					export module FramedStream {
						export class FramedDataSink {
							public close(): void;
							public write(param0: okioBuffer, param1: number): void;
							public flush(): void;
							public timeout(): okioTimeout;
						}
						export class FramedDataSource {
							public close(): void;
							public read(param0: okioBuffer, param1: number): number;
							public timeout(): okioTimeout;
						}
						export class StreamTimeout {
							public newTimeoutException(param0: javaioIOException): javaioIOException;
							public timedOut(): void;
							public exitAndThrowIfTimedOut(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class Header {
						public static RESPONSE_STATUS: okioByteString;
						public static TARGET_METHOD: okioByteString;
						public static TARGET_PATH: okioByteString;
						public static TARGET_SCHEME: okioByteString;
						public static TARGET_AUTHORITY: okioByteString;
						public static TARGET_HOST: okioByteString;
						public static VERSION: okioByteString;
						public name: okioByteString;
						public value: okioByteString;
						public equals(param0: javalangObject): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: string);
						public constructor(param0: okioByteString, param1: okioByteString);
						public toString(): string;
						public constructor(param0: okioByteString, param1: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class HeadersMode {
						public static SPDY_SYN_STREAM: com.squareup.okhttp.internal.framed.HeadersMode;
						public static SPDY_REPLY: com.squareup.okhttp.internal.framed.HeadersMode;
						public static SPDY_HEADERS: com.squareup.okhttp.internal.framed.HeadersMode;
						public static HTTP_20_HEADERS: com.squareup.okhttp.internal.framed.HeadersMode;
						public static values(): native.Array<com.squareup.okhttp.internal.framed.HeadersMode>;
						public failIfHeadersPresent(): boolean;
						public failIfStreamPresent(): boolean;
						public failIfHeadersAbsent(): boolean;
						public failIfStreamAbsent(): boolean;
						public static valueOf(param0: string): com.squareup.okhttp.internal.framed.HeadersMode;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class Hpack {
					}
					export module Hpack {
						export class Reader {
							public getAndResetHeaderList(): javautilList<any>;
						}
						export class Writer {
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.ErrorCode.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FrameReader.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FrameWriter.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.Settings.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class Http2 {
						public constructor();
						public newWriter(param0: okioBufferedSink, param1: boolean): com.squareup.okhttp.internal.framed.FrameWriter;
						public getProtocol(): com.squareup.okhttp.Protocol;
						public newReader(param0: okioBufferedSource, param1: boolean): com.squareup.okhttp.internal.framed.FrameReader;
					}
					export module Http2 {
						export class ContinuationSource {
							public close(): void;
							public read(param0: okioBuffer, param1: number): number;
							public constructor(param0: okioBufferedSource);
							public timeout(): okioTimeout;
						}
						export class FrameLogger {
						}
						export class Reader {
							public nextFrame(param0: com.squareup.okhttp.internal.framed.FrameReader.Handler): boolean;
							public close(): void;
							public readConnectionPreface(): void;
						}
						export class Writer {
							public windowUpdate(param0: number, param1: number): void;
							public close(): void;
							public synStream(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList<any>): void;
							public connectionPreface(): void;
							public goAway(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode, param2: native.Array<number>): void;
							public maxDataLength(): number;
							public data(param0: boolean, param1: number, param2: okioBuffer, param3: number): void;
							public settings(param0: com.squareup.okhttp.internal.framed.Settings): void;
							public ackSettings(param0: com.squareup.okhttp.internal.framed.Settings): void;
							public synReply(param0: boolean, param1: number, param2: javautilList<any>): void;
							public flush(): void;
							public pushPromise(param0: number, param1: number, param2: javautilList<any>): void;
							public rstStream(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
							public ping(param0: boolean, param1: number, param2: number): void;
							public headers(param0: number, param1: javautilList<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class Huffman {
						public static get(): com.squareup.okhttp.internal.framed.Huffman;
					}
					export module Huffman {
						export class Node {
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.internal.framed.FramedStream.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class IncomingStreamHandler {
						/**
						 * Constructs a new instance of the com.squareup.okhttp.internal.framed.IncomingStreamHandler interface with the provided implementation.
						 */
						public constructor(implementation: {
							receive(param0: com.squareup.okhttp.internal.framed.FramedStream): void;
							<clinit>(): void;
						});
						public static REFUSE_INCOMING_STREAMS: com.squareup.okhttp.internal.framed.IncomingStreamHandler;
						public receive(param0: com.squareup.okhttp.internal.framed.FramedStream): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class NameValueBlockReader {
						public constructor(param0: okioBufferedSource);
						public close(): void;
						public readNameValueBlock(param0: number): javautilList<any>;
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class Ping {
						public roundTripTime(param0: number, param1: javautilconcurrentTimeUnit): number;
						public roundTripTime(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.internal.framed.ErrorCode.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class PushObserver {
						/**
						 * Constructs a new instance of the com.squareup.okhttp.internal.framed.PushObserver interface with the provided implementation.
						 */
						public constructor(implementation: {
							onRequest(param0: number, param1: javautilList<any>): boolean;
							onHeaders(param0: number, param1: javautilList<any>, param2: boolean): boolean;
							onData(param0: number, param1: okioBufferedSource, param2: number, param3: boolean): boolean;
							onReset(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
							<clinit>(): void;
						});
						public static CANCEL: com.squareup.okhttp.internal.framed.PushObserver;
						public onData(param0: number, param1: okioBufferedSource, param2: number, param3: boolean): boolean;
						public onHeaders(param0: number, param1: javautilList<any>, param2: boolean): boolean;
						public onRequest(param0: number, param1: javautilList<any>): boolean;
						public onReset(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class Settings {
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.ErrorCode.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FrameReader.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FrameWriter.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.Settings.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class Spdy3 {
						public constructor();
						public newWriter(param0: okioBufferedSink, param1: boolean): com.squareup.okhttp.internal.framed.FrameWriter;
						public getProtocol(): com.squareup.okhttp.Protocol;
						public newReader(param0: okioBufferedSource, param1: boolean): com.squareup.okhttp.internal.framed.FrameReader;
					}
					export module Spdy3 {
						export class Reader {
							public nextFrame(param0: com.squareup.okhttp.internal.framed.FrameReader.Handler): boolean;
							public close(): void;
							public readConnectionPreface(): void;
						}
						export class Writer {
							public windowUpdate(param0: number, param1: number): void;
							public close(): void;
							public synStream(param0: boolean, param1: boolean, param2: number, param3: number, param4: javautilList<any>): void;
							public connectionPreface(): void;
							public goAway(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode, param2: native.Array<number>): void;
							public maxDataLength(): number;
							public data(param0: boolean, param1: number, param2: okioBuffer, param3: number): void;
							public settings(param0: com.squareup.okhttp.internal.framed.Settings): void;
							public ackSettings(param0: com.squareup.okhttp.internal.framed.Settings): void;
							public synReply(param0: boolean, param1: number, param2: javautilList<any>): void;
							public flush(): void;
							public pushPromise(param0: number, param1: number, param2: javautilList<any>): void;
							public rstStream(param0: number, param1: com.squareup.okhttp.internal.framed.ErrorCode): void;
							public ping(param0: boolean, param1: number, param2: number): void;
							public headers(param0: number, param1: javautilList<any>): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FrameReader.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FrameWriter.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module framed {
					export class Variant {
						/**
						 * Constructs a new instance of the com.squareup.okhttp.internal.framed.Variant interface with the provided implementation.
						 */
						public constructor(implementation: {
							getProtocol(): com.squareup.okhttp.Protocol;
							newReader(param0: okioBufferedSource, param1: boolean): com.squareup.okhttp.internal.framed.FrameReader;
							newWriter(param0: okioBufferedSink, param1: boolean): com.squareup.okhttp.internal.framed.FrameWriter;
						});
						public newWriter(param0: okioBufferedSink, param1: boolean): com.squareup.okhttp.internal.framed.FrameWriter;
						public getProtocol(): com.squareup.okhttp.Protocol;
						public newReader(param0: okioBufferedSource, param1: boolean): com.squareup.okhttp.internal.framed.FrameReader;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Authenticator.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class AuthenticatorAdapter {
						public static INSTANCE: com.squareup.okhttp.Authenticator;
						public constructor();
						public authenticate(param0: javanetProxy, param1: com.squareup.okhttp.Response): com.squareup.okhttp.Request;
						public authenticateProxy(param0: javanetProxy, param1: com.squareup.okhttp.Response): com.squareup.okhttp.Request;
					}
				}
			}
		}
	}
}

/// <reference path="./okio.Sink.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class CacheRequest {
						/**
						 * Constructs a new instance of the com.squareup.okhttp.internal.http.CacheRequest interface with the provided implementation.
						 */
						public constructor(implementation: {
							body(): okioSink;
							abort(): void;
						});
						public body(): okioSink;
						public abort(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.CacheStrategy.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class CacheStrategy {
						public networkRequest: com.squareup.okhttp.Request;
						public cacheResponse: com.squareup.okhttp.Response;
						public static isCacheable(param0: com.squareup.okhttp.Response, param1: com.squareup.okhttp.Request): boolean;
					}
					export module CacheStrategy {
						export class Factory {
							public get(): com.squareup.okhttp.internal.http.CacheStrategy;
							public constructor(param0: number, param1: com.squareup.okhttp.Request, param2: com.squareup.okhttp.Response);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./com.squareup.okhttp.ResponseBody.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.framed.FramedConnection.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.HttpEngine.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.RetryableSink.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class FramedTransport {
						public writeRequestBody(param0: com.squareup.okhttp.internal.http.RetryableSink): void;
						public readResponseHeaders(): com.squareup.okhttp.Response.Builder;
						public openResponseBody(param0: com.squareup.okhttp.Response): com.squareup.okhttp.ResponseBody;
						public createRequestBody(param0: com.squareup.okhttp.Request, param1: number): okioSink;
						public static readNameValueBlock(param0: javautilList<any>, param1: com.squareup.okhttp.Protocol): com.squareup.okhttp.Response.Builder;
						public canReuseConnection(): boolean;
						public writeRequestHeaders(param0: com.squareup.okhttp.Request): void;
						public static writeNameValueBlock(param0: com.squareup.okhttp.Request, param1: com.squareup.okhttp.Protocol, param2: string): javautilList<any>;
						public releaseConnectionOnIdle(): void;
						public disconnect(param0: com.squareup.okhttp.internal.http.HttpEngine): void;
						public constructor(param0: com.squareup.okhttp.internal.http.HttpEngine, param1: com.squareup.okhttp.internal.framed.FramedConnection);
						public finishRequest(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class HeaderParser {
						public static skipUntil(param0: string, param1: number, param2: string): number;
						public static parseSeconds(param0: string, param1: number): number;
						public static skipWhitespace(param0: string, param1: number): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Connection.d.ts" />
/// <reference path="./com.squareup.okhttp.ConnectionPool.d.ts" />
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.HttpConnection.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.HttpEngine.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.RetryableSink.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class HttpConnection {
						public readResponse(): com.squareup.okhttp.Response.Builder;
						public writeRequestBody(param0: com.squareup.okhttp.internal.http.RetryableSink): void;
						public newUnknownLengthSource(): okioSource;
						public constructor(param0: com.squareup.okhttp.ConnectionPool, param1: com.squareup.okhttp.Connection, param2: javanetSocket);
						public readHeaders(param0: com.squareup.okhttp.Headers.Builder): void;
						public newFixedLengthSource(param0: number): okioSource;
						public isReadable(): boolean;
						public flush(): void;
						public newFixedLengthSink(param0: number): okioSink;
						public bufferSize(): number;
						public newChunkedSink(): okioSink;
						public poolOnIdle(): void;
						public isClosed(): boolean;
						public setTimeouts(param0: number, param1: number): void;
						public newChunkedSource(param0: com.squareup.okhttp.internal.http.HttpEngine): okioSource;
						public closeOnIdle(): void;
						public writeRequest(param0: com.squareup.okhttp.Headers, param1: string): void;
						public closeIfOwnedBy(param0: javalangObject): void;
						public rawSink(): okioBufferedSink;
						public rawSource(): okioBufferedSource;
					}
					export module HttpConnection {
						export abstract class AbstractSource {
							public closed: boolean;
							public endOfInput(param0: boolean): void;
							public unexpectedEndOfInput(): void;
							public timeout(): okioTimeout;
						}
						export class ChunkedSink {
							public close(): void;
							public write(param0: okioBuffer, param1: number): void;
							public flush(): void;
							public timeout(): okioTimeout;
						}
						export class ChunkedSource extends com.squareup.okhttp.internal.http.HttpConnection.AbstractSource {
							public close(): void;
							public read(param0: okioBuffer, param1: number): number;
						}
						export class FixedLengthSink {
							public close(): void;
							public write(param0: okioBuffer, param1: number): void;
							public flush(): void;
							public timeout(): okioTimeout;
						}
						export class FixedLengthSource extends com.squareup.okhttp.internal.http.HttpConnection.AbstractSource {
							public close(): void;
							public read(param0: okioBuffer, param1: number): number;
							public constructor(param0: com.squareup.okhttp.internal.http.HttpConnection, param1: number);
						}
						export class UnknownLengthSource extends com.squareup.okhttp.internal.http.HttpConnection.AbstractSource {
							public close(): void;
							public read(param0: okioBuffer, param1: number): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class HttpDate {
						public static parse(param0: string): javautilDate;
						public static format(param0: javautilDate): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Connection.d.ts" />
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.HttpUrl.d.ts" />
/// <reference path="./com.squareup.okhttp.OkHttpClient.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./com.squareup.okhttp.Route.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.RetryableSink.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.RouteException.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.RouteSelector.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class HttpEngine {
						public static MAX_FOLLOW_UPS: number;
						public bufferRequestBody: boolean;
						public sameConnection(param0: com.squareup.okhttp.HttpUrl): boolean;
						public followUpRequest(): com.squareup.okhttp.Request;
						public recover(param0: javaioIOException): com.squareup.okhttp.internal.http.HttpEngine;
						public receiveHeaders(param0: com.squareup.okhttp.Headers): void;
						public getResponse(): com.squareup.okhttp.Response;
						public getRoute(): com.squareup.okhttp.Route;
						public readResponse(): void;
						public writingRequestHeaders(): void;
						public recover(param0: com.squareup.okhttp.internal.http.RouteException): com.squareup.okhttp.internal.http.HttpEngine;
						public constructor(param0: com.squareup.okhttp.OkHttpClient, param1: com.squareup.okhttp.Request, param2: boolean, param3: boolean, param4: boolean, param5: com.squareup.okhttp.Connection, param6: com.squareup.okhttp.internal.http.RouteSelector, param7: com.squareup.okhttp.internal.http.RetryableSink, param8: com.squareup.okhttp.Response);
						public getRequestBody(): okioSink;
						public recover(param0: javaioIOException, param1: okioSink): com.squareup.okhttp.internal.http.HttpEngine;
						public releaseConnection(): void;
						public getConnection(): com.squareup.okhttp.Connection;
						public disconnect(): void;
						public static hasBody(param0: com.squareup.okhttp.Response): boolean;
						public close(): com.squareup.okhttp.Connection;
						public hasResponse(): boolean;
						public sendRequest(): void;
						public getRequest(): com.squareup.okhttp.Request;
						public getBufferedRequestBody(): okioBufferedSink;
					}
					export module HttpEngine {
						export class NetworkInterceptorChain {
							public connection(): com.squareup.okhttp.Connection;
							public request(): com.squareup.okhttp.Request;
							public proceed(param0: com.squareup.okhttp.Request): com.squareup.okhttp.Response;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class HttpMethod {
						public static requiresRequestBody(param0: string): boolean;
						public static permitsRequestBody(param0: string): boolean;
						public static invalidatesCache(param0: string): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./com.squareup.okhttp.ResponseBody.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.HttpConnection.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.HttpEngine.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.RetryableSink.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class HttpTransport {
						public writeRequestBody(param0: com.squareup.okhttp.internal.http.RetryableSink): void;
						public readResponseHeaders(): com.squareup.okhttp.Response.Builder;
						public constructor(param0: com.squareup.okhttp.internal.http.HttpEngine, param1: com.squareup.okhttp.internal.http.HttpConnection);
						public openResponseBody(param0: com.squareup.okhttp.Response): com.squareup.okhttp.ResponseBody;
						public createRequestBody(param0: com.squareup.okhttp.Request, param1: number): okioSink;
						public canReuseConnection(): boolean;
						public writeRequestHeaders(param0: com.squareup.okhttp.Request): void;
						public releaseConnectionOnIdle(): void;
						public disconnect(param0: com.squareup.okhttp.internal.http.HttpEngine): void;
						public finishRequest(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Authenticator.d.ts" />
/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class OkHeaders {
						public static SENT_MILLIS: string;
						public static RECEIVED_MILLIS: string;
						public static SELECTED_PROTOCOL: string;
						public static hasVaryAll(param0: com.squareup.okhttp.Response): boolean;
						public static processAuthHeader(param0: com.squareup.okhttp.Authenticator, param1: com.squareup.okhttp.Response, param2: javanetProxy): com.squareup.okhttp.Request;
						public static contentLength(param0: com.squareup.okhttp.Headers): number;
						public static hasVaryAll(param0: com.squareup.okhttp.Headers): boolean;
						public static varyHeaders(param0: com.squareup.okhttp.Headers, param1: com.squareup.okhttp.Headers): com.squareup.okhttp.Headers;
						public static toMultimap(param0: com.squareup.okhttp.Headers, param1: string): javautilMap<any, any>;
						public static varyHeaders(param0: com.squareup.okhttp.Response): com.squareup.okhttp.Headers;
						public static contentLength(param0: com.squareup.okhttp.Request): number;
						public static varyMatches(param0: com.squareup.okhttp.Response, param1: com.squareup.okhttp.Headers, param2: com.squareup.okhttp.Request): boolean;
						public static contentLength(param0: com.squareup.okhttp.Response): number;
						public static addCookies(param0: com.squareup.okhttp.Request.Builder, param1: javautilMap<any, any>): void;
						public static varyFields(param0: com.squareup.okhttp.Headers): javautilSet<any>;
						public static parseChallenges(param0: com.squareup.okhttp.Headers, param1: string): javautilList<any>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Headers.d.ts" />
/// <reference path="./com.squareup.okhttp.MediaType.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class RealResponseBody extends com.squareup.okhttp.ResponseBody {
						public constructor();
						public contentType(): com.squareup.okhttp.MediaType;
						public constructor(param0: com.squareup.okhttp.Headers, param1: okioBufferedSource);
						public contentLength(): number;
						public source(): okioBufferedSource;
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.IOException.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class RequestException {
						public constructor(param0: javaioIOException);
						public getCause(): javaioIOException;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.HttpUrl.d.ts" />
/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class RequestLine {
						public static version(param0: com.squareup.okhttp.Protocol): string;
						public static requestPath(param0: com.squareup.okhttp.HttpUrl): string;
					}
				}
			}
		}
	}
}

/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class RetryableSink {
						public writeToSocket(param0: okioSink): void;
						public constructor();
						public close(): void;
						public constructor(param0: number);
						public contentLength(): number;
						public write(param0: okioBuffer, param1: number): void;
						public flush(): void;
						public timeout(): okioTimeout;
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.IOException.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class RouteException {
						public constructor(param0: javaioIOException);
						public addConnectException(param0: javaioIOException): void;
						public getLastConnectException(): javaioIOException;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Address.d.ts" />
/// <reference path="./com.squareup.okhttp.OkHttpClient.d.ts" />
/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Route.d.ts" />
/// <reference path="./java.io.IOException.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class RouteSelector {
						public connectFailed(param0: com.squareup.okhttp.Route, param1: javaioIOException): void;
						public static get(param0: com.squareup.okhttp.Address, param1: com.squareup.okhttp.Request, param2: com.squareup.okhttp.OkHttpClient): com.squareup.okhttp.internal.http.RouteSelector;
						public hasNext(): boolean;
						public next(): com.squareup.okhttp.Route;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Protocol.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class StatusLine {
						public static HTTP_TEMP_REDIRECT: number;
						public static HTTP_PERM_REDIRECT: number;
						public static HTTP_CONTINUE: number;
						public protocol: com.squareup.okhttp.Protocol;
						public code: number;
						public message: string;
						public static get(param0: com.squareup.okhttp.Response): com.squareup.okhttp.internal.http.StatusLine;
						public static parse(param0: string): com.squareup.okhttp.internal.http.StatusLine;
						public constructor(param0: com.squareup.okhttp.Protocol, param1: number, param2: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.squareup.okhttp.Request.d.ts" />
/// <reference path="./com.squareup.okhttp.Response.d.ts" />
/// <reference path="./com.squareup.okhttp.ResponseBody.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.HttpEngine.d.ts" />
/// <reference path="./com.squareup.okhttp.internal.http.RetryableSink.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module http {
					export class Transport {
						/**
						 * Constructs a new instance of the com.squareup.okhttp.internal.http.Transport interface with the provided implementation.
						 */
						public constructor(implementation: {
							createRequestBody(param0: com.squareup.okhttp.Request, param1: number): okioSink;
							writeRequestHeaders(param0: com.squareup.okhttp.Request): void;
							writeRequestBody(param0: com.squareup.okhttp.internal.http.RetryableSink): void;
							finishRequest(): void;
							readResponseHeaders(): com.squareup.okhttp.Response.Builder;
							openResponseBody(param0: com.squareup.okhttp.Response): com.squareup.okhttp.ResponseBody;
							releaseConnectionOnIdle(): void;
							disconnect(param0: com.squareup.okhttp.internal.http.HttpEngine): void;
							canReuseConnection(): boolean;
						});
						public static DISCARD_STREAM_TIMEOUT_MILLIS: number;
						public writeRequestBody(param0: com.squareup.okhttp.internal.http.RetryableSink): void;
						public readResponseHeaders(): com.squareup.okhttp.Response.Builder;
						public openResponseBody(param0: com.squareup.okhttp.Response): com.squareup.okhttp.ResponseBody;
						public createRequestBody(param0: com.squareup.okhttp.Request, param1: number): okioSink;
						public canReuseConnection(): boolean;
						public writeRequestHeaders(param0: com.squareup.okhttp.Request): void;
						public releaseConnectionOnIdle(): void;
						public disconnect(param0: com.squareup.okhttp.internal.http.HttpEngine): void;
						public finishRequest(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.io.File.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module io {
					export class FileSystem {
						/**
						 * Constructs a new instance of the com.squareup.okhttp.internal.io.FileSystem interface with the provided implementation.
						 */
						public constructor(implementation: {
							source(param0: javaioFile): okioSource;
							sink(param0: javaioFile): okioSink;
							appendingSink(param0: javaioFile): okioSink;
							delete(param0: javaioFile): void;
							exists(param0: javaioFile): boolean;
							size(param0: javaioFile): number;
							rename(param0: javaioFile, param1: javaioFile): void;
							deleteContents(param0: javaioFile): void;
							<clinit>(): void;
						});
						public static SYSTEM: com.squareup.okhttp.internal.io.FileSystem;
						public deleteContents(param0: javaioFile): void;
						public rename(param0: javaioFile, param1: javaioFile): void;
						public sink(param0: javaioFile): okioSink;
						public size(param0: javaioFile): number;
						public appendingSink(param0: javaioFile): okioSink;
						public delete(param0: javaioFile): void;
						public exists(param0: javaioFile): boolean;
						public source(param0: javaioFile): okioSource;
					}
				}
			}
		}
	}
}

import javaxsecurityauthx500X500Principal = javax.security.auth.x500.X500Principal;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./javax.security.auth.x500.X500Principal.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module tls {
					export class DistinguishedNameParser {
						public constructor(param0: javaxsecurityauthx500X500Principal);
						public findMostSpecific(param0: string): string;
					}
				}
			}
		}
	}
}

import javasecuritycertX509Certificate = java.security.cert.X509Certificate;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.security.cert.X509Certificate.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./javax.net.ssl.SSLSession.d.ts" />
declare module com {
	export module squareup {
		export module okhttp {
			export module internal {
				export module tls {
					export class OkHostnameVerifier {
						public static INSTANCE: com.squareup.okhttp.internal.tls.OkHostnameVerifier;
						public static allSubjectAltNames(param0: javasecuritycertX509Certificate): javautilList<any>;
						public verify(param0: string, param1: javasecuritycertX509Certificate): boolean;
						public verify(param0: string, param1: javaxnetsslSSLSession): boolean;
					}
				}
			}
		}
	}
}

