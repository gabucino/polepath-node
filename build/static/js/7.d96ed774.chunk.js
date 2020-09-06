(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[7],{1033:function(e,a,t){"use strict";var n=t(1),l=t(5),r=t(0),c=t.n(r),o=(t(2),t(3)),i=t(10),s=t(155),m=c.a.forwardRef((function(e,a){var t=e.action,r=e.avatar,i=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,u=e.disableTypography,b=void 0!==u&&u,f=e.subheader,v=e.subheaderTypographyProps,y=e.title,g=e.titleTypographyProps,x=Object(l.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),j=y;null==j||j.type===s.a||b||(j=c.a.createElement(s.a,Object(n.a)({variant:r?"body2":"h5",className:i.title,component:"span",display:"block"},g),j));var h=f;return null==h||h.type===s.a||b||(h=c.a.createElement(s.a,Object(n.a)({variant:r?"body2":"body1",className:i.subheader,color:"textSecondary",component:"span",display:"block"},v),h)),c.a.createElement(p,Object(n.a)({className:Object(o.default)(i.root,m),ref:a},x),r&&c.a.createElement("div",{className:i.avatar},r),c.a.createElement("div",{className:i.content},j,h),t&&c.a.createElement("div",{className:i.action},t))}));a.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(m)},1081:function(e,a,t){"use strict";var n=t(1),l=t(5),r=t(0),c=t.n(r),o=(t(2),t(3)),i=t(10),s=c.a.forwardRef((function(e,a){var t=e.classes,r=e.className,i=e.dividers,s=void 0!==i&&i,m=Object(l.a)(e,["classes","className","dividers"]);return c.a.createElement("div",Object(n.a)({className:Object(o.default)(t.root,r,s&&t.dividers),ref:a},m))}));a.a=Object(i.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)},1106:function(e,a,t){"use strict";t.r(a);var n=t(19),l=t(979),r=t(980),c=t(1033),o=t(95),i=t.n(o),s=t(0),m=t.n(s),d=t(960),p=t(219),u=t(3),b=t(959),f=t(983),v=t(1081),y=t(982),g=t(958),x=t(192),j=t(8),h=t(42);function E(e){var a=Object(s.useState)(!1),t=Object(n.a)(a,2),r=t[0],c=t[1],o=Object(s.useState)(!0),d=Object(n.a)(o,2),p=d[0],u=d[1],E=Object(s.useRef)(null),O=Object(s.useState)(null),N=Object(n.a)(O,2),w=N[0],k=N[1],S=Object(s.useState)(""),T=Object(n.a)(S,2),C=T[0],I=T[1],M=Object(j.b)();return Object(s.useEffect)((function(){w&&("image/jpeg"!==w.type&&"image/jpg"!==w.type&&"image/png"!==w.type?(I("Image extension must be one of the following: jpg, jpeg, png"),u(!1)):(I(""),u(!0)))}),[w]),m.a.createElement(b.a,{open:"newMove"===e.open,onClose:e.close,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},m.a.createElement(y.a,{id:"alert-dialog-title"},"Add a new move"),m.a.createElement(v.a,null,m.a.createElement(i.a,{onValidSubmit:function(a){var t=new FormData;t.append("name",a.name),t.append("otherNames",a.otherNames),t.append("level",a.level),t.append("description",a.description),t.append("image",w),M(h.createMove(t)),e.close()},onValid:function(){c(!0)},onInvalid:function(){c(!1)},ref:E,className:"flex flex-col justify-center p-16"},m.a.createElement(x.c,{className:"mb-16",type:"text",name:"name",label:"Name",required:!0,variant:"outlined"}),m.a.createElement(x.c,{className:"my-16",type:"text",name:"otherNames",label:"Other names",variant:"outlined"}),m.a.createElement(x.b,{className:"my-16",name:"level",label:"Difficulty",value:"",variant:"outlined",required:!0},m.a.createElement(g.a,{value:"Beginner"},"Beginner"),m.a.createElement(g.a,{value:"Intermediate"},"Intermediate"),m.a.createElement(g.a,{value:"Advanced"},"Advanced")),m.a.createElement(x.c,{className:"my-16",type:"text",multiline:!0,rows:"4",variant:"outlined",name:"description",label:"Description"}),C?m.a.createElement("p",{className:"text-red"}," ",C," "):"",m.a.createElement("label",{for:"file",className:"mb-8 text-grey-700 text-opacity-0"},"Upload main photo"),m.a.createElement("input",{type:"file",name:"file",onChange:function(e){k(e.target.files[0])}}),m.a.createElement(l.a,{type:"submit",variant:"contained",color:"primary",className:"mx-auto mt-32 mb-80","aria-label":"LOG IN",disabled:!r||!p},"Submit"))),m.a.createElement(f.a,null,m.a.createElement(l.a,{onClick:e.close,color:"primary",autoFocus:!0},"Cancel")))}var O=Object(d.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(p.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText},card:{maxHeight:"80vh"},button:{width:"70%"}}}));a.default=function(){Object(s.useRef)(null);var e=Object(s.useState)(null),a=Object(n.a)(e,2),t=a[0],o=a[1],i=O(),d=function(e){o(e)};return m.a.createElement(s.Fragment,null,m.a.createElement("div",{className:Object(u.default)(i.root,"flex flex-col justify-center flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")},m.a.createElement(r.a,{className:Object(u.default)(i.card,"flex justify-center py-20 flex-col w-full max-w-400 mx-auto m-16 md:m-0")},m.a.createElement(c.a,{className:"text-center",title:"What would you like to do?"}),m.a.createElement(l.a,{onClick:function(){return d("newMove")},variant:"outlined",color:"primary",className:Object(u.default)(i.card,"my-8 mx-20")},"Add a new move")," ",m.a.createElement(l.a,{variant:"outlined",color:"primary",className:"my-8 mx-20 w-auto"},"More admin actions...")," ")),m.a.createElement(E,{open:t,close:function(){d(null)}}))}}}]);