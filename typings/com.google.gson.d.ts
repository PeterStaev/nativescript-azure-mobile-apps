declare namespace com {
	export namespace google {
		export namespace gson {
			export class DefaultDateTypeAdapter {
				public constructor(param0: number, param1: number);
				public serialize(param0: java.lang.Object, param1: java.lang.reflect.Type, param2: JsonSerializationContext): JsonElement;
				public serialize(param0: java.util.Date, param1: java.lang.reflect.Type, param2: JsonSerializationContext): JsonElement;
				public toString(): string;
				public deserialize(param0: JsonElement, param1: java.lang.reflect.Type, param2: JsonDeserializationContext): java.util.Date;
				public deserialize(param0: JsonElement, param1: java.lang.reflect.Type, param2: JsonDeserializationContext): java.lang.Object;
			}
		}
	}
}

/// <reference path="./FieldAttributes.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class ExclusionStrategy {
				/**
				 * Constructs a new instance of the ExclusionStrategy interface with the provided implementation.
				 */
				public constructor(implementation: {
					shouldSkipField(param0: FieldAttributes): boolean;
					shouldSkipClass<T>(param0: java.lang.Class<T>): boolean;
				});
				public shouldSkipField(param0: FieldAttributes): boolean;
				public shouldSkipClass<T>(param0: java.lang.Class<T>): boolean;
			}
		}
	}
}

import javalangreflectField = java.lang.reflect.Field;
import javalangannotationAnnotation = java.lang.annotation.Annotation;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.annotation.Annotation.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class FieldAttributes {
				public getDeclaredClass<T>(): java.lang.Class<T>;
				public getAnnotations<T>(): java.util.Collection<T>;
				public hasModifier(param0: number): boolean;
				public getDeclaringClass<T>(): java.lang.Class<T>;
				public getDeclaredType(): java.lang.reflect.Type;
				public constructor(param0: javalangreflectField);
				public getName(): string;
				public getAnnotation<T>(param0: java.lang.Class<T>): javalangannotationAnnotation;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export abstract class FieldNamingPolicy {
				public static IDENTITY: FieldNamingPolicy;
				public static UPPER_CAMEL_CASE: FieldNamingPolicy;
				public static UPPER_CAMEL_CASE_WITH_SPACES: FieldNamingPolicy;
				public static LOWER_CASE_WITH_UNDERSCORES: FieldNamingPolicy;
				public static LOWER_CASE_WITH_DASHES: FieldNamingPolicy;
				public static valueOf(param0: string): FieldNamingPolicy;
				public static values(): native.Array<FieldNamingPolicy>;
				public translateName(param0: javalangreflectField): string;
			}
		}
	}
}

/// <reference path="./java.lang.reflect.Field.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class FieldNamingStrategy {
				/**
				 * Constructs a new instance of the com.google.gson.FieldNamingStrategy interface with the provided implementation.
				 */
				public constructor(implementation: {
					translateName(param0: javalangreflectField): string;
				});
				public translateName(param0: javalangreflectField): string;
			}
		}
	}
}

import javalangAppendable = java.lang.Appendable;
import javaioReader = java.io.Reader;
/// <reference path="./JsonElement.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.Appendable.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class Gson {
				public getDelegateAdapter(param0: TypeAdapterFactory, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
				public toJson(param0: java.lang.Object): string;
				public fromJson(param0: JsonElement, param1: java.lang.reflect.Type): java.lang.Object;
				public toJson(param0: java.lang.Object, param1: java.lang.reflect.Type, param2: com.google.gson.stream.JsonWriter): void;
				public toJson(param0: JsonElement, param1: com.google.gson.stream.JsonWriter): void;
				public toJson(param0: java.lang.Object, param1: javalangAppendable): void;
				public toJson(param0: JsonElement, param1: javalangAppendable): void;
				public fromJson(param0: string, param1: java.lang.reflect.Type): java.lang.Object;
				public toString(): string;
				public toJsonTree(param0: java.lang.Object, param1: java.lang.reflect.Type): JsonElement;
				public constructor();
				public toJson(param0: java.lang.Object, param1: java.lang.reflect.Type): string;
				public fromJson(param0: com.google.gson.stream.JsonReader, param1: java.lang.reflect.Type): java.lang.Object;
				public toJson(param0: JsonElement): string;
				public fromJson(param0: javaioReader, param1: java.lang.reflect.Type): java.lang.Object;
				public getAdapter(param0: com.google.gson.reflect.TypeToken): TypeAdapter;
				public toJsonTree(param0: java.lang.Object): JsonElement;
				public fromJson<T>(param0: string, param1: java.lang.Class<T>): java.lang.Object;
				public fromJson<T>(param0: JsonElement, param1: java.lang.Class<T>): java.lang.Object;
				public toJson(param0: java.lang.Object, param1: java.lang.reflect.Type, param2: javalangAppendable): void;
				public getAdapter<T>(param0: java.lang.Class<T>): TypeAdapter;
				public fromJson<T>(param0: javaioReader, param1: java.lang.Class<T>): java.lang.Object;
			}
			export namespace Gson {
				export class FutureTypeAdapter extends TypeAdapter {
					public setDelegate(param0: TypeAdapter): void;
					public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
					public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
				}
			}
		}
	}
}

