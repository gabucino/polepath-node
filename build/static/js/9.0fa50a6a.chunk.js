(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[9],{1094:function(e,t,a){"use strict";a.r(t);var n=a(181),r=a(970),o=a(971),c=a(950),l=a(205),i=a(149),s=a(3),m=a(0),u=a.n(m),p=a(29),d=a(199),f=a.n(d),g=a(256),b=a(10),x=a(14),h=a(180),E=a(969),w=a(945),v=a(944),y=a(89),N=a.n(y),j=a(8),k=a(339),O=a(84),I=a(452),L=a(20),C=a(45),S=a(49),G=Object(c.a)((function(e){return{facebookButton:{background:"#3b5998",padding:"0.5rem",color:"white",width:"100%",height:"39px",border:"1px",marginTop:"15px",borderRadius:"2px",fontSize:"14px"},googleButton:{marginTop:"15px",backgroundColor:"rgb(255, 255, 255)",display:"inline-flex",alignItems:"center",color:"rgba(0, 0, 0, 0.54)",boxShadow:"rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",padding:"0px",borderRadius:"2px",border:"1px solid transparent",fontSize:"14px",fontWeight:500,fontFamily:"Roboto, sans-serif",cursor:"pointer",opacity:"0.9",height:"39px",justifyContent:"center"},googleIcon:{marginRight:"2rem"}}}));var P=Object(O.h)(Object(j.a)(null,(function(e){return Object(S.c)({showMessage:L.k,hideMessage:L.b,loginWithGoogle:C.l,loginWithFacebook:C.k,registerUser:C.m},e)}))((function(e){var t=Object(j.b)(),a=Object(j.c)((function(e){return e.auth.login})),n=Object(m.useState)(!1),r=Object(x.a)(n,2),o=r[0],c=r[1],l=Object(m.useRef)(null),i=G(e);function p(){c(!1)}function d(){return(d=Object(g.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(k.d(a));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(m.useEffect)((function(){a.error&&(a.error.username||a.error.password)&&(l.current.updateInputsWithError(Object(b.a)({},a.error)),p())}),[a.error]);var y=function(){var t=Object(g.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.error){t.next=3;break}return t.next=3,e.loginWithGoogle(a.wc.access_token);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",{className:"w-full"},u.a.createElement(N.a,{onValidSubmit:function(e){return d.apply(this,arguments)},onValid:function(){c(!0)},onInvalid:p,ref:l,className:"flex flex-col justify-center w-full"},u.a.createElement(h.c,{className:"mb-16",type:"text",name:"email",label:"Email",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:u.a.createElement(v.a,{position:"end"},u.a.createElement(w.a,{className:"text-20",color:"action"},"email"))},variant:"outlined",required:!0}),u.a.createElement(h.c,{className:"mb-16",type:"password",name:"password",label:"Password",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:u.a.createElement(v.a,{position:"end"},u.a.createElement(w.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0}),u.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",className:"w-full mx-auto normal-case mt-16","aria-label":"LOG IN",disabled:!o,value:"firebase"},"Login"),u.a.createElement(I.GoogleLogin,{clientId:"397855449446-7bsrsins5fj29j67bnes4cd0np2lve6f.apps.googleusercontent.com",render:function(e){return u.a.createElement("button",{onClick:e.onClick,className:i.googleButton},u.a.createElement("i",{className:Object(s.default)(i.googleIcon,"fab fa-google")}),"Sign up with ",u.a.createElement("span",{style:{color:"#c3073f",marginLeft:"4px"}}," Google"))},buttonText:"Login",onSuccess:y,onFailure:y,cookiePolicy:"single_host_origin"})))}))),R=Object(c.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(l.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText}}}));t.default=function(){var e=R();return u.a.createElement("div",{className:Object(s.default)(e.root,"flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")},u.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},u.a.createElement(n.a,{animation:"transition.expandIn"},u.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.png",alt:"logo"})),u.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},u.a.createElement(i.a,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to PolePath!")),u.a.createElement(n.a,{delay:400},u.a.createElement(i.a,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"For now it's nothing, but one day it's gonna be pretty cool."))),u.a.createElement(n.a,{animation:{translateX:[0,"100%"]}},u.a.createElement(r.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},u.a.createElement(o.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},u.a.createElement(i.a,{variant:"h6",className:"text-center md:w-full mb-48"},"LOGIN TO YOUR ACCOUNT"),u.a.createElement(P,null),u.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32"},u.a.createElement("span",{className:"font-medium"},"Don't have an account?"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/forgot-password"},"Forgot your password?"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/users/new"},"Create an account"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/"},"Back to Dashboard"))))))}}}]);