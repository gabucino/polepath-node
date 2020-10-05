(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[5],{1e3:function(e,a,t){"use strict";var n=t(1),l=t(5),r=t(0),c=t.n(r),i=(t(2),t(3)),o=t(10),s=c.a.forwardRef((function(e,a){var t=e.disableSpacing,r=void 0!==t&&t,o=e.classes,s=e.className,m=Object(l.a)(e,["disableSpacing","classes","className"]);return c.a.createElement("div",Object(n.a)({className:Object(i.default)(o.root,s,!r&&o.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},1016:function(e,a,t){"use strict";var n=t(1),l=t(5),r=t(0),c=t.n(r),i=(t(2),t(3)),o=t(10),s=t(181),m=c.a.forwardRef((function(e,a){var t=e.action,r=e.avatar,o=e.classes,m=e.className,d=e.component,p=void 0===d?"div":d,u=e.disableTypography,f=void 0!==u&&u,b=e.subheader,v=e.subheaderTypographyProps,g=e.title,y=e.titleTypographyProps,j=Object(l.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=g;null==x||x.type===s.a||f||(x=c.a.createElement(s.a,Object(n.a)({variant:r?"body2":"h5",className:o.title,component:"span",display:"block"},y),x));var h=b;return null==h||h.type===s.a||f||(h=c.a.createElement(s.a,Object(n.a)({variant:r?"body2":"body1",className:o.subheader,color:"textSecondary",component:"span",display:"block"},v),h)),c.a.createElement(p,Object(n.a)({className:Object(i.default)(o.root,m),ref:a},j),r&&c.a.createElement("div",{className:o.avatar},r),c.a.createElement("div",{className:o.content},x,h),t&&c.a.createElement("div",{className:o.action},t))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(m)},1064:function(e,a,t){"use strict";var n=t(1),l=t(5),r=t(0),c=t.n(r),i=(t(2),t(3)),o=t(10),s=c.a.forwardRef((function(e,a){var t=e.classes,r=e.className,o=e.dividers,s=void 0!==o&&o,m=Object(l.a)(e,["classes","className","dividers"]);return c.a.createElement("div",Object(n.a)({className:Object(i.default)(t.root,r,s&&t.dividers),ref:a},m))}));a.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)},1081:function(e,a,t){"use strict";t.r(a);var n=t(21),l=t(962),r=t(964),c=t(1016),i=t(0),o=t.n(i),s=t(944),m=t(212),d=t(3),p=t(943),u=t(1e3),f=t(1064),b=t(989),v=t(942),g=t(95),y=t.n(g),j=t(187),x=t(9),h=t(13);function O(e){var a=Object(i.useState)(!1),t=Object(n.a)(a,2),r=t[0],c=t[1],s=Object(i.useState)(!0),m=Object(n.a)(s,2),d=m[0],g=m[1],O=Object(i.useRef)(null),N=Object(i.useState)(null),E=Object(n.a)(N,2),w=E[0],k=E[1],T=Object(i.useState)(""),S=Object(n.a)(T,2),C=S[0],I=S[1],M=Object(x.b)();return Object(i.useEffect)((function(){w&&("image/jpeg"!==w.type&&"image/jpg"!==w.type&&"image/png"!==w.type?(I("Image extension must be one of the following: jpg, jpeg, png"),g(!1)):(I(""),g(!0)))}),[w]),o.a.createElement(p.a,{open:"newMove"===e.open,onClose:e.close,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},o.a.createElement(b.a,{id:"alert-dialog-title"},"Add a new move"),o.a.createElement(f.a,null,o.a.createElement(y.a,{onValidSubmit:function(a){var t=new FormData;t.append("name",a.name),t.append("otherNames",a.otherNames?a.otherNames:""),t.append("level",a.level),t.append("description",a.description),t.append("image",w),M(h.l(t)),e.close()},onValid:function(){c(!0)},onInvalid:function(){c(!1)},ref:O,className:"flex flex-col justify-center p-16"},o.a.createElement(j.c,{className:"mb-16",type:"text",name:"name",label:"Name",required:!0,variant:"outlined"}),o.a.createElement(j.c,{className:"my-16",type:"text",name:"otherNames",label:"Other names",variant:"outlined"}),o.a.createElement(j.b,{className:"my-16",name:"level",label:"Difficulty",value:"",variant:"outlined",required:!0},o.a.createElement(v.a,{value:"Beginner"},"Beginner"),o.a.createElement(v.a,{value:"Intermediate"},"Intermediate"),o.a.createElement(v.a,{value:"Advanced"},"Advanced")),o.a.createElement(j.c,{className:"my-16",type:"text",multiline:!0,rows:"4",variant:"outlined",name:"description",label:"Description"}),C?o.a.createElement("p",{className:"text-red"}," ",C," "):"",o.a.createElement("label",{for:"file",className:"mb-8 text-grey-700 text-opacity-0"},"Upload main photo"),o.a.createElement("input",{type:"file",name:"file",onChange:function(e){k(e.target.files[0])}}),o.a.createElement(l.a,{type:"submit",variant:"contained",color:"primary",className:"mx-auto mt-32 mb-80","aria-label":"LOG IN",disabled:!r||!d},"Submit"))),o.a.createElement(u.a,null,o.a.createElement(l.a,{onClick:e.close,color:"primary",autoFocus:!0},"Cancel")))}var N=Object(s.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(m.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText},card:{maxHeight:"80vh"},button:{width:"70%"}}}));a.default=function(){var e=Object(i.useState)(null),a=Object(n.a)(e,2),t=a[0],s=a[1],m=N(),p=function(e){s(e)};return o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:Object(d.default)(m.root,"flex flex-col justify-center flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")},o.a.createElement(r.a,{className:Object(d.default)(m.card,"flex justify-center py-20 flex-col w-full max-w-400 mx-auto m-16 md:m-0")},o.a.createElement(c.a,{className:"text-center",title:"What would you like to do?"}),o.a.createElement(l.a,{onClick:function(){return p("newMove")},variant:"outlined",color:"primary",className:Object(d.default)(m.card,"my-8 mx-20")},"Add a new move")," ",o.a.createElement(l.a,{variant:"outlined",color:"primary",className:"my-8 mx-20 w-auto"},"More admin actions...")," ")),o.a.createElement(O,{open:t,close:function(){p(null)}}))}},989:function(e,a,t){"use strict";var n=t(1),l=t(5),r=t(0),c=t.n(r),i=(t(2),t(3)),o=t(10),s=t(181),m=c.a.forwardRef((function(e,a){var t=e.children,r=e.classes,o=e.className,m=e.disableTypography,d=void 0!==m&&m,p=Object(l.a)(e,["children","classes","className","disableTypography"]);return c.a.createElement("div",Object(n.a)({className:Object(i.default)(r.root,o),ref:a},p),d?t:c.a.createElement(s.a,{component:"h2",variant:"h6"},t))}));a.a=Object(o.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(m)}}]);