(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[8],{1090:function(e,t,a){"use strict";a.r(t);var n=a(188),r=a(964),o=a(965),c=a(944),l=a(240),i=a(181),s=a(3),m=a(0),u=a.n(m),p=a(24),d=a(187),f=a.n(d),g=a(263),x=a(7),b=a(21),h=a(183),E=a(962),w=a(939),y=a(938),v=a(95),N=a.n(v),j=a(9),O=a(114),k=a(457),I=a(14),L=Object(c.a)((function(e){return{facebookButton:{background:"#3b5998",padding:"0.5rem",color:"white",width:"100%",height:"39px",border:"1px",marginTop:"15px",borderRadius:"2px",fontSize:"14px"},googleButton:{marginTop:"15px",backgroundColor:"rgb(255, 255, 255)",display:"inline-flex",alignItems:"center",color:"rgba(0, 0, 0, 0.54)",boxShadow:"rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px",padding:"0px",borderRadius:"2px",border:"1px solid transparent",fontSize:"14px",fontWeight:500,fontFamily:"Roboto, sans-serif",cursor:"pointer",opacity:"0.9",height:"39px",justifyContent:"center"},googleIcon:{marginRight:"1rem",color:e.palette.primary.main},googleSpan:{color:e.palette.primary.main,marginLeft:"4px"}}}));var S=function(e){var t=Object(j.b)(),a=Object(j.c)((function(e){return e.auth.login})),n=Object(m.useState)(!1),r=Object(b.a)(n,2),o=r[0],c=r[1],l=Object(m.useState)(!1),i=Object(b.a)(l,2),p=i[0],d=i[1],v=Object(m.useRef)(null),S=L(e);function C(){c(!1)}function P(){return(P=Object(g.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,t(I.q(a));case 3:!0===e.sent?O.a.push("/welcome"):d(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(m.useEffect)((function(){a.error&&(a.error.username||a.error.password)&&(v.current.updateInputsWithError(Object(x.a)({},a.error)),C())}),[a.error]);var R=function(){var e=Object(g.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.error){e.next=3;break}return e.next=3,t(I.r(a.wc.access_token));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return u.a.createElement("div",{className:"w-full"},u.a.createElement(N.a,{onValidSubmit:function(e){return P.apply(this,arguments)},onValid:function(){c(!0)},onInvalid:C,ref:v,className:"flex flex-col justify-center w-full"},u.a.createElement(h.c,{className:"mb-16",type:"text",name:"email",label:"Email",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:u.a.createElement(y.a,{position:"end"},u.a.createElement(w.a,{className:"text-20",color:"action"},"email"))},variant:"outlined",required:!0}),u.a.createElement(h.c,{className:"mb-16",type:"password",name:"password",label:"Password",validations:{minLength:4},validationErrors:{minLength:"Min character length is 4"},InputProps:{endAdornment:u.a.createElement(y.a,{position:"end"},u.a.createElement(w.a,{className:"text-20",color:"action"},"vpn_key"))},variant:"outlined",required:!0}),u.a.createElement(E.a,{type:"submit",variant:"contained",color:"primary",className:"w-full mx-auto normal-case mt-16","aria-label":"LOG IN",disabled:!o||p,value:"firebase"},p?"Loading...":"Login"),u.a.createElement(k.GoogleLogin,{clientId:"397855449446-7bsrsins5fj29j67bnes4cd0np2lve6f.apps.googleusercontent.com",render:function(e){return u.a.createElement("button",{onClick:e.onClick,className:S.googleButton},u.a.createElement("i",{className:Object(s.default)(S.googleIcon,"fab fa-google")}),"Sign in with ",u.a.createElement("span",{className:S.googleSpan}," Google"))},onSuccess:R,onFailure:R,cookiePolicy:"single_host_origin"})))},C=Object(c.a)((function(e){return{root:{background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(Object(l.darken)(e.palette.primary.dark,.5)," 100%)"),color:e.palette.primary.contrastText}}}));t.default=function(){var e=C();return u.a.createElement("div",{className:Object(s.default)(e.root,"flex flex-col flex-1 flex-shrink-0 p-24 md:flex-row md:p-0")},u.a.createElement("div",{className:"flex flex-col flex-grow-0 items-center text-white p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"},u.a.createElement(n.a,{animation:"transition.expandIn"},u.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.png",alt:"logo"})),u.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},u.a.createElement(i.a,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to PolePath!")),u.a.createElement(n.a,{delay:400},u.a.createElement(i.a,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"A supporting community, no matter where you are on your way from zero to hero."))),u.a.createElement(n.a,{animation:{translateX:[0,"100%"]}},u.a.createElement(r.a,{className:"w-full max-w-400 mx-auto m-16 md:m-0",square:!0},u.a.createElement(o.a,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},u.a.createElement(i.a,{variant:"h6",className:"text-center md:w-full mb-48"},"LOGIN TO YOUR ACCOUNT"),u.a.createElement(S,null),u.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32"},u.a.createElement("span",{className:"font-medium"},"Don't have an account?"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/forgot-password"},"Forgot your password?"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/users/new"},"Create an account"),u.a.createElement(p.a,{className:"font-medium mt-8",to:"/"},"Back to Dashboard"))))))}}}]);