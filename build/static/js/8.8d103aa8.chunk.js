/*! For license information please see 8.8d103aa8.chunk.js.LICENSE.txt */
(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[8],{1203:function(t,e,r){"use strict";r.r(e);var n=r(189),a=r(1080),o=r(1081),i=r(1058),c=r(247),l=r(184),s=r(3),u=r(0),f=r.n(u),p=r(23),m=r(270),h=r(7),d=r(19),g=r(187),y=r(1078),v=r(1053),x=r(1052),w=r(94),b=r.n(w),E=r(9),L=r(95),N=r(487),j=r(14);function O(){O=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=l;var u={};function f(){}function p(){}function m(){}var h={};c(h,a,(function(){return this}));var d=Object.getPrototypeOf,g=d&&d(d(N([])));g&&g!==e&&r.call(g,a)&&(h=g);var y=m.prototype=f.prototype=Object.create(h);function v(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=m,c(y,"constructor",m),c(m,"constructor",p),p.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},v(x.prototype),c(x.prototype,o,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new x(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},v(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}var k=Object(i.a)((function(t){return{facebookButton:{background:"#3b5998",padding:"0.5rem",color:"white",width:"100%",height:"39px",border:"1px",marginTop:"15px",borderRadius:"2px",fontSize:"14px"},googleButton:{marginTop:"15px",backgroundColor:"rgb(255, 255, 255)",display:"inline-flex",alignItems:"center",color:"rgba(0, 0, 0, 0.54)",boxShadow:"rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",padding:"0px",borderRadius:"2px",border:"1px solid transparent",fontSize:"14px",fontWeight:500,fontFamily:"Roboto, sans-serif",cursor:"pointer",opacity:"0.9",height:"39px",justifyContent:"center"},googleIcon:{marginRight:"1rem",color:t.palette.primary.main},googleSpan:{color:t.palette.primary.main,marginLeft:"4px"}}}));var _=function(t){var e=Object(E.b)(),r=Object(E.c)((function(t){return t.auth.login})),n=Object(u.useState)(!1),a=Object(d.a)(n,2),o=a[0],i=a[1],c=Object(u.useState)(!1),l=Object(d.a)(c,2),p=l[0],w=l[1],_=Object(u.useRef)(null),S=k(t);function I(){i(!1)}function G(){return(G=Object(m.a)(O().mark((function t(r){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),t.next=3,e(j.r(r));case 3:!0===t.sent?L.a.push("/welcome"):w(!1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(u.useEffect)((function(){r.error&&(r.error.username||r.error.password)&&(_.current.updateInputsWithError(Object(h.a)({},r.error)),I())}),[r.error]);var P=function(){var t=Object(m.a)(O().mark((function t(r){return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.error){t.next=3;break}return t.next=3,e(j.s(r.wc.access_token));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return f.a.createElement("div",{className:"w-full"},f.a.createElement(b.a,{onValidSubmit:function(t){return G.apply(this,arguments)},onValid:function(){i(!0)},onInvalid:I,ref:_,className:"flex flex-col justify-center w-full"},f.a.createElement(g.c,{className:"mb-16",type:"text",name:"email",label:"Email",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:f.a.createElement(x.a,{position:"end"},f.a.createElement(v.a,{className:"text-20",color:"action"},"email"))},variant:"outlined",required:!0}),f.a.createElement(g.c,{className:"mb-16",type:"password",name:"password",label:"Password",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:f.a.createElement(x.a,{position:"end"},f.a.createElement(v.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0}),f.a.createElement(y.a,{type:"submit",variant:"contained",color:"primary",className:"w-full mx-auto normal-case mt-16","aria-label":"LOG IN",disabled:!o||p,value:"firebase"},p?"Loading...":"Login"),f.a.createElement(N.GoogleLogin,{clientId:"397855449446-7bsrsins5fj29j67bnes4cd0np2lve6f.apps.googleusercontent.com",render:function(t){return f.a.createElement("button",{onClick:t.onClick,className:S.googleButton},f.a.createElement("i",{className:Object(s.a)(S.googleIcon,"fab fa-google")}),"Sign in with ",f.a.createElement("span",{className:S.googleSpan}," Google"))},onSuccess:P,onFailure:P,cookiePolicy:"single_host_origin"})))},S=Object(i.a)((function(t){return{root:{background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(Object(c.darken)(t.palette.primary.dark,.5)," 100%)"),color:t.palette.primary.contrastText}}}));e.default=function(){var t=S();return f.a.createElement("div",{className:Object(s.a)(t.root,"flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")},f.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},f.a.createElement(n.a,{animation:"transition.expandIn"},f.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.png",alt:"logo"})),f.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},f.a.createElement(l.a,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to PolePath!")),f.a.createElement(n.a,{delay:400},f.a.createElement(l.a,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"A supporting community, no matter where you are on your way from zero to hero."))),f.a.createElement(n.a,{animation:{translateX:[0,"100%"]}},f.a.createElement(a.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},f.a.createElement(o.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},f.a.createElement(l.a,{variant:"h6",className:"text-center md:w-full mb-48"},"LOGIN TO YOUR ACCOUNT"),f.a.createElement(_,null),f.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32"},f.a.createElement("span",{className:"font-medium"},"Don't have an account?"),f.a.createElement(p.a,{className:"font-medium mt-8",to:"/forgot-password"},"Forgot your password?"),f.a.createElement(p.a,{className:"font-medium mt-8",to:"/users/new"},"Create an account"),f.a.createElement(p.a,{className:"font-medium mt-8",to:"/"},"Back to Dashboard"))))))}}}]);