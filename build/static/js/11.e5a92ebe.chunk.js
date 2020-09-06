(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[11],{1104:function(e,a,t){"use strict";t.r(a);var n=t(19),l=t(30),c=t(0),r=t.n(c),m=t(1016),s=t.n(m),o=t(191),i=t.n(o),u=t(271),d=t(979),p=t(969),f=t(959),b=t(21),E=t(8),v=(t(150),t(44)),x=t(982),h=t(95),N=t.n(h),g=t(192),j=t(55),y=t.n(j);function w(e){var a=Object(E.b)(),t=Object(c.useState)(""),l=Object(n.a)(t,2),m=(l[0],l[1]),s=Object(c.useState)(!1),o=Object(n.a)(s,2),h=o[0],j=o[1],w=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,j(!0),t.next=4,y.a.post("".concat("http://www.polepath.com/api","/users/changestagename"),{stageName:n.stageName});case 4:200===t.sent.status&&(a(Object(v.p)(n.stageName)),j(!1),e.close()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),409===t.t0.response.status&&(m(t.t0.response.data.message),a(b.E({message:t.t0.response.data.message,autoHideDuration:6e3,anchorOrigin:{vertical:"top",horizontal:"right"},variant:"error"})));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(c.Fragment,null,r.a.createElement(f.a,{className:"flex flex-col align-center",open:e.open,onClose:e.close,"aria-labelledby":"form-dialog-title"},r.a.createElement(x.a,{id:"form-dialog-title"},"Change your stage name"),r.a.createElement(N.a,{onValidSubmit:w,className:"px-16 pb-16 flex flex-col justify-center w-full items-center"},r.a.createElement(g.c,{className:"my-16",type:"text",name:"stageName",label:"Your new stagename",multiline:!0,validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},variant:"outlined",required:!0,value:""}),r.a.createElement(p.a,{className:"flex justify-end"},r.a.createElement(d.a,{onClick:e.close,variant:"contained",color:"secondary"},"Cancel"),r.a.createElement(d.a,{type:"submit",variant:"contained",color:"secondary",disabled:h},"Submit")))))}var O=t(20),k=t(54),C=t(193),S=t(165),I=t(988),M=t(960),U=t(155),L=t(345),W=t(967),R=t(980),Y=t(981),z=t(955),B=t(903),D=t(957),F=t(905),H=t(1099),A=t(972),T=t(968);var G=function(){var e=Object(c.useState)(null),a=Object(n.a)(e,2),t=a[0],l=a[1];if(Object(c.useEffect)((function(){y.a.get("/api/profile/about").then((function(e){l(e.data)}))}),[]),!t)return null;var m=t.general,s=t.work,o=t.contact,i=t.groups,u=t.friends;return r.a.createElement("div",{className:"md:flex max-w-2xl"},r.a.createElement("div",{className:"flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32"},r.a.createElement(L.a,{enter:{animation:"transition.slideUpBigIn"}},r.a.createElement(R.a,{className:"w-full mb-16"},r.a.createElement(W.a,{position:"static",elevation:0},r.a.createElement(T.a,{className:"px-8"},r.a.createElement(U.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"General Information"))),r.a.createElement(Y.a,null,r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Gender"),r.a.createElement(U.a,null,m.gender)),r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Birthday"),r.a.createElement(U.a,null,m.birthday)),r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Locations"),m.locations.map((function(e){return r.a.createElement("div",{className:"flex items-center",key:e},r.a.createElement(U.a,null,e),r.a.createElement(z.a,{className:"text-16 mx-4",color:"action"},"location_on"))}))),r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"About Me"),r.a.createElement(U.a,null,m.about)))),r.a.createElement(R.a,{className:"w-full mb-16"},r.a.createElement(W.a,{position:"static",elevation:0},r.a.createElement(T.a,{className:"px-8"},r.a.createElement(U.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Work"))),r.a.createElement(Y.a,null,r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Occupation"),r.a.createElement(U.a,null,s.occupation)),r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Skills"),r.a.createElement(U.a,null,s.skills)),r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Jobs"),r.a.createElement("table",{className:""},r.a.createElement("tbody",null,s.jobs.map((function(e){return r.a.createElement("tr",{key:e.company},r.a.createElement("td",null,r.a.createElement(U.a,null,e.company)),r.a.createElement("td",{className:"px-16"},r.a.createElement(U.a,{color:"textSecondary"},e.date)))}))))))),r.a.createElement(R.a,{className:"w-full mb-16"},r.a.createElement(W.a,{position:"static",elevation:0},r.a.createElement(T.a,{className:"px-8"},r.a.createElement(U.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Contact"))),r.a.createElement(Y.a,null,r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Address"),r.a.createElement(U.a,null,o.address)),r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Tel."),o.tel.map((function(e){return r.a.createElement("div",{className:"flex items-center",key:e},r.a.createElement(U.a,null,e))}))),r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Website"),o.websites.map((function(e){return r.a.createElement("div",{className:"flex items-center",key:e},r.a.createElement(U.a,null,e))}))),r.a.createElement("div",{className:"mb-24"},r.a.createElement(U.a,{className:"font-bold mb-4 text-15"},"Emails"),o.emails.map((function(e){return r.a.createElement("div",{className:"flex items-center",key:e},r.a.createElement(U.a,null,e))}))))))),r.a.createElement("div",{className:"flex flex-col md:w-320"},r.a.createElement(L.a,{enter:{animation:"transition.slideUpBigIn"}},r.a.createElement(R.a,{className:"w-full mb-16"},r.a.createElement(W.a,{position:"static",elevation:0},r.a.createElement(T.a,{className:"px-8"},r.a.createElement(U.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Friends"),r.a.createElement(d.a,{className:"normal-case",color:"inherit",size:"small"},"See 454 more"))),r.a.createElement(Y.a,{className:"flex flex-wrap p-8"},u.map((function(e){return r.a.createElement("img",{key:e.id,className:"w-64 m-4 rounded-4 block",src:e.avatar,alt:e.name})})))),r.a.createElement(R.a,{className:"w-full mb-16"},r.a.createElement(W.a,{position:"static",elevation:0},r.a.createElement(T.a,{className:"px-8"},r.a.createElement(U.a,{variant:"subtitle1",color:"inherit",className:"flex-1 px-12"},"Joined Groups"),r.a.createElement(d.a,{className:"normal-case",color:"inherit",size:"small"},"See 6 more"))),r.a.createElement(Y.a,{className:"p-0"},r.a.createElement(D.a,{className:"p-0"},i.map((function(e){return r.a.createElement(F.a,{key:e.id,className:"px-8"},r.a.createElement(I.a,{className:"mx-8",alt:e.name},e.name[0]),r.a.createElement(A.a,{primary:r.a.createElement("div",{className:"flex"},r.a.createElement(U.a,{className:"font-medium",color:"secondary",paragraph:!1},e.name),r.a.createElement(U.a,{className:"mx-4",paragraph:!1},e.category)),secondary:e.members}),r.a.createElement(H.a,null,r.a.createElement(B.a,null,r.a.createElement(z.a,null,"more_vert"))))}))))))))},J=t(1100),P=t(1101),_=t(1102),q=t(974);var V=function(){var e=Object(c.useState)(null),a=Object(n.a)(e,2),t=a[0],l=a[1];return Object(c.useEffect)((function(){y.a.get("/api/profile/photos-videos").then((function(e){l(e.data)}))}),[]),t?r.a.createElement("div",{className:"md:flex max-w-2xl"},r.a.createElement("div",{className:"flex flex-col flex-1 md:ltr:pr-32 md:rtl:pl-32"},r.a.createElement(L.a,{enter:{animation:"transition.slideUpBigIn"}},t.map((function(e){return r.a.createElement("div",{key:e.id,className:"mb-48"},r.a.createElement(q.a,{component:"div",className:"flex items-center px-0 mb-24"},r.a.createElement(U.a,{variant:"h6"},e.name),r.a.createElement(U.a,{className:"mx-16",variant:"subtitle1",color:"textSecondary"},e.info)),r.a.createElement(J.a,{className:"",spacing:8,cols:0},e.media.map((function(e){return r.a.createElement(P.a,{classes:{root:"w-full sm:w-1/2 md:w-1/4",tile:"rounded-8"},key:e.preview},r.a.createElement("img",{src:e.preview,alt:e.title}),r.a.createElement(_.a,{title:e.title,actionIcon:r.a.createElement(B.a,null,r.a.createElement(z.a,{className:"text-white opacity-75"},"info"))}))}))))}))))):null},K=t(186),Q=t(3),X=Object(M.a)((function(e){return{counter:{color:e.palette.primary.main}}}));var Z=r.a.memo((function(e){var a=X();return r.a.createElement(K.a,{className:"w-full rounded-8 shadow-none border-1 mx-8"},r.a.createElement("div",{className:"text-center pt-6 pb-6"},r.a.createElement(U.a,{className:Object(Q.default)(a.counter,"text-72 leading-none ")},e.count)),r.a.createElement("div",{className:"flex items-center px-16 h-52 border-t-1"},r.a.createElement(U.a,{className:"text-15 flex w-full",color:"textSecondary"},r.a.createElement("span",{className:"truncate"},e.label))))})),$=t(975),ee=t(302),ae=t.n(ee),te=t(90),ne=function(e){var a=Object(te.g)(),t=Object(c.useState)(!0),l=Object(n.a)(t,2),m=(l[0],l[1],Object(c.useState)(null)),s=Object(n.a)(m,2),o=s[0],i=s[1];return Object(c.useEffect)((function(){var e=y.a.CancelToken.source();return y.a.get("".concat("http://www.polepath.com/api","/users/history"),{cancelToken:e.token}).then((function(e){i(e.data.history)})).catch((function(e){console.log(e)})),function(){e.cancel("Component got unmounted")}}),[]),r.a.createElement("div",{className:"flex flex-col justify-center items-center mx-8 mt-20 border-1  rounded-8 "},r.a.createElement(U.a,{variant:"h6",className:"mb-16"},"Latest Activity"),o&&o.map((function(e,t){var n;switch(e.type){case"photo":n="You added a new  ".concat(e.name," ").concat(e.type,".");break;case"mastered":n="Congratulations! You mastered the ".concat(e.name," move.");break;case"started":n="You started to learn the ".concat(e.name," move. Good luck!")}return r.a.createElement("div",{key:e._id,className:"flex justify-center mb-8 w-full flex-col border-0 bg-gray-100 cursor-pointer",onClick:function(){return function(e){var t="/moves/polemoves/".concat(e);a.push(t)}(e.polemoveRef)}},r.a.createElement(U.a,{className:"mb-16 pl-16",variant:"subtitle1"},n)," ",r.a.createElement(U.a,{variant:"caption",display:"block",gutterBottom:!0,className:"text-right pr-8"},ae()(e.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")),t!==o.length-1&&r.a.createElement($.a,{light:!0}))})))},le=t(983),ce=t(902),re=t(913),me=t(1084),se=t.n(me),oe=(t(1085),Object(M.a)((function(e){return{cropContainer:{width:"100%",height:"400px",padding:0,display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}}}))),ie=function(e){var a=Object(E.b)(),t=oe(),l=Object(c.useState)(null),m=Object(n.a)(l,2),s=m[0],o=m[1],f=Object(c.useRef)(null);Object(c.useEffect)((function(){if(f.current)var e=new se.a(f.current,{viewMode:2,zoomable:!1,scalable:!1,aspectRatio:1,highlight:!1,background:!1,center:!1,guides:!1,crop:function(){e.getCroppedCanvas().toBlob((function(e){o(e)}))}})}),[e.src]);var h=function(){var t=Object(u.a)(i.a.mark((function t(){var n,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("image",s),t.prev=2,t.next=5,y.a.post("".concat("http://www.polepath.com/api","/users/changeavatar"),n);case 5:200===(l=t.sent).status&&(a(Object(v.o)(l.data.photoURL)),e.close()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),a(b.E({message:t.t0.response.data.message,variant:"error"}));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(c.Fragment,null,r.a.createElement(x.a,{className:"text-center"},"Crop your photo"),r.a.createElement(p.a,{className:t.cropContainer},r.a.createElement("img",{src:e.src,ref:f,alt:"Crop Area",className:"max-h-full max-w-full block"})),r.a.createElement(le.a,{className:"flex justify-end"},r.a.createElement(d.a,{color:"primary",disabled:!s,type:"button",onClick:h},"Save"),r.a.createElement(d.a,{color:"primary",type:"button",onClick:e.close},"Cancel")))},ue=Object(M.a)((function(e){var a;return{dialogPaper:(a={margin:0,display:"flex",flexDirection:"column",alignItems:"center",padding:"10 auto",minHeight:"85vh",maxHeight:"85vh",minWidth:"82vw",maxWidth:"85vw",justifyContent:"space-evenly"},Object(l.a)(a,e.breakpoints.up("sm"),{minWidth:"70vw",maxWidth:"70vw"}),Object(l.a)(a,e.breakpoints.up("md"),{minWidth:"55vw",maxWidth:"55vw"}),Object(l.a)(a,e.breakpoints.up("lg"),{minWidth:"30vw"}),a),placeholder:{width:"100%",height:"320px",padding:0,display:"flex",justifyContent:"center",alignItems:"center"},button:{color:e.palette.primary}}})),de=function(e){var a=ue(),t=Object(c.useState)(""),l=Object(n.a)(t,2),m=l[0],s=l[1],o=Object(c.useState)(!1),i=Object(n.a)(o,2),u=i[0],b=i[1],E=function(){s(""),b(!1),e.close()};return r.a.createElement(f.a,{open:e.open,onClose:E},r.a.createElement(p.a,{className:a.dialogPaper},u?r.a.createElement(ie,{src:m,close:E}):r.a.createElement(c.Fragment,null,r.a.createElement(x.a,{className:"text-center"},"Update profile picture"),r.a.createElement($.a,{color:"primary",className:"mb-10 w-full",variant:"middle"}),r.a.createElement(re.a,{className:"w-full text-left",htmlFor:"photoUpload"},"Choose your photo:"),r.a.createElement(ce.a,{id:"photoUpload",className:"mb-20 w-full",type:"file",variant:"outlined",onChange:function(e){e.target.files&&s(URL.createObjectURL(e.target.files[0]))}}),r.a.createElement($.a,{color:"primary",className:"mb-10 w-full",variant:"middle"}),r.a.createElement(p.a,{className:Object(Q.default)(a.placeholder,!m&&"border-dashed border-2 border-gray-200")},m?r.a.createElement("img",{src:m,alt:"Preview Image",className:"max-h-full max-w-full block"}):r.a.createElement("div",null,"Preview"))," ",r.a.createElement(le.a,{className:"flex justify-end"},r.a.createElement(d.a,{color:"primary",disabled:!m,type:"button",onClick:function(){return b(!0)}},"Next"),r.a.createElement(d.a,{color:"primary",type:"button",onClick:E},"Cancel")))))},pe=Object(M.a)((function(e){return{layoutHeader:Object(l.a)({height:320,minHeight:320},e.breakpoints.down("md"),{height:240,minHeight:240}),avatar:{cursor:"pointer"},input:{width:"95%",marginTop:"1em",paddingBottom:"1em"},alert:{width:"100%",position:"absolute",zIndex:10,top:0,left:0,color:"rgb(30, 70, 32)",backgroundColor:"rgb(237, 247, 237)"},snackbar:{zIndex:15},card:{marginTop:"30px"}}}));a.default=Object(E.a)(null,(function(e){return Object(k.c)({showMessage:O.j,hideMessage:O.b},e)}))((function(e){var a=pe(),t=Object(c.useState)(0),l=Object(n.a)(t,2),m=l[0],o=(l[1],Object(c.useState)(!1)),i=Object(n.a)(o,2),u=(i[0],i[1],Object(c.useState)(!1)),d=Object(n.a)(u,2),p=d[0],f=d[1],b=Object(c.useState)(!1),v=Object(n.a)(b,2),x=v[0],h=v[1],N=Object(c.useState)({started:0,mastered:0}),g=Object(n.a)(N,2),j=g[0],y=g[1],O=Object(c.useState)(!1),k=Object(n.a)(O,2),M=(k[0],k[1],Object(c.useState)(!1)),L=Object(n.a)(M,2),W=(L[0],L[1],Object(c.useRef)(!1),Object(E.c)((function(e){return e.auth.user}))),R=Object(E.c)((function(e){return e.moves.moves.data}));return Object(c.useEffect)((function(){if(R){var e=R.filter((function(e){return e.userData&&e.userData.mastered})).length,a=R.filter((function(e){return e.userData})).length;y({started:a,mastered:e})}}),[R]),r.a.createElement(S.a,{classes:{header:a.layoutHeader,toolbar:"px-16 sm:px-24"},header:r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:"p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end"},r.a.createElement("div",{className:"flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start"},r.a.createElement(C.a,{animation:"transition.expandIn",delay:300},r.a.createElement(I.a,{className:"mb-16 w-96 h-96 ".concat(a.avatar),src:W.photoURL,onClick:function(){h(!0)}})),r.a.createElement(C.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(U.a,{className:"md:mx-24",variant:"h4",color:"inherit"},W.stageName,r.a.createElement(s.a,{className:"ml-8 cursor-pointer",fontSize:"small",onClick:function(){return f(!0)}})))))),content:r.a.createElement("div",{className:"p-16 sm:p-24"},r.a.createElement(de,{action:"confirm",open:x,close:function(){return h(!1)},user:W}),r.a.createElement(w,{action:"confirm",open:p,close:function(){return f(!1)}}),1===m&&r.a.createElement(G,null),2===m&&r.a.createElement(V,null),r.a.createElement("div",{className:"flex justify-between "},R&&r.a.createElement(Z,{count:j.mastered,label:"Moves Mastered"}),R&&r.a.createElement(Z,{count:j.started,label:"Moves Started"})),r.a.createElement(ne,null)," ")})}))}}]);