/// <reference path="./ExclusionStrategy.d.ts" />
/// <reference path="./FieldNamingPolicy.d.ts" />
/// <reference path="./com.google.gson.FieldNamingStrategy.d.ts" />
/// <reference path="./Gson.d.ts" />
/// <reference path="./LongSerializationPolicy.d.ts" />
/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class GsonBuilder {
				public addSerializationExclusionStrategy(param0: ExclusionStrategy): GsonBuilder;
				public serializeNulls(): GsonBuilder;
				public setPrettyPrinting(): GsonBuilder;
				public serializeSpecialFloatingPointValues(): GsonBuilder;
				public setDateFormat(param0: number, param1: number): GsonBuilder;
				public addDeserializationExclusionStrategy(param0: ExclusionStrategy): GsonBuilder;
				public setExclusionStrategies(param0: native.Array<ExclusionStrategy>): GsonBuilder;
				public registerTypeAdapter(param0: java.lang.reflect.Type, param1: java.lang.Object): GsonBuilder;
				public enableComplexMapKeySerialization(): GsonBuilder;
				public create(): Gson;
				public constructor();
				public registerTypeHierarchyAdapter<T>(param0: java.lang.Class<T>, param1: java.lang.Object): GsonBuilder;
				public registerTypeAdapterFactory(param0: TypeAdapterFactory): GsonBuilder;
				public disableInnerClassSerialization(): GsonBuilder;
				public disableHtmlEscaping(): GsonBuilder;
				public setFieldNamingPolicy(param0: FieldNamingPolicy): GsonBuilder;
				public generateNonExecutableJson(): GsonBuilder;
				public excludeFieldsWithoutExposeAnnotation(): GsonBuilder;
				public excludeFieldsWithModifiers(param0: native.Array<number>): GsonBuilder;
				public setFieldNamingStrategy(param0: FieldNamingStrategy): GsonBuilder;
				public setDateFormat(param0: number): GsonBuilder;
				public setLongSerializationPolicy(param0: LongSerializationPolicy): GsonBuilder;
				public setDateFormat(param0: string): GsonBuilder;
				public setVersion(param0: number): GsonBuilder;
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class InstanceCreator {
				/**
				 * Constructs a new instance of the com.google.gson.InstanceCreator interface with the provided implementation.
				 */
				public constructor(implementation: {
					createInstance(param0: java.lang.reflect.Type): java.lang.Object;
				});
				public createInstance(param0: java.lang.reflect.Type): java.lang.Object;
			}
		}
	}
}

import javautilIterator = java.util.Iterator;
import javamathBigDecimal = java.math.BigDecimal;
import javamathBigInteger = java.math.BigInteger;
/// <reference path="./JsonElement.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonArray extends JsonElement {
				public addAll(param0: JsonArray): void;
				public getAsLong(): number;
				public getAsCharacter(): string;
				public getAsShort(): number;
				public contains(param0: JsonElement): boolean;
				public constructor();
				public remove(param0: number): JsonElement;
				public size(): number;
				public iterator<T>(): javautilIterator<T>;
				public getAsBigDecimal(): javamathBigDecimal;
				public getAsByte(): number;
				public remove(param0: JsonElement): boolean;
				public getAsInt(): number;
				public getAsBoolean(): boolean;
				public get(param0: number): JsonElement;
				public add(param0: JsonElement): void;
				public equals(param0: java.lang.Object): boolean;
				public getAsBigInteger(): javamathBigInteger;
				public hashCode(): number;
				public getAsNumber(): javalangNumber;
				public getAsDouble(): number;
				public getAsFloat(): number;
				public getAsString(): string;
				public set(param0: number, param1: JsonElement): JsonElement;
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonDeserializationContext {
				/**
				 * Constructs a new instance of the JsonDeserializationContext interface with the provided implementation.
				 */
				public constructor(implementation: {
					deserialize(param0: JsonElement, param1: java.lang.reflect.Type): java.lang.Object;
				});
				public deserialize(param0: JsonElement, param1: java.lang.reflect.Type): java.lang.Object;
			}
		}
	}
}

/// <reference path="./JsonDeserializationContext.d.ts" />
/// <reference path="./JsonElement.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonDeserializer {
				/**
				 * Constructs a new instance of the com.google.gson.JsonDeserializer interface with the provided implementation.
				 */
				public constructor(implementation: {
					deserialize(param0: JsonElement, param1: java.lang.reflect.Type, param2: JsonDeserializationContext): java.lang.Object;
				});
				public deserialize(param0: JsonElement, param1: java.lang.reflect.Type, param2: JsonDeserializationContext): java.lang.Object;
			}
		}
	}
}

