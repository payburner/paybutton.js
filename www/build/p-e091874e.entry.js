import{r as t,c as e,h as n,H as i,g as r}from"./p-2e383c93.js";var o=function(t,e){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return t.apply(e,n)}},a=Object.prototype.toString;function s(t){return"[object Array]"===a.call(t)}function l(t){return void 0===t}function c(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===a.call(t)}function p(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,i=t.length;n<i;n++)e.call(null,t[n],n,t);else for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.call(null,t[r],r,t)}var d={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===a.call(t)},isBuffer:function(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:c,isUndefined:l,isDate:function(t){return"[object Date]"===a.call(t)},isFile:function(t){return"[object File]"===a.call(t)},isBlob:function(t){return"[object Blob]"===a.call(t)},isFunction:u,isStream:function(t){return c(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:p,merge:function t(){var e={};function n(n,i){e[i]="object"==typeof e[i]&&"object"==typeof n?t(e[i],n):n}for(var i=0,r=arguments.length;i<r;i++)p(arguments[i],n);return e},deepMerge:function t(){var e={};function n(n,i){e[i]="object"==typeof e[i]&&"object"==typeof n?t(e[i],n):"object"==typeof n?t({},n):n}for(var i=0,r=arguments.length;i<r;i++)p(arguments[i],n);return e},extend:function(t,e,n){return p(e,(function(e,i){t[i]=n&&"function"==typeof e?o(e,n):e})),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}};function f(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var h=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(d.isURLSearchParams(e))i=e.toString();else{var r=[];d.forEach(e,(function(t,e){null!=t&&(d.isArray(t)?e+="[]":t=[t],d.forEach(t,(function(t){d.isDate(t)?t=t.toISOString():d.isObject(t)&&(t=JSON.stringify(t)),r.push(f(e)+"="+f(t))})))})),i=r.join("&")}if(i){var o=t.indexOf("#");-1!==o&&(t=t.slice(0,o)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t};function b(){this.handlers=[]}b.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},b.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},b.prototype.forEach=function(t){d.forEach(this.handlers,(function(e){null!==e&&t(e)}))};var m=b,g=function(t,e,n){return d.forEach(n,(function(n){t=n(t,e)})),t},x=function(t){return!(!t||!t.__CANCEL__)},y=function(t,e){d.forEach(t,(function(n,i){i!==e&&i.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[i])}))},w=function(t,e,n,i,r){return function(t,e,n,i,r){return t.config=e,n&&(t.code=n),t.request=i,t.response=r,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}(new Error(t),e,n,i,r)},v=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],k=d.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var i=t;return e&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=d.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0},R=d.isStandardBrowserEnv()?{write:function(t,e,n,i,r,o){var a=[];a.push(t+"="+encodeURIComponent(e)),d.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),d.isString(i)&&a.push("path="+i),d.isString(r)&&a.push("domain="+r),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},E={"Content-Type":"application/x-www-form-urlencoded"};function T(t,e){!d.isUndefined(t)&&d.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var P,S={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(P=function(t){return new Promise((function(e,n){var i=t.data,r=t.headers;d.isFormData(i)&&delete r["Content-Type"];var o=new XMLHttpRequest;t.auth&&(r.Authorization="Basic "+btoa((t.auth.username||"")+":"+(t.auth.password||"")));var a,s,l=(s=t.url,(a=t.baseURL)&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(s)?function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}(a,s):s);if(o.open(t.method.toUpperCase(),h(l,t.params,t.paramsSerializer),!0),o.timeout=t.timeout,o.onreadystatechange=function(){if(o&&4===o.readyState&&(0!==o.status||o.responseURL&&0===o.responseURL.indexOf("file:"))){var i,r,a,s,l,c="getAllResponseHeaders"in o?(i=o.getAllResponseHeaders(),l={},i?(d.forEach(i.split("\n"),(function(t){if(s=t.indexOf(":"),r=d.trim(t.substr(0,s)).toLowerCase(),a=d.trim(t.substr(s+1)),r){if(l[r]&&v.indexOf(r)>=0)return;l[r]="set-cookie"===r?(l[r]?l[r]:[]).concat([a]):l[r]?l[r]+", "+a:a}})),l):l):null;!function(t,e,n){var i=n.config.validateStatus;!i||i(n.status)?t(n):e(w("Request failed with status code "+n.status,n.config,null,n.request,n))}(e,n,{data:t.responseType&&"text"!==t.responseType?o.response:o.responseText,status:o.status,statusText:o.statusText,headers:c,config:t,request:o}),o=null}},o.onabort=function(){o&&(n(w("Request aborted",t,"ECONNABORTED",o)),o=null)},o.onerror=function(){n(w("Network Error",t,null,o)),o=null},o.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(w(e,t,"ECONNABORTED",o)),o=null},d.isStandardBrowserEnv()){var c=R,u=(t.withCredentials||k(l))&&t.xsrfCookieName?c.read(t.xsrfCookieName):void 0;u&&(r[t.xsrfHeaderName]=u)}if("setRequestHeader"in o&&d.forEach(r,(function(t,e){void 0===i&&"content-type"===e.toLowerCase()?delete r[e]:o.setRequestHeader(e,t)})),d.isUndefined(t.withCredentials)||(o.withCredentials=!!t.withCredentials),t.responseType)try{o.responseType=t.responseType}catch(p){if("json"!==t.responseType)throw p}"function"==typeof t.onDownloadProgress&&o.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&o.upload&&o.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){o&&(o.abort(),n(t),o=null)})),void 0===i&&(i=null),o.send(i)}))}),P),transformRequest:[function(t,e){return y(e,"Accept"),y(e,"Content-Type"),d.isFormData(t)||d.isArrayBuffer(t)||d.isBuffer(t)||d.isStream(t)||d.isFile(t)||d.isBlob(t)?t:d.isArrayBufferView(t)?t.buffer:d.isURLSearchParams(t)?(T(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):d.isObject(t)?(T(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],(function(t){S.headers[t]={}})),d.forEach(["post","put","patch"],(function(t){S.headers[t]=d.merge(E)}));var D=S;function L(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var N=function(t){return L(t),t.headers=t.headers||{},t.data=g(t.data,t.headers,t.transformRequest),t.headers=d.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),d.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||D.adapter)(t).then((function(e){return L(t),e.data=g(e.data,e.headers,t.transformResponse),e}),(function(e){return x(e)||(L(t),e&&e.response&&(e.response.data=g(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))},C=function(t,e){e=e||{};var n={},i=["url","method","params","data"],r=["headers","auth","proxy"],o=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];d.forEach(i,(function(t){void 0!==e[t]&&(n[t]=e[t])})),d.forEach(r,(function(i){d.isObject(e[i])?n[i]=d.deepMerge(t[i],e[i]):void 0!==e[i]?n[i]=e[i]:d.isObject(t[i])?n[i]=d.deepMerge(t[i]):void 0!==t[i]&&(n[i]=t[i])})),d.forEach(o,(function(i){void 0!==e[i]?n[i]=e[i]:void 0!==t[i]&&(n[i]=t[i])}));var a=i.concat(r).concat(o),s=Object.keys(e).filter((function(t){return-1===a.indexOf(t)}));return d.forEach(s,(function(i){void 0!==e[i]?n[i]=e[i]:void 0!==t[i]&&(n[i]=t[i])})),n};function I(t){this.defaults=t,this.interceptors={request:new m,response:new m}}I.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=C(this.defaults,t)).method=t.method?t.method.toLowerCase():this.defaults.method?this.defaults.method.toLowerCase():"get";var e=[N,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)n=n.then(e.shift(),e.shift());return n},I.prototype.getUri=function(t){return t=C(this.defaults,t),h(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},d.forEach(["delete","get","head","options"],(function(t){I.prototype[t]=function(e,n){return this.request(d.merge(n||{},{method:t,url:e}))}})),d.forEach(["post","put","patch"],(function(t){I.prototype[t]=function(e,n,i){return this.request(d.merge(i||{},{method:t,url:e,data:n}))}}));var A=I;function O(t){this.message=t}O.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},O.prototype.__CANCEL__=!0;var j=O;function z(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new j(t),e(n.reason))}))}z.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},z.source=function(){var t;return{token:new z((function(e){t=e})),cancel:t}};var q=z;function B(t){var e=new A(t),n=o(A.prototype.request,e);return d.extend(n,A.prototype,e),d.extend(n,e),n}var X=B(D);X.Axios=A,X.create=function(t){return B(C(X.defaults,t))},X.Cancel=j,X.CancelToken=q,X.isCancel=x,X.all=function(t){return Promise.all(t)},X.spread=function(t){return function(e){return t.apply(null,e)}};var M=X;M.default=X;var F=M;const U=(t,{target:e=document.body}={})=>{const n=document.createElement("textarea"),i=document.activeElement;n.value=t,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),e.append(n),n.select(),n.selectionStart=0,n.selectionEnd=t.length;let a=!1;try{a=document.execCommand("copy")}catch(s){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),i&&i.focus(),a};var W=U;W.default=U;class G{constructor(t,e,n,i,r,o){this.purchaseId=t,this.status=e,this.expectedAmount=r,this.expectedDestinationXrpAddress=n,this.expectedDestinationXrpAddressTag=i,this.statusUrl=o}}const H=class{constructor(n){t(this,n),this.PAYBURNER=window.PAYBURNER,this.settled=e(this,"settled",7)}handleClick(){const t={price:this.calcedPrice};void 0!==this.reference&&(t.reference=this.reference),null!=this.fiatcurrency&&null!=this.fiatprice&&(t.fiatcurrency=this.fiatcurrency,t.fiatprice=this.fiatprice,t.fiatrate=this.fiatrate),F.post("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid+"/purchase",t).then(t=>t.data.data).then(t=>{this.purchase=new G(t.purchaseId,t.status,t.expectedDestinationXrpAddress,t.expectedDestinationXrpAddressTag,t.expectedAmount,t.statusUrl),this.makePayment()})}handleReset(){this.allowresetanytime||"ERROR"===this.buttonStatus||"TIMEOUT"===this.buttonStatus?(this.modalStatus="hide",this.buttonStatus="LOADED",this.purchase=new G("","","","",0,"")):console.log("Not allowing reset on settled.")}handlePayburnerStatus(t){(void 0===this.payburnerStatus||this.payburnerStatus!==t)&&(this.payburnerStatus=t)}handlePayburnerLoggedIn(t){(void 0===this.payburnerLoggedIn||this.payburnerLoggedIn!==t)&&(this.payburnerLoggedIn=t)}disconnectedCallback(){document.removeEventListener("PayburnerStatus",t=>this.handleStatusEvent(t))}handleStatusEvent(t){const e=t.detail;console.log("PayButton received payburner status event:"+JSON.stringify(e)),this.handlePayburnerStatus(e.extensionStatus),this.handlePayburnerLoggedIn(e.loggedIn)}componentWillLoad(){null==this.allowresetanytime&&(this.allowresetanytime=!0),this.modalStatus="hide",this.buttonStatus="LOADING",this.purchase=new G("","","","",0,"");const t=this;return F.get("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid,{}).then(t=>t.data.data).then(e=>{const n=parseFloat(e.price);"FIXED_PRICE"===e.buttonType?(t.calcedPrice=n,t.buttonStatus="LOADED"):null!=t.fiatcurrency&&null!=t.fiatprice?F.get("https://gateway.payburner.com/v1/gateway/rate/"+t.fiatcurrency,{}).then(t=>t.data.data).then(e=>{t.fiatrate=e.rate,t.calcedPrice=parseFloat((t.fiatprice/e.rate).toFixed(6)),t.buttonStatus="LOADED"}):null!=t.price?(t.calcedPrice=t.price,t.buttonStatus="LOADED"):(t.calcedPrice=n,t.buttonStatus="LOADED")})}extractError(t){return"string"==typeof t?t:"object"==typeof t&&void 0!==t.error?t.error:JSON.stringify(t)}makePayment(){const t=this;this.buttonStatus="WAITING",this.PAYBURNER.makePaymentWithTag(this.purchase.expectedDestinationXrpAddress,parseInt(this.purchase.expectedDestinationXrpAddressTag),this.purchase.expectedAmount).then((function(e){if(void 0!==e.error){const n=t.purchase;n.status="ERROR",t.purchase=n,console.log("Error received from payment request:"+t.extractError(e.error)),t.buttonStatus="ERROR"}else if(t.buttonStatus="SETTLING","SUCCESS"===e.state){const n={count:0,status:"PENDING"},i=setInterval(async()=>{const r=await F.get(t.purchase.statusUrl);t.purchase=r.data.data,"SETTLED"===r.data.data.status?(n.status="SETTLED",clearInterval(i),t.modalStatus="hide",console.log("SETTLED",e.finalized.hash,e.finalized.engine_result),t.buttonStatus="SETTLED",t.settled.emit(t.purchase)):(n.count=n.count+1,t.buttonStatus="SETTLING",n.count>10&&(clearInterval(i),t.buttonStatus="TIMEOUT"))},5e3)}else t.buttonStatus="SETTLING"})).catch((function(e){this.PAYBURNER.log("<- error: "+t.extractError(e))}))}isPayburnerConnected(){return void 0!==this.PAYBURNER&&this.PAYBURNER.isPayburnerConnected()}isPayburnerLoggedIn(){return void 0!==this.PAYBURNER&&this.PAYBURNER.isPayburnerLoggedIn()}awaitPayment(){const t=this;this.buttonStatus="WAITING";const e=setInterval(async()=>{if("hide"===this.modalStatus)clearInterval(e);else{const n=await F.get(t.purchase.statusUrl);t.purchase=n.data.data,"SETTLED"===n.data.data.status&&(clearInterval(e),t.buttonStatus="SETTLED",t.settled.emit(t.purchase))}},5e3)}openModal(){const t={price:this.calcedPrice};void 0!==this.reference&&(t.reference=this.reference),null!=this.fiatcurrency&&null!=this.fiatprice&&(t.fiatcurrency=this.fiatcurrency,t.fiatprice=this.fiatprice,t.fiatrate=this.fiatrate),F.post("https://gateway.payburner.com/v1/gateway/paybuttons/"+this.buttonid+"/purchase",t).then(t=>t.data.data).then(t=>{this.purchase=new G(t.purchaseId,t.status,t.expectedDestinationXrpAddress,t.expectedDestinationXrpAddressTag,t.expectedAmount,t.statusUrl),this.buttonStatus=t.status,this.modalStatus="show",this.isPayburnerLoggedIn()?this.makePayment():this.awaitPayment()})}closeModal(){this.modalStatus="hide",this.buttonStatus="LOADED"}renderCopyIcon(){return n("svg",{fill:"currentColor",style:{display:"inline-block","vertical-align":"middle"},height:"12",width:"12",viewBox:"0 0 1792 1792"},n("path",{d:"M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zM1024 224v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zM1280 896h299l-299-299v299zM1792 1024v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"}))}renderModal(t){const e=this.isPayburnerConnected(),i=this.isPayburnerLoggedIn();return n("div",{id:"myModal",class:"hide"===this.modalStatus?"modal hidden":"modal shown"},"SETTLED"===this.purchase.status?n("div",{class:"modal-content"},n("span",{class:"close",onClick:()=>this.closeModal()},"×"),n("p",{class:"xrp-price",onClick:()=>W(this.purchase.expectedAmount.toString())},this.purchase.expectedAmount," XRP"),n("p",{class:"payburner-blurb"},"To pay, send XRP to the following address and tag using any XRP wallet."),n("p",{class:"label"},"XRP Address"),n("p",{class:"xrp-address",onClick:()=>W(this.purchase.expectedDestinationXrpAddress)},this.purchase.expectedDestinationXrpAddress," ",this.renderCopyIcon()),n("p",{class:"label"},"Tag"),n("p",{class:"xrp-address-tag",onClick:()=>W(this.purchase.expectedDestinationXrpAddressTag)},this.purchase.expectedDestinationXrpAddressTag," ",this.renderCopyIcon()),n("hr",null),n("p",{class:"waiting"},"Thank you for your payment!  Your payment id is ",this.purchase.purchaseId),n("hr",null),t?n("p",{class:"payburner-blurb"},"If you don't have an XRP wallet or want a great payment experience, click here to install the ",n("a",{href:"https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en"},"Payburner Wallet"),"."):null,e&&!i?n("p",{class:"payburner-blurb"},"Your Paybuner Wallet is not logged in."):null):n("div",{class:"modal-content"},n("span",{class:"close",onClick:()=>this.closeModal()},"×"),n("p",{class:"xrp-price",onClick:()=>W(this.purchase.expectedAmount.toString())},this.purchase.expectedAmount," XRP"),n("p",{class:"payburner-blurb"},"To pay, send XRP to the following address and tag using any XRP wallet."),n("p",{class:"label"},"XRP Address"),n("p",{class:"xrp-address",onClick:()=>W(this.purchase.expectedDestinationXrpAddress)},this.purchase.expectedDestinationXrpAddress," ",this.renderCopyIcon()),n("p",{class:"label"},"Tag"),n("p",{class:"xrp-address-tag",onClick:()=>W(this.purchase.expectedDestinationXrpAddressTag)},this.purchase.expectedDestinationXrpAddressTag," ",this.renderCopyIcon()),n("hr",null),n("p",{class:"waiting"},"Waiting for you to send XRP to the address and tag."),n("div",{class:"lds-ellipsis"},n("div",null),n("div",null),n("div",null),n("div",null)),n("hr",null),e&&i?n("div",null,n("div",{style:{float:"left",marginRight:"12px",marginBottom:"12px"}},n("img",{height:"50",width:"50",src:"https://payburner.com/images/favicon.png"})),n("div",{style:{marginLeft:"8px"},class:"payburner-blurb"},"Please open your Payburner Wallet to approve if you do not have 1-click enabled.")):null,e?null:n("div",null,n("div",{style:{float:"left",marginRight:"12px",marginBottom:"12px"}},n("img",{height:"50",width:"50",src:"https://payburner.com/images/favicon.png"})),n("div",{style:{marginLeft:"8px"},class:"payburner-blurb"},"If you don't have an XRP wallet or want a great payment experience, click here to install the ",n("a",{href:"https://chrome.google.com/webstore/detail/ghigcfhmoaokccllienfhdhdndkfhmop/publish-accepted?authuser=3&hl=en"},"Payburner Wallet"),".")),e&&!i?n("div",null,n("div",{style:{float:"left",marginRight:"12px",marginBottom:"12px"}},n("img",{height:"50",width:"50",src:"https://payburner.com/images/favicon.png"})),n("div",{style:{marginLeft:"8px"},class:"payburner-blurb"},"You have Payburner, but you are not logged.  Please do so to approve the payment.")):null))}render(){return n(i,{purchaseId:this.purchase.purchaseId,status:this.buttonStatus},n("div",null,n("button",{onClick:()=>this.openModal(),class:"pure-material-button-contained"},"LOADED"===this.buttonStatus?this.calcedPrice+" XRP":this.buttonStatus),this.renderModal(!1)))}get el(){return r(this)}};H.style=':host{display:block}.pure-material-button-contained{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));background-color:rgb(var(--pure-material-primary-rgb, 33, 150, 243));-webkit-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);font-family:var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;overflow:hidden;outline:none;cursor:pointer;-webkit-transition:-webkit-box-shadow 0.2s;transition:-webkit-box-shadow 0.2s;transition:box-shadow 0.2s;transition:box-shadow 0.2s, -webkit-box-shadow 0.2s}.pure-material-button-contained::-moz-focus-inner{border:none}.pure-material-button-contained::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));opacity:0;-webkit-transition:opacity 0.2s;transition:opacity 0.2s}.pure-material-button-contained::after{content:"";position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));opacity:0;-webkit-transform:translate(-50%, -50%) scale(1);transform:translate(-50%, -50%) scale(1);-webkit-transition:opacity 1s, -webkit-transform 0.5s;transition:opacity 1s, -webkit-transform 0.5s;transition:opacity 1s, transform 0.5s;transition:opacity 1s, transform 0.5s, -webkit-transform 0.5s}.pure-material-button-contained:hover,.pure-material-button-contained:focus{-webkit-box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.pure-material-button-contained:hover::before{opacity:0.08}.pure-material-button-contained:focus::before{opacity:0.24}.pure-material-button-contained:hover:focus::before{opacity:0.3}.pure-material-button-contained:active{-webkit-box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}.pure-material-button-contained:active::after{opacity:0.32;-webkit-transform:translate(-50%, -50%) scale(0);transform:translate(-50%, -50%) scale(0);-webkit-transition:-webkit-transform 0s;transition:-webkit-transform 0s;transition:transform 0s;transition:transform 0s, -webkit-transform 0s}.pure-material-button-contained:disabled{color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);background-color:rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.12);-webkit-box-shadow:none;box-shadow:none;cursor:initial}.pure-material-button-contained:disabled::before{opacity:0}.pure-material-button-contained:disabled::after{opacity:0}.modal{display:none;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.8);}.modal-content{max-width:300px;background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:300px;color:black;word-wrap:break-word;overflow-wrap:break-word;font-size:12px;font-family:var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system)}.modal-content p{margin-top:20px;width:100%;margin-bottom:0px}.modal-content .xrp-price{color:rgb(149, 144, 148);margin-bottom:8px;font-size:28px;width:100%;text-align:center}.modal-content .waiting{color:rgb(149, 144, 148);margin-bottom:8px;font-size:20px;width:100%;text-align:center}.modal-content .payburner-blurb{font-size:16px;color:rgb(149, 144, 148);width:100%;text-align:left}.modal-content .label{font-size:20px}.modal-content hr{color:rgb(149, 144, 148);width:100%;margin-top:20px;margin-bottom:20px}.modal-content .xrp-address{color:rgb(149, 144, 148);font-size:16px;margin-top:6px;width:100%;word-break:break-word}.modal-content .xrp-address-tag{color:rgb(149, 144, 148);font-size:16px;margin-top:8px;width:100%;word-break:break-word}.close{color:#aaaaaa;float:right;font-size:28px;font-weight:bold}.close:hover,.close:focus{color:#000;text-decoration:none;cursor:pointer}.hidden{display:none}.shown{display:block}.lds-ellipsis{display:inline-block;position:relative;width:80px;height:20px;margin-left:100px;margin-right:100px}.lds-ellipsis div{position:absolute;top:15px;width:13px;height:13px;border-radius:50%;background:rgb(149, 144, 148);-webkit-animation-timing-function:cubic-bezier(0, 1, 1, 0);animation-timing-function:cubic-bezier(0, 1, 1, 0)}.lds-ellipsis div:nth-child(1){left:8px;-webkit-animation:lds-ellipsis1 0.6s infinite;animation:lds-ellipsis1 0.6s infinite}.lds-ellipsis div:nth-child(2){left:8px;-webkit-animation:lds-ellipsis2 0.6s infinite;animation:lds-ellipsis2 0.6s infinite}.lds-ellipsis div:nth-child(3){left:32px;-webkit-animation:lds-ellipsis2 0.6s infinite;animation:lds-ellipsis2 0.6s infinite}.lds-ellipsis div:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3 0.6s infinite;animation:lds-ellipsis3 0.6s infinite}@-webkit-keyframes lds-ellipsis1{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes lds-ellipsis1{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes lds-ellipsis3{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes lds-ellipsis3{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes lds-ellipsis2{0%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}100%{-webkit-transform:translate(24px, 0);transform:translate(24px, 0)}}@keyframes lds-ellipsis2{0%{-webkit-transform:translate(0, 0);transform:translate(0, 0)}100%{-webkit-transform:translate(24px, 0);transform:translate(24px, 0)}}';export{H as pay_button}