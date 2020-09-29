(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[5],{1016:function(e,a,t){"use strict";var n=t(1),l=t(5),r=t(0),c=t.n(r),o=(t(2),t(3)),i=t(10),s=t(152),m=c.a.forwardRef((function(e,a){var t=e.action,r=e.avatar,i=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,u=e.disableTypography,b=void 0!==u&&u,f=e.subheader,v=e.subheaderTypographyProps,y=e.title,g=e.titleTypographyProps,x=Object(l.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),j=y;null==j||j.type===s.a||b||(j=c.a.createElement(s.a,Object(n.a)({variant:r?"body2":"h5",className:i.title,component:"span",display:"block"},g),j));var h=f;return null==h||h.type===s.a||b||(h=c.a.createElement(s.a,Object(n.a)({variant:r?"body2":"body1",className:i.subheader,color:"textSecondary",component:"span",display:"block"},v),h)),c.a.createElement(p,Object(n.a)({className:Object(o.default)(i.root,m),ref:a},x),r&&c.a.createElement("div",{className:i.avatar},r),c.a.createElement("div",{className:i.content},j,h),t&&c.a.createElement("div",{className:i.action},t))}));a.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(m)},1064:function(e,a,t){"use strict";var n=t(1),l=t(5),r=t(0),c=t.n(r),o=(t(2),t(3)),i=t(10),s=c.a.forwardRef((function(e,a){var t=e.classes,r=e.className,i=e.dividers,s=void 0!==i&&i,m=Object(l.a)(e,["classes","className","dividers"]);return c.a.createElement("div",Object(n.a)({className:Object(o.default)(t.root,r,s&&t.dividers),ref:a},m))}));a.a=Object(i.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)},1080:function(e,a,t){"use strict";t.r(a);var n=t(21),l=t(964),r=t(966),c=t(1016),o=t(0),i=t.n(o),s=t(946),m=t(212),d=t(3),p=t(945),u=t(969),b=t(1064),f=t(968),v=t(944),y=t(95),g=t.n(y),x=t(205),j=t(8),h=t(13);function E(e){var a=Object(o.useState)(!1),t=Object(n.a)(a,2),r=t[0],c=t[1],s=Object(o.useState)(!0),m=Object(n.a)(s,2),d=m[0],y=m[1],E=Object(o.useRef)(null),O=Object(o.useState)(null),N=Object(n.a)(O,2),w=N[0],k=N[1],S=Object(o.useState)(""),T=Object(n.a)(S,2),C=T[0],I=T[1],M=Object(j.b)();return Object(o.useEffect)((function(){w&&("image/jpeg"!==w.type&&"image/jpg"!==w.type&&"image/png"!==w.type?(I("Image extension must be one of the following: jpg, jpeg, png"),y(!1)):(I(""),y(!0)))}),[w]),i.a.createElement(p.a,{open:"newMove"===e.open,onClose:e.close,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(f.a,{id:"alert-dialog-title"},"Add a new move"),i.a.createElement(b.a,null,i.a.createElement(g.a,{onValidSubmit:function(a){var t=new FormData;t.append("name",a.name),t.append("otherNames",a.otherNames?a.otherNames:""),t.append("level",a.level),t.append("description",a.description),t.append("image",w),M(h.l(t)),e.close()},onValid:function(){c(!0)},onInvalid:function(){c(!1)},ref:E,className:"flex flex-col justify-center p-16"},i.a.createElement(x.b,{className:"mb-16",type:"text",name:"name",label:"Name",required:!0,variant:"outlined"}),i.a.createElement(x.b,{className:"my-16",type:"text",name:"otherNames",label:"Other names",variant:"outlined"}),i.a.createElement(x.a,{className:"my-16",name:"level",label:"Difficulty",value:"",variant:"outlined",required:!0},i.a.createElement(v.a,{value:"Beginner"},"Beginner"),i.a.createElement(v.a,{value:"Intermediate"},"Intermediate"),i.a.createElement(v.a,{value:"Advanced"},"Advanced")),i.a.createElement(x.b,{className:"my-16",type:"text",multiline:!0,rows:"4",variant:"outlined",name:"description",label:"Description"}),C?i.a.createElement("p",{className:"text-red"}," ",C," "):"",i.a.createElement("label",{for:"file",className:"mb-8 text-grey-700 text-opacity-0"},"Upload main photo"),i.a.createElement("input",{type:"file",name:"file",onChange:function(e){k(e.target.files[0])}}),i.a.createElement(l.a,{type:"submit",variant:"contained",color:"primary",className:"mx-auto mt-32 mb-80","aria-label":"LOG IN",disabled:!r||!d},"Submit"))),i.a.createElement(u.a,null,i.a.createElement(l.a,{onClick:e.close,color:"primary",autoFocus:!0},"Cancel")))}var O=Object(s.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(m.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText},card:{maxHeight:"80vh"},button:{width:"70%"}}}));a.default=function(){var e=Object(o.useState)(null),a=Object(n.a)(e,2),t=a[0],s=a[1],m=O(),p=function(e){s(e)};return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:Object(d.default)(m.root,"flex flex-col justify-center flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")},i.a.createElement(r.a,{className:Object(d.default)(m.card,"flex justify-center py-20 flex-col w-full max-w-400 mx-auto m-16 md:m-0")},i.a.createElement(c.a,{className:"text-center",title:"What would you like to do?"}),i.a.createElement(l.a,{onClick:function(){return p("newMove")},variant:"outlined",color:"primary",className:Object(d.default)(m.card,"my-8 mx-20")},"Add a new move")," ",i.a.createElement(l.a,{variant:"outlined",color:"primary",className:"my-8 mx-20 w-auto"},"More admin actions...")," ")),i.a.createElement(E,{open:t,close:function(){p(null)}}))}}}]);