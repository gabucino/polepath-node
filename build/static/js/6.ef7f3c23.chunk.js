(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[6],{1070:function(e,a,t){"use strict";var n=t(261);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(332)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("circle",{cx:"15.5",cy:"9.5",r:"1.5"}),r.default.createElement("circle",{cx:"8.5",cy:"9.5",r:"1.5"}),r.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52z"})),"SentimentDissatisfied");a.default=o},1071:function(e,a,t){"use strict";var n=t(261);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(332)).default)(r.default.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}),"InsertEmoticon");a.default=o},1088:function(e,a,t){"use strict";t.r(a);var n=t(21),r=t(188),o=t(337),l=t(30),i=t(1),c=t(408),s=t(407),d=t(241),u=t(409);var m=t(103),p=t(5),f=t(0),b=t.n(f),x=(t(112),t(2),t(3)),h=t(957),v=t(182),g=t(10);var E=b.a.createContext({}),j=t(135),O=b.a.forwardRef((function(e,a){var t,n=e.children,r=e.classes,o=e.className,l=e.defaultExpanded,f=void 0!==l&&l,g=e.disabled,O=void 0!==g&&g,y=e.expanded,w=e.onChange,N=e.square,S=void 0!==N&&N,C=e.TransitionComponent,R=void 0===C?h.a:C,q=e.TransitionProps,k=Object(p.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),T=Object(j.a)({controlled:y,default:f,name:"ExpansionPanel"}),B=Object(m.a)(T,2),M=B[0],I=B[1],P=b.a.useCallback((function(e){I(!M),w&&w(e,!M)}),[M,w,I]),$=b.a.Children.toArray(n),z=(t=$,Object(c.a)(t)||Object(s.a)(t)||Object(d.a)(t)||Object(u.a)()),_=z[0],F=z.slice(1),D=b.a.useMemo((function(){return{expanded:M,disabled:O,toggle:P}}),[M,O,P]);return b.a.createElement(v.a,Object(i.a)({className:Object(x.default)(r.root,o,M&&r.expanded,O&&r.disabled,!S&&r.rounded),ref:a,square:S},k),b.a.createElement(E.Provider,{value:D},_),b.a.createElement(R,Object(i.a)({in:M,timeout:"auto"},q),b.a.createElement("div",{"aria-labelledby":_.props.id,id:_.props["aria-controls"],role:"region"},F)))})),y=Object(g.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],a)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(O),w=b.a.forwardRef((function(e,a){var t=e.classes,n=e.className,r=Object(p.a)(e,["classes","className"]);return b.a.createElement("div",Object(i.a)({className:Object(x.default)(t.root,n),ref:a},r))})),N=Object(g.a)({root:{display:"flex",padding:"8px 24px 24px"}},{name:"MuiExpansionPanelDetails"})(w),S=t(259),C=t(891),R=b.a.forwardRef((function(e,a){var t=e.children,n=e.classes,r=e.className,o=e.expandIcon,l=e.IconButtonProps,c=e.onBlur,s=e.onClick,d=e.onFocusVisible,u=Object(p.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),m=b.a.useState(!1),f=m[0],h=m[1],v=b.a.useContext(E),g=v.disabled,j=void 0!==g&&g,O=v.expanded,y=v.toggle;return b.a.createElement(S.a,Object(i.a)({focusRipple:!1,disableRipple:!0,disabled:j,component:"div","aria-expanded":O,className:Object(x.default)(n.root,r,j&&n.disabled,O&&n.expanded,f&&n.focused),onFocusVisible:function(e){h(!0),d&&d(e)},onBlur:function(e){h(!1),c&&c(e)},onClick:function(e){y&&y(e),s&&s(e)},ref:a},u),b.a.createElement("div",{className:Object(x.default)(n.content,O&&n.expanded)},t),o&&b.a.createElement(C.a,Object(i.a)({className:Object(x.default)(n.expandIcon,O&&n.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},l),o))})),q=Object(g.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],a),padding:"0 24px 0 24px","&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.grey[300]},"&$disabled":{opacity:.38}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],a),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(R),k=t(939),T=t(890),B=t(944),M=t(181),I=t(962),P=t(55),$=t.n(P),z=t(1070),_=t.n(z),F=t(1071),D=t.n(F),L=t(943),A=t(942),V=t(991),H=t(984),W=t(9),Q=t(16),U=t(95),J=t.n(U),G=t(184);function Y(e){var a=Object(W.b)(),t=Object(f.useState)(!1),r=Object(n.a)(t,2),o=r[0],l=r[1],i=Object(f.useState)(!1),c=Object(n.a)(i,2),s=c[0],d=c[1];return b.a.createElement("div",null,b.a.createElement(L.a,{open:e.open,onClose:e.close,"aria-labelledby":"form-dialog-title"},b.a.createElement(H.a,{id:"form-dialog-title"},"New item"),b.a.createElement(V.a,null,b.a.createElement(J.a,{onValidSubmit:function(t){console.log("entering here?"),l(!0);var n={question:t.question,answer:t.answer,faqType:t.faqType};$.a.put("".concat("http://www.polepath.com/api","/faq/addfaq"),n).then((function(a){console.log(a),l(!1),e.close()})).catch((function(e){console.log(e.response),l(!1),a(Object(Q.D)({message:e.response&&e.response.data.message?e.response.data.message:"Something went wrong :(",variant:"error"}))}))},onValid:function(){return d(!0)},onInvalid:function(){return d(!1)},className:"flex flex-col justify-center p-8"},b.a.createElement(G.b,{name:"faqType",label:"Question type",value:"",variant:"outlined",required:!0},b.a.createElement(A.a,{value:"excuse"},"Excuse"),b.a.createElement(A.a,{value:"faq"},"Faq question")),b.a.createElement(G.c,{className:"my-16",type:"text",variant:"outlined",name:"question",label:"Question",required:!0,validations:"minLength:1"}),b.a.createElement(G.c,{className:"mb-16",type:"text",multiline:!0,rows:"4",variant:"outlined",name:"answer",label:"Answer",required:!0,validations:"minLength:1"}),b.a.createElement(I.a,{type:"submit",variant:"contained",color:"primary","aria-label":"Submit",disabled:o||!s},o?"Loading...":"Submit")))))}var K=t(946),X=Object(B.a)((function(e){return{header:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.primary.contrastText},panel:{margin:0,borderWidth:"1px 1px 0 1px",borderStyle:"solid",borderColor:e.palette.divider,"&:first-child":{borderRadius:"16px 16px 0 0"},"&:last-child":{borderRadius:"0 0 16px 16px",borderWidth:"0 1px 1px 1px"},"&$expanded":{margin:"auto"}},expanded:{}}}));a.default=function(){var e=X(),a=Object(W.c)((function(e){return e.auth.user.role})),t=Object(f.useState)([]),i=Object(n.a)(t,2),c=i[0],s=i[1],d=Object(f.useState)([]),u=Object(n.a)(d,2),m=u[0],p=u[1],h=Object(f.useState)(null),g=Object(n.a)(h,2),E=g[0],j=g[1],O=Object(f.useState)(""),w=Object(n.a)(O,2),S=w[0],C=w[1],R=Object(f.useState)(!1),B=Object(n.a)(R,2),P=B[0],z=B[1],F=Object(f.useState)(!1),L=Object(n.a)(F,2),A=L[0],V=L[1],H=Object(f.useState)(!1),Q=Object(n.a)(H,2),U=Q[0],J=Q[1];return Object(f.useEffect)((function(){!1===P&&(J(!0),$.a.get("".concat("http://www.polepath.com/api","/faq/excuse")).then((function(e){console.log(e),s(e.data.freData),J(!1)})).catch((function(e){J(!1),V(!0)})))}),[P]),Object(f.useEffect)((function(){var e,a;p((e=c,0===(a=S).length?e:l.a.filterArrayByString(e,a)))}),[c,S]),b.a.createElement("div",{className:"w-full flex flex-col flex-auto"},b.a.createElement("div",{className:Object(x.default)(e.header,"flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")},b.a.createElement(r.a,{animation:"transition.slideUpIn",duration:400,delay:100},b.a.createElement(M.a,{color:"inherit",className:"text-36 sm:text-56 font-light"},"Hesitating?")),b.a.createElement(r.a,{duration:400,delay:600},b.a.createElement(M.a,{variant:"subtitle1",color:"inherit",className:"opacity-75 mt-8 sm:mt-16 mx-auto max-w-512"},"Frequently Repeated Excuses")),b.a.createElement(v.a,{className:"flex items-center h-56 w-full max-w-md mt-16 sm:mt-32",elevation:1},b.a.createElement(k.a,{color:"action",className:"mx-16"},"search"),b.a.createElement(T.a,{placeholder:"Search in faqs...",className:"",disableUnderline:!0,fullWidth:!0,inputProps:{"aria-label":"Search"},value:S,onChange:function(e){C(e.target.value)}}))),b.a.createElement("div",{className:"flex flex-col flex-1 flex-shrink-0 max-w-xl w-full mx-auto px-16 sm:px-24 py-24 sm:py-32"},"admin"===a&&b.a.createElement(I.a,{onClick:function(){return z(!0)},color:"primary",className:"my-8 w-1/4"},"Add new FAQ item..."),0===m.length&&!U&&b.a.createElement("div",{className:"flex flex-auto items-center justify-center w-full h-full"},b.a.createElement(M.a,{color:"textSecondary",variant:"h5"},"No result :(")),0===m.length&&b.a.createElement("div",{className:"flex flex-auto items-center justify-center w-full h-full"},b.a.createElement(K.a,null)),A&&b.a.createElement("div",{className:"flex flex-auto items-center justify-center w-full h-full"},b.a.createElement(M.a,{color:"textSecondary",variant:"h5"},"Something went wrong :(")),b.a.createElement(o.a,{enter:{animation:"transition.slideUpBigIn"}},Object(f.useMemo)((function(){return m.map((function(a){return b.a.createElement(y,{classes:{root:e.panel,expanded:e.expanded},key:a._id,expanded:E===a._id,onChange:(t=a._id,function(e,a){j(!!a&&t)}),elevation:0},b.a.createElement(q,{expandIcon:b.a.createElement(k.a,null,"expand_more")},b.a.createElement("div",{className:"flex items-center"},b.a.createElement(_.a,null),b.a.createElement(M.a,{className:"px-8"},a.question))),b.a.createElement(N,null,b.a.createElement(D.a,null),b.a.createElement(M.a,{className:"px-8"},a.answer)));var t}))}),[m,e,E]))),P&&b.a.createElement(Y,{close:function(){return z(!1)},open:P}))}},984:function(e,a,t){"use strict";var n=t(1),r=t(5),o=t(0),l=t.n(o),i=(t(2),t(3)),c=t(10),s=t(181),d=l.a.forwardRef((function(e,a){var t=e.children,o=e.classes,c=e.className,d=e.disableTypography,u=void 0!==d&&d,m=Object(r.a)(e,["children","classes","className","disableTypography"]);return l.a.createElement("div",Object(n.a)({className:Object(i.default)(o.root,c),ref:a},m),u?t:l.a.createElement(s.a,{component:"h2",variant:"h6"},t))}));a.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(d)},991:function(e,a,t){"use strict";var n=t(1),r=t(5),o=t(0),l=t.n(o),i=(t(2),t(3)),c=t(10),s=l.a.forwardRef((function(e,a){var t=e.classes,o=e.className,c=e.dividers,s=void 0!==c&&c,d=Object(r.a)(e,["classes","className","dividers"]);return l.a.createElement("div",Object(n.a)({className:Object(i.default)(t.root,o,s&&t.dividers),ref:a},d))}));a.a=Object(c.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)}}]);