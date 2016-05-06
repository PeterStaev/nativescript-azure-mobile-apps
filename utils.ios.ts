
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
    
    if (object !== null && object !== undefined && typeof object === "object") {
        return getNSDictionaryFromJsObject(object);
    }
    
    return object;
}

function getNSArrayFromJsArray(array: Array<any>): NSArray {
    let result = new NSMutableArray();
    
    for (let loop = 0; loop < array.length; loop++) {
        result.addObject(getNativeObject(array[loop]));
    }
    
    return result;
}

function getNSDictionaryFromJsObject(object: Object): NSDictionary {
    let result = new NSMutableDictionary();
    
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

function getJsArrayFromNSArray(array: NSArray): Array<Object> {
    let result = [];
    
    for (let loop = 0; loop < array.count; loop ++) {
        result.push(getJsObject(array.objectAtIndex(loop)));
    }
    
    return result;
}

function getJsObjectFromNSDictionary(dictionary: NSDictionary): Object {
    let keys = dictionary.allKeys;
    let result = {};
    
    for (let loop = 0; loop < keys.count; loop++) {
        let key = keys[loop];
        let item = dictionary.objectForKey(key);
        
        result[key] = getJsObject(item);
    }
    
    return result;
}