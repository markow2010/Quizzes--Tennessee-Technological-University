!function(){var t={63476:function(t,e,n){var r=n(17370),o=n(52354),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},87602:function(t,e,n){var r=n(74970),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},29377:function(t,e,n){var r=n(2348),o=n(77659),i=n(92645);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},92645:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},92442:function(t,e,n){var r=n(21537),o=n(77659);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},85824:function(t,e,n){var r=n(89693),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},2348:function(t,e,n){var r=n(90539);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},31179:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},27837:function(t,e,n){var r=n(89693),o=n(74970),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},16249:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},16454:function(t,e,n){var r,o,i=n(89693),u=n(16249),c=i.process,f=i.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},90539:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},56023:function(t,e,n){var r=n(90539);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},75283:function(t,e,n){var r=n(56023),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},17095:function(t,e,n){var r=n(2348),o=n(5822),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),f=c&&"something"===function(){}.name,a=c&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},55851:function(t,e,n){var r=n(56023),o=Function.prototype,i=o.call,u=r&&o.bind.bind(i,i);t.exports=r?u:function(t){return function(){return i.apply(t,arguments)}}},84759:function(t,e,n){var r=n(89693),o=n(17370);t.exports=function(t,e){return arguments.length<2?(n=r[t],o(n)?n:void 0):r[t]&&r[t][e];var n}},54866:function(t,e,n){var r=n(63476),o=n(63030);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},89693:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},5822:function(t,e,n){var r=n(55851),o=n(13858),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},54189:function(t){t.exports={}},66259:function(t,e,n){var r=n(2348),o=n(90539),i=n(27837);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},67414:function(t,e,n){var r=n(55851),o=n(17370),i=n(89562),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},8941:function(t,e,n){var r,o,i,u=n(30047),c=n(89693),f=n(74970),a=n(29377),s=n(5822),l=n(89562),p=n(94631),d=n(54189),v="Object already initialized",y=c.TypeError,b=c.WeakMap;if(u||l.state){var g=l.state||(l.state=new b);g.get=g.get,g.has=g.has,g.set=g.set,r=function(t,e){if(g.has(t))throw y(v);return e.facade=t,g.set(t,e),e},o=function(t){return g.get(t)||{}},i=function(t){return g.has(t)}}else{var h=p("state");d[h]=!0,r=function(t,e){if(s(t,h))throw y(v);return e.facade=t,a(t,h,e),e},o=function(t){return s(t,h)?t[h]:{}},i=function(t){return s(t,h)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!f(e)||(n=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return n}}}},17370:function(t,e,n){var r=n(31179),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},63030:function(t){t.exports=function(t){return null===t||void 0===t}},74970:function(t,e,n){var r=n(17370),o=n(31179),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},24748:function(t){t.exports=!1},74221:function(t,e,n){var r=n(84759),o=n(17370),i=n(82104),u=n(8012),c=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,c(t))}},21537:function(t,e,n){var r=n(55851),o=n(90539),i=n(17370),u=n(5822),c=n(2348),f=n(17095).CONFIGURABLE,a=n(67414),s=n(8941),l=s.enforce,p=s.get,d=String,v=Object.defineProperty,y=r("".slice),b=r("".replace),g=r([].join),h=c&&!o((function(){return 8!==v((function(){}),"length",{value:8}).length})),m=String(String).split("String"),x=t.exports=function(t,e,n){"Symbol("===y(d(e),0,7)&&(e="["+b(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!u(t,"name")||f&&t.name!==e)&&(c?v(t,"name",{value:e,configurable:!0}):t.name=e),h&&n&&u(n,"arity")&&t.length!==n.arity&&v(t,"length",{value:n.arity});try{n&&u(n,"constructor")&&n.constructor?c&&v(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=l(t);return u(r,"source")||(r.source=g(m,"string"==typeof e?e:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||a(this)}),"toString")},77659:function(t,e,n){var r=n(2348),o=n(66259),i=n(22618),u=n(87602),c=n(76405),f=TypeError,a=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",d="writable";e.f=r?i?function(t,e,n){if(u(t),e=c(e),u(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=s(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return a(t,e,n)}:a:function(t,e,n){if(u(t),e=c(e),u(n),o)try{return a(t,e,n)}catch(r){}if("get"in n||"set"in n)throw f("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},82104:function(t,e,n){var r=n(55851);t.exports=r({}.isPrototypeOf)},89034:function(t,e,n){var r=n(75283),o=n(17370),i=n(74970),u=TypeError;t.exports=function(t,e){var n,c;if("string"===e&&o(n=t.toString)&&!i(c=r(n,t)))return c;if(o(n=t.valueOf)&&!i(c=r(n,t)))return c;if("string"!==e&&o(n=t.toString)&&!i(c=r(n,t)))return c;throw u("Can't convert object to primitive value")}},94782:function(t,e,n){"use strict";var r=n(87602);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},42639:function(t,e,n){var r=n(63030),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},94631:function(t,e,n){var r=n(45981),o=n(13747),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},89562:function(t,e,n){var r=n(89693),o=n(85824),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},45981:function(t,e,n){var r=n(24748),o=n(89562);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.1",mode:r?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"})},61011:function(t,e,n){var r=n(16454),o=n(90539);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},13858:function(t,e,n){var r=n(42639),o=Object;t.exports=function(t){return o(r(t))}},89520:function(t,e,n){var r=n(75283),o=n(74970),i=n(74221),u=n(54866),c=n(89034),f=n(41593),a=TypeError,s=f("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,f=u(t,s);if(f){if(void 0===e&&(e="default"),n=r(f,t,e),!o(n)||i(n))return n;throw a("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},76405:function(t,e,n){var r=n(89520),o=n(74221);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},52354:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},13747:function(t,e,n){var r=n(55851),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},8012:function(t,e,n){var r=n(61011);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},22618:function(t,e,n){var r=n(2348),o=n(90539);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},30047:function(t,e,n){var r=n(89693),o=n(17370),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},41593:function(t,e,n){var r=n(89693),o=n(45981),i=n(5822),u=n(13747),c=n(61011),f=n(8012),a=r.Symbol,s=o("wks"),l=f?a.for||a:a&&a.withoutSetter||u;t.exports=function(t){return i(s,t)||(s[t]=c&&i(a,t)?a[t]:l("Symbol."+t)),s[t]}},86597:function(t,e,n){var r=n(89693),o=n(2348),i=n(92442),u=n(94782),c=n(90539),f=r.RegExp,a=f.prototype;o&&c((function(){var t=!0;try{f(".","d")}catch(c){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",o=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var u in t&&(i.hasIndices="d"),i)o(u,i[u]);return Object.getOwnPropertyDescriptor(a,"flags").get.call(e)!==r||n!==r}))&&i(a,"flags",{configurable:!0,get:u})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,n.amdO={},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var u={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&r;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((function(t){u[t]=function(){return r[t]}}));return u.default=function(){return r},n.d(i,u),i}}(),n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))},n.u=function(t){return"static/js/"+({309:"polyfill-object-fromentries",482:"polyfill-resize-observer",653:"polyfill-element-scroll"}[t]||t)+"."+{111:"734755e7",265:"dd019dab",309:"850a70d4",482:"85535c5a",653:"fdb48345"}[t]+".chunk.js"},n.miniCssF=function(t){return"static/css/"+t+".d55489a5.chunk.css"},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),n.hmd=function(t){return(t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={},e="solve-ui:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var c,f;if(void 0!==i)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){c=l;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+i),c.src=r),t[r]=[o];var p=function(e,n){c.onerror=c.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),f&&document.head.appendChild(c)}}}(),n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},n.p="/",function(){if("undefined"!==typeof document){var t=function(t){return new Promise((function(e,r){var o=n.miniCssF(t),i=n.p+o;if(function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(u=n[r]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===t||o===e))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var u;if((o=(u=i[r]).getAttribute("data-href"))===t||o===e)return u}}(o,i))return e();!function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||e,f=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=u,f.request=c,i.parentNode&&i.parentNode.removeChild(i),o(f)}},i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i)}(t,i,null,e,r)}))},e={179:0};n.f.miniCss=function(n,r){e[n]?r.push(e[n]):0!==e[n]&&{265:1}[n]&&r.push(e[n]=t(n).then((function(){e[n]=0}),(function(t){throw delete e[n],t})))}}}(),function(){var t={179:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),c=new Error;n.l(u,(function(r){if(n.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}}),"chunk-"+e,e)}};var e=function(e,r){var o,i,u=r[0],c=r[1],f=r[2],a=0;if(u.some((function(e){return 0!==t[e]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(f)f(n)}for(e&&e(r);a<u.length;a++)i=u[a],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0},r=self.webpackChunksolve_ui=self.webpackChunksolve_ui||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}(),function(){var t="undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};t.SENTRY_RELEASE={id:"production_v1.7.162_1_bc80886"},t.SENTRY_RELEASES=t.SENTRY_RELEASES||{},t.SENTRY_RELEASES["solve-ui@forethoughtai"]={id:"production_v1.7.162_1_bc80886"}}(),function(){"use strict";n(86597);Promise.all([(async()=>{Element.prototype.scroll&&Element.prototype.scrollBy&&Element.prototype.scrollTo||await n.e(653).then(n.t.bind(n,61166,23))})(),(async()=>{if(!window.ResizeObserver){const{ResizeObserver:t}=await n.e(482).then(n.bind(n,15725));window.ResizeObserver=t}})(),(async()=>{Object.fromEntries||await n.e(309).then(n.t.bind(n,52222,23))})()]).then((()=>{Promise.all([n.e(111),n.e(265)]).then(n.bind(n,41265))}))}()}();