/// <reference path="./JsonArray.d.ts" />
/// <reference path="./JsonNull.d.ts" />
/// <reference path="./JsonObject.d.ts" />
/// <reference path="./JsonPrimitive.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export abstract class JsonElement {
				public isJsonArray(): boolean;
				public getAsJsonArray(): JsonArray;
				public getAsJsonPrimitive(): JsonPrimitive;
				public getAsLong(): number;
				public getAsCharacter(): string;
				public isJsonPrimitive(): boolean;
				public getAsShort(): number;
				public toString(): string;
				public constructor();
				public getAsJsonNull(): JsonNull;
				public getAsByte(): number;
				public getAsBigDecimal(): javamathBigDecimal;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public isJsonObject(): boolean;
				public getAsBigInteger(): javamathBigInteger;
				public getAsJsonObject(): JsonObject;
				public getAsNumber(): javalangNumber;
				public isJsonNull(): boolean;
				public getAsDouble(): number;
				public getAsFloat(): number;
				public getAsString(): string;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonIOException extends JsonParseException {
				public constructor(param0: javalangThrowable);
				public constructor(param0: string, param1: javalangThrowable);
				public constructor(param0: string);
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonNull extends JsonElement {
				public static INSTANCE: JsonNull;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public constructor();
			}
		}
	}
}

import javalangBoolean = java.lang.Boolean;
import javalangCharacter = java.lang.Character;
import javautilSet = java.util.Set;
/// <reference path="./JsonArray.d.ts" />
/// <reference path="./JsonElement.d.ts" />
/// <reference path="./JsonPrimitive.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Character.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonObject extends JsonElement {
				public getAsJsonArray(): JsonArray;
				public getAsJsonPrimitive(): JsonPrimitive;
				public get(param0: string): JsonElement;
				public getAsJsonPrimitive(param0: string): JsonPrimitive;
				public getAsJsonObject(param0: string): JsonObject;
				public remove(param0: string): JsonElement;
				public addProperty(param0: string, param1: javalangBoolean): void;
				public constructor();
				public addProperty(param0: string, param1: javalangCharacter): void;
				public getAsJsonArray(param0: string): JsonArray;
				public addProperty(param0: string, param1: javalangNumber): void;
				public equals(param0: java.lang.Object): boolean;
				public hashCode(): number;
				public getAsJsonObject(): JsonObject;
				public add(param0: string, param1: JsonElement): void;
				public addProperty(param0: string, param1: string): void;
				public has(param0: string): boolean;
				public entrySet<T>(): javautilSet<T>;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonParseException {
				public constructor(param0: javalangThrowable);
				public constructor(param0: string, param1: javalangThrowable);
				public constructor(param0: string);
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonParser {
				public parse(param0: javaioReader): JsonElement;
				public parse(param0: string): JsonElement;
				public parse(param0: com.google.gson.stream.JsonReader): JsonElement;
				public constructor();
			}
		}
	}
}

/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.Character.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.math.BigDecimal.d.ts" />
/// <reference path="./java.math.BigInteger.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonPrimitive extends JsonElement {
				public getAsLong(): number;
				public constructor(param0: javalangCharacter);
				public getAsCharacter(): string;
				public isNumber(): boolean;
				public getAsShort(): number;
				public constructor(param0: string);
				public constructor();
				public getAsBigDecimal(): javamathBigDecimal;
				public getAsByte(): number;
				public getAsBoolean(): boolean;
				public getAsInt(): number;
				public equals(param0: java.lang.Object): boolean;
				public getAsBigInteger(): javamathBigInteger;
				public hashCode(): number;
				public getAsNumber(): javalangNumber;
				public isString(): boolean;
				public constructor(param0: javalangBoolean);
				public constructor(param0: javalangNumber);
				public getAsDouble(): number;
				public getAsFloat(): number;
				public isBoolean(): boolean;
				public getAsString(): string;
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonSerializationContext {
				/**
				 * Constructs a new instance of the JsonSerializationContext interface with the provided implementation.
				 */
				public constructor(implementation: {
					serialize(param0: java.lang.Object): JsonElement;
					serialize(param0: java.lang.Object, param1: java.lang.reflect.Type): JsonElement;
				});
				public serialize(param0: java.lang.Object): JsonElement;
				public serialize(param0: java.lang.Object, param1: java.lang.reflect.Type): JsonElement;
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./JsonSerializationContext.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonSerializer {
				/**
				 * Constructs a new instance of the com.google.gson.JsonSerializer interface with the provided implementation.
				 */
				public constructor(implementation: {
					serialize(param0: java.lang.Object, param1: java.lang.reflect.Type, param2: JsonSerializationContext): JsonElement;
				});
				public serialize(param0: java.lang.Object, param1: java.lang.reflect.Type, param2: JsonSerializationContext): JsonElement;
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonStreamParser {
				public remove(): void;
				public hasNext(): boolean;
				public constructor(param0: javaioReader);
				public next(): JsonElement;
				public constructor(param0: string);
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class JsonSyntaxException extends JsonParseException {
				public constructor(param0: javalangThrowable);
				public constructor(param0: string, param1: javalangThrowable);
				public constructor(param0: string);
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export abstract class LongSerializationPolicy {
				public static DEFAULT: LongSerializationPolicy;
				public static STRING: LongSerializationPolicy;
				public static values(): native.Array<LongSerializationPolicy>;
				public serialize(param0: javalangLong): JsonElement;
				public static valueOf(param0: string): LongSerializationPolicy;
			}
		}
	}
}

/// <reference path="./Gson.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class TreeTypeAdapter extends TypeAdapter {
				public static newFactory(param0: com.google.gson.reflect.TypeToken, param1: java.lang.Object): TypeAdapterFactory;
				public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
				public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
				public static newFactoryWithMatchRawType(param0: com.google.gson.reflect.TypeToken, param1: java.lang.Object): TypeAdapterFactory;
				public static newTypeHierarchyFactory<T>(param0: java.lang.Class<T>, param1: java.lang.Object): TypeAdapterFactory;
			}
			export namespace TreeTypeAdapter {
				export class SingleTypeFactory {
					public create(param0: Gson, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
				}
			}
		}
	}
}

