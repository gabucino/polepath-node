(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[6],{1099:function(e,a,t){"use strict";var n=t(1),l=t(5),c=t(0),r=t.n(c),i=(t(2),t(3)),o=t(10),s=t(184),m=r.a.forwardRef((function(e,a){var t=e.children,c=e.classes,o=e.className,m=e.disableTypography,d=void 0!==m&&m,u=Object(l.a)(e,["children","classes","className","disableTypography"]);return r.a.createElement("div",Object(n.a)({className:Object(i.a)(c.root,o),ref:a},u),d?t:r.a.createElement(s.a,{component:"h2",variant:"h6"},t))}));a.a=Object(o.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(m)},1105:function(e,a,t){"use strict";var n=t(268);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),c=(0,n(t(347)).default)(l.default.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=c},1107:function(e,a,t){"use strict";var n=t(1),l=t(5),c=t(0),r=t.n(c),i=(t(2),t(3)),o=t(10),s=r.a.forwardRef((function(e,a){var t=e.disableSpacing,c=void 0!==t&&t,o=e.classes,s=e.className,m=Object(l.a)(e,["disableSpacing","classes","className"]);return r.a.createElement("div",Object(n.a)({className:Object(i.a)(o.root,s,!c&&o.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(s)},1108:function(e,a,t){"use strict";var n=t(1),l=t(5),c=t(0),r=t.n(c),i=(t(2),t(3)),o=t(10),s=r.a.forwardRef((function(e,a){var t=e.classes,c=e.className,o=e.dividers,s=void 0!==o&&o,m=Object(l.a)(e,["classes","className","dividers"]);return r.a.createElement("div",Object(n.a)({className:Object(i.a)(t.root,c,s&&t.dividers),ref:a},m))}));a.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(s)},1202:function(e,a,t){"use strict";t.r(a);var n=t(19),l=t(189),c=t(95),r=t(353),i=t(13),o=t(1078),s=t(1080),m=t(1),d=t(5),u=t(0),f=t.n(u),p=(t(2),t(3)),b=t(10),v=f.a.forwardRef((function(e,a){var t=e.disableSpacing,n=void 0!==t&&t,l=e.classes,c=e.className,r=Object(d.a)(e,["disableSpacing","classes","className"]);return f.a.createElement("div",Object(m.a)({className:Object(p.a)(l.root,c,!n&&l.spacing),ref:a},r))})),g=Object(b.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(v),h=["video","audio","picture","iframe","img"],E=f.a.forwardRef((function(e,a){var t=e.children,n=e.classes,l=e.className,c=e.component,r=void 0===c?"div":c,i=e.image,o=e.src,s=e.style,u=Object(d.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==h.indexOf(r),v=!b&&i?Object(m.a)({backgroundImage:'url("'.concat(i,'")')},s):s;return f.a.createElement(r,Object(m.a)({className:Object(p.a)(n.root,l,b&&n.media,-1!=="picture img".indexOf(r)&&n.img),ref:a,style:v,src:b?i||o:void 0},u),t)})),x=Object(b.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(E),j=t(1075),O=t(1068),y=t(1004),N=t(1053),w=t(1056),k=t(1006),S=t(185),C=t(1061),I=t(1019),_=t(1058),R=t(47),M=t(184),A=t(9),D=t(23),T=t(14),P=t(133),L=t(1105),z=t.n(L),U=t(1057),V=t(1107),B=t(1108),F=t(1099),G=t(94),H=t.n(G),W=t(187);function q(e){var a=Object(u.useState)(!1),t=Object(n.a)(a,2),l=t[0],c=t[1],r=Object(u.useState)(!0),i=Object(n.a)(r,2),s=i[0],m=i[1],d=Object(u.useRef)(null),p=Object(u.useState)(null),b=Object(n.a)(p,2),v=b[0],g=b[1],h=Object(u.useState)(""),E=Object(n.a)(h,2),x=E[0],j=E[1],O=Object(A.b)();return Object(u.useEffect)((function(){v&&("image/jpeg"!==v.type&&"image/jpg"!==v.type&&"image/png"!==v.type?(j("Image extension must be one of the following: jpg, jpeg, png"),m(!1)):(j(""),m(!0)))}),[v]),f.a.createElement(U.a,{open:e.open,onClose:e.close,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},f.a.createElement(F.a,{id:"alert-dialog-title"},"Add a new move"),f.a.createElement(B.a,null,f.a.createElement(H.a,{onValidSubmit:function(a){var t=new FormData;t.append("name",a.name),t.append("otherNames",a.otherNames?a.otherNames:""),t.append("level",a.level),t.append("description",a.description),t.append("image",v),O(T.m(t)),e.close()},onValid:function(){c(!0)},onInvalid:function(){c(!1)},ref:d,className:"flex flex-col justify-center p-16"},f.a.createElement(W.c,{className:"mb-16",type:"text",name:"name",label:"Name",required:!0,variant:"outlined"}),f.a.createElement(W.c,{className:"my-16",type:"text",name:"otherNames",label:"Other names",variant:"outlined"}),f.a.createElement(W.b,{className:"my-16",name:"level",label:"Difficulty",value:"",variant:"outlined",required:!0},f.a.createElement(w.a,{value:"Beginner"},"Beginner"),f.a.createElement(w.a,{value:"Intermediate"},"Intermediate"),f.a.createElement(w.a,{value:"Advanced"},"Advanced")),f.a.createElement(W.c,{className:"my-16",type:"text",multiline:!0,rows:"4",variant:"outlined",name:"description",label:"Description"}),x?f.a.createElement("p",{className:"text-red"}," ",x," "):"",f.a.createElement("label",{for:"file",className:"mb-8 text-grey-700 text-opacity-0"},"Upload main photo"),f.a.createElement("input",{type:"file",name:"file",onChange:function(e){g(e.target.files[0])}}),f.a.createElement(o.a,{type:"submit",variant:"contained",color:"primary",className:"mx-auto mt-32 mb-80","aria-label":"LOG IN",disabled:!l||!s},"Submit"))),f.a.createElement(V.a,null,f.a.createElement(o.a,{onClick:e.close,color:"primary",autoFocus:!0},"Cancel")))}var J=t(12),Y=Object(_.a)((function(e){return{header:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.getContrastText(e.palette.primary.main)},headerIcon:{position:"absolute",top:-64,left:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"},card:{height:"350px",display:"flex",flexDirection:"column",cursor:"pointer"},cardMedia:{maxHeight:"230px",cursor:"pointer"},placeholder:{height:"230px",padding:"16px",display:"flex",justifyContent:"center",alignItems:"center"},trainingPlanIcon:{paddingRight:"4rem","&:hover":{opacity:.4}}}}));a.default=function(e){var a=Object(A.b)(),t=Object(A.c)((function(e){return e.moves.moves.data})),m=Object(A.c)((function(e){return e.moves.progress.data})),d=Object(A.c)((function(e){return e.moves.moves.levels})),b=Object(A.c)((function(e){return e.auth.user.role})),v=Object(A.c)((function(e){return e.auth.user.trainingPlan})),h=Object(A.c)((function(e){return e.fuse.loading})),E=Y(e),_=Object(R.a)(),L=Object(u.useState)(null),U=Object(n.a)(L,2),V=U[0],B=U[1],F=Object(u.useState)(""),G=Object(n.a)(F,2),H=G[0],W=G[1],K=Object(u.useState)("all"),Q=Object(n.a)(K,2),X=Q[0],Z=Q[1],$=Object(u.useState)(!1),ee=Object(n.a)($,2),ae=ee[0],te=ee[1],ne=Object(u.useRef)(!1);Object(u.useEffect)((function(){t||a(Object(J.G)()),t&&a(Object(J.H)())}),[a,t]),Object(u.useEffect)((function(){t&&B(0===H.length&&"all"===X?(ne.current=!0,t):i.a.filter(t,(function(e){return("all"===X||e.level===X)&&e.name.toLowerCase().includes(H.toLowerCase())})))}),[t,H,X]);var le=function(e){a(T.E(e)),c.a.push("/moves/polemoves/".concat(e._id))},ce=function(e,t){if("add"===t)return a(T.i(e));a(T.z(e))};return f.a.createElement("div",{className:"flex flex-col flex-auto flex-shrink-0 w-full"},f.a.createElement("div",{className:Object(p.a)(E.header,"relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288")},f.a.createElement(l.a,{animation:"transition.slideUpIn",duration:400,delay:100},f.a.createElement(M.a,{color:"inherit",className:"text-24 sm:text-40 font-light"},"MOVES")),f.a.createElement(l.a,{duration:400,delay:600},f.a.createElement(M.a,{variant:"subtitle1",color:"inherit",className:"mt-8 sm:mt-16 mx-auto max-w-512"},f.a.createElement("span",{className:"opacity-75"},"Wander around, explore, learn, connect and inspire."))),f.a.createElement(S.a,{className:"flex items-center justify-between px-16 h-56 w-full max-w-md mt-16 sm:mt-32",elevation:1},f.a.createElement(N.a,{color:"action",className:"mr-16"},"search"),f.a.createElement(k.a,{className:"flex-1",label:"Search for a move",placeholder:"Enter a keyword...",value:H,disableUnderline:!0,inputProps:{"aria-label":"Search"},onChange:function(e){W(e.target.value)},variant:"outlined"}),f.a.createElement(y.a,null,f.a.createElement(I.a,{value:X,onChange:function(e){Z(e.target.value)},disableUnderline:!0},f.a.createElement(w.a,{value:"all"},"All levels"),d.map((function(e){return f.a.createElement(w.a,{value:e.label,key:e.id},e.label)})))))),f.a.createElement("div",{className:"flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24"},h.isLoading&&!h.loadingItem&&f.a.createElement(P.a,null),"admin"===b&&f.a.createElement("div",{className:"w-full ml-8 flex justify-start"},f.a.createElement(o.a,{color:"primary",startIcon:f.a.createElement(z.a,null),onClick:function(){te(!0)}},"ADD NEW MOVE")),V&&(V.length>0?f.a.createElement(r.a,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap py-16"},V.map((function(e){var a=d.find((function(a){return a.label===e.level})),t=m.find((function(a){return a.moveRef===e._id})),n="ONE DAY";t&&(n=t.mastered?"MASTERED":"IN PROGRESS");var l=v&&v.includes(e._id);return f.a.createElement("div",{className:"w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16",key:e._id},f.a.createElement(s.a,{elevation:1,className:E.card},f.a.createElement("div",{className:"flex flex-shrink-0 items-center p-0 justify-between h-64",style:{background:a.color,color:_.palette.getContrastText(a.color)}},f.a.createElement("div",{className:"flex flex-grow pl-24 h-full items-center",onClick:function(){return le(e)}},f.a.createElement(M.a,{className:"font-medium truncate",color:"inherit"},e.name)),b.length?f.a.createElement(f.a.Fragment,null," ",h.loadingItem===e._id?f.a.createElement(C.a,{color:"inherit",size:"2rem",className:"mr-16"}):l?f.a.createElement(O.a,{title:"Remove from Training Plan"},f.a.createElement(N.a,{onClick:function(){return ce(e._id)},className:E.trainingPlanIcon},"remove_circle_outline")):f.a.createElement(O.a,{title:"Add to Training Plan"},f.a.createElement(N.a,{onClick:function(){return ce(e._id,"add")},className:E.trainingPlanIcon},"add_circle_outline"))):""),e.extension?f.a.createElement(x,{onClick:function(){return le(e)},className:E.cardMedia,component:"img",alt:e.name,height:"230",src:"https://polepath.b-cdn.net/mainphotos/".concat(e._id,".").concat(e.extension),title:e.name}):f.a.createElement("div",{onClick:function(){return le(e)},className:Object(p.a)("p-16",E.placeholder)}," ",f.a.createElement(M.a,{variant:"body1"},"This move doesn't have a photo :(")),f.a.createElement(j.a,null),f.a.createElement(g,{onClick:function(){return le(e)},className:"justify-between"},b.length?f.a.createElement(o.a,{to:"/moves/polemoves/".concat(e._id),component:D.a,className:"justify-center items-center px-16 w-full",color:"primary"}," ",n):f.a.createElement(o.a,{to:"/users/new",component:D.a,className:"justify-center items-center px-16 w-full",color:"primary"}," ","Sign up and start learning"))))}))):H?f.a.createElement("div",{className:"flex flex-1 items-center justify-center"},f.a.createElement(M.a,{color:"textSecondary",className:"text-24 my-24"},"No moves found :(")):"")),ae&&f.a.createElement(q,{open:ae,close:function(){return te(!1)}}))}}}]);