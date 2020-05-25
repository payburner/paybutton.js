var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-358d4d2b.js';
var bind = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
    };
};
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
    return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    }
    else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
    return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
    return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
    return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')) {
        return false;
    }
    return (typeof window !== 'undefined' &&
        typeof document !== 'undefined');
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    }
    else {
        // Iterate over object keys
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = merge(result[key], val);
        }
        else {
            result[key] = val;
        }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge( /* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = deepMerge(result[key], val);
        }
        else if (typeof val === 'object') {
            result[key] = deepMerge({}, val);
        }
        else {
            result[key] = val;
        }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
            a[key] = bind(val, thisArg);
        }
        else {
            a[key] = val;
        }
    });
    return a;
}
var utils = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    deepMerge: deepMerge,
    extend: extend,
    trim: trim
};
function encode(val) {
    return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
        return url;
    }
    var serializedParams;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    }
    else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
    }
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
                return;
            }
            if (utils.isArray(val)) {
                key = key + '[]';
            }
            else {
                val = [val];
            }
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                    v = v.toISOString();
                }
                else if (utils.isObject(v)) {
                    v = JSON.stringify(v);
                }
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
        this.handlers[id] = null;
    }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
            fn(h);
        }
    });
};
var InterceptorManager_1 = InterceptorManager;
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
    });
    return data;
};
var isCancel = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};
var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
        error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function () {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code
        };
    };
    return error;
};
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!validateStatus || validateStatus(response.status)) {
        resolve(response);
    }
    else {
        reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
    }
};
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
    return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
};
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
};
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
        return parsed;
    }
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
            }
            if (key === 'set-cookie') {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            }
            else {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }
    });
    return parsed;
};
var isURLSameOrigin = (utils.isStandardBrowserEnv() ?
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;
        /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
        function resolveURL(url) {
            var href = url;
            if (msie) {
                // IE needs attribute set twice to normalize properties
                urlParsingNode.setAttribute('href', href);
                href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute('href', href);
            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
                href: urlParsingNode.href,
                protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                host: urlParsingNode.host,
                search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                hostname: urlParsingNode.hostname,
                port: urlParsingNode.port,
                pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                    urlParsingNode.pathname :
                    '/' + urlParsingNode.pathname
            };
        }
        originURL = resolveURL(window.location.href);
        /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
        return function isURLSameOrigin(requestURL) {
            var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
        };
    })() :
    // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
            return true;
        };
    })());
var cookies = (utils.isStandardBrowserEnv() ?
    // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
        return {
            write: function write(name, value, expires, path, domain, secure) {
                var cookie = [];
                cookie.push(name + '=' + encodeURIComponent(value));
                if (utils.isNumber(expires)) {
                    cookie.push('expires=' + new Date(expires).toGMTString());
                }
                if (utils.isString(path)) {
                    cookie.push('path=' + path);
                }
                if (utils.isString(domain)) {
                    cookie.push('domain=' + domain);
                }
                if (secure === true) {
                    cookie.push('secure');
                }
                document.cookie = cookie.join('; ');
            },
            read: function read(name) {
                var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                return (match ? decodeURIComponent(match[3]) : null);
            },
            remove: function remove(name) {
                this.write(name, '', Date.now() - 86400000);
            }
        };
    })() :
    // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
        return {
            write: function write() { },
            read: function read() { return null; },
            remove: function remove() { }
        };
    })());
var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // Let the browser set it
        }
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        // Listen for ready state
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
                return;
            }
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
            }
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(resolve, reject, response);
            // Clean up request
            request = null;
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
            if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
            }
            reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            var cookies$1 = cookies;
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
                cookies$1.read(config.xsrfCookieName) :
                undefined;
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
        }
        // Add headers to the request
        if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                    // Remove Content-Type if data is undefined
                    delete requestHeaders[key];
                }
                else {
                    // Otherwise add header to the request
                    request.setRequestHeader(key, val);
                }
            });
        }
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) {
            request.withCredentials = !!config.withCredentials;
        }
        // Add responseType to request if needed
        if (config.responseType) {
            try {
                request.responseType = config.responseType;
            }
            catch (e) {
                // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                if (config.responseType !== 'json') {
                    throw e;
                }
            }
        }
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
        }
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
        }
        if (config.cancelToken) {
            // Handle cancellation
            config.cancelToken.promise.then(function onCanceled(cancel) {
                if (!request) {
                    return;
                }
                request.abort();
                reject(cancel);
                // Clean up request
                request = null;
            });
        }
        if (requestData === undefined) {
            requestData = null;
        }
        // Send the request
        request.send(requestData);
    });
};
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
    }
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = xhr;
    }
    else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = xhr;
    }
    return adapter;
}
var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) ||
                utils.isArrayBuffer(data) ||
                utils.isBuffer(data) ||
                utils.isStream(data) ||
                utils.isFile(data) ||
                utils.isBlob(data)) {
                return data;
            }
            if (utils.isArrayBufferView(data)) {
                return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            if (utils.isObject(data)) {
                setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                return JSON.stringify(data);
            }
            return data;
        }],
    transformResponse: [function transformResponse(data) {
            /*eslint no-param-reassign:0*/
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data);
                }
                catch (e) { /* Ignore */ }
            }
            return data;
        }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    }
};
defaults.headers = {
    common: {
        'Accept': 'application/json, text/plain, */*'
    }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults;
/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData(config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults_1.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData(response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
            }
        }
        return Promise.reject(reason);
    });
};
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
    var defaultToConfig2Keys = [
        'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
        'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
        'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
        'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
        'httpsAgent', 'cancelToken', 'socketPath'
    ];
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
    });
    utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
        if (utils.isObject(config2[prop])) {
            config[prop] = utils.deepMerge(config1[prop], config2[prop]);
        }
        else if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
        else if (utils.isObject(config1[prop])) {
            config[prop] = utils.deepMerge(config1[prop]);
        }
        else if (typeof config1[prop] !== 'undefined') {
            config[prop] = config1[prop];
        }
    });
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
        else if (typeof config1[prop] !== 'undefined') {
            config[prop] = config1[prop];
        }
    });
    var axiosKeys = valueFromConfig2Keys
        .concat(mergeDeepPropertiesKeys)
        .concat(defaultToConfig2Keys);
    var otherKeys = Object
        .keys(config2)
        .filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
    });
    utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
        else if (typeof config1[prop] !== 'undefined') {
            config[prop] = config1[prop];
        }
    });
    return config;
};
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager_1(),
        response: new InterceptorManager_1()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
    }
    else {
        config = config || {};
    }
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) {
        config.method = config.method.toLowerCase();
    }
    else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
    }
    else {
        config.method = 'get';
    }
    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};
// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
        return this.request(utils.merge(config || {}, {
            method: method,
            url: url
        }));
    };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, data, config) {
        return this.request(utils.merge(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
var Axios_1 = Axios;
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
    if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
        if (token.reason) {
            // Cancellation has already been requested
            return;
        }
        token.reason = new Cancel_1(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
        throw this.reason;
    }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
var CancelToken_1 = CancelToken;
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
    var context = new Axios_1(defaultConfig);
    var instance = bind(Axios_1.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios_1.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults_1);
// Expose Axios class to allow class inheritance
axios.Axios = Axios_1;
// Factory for creating new instances
axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
// Expose Cancel & CancelToken
axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = spread;
var axios_1 = axios;
// Allow use of default import syntax in TypeScript
var default_1 = axios;
axios_1.default = default_1;
var axios$1 = axios_1;
var copyTextToClipboard = function (input, _a) {
    var _b = (_a === void 0 ? {} : _a).target, target = _b === void 0 ? document.body : _b;
    var element = document.createElement('textarea');
    var previouslyFocusedElement = document.activeElement;
    element.value = input;
    // Prevent keyboard from showing on mobile
    element.setAttribute('readonly', '');
    element.style.contain = 'strict';
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    element.style.fontSize = '12pt'; // Prevent zooming on iOS
    var selection = document.getSelection();
    var originalRange = false;
    if (selection.rangeCount > 0) {
        originalRange = selection.getRangeAt(0);
    }
    target.append(element);
    element.select();
    // Explicit selection workaround for iOS
    element.selectionStart = 0;
    element.selectionEnd = input.length;
    var isSuccess = false;
    try {
        isSuccess = document.execCommand('copy');
    }
    catch (_) { }
    element.remove();
    if (originalRange) {
        selection.removeAllRanges();
        selection.addRange(originalRange);
    }
    // Get the focus back on the previously focused element, if any
    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
    }
    return isSuccess;
};
var copyTextToClipboard_1 = copyTextToClipboard;
// TODO: Remove this for the next major release
var default_1$1 = copyTextToClipboard;
copyTextToClipboard_1.default = default_1$1;
var payButtonCss = ":host{display:block}.pure-material-button-contained{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));background-color:rgb(var(--pure-material-primary-rgb, 33, 150, 243));-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);font-family:var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;overflow:hidden;outline:none;cursor:pointer;-webkit-transition:-webkit-box-shadow 0.2s;transition:-webkit-box-shadow 0.2s;transition:box-shadow 0.2s;transition:box-shadow 0.2s, -webkit-box-shadow 0.2s}.pure-material-button-contained::-moz-focus-inner{border:none}.pure-material-button-contained::before{content:\"\";position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));opacity:0;-webkit-transition:opacity 0.2s;transition:opacity 0.2s}.pure-material-button-contained::after{content:\"\";position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));opacity:0;-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);-webkit-transition:opacity 1s, -webkit-transform 0.5s;transition:opacity 1s, -webkit-transform 0.5s;transition:opacity 1s, transform 0.5s;transition:opacity 1s, transform 0.5s, -webkit-transform 0.5s}.pure-material-button-contained:hover,.pure-material-button-contained:focus{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.pure-material-button-contained:hover::before{opacity:0.08}.pure-material-button-contained:focus::before{opacity:0.24}.pure-material-button-contained:hover:focus::before{opacity:0.3}.pure-material-button-contained:active{-webkit-box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}.pure-material-button-contained:active::after{opacity:0.32;-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);-webkit-transition:-webkit-transform 0s;transition:-webkit-transform 0s;transition:transform 0s;transition:transform 0s, -webkit-transform 0s}.pure-material-button-contained:disabled{color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);background-color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);-webkit-box-shadow:none;box-shadow:none;cursor:initial}.pure-material-button-contained:disabled::before{opacity:0}.pure-material-button-contained:disabled::after{opacity:0}.modal{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.8);}.modal-content{max-width:300px;background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:300px;color:black;word-wrap:break-word;overflow-wrap:break-word;font-size:12px;font-family:var(--pure-material-font, \"Roboto\", \"Segoe UI\", BlinkMacSystemFont, system-ui, -apple-system)}.modal-content p{margin-top:20px;width:100%;margin-bottom:0px}.modal-content .xrp-price{color:rgb(149, 144, 148);margin-bottom:8px;font-size:28px;width:100%;text-align:center}.modal-content .waiting{color:rgb(149, 144, 148);margin-bottom:8px;font-size:20px;width:100%;text-align:center}.modal-content .payburner-blurb{font-size:12px;width:100%;text-align:left}.modal-content .label{font-size:20px}.modal-content hr{color:rgb(149, 144, 148);width:100%;margin-top:20px;margin-bottom:20px}.modal-content .xrp-address{color:rgb(149, 144, 148);font-size:16px;margin-top:6px;width:100%;word-break:break-word}.modal-content .xrp-address-tag{color:rgb(149, 144, 148);font-size:16px;margin-top:8px;width:100%;word-break:break-word}.close{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}.hidden{display:none}.shown{display:block}.lds-ellipsis{display:inline-block;position:relative;width:80px;height:20px;margin-left:100px;margin-right:100px}.lds-ellipsis div{position:absolute;top:15px;width:13px;height:13px;border-radius:50%;background:rgb(149, 144, 148);-webkit-animation-timing-function:cubic-bezier(0, 1, 1, 0);animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis div:nth-child(1){left:8px;-webkit-animation:lds-ellipsis1 0.6s infinite;animation:lds-ellipsis1 0.6s infinite}.lds-ellipsis div:nth-child(2){left:8px;-webkit-animation:lds-ellipsis2 0.6s infinite;animation:lds-ellipsis2 0.6s infinite}.lds-ellipsis div:nth-child(3){left:32px;-webkit-animation:lds-ellipsis2 0.6s infinite;animation:lds-ellipsis2 0.6s infinite}.lds-ellipsis div:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3 0.6s infinite;animation:lds-ellipsis3 0.6s infinite}@-webkit-keyframes lds-ellipsis1{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes lds-ellipsis1{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes lds-ellipsis3{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes lds-ellipsis3{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes lds-ellipsis2{0%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}100%{-webkit-transform:translate(24px, 0);transform:translate(24px, 0)}}@keyframes lds-ellipsis2{0%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}100%{-webkit-transform:translate(24px, 0);transform:translate(24px, 0)}}";
var Purchase = /** @class */ (function () {
    function Purchase(purchaseId, status, expectedDestinationXrpAddress, expectedDestinationXrpAddressTag, expectedAmount, statusUrl) {
        this.purchaseId = purchaseId;
        this.status = status;
        this.expectedAmount = expectedAmount;
        this.expectedDestinationXrpAddress = expectedDestinationXrpAddress;
        this.expectedDestinationXrpAddressTag = expectedDestinationXrpAddressTag;
        this.statusUrl = statusUrl;
    }
    return Purchase;
}());
var PayButton = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.settled = createEvent(this, "settled", 7);
    }
    class_1.prototype.handleClick = function () {
        var _this = this;
        axios$1.post('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid + '/purchase', {
            price: this.calcedPrice
        })
            .then(function (response) { return response.data.data; })
            .then(function (data) {
            console.log('##########' + JSON.stringify(data, null, 2));
            _this.purchase = new Purchase(data.purchaseId, data.status, data.expectedDestinationXrpAddress, data.expectedDestinationXrpAddressTag, data.expectedAmount, data.statusUrl);
            _this.makePayment();
        });
    };
    class_1.prototype.handleReset = function () {
        this.modalStatus = 'hide';
        this.buttonStatus = 'LOADED';
        this.purchase = new Purchase('', '', '', '', 0, '');
    };
    class_1.prototype.handlePayburnerStatus = function (payburnerStatus) {
        if (typeof this.payburnerStatus === 'undefined') {
            this.payburnerStatus = payburnerStatus;
        }
        else if (this.payburnerStatus !== payburnerStatus) {
            this.payburnerStatus = payburnerStatus;
        }
    };
    class_1.prototype.handlePayburnerLoggedIn = function (loggedIn) {
        if (typeof this.payburnerLoggedIn === 'undefined') {
            this.payburnerLoggedIn = loggedIn;
        }
        else if (this.payburnerLoggedIn !== loggedIn) {
            this.payburnerLoggedIn = loggedIn;
        }
    };
    class_1.prototype.disconnectedCallback = function () {
        var _this = this;
        document.removeEventListener('PayburnerStatus', function (e) { return _this.handleStatusEvent(e); });
    };
    class_1.prototype.handleStatusEvent = function (event) {
        var detail = event.detail;
        this.handlePayburnerStatus(detail.extensionStatus);
        this.handlePayburnerLoggedIn(detail.loggedIn);
    };
    class_1.prototype.componentWillLoad = function () {
        var _this = this;
        this.modalStatus = 'hide';
        this.buttonStatus = 'LOADING';
        this.purchase = new Purchase('', '', '', '', 0, '');
        //document.addEventListener('PayburnerStatus', (e) => this.handleStatusEvent(e) );
        var comp = this;
        return axios$1.get('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid, {})
            .then(function (response) { return response.data.data; })
            .then(function (data) {
            console.log(JSON.stringify(data));
            console.log('Hi there!' + data.buttonType + ' ' + comp.price);
            var price = parseFloat(data.price);
            comp.calcedPrice = (data.buttonType === 'FIXED_PRICE' ? price : (typeof comp.price !== 'undefined' && comp.price !== null ? comp.price : price));
            console.log('Calced price:' + comp.calcedPrice);
            _this.buttonStatus = 'LOADED';
        });
    };
    class_1.prototype.extractError = function (error) {
        if (typeof error === 'string') {
            return error;
        }
        if (typeof error === 'object' && typeof error.error !== 'undefined') {
            return error.error;
        }
        return JSON.stringify(error);
    };
    class_1.prototype.makePayment = function () {
        var PAYBURNER = window.PAYBURNER;
        var comp = this;
        this.buttonStatus = 'WAITING';
        PAYBURNER.makePaymentWithTag(this.purchase.expectedDestinationXrpAddress, parseInt(this.purchase.expectedDestinationXrpAddressTag), this.purchase.expectedAmount)
            .then(function (response) {
            var _this = this;
            if (typeof response.error !== 'undefined') {
                //alert(JSON.stringify(response, null, 2));
                var purchase = comp.purchase;
                purchase.status = 'ERROR';
                comp.purchase = purchase;
                console.log('Error received from payment request:' + comp.extractError(response.error));
                comp.buttonStatus = 'ERROR';
            }
            else {
                comp.buttonStatus = 'SETTLING';
                if (response.state === 'SUCCESS') {
                    var count_1 = { count: 0, status: 'PENDING' };
                    var interval_1 = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var purchaseStatus;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, axios$1.get(comp.purchase.statusUrl)];
                                case 1:
                                    purchaseStatus = _a.sent();
                                    comp.purchase = purchaseStatus.data.data;
                                    if (purchaseStatus.data.data.status === 'SETTLED') {
                                        count_1.status = 'SETTLED';
                                        clearInterval(interval_1);
                                        console.log('SETTLED', response.finalized.hash, response.finalized.engine_result);
                                        comp.buttonStatus = 'SETTLED';
                                        comp.settled.emit(comp.purchase);
                                    }
                                    else {
                                        count_1.count = count_1.count + 1;
                                        comp.buttonStatus = 'SETTLING';
                                        if (count_1.count > 10) {
                                            clearInterval(interval_1);
                                            comp.buttonStatus = 'TIMEOUT';
                                        }
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }, 5000);
                }
                else {
                    comp.buttonStatus = 'SETTLING';
                }
            }
        })
            .catch(function (error) {
            PAYBURNER.log("<- error: " + comp.extractError(error));
        });
    };
    class_1.prototype.isPayburnerConnected = function () {
        var PAYBURNER = window.PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {
            return false;
        }
        else if (typeof this.payburnerStatus === 'undefined') {
            return PAYBURNER.isPayburnerConnected();
        }
        else {
            return this.payburnerStatus === 'CONNECTED';
        }
    };
    class_1.prototype.isPayburnerLoggedIn = function () {
        var PAYBURNER = window.PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {
            return false;
        }
        else if (typeof this.payburnerLoggedIn === 'undefined') {
            return false;
        }
        else {
            return this.payburnerLoggedIn;
        }
    };
    class_1.prototype.awaitPayment = function () {
        var _this = this;
        var comp = this;
        this.buttonStatus = 'WAITING';
        var interval = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var purchaseStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.modalStatus === 'hide')) return [3 /*break*/, 1];
                        clearInterval(interval);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, axios$1.get(comp.purchase.statusUrl)];
                    case 2:
                        purchaseStatus = _a.sent();
                        comp.purchase = purchaseStatus.data.data;
                        if (purchaseStatus.data.data.status === 'SETTLED') {
                            clearInterval(interval);
                            comp.buttonStatus = 'SETTLED';
                            comp.settled.emit(comp.purchase);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); }, 5000);
    };
    class_1.prototype.openModal = function () {
        var _this = this;
        axios$1.post('https://gateway.payburner.com/v1/gateway/paybuttons/' +
            this.buttonid + '/purchase', {
            price: this.calcedPrice
        })
            .then(function (response) { return response.data.data; })
            .then(function (data) {
            _this.purchase = new Purchase(data.purchaseId, data.status, data.expectedDestinationXrpAddress, data.expectedDestinationXrpAddressTag, data.expectedAmount, data.statusUrl);
            _this.buttonStatus = data.status;
            _this.modalStatus = 'show';
            _this.awaitPayment();
        });
    };
    class_1.prototype.closeModal = function () {
        this.modalStatus = 'hide';
        this.buttonStatus = 'LOADED';
    };
    class_1.prototype.renderCopyIcon = function () {
        return h("svg", { fill: "currentColor", style: { 'display': 'inline-block', 'vertical-align': 'middle' }, height: "12", width: "12", viewBox: "0 0 1792 1792" }, h("path", { d: "M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z" }));
    };
    class_1.prototype.renderModal = function (showGetPayburner, showNotLoggedIn) {
        var _this = this;
        if (this.purchase.status === 'SETTLED') {
            return h("div", { id: "myModal", class: this.modalStatus === 'hide' ? 'modal hidden' : 'modal shown' }, h("div", { class: "modal-content" }, h("span", { class: "close", onClick: function () { return _this.closeModal(); } }, "\u00D7"), h("p", { class: "xrp-price", onClick: function () { return copyTextToClipboard_1(_this.purchase.expectedAmount.toString()); } }, this.purchase.expectedAmount, " XRP"), h("p", { class: "payburner-blurb" }, "To pay, send XRP to the following address and tag using any XRP wallet."), h("p", { class: "label" }, "XRP Address"), h("p", { class: "xrp-address", onClick: function () { return copyTextToClipboard_1(_this.purchase.expectedDestinationXrpAddress); } }, this.purchase.expectedDestinationXrpAddress, " ", this.renderCopyIcon()), h("p", { class: "label" }, "Tag"), h("p", { class: "xrp-address-tag", onClick: function () { return copyTextToClipboard_1(_this.purchase.expectedDestinationXrpAddressTag); } }, this.purchase.expectedDestinationXrpAddressTag, " ", this.renderCopyIcon()), h("hr", null), h("p", { class: "waiting" }, "Thank you for your payment!  Your payment id is ", this.purchase.purchaseId), h("hr", null), showGetPayburner ? (h("p", { class: "payburner-blurb" }, "If you don't have an XRP wallet or want a great payment experience, click here to install the ", h("a", { href: "https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en" }, "Payburner Wallet"), ".")) : null, showNotLoggedIn ? (h("p", { class: "payburner-blurb" }, "Your Paybuner Wallet is not logged in.")) : null));
        }
        else {
            return h("div", { id: "myModal", class: this.modalStatus === 'hide' ? 'modal hidden' : 'modal shown' }, h("div", { class: "modal-content" }, h("span", { class: "close", onClick: function () { return _this.closeModal(); } }, "\u00D7"), h("p", { class: "xrp-price", onClick: function () { return copyTextToClipboard_1(_this.purchase.expectedAmount.toString()); } }, this.purchase.expectedAmount, " XRP"), h("p", { class: "payburner-blurb" }, "To pay, send XRP to the following address and tag using any XRP wallet."), h("p", { class: "label" }, "XRP Address"), h("p", { class: "xrp-address", onClick: function () { return copyTextToClipboard_1(_this.purchase.expectedDestinationXrpAddress); } }, this.purchase.expectedDestinationXrpAddress, " ", this.renderCopyIcon()), h("p", { class: "label" }, "Tag"), h("p", { class: "xrp-address-tag", onClick: function () { return copyTextToClipboard_1(_this.purchase.expectedDestinationXrpAddressTag); } }, this.purchase.expectedDestinationXrpAddressTag, " ", this.renderCopyIcon()), h("hr", null), h("p", { class: "waiting" }, "Waiting for you to send XRP to the address and tag."), h("div", { class: "lds-ellipsis" }, h("div", null), h("div", null), h("div", null), h("div", null)), h("hr", null), showGetPayburner ? (h("p", { class: "payburner-blurb" }, "If you don't have an XRP wallet or want a great payment experience, click here to install the ", h("a", { href: "https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en" }, "Payburner Wallet"), ".")) : null, showNotLoggedIn ? (h("p", { class: "payburner-blurb" }, "Your Paybuner Wallet is not logged in.")) : null));
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        var PAYBURNER = window.PAYBURNER;
        if (typeof PAYBURNER === 'undefined') {
            return h("div", null, h("button", { onClick: function () { return _this.openModal(); }, class: "pure-material-button-contained" }, this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)), this.renderModal(false, false));
        }
        else if (!this.isPayburnerConnected()) {
            return h("div", null, h("button", { class: "pure-material-button-contained", onClick: function () { return _this.openModal(); } }, this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)), this.renderModal(true, false));
        }
        else if (!this.isPayburnerLoggedIn()) {
            return h("div", null, h("button", { class: "pure-material-button-contained", onClick: function () { return _this.openModal(); } }, this.buttonStatus === 'LOADED' ? (this.calcedPrice + ' XRP') : (this.buttonStatus)), this.renderModal(false, true));
        }
        else if (this.buttonStatus === 'PENDING') {
            return h(Host, null, h("button", { class: "pure-material-button-contained" }, this.buttonStatus));
        }
        else if (this.buttonStatus === 'ERROR') {
            return h("button", { onClick: function () { return _this.handleReset(); }, class: "pure-material-button-contained" }, "ERROR");
        }
        else if (this.buttonStatus === 'WAITING') {
            return h("button", { onClick: function () { return _this.handleReset(); }, class: "pure-material-button-contained" }, "WAITING");
        }
        else if (this.buttonStatus === 'TIMEOUT') {
            return h("button", { onClick: function () { return _this.handleReset(); }, class: "pure-material-button-contained" }, "TIMEOUT");
        }
        else if (this.buttonStatus === 'SETTLING') {
            return h("button", { onClick: function () { return _this.handleReset(); }, class: "pure-material-button-contained" }, this.buttonStatus);
        }
        else if (this.buttonStatus === 'SETTLED') {
            return h(Host, { status: this.buttonStatus }, h("button", { onClick: function () { return _this.handleReset(); }, class: "pure-material-button-contained" }, this.buttonStatus));
        }
        else if (this.buttonStatus === 'LOADED') {
            return h("button", { onClick: function () { return _this.handleClick(); }, class: "pure-material-button-contained" }, this.calcedPrice, " XRP");
        }
        else {
            return h("button", { onClick: function () { return _this.handleClick(); }, class: "pure-material-button-contained" }, "UNKNOWN: ", this.buttonStatus);
        }
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
PayButton.style = payButtonCss;
export { PayButton as pay_button };