import javaioWriter = java.io.Writer;
/// <reference path="./JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export abstract class TypeAdapter {
				public toJson(param0: javaioWriter, param1: java.lang.Object): void;
				public fromJson(param0: string): java.lang.Object;
				public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
				public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
				public fromJsonTree(param0: JsonElement): java.lang.Object;
				public toJson(param0: java.lang.Object): string;
				public nullSafe(): TypeAdapter;
				public toJsonTree(param0: java.lang.Object): JsonElement;
				public fromJson(param0: javaioReader): java.lang.Object;
				public constructor();
			}
		}
	}
}

/// <reference path="./Gson.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export class TypeAdapterFactory {
				/**
				 * Constructs a new instance of the TypeAdapterFactory interface with the provided implementation.
				 */
				public constructor(implementation: {
					create(param0: Gson, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
				});
				public create(param0: Gson, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace annotations {
				export class Expose {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Expose interface with the provided implementation.
					 */
					public constructor(implementation: {
						serialize(): boolean;
						deserialize(): boolean;
					});
					public deserialize(): boolean;
					public serialize(): boolean;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace annotations {
				export class JsonAdapter {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.JsonAdapter interface with the provided implementation.
					 */
					public constructor(implementation: {
						value<T>(): java.lang.Class<T>;
					});
					public value<T>(): java.lang.Class<T>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace annotations {
				export class SerializedName {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.SerializedName interface with the provided implementation.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public value(): string;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace annotations {
				export class Since {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Since interface with the provided implementation.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public value(): number;
				}
			}
		}
	}
}

import javalangreflectParameterizedType = java.lang.reflect.ParameterizedType;
import javalangreflectGenericArrayType = java.lang.reflect.GenericArrayType;
import javalangreflectWildcardType = java.lang.reflect.WildcardType;
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.GenericArrayType.d.ts" />
/// <reference path="./java.lang.reflect.ParameterizedType.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.lang.reflect.WildcardType.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace annotations {
				export class Until {
					/**
					 * Constructs a new instance of the com.google.gson.annotations.Until interface with the provided implementation.
					 */
					public constructor(implementation: {
						value(): number;
					});
					public value(): number;
				}
				export namespace internal {
					export namespace Gson {
						export namespace Until {
							export class Preconditions {
								public constructor();
								public static checkNotNull(param0: java.lang.Object): java.lang.Object;
								public static checkArgument(param0: boolean): void;
							}
							export class Types {
								public static newParameterizedTypeWithOwner(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type, param2: native.Array<java.lang.reflect.Type>): javalangreflectParameterizedType;
								public static typeToString(param0: java.lang.reflect.Type): string;
								public static getMapKeyAndValueTypes<T>(param0: java.lang.reflect.Type, param1: java.lang.Class<T>): native.Array<java.lang.reflect.Type>;
								public static canonicalize(param0: java.lang.reflect.Type): java.lang.reflect.Type;
								public static getArrayComponentType(param0: java.lang.reflect.Type): java.lang.reflect.Type;
								public static getRawType<T>(param0: java.lang.reflect.Type): java.lang.Class<T>;
								public static getCollectionElementType<T>(param0: java.lang.reflect.Type, param1: java.lang.Class<T>): java.lang.reflect.Type;
								public static supertypeOf(param0: java.lang.reflect.Type): javalangreflectWildcardType;
								public static equals(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type): boolean;
								public static arrayOf(param0: java.lang.reflect.Type): javalangreflectGenericArrayType;
								public static subtypeOf(param0: java.lang.reflect.Type): javalangreflectWildcardType;
								public static resolve<T>(param0: java.lang.reflect.Type, param1: java.lang.Class<T>, param2: java.lang.reflect.Type): java.lang.reflect.Type;
							}
							export namespace Types {
								export class GenericArrayTypeImpl {
									public constructor(param0: java.lang.reflect.Type);
									public equals(param0: java.lang.Object): boolean;
									public toString(): string;
									public getGenericComponentType(): java.lang.reflect.Type;
									public hashCode(): number;
								}
								export class ParameterizedTypeImpl {
									public constructor(param0: java.lang.reflect.Type, param1: java.lang.reflect.Type, param2: native.Array<java.lang.reflect.Type>);
									public equals(param0: java.lang.Object): boolean;
									public toString(): string;
									public getRawType(): java.lang.reflect.Type;
									public getActualTypeArguments(): native.Array<java.lang.reflect.Type>;
									public getOwnerType(): java.lang.reflect.Type;
									public hashCode(): number;
								}
								export class WildcardTypeImpl {
									public equals(param0: java.lang.Object): boolean;
									public toString(): string;
									public constructor(param0: native.Array<java.lang.reflect.Type>, param1: native.Array<java.lang.reflect.Type>);
									public getUpperBounds(): native.Array<java.lang.reflect.Type>;
									public getLowerBounds(): native.Array<java.lang.reflect.Type>;
									public hashCode(): number;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.internal.ObjectConstructor.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export class ConstructorConstructor {
					public toString(): string;
					public constructor(param0: javautilMap<any, any>);
					public get(param0: com.google.gson.reflect.TypeToken): com.google.gson.internal.ObjectConstructor;
				}
			}
		}
	}
}

/// <reference path="./ExclusionStrategy.d.ts" />
/// <reference path="./Gson.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export class Excluder {
					public static DEFAULT: com.google.gson.internal.Excluder;
					public disableInnerClassSerialization(): com.google.gson.internal.Excluder;
					public excludeClass<T>(param0: java.lang.Class<T>, param1: boolean): boolean;
					public clone(): com.google.gson.internal.Excluder;
					public excludeField(param0: javalangreflectField, param1: boolean): boolean;
					public constructor();
					public create(param0: Gson, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
					public excludeFieldsWithoutExposeAnnotation(): com.google.gson.internal.Excluder;
					public withExclusionStrategy(param0: ExclusionStrategy, param1: boolean, param2: boolean): com.google.gson.internal.Excluder;
					public withVersion(param0: number): com.google.gson.internal.Excluder;
					public withModifiers(param0: native.Array<number>): com.google.gson.internal.Excluder;
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export abstract class JsonReaderInternalAccess {
					public static INSTANCE: com.google.gson.internal.JsonReaderInternalAccess;
					public constructor();
					public promoteNameToValue(param0: com.google.gson.stream.JsonReader): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export class LazilyParsedNumber {
					public intValue(): number;
					public toString(): string;
					public constructor(param0: string);
					public doubleValue(): number;
					public floatValue(): number;
					public longValue(): number;
				}
			}
		}
	}
}

import javautilComparator = java.util.Comparator;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export class LinkedHashTreeMap {
					public constructor();
					public remove(param0: java.lang.Object): java.lang.Object;
					public containsKey(param0: java.lang.Object): boolean;
					public clear(): void;
					public size(): number;
					public constructor(param0: javautilComparator<any>);
					public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
					public entrySet<T>(): javautilSet<T>;
					public keySet<T>(): javautilSet<T>;
					public get(param0: java.lang.Object): java.lang.Object;
				}
				export namespace LinkedHashTreeMap {
					export class AvlBuilder {
					}
					export class AvlIterator {
						public next(): com.google.gson.internal.LinkedHashTreeMap.Node;
					}
					export class EntrySet {
						public iterator<T>(): javautilIterator<T>;
						public remove(param0: java.lang.Object): boolean;
						public clear(): void;
						public size(): number;
						public contains(param0: java.lang.Object): boolean;
					}
					export class KeySet {
						public iterator<T>(): javautilIterator<T>;
						public remove(param0: java.lang.Object): boolean;
						public clear(): void;
						public size(): number;
						public contains(param0: java.lang.Object): boolean;
					}
					export abstract class LinkedTreeMapIterator {
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node {
						public first(): com.google.gson.internal.LinkedHashTreeMap.Node;
						public setValue(param0: java.lang.Object): java.lang.Object;
						public equals(param0: java.lang.Object): boolean;
						public getValue(): java.lang.Object;
						public last(): com.google.gson.internal.LinkedHashTreeMap.Node;
						public hashCode(): number;
						public toString(): string;
						public getKey(): java.lang.Object;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export class LinkedTreeMap {
					public constructor();
					public remove(param0: java.lang.Object): java.lang.Object;
					public containsKey(param0: java.lang.Object): boolean;
					public clear(): void;
					public size(): number;
					public constructor(param0: javautilComparator<any>);
					public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
					public entrySet<T>(): javautilSet<T>;
					public keySet<T>(): javautilSet<T>;
					public get(param0: java.lang.Object): java.lang.Object;
				}
				export namespace LinkedTreeMap {
					export class EntrySet {
						public iterator<T>(): javautilIterator<T>;
						public remove(param0: java.lang.Object): boolean;
						public clear(): void;
						public size(): number;
						public contains(param0: java.lang.Object): boolean;
					}
					export class KeySet {
						public iterator<T>(): javautilIterator<T>;
						public remove(param0: java.lang.Object): boolean;
						public clear(): void;
						public size(): number;
						public contains(param0: java.lang.Object): boolean;
					}
					export abstract class LinkedTreeMapIterator {
						public hasNext(): boolean;
						public remove(): void;
					}
					export class Node {
						public setValue(param0: java.lang.Object): java.lang.Object;
						public equals(param0: java.lang.Object): boolean;
						public getValue(): java.lang.Object;
						public hashCode(): number;
						public last(): com.google.gson.internal.LinkedTreeMap.Node;
						public first(): com.google.gson.internal.LinkedTreeMap.Node;
						public toString(): string;
						public getKey(): java.lang.Object;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export class ObjectConstructor {
					/**
					 * Constructs a new instance of the com.google.gson.internal.ObjectConstructor interface with the provided implementation.
					 */
					public constructor(implementation: {
						construct(): java.lang.Object;
					});
					public construct(): java.lang.Object;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export class Primitives {
					public static wrap<T>(param0: java.lang.Class<T>): java.lang.Class<T>;
					public static isWrapperType(param0: java.lang.reflect.Type): boolean;
					public static isPrimitive(param0: java.lang.reflect.Type): boolean;
					public static unwrap<T>(param0: java.lang.Class<T>): java.lang.Class<T>;
				}
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Appendable.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export class Streams {
					public static write(param0: JsonElement, param1: com.google.gson.stream.JsonWriter): void;
					public constructor();
					public static parse(param0: com.google.gson.stream.JsonReader): JsonElement;
					public static writerForAppendable(param0: javalangAppendable): javaioWriter;
				}
				export namespace Streams {
					export class AppendableWriter {
						public close(): void;
						public write(param0: number): void;
						public flush(): void;
						public write(param0: native.Array<string>, param1: number, param2: number): void;
					}
					export namespace AppendableWriter {
						export class CurrentWrite {
							public charAt(param0: number): string;
							public length(): number;
							public subSequence(param0: number, param1: number): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export abstract class UnsafeAllocator {
					public static create(): com.google.gson.internal.UnsafeAllocator;
					public constructor();
					public newInstance<T>(param0: java.lang.Class<T>): java.lang.Object;
				}
			}
		}
	}
}

/// <reference path="./Gson.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class ArrayTypeAdapter<T> extends TypeAdapter {
						public static FACTORY: TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						public constructor();
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
						public constructor(param0: Gson, param1: TypeAdapter, param2: java.lang.Class<T>);
					}
				}
			}
		}
	}
}

/// <reference path="./Gson.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.internal.ConstructorConstructor.d.ts" />
/// <reference path="./com.google.gson.internal.ObjectConstructor.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class CollectionTypeAdapterFactory {
						public create(param0: Gson, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor);
					}
					export namespace CollectionTypeAdapterFactory {
						export class Adapter extends TypeAdapter {
							public constructor();
							public constructor(param0: Gson, param1: java.lang.reflect.Type, param2: TypeAdapter, param3: com.google.gson.internal.ObjectConstructor);
							public write<T>(param0: com.google.gson.stream.JsonWriter, param1: java.util.Collection<T>): void;
							public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
							public read<T>(param0: com.google.gson.stream.JsonReader): java.util.Collection<T>;
							public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Date.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class DateTypeAdapter extends TypeAdapter {
						public static FACTORY: TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): java.util.Date;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.util.Date): void;
					}
				}
			}
		}
	}
}

