(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[9],{1105:function(e,t,a){"use strict";a.r(t);var n=a(193),r=a(980),o=a(981),c=a(960),l=a(219),i=a(155),s=a(3),m=a(0),u=a.n(m),p=a(24),d=a(191),f=a.n(d),g=a(271),b=a(6),x=a(19),h=a(192),E=a(979),w=a(955),y=a(954),v=a(95),j=a.n(v),N=a(8),O=a(348),k=a(90),I=a(103),L=a(467),S=a(20),C=a(44),G=a(55),P=Object(c.a)((function(e){return{facebookButton:{background:"#3b5998",padding:"0.5rem",color:"white",width:"100%",height:"39px",border:"1px",marginTop:"15px",borderRadius:"2px",fontSize:"14px"},googleButton:{marginTop:"15px",backgroundColor:"rgb(255, 255, 255)",display:"inline-flex",alignItems:"center",color:"rgba(0, 0, 0, 0.54)",boxShadow:"rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",padding:"0px",borderRadius:"2px",border:"1px solid transparent",fontSize:"14px",fontWeight:500,fontFamily:"Roboto, sans-serif",cursor:"pointer",opacity:"0.9",height:"39px",justifyContent:"center"},googleIcon:{marginRight:"1rem",color:e.palette.primary.main},googleSpan:{color:e.palette.primary.main,marginLeft:"4px"}}}));var R=Object(k.h)(Object(N.a)(null,(function(e){return Object(G.c)({showMessage:S.j,hideMessage:S.b,loginWithGoogle:C.m,registerUser:C.n},e)}))((function(e){var t=Object(N.b)(),a=Object(N.c)((function(e){return e.auth.login})),n=Object(m.useState)(!1),r=Object(x.a)(n,2),o=r[0],c=r[1],l=Object(m.useState)(!1),i=Object(x.a)(l,2),p=i[0],d=i[1],v=Object(m.useRef)(null),k=P(e);function S(){c(!1)}function C(){return(C=Object(g.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t(O.d(a));case 3:!0===e.sent?I.a.push("/welcome"):d(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(m.useEffect)((function(){a.error&&(a.error.username||a.error.password)&&(v.current.updateInputsWithError(Object(b.a)({},a.error)),S())}),[a.error]);var G=function(){var t=Object(g.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.error){t.next=3;break}return t.next=3,e.loginWithGoogle(a.wc.access_token);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return u.a.createElement("div",{className:"w-full"},u.a.createElement(j.a,{onValidSubmit:function(e){return C.apply(this,arguments)},onValid:function(){c(!0)},onInvalid:S,ref:v,className:"flex flex-col justify-center w-full"},u.a.createElement(h.c,{className:"mb-16",type:"text",name:"email",label:"Email",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:u.a.createElement(y.a,{position:"end"},u.a.createElement(w.a,{className:"text-20",color:"action"},"email"))},variant:"outlined",required:!0}),u.a.createElement(h.c,{className:"mb-16",type:"password",name:"password",label:"Password",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:u.a.createElement(y.a,{position:"end"},u.a.createElement(w.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0}),u.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",className:"w-full mx-auto normal-case mt-16","aria-label":"LOG IN",disabled:!o||p,value:"firebase"},p?"Loading...":"Login"),u.a.createElement(L.GoogleLogin,{clientId:"397855449446-7bsrsins5fj29j67bnes4cd0np2lve6f.apps.googleusercontent.com",render:function(e){return u.a.createElement("button",{onClick:e.onClick,className:k.googleButton},u.a.createElement("i",{className:Object(s.default)(k.googleIcon,"fab fa-google")}),"Sign in with ",u.a.createElement("span",{className:k.googleSpan}," Google"))},onSuccess:G,onFailure:G,cookiePolicy:"single_host_origin"})))}))),T=Object(c.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(l.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText}}}));t.default=function(){var e=T();return u.a.createElement("div",{className:Object(s.default)(e.root,"flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")},u.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},u.a.createElement(n.a,{animation:"transition.expandIn"},u.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.png",alt:"logo"})),u.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},u.a.createElement(i.a,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to PolePath!")),u.a.createElement(n.a,{delay:400},u.a.createElement(i.a,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"A supporting community, no matter where you are on your way from zero to hero."))),u.a.createElement(n.a,{animation:{translateX:[0,"100%"]}},u.a.createElement(r.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},u.a.createElement(o.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},u.a.createElement(i.a,{variant:"h6",className:"text-center md:w-full mb-48"},"LOGIN TO YOUR ACCOUNT"),u.a.createElement(R,null),u.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32"},u.a.createElement("span",{className:"font-medium"},"Don't have an account?"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/forgot-password"},"Forgot your password?"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/users/new"},"Create an account"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/"},"Back to Dashboard"))))))}}}]);