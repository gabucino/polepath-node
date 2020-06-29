(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[4],{1012:function(e,a,t){"use strict";var n=t(1),r=t(6),l=t(0),c=t.n(l),o=(t(2),t(3)),i=t(9),s=c.a.forwardRef((function(e,a){var t=e.disableSpacing,l=void 0!==t&&t,i=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return c.a.createElement("div",Object(n.a)({className:Object(o.default)(i.root,s,!l&&i.spacing),ref:a},m))}));a.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},1079:function(e,a,t){"use strict";var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function l(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}for(var c=[],o=0;o<256;++o)c[o]=(o+256).toString(16).substr(1);var i=function(e,a){var t=a||0,n=c;return[n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],"-",n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]],n[e[t++]]].join("")};a.a=function(e,a,t){var n=a&&t||0;"string"==typeof e&&(a="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,a)for(var c=0;c<16;++c)a[n+c]=r[c];return a||i(r)}},1088:function(e,a,t){"use strict";t.r(a);var n=t(14),r=t(181),l=t(130),c=t(331),o=t(12),i=t(969),s=t(970),m=t(1012),u=t(999),d=t(965),f=t(890),p=t(945),v=t(903),g=t(948),b=t(906),h=t(904),x=t(950),y=t(44),E=t(967),j=t(149),O=t(333),N=t(3),w=t(0),k=t.n(w),D=t(8),S=t(29),C=t(72),R=t(334),L=t(1079),A=t(178),I=Object(x.a)((function(e){return{header:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.getContrastText(e.palette.primary.main)},headerIcon:{position:"absolute",top:-64,left:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"},card:{height:"350px",display:"flex",flexDirection:"column"},cardMedia:{maxHeight:"230px",cursor:"pointer"},placeholder:{height:"230px",padding:"16px",display:"flex",justifyContent:"center",alignItems:"center"}}}));a.default=Object(O.a)("movesReducer",R.a)((function(e){var a=Object(D.b)(),t=Object(D.c)((function(e){return e.movesReducer.moves.data})),x=Object(D.c)((function(e){return e.movesReducer.moves.levels})),O=I(e),R=Object(y.a)(),M=Object(w.useState)(null),T=Object(n.a)(M,2),V=T[0],P=T[1],U=Object(w.useState)(""),W=Object(n.a)(U,2),_=W[0],z=W[1],F=Object(w.useState)("all"),G=Object(n.a)(F,2),H=G[0],J=G[1],B=Object(w.useState)(!0),Y=Object(n.a)(B,2),q=Y[0],K=Y[1];return Object(w.useEffect)((function(){a(C.r()),console.log(V)}),[a]),Object(w.useEffect)((function(){t&&K(!1)}),[a,t]),Object(w.useEffect)((function(){t&&(console.log("POLEMOVES",V),P(0===_.length&&"all"===H?t:o.a.filter(t,(function(e){return("all"===H||e.generalData.level===H)&&e.generalData.name.toLowerCase().includes(_.toLowerCase())}))))}),[t,_,H]),k.a.createElement("div",{className:"flex flex-col flex-auto flex-shrink-0 w-full"},k.a.createElement("div",{className:Object(N.default)(O.header,"relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288")},k.a.createElement(r.a,{animation:"transition.slideUpIn",duration:400,delay:100},k.a.createElement(j.a,{color:"inherit",className:"text-24 sm:text-40 font-light"},"WELCOME TO THE CATALOG")),k.a.createElement(r.a,{duration:400,delay:600},k.a.createElement(j.a,{variant:"subtitle1",color:"inherit",className:"mt-8 sm:mt-16 mx-auto max-w-512"},k.a.createElement("span",{className:"opacity-75"},"Wander around, explore, learn, connect and inspire.")))),k.a.createElement("div",{className:"flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24"},k.a.createElement("div",{className:"flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24"},k.a.createElement(E.a,{label:"Search for a course",placeholder:"Enter a keyword...",className:"flex w-full sm:w-320 mb-16 sm:mb-0 mx-16",value:_,inputProps:{"aria-label":"Search"},onChange:function(e){z(e.target.value)},variant:"outlined",InputLabelProps:{shrink:!0}}),k.a.createElement(f.a,{className:"flex w-full sm:w-320 mx-16",variant:"outlined"},k.a.createElement(v.a,{htmlFor:"level-label-placeholder"},"Level "),k.a.createElement(h.a,{value:H,onChange:function(e){J(e.target.value)},input:k.a.createElement(b.a,{labelWidth:9*"level".length,name:"level",id:"level-label-placeholder"})},k.a.createElement(g.a,{value:"all"},k.a.createElement("em",null," All ")),x.map((function(e){return k.a.createElement(g.a,{value:e.label,key:e.id},e.label)}))))),q?k.a.createElement(A.a,null):"",V&&(V.length>0?k.a.createElement(c.a,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap py-24"},V.map((function(e){var a=x.find((function(a){return a.label===e.generalData.level}));return k.a.createElement("div",{className:"w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16",key:e.generalData._id},k.a.createElement(s.a,{elevation:1,className:O.card},k.a.createElement("div",{className:"flex flex-shrink-0 items-center justify-between px-24 h-64",style:{background:a.color,color:R.palette.getContrastText(a.color)}},k.a.createElement(j.a,{className:"font-medium truncate",color:"inherit"},e.generalData.name),k.a.createElement("div",{className:"flex items-center justify-center opacity-75"},function(e){var a=[""];return"Intermediate"===e&&a.push(""),"Advanced"===e&&(a.push(""),a.push("")),a}(e.generalData.level).map((function(e){return k.a.createElement(p.a,{className:"text-20 mx-8",color:"inherit",key:Object(L.a)()},"star")})))),e.generalData.photoURL?k.a.createElement(u.a,{onClick:function(){return l.a.push("/moves/polemoves/".concat(e.generalData._id))},className:O.cardMedia,component:"img",alt:e.generalData.name,height:"230",src:e.generalData.photoURL,title:e.generalData.name}):k.a.createElement("div",{className:Object(N.default)("p-16",O.placeholder)}," ",k.a.createElement(j.a,{variant:"body1"},"This move doesn't have a photo :(")),k.a.createElement(d.a,null),k.a.createElement(m.a,{className:"justify-center"},k.a.createElement(i.a,{to:"/moves/polemoves/".concat(e.generalData._id),component:S.a,className:"justify-center items-center px-32 w-full",color:"primary"},e.userData?e.userData.mastered?"MASTERED":"IN PROGRESS":"ONE DAY"," "))))}))):k.a.createElement("div",{className:"flex flex-1 items-center justify-center"},k.a.createElement(j.a,{color:"textSecondary",className:"text-24 my-24"},"No moves found :(")))))}))},999:function(e,a,t){"use strict";var n=t(1),r=t(6),l=t(0),c=t.n(l),o=(t(2),t(3)),i=t(9),s=["video","audio","picture","iframe","img"],m=c.a.forwardRef((function(e,a){var t=e.children,l=e.classes,i=e.className,m=e.component,u=void 0===m?"div":m,d=e.image,f=e.src,p=e.style,v=Object(r.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==s.indexOf(u),b=!g&&d?Object(n.a)({backgroundImage:'url("'.concat(d,'")')},p):p;return c.a.createElement(u,Object(n.a)({className:Object(o.default)(l.root,i,g&&l.media,-1!=="picture img".indexOf(u)&&l.img),ref:a,style:b,src:g?d||f:void 0},v),t)}));a.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(m)}}]);