/// <reference path="./Gson.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.internal.ConstructorConstructor.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class JsonAdapterAnnotationTypeAdapterFactory {
						public create(param0: Gson, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor);
					}
				}
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonToken.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class JsonTreeReader extends com.google.gson.stream.JsonReader {
						public nextNull(): void;
						public beginObject(): void;
						public promoteNameToValue(): void;
						public nextBoolean(): boolean;
						public close(): void;
						public constructor(param0: javaioReader);
						public endArray(): void;
						public beginArray(): void;
						public endObject(): void;
						public toString(): string;
						public nextInt(): number;
						public peek(): com.google.gson.stream.JsonToken;
						public nextLong(): number;
						public nextName(): string;
						public skipValue(): void;
						public hasNext(): boolean;
						public constructor(param0: JsonElement);
						public nextDouble(): number;
						public nextString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./JsonElement.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class JsonTreeWriter extends com.google.gson.stream.JsonWriter {
						public nullValue(): com.google.gson.stream.JsonWriter;
						public constructor();
						public name(param0: string): com.google.gson.stream.JsonWriter;
						public value(param0: boolean): com.google.gson.stream.JsonWriter;
						public value(param0: number): com.google.gson.stream.JsonWriter;
						public close(): void;
						public flush(): void;
						public endObject(): com.google.gson.stream.JsonWriter;
						public beginArray(): com.google.gson.stream.JsonWriter;
						public endArray(): com.google.gson.stream.JsonWriter;
						public beginObject(): com.google.gson.stream.JsonWriter;
						public constructor(param0: javaioWriter);
						public value(param0: javalangNumber): com.google.gson.stream.JsonWriter;
						public get(): JsonElement;
						public value(param0: string): com.google.gson.stream.JsonWriter;
					}
				}
			}
		}
	}
}

