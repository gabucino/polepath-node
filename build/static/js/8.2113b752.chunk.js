(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[8],{1077:function(e,t,a){"use strict";a.r(t);var n=a(164),r=a(21),l=a(162),o=a(0),c=a.n(o),s=a(946),i=a(964),m=a(967),u=a(955),d=a(152),p=(a(1007),a(186)),f=a.n(p),g=a(264),b=a(1008),h=a.n(b),v=(a(1015),a(8)),x=a(13),E=a(945),y=a(961),j=a(953),O=a(954),w=a(891),N=a(990),I=a.n(N),C=a(899),D=a(966),k=a(1016),S=a(3),_=a(1017),F=a.n(_),P=a(1018),R=a.n(P),B=a(1019),W=a.n(B),T=Object(s.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},media:{height:0,paddingTop:"56.25%",marginTop:"30"},cardHeader:{display:"flex",justifyContent:"center"},imgContainer:{maxHeight:"80vh",display:"flex",justifyContent:"center",width:"100%"}}})),H=c.a.forwardRef((function(e,t){return c.a.createElement(C.a,Object.assign({direction:"up",ref:t},e))}));function L(e){var t=T(),a=Object(o.useState)(null),n=Object(r.a)(a,2),l=n[0],s=n[1];Object(o.useEffect)((function(){s(e.startIndex)}),[e.startIndex]);var i=function(){e.changeStartIndex(l),e.close()};return c.a.createElement("div",null,c.a.createElement(E.a,{className:"h-full",fullScreen:!0,open:e.open,onClose:i,TransitionComponent:H},c.a.createElement(j.a,{className:t.appBar},c.a.createElement(O.a,null,c.a.createElement(w.a,{edge:"start",color:"inherit",onClick:i,"aria-label":"close"},c.a.createElement(I.a,null)),c.a.createElement(d.a,{variant:"h6",className:t.title},"Gallery"))),null!==l&&c.a.createElement(D.a,{className:"text-center"},c.a.createElement(k.a,{title:"".concat(e.moveName," Progress")}),c.a.createElement(y.a,null),c.a.createElement(d.a,{variant:"h6",className:Object(S.default)(t.title,"flex justify-between py-8 mx-48")},e.images[l].description,c.a.createElement("div",null," ",c.a.createElement(F.a,{className:"cursor-pointer",onClick:function(){return e.deletePhoto(l)}}))),c.a.createElement(u.a,null," ",c.a.createElement(R.a,{style:{cursor:e.images.length>1?"pointer":"not-allowed"},color:e.images.length>1?"":"disabled",onClick:function(){s(0===l?e.images.length-1:function(e){return e-1})}}),c.a.createElement(W.a,{style:{cursor:e.images.length>1?"pointer":"not-allowed"},color:e.images.length>1?"":"disabled",onClick:function(){l===e.images.length-1?s(0):s((function(e){return e+1}))}})),c.a.createElement(u.a,{className:t.imgContainer},c.a.createElement("img",{className:"p-8",src:e.images[l].original,alt:e.images[l].description})))))}var A=a(133),U=Object(s.a)((function(e){return{thumbnail:{height:"80px",width:"30%"},currentPhoto:{maxWidth:"100%",maxHeight:"100%"},gallery:{display:"flex",justifyContent:"center",height:"350px"},listItem:{cursor:"pointer","&:hover":{background:"transparent"}},loader:{margin:"0 20px"}}})),M=function(e){var t=Object(v.b)(),a=Object(v.c)((function(e){return e.auth.user._id})),n=Object(v.c)((function(e){return e.moves.move})),l=U(e),s=Object(o.useRef)(null),i=Object(o.useState)(!1),m=Object(r.a)(i,2),u=m[0],d=m[1],p=Object(o.useState)(!1),b=Object(r.a)(p,2),E=b[0],y=b[1],j=Object(o.useState)(!1),O=Object(r.a)(j,2),w=O[0],N=O[1],I=Object(o.useState)([]),C=Object(r.a)(I,2),D=C[0],k=C[1],S=Object(o.useState)(0),_=Object(r.a)(S,2),F=_[0],P=_[1],R=function(){var e=Object(g.a)(f.a.mark((function e(a){var r,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=D[a]._id,l=D.filter((function(e){return e._id!==r})),k(l),y(!1),e.next=6,t(x.n(n.progressData.progressId,r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){if(d(!0),e.photos.length>0){var t=e.photos.map((function(e){return{original:"https://polepath.b-cdn.net/users/".concat(a,"/").concat(e.moveRef,"/").concat(e._id,".").concat(e.extension),thumbnail:"https://polepath.b-cdn.net/users/".concat(a,"/").concat(e.moveRef,"/").concat(e._id,".").concat(e.extension),originalClass:l.currentPhoto,thumbnailClass:l.thumbnail,description:e.date,_id:e._id}}));k(t)}d(!1),N(!0)}),[a,e.photos,l.currentPhoto,l.thumbnail]),c.a.createElement(o.Fragment,null,E?c.a.createElement(L,{changeStartIndex:function(e){P(e)},moveName:n.moveData.name,images:D,startIndex:s.current.state.currentIndex,deletePhoto:R,open:E,close:function(){return y(!1)}}):"",u&&w?c.a.createElement("div",{className:"flex justify-center px-20"},c.a.createElement(A.a,{className:l.loader,text:"Uploading your photo..."})):c.a.createElement(h.a,{showFullscreenButton:!1,showPlayButton:!1,startIndex:F,ref:s,className:l.gallery,onClick:function(){y(!0)},items:D,slideOnThumbnailOver:!0}))},z=a(182),G=a(44),J=a(1020),V=a.n(J),Y=a(95),q=a.n(Y),K=a(968),Q=Object(s.a)((function(e){var t;return{dialogPaper:(t={margin:0,display:"flex",flexDirection:"column",alignItems:"center",padding:"10 auto",minWidth:"82vw",maxWidth:"85vw",justifyContent:"space-evenly"},Object(G.a)(t,e.breakpoints.up("sm"),{minWidth:"70vw",maxWidth:"70vw"}),Object(G.a)(t,e.breakpoints.up("md"),{minWidth:"55vw",maxWidth:"55vw"}),Object(G.a)(t,e.breakpoints.up("lg"),{minWidth:"30vw"}),t),placeholder:{width:"100%",height:"320px",padding:0,display:"flex",justifyContent:"center",alignItems:"center"},button:{color:e.palette.primary}}})),X=function(e){var t=Object(v.b)(),a=Q(),n=Object(v.c)((function(e){return e.moves.move})),l=Object(o.useState)(!0),s=Object(r.a)(l,2),m=s[0],d=s[1],p=Object(o.useState)(new Date),b=Object(r.a)(p,2),h=b[0],j=b[1],O=Object(o.useState)(!1),w=Object(r.a)(O,2),N=w[0],I=w[1],C=function(){var a=Object(g.a)(f.a.mark((function a(r,l){var o;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(o=new FormData).append("image",e.blob),o.append("polemoveId",n.moveData._id),o.append("progressId",n.progressData.progressId),o.append("date",h),o.append("privacy","public"),o.append("category","photo"),I(!0),a.next=10,t(x.h(o,n.progressData.progressId));case 10:d(!0),j(new Date),I(!1),e.close();case 14:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return c.a.createElement(E.a,{open:e.open,onClose:e.close},c.a.createElement(u.a,{className:a.dialogPaper},c.a.createElement(o.Fragment,null,c.a.createElement(K.a,{className:"text-center"},"Upload new photo"),c.a.createElement(y.a,{color:"primary",className:"mb-10 w-full",variant:"middle"}),c.a.createElement(u.a,{className:Object(S.default)(a.placeholder,!e.preview&&"border-dashed border-2 border-gray-200")},c.a.createElement("img",{src:e.preview,alt:"preview",className:"max-h-full max-w-full block"})),c.a.createElement(q.a,{onValidSubmit:C,className:"flex flex-col justify-center w-full"}," ",m?"":c.a.createElement(V.a,{className:"z-10 p-8 mb-8 border-solid border-1 border-gray-600",selected:h,onChange:function(e){return j(e.getTime())}})," ",c.a.createElement(i.a,{disabled:N,color:"primary",type:"submit"},"Save"),c.a.createElement(i.a,{color:"primary",type:"button",onClick:e.close},"Cancel")))))},Z=Object(s.a)((function(e){return{placeholder:{width:"100%",height:"100px",padding:0,display:"flex",justifyContent:"center",alignItems:"center",border:"1px dashed lightgrey",textAlign:"center",backgroundColor:e.palette.secondary.main,fontStyle:"italic",cursor:"pointer"}}})),$=function(e){var t=Z(),a=Object(o.useState)(null),n=Object(r.a)(a,2),l=n[0],s=n[1],p=Object(o.useState)(""),f=Object(r.a)(p,2),g=f[0],b=f[1],h=Object(o.useState)(!1),v=Object(r.a)(h,2),x=v[0],E=v[1],y=Object(o.useRef)(null),j=function(){y.current.click()};return c.a.createElement(z.a,{className:"lg:w-1/2 mb-16"},c.a.createElement(m.a,{className:"flex justify-center flex-col align-center p-16"},c.a.createElement(d.a,{className:"underline flex justify-start mb-16",variant:"h5",component:"h5"},"Your progress"),e.photos.length>0?c.a.createElement(o.Fragment,null,c.a.createElement(M,{photos:e.photos,polemoveId:e.polemoveId}),c.a.createElement(u.a,{className:"pt-10 px-0"},c.a.createElement(i.a,{type:"button",className:"w-full",variant:"contained",color:"secondary",onClick:j},"Upload photo"))):c.a.createElement(u.a,{onClick:j,className:t.placeholder}," ","No photos yet :( Click here to add your first one!"),c.a.createElement("input",{type:"file",ref:y,hidden:!0,onChange:function(e){if(e.target.files){var t=e.target.files[0];s(URL.createObjectURL(e.target.files[0])),b(t),E(!0)}}}),l&&c.a.createElement(X,{open:x,preview:l,close:function(){return s(null),b(null),void E(!1)},blob:g,polemoveId:e.polemoveId})))},ee=a(944),te=a(904),ae=a(902),ne=a(969);function re(e){return c.a.createElement("div",null,c.a.createElement(E.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},e.children,c.a.createElement(ne.a,null,c.a.createElement(i.a,{onClick:e.onClose,color:"primary"},"Cancel"),c.a.createElement(i.a,{onClick:e.confirmHandler,color:"primary",autoFocus:!0},"confirm"===e.action?"Confirm":"Refresh"))))}var le=a(943),oe=a(893),ce=a(963),se=a(1063),ie=a.n(se),me=a(205),ue=Object(s.a)((function(e){return{deleteNoteButton:{padding:"0.5rem"}}})),de=function(e){var t=Object(v.b)(),a=Object(v.c)((function(e){return e.moves.move.progressData.notes})),n=ue(e),r=Object(o.useRef)(null);return c.a.createElement(z.a,{className:"flex flex-col mb-16 items-start justify-between p-16 lg:w-1/2 lg:flex-1 "},c.a.createElement(d.a,{className:"underline mt-8",variant:"h5",component:"h5"},"Your Notes"),a?c.a.createElement(le.a,{className:"flex flex-col flex-1 justify-start items-start"},a.map((function(t){return c.a.createElement(oe.a,{variant:"outlined",className:"text-base",key:t._id},c.a.createElement(ce.a,null,c.a.createElement(ie.a,null)),t.text,c.a.createElement("button",{className:n.deleteNoteButton,id:t._id},c.a.createElement(I.a,{id:t._id,onClick:function(){return e.toggleModal(t._id,"deleteNote")}})))}))):null,c.a.createElement(q.a,{onValidSubmit:function(a,n){var r={polemoveId:e.polemoveId,progressId:e.progressId,text:a.text,timestamp:Date.now()};t(x.g(r)),n()},ref:r,className:"flex flex-col justify-center w-full"},c.a.createElement(d.a,{className:"mt-8 mb-8",variant:"h6",component:"h6"},"New note"),c.a.createElement(me.b,{className:"mb-16",type:"text",name:"text",label:"Type your note here",multiline:!0,validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},variant:"outlined",required:!0,rows:4,value:""}),c.a.createElement(i.a,{type:"submit",variant:"contained",color:"secondary"},"Add note")))},pe=a(888),fe=a(901),ge=a(173),be=a(941),he=a(48),ve=a(24),xe=a(1064),Ee=a(1075),ye=Object(s.a)((function(e){return{stepLabel:{cursor:"pointer!important"},successFab:{background:"".concat(ge.a[500],"!important"),color:"white!important"},noborder:{border:"0"},selectedButton:{backgroundColor:e.palette.primary.main,color:"#FFF"},deleteNoteButton:{padding:"0.5rem"},dropzone:{border:"1px solid #121212",padding:"15px"},spinner:{minHeight:"80px",minWidth:"80px"},spinnerContainer:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},photoPlaceholder:{display:"flex",justifyContent:"center",alignItems:"center",flex:"1",margin:"16px",height:"80%"}}}));t.default=function(e){var t=Object(v.b)(),a=Object(v.c)((function(e){return e.moves.move})),s=Object(v.c)((function(e){return e.moves.progress.data})),i=Object(v.c)((function(e){return e.moves.moves.data})),m=Object(o.useState)(!1),p=Object(r.a)(m,2),f=p[0],g=p[1],b=Object(o.useState)(!1),h=Object(r.a)(b,2),E=h[0],y=h[1],j=Object(o.useState)(null),O=Object(r.a)(j,2),N=O[0],I=O[1],C=Object(o.useState)(null),D=Object(r.a)(C,2),k=D[0],_=D[1],F=Object(he.a)(),P=ye(e);Object(o.useEffect)((function(){if(i){if(!a.moveData.name){var r=i.find((function(t){return t._id===e.match.params.polemoveId}));t(x.B(r))}var l=s.find((function(e){return e.moveRef===a.moveData._id}));if(l){l.moveRef,l._id;var o=Object(n.a)(l,["moveRef","_id"]);o.progressId=l._id,t(x.C(o)),g(!0)}else t(x.x())}}),[a.moveData.name,a.moveData._id,t,e.match.params.polemoveId,s,i]),Object(o.useEffect)((function(){return function(){t(x.j())}}),[t]);var R="deleteNote"===k?c.a.createElement(o.Fragment,null,c.a.createElement(K.a,{id:"alert-dialog-title"},"Are you sure you want to delete note?"),c.a.createElement(xe.a,null,c.a.createElement(Ee.a,{id:"alert-dialog-description"},"If you reset your progress, all your notes and photos will be deleted permanently."))):c.a.createElement(o.Fragment,null,c.a.createElement(K.a,{id:"alert-dialog-title"},"Are you sure you want to reset your progress on ",a.moveData.name,"?"),c.a.createElement(xe.a,null,c.a.createElement(Ee.a,{id:"alert-dialog-description"},"If you reset your progress, all your notes and photos will be deleted permanently."))),B=c.a.createElement(z.a,{className:Object(S.default)(P.photoPlaceholder,"mb-16 lg:w-1/2")},c.a.createElement(d.a,{variant:"h6"},"This move doesn't have a main photo yet."));return c.a.createElement(l.a,{classes:{content:"flex flex-col flex-auto overflow-hidden",header:"h-72 min-h-72"},header:c.a.createElement("div",{className:"flex flex-1 items-center px-16 lg:px-24"},c.a.createElement(w.a,{to:"/moves/polemoves",component:ve.a},c.a.createElement(be.a,null,"ltr"===F.direction?"arrow_back":"arrow_forward")),a&&c.a.createElement(d.a,{className:"flex-1 text-20 mx-16 lg:text-center"},a.moveData.name)),content:a.moveData.name?c.a.createElement("div",{className:"flex flex-col w-full p-16 lg:mt-24 lg:flex-row lg:items-between lg:px-0 lg:flex-wrap overflow-scroll"},null===a.moveData.extension?B:c.a.createElement(z.a,{className:"lg:p-8 mb-5 lg:w-1/2"},c.a.createElement("img",{className:"m-5 block w-full h-full",alt:a.moveData.name,src:"https://polepath.b-cdn.net/mainphotos/".concat(a.moveData._id,".").concat(a.moveData.extension)})),c.a.createElement(u.a,{className:"lg:w-1/2 mb-16 p-0 flex flex-col justify-between"},c.a.createElement(pe.a,{className:"flex w-full sm:w-320 my-16",variant:"outlined"},c.a.createElement(fe.a,{htmlFor:"current-progress"},"Current progress "),c.a.createElement(ae.a,{value:f?a.progressData.mastered?"mastered":"inprogress":"oneday",onChange:function(e){(f?a.progressData.mastered?"mastered":"inprogress":"oneday")!==e.target.value&&("oneday"===e.target.value&&y(!0),a.progressData.progressId&&"oneday"!==e.target.value?t(x.I(a.progressData.progressId,"mastered"===e.target.value)):a.progressData.progressId||"oneday"===e.target.value||t(x.G(a.moveData._id,"mastered"===e.target.value)))},input:c.a.createElement(te.a,{name:"current-progress",id:"current-progress"})},c.a.createElement(ee.a,{value:"oneday"},"One day..."),c.a.createElement(ee.a,{value:"inprogress"},"In progress"),c.a.createElement(ee.a,{value:"mastered"},"Mastered"))),a.moveData.otherNames.length?c.a.createElement(d.a,{className:"text-justify mb-16",variant:"body2",component:"p"},c.a.createElement("em",{className:"text-xl"}," ","Also known as:",a&&a.moveData.otherNames.map((function(e,t){return t===a.moveData.otherNames.length-1?c.a.createElement("span",{key:e}," ",e," "):c.a.createElement("span",{key:e},e,", ")})))):""," ",c.a.createElement(z.a,{className:"flex-1 p-16  flex justify-center items-center"},c.a.createElement("em",{className:"text-base lg:text-xl"},a.moveData.description?a.moveData.description:"This move does not have a description yet.")),c.a.createElement(z.a,{className:"flex-1 p-16  mt-16 flex justify-center items-center"},c.a.createElement("em",{className:"text-base lg:text-xl"},"Public userphotos are coming soon!"))),f&&c.a.createElement($,{polemoveId:e.match.params.polemoveId,photos:a&&a.progressData.media}),f&&c.a.createElement(de,{toggleModal:function(e,t){_(t),null!==e&&I(e),y(!0)},progressId:a.progressData.progressId,polemoveId:e.match.params.polemoveId})," ",c.a.createElement(re,{action:"confirm",open:E,onClose:function(){y(!1),_(null)},confirmHandler:"deleteNote"===k?function(){var e={noteId:N,progressId:a.progressData.progressId};t(x.m(e)),I(null),y(!1),_(null)}:function(){g(!1),t(x.y(a.progressData.progressId)),y(!1),_(null)}},R)):c.a.createElement(A.a,null)})}}}]);