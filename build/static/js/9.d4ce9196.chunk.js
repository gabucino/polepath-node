(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[9],{1085:function(e,t,a){"use strict";a.r(t);var n=a(165),r=a(21),l=a(162),o=a(133),c=a(1086),s=a(1083),i=a(939),m=a(891),u=a(48),d=a(181),p=a(0),f=a.n(p),g=a(9),b=a(24),v=a(13),h=a(182),E=a(942),x=a(904),y=a(902),j=a(962),O=a(943),w=a(991);function N(e){return f.a.createElement(O.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",fullWidth:!0,maxWidth:"sm"},e.children,f.a.createElement(w.a,null,f.a.createElement(j.a,{onClick:e.onClose,color:"primary"},"Cancel"),f.a.createElement(j.a,{onClick:e.confirmHandler,color:"primary",autoFocus:!0},"confirm"===e.action?"Confirm":"Refresh")))}var k=a(888),D=a(901),C=a(953),I=a(992),M=a(1081),S=a(983),_=function(e){var t=Object(g.b)(),a=Object(p.useState)(!1),n=Object(r.a)(a,2),l=n[0],o=n[1];Object(p.useEffect)((function(){console.log(Object.entries(e.currentMove.progressData).length)}),[e.currentMove.progressData]);return f.a.createElement(p.Fragment,null,f.a.createElement("div",{className:"flex flex-col w-full p-16 lg:mt-24 lg:flex-row lg:items-between lg:px-0 lg:flex-wrap overflow-scroll"},f.a.createElement(h.a,{className:"lg:p-8 mb-5 lg:w-1/2"},f.a.createElement("img",{className:"m-5 block w-full h-full",alt:e.currentMove.moveData.name,src:"https://polepath.b-cdn.net/mainphotos/".concat(e.currentMove.moveData._id,".").concat(e.currentMove.moveData.extension)})),f.a.createElement(C.a,{className:"lg:w-1/2 mb-16 p-0 flex flex-col justify-between"},f.a.createElement(k.a,{className:"flex w-full sm:w-320 my-16",variant:"outlined"},f.a.createElement(D.a,{htmlFor:"current-progress"},"Current progress "),f.a.createElement(y.a,{value:0===Object.keys(e.currentMove.progressData).length?"oneday":e.currentMove.progressData.mastered?"mastered":"inprogress",onChange:function(a){console.log(a.target.value);var n=0===Object.keys(e.currentMove.progressData).length?"oneday":e.currentMove.progressData.mastered?"mastered":"inprogress";console.log(n),n!==a.target.value&&("oneday"===a.target.value&&(console.log("defo should enter here"),o(!0)),e.currentMove.progressData.progressId&&"oneday"!==a.target.value?t(v.I(e.currentMove.progressData.progressId,"mastered"===a.target.value)):e.currentMove.progressData.progressId||"oneday"===a.target.value||t(v.G(e.currentMove.moveData._id,"mastered"===a.target.value)))},input:f.a.createElement(x.a,{name:"current-progress",id:"current-progress"})},f.a.createElement(E.a,{value:"oneday"},"One day..."),f.a.createElement(E.a,{value:"inprogress"},"In progress"),f.a.createElement(E.a,{value:"mastered"},"Mastered"))),e.currentMove.moveData.otherNames.length?f.a.createElement(d.a,{className:"text-justify mb-16",variant:"body2",component:"p"},f.a.createElement("em",{className:"text-xl"}," ","Also known as:",e.currentMove&&e.currentMove.moveData.otherNames.map((function(t,a){return a===e.currentMove.moveData.otherNames.length-1?f.a.createElement("span",{key:t}," ",t," "):f.a.createElement("span",{key:t},t,", ")})))):""," ",f.a.createElement(h.a,{className:"flex-1 p-16  flex justify-center items-center"},f.a.createElement("em",{className:"text-base lg:text-xl"},e.currentMove.moveData.description?e.currentMove.moveData.description:"This move doesn't have a description yet :(")),f.a.createElement(h.a,{className:"flex-1 p-16  mt-16 flex justify-center items-center"},f.a.createElement("em",{className:"text-base lg:text-xl"},"Public userphotos are coming soon!"))),l&&f.a.createElement(N,{action:"confirm",open:l,onClose:function(){return o(!1)},confirmHandler:function(){t(v.y(e.currentMove.progressData.progressId)),o(!1)}},f.a.createElement(p.Fragment,null,f.a.createElement(S.a,{id:"alert-dialog-title"},"Are you sure you want to reset your progress on ",e.currentMove.moveData.name,"?"),f.a.createElement(I.a,null,f.a.createElement(M.a,{id:"alert-dialog-description"},"If you reset your progress, all your notes and photos will be deleted permanently."))))))},W=a(44),P=a(944),R=a(965),F=(a(1009),a(187)),T=a.n(F),B=a(263),H=a(1010),Y=a.n(H),A=(a(1017),a(959)),L=a(951),U=a(952),V=a(993),z=a.n(V),G=a(899),J=a(964),q=a(1082),K=a(3),Q=a(1018),X=a.n(Q),Z=a(1019),$=a.n(Z),ee=a(1020),te=a.n(ee),ae=Object(P.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},media:{height:0,paddingTop:"56.25%",marginTop:"30"},cardHeader:{display:"flex",justifyContent:"center"},imgContainer:{maxHeight:"80vh",display:"flex",justifyContent:"center",width:"100%"}}})),ne=f.a.forwardRef((function(e,t){return f.a.createElement(G.a,Object.assign({direction:"up",ref:t},e))}));function re(e){var t=ae(),a=Object(p.useState)(null),n=Object(r.a)(a,2),l=n[0],o=n[1];Object(p.useEffect)((function(){o(e.startIndex)}),[e.startIndex]);var c=function(){e.changeStartIndex(l),e.close()};return f.a.createElement("div",null,f.a.createElement(O.a,{className:"h-full",fullScreen:!0,open:e.open,onClose:c,TransitionComponent:ne},f.a.createElement(L.a,{className:t.appBar},f.a.createElement(U.a,null,f.a.createElement(m.a,{edge:"start",color:"inherit",onClick:c,"aria-label":"close"},f.a.createElement(z.a,null)),f.a.createElement(d.a,{variant:"h6",className:t.title},"Gallery"))),null!==l&&f.a.createElement(J.a,{className:"text-center"},f.a.createElement(q.a,{title:"".concat(e.moveName," Progress")}),f.a.createElement(A.a,null),f.a.createElement(d.a,{variant:"h6",className:Object(K.default)(t.title,"flex justify-between py-8 mx-48")},e.images[l].description,f.a.createElement("div",null," ",f.a.createElement(X.a,{className:"cursor-pointer",onClick:function(){return e.deletePhoto(l)}}))),f.a.createElement(C.a,null," ",f.a.createElement($.a,{style:{cursor:e.images.length>1?"pointer":"not-allowed"},color:e.images.length>1?"":"disabled",onClick:function(){o(0===l?e.images.length-1:function(e){return e-1})}}),f.a.createElement(te.a,{style:{cursor:e.images.length>1?"pointer":"not-allowed"},color:e.images.length>1?"":"disabled",onClick:function(){l===e.images.length-1?o(0):o((function(e){return e+1}))}})),f.a.createElement(C.a,{className:t.imgContainer},f.a.createElement("img",{className:"p-8",src:e.images[l].original,alt:e.images[l].description})))))}var le=a(265),oe=a.n(le),ce=Object(P.a)((function(e){return{thumbnail:{height:"80px",width:"30%"},currentPhoto:{maxWidth:"100%",maxHeight:"100%"},gallery:{display:"flex",justifyContent:"center",height:"350px"},listItem:{cursor:"pointer","&:hover":{background:"transparent"}},loader:{margin:"0 20px"}}})),se=function(e){var t=Object(g.b)(),a=Object(g.c)((function(e){return e.auth.user._id})),n=Object(g.c)((function(e){return e.moves.move})),l=ce(e),c=Object(p.useRef)(null),s=Object(p.useState)(!1),i=Object(r.a)(s,2),m=i[0],u=i[1],d=Object(p.useState)(!1),b=Object(r.a)(d,2),h=b[0],E=b[1],x=Object(p.useState)(!1),y=Object(r.a)(x,2),j=y[0],O=y[1],w=Object(p.useState)([]),N=Object(r.a)(w,2),k=N[0],D=N[1],C=Object(p.useState)(0),I=Object(r.a)(C,2),M=I[0],S=I[1],_=function(){var e=Object(B.a)(T.a.mark((function e(a){var r,l;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=k[a]._id,l=k.filter((function(e){return e._id!==r})),D(l),E(!1),e.next=6,t(v.n(n.progressData.progressId,r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){if(u(!0),e.photos.length>0){var t=e.photos.map((function(e){return{original:"https://polepath.b-cdn.net/users/".concat(a,"/").concat(e.moveRef,"/").concat(e._id,".").concat(e.extension),thumbnail:"https://polepath.b-cdn.net/users/".concat(a,"/").concat(e.moveRef,"/").concat(e._id,".").concat(e.extension),originalClass:l.currentPhoto,thumbnailClass:l.thumbnail,description:oe()(e.date).format("D MMMM YYYY"),_id:e._id}}));D(t)}u(!1),O(!0)}),[a,e.photos,l.currentPhoto,l.thumbnail]),f.a.createElement(p.Fragment,null,h?f.a.createElement(re,{changeStartIndex:function(e){S(e)},moveName:n.moveData.name,images:k,startIndex:c.current.state.currentIndex,deletePhoto:_,open:h,close:function(){return E(!1)}}):"",m&&j?f.a.createElement("div",{className:"flex justify-center px-20"},f.a.createElement(o.a,{className:l.loader,text:"Uploading your photo..."})):f.a.createElement(Y.a,{showFullscreenButton:!1,showPlayButton:!1,startIndex:M,ref:c,className:l.gallery,onClick:function(){E(!0)},items:k,slideOnThumbnailOver:!0}))},ie=a(1021),me=a.n(ie),ue=a(95),de=a.n(ue),pe=a(948),fe=a(968),ge=a(183),be=Object(P.a)((function(e){var t;return{dialogPaper:(t={margin:0,display:"flex",flexDirection:"column",alignItems:"center",padding:"10 auto",minWidth:"82vw",maxWidth:"85vw",justifyContent:"space-evenly"},Object(W.a)(t,e.breakpoints.up("sm"),{minWidth:"70vw",maxWidth:"70vw"}),Object(W.a)(t,e.breakpoints.up("md"),{minWidth:"55vw",maxWidth:"55vw"}),Object(W.a)(t,e.breakpoints.up("lg"),{minWidth:"30vw"}),t),placeholder:{width:"100%",height:"320px",padding:0,display:"flex",justifyContent:"center",alignItems:"center"},button:{color:e.palette.primary}}})),ve=function(e){var t=Object(g.b)(),a=be(),n=Object(g.c)((function(e){return e.moves.move})),l=Object(p.useState)(!1),o=Object(r.a)(l,2),c=o[0],s=o[1],i=Object(p.useState)(new Date),m=Object(r.a)(i,2),u=m[0],b=m[1],h=Object(p.useState)(!1),E=Object(r.a)(h,2),x=E[0],y=E[1],w=function(){var a=Object(B.a)(T.a.mark((function a(r,l){var o;return T.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(o=new FormData).append("image",e.blob),o.append("polemoveId",n.moveData._id),o.append("progressId",n.progressData.progressId),o.append("date",u),o.append("privacy","public"),o.append("category","photo"),y(!0),a.next=10,t(v.h(o));case 10:s(!1),b(new Date),y(!1),e.close();case 14:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return f.a.createElement(O.a,{open:e.open,onClose:e.close},f.a.createElement(C.a,{className:a.dialogPaper},f.a.createElement(p.Fragment,null,f.a.createElement(S.a,{className:"text-center"},"Upload new photo"),f.a.createElement(A.a,{color:"primary",className:"mb-10 w-full",variant:"middle"}),f.a.createElement(C.a,{className:Object(K.default)(a.placeholder,!e.preview&&"border-dashed border-2 border-gray-200")},f.a.createElement("img",{src:e.preview,alt:"preview",className:"max-h-full max-w-full block"})),f.a.createElement(de.a,{onValidSubmit:w,className:"flex flex-col justify-center w-full"}," ",f.a.createElement(d.a,{className:"my-8",variant:"h5",component:"h5"},"When did you take that photo?"),f.a.createElement(ge.a,{name:"date",className:"z-1"},f.a.createElement(pe.a,{onClick:function(){return s(!1)},value:"today",control:f.a.createElement(fe.a,{checked:!c,color:"primary"}),label:"Today"}),f.a.createElement(pe.a,{onClick:function(){return s(!0)},value:"earlier",control:f.a.createElement(fe.a,{checked:c,color:"primary"}),label:"Previously, just uploading now"})),c?f.a.createElement(me.a,{className:"z-10 p-8 mb-8 border-solid border-1 border-gray-600",selected:u,fixedHeight:!0,onChange:function(e){return b(e.getTime())},maxDate:new Date}):""," ",f.a.createElement(j.a,{disabled:x,color:"primary",type:"submit"},"Save"),f.a.createElement(j.a,{color:"primary",type:"button",onClick:e.close},"Cancel")))))},he=Object(P.a)((function(e){return{placeholder:{width:"100%",height:"100px",padding:0,display:"flex",justifyContent:"center",alignItems:"center",border:"1px dashed lightgrey",textAlign:"center",backgroundColor:e.palette.secondary.main,fontStyle:"italic",cursor:"pointer"},container:Object(W.a)({},e.breakpoints.up("sm"),{maxWidth:"50vw",minWidth:"50vw"})}})),Ee=function(e){var t=he(),a=Object(p.useState)(null),n=Object(r.a)(a,2),l=n[0],o=n[1],c=Object(p.useState)(""),s=Object(r.a)(c,2),i=s[0],m=s[1],u=Object(p.useState)(!1),g=Object(r.a)(u,2),b=g[0],v=g[1],E=Object(p.useRef)(null),x=function(){E.current.click()};return f.a.createElement(h.a,{className:t.container},f.a.createElement(R.a,{className:"flex justify-center flex-col align-center p-16"},f.a.createElement(d.a,{className:"underline flex justify-start mb-16",variant:"h5",component:"h5"},"Your progress"),e.photos&&e.photos.length>0?f.a.createElement(p.Fragment,null,f.a.createElement(se,{photos:e.photos,polemoveId:e.polemoveId}),f.a.createElement(C.a,{className:"pt-10 px-0"},f.a.createElement(j.a,{type:"button",className:"w-full",variant:"contained",color:"secondary",onClick:x},"Upload photo"))):f.a.createElement(C.a,{onClick:x,className:t.placeholder}," ","No photos yet :( Click here to add your first one!"),f.a.createElement("input",{type:"file",ref:E,hidden:!0,onChange:function(e){if(e.target.files){var t=e.target.files[0];o(URL.createObjectURL(e.target.files[0])),m(t),v(!0)}}}),l&&f.a.createElement(ve,{open:b,preview:l,close:function(){return o(null),m(null),void v(!1)},blob:i,polemoveId:e.polemoveId})))},xe=a(941),ye=a(893),je=a(961),Oe=a(1064),we=a.n(Oe),Ne=a(989),ke=a.n(Ne),De=function(e){return f.a.createElement(de.a,{onValidSubmit:e.noteSubmitHandler,className:"flex flex-col justify-center w-full"},f.a.createElement(d.a,{className:"mt-8 mb-8",variant:"h6",component:"h6"},"New note"),f.a.createElement(ge.c,{className:"mb-16",type:"text",name:"text",label:"Type your note here",multiline:!0,validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},variant:"outlined",required:!0,rows:4,value:""}),f.a.createElement(j.a,{type:"submit",variant:"contained",color:"secondary",disabled:!e.progressId},"Add note"))},Ce=a(947),Ie=Object(P.a)((function(e){return{deleteNoteButton:{padding:"0 1rem"},container:Object(W.a)({},e.breakpoints.up("sm"),{maxWidth:"50vw",minWidth:"50vw"}),listItem:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"flex-start","&:hover":{background:e.palette.secondary.main,cursor:"pointer"}}}})),Me=function(e){var t=Object(g.b)(),a=Object(g.c)((function(e){return e.moves.move.progressData.notes})),n=Ie(e),l=Object(p.useState)({delete:!1}),o=Object(r.a)(l,2),c=o[0],s=o[1],i=Object(p.useState)(!1),m=Object(r.a)(i,2),u=m[0],b=m[1];return f.a.createElement(h.a,{className:Object(K.default)(n.container,"flex flex-col mb-16 items-start justify-between p-16 lg:flex-grow-0 lg:flex-1 ")},f.a.createElement(d.a,{className:"underline mt-8",variant:"h5",component:"h5"},"Your Notes"),a?f.a.createElement(xe.a,{className:"flex flex-col w-full justify-between items-start"},a.map((function(e){return f.a.createElement(ye.a,{variant:"outlined",className:n.listItem,key:e._id?e._id:"0"},f.a.createElement(je.a,null,f.a.createElement(we.a,null)),f.a.createElement("div",{className:"w-full flex justify-start"},f.a.createElement(d.a,{style:{wordBreak:"break-all",whiteSpace:"pre-line"},variant:"body1"},e.text," ")),e._id?f.a.createElement("button",{className:n.deleteNoteButton,id:e._id},f.a.createElement(z.a,{onClick:function(){return s({delete:!0,id:e._id,text:e.text})}})):f.a.createElement(Ce.a,null))}))):null,f.a.createElement(j.a,{color:"primary",startIcon:f.a.createElement(ke.a,null),onClick:function(){b(!0)}},"ADD NOTE"),u&&f.a.createElement(De,{progressId:e.progressId,noteSubmitHandler:function(a,n){var r={polemoveId:e.polemoveId,progressId:e.progressId,text:a.text,timestamp:Date.now()};t(v.g(r)),n(),b(!1)}}),c.delete&&f.a.createElement(N,{action:"confirm",open:c.delete,onClose:function(){return s({delete:!1})},confirmHandler:function(){var a={noteId:c.id,progressId:e.progressId};t(v.m(a)),s({delete:!1})}},f.a.createElement(p.Fragment,null,f.a.createElement(S.a,{id:"alert-dialog-title"},"Delete note?"),f.a.createElement(I.a,null,f.a.createElement("div",{className:"p-16 mb-16 bg-gray-300"},f.a.createElement(M.a,{id:"alert-dialog-description"},f.a.createElement("i",{className:"break-all whitespace-pre-line"},'"'.concat(c.text.length>300?c.text.substring(0,300)+"...":c.text,'"'))," ")),f.a.createElement(M.a,{id:"alert-dialog-description"},"No takebacksies... ")))))};t.default=function(e){var t=Object(g.b)(),a=Object(g.c)((function(e){return e.moves.move})),h=Object(g.c)((function(e){return e.moves.progress.data})),E=Object(g.c)((function(e){return e.moves.moves.data})),x=Object(p.useState)(0),y=Object(r.a)(x,2),j=y[0],O=y[1],w=Object(u.a)();return Object(p.useEffect)((function(){if(E){if(!a.moveData.name){var r=E.find((function(t){return t._id===e.match.params.polemoveId}));t(v.B(r))}var l=h.find((function(e){return e.moveRef===a.moveData._id}));if(l){l.moveRef,l._id;var o=Object(n.a)(l,["moveRef","_id"]);o.progressId=l._id,t(v.C(o))}else t(v.x())}}),[a.moveData.name,a.moveData._id,t,e.match.params.polemoveId,h,E]),Object(p.useEffect)((function(){return function(){t(v.j())}}),[t]),f.a.createElement(l.a,{classes:{content:"flex flex-col flex-auto overflow-hidden",header:"h-72 min-h-72"},header:f.a.createElement("div",{className:"flex flex-1 items-center px-16 lg:px-24"},f.a.createElement(m.a,{to:"/moves/polemoves",component:b.a},f.a.createElement(i.a,null,"ltr"===w.direction?"arrow_back":"arrow_forward")),a&&f.a.createElement(d.a,{className:"flex-1 text-20 mx-16 lg:text-center"},a.moveData.name)),contentToolbar:f.a.createElement(c.a,{value:j,onChange:function(e,t){console.log(t),O(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"off",classes:{root:"h-64 w-full border-b-1"}},f.a.createElement(s.a,{classes:{root:"h-64"},label:"Info"}),f.a.createElement(s.a,{classes:{root:"h-64"},disabled:!Object.keys(a.progressData).length,label:"Photos & Videos"}),f.a.createElement(s.a,{classes:{root:"h-64"},disabled:!Object.keys(a.progressData).length,label:"Notes"})),content:a.moveData.name?f.a.createElement("div",{className:"w-full flex justify-center"},0===j&&f.a.createElement(_,{currentMove:a}),1===j&&f.a.createElement(Ee,{photos:a.progressData.media,currentMove:a}),2===j&&f.a.createElement(Me,{notes:a.progressData.notes,progressId:a.progressData.progressId})):f.a.createElement(o.a,null)})}}}]);