/// <reference path="./Gson.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.internal.ConstructorConstructor.d.ts" />
/// <reference path="./com.google.gson.internal.ObjectConstructor.d.ts" />
/// <reference path="./com.google.gson.internal.bind.MapTypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class MapTypeAdapterFactory {
						public create(param0: Gson, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
						public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: boolean);
					}
					export namespace MapTypeAdapterFactory {
						export class Adapter extends TypeAdapter {
							public constructor();
							public read(param0: com.google.gson.stream.JsonReader): javautilMap<any, any>;
							public constructor(param0: com.google.gson.internal.bind.MapTypeAdapterFactory, param1: Gson, param2: java.lang.reflect.Type, param3: TypeAdapter, param4: java.lang.reflect.Type, param5: TypeAdapter, param6: com.google.gson.internal.ObjectConstructor);
							public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
							public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
							public write(param0: com.google.gson.stream.JsonWriter, param1: javautilMap<any, any>): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class ObjectTypeAdapter extends TypeAdapter {
						public static FACTORY: TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.FieldNamingStrategy.d.ts" />
/// <reference path="./Gson.d.ts" />
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./com.google.gson.internal.ConstructorConstructor.d.ts" />
/// <reference path="./com.google.gson.internal.Excluder.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Field.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class ReflectiveTypeAdapterFactory {
						public constructor(param0: com.google.gson.internal.ConstructorConstructor, param1: com.google.gson.FieldNamingStrategy, param2: com.google.gson.internal.Excluder);
						public excludeField(param0: javalangreflectField, param1: boolean): boolean;
						public create(param0: Gson, param1: com.google.gson.reflect.TypeToken): TypeAdapter;
					}
					export namespace ReflectiveTypeAdapterFactory {
						export class Adapter extends TypeAdapter {
							public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
							public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						}
						export abstract class BoundField {
							public constructor(param0: string, param1: boolean, param2: boolean);
						}
					}
				}
			}
		}
	}
}

