var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function s(e){try{u(r["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):a(e.value).then(i,s)}u((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,a,o,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return u([e,t])}}function u(i){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(o=i[0]&2?a["return"]:i[0]?a["throw"]||((o=a["return"])&&o.call(a),0):a.next)&&!(o=o.call(a,i[1])).done)return o;if(a=0,o)i=[i[0]&2,o.value];switch(i[0]){case 0:case 1:o=i;break;case 4:n.label++;return{value:i[1],done:false};case 5:n.label++;a=i[1];i=[0];continue;case 7:i=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(i[0]===6||i[0]===2)){n=0;continue}if(i[0]===3&&(!o||i[1]>o[0]&&i[1]<o[3])){n.label=i[1];break}if(i[0]===6&&n.label<o[1]){n.label=o[1];o=i;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(i);break}if(o[2])n.ops.pop();n.trys.pop();continue}i=t.call(e,n)}catch(s){i=[6,s];a=0}finally{r=o=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-757ec130.system.js"],(function(e){"use strict";var t,n,r,a,o;return{setters:[function(e){t=e.r;n=e.c;r=e.h;a=e.H;o=e.g}],execute:function(){var i=function e(t,n){return function e(){var r=new Array(arguments.length);for(var a=0;a<r.length;a++){r[a]=arguments[a]}return t.apply(n,r)}};var s=Object.prototype.toString;function u(e){return s.call(e)==="[object Array]"}function c(e){return typeof e==="undefined"}function l(e){return e!==null&&!c(e)&&e.constructor!==null&&!c(e.constructor)&&typeof e.constructor.isBuffer==="function"&&e.constructor.isBuffer(e)}function p(e){return s.call(e)==="[object ArrayBuffer]"}function f(e){return typeof FormData!=="undefined"&&e instanceof FormData}function d(e){var t;if(typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView){t=ArrayBuffer.isView(e)}else{t=e&&e.buffer&&e.buffer instanceof ArrayBuffer}return t}function h(e){return typeof e==="string"}function b(e){return typeof e==="number"}function m(e){return e!==null&&typeof e==="object"}function g(e){return s.call(e)==="[object Date]"}function y(e){return s.call(e)==="[object File]"}function v(e){return s.call(e)==="[object Blob]"}function x(e){return s.call(e)==="[object Function]"}function w(e){return m(e)&&x(e.pipe)}function k(e){return typeof URLSearchParams!=="undefined"&&e instanceof URLSearchParams}function S(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function E(){if(typeof navigator!=="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")){return false}return typeof window!=="undefined"&&typeof document!=="undefined"}function R(e,t){if(e===null||typeof e==="undefined"){return}if(typeof e!=="object"){e=[e]}if(u(e)){for(var n=0,r=e.length;n<r;n++){t.call(null,e[n],n,e)}}else{for(var a in e){if(Object.prototype.hasOwnProperty.call(e,a)){t.call(null,e[a],a,e)}}}}function T(){var e={};function t(t,n){if(typeof e[n]==="object"&&typeof t==="object"){e[n]=T(e[n],t)}else{e[n]=t}}for(var n=0,r=arguments.length;n<r;n++){R(arguments[n],t)}return e}function A(){var e={};function t(t,n){if(typeof e[n]==="object"&&typeof t==="object"){e[n]=A(e[n],t)}else if(typeof t==="object"){e[n]=A({},t)}else{e[n]=t}}for(var n=0,r=arguments.length;n<r;n++){R(arguments[n],t)}return e}function C(e,t,n){R(t,(function t(r,a){if(n&&typeof r==="function"){e[a]=i(r,n)}else{e[a]=r}}));return e}var P={isArray:u,isArrayBuffer:p,isBuffer:l,isFormData:f,isArrayBufferView:d,isString:h,isNumber:b,isObject:m,isUndefined:c,isDate:g,isFile:y,isBlob:v,isFunction:x,isStream:w,isURLSearchParams:k,isStandardBrowserEnv:E,forEach:R,merge:T,deepMerge:A,extend:C,trim:S};function D(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var I=function e(t,n,r){if(!n){return t}var a;if(r){a=r(n)}else if(P.isURLSearchParams(n)){a=n.toString()}else{var o=[];P.forEach(n,(function e(t,n){if(t===null||typeof t==="undefined"){return}if(P.isArray(t)){n=n+"[]"}else{t=[t]}P.forEach(t,(function e(t){if(P.isDate(t)){t=t.toISOString()}else if(P.isObject(t)){t=JSON.stringify(t)}o.push(D(n)+"="+D(t))}))}));a=o.join("&")}if(a){var i=t.indexOf("#");if(i!==-1){t=t.slice(0,i)}t+=(t.indexOf("?")===-1?"?":"&")+a}return t};function N(){this.handlers=[]}N.prototype.use=function e(t,n){this.handlers.push({fulfilled:t,rejected:n});return this.handlers.length-1};N.prototype.eject=function e(t){if(this.handlers[t]){this.handlers[t]=null}};N.prototype.forEach=function e(t){P.forEach(this.handlers,(function e(n){if(n!==null){t(n)}}))};var L=N;var O=function e(t,n,r){P.forEach(r,(function e(r){t=r(t,n)}));return t};var U=function e(t){return!!(t&&t.__CANCEL__)};var X=function e(t,n){P.forEach(t,(function e(r,a){if(a!==n&&a.toUpperCase()===n.toUpperCase()){t[n]=r;delete t[a]}}))};var j=function e(t,n,r,a,o){t.config=n;if(r){t.code=r}t.request=a;t.response=o;t.isAxiosError=true;t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}};return t};var q=function e(t,n,r,a,o){var i=new Error(t);return j(i,n,r,a,o)};var B=function e(t,n,r){var a=r.config.validateStatus;if(!a||a(r.status)){t(r)}else{n(q("Request failed with status code "+r.status,r.config,null,r.request,r))}};var z=function e(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)};var M=function e(t,n){return n?t.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):t};var _=function e(t,n){if(t&&!z(n)){return M(t,n)}return n};var F=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];var G=function e(t){var n={};var r;var a;var o;if(!t){return n}P.forEach(t.split("\n"),(function e(t){o=t.indexOf(":");r=P.trim(t.substr(0,o)).toLowerCase();a=P.trim(t.substr(o+1));if(r){if(n[r]&&F.indexOf(r)>=0){return}if(r==="set-cookie"){n[r]=(n[r]?n[r]:[]).concat([a])}else{n[r]=n[r]?n[r]+", "+a:a}}}));return n};var W=P.isStandardBrowserEnv()?function e(){var t=/(msie|trident)/i.test(navigator.userAgent);var n=document.createElement("a");var r;function a(e){var r=e;if(t){n.setAttribute("href",r);r=n.href}n.setAttribute("href",r);return{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}r=a(window.location.href);return function e(t){var n=P.isString(t)?a(t):t;return n.protocol===r.protocol&&n.host===r.host}}():function e(){return function e(){return true}}();var H=P.isStandardBrowserEnv()?function e(){return{write:function e(t,n,r,a,o,i){var s=[];s.push(t+"="+encodeURIComponent(n));if(P.isNumber(r)){s.push("expires="+new Date(r).toGMTString())}if(P.isString(a)){s.push("path="+a)}if(P.isString(o)){s.push("domain="+o)}if(i===true){s.push("secure")}document.cookie=s.join("; ")},read:function e(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function e(t){this.write(t,"",Date.now()-864e5)}}}():function e(){return{write:function e(){},read:function e(){return null},remove:function e(){}}}();var J=function e(t){return new Promise((function e(n,r){var a=t.data;var o=t.headers;if(P.isFormData(a)){delete o["Content-Type"]}var i=new XMLHttpRequest;if(t.auth){var s=t.auth.username||"";var u=t.auth.password||"";o.Authorization="Basic "+btoa(s+":"+u)}var c=_(t.baseURL,t.url);i.open(t.method.toUpperCase(),I(c,t.params,t.paramsSerializer),true);i.timeout=t.timeout;i.onreadystatechange=function e(){if(!i||i.readyState!==4){return}if(i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)){return}var a="getAllResponseHeaders"in i?G(i.getAllResponseHeaders()):null;var o=!t.responseType||t.responseType==="text"?i.responseText:i.response;var s={data:o,status:i.status,statusText:i.statusText,headers:a,config:t,request:i};B(n,r,s);i=null};i.onabort=function e(){if(!i){return}r(q("Request aborted",t,"ECONNABORTED",i));i=null};i.onerror=function e(){r(q("Network Error",t,null,i));i=null};i.ontimeout=function e(){var n="timeout of "+t.timeout+"ms exceeded";if(t.timeoutErrorMessage){n=t.timeoutErrorMessage}r(q(n,t,"ECONNABORTED",i));i=null};if(P.isStandardBrowserEnv()){var l=H;var p=(t.withCredentials||W(c))&&t.xsrfCookieName?l.read(t.xsrfCookieName):undefined;if(p){o[t.xsrfHeaderName]=p}}if("setRequestHeader"in i){P.forEach(o,(function e(t,n){if(typeof a==="undefined"&&n.toLowerCase()==="content-type"){delete o[n]}else{i.setRequestHeader(n,t)}}))}if(!P.isUndefined(t.withCredentials)){i.withCredentials=!!t.withCredentials}if(t.responseType){try{i.responseType=t.responseType}catch(f){if(t.responseType!=="json"){throw f}}}if(typeof t.onDownloadProgress==="function"){i.addEventListener("progress",t.onDownloadProgress)}if(typeof t.onUploadProgress==="function"&&i.upload){i.upload.addEventListener("progress",t.onUploadProgress)}if(t.cancelToken){t.cancelToken.promise.then((function e(t){if(!i){return}i.abort();r(t);i=null}))}if(a===undefined){a=null}i.send(a)}))};var Y={"Content-Type":"application/x-www-form-urlencoded"};function V(e,t){if(!P.isUndefined(e)&&P.isUndefined(e["Content-Type"])){e["Content-Type"]=t}}function $(){var e;if(typeof XMLHttpRequest!=="undefined"){e=J}else if(typeof process!=="undefined"&&Object.prototype.toString.call(process)==="[object process]"){e=J}return e}var K={adapter:$(),transformRequest:[function e(t,n){X(n,"Accept");X(n,"Content-Type");if(P.isFormData(t)||P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)){return t}if(P.isArrayBufferView(t)){return t.buffer}if(P.isURLSearchParams(t)){V(n,"application/x-www-form-urlencoded;charset=utf-8");return t.toString()}if(P.isObject(t)){V(n,"application/json;charset=utf-8");return JSON.stringify(t)}return t}],transformResponse:[function e(t){if(typeof t==="string"){try{t=JSON.parse(t)}catch(n){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function e(t){return t>=200&&t<300}};K.headers={common:{Accept:"application/json, text/plain, */*"}};P.forEach(["delete","get","head"],(function e(t){K.headers[t]={}}));P.forEach(["post","put","patch"],(function e(t){K.headers[t]=P.merge(Y)}));var Q=K;function Z(e){if(e.cancelToken){e.cancelToken.throwIfRequested()}}var ee=function e(t){Z(t);t.headers=t.headers||{};t.data=O(t.data,t.headers,t.transformRequest);t.headers=P.merge(t.headers.common||{},t.headers[t.method]||{},t.headers);P.forEach(["delete","get","head","post","put","patch","common"],(function e(n){delete t.headers[n]}));var n=t.adapter||Q.adapter;return n(t).then((function e(n){Z(t);n.data=O(n.data,n.headers,t.transformResponse);return n}),(function e(n){if(!U(n)){Z(t);if(n&&n.response){n.response.data=O(n.response.data,n.response.headers,t.transformResponse)}}return Promise.reject(n)}))};var te=function e(t,n){n=n||{};var r={};var a=["url","method","params","data"];var o=["headers","auth","proxy"];var i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];P.forEach(a,(function e(t){if(typeof n[t]!=="undefined"){r[t]=n[t]}}));P.forEach(o,(function e(a){if(P.isObject(n[a])){r[a]=P.deepMerge(t[a],n[a])}else if(typeof n[a]!=="undefined"){r[a]=n[a]}else if(P.isObject(t[a])){r[a]=P.deepMerge(t[a])}else if(typeof t[a]!=="undefined"){r[a]=t[a]}}));P.forEach(i,(function e(a){if(typeof n[a]!=="undefined"){r[a]=n[a]}else if(typeof t[a]!=="undefined"){r[a]=t[a]}}));var s=a.concat(o).concat(i);var u=Object.keys(n).filter((function e(t){return s.indexOf(t)===-1}));P.forEach(u,(function e(a){if(typeof n[a]!=="undefined"){r[a]=n[a]}else if(typeof t[a]!=="undefined"){r[a]=t[a]}}));return r};function ne(e){this.defaults=e;this.interceptors={request:new L,response:new L}}ne.prototype.request=function e(t){if(typeof t==="string"){t=arguments[1]||{};t.url=arguments[0]}else{t=t||{}}t=te(this.defaults,t);if(t.method){t.method=t.method.toLowerCase()}else if(this.defaults.method){t.method=this.defaults.method.toLowerCase()}else{t.method="get"}var n=[ee,undefined];var r=Promise.resolve(t);this.interceptors.request.forEach((function e(t){n.unshift(t.fulfilled,t.rejected)}));this.interceptors.response.forEach((function e(t){n.push(t.fulfilled,t.rejected)}));while(n.length){r=r.then(n.shift(),n.shift())}return r};ne.prototype.getUri=function e(t){t=te(this.defaults,t);return I(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")};P.forEach(["delete","get","head","options"],(function e(t){ne.prototype[t]=function(e,n){return this.request(P.merge(n||{},{method:t,url:e}))}}));P.forEach(["post","put","patch"],(function e(t){ne.prototype[t]=function(e,n,r){return this.request(P.merge(r||{},{method:t,url:e,data:n}))}}));var re=ne;function ae(e){this.message=e}ae.prototype.toString=function e(){return"Cancel"+(this.message?": "+this.message:"")};ae.prototype.__CANCEL__=true;var oe=ae;function ie(e){if(typeof e!=="function"){throw new TypeError("executor must be a function.")}var t;this.promise=new Promise((function e(n){t=n}));var n=this;e((function e(r){if(n.reason){return}n.reason=new oe(r);t(n.reason)}))}ie.prototype.throwIfRequested=function e(){if(this.reason){throw this.reason}};ie.source=function e(){var t;var n=new ie((function e(n){t=n}));return{token:n,cancel:t}};var se=ie;var ue=function e(t){return function e(n){return t.apply(null,n)}};function ce(e){var t=new re(e);var n=i(re.prototype.request,t);P.extend(n,re.prototype,t);P.extend(n,t);return n}var le=ce(Q);le.Axios=re;le.create=function e(t){return ce(te(le.defaults,t))};le.Cancel=oe;le.CancelToken=se;le.isCancel=U;le.all=function e(t){return Promise.all(t)};le.spread=ue;var pe=le;var fe=le;pe.default=fe;var de=pe;var he=function(e,t){var n=(t===void 0?{}:t).target,r=n===void 0?document.body:n;var a=document.createElement("textarea");var o=document.activeElement;a.value=e;a.setAttribute("readonly","");a.style.contain="strict";a.style.position="absolute";a.style.left="-9999px";a.style.fontSize="12pt";var i=document.getSelection();var s=false;if(i.rangeCount>0){s=i.getRangeAt(0)}r.append(a);a.select();a.selectionStart=0;a.selectionEnd=e.length;var u=false;try{u=document.execCommand("copy")}catch(c){}a.remove();if(s){i.removeAllRanges();i.addRange(s)}if(o){o.focus()}return u};var be=he;var me=he;be.default=me;var ge=':host{display:block}.pure-material-button-contained{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));background-color:rgb(var(--pure-material-primary-rgb, 33, 150, 243));-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);font-family:var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;overflow:hidden;outline:none;cursor:pointer;-webkit-transition:-webkit-box-shadow 0.2s;transition:-webkit-box-shadow 0.2s;transition:box-shadow 0.2s;transition:box-shadow 0.2s, -webkit-box-shadow 0.2s}.pure-material-button-contained::-moz-focus-inner{border:none}.pure-material-button-contained::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));opacity:0;-webkit-transition:opacity 0.2s;transition:opacity 0.2s}.pure-material-button-contained::after{content:"";position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));opacity:0;-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);-webkit-transition:opacity 1s, -webkit-transform 0.5s;transition:opacity 1s, -webkit-transform 0.5s;transition:opacity 1s, transform 0.5s;transition:opacity 1s, transform 0.5s, -webkit-transform 0.5s}.pure-material-button-contained:hover,.pure-material-button-contained:focus{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.pure-material-button-contained:hover::before{opacity:0.08}.pure-material-button-contained:focus::before{opacity:0.24}.pure-material-button-contained:hover:focus::before{opacity:0.3}.pure-material-button-contained:active{-webkit-box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}.pure-material-button-contained:active::after{opacity:0.32;-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);-webkit-transition:-webkit-transform 0s;transition:-webkit-transform 0s;transition:transform 0s;transition:transform 0s, -webkit-transform 0s}.pure-material-button-contained:disabled{color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);background-color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);-webkit-box-shadow:none;box-shadow:none;cursor:initial}.pure-material-button-contained:disabled::before{opacity:0}.pure-material-button-contained:disabled::after{opacity:0}.modal{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.8);}.modal-content{max-width:300px;background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:300px;color:black;word-wrap:break-word;overflow-wrap:break-word;font-size:12px;font-family:var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system)}.modal-content p{margin-top:20px;width:100%;margin-bottom:0px}.modal-content .xrp-price{color:rgb(149, 144, 148);margin-bottom:8px;font-size:28px;width:100%;text-align:center}.modal-content .waiting{color:rgb(149, 144, 148);margin-bottom:8px;font-size:20px;width:100%;text-align:center}.modal-content .payburner-blurb{font-size:12px;width:100%;text-align:left}.modal-content .label{font-size:20px}.modal-content hr{color:rgb(149, 144, 148);width:100%;margin-top:20px;margin-bottom:20px}.modal-content .xrp-address{color:rgb(149, 144, 148);font-size:16px;margin-top:6px;width:100%;word-break:break-word}.modal-content .xrp-address-tag{color:rgb(149, 144, 148);font-size:16px;margin-top:8px;width:100%;word-break:break-word}.close{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}.hidden{display:none}.shown{display:block}.lds-ellipsis{display:inline-block;position:relative;width:80px;height:20px;margin-left:100px;margin-right:100px}.lds-ellipsis div{position:absolute;top:15px;width:13px;height:13px;border-radius:50%;background:rgb(149, 144, 148);-webkit-animation-timing-function:cubic-bezier(0, 1, 1, 0);animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis div:nth-child(1){left:8px;-webkit-animation:lds-ellipsis1 0.6s infinite;animation:lds-ellipsis1 0.6s infinite}.lds-ellipsis div:nth-child(2){left:8px;-webkit-animation:lds-ellipsis2 0.6s infinite;animation:lds-ellipsis2 0.6s infinite}.lds-ellipsis div:nth-child(3){left:32px;-webkit-animation:lds-ellipsis2 0.6s infinite;animation:lds-ellipsis2 0.6s infinite}.lds-ellipsis div:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3 0.6s infinite;animation:lds-ellipsis3 0.6s infinite}@-webkit-keyframes lds-ellipsis1{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes lds-ellipsis1{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes lds-ellipsis3{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes lds-ellipsis3{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes lds-ellipsis2{0%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}100%{-webkit-transform:translate(24px, 0);transform:translate(24px, 0)}}@keyframes lds-ellipsis2{0%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}100%{-webkit-transform:translate(24px, 0);transform:translate(24px, 0)}}';var ye=function(){function e(e,t,n,r,a,o){this.purchaseId=e;this.status=t;this.expectedAmount=a;this.expectedDestinationXrpAddress=n;this.expectedDestinationXrpAddressTag=r;this.statusUrl=o}return e}();var ve=e("pay_button",function(){function e(e){t(this,e);this.settled=n(this,"settled",7)}e.prototype.handleClick=function(){var e=this;de.post("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid+"/purchase",{price:this.calcedPrice}).then((function(e){return e.data.data})).then((function(t){console.log("##########"+JSON.stringify(t,null,2));e.purchase=new ye(t.purchaseId,t.status,t.expectedDestinationXrpAddress,t.expectedDestinationXrpAddressTag,t.expectedAmount,t.statusUrl);e.makePayment()}))};e.prototype.handleReset=function(){this.modalStatus="hide";this.buttonStatus="LOADED";this.purchase=new ye("","","","",0,"")};e.prototype.handlePayburnerStatus=function(e){if(typeof this.payburnerStatus==="undefined"){this.payburnerStatus=e}else if(this.payburnerStatus!==e){this.payburnerStatus=e}};e.prototype.handlePayburnerLoggedIn=function(e){if(typeof this.payburnerLoggedIn==="undefined"){this.payburnerLoggedIn=e}else if(this.payburnerLoggedIn!==e){this.payburnerLoggedIn=e}};e.prototype.disconnectedCallback=function(){var e=this;document.removeEventListener("PayburnerStatus",(function(t){return e.handleStatusEvent(t)}))};e.prototype.handleStatusEvent=function(e){var t=e.detail;this.handlePayburnerStatus(t.extensionStatus);this.handlePayburnerLoggedIn(t.loggedIn)};e.prototype.componentWillLoad=function(){var e=this;this.modalStatus="hide";this.buttonStatus="LOADING";this.purchase=new ye("","","","",0,"");var t=this;return de.get("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid,{}).then((function(e){return e.data.data})).then((function(n){console.log(JSON.stringify(n));console.log("Hi there!"+n.buttonType+" "+t.price);var r=parseFloat(n.price);t.calcedPrice=n.buttonType==="FIXED_PRICE"?r:typeof t.price!=="undefined"&&t.price!==null?t.price:r;console.log("Calced price:"+t.calcedPrice);e.buttonStatus="LOADED"}))};e.prototype.extractError=function(e){if(typeof e==="string"){return e}if(typeof e==="object"&&typeof e.error!=="undefined"){return e.error}return JSON.stringify(e)};e.prototype.makePayment=function(){var e=window.PAYBURNER;var t=this;this.buttonStatus="WAITING";e.makePaymentWithTag(this.purchase.expectedDestinationXrpAddress,parseInt(this.purchase.expectedDestinationXrpAddressTag),this.purchase.expectedAmount).then((function(e){var n=this;if(typeof e.error!=="undefined"){var r=t.purchase;r.status="ERROR";t.purchase=r;console.log("Error received from payment request:"+t.extractError(e.error));t.buttonStatus="ERROR"}else{t.buttonStatus="SETTLING";if(e.state==="SUCCESS"){var a={count:0,status:"PENDING"};var o=setInterval((function(){return __awaiter(n,void 0,void 0,(function(){var n;return __generator(this,(function(r){switch(r.label){case 0:return[4,de.get(t.purchase.statusUrl)];case 1:n=r.sent();t.purchase=n.data.data;if(n.data.data.status==="SETTLED"){a.status="SETTLED";clearInterval(o);console.log("SETTLED",e.finalized.hash,e.finalized.engine_result);t.buttonStatus="SETTLED";t.settled.emit(t.purchase)}else{a.count=a.count+1;t.buttonStatus="SETTLING";if(a.count>10){clearInterval(o);t.buttonStatus="TIMEOUT"}}return[2]}}))}))}),5e3)}else{t.buttonStatus="SETTLING"}}})).catch((function(n){e.log("<- error: "+t.extractError(n))}))};e.prototype.isPayburnerConnected=function(){var e=window.PAYBURNER;if(typeof e==="undefined"){return false}else if(typeof this.payburnerStatus==="undefined"){return e.isPayburnerConnected()}else{return this.payburnerStatus==="CONNECTED"}};e.prototype.isPayburnerLoggedIn=function(){var e=window.PAYBURNER;if(typeof e==="undefined"){return false}else if(typeof this.payburnerLoggedIn==="undefined"){return false}else{return this.payburnerLoggedIn}};e.prototype.awaitPayment=function(){var e=this;var t=this;this.buttonStatus="WAITING";var n=setInterval((function(){return __awaiter(e,void 0,void 0,(function(){var e;return __generator(this,(function(r){switch(r.label){case 0:if(!(this.modalStatus==="hide"))return[3,1];clearInterval(n);return[3,3];case 1:return[4,de.get(t.purchase.statusUrl)];case 2:e=r.sent();t.purchase=e.data.data;if(e.data.data.status==="SETTLED"){clearInterval(n);t.buttonStatus="SETTLED";t.settled.emit(t.purchase)}r.label=3;case 3:return[2]}}))}))}),5e3)};e.prototype.openModal=function(){var e=this;de.post("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid+"/purchase",{price:this.calcedPrice}).then((function(e){return e.data.data})).then((function(t){e.purchase=new ye(t.purchaseId,t.status,t.expectedDestinationXrpAddress,t.expectedDestinationXrpAddressTag,t.expectedAmount,t.statusUrl);e.buttonStatus=t.status;e.modalStatus="show";e.awaitPayment()}))};e.prototype.closeModal=function(){this.modalStatus="hide";this.buttonStatus="LOADED"};e.prototype.renderCopyIcon=function(){return r("svg",{fill:"currentColor",style:{display:"inline-block","vertical-align":"middle"},height:"12",width:"12",viewBox:"0 0 1792 1792"},r("path",{d:"M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"}))};e.prototype.renderModal=function(e,t){var n=this;if(this.purchase.status==="SETTLED"){return r("div",{id:"myModal",class:this.modalStatus==="hide"?"modal hidden":"modal shown"},r("div",{class:"modal-content"},r("span",{class:"close",onClick:function(){return n.closeModal()}},"×"),r("p",{class:"xrp-price",onClick:function(){return be(n.purchase.expectedAmount.toString())}},this.purchase.expectedAmount," XRP"),r("p",{class:"payburner-blurb"},"To pay, send XRP to the following address and tag using any XRP wallet."),r("p",{class:"label"},"XRP Address"),r("p",{class:"xrp-address",onClick:function(){return be(n.purchase.expectedDestinationXrpAddress)}},this.purchase.expectedDestinationXrpAddress," ",this.renderCopyIcon()),r("p",{class:"label"},"Tag"),r("p",{class:"xrp-address-tag",onClick:function(){return be(n.purchase.expectedDestinationXrpAddressTag)}},this.purchase.expectedDestinationXrpAddressTag," ",this.renderCopyIcon()),r("hr",null),r("p",{class:"waiting"},"Thank you for your payment!  Your payment id is ",this.purchase.purchaseId),r("hr",null),e?r("p",{class:"payburner-blurb"},"If you don't have an XRP wallet or want a great payment experience, click here to install the ",r("a",{href:"https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en"},"Payburner Wallet"),"."):null,t?r("p",{class:"payburner-blurb"},"Your Paybuner Wallet is not logged in."):null))}else{return r("div",{id:"myModal",class:this.modalStatus==="hide"?"modal hidden":"modal shown"},r("div",{class:"modal-content"},r("span",{class:"close",onClick:function(){return n.closeModal()}},"×"),r("p",{class:"xrp-price",onClick:function(){return be(n.purchase.expectedAmount.toString())}},this.purchase.expectedAmount," XRP"),r("p",{class:"payburner-blurb"},"To pay, send XRP to the following address and tag using any XRP wallet."),r("p",{class:"label"},"XRP Address"),r("p",{class:"xrp-address",onClick:function(){return be(n.purchase.expectedDestinationXrpAddress)}},this.purchase.expectedDestinationXrpAddress," ",this.renderCopyIcon()),r("p",{class:"label"},"Tag"),r("p",{class:"xrp-address-tag",onClick:function(){return be(n.purchase.expectedDestinationXrpAddressTag)}},this.purchase.expectedDestinationXrpAddressTag," ",this.renderCopyIcon()),r("hr",null),r("p",{class:"waiting"},"Waiting for you to send XRP to the address and tag."),r("div",{class:"lds-ellipsis"},r("div",null),r("div",null),r("div",null),r("div",null)),r("hr",null),e?r("p",{class:"payburner-blurb"},"If you don't have an XRP wallet or want a great payment experience, click here to install the ",r("a",{href:"https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en"},"Payburner Wallet"),"."):null,t?r("p",{class:"payburner-blurb"},"Your Paybuner Wallet is not logged in."):null))}};e.prototype.render=function(){var e=this;var t=window.PAYBURNER;if(typeof t==="undefined"){return r("div",null,r("button",{onClick:function(){return e.openModal()},class:"pure-material-button-contained"},this.buttonStatus==="LOADED"?this.calcedPrice+" XRP":this.buttonStatus),this.renderModal(false,false))}else if(!this.isPayburnerConnected()){return r("div",null,r("button",{class:"pure-material-button-contained",onClick:function(){return e.openModal()}},this.buttonStatus==="LOADED"?this.calcedPrice+" XRP":this.buttonStatus),this.renderModal(true,false))}else if(!this.isPayburnerLoggedIn()){return r("div",null,r("button",{class:"pure-material-button-contained",onClick:function(){return e.openModal()}},this.buttonStatus==="LOADED"?this.calcedPrice+" XRP":this.buttonStatus),this.renderModal(false,true))}else if(this.buttonStatus==="PENDING"){return r(a,null,r("button",{class:"pure-material-button-contained"},this.buttonStatus))}else if(this.buttonStatus==="ERROR"){return r("button",{onClick:function(){return e.handleReset()},class:"pure-material-button-contained"},"ERROR")}else if(this.buttonStatus==="WAITING"){return r("button",{onClick:function(){return e.handleReset()},class:"pure-material-button-contained"},"WAITING")}else if(this.buttonStatus==="TIMEOUT"){return r("button",{onClick:function(){return e.handleReset()},class:"pure-material-button-contained"},"TIMEOUT")}else if(this.buttonStatus==="SETTLING"){return r("button",{onClick:function(){return e.handleReset()},class:"pure-material-button-contained"},this.buttonStatus)}else if(this.buttonStatus==="SETTLED"){return r(a,{status:this.buttonStatus},r("button",{onClick:function(){return e.handleReset()},class:"pure-material-button-contained"},this.buttonStatus))}else if(this.buttonStatus==="LOADED"){return r("button",{onClick:function(){return e.handleClick()},class:"pure-material-button-contained"},this.calcedPrice," XRP")}else{return r("button",{onClick:function(){return e.handleClick()},class:"pure-material-button-contained"},"UNKNOWN: ",this.buttonStatus)}};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:true,configurable:true});return e}());ve.style=ge}}}));