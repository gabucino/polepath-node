(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[6],{1089:function(e,a,t){"use strict";t.r(a);var n=t(21),l=t(188),c=t(114),r=t(338),i=t(12),o=t(962),s=t(964),m=t(1),d=t(5),u=t(0),f=t.n(u),p=(t(2),t(3)),b=t(10),v=f.a.forwardRef((function(e,a){var t=e.disableSpacing,n=void 0!==t&&t,l=e.classes,c=e.className,r=Object(d.a)(e,["disableSpacing","classes","className"]);return f.a.createElement("div",Object(m.a)({className:Object(p.default)(l.root,c,!n&&l.spacing),ref:a},r))})),g=Object(b.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(v),h=["video","audio","picture","iframe","img"],x=f.a.forwardRef((function(e,a){var t=e.children,n=e.classes,l=e.className,c=e.component,r=void 0===c?"div":c,i=e.image,o=e.src,s=e.style,u=Object(d.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==h.indexOf(r),v=!b&&i?Object(m.a)({backgroundImage:'url("'.concat(i,'")')},s):s;return f.a.createElement(r,Object(m.a)({className:Object(p.default)(n.root,l,b&&n.media,-1!=="picture img".indexOf(r)&&n.img),ref:a,style:v,src:b?i||o:void 0},u),t)})),E=Object(b.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(x),j=t(959),O=t(954),y=t(888),N=t(939),w=t(901),k=t(942),S=t(947),C=t(904),I=t(902),_=t(944),R=t(49),M=t(963),D=t(181),A=t(9),P=t(24),T=t(14),L=t(133),V=t(989),z=t.n(V),B=t(943),F=t(991),W=t(992),G=t(983),H=t(95),U=t.n(H),q=t(183);function J(e){var a=Object(u.useState)(!1),t=Object(n.a)(a,2),l=t[0],c=t[1],r=Object(u.useState)(!0),i=Object(n.a)(r,2),s=i[0],m=i[1],d=Object(u.useRef)(null),p=Object(u.useState)(null),b=Object(n.a)(p,2),v=b[0],g=b[1],h=Object(u.useState)(""),x=Object(n.a)(h,2),E=x[0],j=x[1],O=Object(A.b)();return Object(u.useEffect)((function(){v&&("image/jpeg"!==v.type&&"image/jpg"!==v.type&&"image/png"!==v.type?(j("Image extension must be one of the following: jpg, jpeg, png"),m(!1)):(j(""),m(!0)))}),[v]),f.a.createElement(B.a,{open:e.open,onClose:e.close,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},f.a.createElement(G.a,{id:"alert-dialog-title"},"Add a new move"),f.a.createElement(W.a,null,f.a.createElement(U.a,{onValidSubmit:function(a){var t=new FormData;t.append("name",a.name),t.append("otherNames",a.otherNames?a.otherNames:""),t.append("level",a.level),t.append("description",a.description),t.append("image",v),O(T.m(t)),e.close()},onValid:function(){c(!0)},onInvalid:function(){c(!1)},ref:d,className:"flex flex-col justify-center p-16"},f.a.createElement(q.c,{className:"mb-16",type:"text",name:"name",label:"Name",required:!0,variant:"outlined"}),f.a.createElement(q.c,{className:"my-16",type:"text",name:"otherNames",label:"Other names",variant:"outlined"}),f.a.createElement(q.b,{className:"my-16",name:"level",label:"Difficulty",value:"",variant:"outlined",required:!0},f.a.createElement(k.a,{value:"Beginner"},"Beginner"),f.a.createElement(k.a,{value:"Intermediate"},"Intermediate"),f.a.createElement(k.a,{value:"Advanced"},"Advanced")),f.a.createElement(q.c,{className:"my-16",type:"text",multiline:!0,rows:"4",variant:"outlined",name:"description",label:"Description"}),E?f.a.createElement("p",{className:"text-red"}," ",E," "):"",f.a.createElement("label",{for:"file",className:"mb-8 text-grey-700 text-opacity-0"},"Upload main photo"),f.a.createElement("input",{type:"file",name:"file",onChange:function(e){g(e.target.files[0])}}),f.a.createElement(o.a,{type:"submit",variant:"contained",color:"primary",className:"mx-auto mt-32 mb-80","aria-label":"LOG IN",disabled:!l||!s},"Submit"))),f.a.createElement(F.a,null,f.a.createElement(o.a,{onClick:e.close,color:"primary",autoFocus:!0},"Cancel")))}var Y=t(13),K=Object(_.a)((function(e){return{header:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.getContrastText(e.palette.primary.main)},headerIcon:{position:"absolute",top:-64,left:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"},card:{height:"350px",display:"flex",flexDirection:"column",cursor:"pointer"},cardMedia:{maxHeight:"230px",cursor:"pointer"},placeholder:{height:"230px",padding:"16px",display:"flex",justifyContent:"center",alignItems:"center"},trainingPlanIcon:{paddingRight:"4rem","&:hover":{opacity:.4}}}}));a.default=function(e){var a=Object(A.b)(),t=Object(A.c)((function(e){return e.moves.moves.data})),m=Object(A.c)((function(e){return e.moves.progress.data})),d=Object(A.c)((function(e){return e.moves.moves.levels})),b=Object(A.c)((function(e){return e.auth.user.role})),v=Object(A.c)((function(e){return e.auth.user.trainingPlan})),h=Object(A.c)((function(e){return e.fuse.loading})),x=K(e),_=Object(R.a)(),V=Object(u.useState)(null),B=Object(n.a)(V,2),F=B[0],W=B[1],G=Object(u.useState)(""),H=Object(n.a)(G,2),U=H[0],q=H[1],Q=Object(u.useState)("all"),X=Object(n.a)(Q,2),Z=X[0],$=X[1],ee=Object(u.useState)(!1),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],le=Object(u.useState)(null),ce=Object(n.a)(le,2),re=(ce[0],ce[1],Object(u.useRef)(!1));Object(u.useEffect)((function(){t||a(Object(Y.G)()),t&&a(Object(Y.H)())}),[a,t]),Object(u.useEffect)((function(){t&&W(0===U.length&&"all"===Z?(re.current=!0,t):i.a.filter(t,(function(e){return("all"===Z||e.level===Z)&&e.name.toLowerCase().includes(U.toLowerCase())})))}),[t,U,Z]);var ie=function(e){a(T.D(e)),c.a.push("/moves/polemoves/".concat(e._id))},oe=function(e,t){if("add"===t)return a(T.i(e));a(T.y(e))};return f.a.createElement("div",{className:"flex flex-col flex-auto flex-shrink-0 w-full"},f.a.createElement("div",{className:Object(p.default)(x.header,"relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288")},f.a.createElement(l.a,{animation:"transition.slideUpIn",duration:400,delay:100},f.a.createElement(D.a,{color:"inherit",className:"text-24 sm:text-40 font-light"},"MOVES")),f.a.createElement(l.a,{duration:400,delay:600},f.a.createElement(D.a,{variant:"subtitle1",color:"inherit",className:"mt-8 sm:mt-16 mx-auto max-w-512"},f.a.createElement("span",{className:"opacity-75"},"Wander around, explore, learn, connect and inspire.")))),f.a.createElement("div",{className:"flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24"},f.a.createElement("div",{className:"flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-16"},f.a.createElement(M.a,{label:"Search for a move",placeholder:"Enter a keyword...",className:"flex w-full sm:w-320 mb-16 sm:mb-0 mx-16",value:U,inputProps:{"aria-label":"Search"},onChange:function(e){q(e.target.value)},variant:"outlined",InputLabelProps:{shrink:!0}}),f.a.createElement(y.a,{className:"flex w-full sm:w-320 mx-16",variant:"outlined"},f.a.createElement(w.a,{htmlFor:"level-label-placeholder"},"Level "),f.a.createElement(I.a,{value:Z,onChange:function(e){$(e.target.value)},input:f.a.createElement(C.a,{labelWidth:9*"level".length,name:"level",id:"level-label-placeholder"})},f.a.createElement(k.a,{value:"all"},f.a.createElement("em",null," All ")),d.map((function(e){return f.a.createElement(k.a,{value:e.label,key:e.id},e.label)}))))),h.isLoading&&!h.loadingItem&&f.a.createElement(L.a,null),"admin"===b&&f.a.createElement("div",{className:"w-full ml-8 flex justify-start"},f.a.createElement(o.a,{color:"primary",startIcon:f.a.createElement(z.a,null),onClick:function(){ne(!0)}},"ADD NEW MOVE")),F&&(F.length>0?f.a.createElement(r.a,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap py-16"},F.map((function(e){var a=d.find((function(a){return a.label===e.level})),t=m.find((function(a){return a.moveRef===e._id})),n="ONE DAY";t&&(n=t.mastered?"MASTERED":"IN PROGRESS");var l=v.includes(e._id);return f.a.createElement("div",{className:"w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16",key:e._id},f.a.createElement(s.a,{elevation:1,className:x.card},f.a.createElement("div",{className:"flex flex-shrink-0 items-center p-0 justify-between h-64",style:{background:a.color,color:_.palette.getContrastText(a.color)}},f.a.createElement("div",{className:"flex flex-grow pl-24 h-full items-center",onClick:function(){return ie(e)}},f.a.createElement(D.a,{className:"font-medium truncate",color:"inherit"},e.name)),h.loadingItem===e._id?f.a.createElement(S.a,{color:"inherit",size:"2rem",className:"mr-16"}):l?f.a.createElement(O.a,{title:"Remove from Training Plan"},f.a.createElement(N.a,{onClick:function(){return oe(e._id)},className:x.trainingPlanIcon},"remove_circle_outline")):f.a.createElement(O.a,{title:"Add to Training Plan"},f.a.createElement(N.a,{onClick:function(){return oe(e._id,"add")},className:x.trainingPlanIcon},"add_circle_outline"))),e.extension?f.a.createElement(E,{onClick:function(){return ie(e)},className:x.cardMedia,component:"img",alt:e.name,height:"230",src:"https://polepath.b-cdn.net/mainphotos/".concat(e._id,".").concat(e.extension),title:e.name}):f.a.createElement("div",{onClick:function(){return ie(e)},className:Object(p.default)("p-16",x.placeholder)}," ",f.a.createElement(D.a,{variant:"body1"},"This move doesn't have a photo :(")),f.a.createElement(j.a,null),f.a.createElement(g,{onClick:function(){return ie(e)},className:"justify-between"},f.a.createElement(o.a,{to:"/moves/polemoves/".concat(e._id),component:P.a,className:"justify-center items-center px-16 w-full",color:"primary"}," ",n))))}))):U?f.a.createElement("div",{className:"flex flex-1 items-center justify-center"},f.a.createElement(D.a,{color:"textSecondary",className:"text-24 my-24"},"No moves found :(")):"")),te&&f.a.createElement(J,{open:te,close:function(){return ne(!1)}}))}},983:function(e,a,t){"use strict";var n=t(1),l=t(5),c=t(0),r=t.n(c),i=(t(2),t(3)),o=t(10),s=t(181),m=r.a.forwardRef((function(e,a){var t=e.children,c=e.classes,o=e.className,m=e.disableTypography,d=void 0!==m&&m,u=Object(l.a)(e,["children","classes","className","disableTypography"]);return r.a.createElement("div",Object(n.a)({className:Object(i.default)(c.root,o),ref:a},u),d?t:r.a.createElement(s.a,{component:"h2",variant:"h6"},t))}));a.a=Object(o.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(m)},989:function(e,a,t){"use strict";var n=t(261);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(332)).default)(l.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=c},991:function(e,a,t){"use strict";var n=t(1),l=t(5),c=t(0),r=t.n(c),i=(t(2),t(3)),o=t(10),s=r.a.forwardRef((function(e,a){var t=e.disableSpacing,c=void 0!==t&&t,o=e.classes,s=e.className,m=Object(l.a)(e,["disableSpacing","classes","className"]);return r.a.createElement("div",Object(n.a)({className:Object(i.default)(o.root,s,!c&&o.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},992:function(e,a,t){"use strict";var n=t(1),l=t(5),c=t(0),r=t.n(c),i=(t(2),t(3)),o=t(10),s=r.a.forwardRef((function(e,a){var t=e.classes,c=e.className,o=e.dividers,s=void 0!==o&&o,m=Object(l.a)(e,["classes","className","dividers"]);return r.a.createElement("div",Object(n.a)({className:Object(i.default)(t.root,c,s&&t.dividers),ref:a},m))}));a.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)}}]);