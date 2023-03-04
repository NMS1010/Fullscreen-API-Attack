;
(self.AMP=self.AMP||[]).push({m:0,v:"2302171719000",n:"amp-user-notification",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function i(t,i){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,i){if(t){if("string"==typeof t)return n(t,i);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r;function e(){return r||(r=Promise.resolve(void 0))}var o=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,n){return(s=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,n){if(n&&("object"===u(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}var c=Array.isArray,h=Object.prototype;function l(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function v(t){for(var n,r=null,e="",o=i(arguments,!0);!(n=o()).done;){var u=n.value;u instanceof Error&&!r?r=l(u):(e&&(e+=" "),e+=u)}return r?e&&(r.message=e+": "+r.message):r=new Error(e),r}function d(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function p(t){var n=v.apply(null,arguments);setTimeout((function(){throw d(n),n}))}h.hasOwnProperty,h.toString,self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var m=self.__AMP_LOG;function b(t,n){throw new Error("failed to call initLogConstructor")}function y(t){return m.user||(m.user=w()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(m.user.win,t)?m.userForEmbed||(m.userForEmbed=w()):m.user}function w(t){return b()}function j(){return m.dev||(m.dev=b())}function g(t,n,i,r,e,o,u,s,f,a,c){return t}function O(t,n,i,r,e,o,u,s,f,a,c){return y().assert(t,n,i,r,e,o,u,s,f,a,c)}function I(t,n){return x(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function S(t,n){return function(t,n){var i=C(t,n);if(i)return i;var r,e,u,s,f=U(t);return f[n]=(e=(r=new o).promise,u=r.reject,s=r.resolve,e.catch((function(){})),{obj:null,promise:e,resolve:s,reject:u,context:null,ctor:null}),f[n].promise}(R(t),n)}function E(t,n){return C(R(t),n)}function P(t){return t.nodeType?(i=t,n=(i.ownerDocument||i).defaultView,I(n,"ampdoc")).getAmpDoc(t):t;var n,i}function R(t){var n=P(t);return n.isSingleDoc()?n.win:n}function x(t,n){g(A(t,n));var i=U(t)[n];return i.obj||(g(i.ctor),g(i.context),i.obj=new i.ctor(i.context),g(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function C(t,n){var i=U(t)[n];return i?i.promise?i.promise:(x(t,n),i.promise=Promise.resolve(i.obj)):null}function U(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function A(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var T,F,N=function(t){return I(t,"xhr")},k="notificationUIManager",G=function(){function t(){this.g2=0,this.b2=e(),this.w2=function(){},this.I2=function(){}}var n=t.prototype;return n.onQueueEmpty=function(t){this.w2=t,0==this.g2&&t()},n.onQueueNotEmpty=function(t){this.I2=t,this.g2>0&&t()},n.registerUI=function(t){var n=this;0==this.g2&&this.I2(),this.g2++;var i=this.b2.then((function(){return t().then((function(){n.g2--,0==n.g2&&n.w2()}))}));return this.b2=i,i},t}(),M=function(){function t(t){this.Lt=t,this.Ht=0,this.Ft=0,this.Gt=Object.create(null)}var n=t.prototype;return n.has=function(t){return!!this.Gt[t]},n.get=function(t){var n=this.Gt[t];if(n)return n.access=++this.Ft,n.payload},n.put=function(t,n){this.has(t)||this.Ht++,this.Gt[t]={payload:n,access:this.Ft},this.zt()},n.zt=function(){if(!(this.Ht<=this.Lt)){var t,n=this.Gt,i=this.Ft+1;for(var r in n){var e=n[r].access;e<i&&(i=e,t=r)}void 0!==t&&(delete n[t],this.Ht--)}},t}(),B=(new Set(["c","v","a","ad"]),function(t){return"string"==typeof t?function(t,n){return T||(T=self.document.createElement("a"),F=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new M(100))),function(t,n,i){if(i&&i.has(n))return i.get(n);t.href=n,t.protocol||(t.href=t.href);var r,e={href:t.href,protocol:t.protocol,host:t.host,hostname:t.hostname,port:"0"==t.port?"":t.port,pathname:t.pathname,search:t.search,hash:t.hash,origin:null};"/"!==e.pathname[0]&&(e.pathname="/"+e.pathname),("http:"==e.protocol&&80==e.port||"https:"==e.protocol&&443==e.port)&&(e.port="",e.host=e.hostname),r=t.origin&&"null"!=t.origin?t.origin:"data:"!=e.protocol&&e.host?e.protocol+"//"+e.host:e.href,e.origin=r;var o=e;return i&&i.put(n,o),o}(T,t,F)}(t):t});function D(t){return"https:"==(t=B(t)).protocol||"localhost"==t.hostname||"127.0.0.1"==t.hostname||(i=".localhost",(r=(n=t.hostname).length-i.length)>=0&&n.indexOf(i,r)==r);var n,i,r}function L(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return O(null!=t,"%s %s must be available",n,i),O(D(t)||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',n,i,t),t}var q="amp-user-notification",z="userNotificationManager",$=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&s(t,n)}(h,t);var n,i,r=(n=h,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=f(n);if(i){var e=f(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return a(this,t)});function h(t){var n;(n=r.call(this,t)).tvt=null,n.nvt=null;var i=new o;return n.ivt=i.promise,n.rvt=i.resolve,n.evt=null,n.ovt=!1,n.uvt=null,n.svt=null,n.fvt=null,n.avt=null,n.D2="",n.R2=null,n.nk=null,n}var l=h.prototype;return l.isAlwaysFixed=function(){return!0},l.buildCallback=function(){var t,n,i,r=this,e=this.getAmpDoc();this.nk=(t=this.element,n="url-replace",A(i=R(P(t)),n)?x(i,n):null),this.R2=S(this.element,"storage"),this.nvt=O(this.element.id,"amp-user-notification should have an id."),this.D2="amp-user-notification:"+this.nvt,this.uvt=this.element.getAttribute("data-show-if-geo"),this.svt=this.element.getAttribute("data-show-if-not-geo"),this.avt=this.element.getAttribute("data-show-if-href"),this.avt&&L(this.avt,this.element),O(!!this.avt+!!this.uvt+!!this.svt<=1,'Only one "data-show-if-*" attribute allowed'),this.uvt&&(this.fvt=this.cvt(this.uvt,!0)),this.svt&&(this.fvt=this.cvt(this.svt,!1)),this.evt=this.element.getAttribute("data-dismiss-href"),this.evt&&L(this.evt,this.element),this.element.getAttribute("role")||this.element.setAttribute("role","alert");var o=this.element.getAttribute("data-persist-dismissal");this.ovt="false"!=o&&"no"!=o,this.registerDefaultAction((function(){return r.dismiss(!1)}),"dismiss"),this.registerAction("optoutOfCid",(function(){return r.hvt()})),S(e,z).then((function(t){t.registerUserNotification(r.nvt,r)}))},l.cvt=function(t,n){return(i=this.element,function(t,n,i,r){var e=E(t,n);if(e)return e;var o=P(t);return o.whenExtensionsKnown().then((function(){var t=o.getExtensionVersion(i);return t?I(o.win,"extensions").waitForExtension(i,t):null})).then((function(i){return i?E(t,n):null}))}(i,"geo","amp-geo")).then((function(i){O(i,"requires <amp-geo> to use promptIfUnknownForGeoGroup");var r=t.split(/,\s*/).filter((function(t){return 2==i.isInCountryGroup(t)}));return!!(n?r.length:!r.length)}));var i},l.lvt=function(t){var n=this,i=this.avt;return this.nk.expandUrlAsync(i).then((function(i){return function(t,n,i){if(!n)return t;var r=t.split("#",2),e=r[0].split("?",2);return e[0]+(e[1]?"?".concat(e[1],"&").concat(n):"?".concat(n))+(r[1]?"#".concat(r[1]):"")}(i,function(t){var n,i,r,e=[];for(var o in t){var u=t[o];if(null!=u){u=c(r=u)?r:[r];for(var s=0;s<u.length;s++)e.push((n=o,i=u[s],"".concat(encodeURIComponent(n),"=").concat(encodeURIComponent(i))))}}return e.join("&")}({"elementId":n.nvt,"ampUserId":t}))}))},l.vvt=function(t){var n=this;return this.tvt=t,this.lvt(t).then((function(t){return N(n.win).fetchJson(t,{credentials:"include"}).then((function(t){return t.json()}))}))},l.dvt=function(){var t=this.element.getAttribute("enctype")||"application/json;charset=utf-8";return N(this.win).fetchJson(this.evt,this.pvt(t,this.nvt,this.tvt))},l.pvt=function(t,n,i){return{method:"POST",credentials:"include",body:{"elementId":n,"ampUserId":i},headers:{"Content-Type":t}}},l.mvt=function(t){return O("boolean"==typeof t.showNotification,'`showNotification` should be a boolean. Got "%s" which is of type %s.',t.showNotification,u(t.showNotification)),t.showNotification||this.rvt(),Promise.resolve(t.showNotification)},l.hvt=function(){var t=this;return this.bvt().then((function(t){return t.optOut()})).then((function(){return t.dismiss(!1)}),(function(n){j().error(q,"Failed to opt out of Cid",n),t.dismiss(!0)}))},l.yvt=function(){var t=this;return this.bvt().then((function(n){return n.get({scope:q,createCookieIfNotPresent:!0},e(),t.ivt)}))},l.bvt=function(){return S(this.element,"cid")},l.shouldShow=function(){var t=this;return this.isDismissed().then((function(n){return!n&&(t.avt?t.wvt():!t.fvt||t.fvt)}))},l.wvt=function(){return this.yvt().then(this.vvt.bind(this)).then(this.mvt.bind(this))},l.show=function(){var t,n;return t=this.element,void 0===(n=!0)&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden",""),this.element.classList.add("amp-active"),this.getViewport().addToFixedLayer(this.element),this.ivt},l.isDismissed=function(){var t=this;return this.ovt?this.R2.then((function(n){return n.get(t.D2)})).then((function(t){return!!t}),(function(t){return j().error(q,"Failed to read storage",t),!1})):Promise.resolve(!1)},l.dismiss=function(t){var n=this;this.element.classList.remove("amp-active"),this.element.classList.add("amp-hidden"),this.rvt(),this.getViewport().removeFromFixedLayer(this.element),this.ovt&&!t&&this.R2.then((function(t){t.set(n.D2,!0)})),this.evt&&this.dvt()},h}(t.BaseElement),H=function(){function t(t){this.ampdoc=t,this.rt=Object.create(null),this.jvt=Object.create(null),this.gvt=this.ampdoc.whenReady(),this.Ovt=Promise.all([this.ampdoc.whenFirstVisible(),this.gvt]),this.Ivt=S(this.ampdoc,k)}var n=t.prototype;return n.get=function(t){var n=this;return this.Ovt.then((function(){null==n.ampdoc.getElementById(t)&&y().warn(q,"Did not find amp-user-notification element ".concat(t,"."))})),this.Svt(t).promise},n.getNotification=function(t){var n=this;return this.gvt.then((function(){return n.rt[t]}))},n.registerUserNotification=function(t,n){var i=this;this.rt[t]=n;var r=this.Svt(t);return this.Ovt.then((function(){return n.shouldShow()})).then((function(t){if(t)return i.Ivt.then((function(t){return t.registerUI(n.show.bind(n))}))})).then(r.resolve.bind(this,n)).catch(p.bind(null,"Notification service failed amp-user-notification",t))},n.Svt=function(t){if(this.jvt[t])return this.jvt[t];var n=new o,i=n.promise,r=n.resolve;return this.jvt[t]={promise:i,resolve:r}},t}();t.registerServiceForDoc(z,H),t.registerServiceForDoc(k,G),t.registerElement(q,$,"amp-user-notification{position:fixed!important;bottom:0;left:0;overflow:hidden!important;visibility:hidden;background:hsla(0,0%,100%,0.7);z-index:1000;width:100%}amp-user-notification.amp-active{visibility:visible}amp-user-notification.amp-hidden{visibility:hidden}\n/*# sourceURL=/extensions/amp-user-notification/0.1/amp-user-notification.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-user-notification-0.1.js.map