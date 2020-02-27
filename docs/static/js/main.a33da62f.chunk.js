(this["webpackJsonpregistr-form"]=this["webpackJsonpregistr-form"]||[]).push([[0],{107:function(e,t,a){e.exports={body:"Form_body__paaWK",form:"Form_form__1my_U"}},147:function(e,t,a){e.exports=a(299)},299:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(11),c=a(57),o=a(50),u=a(300),l=a(301),i=a(111);var d,m=a(51),p=a(107),b=a.n(p),f=u.a.create({name:"log"})((function(e){var t=e.dispatch,a=e.setLogStatus,n=e.login,s=e.form,c=Object(o.c)((function(e){return e.formReducer})).isLoaded,d=s.getFieldDecorator,p=Object(m.b)().t;return r.createElement("div",{className:b.a.body},r.createElement("h4",null,p(n?"logIn":"signUp")),r.createElement(u.a,{className:b.a.form,onSubmit:function(e){var a=document.getElementById("submit");e.preventDefault(),s.validateFields((function(e,r){if(!e&&a){var n=a.innerText;t("Log in"===n||"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"===n?{type:"LOG_IN",payload:r}:function(e){return{type:"SIGN_UP",payload:e}}(r))}}))}},r.createElement(u.a.Item,{hasFeedback:!0},d("email",{rules:[{required:!0,type:"email",message:"Please use correct e-mail!"}]})(r.createElement(l.a,{placeholder:"Please enter your e-mail",disabled:!c}))),r.createElement(u.a.Item,{hasFeedback:!0},d("password",{rules:[{required:!0,message:"Please input your password!"},{min:6}]})(r.createElement(l.a.Password,{placeholder:"Please enter your password",disabled:!c}))),!n&&r.createElement(u.a.Item,{hasFeedback:!0},d("confirm",{rules:[{required:!0,message:"Please confirm your password!"},{validator:function(e,t,a){t&&t!==s.getFieldValue("password")?a("Two passwords does not equal!"):a()}}]})(r.createElement(l.a.Password,{placeholder:"Please confirm your password",disabled:!c}))),!n&&r.createElement(u.a.Item,null,d("name",{rules:[{required:!0,message:"Please input your name!",whitespace:!0}]})(r.createElement(l.a,{placeholder:"Please enter your name",disabled:!c}))),r.createElement(i.a,{htmlType:"submit",type:"primary",id:"submit",disabled:!c},p(n?"logIn":"signUp")),r.createElement("h4",null,p(n?"unRegistered":"registered")),r.createElement(i.a,{type:"primary",disabled:!c,onClick:function(){return a(!n)}},p(n?"signUp":"logIn"))))})),g=a(302);!function(e){e.ENG="ENG",e.RUS="RUS"}(d||(d={}));var y=a(81),O=a.n(y),E=a(110),j=a(142);E.a.use(j.a).init({resources:{ENG:{translations:{logIn:"Log in",signUp:"Sign Up",unRegistered:"Are you here for the first time?",registered:"Already registration?"}},RUS:{translations:{logIn:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",signUp:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",unRegistered:"\u0412\u044b \u0437\u0434\u0435\u0441\u044c \u0432 \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u0430\u0437?",registered:"\u0423\u0436\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c?"}}},fallbackLng:"ENG",ns:["translations"],defaultNS:"translations",interpolation:{escapeValue:!1}});var v=E.a,h=a(32),x=a(145),_=a(33),w=a.n(_),L=a(13),N=a(304),G=function(e){return e.formReducer},I=function(e,t){return e.users.filter((function(e){return e.email===t.email&&e.password===t.password}))},S=function(e){return new Promise((function(t){return setTimeout(t,e)}))},U=function(){N.a.success("You was register!")},k=function(){N.a.success("Something went wrong")};var P=w.a.mark(F),A=w.a.mark(D),R=w.a.mark(q);function F(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.e)("LOG_IN",q);case 2:return e.next=4,Object(L.e)("SIGN_UP",D);case 4:case"end":return e.stop()}}),P)}function D(e){var t,a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(L.d)(G);case 2:return t=r.sent,a=I(t,e.payload),r.next=6,S(2e3);case 6:if(r.prev=6,!(a.length>=1)){r.next=14;break}return r.next=10,Object(L.a)(U);case 10:return r.next=12,Object(L.c)({type:"LOADED",payload:null});case 12:r.next=18;break;case 14:return r.next=16,Object(L.c)({type:"SIGN_UP_SAGA",payload:e.payload});case 16:return r.next=18,Object(L.a)(U);case 18:r.next=24;break;case 20:return r.prev=20,r.t0=r.catch(6),r.next=24,Object(L.a)(k);case 24:case"end":return r.stop()}}),A,null,[[6,20]])}function q(e){var t,a;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(L.d)(G);case 2:return t=r.sent,a=I(t,e.payload),r.next=6,S(2e3);case 6:if(r.prev=6,!a.length){r.next=14;break}return r.next=10,Object(L.c)({type:"LOG_IN_SAGA",payload:a[0]});case 10:return r.next=12,Object(L.a)(U);case 12:r.next=18;break;case 14:return r.next=16,Object(L.c)({type:"LOADED",payload:null});case 16:return r.next=18,Object(L.a)(k);case 18:r.next=24;break;case 20:return r.prev=20,r.t0=r.catch(6),r.next=24,Object(L.a)(k);case 24:case"end":return r.stop()}}),R,null,[[6,20]])}var T=a(77),B=a(52),V={users:[],isLoaded:!0};var C=Object(h.c)({formReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN":return Object(B.a)({},e,{isLoaded:!1});case"LOG_IN_SAGA":return Object(B.a)({},e,{isLoaded:!0,currentUser:t.payload});case"SIGN_UP":return Object(B.a)({},e,{isLoaded:!1});case"SIGN_UP_SAGA":return Object(B.a)({},e,{users:[].concat(Object(T.a)(e.users),[t.payload]),isLoaded:!0,currentUser:t.payload});case"LOADED":return Object(B.a)({},e,{isLoaded:!0});default:return e}}}),J=a(144),z=a.n(J),K=Object(x.a)(),W=Object(h.e)(C,Object(h.a)(K,z.a));K.run(F);a(298);Object(s.render)(n.a.createElement(o.a,{store:W},n.a.createElement(m.a,{i18n:v},n.a.createElement((function(){var e=g.a.Group,t=g.a.Button,a=Object(m.b)().i18n;return n.a.createElement("div",{className:O.a.body},n.a.createElement(e,{onChange:function(e){a.changeLanguage(e.target.value)},defaultValue:d.ENG,size:"small"},n.a.createElement(t,{value:d.ENG,className:O.a.button},d.ENG),n.a.createElement(t,{value:d.RUS,className:O.a.button},d.RUS)))}),null),n.a.createElement((function(){var e=Object(o.b)(),t=Object(r.useState)(!0),a=Object(c.a)(t,2),n={dispatch:e,login:a[0],setLogStatus:a[1]};return r.createElement(f,n)}),null))),document.getElementById("root"))},81:function(e,t,a){e.exports={body:"Language_body__2kRcX",button:"Language_button__2jFty"}}},[[147,1,2]]]);
//# sourceMappingURL=main.a33da62f.chunk.js.map