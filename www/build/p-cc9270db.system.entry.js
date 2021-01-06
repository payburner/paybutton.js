var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{u(n.next(e))}catch(t){i(t)}}function s(e){try{u(n["throw"](e))}catch(t){i(t)}}function u(e){e.done?r(e.value):a(e.value).then(o,s)}u((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return u([e,t])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(s){o=[6,s];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-99ac7996.system.js"],(function(e){"use strict";var t,r,n,a,i;return{setters:[function(e){t=e.r;r=e.c;n=e.h;a=e.H;i=e.g}],execute:function(){var o=function e(t,r){return function e(){var n=new Array(arguments.length);for(var a=0;a<n.length;a++){n[a]=arguments[a]}return t.apply(r,n)}};var s=Object.prototype.toString;function u(e){return s.call(e)==="[object Array]"}function c(e){return typeof e==="undefined"}function l(e){return e!==null&&!c(e)&&e.constructor!==null&&!c(e.constructor)&&typeof e.constructor.isBuffer==="function"&&e.constructor.isBuffer(e)}function f(e){return s.call(e)==="[object ArrayBuffer]"}function p(e){return typeof FormData!=="undefined"&&e instanceof FormData}function d(e){var t;if(typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView){t=ArrayBuffer.isView(e)}else{t=e&&e.buffer&&e.buffer instanceof ArrayBuffer}return t}function h(e){return typeof e==="string"}function m(e){return typeof e==="number"}function b(e){return e!==null&&typeof e==="object"}function y(e){return s.call(e)==="[object Date]"}function g(e){return s.call(e)==="[object File]"}function v(e){return s.call(e)==="[object Blob]"}function x(e){return s.call(e)==="[object Function]"}function w(e){return b(e)&&x(e.pipe)}function k(e){return typeof URLSearchParams!=="undefined"&&e instanceof URLSearchParams}function S(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function E(){if(typeof navigator!=="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")){return false}return typeof window!=="undefined"&&typeof document!=="undefined"}function R(e,t){if(e===null||typeof e==="undefined"){return}if(typeof e!=="object"){e=[e]}if(u(e)){for(var r=0,n=e.length;r<n;r++){t.call(null,e[r],r,e)}}else{for(var a in e){if(Object.prototype.hasOwnProperty.call(e,a)){t.call(null,e[a],a,e)}}}}function A(){var e={};function t(t,r){if(typeof e[r]==="object"&&typeof t==="object"){e[r]=A(e[r],t)}else{e[r]=t}}for(var r=0,n=arguments.length;r<n;r++){R(arguments[r],t)}return e}function P(){var e={};function t(t,r){if(typeof e[r]==="object"&&typeof t==="object"){e[r]=P(e[r],t)}else if(typeof t==="object"){e[r]=P({},t)}else{e[r]=t}}for(var r=0,n=arguments.length;r<n;r++){R(arguments[r],t)}return e}function T(e,t,r){R(t,(function t(n,a){if(r&&typeof n==="function"){e[a]=o(n,r)}else{e[a]=n}}));return e}var C={isArray:u,isArrayBuffer:f,isBuffer:l,isFormData:p,isArrayBufferView:d,isString:h,isNumber:m,isObject:b,isUndefined:c,isDate:y,isFile:g,isBlob:v,isFunction:x,isStream:w,isURLSearchParams:k,isStandardBrowserEnv:E,forEach:R,merge:A,deepMerge:P,extend:T,trim:S};function D(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var L=function e(t,r,n){if(!r){return t}var a;if(n){a=n(r)}else if(C.isURLSearchParams(r)){a=r.toString()}else{var i=[];C.forEach(r,(function e(t,r){if(t===null||typeof t==="undefined"){return}if(C.isArray(t)){r=r+"[]"}else{t=[t]}C.forEach(t,(function e(t){if(C.isDate(t)){t=t.toISOString()}else if(C.isObject(t)){t=JSON.stringify(t)}i.push(D(r)+"="+D(t))}))}));a=i.join("&")}if(a){var o=t.indexOf("#");if(o!==-1){t=t.slice(0,o)}t+=(t.indexOf("?")===-1?"?":"&")+a}return t};function I(){this.handlers=[]}I.prototype.use=function e(t,r){this.handlers.push({fulfilled:t,rejected:r});return this.handlers.length-1};I.prototype.eject=function e(t){if(this.handlers[t]){this.handlers[t]=null}};I.prototype.forEach=function e(t){C.forEach(this.handlers,(function e(r){if(r!==null){t(r)}}))};var N=I;var O=function e(t,r,n){C.forEach(n,(function e(n){t=n(t,r)}));return t};var U=function e(t){return!!(t&&t.__CANCEL__)};var B=function e(t,r){C.forEach(t,(function e(n,a){if(a!==r&&a.toUpperCase()===r.toUpperCase()){t[r]=n;delete t[a]}}))};var j=function e(t,r,n,a,i){t.config=r;if(n){t.code=n}t.request=a;t.response=i;t.isAxiosError=true;t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}};return t};var X=function e(t,r,n,a,i){var o=new Error(t);return j(o,r,n,a,i)};var q=function e(t,r,n){var a=n.config.validateStatus;if(!a||a(n.status)){t(n)}else{r(X("Request failed with status code "+n.status,n.config,null,n.request,n))}};var z=function e(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)};var _=function e(t,r){return r?t.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):t};var M=function e(t,r){if(t&&!z(r)){return _(t,r)}return r};var F=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];var Y=function e(t){var r={};var n;var a;var i;if(!t){return r}C.forEach(t.split("\n"),(function e(t){i=t.indexOf(":");n=C.trim(t.substr(0,i)).toLowerCase();a=C.trim(t.substr(i+1));if(n){if(r[n]&&F.indexOf(n)>=0){return}if(n==="set-cookie"){r[n]=(r[n]?r[n]:[]).concat([a])}else{r[n]=r[n]?r[n]+", "+a:a}}}));return r};var H=C.isStandardBrowserEnv()?function e(){var t=/(msie|trident)/i.test(navigator.userAgent);var r=document.createElement("a");var n;function a(e){var n=e;if(t){r.setAttribute("href",n);n=r.href}r.setAttribute("href",n);return{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}n=a(window.location.href);return function e(t){var r=C.isString(t)?a(t):t;return r.protocol===n.protocol&&r.host===n.host}}():function e(){return function e(){return true}}();var G=C.isStandardBrowserEnv()?function e(){return{write:function e(t,r,n,a,i,o){var s=[];s.push(t+"="+encodeURIComponent(r));if(C.isNumber(n)){s.push("expires="+new Date(n).toGMTString())}if(C.isString(a)){s.push("path="+a)}if(C.isString(i)){s.push("domain="+i)}if(o===true){s.push("secure")}document.cookie=s.join("; ")},read:function e(t){var r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function e(t){this.write(t,"",Date.now()-864e5)}}}():function e(){return{write:function e(){},read:function e(){return null},remove:function e(){}}}();var W=function e(t){return new Promise((function e(r,n){var a=t.data;var i=t.headers;if(C.isFormData(a)){delete i["Content-Type"]}var o=new XMLHttpRequest;if(t.auth){var s=t.auth.username||"";var u=t.auth.password||"";i.Authorization="Basic "+btoa(s+":"+u)}var c=M(t.baseURL,t.url);o.open(t.method.toUpperCase(),L(c,t.params,t.paramsSerializer),true);o.timeout=t.timeout;o.onreadystatechange=function e(){if(!o||o.readyState!==4){return}if(o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)){return}var a="getAllResponseHeaders"in o?Y(o.getAllResponseHeaders()):null;var i=!t.responseType||t.responseType==="text"?o.responseText:o.response;var s={data:i,status:o.status,statusText:o.statusText,headers:a,config:t,request:o};q(r,n,s);o=null};o.onabort=function e(){if(!o){return}n(X("Request aborted",t,"ECONNABORTED",o));o=null};o.onerror=function e(){n(X("Network Error",t,null,o));o=null};o.ontimeout=function e(){var r="timeout of "+t.timeout+"ms exceeded";if(t.timeoutErrorMessage){r=t.timeoutErrorMessage}n(X(r,t,"ECONNABORTED",o));o=null};if(C.isStandardBrowserEnv()){var l=G;var f=(t.withCredentials||H(c))&&t.xsrfCookieName?l.read(t.xsrfCookieName):undefined;if(f){i[t.xsrfHeaderName]=f}}if("setRequestHeader"in o){C.forEach(i,(function e(t,r){if(typeof a==="undefined"&&r.toLowerCase()==="content-type"){delete i[r]}else{o.setRequestHeader(r,t)}}))}if(!C.isUndefined(t.withCredentials)){o.withCredentials=!!t.withCredentials}if(t.responseType){try{o.responseType=t.responseType}catch(p){if(t.responseType!=="json"){throw p}}}if(typeof t.onDownloadProgress==="function"){o.addEventListener("progress",t.onDownloadProgress)}if(typeof t.onUploadProgress==="function"&&o.upload){o.upload.addEventListener("progress",t.onUploadProgress)}if(t.cancelToken){t.cancelToken.promise.then((function e(t){if(!o){return}o.abort();n(t);o=null}))}if(a===undefined){a=null}o.send(a)}))};var J={"Content-Type":"application/x-www-form-urlencoded"};function V(e,t){if(!C.isUndefined(e)&&C.isUndefined(e["Content-Type"])){e["Content-Type"]=t}}function $(){var e;if(typeof XMLHttpRequest!=="undefined"){e=W}else if(typeof process!=="undefined"&&Object.prototype.toString.call(process)==="[object process]"){e=W}return e}var K={adapter:$(),transformRequest:[function e(t,r){B(r,"Accept");B(r,"Content-Type");if(C.isFormData(t)||C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)){return t}if(C.isArrayBufferView(t)){return t.buffer}if(C.isURLSearchParams(t)){V(r,"application/x-www-form-urlencoded;charset=utf-8");return t.toString()}if(C.isObject(t)){V(r,"application/json;charset=utf-8");return JSON.stringify(t)}return t}],transformResponse:[function e(t){if(typeof t==="string"){try{t=JSON.parse(t)}catch(r){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function e(t){return t>=200&&t<300}};K.headers={common:{Accept:"application/json, text/plain, */*"}};C.forEach(["delete","get","head"],(function e(t){K.headers[t]={}}));C.forEach(["post","put","patch"],(function e(t){K.headers[t]=C.merge(J)}));var Q=K;function Z(e){if(e.cancelToken){e.cancelToken.throwIfRequested()}}var ee=function e(t){Z(t);t.headers=t.headers||{};t.data=O(t.data,t.headers,t.transformRequest);t.headers=C.merge(t.headers.common||{},t.headers[t.method]||{},t.headers);C.forEach(["delete","get","head","post","put","patch","common"],(function e(r){delete t.headers[r]}));var r=t.adapter||Q.adapter;return r(t).then((function e(r){Z(t);r.data=O(r.data,r.headers,t.transformResponse);return r}),(function e(r){if(!U(r)){Z(t);if(r&&r.response){r.response.data=O(r.response.data,r.response.headers,t.transformResponse)}}return Promise.reject(r)}))};var te=function e(t,r){r=r||{};var n={};var a=["url","method","params","data"];var i=["headers","auth","proxy"];var o=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];C.forEach(a,(function e(t){if(typeof r[t]!=="undefined"){n[t]=r[t]}}));C.forEach(i,(function e(a){if(C.isObject(r[a])){n[a]=C.deepMerge(t[a],r[a])}else if(typeof r[a]!=="undefined"){n[a]=r[a]}else if(C.isObject(t[a])){n[a]=C.deepMerge(t[a])}else if(typeof t[a]!=="undefined"){n[a]=t[a]}}));C.forEach(o,(function e(a){if(typeof r[a]!=="undefined"){n[a]=r[a]}else if(typeof t[a]!=="undefined"){n[a]=t[a]}}));var s=a.concat(i).concat(o);var u=Object.keys(r).filter((function e(t){return s.indexOf(t)===-1}));C.forEach(u,(function e(a){if(typeof r[a]!=="undefined"){n[a]=r[a]}else if(typeof t[a]!=="undefined"){n[a]=t[a]}}));return n};function re(e){this.defaults=e;this.interceptors={request:new N,response:new N}}re.prototype.request=function e(t){if(typeof t==="string"){t=arguments[1]||{};t.url=arguments[0]}else{t=t||{}}t=te(this.defaults,t);if(t.method){t.method=t.method.toLowerCase()}else if(this.defaults.method){t.method=this.defaults.method.toLowerCase()}else{t.method="get"}var r=[ee,undefined];var n=Promise.resolve(t);this.interceptors.request.forEach((function e(t){r.unshift(t.fulfilled,t.rejected)}));this.interceptors.response.forEach((function e(t){r.push(t.fulfilled,t.rejected)}));while(r.length){n=n.then(r.shift(),r.shift())}return n};re.prototype.getUri=function e(t){t=te(this.defaults,t);return L(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")};C.forEach(["delete","get","head","options"],(function e(t){re.prototype[t]=function(e,r){return this.request(C.merge(r||{},{method:t,url:e}))}}));C.forEach(["post","put","patch"],(function e(t){re.prototype[t]=function(e,r,n){return this.request(C.merge(n||{},{method:t,url:e,data:r}))}}));var ne=re;function ae(e){this.message=e}ae.prototype.toString=function e(){return"Cancel"+(this.message?": "+this.message:"")};ae.prototype.__CANCEL__=true;var ie=ae;function oe(e){if(typeof e!=="function"){throw new TypeError("executor must be a function.")}var t;this.promise=new Promise((function e(r){t=r}));var r=this;e((function e(n){if(r.reason){return}r.reason=new ie(n);t(r.reason)}))}oe.prototype.throwIfRequested=function e(){if(this.reason){throw this.reason}};oe.source=function e(){var t;var r=new oe((function e(r){t=r}));return{token:r,cancel:t}};var se=oe;var ue=function e(t){return function e(r){return t.apply(null,r)}};function ce(e){var t=new ne(e);var r=o(ne.prototype.request,t);C.extend(r,ne.prototype,t);C.extend(r,t);return r}var le=ce(Q);le.Axios=ne;le.create=function e(t){return ce(te(le.defaults,t))};le.Cancel=ie;le.CancelToken=se;le.isCancel=U;le.all=function e(t){return Promise.all(t)};le.spread=ue;var fe=le;var pe=le;fe.default=pe;var de=fe;var he=function(e,t){var r=(t===void 0?{}:t).target,n=r===void 0?document.body:r;var a=document.createElement("textarea");var i=document.activeElement;a.value=e;a.setAttribute("readonly","");a.style.contain="strict";a.style.position="absolute";a.style.left="-9999px";a.style.fontSize="12pt";var o=document.getSelection();var s=false;if(o.rangeCount>0){s=o.getRangeAt(0)}n.append(a);a.select();a.selectionStart=0;a.selectionEnd=e.length;var u=false;try{u=document.execCommand("copy")}catch(c){}a.remove();if(s){o.removeAllRanges();o.addRange(s)}if(i){i.focus()}return u};var me=he;var be=he;me.default=be;var ye=':host{display:block}.pure-material-button-contained{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));background-color:rgb(var(--pure-material-primary-rgb, 33, 150, 243));-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);font-family:var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;overflow:hidden;outline:none;cursor:pointer;-webkit-transition:-webkit-box-shadow 0.2s;transition:-webkit-box-shadow 0.2s;transition:box-shadow 0.2s;transition:box-shadow 0.2s, -webkit-box-shadow 0.2s}.pure-material-button-contained::-moz-focus-inner{border:none}.pure-material-button-contained::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));opacity:0;-webkit-transition:opacity 0.2s;transition:opacity 0.2s}.pure-material-button-contained::after{content:"";position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));opacity:0;-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);-webkit-transition:opacity 1s, -webkit-transform 0.5s;transition:opacity 1s, -webkit-transform 0.5s;transition:opacity 1s, transform 0.5s;transition:opacity 1s, transform 0.5s, -webkit-transform 0.5s}.pure-material-button-contained:hover,.pure-material-button-contained:focus{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.pure-material-button-contained:hover::before{opacity:0.08}.pure-material-button-contained:focus::before{opacity:0.24}.pure-material-button-contained:hover:focus::before{opacity:0.3}.pure-material-button-contained:active{-webkit-box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}.pure-material-button-contained:active::after{opacity:0.32;-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);-webkit-transition:-webkit-transform 0s;transition:-webkit-transform 0s;transition:transform 0s;transition:transform 0s, -webkit-transform 0s}.pure-material-button-contained:disabled{color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);background-color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);-webkit-box-shadow:none;box-shadow:none;cursor:initial}.pure-material-button-contained:disabled::before{opacity:0}.pure-material-button-contained:disabled::after{opacity:0}.modal{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.8);}.modal-content{max-width:300px;background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:300px;color:black;word-wrap:break-word;overflow-wrap:break-word;font-size:12px;font-family:var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system)}.modal-content p{margin-top:20px;width:100%;margin-bottom:0px}.modal-content .xrp-price{color:rgb(149, 144, 148);margin-bottom:8px;font-size:28px;width:100%;text-align:center}.modal-content .waiting{color:rgb(149, 144, 148);margin-bottom:8px;font-size:20px;width:100%;text-align:center}.modal-content .payburner-blurb{font-size:16px;color:rgb(149, 144, 148);width:100%;text-align:left}.modal-content .label{font-size:20px}.modal-content hr{color:rgb(149, 144, 148);width:100%;margin-top:20px;margin-bottom:20px}.modal-content .xrp-address{color:rgb(149, 144, 148);font-size:16px;margin-top:6px;width:100%;word-break:break-word}.modal-content .xrp-address-tag{color:rgb(149, 144, 148);font-size:16px;margin-top:8px;width:100%;word-break:break-word}.close{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}.hidden{display:none}.shown{display:block}.lds-ellipsis{display:inline-block;position:relative;width:80px;height:20px;margin-left:100px;margin-right:100px}.lds-ellipsis div{position:absolute;top:15px;width:13px;height:13px;border-radius:50%;background:rgb(149, 144, 148);-webkit-animation-timing-function:cubic-bezier(0, 1, 1, 0);animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis div:nth-child(1){left:8px;-webkit-animation:lds-ellipsis1 0.6s infinite;animation:lds-ellipsis1 0.6s infinite}.lds-ellipsis div:nth-child(2){left:8px;-webkit-animation:lds-ellipsis2 0.6s infinite;animation:lds-ellipsis2 0.6s infinite}.lds-ellipsis div:nth-child(3){left:32px;-webkit-animation:lds-ellipsis2 0.6s infinite;animation:lds-ellipsis2 0.6s infinite}.lds-ellipsis div:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3 0.6s infinite;animation:lds-ellipsis3 0.6s infinite}@-webkit-keyframes lds-ellipsis1{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes lds-ellipsis1{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes lds-ellipsis3{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes lds-ellipsis3{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes lds-ellipsis2{0%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}100%{-webkit-transform:translate(24px, 0);transform:translate(24px, 0)}}@keyframes lds-ellipsis2{0%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}100%{-webkit-transform:translate(24px, 0);transform:translate(24px, 0)}}';var ge=function(){function e(e,t,r,n,a,i){this.purchaseId=e;this.status=t;this.expectedAmount=a;this.expectedDestinationXrpAddress=r;this.expectedDestinationXrpAddressTag=n;this.statusUrl=i}return e}();var ve=e("pay_button",function(){function e(e){t(this,e);this.PAYBURNER=window.PAYBURNER;this.settled=r(this,"settled",7)}e.prototype.handleClick=function(){var e=this;var t={price:this.calcedPrice};if(typeof this.reference!=="undefined"){t["reference"]=this.reference}if(typeof this.fiatcurrency!=="undefined"&&this.fiatcurrency!==null&&typeof this.fiatprice!=="undefined"&&this.fiatprice!==null){t["fiatcurrency"]=this.fiatcurrency;t["fiatprice"]=this.fiatprice;t["fiatrate"]=this.fiatrate}de.post("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid+"/purchase",t).then((function(e){return e.data.data})).then((function(t){e.purchase=new ge(t.purchaseId,t.status,t.expectedDestinationXrpAddress,t.expectedDestinationXrpAddressTag,t.expectedAmount,t.statusUrl);e.makePayment()}))};e.prototype.handleReset=function(){if(!this.allowresetanytime&&(this.buttonStatus!=="ERROR"&&this.buttonStatus!=="TIMEOUT")){console.log("Not allowing reset on settled.");return}else{this.modalStatus="hide";this.buttonStatus="LOADED";this.purchase=new ge("","","","",0,"")}};e.prototype.handlePayburnerStatus=function(e){if(typeof this.payburnerStatus==="undefined"){this.payburnerStatus=e}else if(this.payburnerStatus!==e){this.payburnerStatus=e}};e.prototype.handlePayburnerLoggedIn=function(e){if(typeof this.payburnerLoggedIn==="undefined"){this.payburnerLoggedIn=e}else if(this.payburnerLoggedIn!==e){this.payburnerLoggedIn=e}};e.prototype.disconnectedCallback=function(){var e=this;document.removeEventListener("PayburnerStatus",(function(t){return e.handleStatusEvent(t)}))};e.prototype.handleStatusEvent=function(e){var t=e.detail;console.log("PayButton received payburner status event:"+JSON.stringify(t));this.handlePayburnerStatus(t.extensionStatus);this.handlePayburnerLoggedIn(t.loggedIn)};e.prototype.componentWillLoad=function(){if(typeof this.allowresetanytime==="undefined"||this.allowresetanytime===null){this.allowresetanytime=true}this.modalStatus="hide";this.buttonStatus="LOADING";this.purchase=new ge("","","","",0,"");var e=this;return de.get("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid,{}).then((function(e){return e.data.data})).then((function(t){var r=parseFloat(t.price);if(t.buttonType==="FIXED_PRICE"){e.calcedPrice=r;e.buttonStatus="LOADED"}else{if(typeof e.fiatcurrency!=="undefined"&&e.fiatcurrency!==null&&typeof e.fiatprice!=="undefined"&&e.fiatprice!==null){de.get("https://gateway.payburner.com/v1/gateway/rate/"+e.fiatcurrency,{}).then((function(e){return e.data.data})).then((function(t){e.fiatrate=t.rate;e.calcedPrice=parseFloat((e.fiatprice/t.rate).toFixed(6));e.buttonStatus="LOADED"}))}else if(typeof e.price!=="undefined"&&e.price!==null){e.calcedPrice=e.price;e.buttonStatus="LOADED"}else{e.calcedPrice=r;e.buttonStatus="LOADED"}}}))};e.prototype.extractError=function(e){if(typeof e==="string"){return e}if(typeof e==="object"&&typeof e.error!=="undefined"){return e.error}return JSON.stringify(e)};e.prototype.makePayment=function(){var e=this;this.buttonStatus="WAITING";this.PAYBURNER.makePaymentWithTag(this.purchase.expectedDestinationXrpAddress,parseInt(this.purchase.expectedDestinationXrpAddressTag),this.purchase.expectedAmount).then((function(t){var r=this;if(typeof t.error!=="undefined"){var n=e.purchase;n.status="ERROR";e.purchase=n;console.log("Error received from payment request:"+e.extractError(t.error));e.buttonStatus="ERROR"}else{e.buttonStatus="SETTLING";if(t.state==="SUCCESS"){var a={count:0,status:"PENDING"};var i=setInterval((function(){return __awaiter(r,void 0,void 0,(function(){var r;return __generator(this,(function(n){switch(n.label){case 0:return[4,de.get(e.purchase.statusUrl)];case 1:r=n.sent();e.purchase=r.data.data;if(r.data.data.status==="SETTLED"){a.status="SETTLED";clearInterval(i);e.modalStatus="hide";console.log("SETTLED",t.finalized.hash,t.finalized.engine_result);e.buttonStatus="SETTLED";e.settled.emit(e.purchase)}else{a.count=a.count+1;e.buttonStatus="SETTLING";if(a.count>10){clearInterval(i);e.buttonStatus="TIMEOUT"}}return[2]}}))}))}),5e3)}else{e.buttonStatus="SETTLING"}}})).catch((function(t){this.PAYBURNER.log("<- error: "+e.extractError(t))}))};e.prototype.isPayburnerConnected=function(){if(typeof this.PAYBURNER==="undefined"){return false}return this.PAYBURNER.isPayburnerConnected()};e.prototype.isPayburnerLoggedIn=function(){if(typeof this.PAYBURNER==="undefined"){return false}return this.PAYBURNER.isPayburnerLoggedIn()};e.prototype.awaitPayment=function(){var e=this;var t=this;this.buttonStatus="WAITING";var r=setInterval((function(){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(n){switch(n.label){case 0:if(!(this.modalStatus==="hide"))return[3,1];clearInterval(r);return[3,3];case 1:return[4,de.get(t.purchase.statusUrl)];case 2:e=n.sent();t.purchase=e.data.data;if(e.data.data.status==="SETTLED"){clearInterval(r);t.buttonStatus="SETTLED";t.settled.emit(t.purchase)}n.label=3;case 3:return[2]}}))}))}),5e3)};e.prototype.openModal=function(){var e=this;var t={price:this.calcedPrice};if(typeof this.reference!=="undefined"){t["reference"]=this.reference}if(typeof this.fiatcurrency!=="undefined"&&this.fiatcurrency!==null&&typeof this.fiatprice!=="undefined"&&this.fiatprice!==null){t["fiatcurrency"]=this.fiatcurrency;t["fiatprice"]=this.fiatprice;t["fiatrate"]=this.fiatrate}de.post("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid+"/purchase",t).then((function(e){return e.data.data})).then((function(t){e.purchase=new ge(t.purchaseId,t.status,t.expectedDestinationXrpAddress,t.expectedDestinationXrpAddressTag,t.expectedAmount,t.statusUrl);e.buttonStatus=t.status;e.modalStatus="show";if(e.isPayburnerLoggedIn()){e.makePayment()}else{e.awaitPayment()}}))};e.prototype.closeModal=function(){this.modalStatus="hide";this.buttonStatus="LOADED"};e.prototype.renderCopyIcon=function(){return n("svg",{fill:"currentColor",style:{display:"inline-block","vertical-align":"middle"},height:"12",width:"12",viewBox:"0 0 1792 1792"},n("path",{d:"M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"}))};e.prototype.renderModal=function(e){var t=this;var r=this.isPayburnerConnected();var a=this.isPayburnerLoggedIn();if(this.purchase.status==="SETTLED"){return n("div",{id:"myModal",class:this.modalStatus==="hide"?"modal hidden":"modal shown"},n("div",{class:"modal-content"},n("span",{class:"close",onClick:function(){return t.closeModal()}},"×"),n("p",{class:"xrp-price",onClick:function(){return me(t.purchase.expectedAmount.toString())}},this.purchase.expectedAmount," XRP"),n("p",{class:"payburner-blurb"},"To pay, send XRP to the following address and tag using any XRP wallet."),n("p",{class:"label"},"XRP Address"),n("p",{class:"xrp-address",onClick:function(){return me(t.purchase.expectedDestinationXrpAddress)}},this.purchase.expectedDestinationXrpAddress," ",this.renderCopyIcon()),n("p",{class:"label"},"Tag"),n("p",{class:"xrp-address-tag",onClick:function(){return me(t.purchase.expectedDestinationXrpAddressTag)}},this.purchase.expectedDestinationXrpAddressTag," ",this.renderCopyIcon()),n("hr",null),n("p",{class:"waiting"},"Thank you for your payment!  Your payment id is ",this.purchase.purchaseId),n("hr",null),e?n("p",{class:"payburner-blurb"},"If you don't have an XRP wallet or want a great payment experience, click here to install the ",n("a",{href:"https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en"},"Payburner Wallet"),"."):null,r&&!a?n("p",{class:"payburner-blurb"},"Your Paybuner Wallet is not logged in."):null))}else{return n("div",{id:"myModal",class:this.modalStatus==="hide"?"modal hidden":"modal shown"},n("div",{class:"modal-content"},n("span",{class:"close",onClick:function(){return t.closeModal()}},"×"),n("p",{class:"xrp-price",onClick:function(){return me(t.purchase.expectedAmount.toString())}},this.purchase.expectedAmount," XRP"),n("p",{class:"payburner-blurb"},"To pay, send XRP to the following address and tag using any XRP wallet."),n("p",{class:"label"},"XRP Address"),n("p",{class:"xrp-address",onClick:function(){return me(t.purchase.expectedDestinationXrpAddress)}},this.purchase.expectedDestinationXrpAddress," ",this.renderCopyIcon()),n("p",{class:"label"},"Tag"),n("p",{class:"xrp-address-tag",onClick:function(){return me(t.purchase.expectedDestinationXrpAddressTag)}},this.purchase.expectedDestinationXrpAddressTag," ",this.renderCopyIcon()),n("hr",null),n("p",{class:"waiting"},"Waiting for you to send XRP to the address and tag."),n("div",{class:"lds-ellipsis"},n("div",null),n("div",null),n("div",null),n("div",null)),n("hr",null),r&&a?n("div",null,n("div",{style:{float:"left",marginRight:"12px",marginBottom:"12px"}},n("img",{height:"50",width:"50",src:"https://payburner.com/images/favicon.png"})),n("div",{style:{marginLeft:"8px"},class:"payburner-blurb"},"Please open your Payburner Wallet to approve if you do not have 1-click enabled.")):null,!r?n("div",null,n("div",{style:{float:"left",marginRight:"12px",marginBottom:"12px"}},n("img",{height:"50",width:"50",src:"https://payburner.com/images/favicon.png"})),n("div",{style:{marginLeft:"8px"},class:"payburner-blurb"},"If you don't have an XRP wallet or want a great payment experience, click here to install the ",n("a",{href:"https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en"},"Payburner Wallet"),".")):null,r&&!a?n("div",null,n("div",{style:{float:"left",marginRight:"12px",marginBottom:"12px"}},n("img",{height:"50",width:"50",src:"https://payburner.com/images/favicon.png"})),n("div",{style:{marginLeft:"8px"},class:"payburner-blurb"},"You have Payburner, but you are not logged.  Please do so to approve the payment.")):null))}};e.prototype.render=function(){var e=this;return n(a,{purchaseId:this.purchase.purchaseId,status:this.buttonStatus},n("div",null,n("button",{onClick:function(){return e.openModal()},class:"pure-material-button-contained"},this.buttonStatus==="LOADED"?this.calcedPrice+" XRP":this.buttonStatus),this.renderModal(false)))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});return e}());ve.style=ye}}}));