import javasqlDate = java.sql.Date;
/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.Date.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class SqlDateTypeAdapter extends TypeAdapter {
						public static FACTORY: TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						public constructor();
						public read(param0: com.google.gson.stream.JsonReader): javasqlDate;
						public write(param0: com.google.gson.stream.JsonWriter, param1: javasqlDate): void;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
					}
				}
			}
		}
	}
}

import javasqlTime = java.sql.Time;
/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.sql.Time.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class TimeTypeAdapter extends TypeAdapter {
						public static FACTORY: TypeAdapterFactory;
						public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						public constructor();
						public write(param0: com.google.gson.stream.JsonWriter, param1: javasqlTime): void;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
						public read(param0: com.google.gson.stream.JsonReader): javasqlTime;
					}
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class TypeAdapterRuntimeTypeWrapper extends TypeAdapter {
						public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
					}
				}
			}
		}
	}
}

import javalangEnum = java.lang.Enum;
/// <reference path="./TypeAdapter.d.ts" />
/// <reference path="./TypeAdapterFactory.d.ts" />
/// <reference path="./com.google.gson.reflect.TypeToken.d.ts" />
/// <reference path="./com.google.gson.stream.JsonReader.d.ts" />
/// <reference path="./com.google.gson.stream.JsonWriter.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace internal {
				export namespace bind {
					export class TypeAdapters {
						public static CLASS: TypeAdapter;
						public static CLASS_FACTORY: TypeAdapterFactory;
						public static BIT_SET: TypeAdapter;
						public static BIT_SET_FACTORY: TypeAdapterFactory;
						public static BOOLEAN: TypeAdapter;
						public static BOOLEAN_AS_STRING: TypeAdapter;
						public static BOOLEAN_FACTORY: TypeAdapterFactory;
						public static BYTE: TypeAdapter;
						public static BYTE_FACTORY: TypeAdapterFactory;
						public static SHORT: TypeAdapter;
						public static SHORT_FACTORY: TypeAdapterFactory;
						public static INTEGER: TypeAdapter;
						public static INTEGER_FACTORY: TypeAdapterFactory;
						public static LONG: TypeAdapter;
						public static FLOAT: TypeAdapter;
						public static DOUBLE: TypeAdapter;
						public static NUMBER: TypeAdapter;
						public static NUMBER_FACTORY: TypeAdapterFactory;
						public static CHARACTER: TypeAdapter;
						public static CHARACTER_FACTORY: TypeAdapterFactory;
						public static STRING: TypeAdapter;
						public static BIG_DECIMAL: TypeAdapter;
						public static BIG_INTEGER: TypeAdapter;
						public static STRING_FACTORY: TypeAdapterFactory;
						public static STRING_BUILDER: TypeAdapter;
						public static STRING_BUILDER_FACTORY: TypeAdapterFactory;
						public static STRING_BUFFER: TypeAdapter;
						public static STRING_BUFFER_FACTORY: TypeAdapterFactory;
						public static URL: TypeAdapter;
						public static URL_FACTORY: TypeAdapterFactory;
						public static URI: TypeAdapter;
						public static URI_FACTORY: TypeAdapterFactory;
						public static INET_ADDRESS: TypeAdapter;
						public static INET_ADDRESS_FACTORY: TypeAdapterFactory;
						public static UUID: TypeAdapter;
						public static UUID_FACTORY: TypeAdapterFactory;
						public static TIMESTAMP_FACTORY: TypeAdapterFactory;
						public static CALENDAR: TypeAdapter;
						public static CALENDAR_FACTORY: TypeAdapterFactory;
						public static LOCALE: TypeAdapter;
						public static LOCALE_FACTORY: TypeAdapterFactory;
						public static JSON_ELEMENT: TypeAdapter;
						public static JSON_ELEMENT_FACTORY: TypeAdapterFactory;
						public static ENUM_FACTORY: TypeAdapterFactory;
						public static newFactoryForMultipleTypes<T>(param0: java.lang.Class<T>, param1: java.lang.Class<T>, param2: TypeAdapter): TypeAdapterFactory;
						public static newEnumTypeHierarchyFactory(): TypeAdapterFactory;
						public static newFactory<T>(param0: java.lang.Class<T>, param1: TypeAdapter): TypeAdapterFactory;
						public static newFactory(param0: com.google.gson.reflect.TypeToken, param1: TypeAdapter): TypeAdapterFactory;
						public static newFactory<T>(param0: java.lang.Class<T>, param1: java.lang.Class<T>, param2: TypeAdapter): TypeAdapterFactory;
						public static newTypeHierarchyFactory<T>(param0: java.lang.Class<T>, param1: TypeAdapter): TypeAdapterFactory;
					}
					export namespace TypeAdapters {
						export class EnumTypeAdapter<T> extends TypeAdapter {
							public constructor();
							public constructor(param0: java.lang.Class<T>);
							public read(param0: com.google.gson.stream.JsonReader): javalangEnum<T>;
							public write(param0: com.google.gson.stream.JsonWriter, param1: java.lang.Object): void;
							public write(param0: com.google.gson.stream.JsonWriter, param1: javalangEnum<T>): void;
							public read(param0: com.google.gson.stream.JsonReader): java.lang.Object;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.reflect.Type.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace reflect {
				export class TypeToken {
					public getRawType<T>(): java.lang.Class<T>;
					public toString(): string;
					public getType(): java.lang.reflect.Type;
					public constructor();
					public equals(param0: java.lang.Object): boolean;
					public static get<T>(param0: java.lang.Class<T>): com.google.gson.reflect.TypeToken;
					public isAssignableFrom(param0: java.lang.reflect.Type): boolean;
					public isAssignableFrom<T>(param0: java.lang.Class<T>): boolean;
					public isAssignableFrom(param0: com.google.gson.reflect.TypeToken): boolean;
					public hashCode(): number;
					public static get(param0: java.lang.reflect.Type): com.google.gson.reflect.TypeToken;
				}
			}
		}
	}
}

