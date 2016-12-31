/*! *****************************************************************************
Copyright (c) 2016 Tangra Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
***************************************************************************** */
export function getNativeValueForComparison(value: string|number|boolean|Date): any {
    if (value instanceof Date) {
        // There is a problem with {N} wrapping NSDate so we just use ISO String to filter
        return (<Date>value).toISOString();
    }

    return value;
}

export function getNativeObject(object: any): any {
    if (object instanceof Array) {
        return getNSArrayFromJsArray(object);
    }
    
    if (object !== null && object !== undefined && typeof object === "object" && !(object instanceof Date)) {
        return getNSDictionaryFromJsObject(object);
    }
    
    return object;
}

function getNSArrayFromJsArray(array: Array<any>): NSArray<any> {
    let result = NSMutableArray.alloc().init();
    
    for (let loop = 0; loop < array.length; loop++) {
        result.addObject(getNativeObject(array[loop]));
    }
    
    return result;
}

function getNSDictionaryFromJsObject(object: Object): NSDictionary<any, any> {
    let result = NSMutableDictionary.alloc().init();
    
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            result.setValueForKey(getNativeObject(object[key]), key);
        }
    }
    
    return result;
}

export function getJsObject(object: any): any {
    if (object instanceof NSDictionary) {
        return getJsObjectFromNSDictionary(object);
    }
    
    if (object instanceof NSArray) {
        return getJsArrayFromNSArray(object);
    }
    
    return object;
}

function getJsArrayFromNSArray(array: NSArray<any>): Array<Object> {
    let result = [];
    
    for (let loop = 0; loop < array.count; loop ++) {
        result.push(getJsObject(array.objectAtIndex(loop)));
    }
    
    return result;
}

function getJsObjectFromNSDictionary(dictionary: NSDictionary<any, any>): Object {
    let keys = dictionary.allKeys;
    let result = {};
    
    for (let loop = 0; loop < keys.count; loop++) {
        let key = keys[loop];
        let item = dictionary.objectForKey(key);
        
        result[key] = getJsObject(item);
    }
    
    return result;
}

export function deviceTokenToNsData(token: string): NSData {
    let result = NSMutableData.alloc().init();

    for (let loop = 0; loop < token.length / 2; loop++) {
        let byteChars = "";
        let byte: number;

        byteChars = `${token[loop * 2]}${token[loop * 2 + 1]}\0`;
        byte = strtol(byteChars, null, 16);
        
        let pointer = new interop.Reference(interop.types.unichar, String.fromCharCode(byte));
        result.appendBytesLength(pointer, 1);
    }

    return result;
}