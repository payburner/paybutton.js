let t,e,n=!1,l=!1;const o="undefined"!=typeof window?window:{},s=o.CSS,r=o.document||{head:{}},c={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},i=(()=>(r.head.attachShadow+"").indexOf("[native")>-1)(),a=t=>Promise.resolve(t),u=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),f=(t,e,n)=>{n&&n.map(([n,l,o])=>{const s=m(t,n),r=p(e,o),i=b(n);c.ael(s,l,r,i),(e.o=e.o||[]).push(()=>c.rel(s,l,r,i))})},p=(t,e)=>n=>{256&t.t?t.s[e](n):(t.u=t.u||[]).push([e,n])},m=(t,e)=>4&e?r:t,b=t=>0!=(2&t),d=new WeakMap,w=t=>"sc-"+t,y={},$=t=>"object"==(t=typeof t)||"function"===t,h=(t,e,...n)=>{let l=null,o=!1,s=!1,r=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!$(l))&&(l+=""),o&&s?r[r.length-1].p+=l:r.push(o?_(null,l):l),s=o)};if(c(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const i=_(t,null);return i.$=e,r.length>0&&(i.h=r),i},_=(t,e)=>({t:0,_:t,p:e,g:null,h:null,$:null}),g={},j=(t,e,n,l,s,r)=>{if(n!==l){let a=K(t,e),u=e.toLowerCase();if("class"===e){const e=t.classList,o=M(n),s=M(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if(a||"o"!==e[0]||"n"!==e[1]){const o=$(l);if((a||o&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?a=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(i){}null==l||!1===l?t.removeAttribute(e):(!a||4&r||s)&&!o&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):K(o,u)?u.slice(2):u[2]+e.slice(3),n&&c.rel(t,e,n,!1),l&&c.ael(t,e,l,!1)}},v=/\s/,M=t=>t?t.split(v):[],O=(t,e,n,l)=>{const o=11===e.g.nodeType&&e.g.host?e.g.host:e.g,s=t&&t.$||y,r=e.$||y;for(l in s)l in r||j(o,l,s[l],void 0,n,e.t);for(l in r)j(o,l,s[l],r[l],n,e.t)},S=(e,l,o)=>{let s,c,i=l.h[o],a=0;if(null!==i.p)s=i.g=r.createTextNode(i.p);else{if(n||(n="svg"===i._),s=i.g=r.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i._),n&&"foreignObject"===i._&&(n=!1),O(null,i,n),null!=t&&s["s-si"]!==t&&s.classList.add(s["s-si"]=t),i.h)for(a=0;a<i.h.length;++a)c=S(e,i,a),c&&s.appendChild(c);"svg"===i._?n=!1:"foreignObject"===s.tagName&&(n=!0)}return s},k=(t,n,l,o,s,r)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);s<=r;++s)o[s]&&(c=S(null,l,s),c&&(o[s].g=c,i.insertBefore(c,n)))},L=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.g.remove()},R=(t,e)=>t._===e._,U=(t,e)=>{const l=e.g=t.g,o=t.h,s=e.h,r=e._,c=e.p;null===c?(n="svg"===r||"foreignObject"!==r&&n,O(t,e,n),null!==o&&null!==s?((t,e,n,l)=>{let o,s=0,r=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],p=l[u];for(;s<=c&&r<=u;)null==i?i=e[++s]:null==a?a=e[--c]:null==f?f=l[++r]:null==p?p=l[--u]:R(i,f)?(U(i,f),i=e[++s],f=l[++r]):R(a,p)?(U(a,p),a=e[--c],p=l[--u]):R(i,p)?(U(i,p),t.insertBefore(i.g,a.g.nextSibling),i=e[++s],p=l[--u]):R(a,f)?(U(a,f),t.insertBefore(a.g,i.g),a=e[--c],f=l[++r]):(o=S(e&&e[r],n,r),f=l[++r],o&&i.g.parentNode.insertBefore(o,i.g));s>c?k(t,null==l[u+1]?null:l[u+1].g,n,l,r,u):r>u&&L(e,s,c)})(l,o,e,s):null!==s?(null!==t.p&&(l.textContent=""),k(l,null,e,s,0,s.length-1)):null!==o&&L(o,0,o.length-1),n&&"svg"===r&&(n=!1)):t.p!==c&&(l.data=c)},C=t=>G(t).j,P=(t,e,n)=>{const l=C(t);return{emit:t=>x(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},x=(t,e,n)=>{const l=new CustomEvent(e,n);return t.dispatchEvent(l),l},A=(t,e)=>{e&&!t.v&&e["s-p"].push(new Promise(e=>t.v=e))},E=(t,e)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const n=t.s,l=()=>F(t,n,e);let o;return A(t,t.M),e&&(t.t|=256,t.u&&(t.u.map(([t,e])=>q(n,t,e)),t.u=null),o=q(n,"componentWillLoad")),B(o,()=>rt(l))},F=(n,l,o)=>{const s=n.j,c=s["s-rc"];o&&(t=>{const e=t.O,n=t.j,l=e.t,o=((t,e)=>{let n=w(e.S),l=Z.get(n);if(t=11===t.nodeType?t:r,l)if("string"==typeof l){let e,o=d.get(t=t.head||t);o||d.set(t,o=new Set),o.has(n)||(e=r.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(i&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n),((n,l)=>{const o=n.j,s=n.k||_(null,null),r=(t=>t&&t._===g)(l)?l:h(null,null,l);e=o.tagName,r._=null,r.t|=4,n.k=r,r.g=s.g=o.shadowRoot||o,t=o["s-sc"],U(s,r)})(n,T(l)),n.t&=-17,n.t|=2,c&&(c.map(t=>t()),s["s-rc"]=void 0);{const t=s["s-p"],e=()=>W(n);0===t.length?e():(Promise.all(t).then(e),n.t|=4,t.length=0)}},T=t=>{try{t=t.render()}catch(e){Q(e)}return t},W=t=>{const e=t.j,n=t.M;64&t.t||(t.t|=64,N(e),t.L(e),n||H()),t.v&&(t.v(),t.v=void 0),512&t.t&&st(()=>E(t,!1)),t.t&=-517},H=()=>{N(r.documentElement),st(()=>x(o,"appload",{detail:{namespace:"pay-button"}}))},q=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){Q(l)}},B=(t,e)=>t&&t.then?t.then(e):e(),N=t=>t.classList.add("hydrated"),V=(t,e,n)=>{if(e.R){const l=Object.entries(e.R),o=t.prototype;if(l.map(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>G(this).U.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=G(this),s=o.U.get(e),r=o.t,c=o.s;n=((t,e)=>null==t||$(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?t+"":t)(n,l.R[e][0]),8&r&&void 0!==s||n===s||(o.U.set(e,n),c&&2==(18&r)&&E(o,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){c.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},z=(t,e={})=>{const n=[],l=e.exclude||[],s=o.customElements,a=r.head,p=a.querySelector("meta[charset]"),m=r.createElement("style"),b=[];let d,y=!0;Object.assign(c,e),c.l=new URL(e.resourcesUrl||"./",r.baseURI).href,t.map(t=>t[1].map(e=>{const o={t:e[0],S:e[1],R:e[2],C:e[3]};o.R=e[2],o.C=e[3],!i&&1&o.t&&(o.t|=8);const r=o.S,a=class extends HTMLElement{constructor(t){super(t),J(t=this,o),1&o.t&&(i?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){d&&(clearTimeout(d),d=null),y?b.push(this):c.jmp(()=>(t=>{if(0==(1&c.t)){const e=G(t),n=e.O,l=()=>{};if(1&e.t)f(t,e,n.C);else{e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){A(e,e.M=n);break}}n.R&&Object.entries(n.R).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=Y(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(V(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(c){Q(c)}e.t&=-9,t()}const t=w(n.S);if(!Z.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_pay_button("./p-f5bab17b.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=Z.get(t);u&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,Z.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.M,r=()=>E(e,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,e,n)}l()}})(this))}disconnectedCallback(){c.jmp(()=>(()=>{if(0==(1&c.t)){const t=G(this),e=t.s;t.o&&(t.o.map(t=>t()),t.o=void 0),q(e,"disconnectedCallback")}})())}forceUpdate(){(()=>{{const t=G(this);t.j.isConnected&&2==(18&t.t)&&E(t,!1)}})()}componentOnReady(){return G(this).P}};o.A=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,V(a,o,1)))})),m.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",m.setAttribute("data-styles",""),a.insertBefore(m,p?p.nextSibling:a.firstChild),y=!1,b.length?b.map(t=>t.connectedCallback()):c.jmp(()=>d=setTimeout(H,30))},D=new WeakMap,G=t=>D.get(t),I=(t,e)=>D.set(e.s=t,e),J=(t,e)=>{const n={t:0,j:t,O:e,U:new Map};return n.P=new Promise(t=>n.L=t),t["s-p"]=[],t["s-rc"]=[],f(t,n,e.C),D.set(t,n)},K=(t,e)=>e in t,Q=t=>console.error(t),X=new Map,Y=t=>{const e=t.S.replace(/-/g,"_"),n=t.A,l=X.get(n);return l?l[e]:__sc_import_pay_button(`./${n}.entry.js`).then(t=>(X.set(n,t),t[e]),Q)},Z=new Map,tt=[],et=[],nt=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&c.t?st(ot):c.raf(ot))},lt=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){Q(e)}t.length=0},ot=()=>{lt(tt),lt(et),(l=tt.length>0)&&c.raf(ot)},st=t=>a().then(t),rt=nt(et,!0),ct=()=>s&&s.supports&&s.supports("color","var(--c)")?a():__sc_import_pay_button("./p-69b85284.js").then(()=>(c.F=o.__cssshim)?(!1).i():0),it=()=>{c.F=o.__cssshim;const t=Array.from(r.querySelectorAll("script")).find(t=>/\/pay-button(\.esm)?\.js($|\?|#)/.test(t.src)||"pay-button"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,o.location.href)).href,at(e.resourcesUrl,t),o.customElements?a(e):__sc_import_pay_button("./p-2347dcb6.js").then(()=>e))},at=(t,e)=>{try{o.__sc_import_pay_button=Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;o.__sc_import_pay_button=n=>{const s=new URL(n,t).href;let c=l.get(s);if(!c){const t=r.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.__sc_import_pay_button.m = m;`],{type:"application/javascript"})),c=new Promise(e=>{t.onload=()=>{e(o.__sc_import_pay_button.m),t.remove()}}),l.set(s,c),r.head.appendChild(t)}return c}}};export{g as H,ct as a,z as b,P as c,C as g,h,it as p,I as r}