/// <reference path="./com.google.gson.stream.JsonToken.d.ts" />
/// <reference path="./java.io.Reader.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace stream {
				export class JsonReader {
					public beginArray(): void;
					public nextBoolean(): boolean;
					public isLenient(): boolean;
					public nextNull(): void;
					public nextString(): string;
					public nextDouble(): number;
					public nextLong(): number;
					public setLenient(param0: boolean): void;
					public hasNext(): boolean;
					public beginObject(): void;
					public getPath(): string;
					public peek(): com.google.gson.stream.JsonToken;
					public toString(): string;
					public constructor(param0: javaioReader);
					public endObject(): void;
					public nextInt(): number;
					public close(): void;
					public endArray(): void;
					public skipValue(): void;
					public nextName(): string;
				}
			}
		}
	}
}

declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace stream {
				export class JsonScope {
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace stream {
				export class JsonToken {
					public static BEGIN_ARRAY: com.google.gson.stream.JsonToken;
					public static END_ARRAY: com.google.gson.stream.JsonToken;
					public static BEGIN_OBJECT: com.google.gson.stream.JsonToken;
					public static END_OBJECT: com.google.gson.stream.JsonToken;
					public static NAME: com.google.gson.stream.JsonToken;
					public static STRING: com.google.gson.stream.JsonToken;
					public static NUMBER: com.google.gson.stream.JsonToken;
					public static BOOLEAN: com.google.gson.stream.JsonToken;
					public static NULL: com.google.gson.stream.JsonToken;
					public static END_DOCUMENT: com.google.gson.stream.JsonToken;
					public static values(): native.Array<com.google.gson.stream.JsonToken>;
					public static valueOf(param0: string): com.google.gson.stream.JsonToken;
				}
			}
		}
	}
}

/// <reference path="./java.io.Writer.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace stream {
				export class JsonWriter {
					public isHtmlSafe(): boolean;
					public beginArray(): com.google.gson.stream.JsonWriter;
					public isLenient(): boolean;
					public setSerializeNulls(param0: boolean): void;
					public constructor(param0: javaioWriter);
					public flush(): void;
					public setLenient(param0: boolean): void;
					public beginObject(): com.google.gson.stream.JsonWriter;
					public value(param0: number): com.google.gson.stream.JsonWriter;
					public name(param0: string): com.google.gson.stream.JsonWriter;
					public setHtmlSafe(param0: boolean): void;
					public getSerializeNulls(): boolean;
					public endArray(): com.google.gson.stream.JsonWriter;
					public nullValue(): com.google.gson.stream.JsonWriter;
					public close(): void;
					public setIndent(param0: string): void;
					public value(param0: string): com.google.gson.stream.JsonWriter;
					public endObject(): com.google.gson.stream.JsonWriter;
					public value(param0: boolean): com.google.gson.stream.JsonWriter;
					public value(param0: javalangNumber): com.google.gson.stream.JsonWriter;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare namespace com {
	export namespace google {
		export namespace gson {
			export namespace stream {
				export class MalformedJsonException {
					public constructor(param0: string, param1: javalangThrowable);
					public constructor(param0: string);
					public constructor(param0: javalangThrowable);
				}
			}
		}
	}
}

