declare module okio {
	export class AsyncTimeout extends okio.Timeout {
		public constructor();
		public enter(): void;
		public sink(param0: okio.Sink): okio.Sink;
		public timedOut(): void;
		public newTimeoutException(param0: javaioIOException): javaioIOException;
		public source(param0: okio.Source): okio.Source;
		public exit(): boolean;
	}
	export module AsyncTimeout {
		export class Watchdog {
			public run(): void;
			public constructor();
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module okio {
	export class Base64 {
		public static encodeUrl(param0: native.Array<number>): string;
		public static decode(param0: string): native.Array<number>;
		public static encode(param0: native.Array<number>): string;
	}
}

import javaioOutputStream = java.io.OutputStream;
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class Buffer {
		public readIntLe(): number;
		public writeUtf8(param0: string): okio.Buffer;
		public writeDecimalLong(param0: number): okio.Buffer;
		public writeUtf8(param0: string, param1: number, param2: number): okio.Buffer;
		public copyTo(param0: javaioOutputStream): okio.Buffer;
		public readUtf8(param0: number): string;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public indexOf(param0: number): number;
		public readByte(): number;
		public emitCompleteSegments(): okio.BufferedSink;
		public writeTo(param0: javaioOutputStream): okio.Buffer;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public writeIntLe(param0: number): okio.BufferedSink;
		public copyTo(param0: okio.Buffer, param1: number, param2: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString): number;
		public equals(param0: javalangObject): boolean;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public readAll(param0: okio.Sink): number;
		public readByteArray(param0: number): native.Array<number>;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public clear(): void;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public writeLongLe(param0: number): okio.Buffer;
		public writeLong(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: number, param2: number, param3: javaniocharsetCharset): okio.BufferedSink;
		public writeByte(param0: number): okio.BufferedSink;
		public readUtf8LineStrict(): string;
		public writeUtf8CodePoint(param0: number): okio.Buffer;
		public writeInt(param0: number): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public outputStream(): javaioOutputStream;
		public skip(param0: number): void;
		public getByte(param0: number): number;
		public readInt(): number;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public writeAll(param0: okio.Source): number;
		public readFully(param0: native.Array<number>): void;
		public timeout(): okio.Timeout;
		public close(): void;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public write(param0: okio.ByteString): okio.Buffer;
		public writeHexadecimalUnsignedLong(param0: number): okio.Buffer;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: javaniocharsetCharset): okio.Buffer;
		public writeUtf8(param0: string): okio.BufferedSink;
		public readFrom(param0: javaioInputStream): okio.Buffer;
		public readUtf8CodePoint(): number;
		public writeShortLe(param0: number): okio.Buffer;
		public snapshot(param0: number): okio.ByteString;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public readHexadecimalUnsignedLong(): number;
		public writeString(param0: string, param1: javaniocharsetCharset): okio.BufferedSink;
		public emit(): okio.BufferedSink;
		public writeInt(param0: number): okio.Buffer;
		public constructor();
		public readUtf8(): string;
		public write(param0: okio.Buffer, param1: number): void;
		public readByteString(param0: number): okio.ByteString;
		public writeShort(param0: number): okio.Buffer;
		public completeSegmentByteCount(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public flush(): void;
		public writeLongLe(param0: number): okio.BufferedSink;
		public readShort(): number;
		public writeTo(param0: javaioOutputStream, param1: number): okio.Buffer;
		public readShortLe(): number;
		public readUtf8Line(): string;
		public readFrom(param0: javaioInputStream, param1: number): okio.Buffer;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.Buffer;
		public readByteString(): okio.ByteString;
		public writeIntLe(param0: number): okio.Buffer;
		public writeString(param0: string, param1: number, param2: number, param3: javaniocharsetCharset): okio.Buffer;
		public readString(param0: javaniocharsetCharset): string;
		public size(): number;
		public copyTo(param0: javaioOutputStream, param1: number, param2: number): okio.Buffer;
		public hashCode(): number;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public snapshot(): okio.ByteString;
		public write(param0: native.Array<number>): okio.Buffer;
		public clone(): okio.Buffer;
		public emitCompleteSegments(): okio.Buffer;
		public readDecimalLong(): number;
		public writeByte(param0: number): okio.Buffer;
		public readString(param0: number, param1: javaniocharsetCharset): string;
		public readByteArray(): native.Array<number>;
		public writeLong(param0: number): okio.Buffer;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public inputStream(): javaioInputStream;
		public indexOf(param0: number, param1: number): number;
		public indexOf(param0: okio.ByteString): number;
	}
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class BufferedSink {
		/**
		 * Constructs a new instance of the okio.BufferedSink interface with the provided implementation.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			write(param0: okio.ByteString): okio.BufferedSink;
			write(param0: native.Array<number>): okio.BufferedSink;
			write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
			writeAll(param0: okio.Source): number;
			write(param0: okio.Source, param1: number): okio.BufferedSink;
			writeUtf8(param0: string): okio.BufferedSink;
			writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
			writeUtf8CodePoint(param0: number): okio.BufferedSink;
			writeString(param0: string, param1: javaniocharsetCharset): okio.BufferedSink;
			writeString(param0: string, param1: number, param2: number, param3: javaniocharsetCharset): okio.BufferedSink;
			writeByte(param0: number): okio.BufferedSink;
			writeShort(param0: number): okio.BufferedSink;
			writeShortLe(param0: number): okio.BufferedSink;
			writeInt(param0: number): okio.BufferedSink;
			writeIntLe(param0: number): okio.BufferedSink;
			writeLong(param0: number): okio.BufferedSink;
			writeLongLe(param0: number): okio.BufferedSink;
			writeDecimalLong(param0: number): okio.BufferedSink;
			writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
			emitCompleteSegments(): okio.BufferedSink;
			emit(): okio.BufferedSink;
			outputStream(): javaioOutputStream;
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public writeString(param0: string, param1: number, param2: number, param3: javaniocharsetCharset): okio.BufferedSink;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: javaniocharsetCharset): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public outputStream(): javaioOutputStream;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class BufferedSource {
		/**
		 * Constructs a new instance of the okio.BufferedSource interface with the provided implementation.
		 */
		public constructor(implementation: {
			buffer(): okio.Buffer;
			exhausted(): boolean;
			require(param0: number): void;
			request(param0: number): boolean;
			readByte(): number;
			readShort(): number;
			readShortLe(): number;
			readInt(): number;
			readIntLe(): number;
			readLong(): number;
			readLongLe(): number;
			readDecimalLong(): number;
			readHexadecimalUnsignedLong(): number;
			skip(param0: number): void;
			readByteString(): okio.ByteString;
			readByteString(param0: number): okio.ByteString;
			readByteArray(): native.Array<number>;
			readByteArray(param0: number): native.Array<number>;
			read(param0: native.Array<number>): number;
			readFully(param0: native.Array<number>): void;
			read(param0: native.Array<number>, param1: number, param2: number): number;
			readFully(param0: okio.Buffer, param1: number): void;
			readAll(param0: okio.Sink): number;
			readUtf8(): string;
			readUtf8(param0: number): string;
			readUtf8Line(): string;
			readUtf8LineStrict(): string;
			readUtf8CodePoint(): number;
			readString(param0: javaniocharsetCharset): string;
			readString(param0: number, param1: javaniocharsetCharset): string;
			indexOf(param0: number): number;
			indexOf(param0: number, param1: number): number;
			indexOf(param0: okio.ByteString): number;
			indexOf(param0: okio.ByteString, param1: number): number;
			indexOfElement(param0: okio.ByteString): number;
			indexOfElement(param0: okio.ByteString, param1: number): number;
			inputStream(): javaioInputStream;
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public close(): void;
		public readIntLe(): number;
		public readByteString(): okio.ByteString;
		public readUtf8LineStrict(): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public readString(param0: javaniocharsetCharset): string;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public readLong(): number;
		public read(param0: okio.Buffer, param1: number): number;
		public readUtf8(): string;
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public readString(param0: number, param1: javaniocharsetCharset): string;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public inputStream(): javaioInputStream;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module okio {
	export class ByteString {
		public static EMPTY: okio.ByteString;
		public static of(param0: native.Array<number>): okio.ByteString;
		public static read(param0: javaioInputStream, param1: number): okio.ByteString;
		public base64(): string;
		public substring(param0: number): okio.ByteString;
		public base64Url(): string;
		public size(): number;
		public write(param0: javaioOutputStream): void;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public static decodeBase64(param0: string): okio.ByteString;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public static decodeHex(param0: string): okio.ByteString;
		public compareTo(param0: okio.ByteString): number;
		public equals(param0: javalangObject): boolean;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public static encodeUtf8(param0: string): okio.ByteString;
		public md5(): okio.ByteString;
		public toAsciiLowercase(): okio.ByteString;
		public static of(param0: native.Array<number>, param1: number, param2: number): okio.ByteString;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public toByteArray(): native.Array<number>;
	}
}

import javautilzipDeflater = java.util.zip.Deflater;
/// <reference path="./java.util.zip.Deflater.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class DeflaterSink {
		public constructor(param0: okio.Sink, param1: javautilzipDeflater);
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export abstract class ForwardingSink {
		public delegate(): okio.Sink;
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public toString(): string;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export abstract class ForwardingSource {
		public close(): void;
		public constructor(param0: okio.Source);
		public delegate(): okio.Source;
		public toString(): string;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class ForwardingTimeout extends okio.Timeout {
		public constructor();
		public throwIfReached(): void;
		public setDelegate(param0: okio.Timeout): okio.ForwardingTimeout;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public delegate(): okio.Timeout;
		public timeoutNanos(): number;
		public timeout(param0: number, param1: javautilconcurrentTimeUnit): okio.Timeout;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public constructor(param0: okio.Timeout);
		public clearTimeout(): okio.Timeout;
	}
}

/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class GzipSink {
		public close(): void;
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class GzipSource {
		public close(): void;
		public constructor(param0: okio.Source);
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

import javautilzipInflater = java.util.zip.Inflater;
/// <reference path="./java.util.zip.Inflater.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class InflaterSource {
		public close(): void;
		public constructor(param0: okio.Source, param1: javautilzipInflater);
		public refill(): boolean;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

// import javaniofilePath = java.nio.file.Path;
// import javaniofileOpenOption = java.nio.file.OpenOption;
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.net.Socket.d.ts" />
/// <reference path="./java.nio.file.OpenOption.d.ts" />
/// <reference path="./java.nio.file.Path.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.BufferedSource.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
declare module okio {
	export class Okio {
		public static sink(param0: javanetSocket): okio.Sink;
		public static appendingSink(param0: javaioFile): okio.Sink;
		public static source(param0: javaioFile): okio.Source;
		public static buffer(param0: okio.Source): okio.BufferedSource;
		public static source(param0: javaioInputStream): okio.Source;
		public static source(param0: javanetSocket): okio.Source;
		public static sink(param0: javaioFile): okio.Sink;
		public static sink(param0: any, param1: native.Array<any>): okio.Sink;
		public static source(param0: any, param1: native.Array<any>): okio.Source;
		public static buffer(param0: okio.Sink): okio.BufferedSink;
		public static sink(param0: javaioOutputStream): okio.Sink;
	}
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.BufferedSink.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class RealBufferedSink {
		public sink: okio.Sink;
		public writeString(param0: string, param1: number, param2: number, param3: javaniocharsetCharset): okio.BufferedSink;
		public writeDecimalLong(param0: number): okio.BufferedSink;
		public close(): void;
		public writeByte(param0: number): okio.BufferedSink;
		public writeShortLe(param0: number): okio.BufferedSink;
		public writeInt(param0: number): okio.BufferedSink;
		public writeUtf8CodePoint(param0: number): okio.BufferedSink;
		public writeUtf8(param0: string): okio.BufferedSink;
		public write(param0: native.Array<number>): okio.BufferedSink;
		public writeUtf8(param0: string, param1: number, param2: number): okio.BufferedSink;
		public writeShort(param0: number): okio.BufferedSink;
		public writeHexadecimalUnsignedLong(param0: number): okio.BufferedSink;
		public writeString(param0: string, param1: javaniocharsetCharset): okio.BufferedSink;
		public emitCompleteSegments(): okio.BufferedSink;
		public outputStream(): javaioOutputStream;
		public emit(): okio.BufferedSink;
		public writeIntLe(param0: number): okio.BufferedSink;
		public constructor(param0: okio.Sink, param1: okio.Buffer);
		public constructor(param0: okio.Sink);
		public write(param0: okio.Buffer, param1: number): void;
		public write(param0: native.Array<number>, param1: number, param2: number): okio.BufferedSink;
		public toString(): string;
		public flush(): void;
		public write(param0: okio.ByteString): okio.BufferedSink;
		public writeLongLe(param0: number): okio.BufferedSink;
		public write(param0: okio.Source, param1: number): okio.BufferedSink;
		public buffer(): okio.Buffer;
		public writeAll(param0: okio.Source): number;
		public writeLong(param0: number): okio.BufferedSink;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./java.io.InputStream.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
/// <reference path="./okio.Sink.d.ts" />
/// <reference path="./okio.Source.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class RealBufferedSource {
		public source: okio.Source;
		public close(): void;
		public readByteString(): okio.ByteString;
		public readIntLe(): number;
		public readUtf8LineStrict(): string;
		public readUtf8(param0: number): string;
		public readUtf8CodePoint(): number;
		public readString(param0: javaniocharsetCharset): string;
		public indexOf(param0: number): number;
		public readByte(): number;
		public readHexadecimalUnsignedLong(): number;
		public readLongLe(): number;
		public readFully(param0: okio.Buffer, param1: number): void;
		public read(param0: okio.Buffer, param1: number): number;
		public readLong(): number;
		public readUtf8(): string;
		public constructor(param0: okio.Source);
		public readByteString(param0: number): okio.ByteString;
		public indexOfElement(param0: okio.ByteString): number;
		public skip(param0: number): void;
		public readDecimalLong(): number;
		public toString(): string;
		public read(param0: native.Array<number>): number;
		public readAll(param0: okio.Sink): number;
		public readInt(): number;
		public readByteArray(param0: number): native.Array<number>;
		public read(param0: native.Array<number>, param1: number, param2: number): number;
		public readByteArray(): native.Array<number>;
		public readString(param0: number, param1: javaniocharsetCharset): string;
		public indexOfElement(param0: okio.ByteString, param1: number): number;
		public exhausted(): boolean;
		public readShort(): number;
		public buffer(): okio.Buffer;
		public inputStream(): javaioInputStream;
		public require(param0: number): void;
		public request(param0: number): boolean;
		public indexOf(param0: okio.ByteString, param1: number): number;
		public constructor(param0: okio.Source, param1: okio.Buffer);
		public readShortLe(): number;
		public indexOf(param0: number, param1: number): number;
		public readFully(param0: native.Array<number>): void;
		public readUtf8Line(): string;
		public indexOf(param0: okio.ByteString): number;
		public timeout(): okio.Timeout;
	}
}

declare module okio {
	export class Segment {
		public push(param0: okio.Segment): okio.Segment;
		public writeTo(param0: okio.Segment, param1: number): void;
		public compact(): void;
		public pop(): okio.Segment;
		public split(param0: number): okio.Segment;
	}
}

declare module okio {
	export class SegmentPool {
	}
}

/// <reference path="./java.io.OutputStream.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
declare module okio {
	export class SegmentedByteString extends okio.ByteString {
		public base64(): string;
		public rangeEquals(param0: number, param1: okio.ByteString, param2: number, param3: number): boolean;
		public substring(param0: number): okio.ByteString;
		public equals(param0: javalangObject): boolean;
		public sha256(): okio.ByteString;
		public getByte(param0: number): number;
		public toString(): string;
		public md5(): okio.ByteString;
		public base64Url(): string;
		public toAsciiLowercase(): okio.ByteString;
		public size(): number;
		public write(param0: javaioOutputStream): void;
		public hex(): string;
		public hashCode(): number;
		public toAsciiUppercase(): okio.ByteString;
		public rangeEquals(param0: number, param1: native.Array<number>, param2: number, param3: number): boolean;
		public utf8(): string;
		public substring(param0: number, param1: number): okio.ByteString;
		public toByteArray(): native.Array<number>;
	}
}

/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class Sink {
		/**
		 * Constructs a new instance of the okio.Sink interface with the provided implementation.
		 */
		public constructor(implementation: {
			write(param0: okio.Buffer, param1: number): void;
			flush(): void;
			timeout(): okio.Timeout;
			close(): void;
		});
		public close(): void;
		public write(param0: okio.Buffer, param1: number): void;
		public flush(): void;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./okio.Buffer.d.ts" />
/// <reference path="./okio.Timeout.d.ts" />
declare module okio {
	export class Source {
		/**
		 * Constructs a new instance of the okio.Source interface with the provided implementation.
		 */
		public constructor(implementation: {
			read(param0: okio.Buffer, param1: number): number;
			timeout(): okio.Timeout;
			close(): void;
		});
		public close(): void;
		public read(param0: okio.Buffer, param1: number): number;
		public timeout(): okio.Timeout;
	}
}

/// <reference path="./java.util.concurrent.TimeUnit.d.ts" />
declare module okio {
	export class Timeout {
		public static NONE: okio.Timeout;
		public constructor();
		public throwIfReached(): void;
		public clearDeadline(): okio.Timeout;
		public hasDeadline(): boolean;
		public timeoutNanos(): number;
		public deadline(param0: number, param1: javautilconcurrentTimeUnit): okio.Timeout;
		public timeout(param0: number, param1: javautilconcurrentTimeUnit): okio.Timeout;
		public deadlineNanoTime(): number;
		public deadlineNanoTime(param0: number): okio.Timeout;
		public clearTimeout(): okio.Timeout;
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.nio.charset.Charset.d.ts" />
declare module okio {
	export class Util {
		public static UTF_8: javaniocharsetCharset;
		public static reverseBytesShort(param0: number): number;
		public static reverseBytesLong(param0: number): number;
		public static sneakyRethrow(param0: javalangThrowable): void;
		public static checkOffsetAndCount(param0: number, param1: number, param2: number): void;
		public static reverseBytesInt(param0: number): number;
		public static arrayRangeEquals(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number): boolean;
	}
}

