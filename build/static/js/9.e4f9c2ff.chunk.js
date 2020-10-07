(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[9],{1084:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(206),l=a(114),c=a(454),o=a(12),i=a(962),s=a(964),m=a(1),u=a(5),d=a(0),f=a.n(d),p=(a(2),a(3)),v=a(10),b=f.a.forwardRef((function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,r=e.classes,l=e.className,c=Object(u.a)(e,["disableSpacing","classes","className"]);return f.a.createElement("div",Object(m.a)({className:Object(p.default)(r.root,l,!n&&r.spacing),ref:t},c))})),h=Object(v.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(b),x=["video","audio","picture","iframe","img"],g=f.a.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,l=e.component,c=void 0===l?"div":l,o=e.image,i=e.src,s=e.style,d=Object(u.a)(e,["children","classes","className","component","image","src","style"]),v=-1!==x.indexOf(c),b=!v&&o?Object(m.a)({backgroundImage:'url("'.concat(o,'")')},s):s;return f.a.createElement(c,Object(m.a)({className:Object(p.default)(n.root,r,v&&n.media,-1!=="picture img".indexOf(c)&&n.img),ref:t,style:b,src:v?o||i:void 0},d),a)})),y=Object(v.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(g),E=a(959),j=a(888),O=a(939),w=a(901),N=a(942),k=a(904),S=a(903),C=a(944),R=a(48),I=a(963),A=a(181),M=a(9),V=a(24),L=a(13),_="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),P=new Uint8Array(16);function T(){if(!_)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return _(P)}for(var D=[],U=0;U<256;++U)D[U]=(U+256).toString(16).substr(1);var z=function(e,t){var a=t||0,n=D;return[n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],"-",n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]],n[e[a++]]].join("")};var B=function(e,t,a){var n=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var r=(e=e||{}).random||(e.rng||T)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t)for(var l=0;l<16;++l)t[n+l]=r[l];return t||z(r)},F=a(133),J=Object(C.a)((function(e){return{header:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.getContrastText(e.palette.primary.main)},headerIcon:{position:"absolute",top:-64,left:0,opacity:.04,fontSize:512,width:512,height:512,pointerEvents:"none"},card:{height:"350px",display:"flex",flexDirection:"column",cursor:"pointer"},cardMedia:{maxHeight:"230px",cursor:"pointer"},placeholder:{height:"230px",padding:"16px",display:"flex",justifyContent:"center",alignItems:"center"}}}));t.default=function(e){var t=Object(M.b)(),a=Object(M.c)((function(e){return e.moves.moves.data})),m=Object(M.c)((function(e){return e.moves.progress.data})),u=Object(M.c)((function(e){return e.moves.moves.levels})),v=J(e),b=Object(R.a)(),x=Object(d.useState)(null),g=Object(n.a)(x,2),C=g[0],_=g[1],P=Object(d.useState)(""),T=Object(n.a)(P,2),D=T[0],U=T[1],z=Object(d.useState)("all"),W=Object(n.a)(z,2),G=W[0],H=W[1],Y=Object(d.useState)(!0),q=Object(n.a)(Y,2),K=q[0],Q=q[1],X=Object(d.useRef)(!1);return Object(d.useEffect)((function(){a&&Q(!1)}),[t,a]),Object(d.useEffect)((function(){a&&_(0===D.length&&"all"===G?(X.current=!0,a):o.a.filter(a,(function(e){return("all"===G||e.level===G)&&e.name.toLowerCase().includes(D.toLowerCase())})))}),[a,D,G]),f.a.createElement("div",{className:"flex flex-col flex-auto flex-shrink-0 w-full"},f.a.createElement("div",{className:Object(p.default)(v.header,"relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288")},f.a.createElement(r.a,{animation:"transition.slideUpIn",duration:400,delay:100},f.a.createElement(A.a,{color:"inherit",className:"text-24 sm:text-40 font-light"},"MOVES")),f.a.createElement(r.a,{duration:400,delay:600},f.a.createElement(A.a,{variant:"subtitle1",color:"inherit",className:"mt-8 sm:mt-16 mx-auto max-w-512"},f.a.createElement("span",{className:"opacity-75"},"Wander around, explore, learn, connect and inspire.")))),f.a.createElement("div",{className:"flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24"},f.a.createElement("div",{className:"flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24"},f.a.createElement(I.a,{label:"Search for a move",placeholder:"Enter a keyword...",className:"flex w-full sm:w-320 mb-16 sm:mb-0 mx-16",value:D,inputProps:{"aria-label":"Search"},onChange:function(e){U(e.target.value)},variant:"outlined",InputLabelProps:{shrink:!0}}),f.a.createElement(j.a,{className:"flex w-full sm:w-320 mx-16",variant:"outlined"},f.a.createElement(w.a,{htmlFor:"level-label-placeholder"},"Level "),f.a.createElement(S.a,{value:G,onChange:function(e){H(e.target.value)},input:f.a.createElement(k.a,{labelWidth:9*"level".length,name:"level",id:"level-label-placeholder"})},f.a.createElement(N.a,{value:"all"},f.a.createElement("em",null," All ")),u.map((function(e){return f.a.createElement(N.a,{value:e.label,key:e.id},e.label)}))))),K?f.a.createElement(F.a,null):"",C&&(C.length>0?f.a.createElement(c.a,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap py-24"},C.map((function(e){var a=u.find((function(t){return t.label===e.level})),n=m.find((function(t){return t.moveRef===e._id})),r="ONE DAY";return n&&(r=n.mastered?"MASTERED":"IN PROGRESS"),f.a.createElement("div",{className:"w-full pb-24 sm:w-1/2 lg:w-1/3 sm:p-16",key:e._id},f.a.createElement(s.a,{elevation:1,className:v.card,onClick:function(){return function(e){t(L.B(e)),l.a.push("/moves/polemoves/".concat(e._id))}(e)}},f.a.createElement("div",{className:"flex flex-shrink-0 items-center justify-between px-24 h-64",style:{background:a.color,color:b.palette.getContrastText(a.color)}},f.a.createElement(A.a,{className:"font-medium truncate",color:"inherit"},e.name),f.a.createElement("div",{className:"flex items-center justify-center opacity-75"},function(e){var t=[""];return"Intermediate"===e&&t.push(""),"Advanced"===e&&(t.push(""),t.push("")),t}(e.level).map((function(e){return f.a.createElement(O.a,{className:"text-20 mx-8",color:"inherit",key:B()},"star")})))),e.extension?f.a.createElement(y,{className:v.cardMedia,component:"img",alt:e.name,height:"230",src:"https://polepath.b-cdn.net/mainphotos/".concat(e._id,".").concat(e.extension),title:e.name}):f.a.createElement("div",{className:Object(p.default)("p-16",v.placeholder)}," ",f.a.createElement(A.a,{variant:"body1"},"This move doesn't have a photo :(")),f.a.createElement(E.a,null),f.a.createElement(h,{className:"justify-between"},f.a.createElement(i.a,{to:"/moves/polemoves/".concat(e._id),component:V.a,className:"justify-center items-center px-16 w-full",color:"primary"}," ",r))))}))):D?f.a.createElement("div",{className:"flex flex-1 items-center justify-center"},f.a.createElement(A.a,{color:"textSecondary",className:"text-24 my-24"},"No moves found :(")):"")))}}}]);