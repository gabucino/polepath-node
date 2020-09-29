(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[6],{1076:function(e,t,a){"use strict";var n=a(1),r=a(5),l=a(0),c=a.n(l),o=(a(2),a(3)),i=a(10),s=["video","audio","picture","iframe","img"],m=c.a.forwardRef((function(e,t){var a=e.children,l=e.classes,i=e.className,m=e.component,u=void 0===m?"div":m,d=e.image,f=e.src,p=e.style,v=Object(r.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==s.indexOf(u),h=!b&&d?Object(n.a)({backgroundImage:'url("'.concat(d,'")')},p):p;return c.a.createElement(u,Object(n.a)({className:Object(o.default)(l.root,i,b&&l.media,-1!=="picture img".indexOf(u)&&l.img),ref:t,style:h,src:b?d||f:void 0},v),a)}));t.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(m)},1077:function(e,t,a){"use strict";var n=a(1),r=a(5),l=a(0),c=a.n(l),o=(a(2),a(3)),i=a(10),s=c.a.forwardRef((function(e,t){var a=e.disableSpacing,l=void 0!==a&&a,i=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return c.a.createElement("div",Object(n.a)({className:Object(o.default)(i.root,s,!l&&i.spacing),ref:t},m))}));t.a=Object(i.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(s)},1083:function(e,t,a){"use strict";var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),r=new Uint8Array(16);function l(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}for(var c=[],o=0;o<256;++o)c[o]=(o+256).toString(16).substr(1);var i=function(e,t){var a=t||0,n=c;return[n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]]].join("")};t.a=function(e,t,a){var n=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var c=0;c<16;++c)t[n+c]=r[c];return t||i(r)}},1092:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(190),l=a(114),c=a(342),o=a(12),i=a(971),s=a(973),m=a(1077),u=a(1076),d=a(968),f=a(895),p=a(948),v=a(908),b=a(951),h=a(911),x=a(910),g=a(953),y=a(47),E=a(972),j=a(154),O=a(3),w=a(0),N=a.n(w),k=a(8),C=a(24),S=a(13),R=a(1083),I=a(134),M=Object(g.a)((function(e){return{header:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.getContrastText(e.palette.primary.main)},headerIcon:{position:"absolute",top:-64,left:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"},card:{height:"350px",display:"flex",flexDirection:"column",cursor:"pointer"},cardMedia:{maxHeight:"230px",cursor:"pointer"},placeholder:{height:"230px",padding:"16px",display:"flex",justifyContent:"center",alignItems:"center"}}}));t.default=function(e){var t=Object(k.b)(),a=Object(k.c)((function(e){return e.moves.moves.data})),g=(Object(k.c)((function(e){return e.moves.progress.data})),Object(k.c)((function(e){return e.moves.moves.levels}))),V=M(e),A=Object(y.a)(),L=Object(w.useState)(null),_=Object(n.a)(L,2),F=_[0],P=_[1],T=Object(w.useState)(""),U=Object(n.a)(T,2),z=U[0],J=U[1],W=Object(w.useState)("all"),B=Object(n.a)(W,2),D=B[0],H=B[1],q=Object(w.useState)(!0),G=Object(n.a)(q,2),K=G[0],Q=G[1],X=Object(w.useRef)(!1);return Object(w.useEffect)((function(){a&&Q(!1)}),[t,a]),Object(w.useEffect)((function(){a&&P(0===z.length&&"all"===D?(X.current=!0,a):o.a.filter(a,(function(e){return("all"===D||e.level===D)&&e.name.toLowerCase().includes(z.toLowerCase())})))}),[a,z,D]),N.a.createElement("div",{className:"flex flex-col flex-auto flex-shrink-0 w-full"},N.a.createElement("div",{className:Object(O.default)(V.header,"relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288")},N.a.createElement(r.a,{animation:"transition.slideUpIn",duration:400,delay:100},N.a.createElement(j.a,{color:"inherit",className:"text-24 sm:text-40 font-light"},"MOVES")),N.a.createElement(r.a,{duration:400,delay:600},N.a.createElement(j.a,{variant:"subtitle1",color:"inherit",className:"mt-8 sm:mt-16 mx-auto max-w-512"},N.a.createElement("span",{className:"opacity-75"},"Wander around, explore, learn, connect and inspire.")))),N.a.createElement("div",{className:"flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24"},N.a.createElement("div",{className:"flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24"},N.a.createElement(E.a,{label:"Search for a move",placeholder:"Enter a keyword...",className:"flex w-full sm:w-320 mb-16 sm:mb-0 mx-16",value:z,inputProps:{"aria-label":"Search"},onChange:function(e){J(e.target.value)},variant:"outlined",InputLabelProps:{shrink:!0}}),N.a.createElement(f.a,{className:"flex w-full sm:w-320 mx-16",variant:"outlined"},N.a.createElement(v.a,{htmlFor:"level-label-placeholder"},"Level "),N.a.createElement(x.a,{value:D,onChange:function(e){H(e.target.value)},input:N.a.createElement(h.a,{labelWidth:9*"level".length,name:"level",id:"level-label-placeholder"})},N.a.createElement(b.a,{value:"all"},N.a.createElement("em",null," All ")),g.map((function(e){return N.a.createElement(b.a,{value:e.label,key:e.id},e.label)}))))),K?N.a.createElement(I.a,null):"",F&&(F.length>0?N.a.createElement(c.a,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap py-24"},F.map((function(e){var a=g.find((function(t){return t.label===e.level}));return N.a.createElement("div",{className:"w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16",key:e._id},N.a.createElement(s.a,{elevation:1,className:V.card,onClick:function(){return function(e){t(S.y(e)),l.a.push("/moves/polemoves/".concat(e._id))}(e)}},N.a.createElement("div",{className:"flex flex-shrink-0 items-center justify-between px-24 h-64",style:{background:a.color,color:A.palette.getContrastText(a.color)}},N.a.createElement(j.a,{className:"font-medium truncate",color:"inherit"},e.name),N.a.createElement("div",{className:"flex items-center justify-center opacity-75"},function(e){var t=[""];return"Intermediate"===e&&t.push(""),"Advanced"===e&&(t.push(""),t.push("")),t}(e.level).map((function(e){return N.a.createElement(p.a,{className:"text-20 mx-8",color:"inherit",key:Object(R.a)()},"star")})))),e.extension?N.a.createElement(u.a,{className:V.cardMedia,component:"img",alt:e.name,height:"230",src:"https://polepath.b-cdn.net/mainphotos/".concat(e._id,".").concat(e.extension),title:e.name}):N.a.createElement("div",{className:Object(O.default)("p-16",V.placeholder)}," ",N.a.createElement(j.a,{variant:"body1"},"This move doesn't have a photo :(")),N.a.createElement(d.a,null),N.a.createElement(m.a,{className:"justify-between"},N.a.createElement(i.a,{to:"/moves/polemoves/".concat(e._id),component:C.a,className:"justify-center items-center px-16 w-full",color:"primary"},"Figure this out"))))}))):z?N.a.createElement("div",{className:"flex flex-1 items-center justify-center"},N.a.createElement(j.a,{color:"textSecondary",className:"text-24 my-24"},"No moves found :(")):"")))}}}]);