(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"f",function(){return u}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return l});var r,a,o=n(130),c=n.n(o).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b1775b2f-c3a5-4509-8dc9-90b5629de7c3"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return c.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return c.post("follow/".concat(e))},unfollow:function(e){return c.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),i.getProfile(e)}},i={getProfile:function(e){return c.get("profile/"+e)},getStatus:function(e){return c.get("profile/status/"+e)},updateStatus:function(e){return c.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return c.put("profile",e)}};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var s={me:function(){return c.get("auth/me").then(function(e){return e.data})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then(function(e){return e.data})},logout:function(){return c.delete("auth/login")}},l={getCaptchaUrl:function(){return c.get("security/get-captcha-url")}}},103:function(e,t,n){e.exports=n.p+"static/media/user.d48a8973.png"},124:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var r=n(35),a=n(4),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your it-kamasutra?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c=function(e){return{type:"social-network/dialogs/SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"social-network/dialogs/SEND_MESSAGE":var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={error:"error-indicator_error__3s28E"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__1HCVf",item:"Navbar_item__16zko",activeLink:"Navbar_activeLink__2zHVi"}},161:function(e,t,n){e.exports=n(289)},166:function(e,t,n){},167:function(e,t,n){},191:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return f}),n.d(t,"c",function(){return p});var r=n(54),a=n(0),o=n.n(a),c=n(48),u=n.n(c),i=(n(45),n(88)),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return o.a.createElement("div",{className:u.a.formControl+" "+(c?u.a.error:"")},o.a.createElement("div",null,a),c&&o.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:r},a))," ",c)}},289:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(127),c=n.n(o),u=(n(166),n(24)),i=n(25),s=n(27),l=n(26),f=(n(167),n(15)),p=n.n(f),d=n(293),m=function(){return a.a.createElement("nav",{className:p.a.nav},a.a.createElement("div",{className:p.a.item},a.a.createElement(d.a,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),a.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},a.a.createElement(d.a,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),a.a.createElement("div",{className:"".concat(p.a.item," ").concat(p.a.active)},a.a.createElement(d.a,{to:"/users",activeClassName:p.a.activeLink},"Users")),a.a.createElement("div",{className:p.a.item},a.a.createElement("a",null,"News")),a.a.createElement("div",{className:p.a.item},a.a.createElement("a",null,"Music")),a.a.createElement("div",{className:p.a.item},a.a.createElement("a",null,"Settings")))},g=n(294),h=n(128),E=n(291),v=n(295),b=n(292),w=n(14),O=n(7),_=n.n(O),j=n(12),S=n(35),P=n(4),k=n(10),C=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),r):e})},y="social-network/users/FOLLOW",N="social-network/users/UNFOLLOW",I="social-network/users/SET_USERS",U={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},T=function(e){return{type:y,userId:e}},x=function(e){return{type:N,userId:e}},A=function(e,t){return{type:"social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},L=function(){var e=Object(j.a)(_.a.mark(function e(t,n,r,a){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(A(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(P.a)(Object(P.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case N:return Object(P.a)(Object(P.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case I:return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case"social-network/users/SET_CURRENT_PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case"social-network/users/SET_TOTAL_USERS_COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalUsersCount:t.count});case"social-network/users/TOGGLE_IS_FETCHING":return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(S.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return e!=t.userId})});default:return e}},R=n(54),z=n(69),G=n(94),D=n(41),M=n.n(D),H=n(90),B=n.n(H),V=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,u=e.portionSize,i=void 0===u?10:u,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),d=Object(r.useState)(1),m=Object(G.a)(d,2),g=m[0],h=m[1],E=(g-1)*i+1,v=g*i;return a.a.createElement("div",{className:B()(M.a.paginator)},g>1&&a.a.createElement("button",{className:M.a.button,onClick:function(){h(g-1)}},"PREV"),l.filter(function(e){return e>=E&&e<=v}).map(function(e){return a.a.createElement("span",{className:B()(Object(z.a)({},M.a.selectedPage,o===e),M.a.pageNumber),key:e,onClick:function(t){c(e)}},e)}),p>g&&a.a.createElement("button",{className:M.a.button,onClick:function(){h(g+1)}},"NEXT"))},W=n(40),q=n.n(W),Y=n(103),K=n.n(Y),X=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,a.a.createElement(d.a,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:K.a,className:q.a.userPhoto}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{className:q.a.button,disabled:n.some(function(e){return e===t.id}),onClick:function(){r(t.id)}},"Unfollow"):a.a.createElement("button",{className:q.a.button,disabled:n.some(function(e){return e===t.id}),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("span",null,a.a.createElement("span",null,a.a.createElement("h4",null,"  ",t.name),a.a.createElement("h4",null," ",t.status?t.status:"no status")),a.a.createElement("span",null)))},J=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,c=e.users,u=Object(R.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return a.a.createElement("div",null,a.a.createElement(V,{currentPage:t,onPageChanged:o,totalItemsCount:n,pageSize:r}),a.a.createElement("div",{className:q.a.user},c.map(function(e){return a.a.createElement(X,{user:e,followingInProgress:u.followingInProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})})))},Z=n(44),$=n(8),Q=n(131),ee=Object(Q.a)(function(e){return e.usersPage.users},function(e){return e.filter(function(e){return!0})}),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ce=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,this.props.pageTitle),this.props.isFetching?a.a.createElement(Z.a,null):null,a.a.createElement(J,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),ue=Object($.d)(Object(w.b)(function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:oe(e)}},{follow:function(e){return function(){var t=Object(j.a)(_.a.mark(function t(n){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,k.f.follow.bind(k.f),T);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(_.a.mark(function t(n){return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:L(n,e,k.f.unfollow.bind(k.f),x);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},getUsers:function(e,t){return function(){var n=Object(j.a)(_.a.mark(function n(r,a){var o;return _.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:"social-network/users/SET_CURRENT_PAGE",currentPage:e}),n.next=3,k.f.getUsers(e,t);case 3:o=n.sent,r({type:"social-network/users/TOGGLE_IS_FETCHING",isFetching:!1}),r((a=o.items,{type:I,users:a})),r({type:"social-network/users/SET_TOTAL_USERS_COUNT",count:o.totalCount});case 7:case"end":return n.stop()}var a},n)}));return function(e,t){return n.apply(this,arguments)}}()}}))(ce),ie=n(71),se=n.n(ie),le=function(e){return a.a.createElement("header",{className:se.a.header},a.a.createElement("div",{className:se.a.loginBlock},e.isAuth?a.a.createElement("div",{className:se.a.logo},a.a.createElement("h2",null,"Welcome ",e.login),a.a.createElement("button",{onClick:e.logout},"Log out")," "):a.a.createElement(d.a,{to:"/login"},"Login ")))},fe=n(30),pe={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},de=function(e,t,n,r){return{type:"social-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(e){return{type:"social-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},ge=function(){return function(){var e=Object(j.a)(_.a.mark(function e(t){var n,r,a,o,c;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.c.me();case 2:(n=e.sent).resultCode===k.b.Success&&(r=n.data,a=r.id,o=r.login,c=r.email,t(de(a,c,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},he=function(){return function(){var e=Object(j.a)(_.a.mark(function e(t){var n,r;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.e.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(me(r));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"social-network/auth/SET_USER_DATA":case"social-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},ve=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(le,this.props)}}]),n}(a.a.Component),be=Object(w.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:function(){return function(){var e=Object(j.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.c.logout();case 2:0===e.sent.data.resultCode&&t(de(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(ve),we=n(125),Oe=n(21),_e=n(45),je=n(48),Se=n.n(je),Pe=Object(we.a)({form:"login"})(function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(Oe.c)("Email","email",[_e.b],Oe.a),Object(Oe.c)("Password","password",[_e.b],Oe.a,{type:"password"}),Object(Oe.c)(null,"rememberMe",[],Oe.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(Oe.c)("Symbols from image","captcha",[_e.b],Oe.a,{}),n&&a.a.createElement("div",{className:Se.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))}),ke=Object(w.b)(function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}},{login:function(e,t,n,r){return function(){var a=Object(j.a)(_.a.mark(function a(o){var c,u;return _.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.c.login(e,t,n,r);case 2:(c=a.sent).resultCode===k.b.Success?o(ge()):(c.resultCode===k.a.CaptchaIsRequired&&o(he()),u=c.messages.length>0?c.messages[0]:"Some error",o(Object(fe.a)("login",{_error:u})));case 4:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(function(e){return e.isAuth?a.a.createElement(E.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(Pe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))}),Ce={initialized:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce;switch((arguments.length>1?arguments[1]:void 0).type){case"social-network/app/INITIALIZED_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},Ne=n(93),Ie=n(124),Ue={},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue;arguments.length>1&&arguments[1];return e},xe=n(133),Ae=n(126),Le=Object($.c)({profilePage:Ne.b,dialogsPage:Ie.a,sidebar:Te,usersPage:F,auth:Ee,form:Ae.a,app:ye}),Fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,Re=Object($.e)(Le,Fe(Object($.a)(xe.a)));window.__store__=Re;var ze=Re,Ge=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement("div",null,"loading...")},a.a.createElement(e,t))}},De=n(134),Me=n.n(De),He=function(){return a.a.createElement("div",{className:Me.a.error},"OOOPS, its Error")},Be=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(i.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement(He,null):this.props.children}}]),n}(r.Component),Ve=a.a.lazy(function(){return n.e(4).then(n.bind(null,302))}),We=a.a.lazy(function(){return n.e(3).then(n.bind(null,301))}),qe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){alert("Some error occured")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(be,null),a.a.createElement(m,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(g.a,null,a.a.createElement(h.a,{exact:!0,path:"/",render:function(){return a.a.createElement(E.a,{to:"/profile"})}}),a.a.createElement(h.a,{path:"/dialogs",render:Ge(Ve)}),a.a.createElement(h.a,{path:"/profile/:userId?",render:Ge(We)}),a.a.createElement(h.a,{path:"/users",render:function(){return a.a.createElement(ue,null)}}),a.a.createElement(h.a,{path:"/login",render:function(){return a.a.createElement(ke,null)}}),a.a.createElement(E.a,{from:"/",to:"/profile"})))):a.a.createElement(Z.a,null)}}]),n}(r.Component),Ye=Object($.d)(v.a,Object(w.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(ge());Promise.all([t]).then(function(){e({type:"social-network/app/INITIALIZED_SUCCESS"})})}}}))(qe),Ke=function(e){return a.a.createElement(b.a,null,a.a.createElement(Be,null,a.a.createElement(w.a,{store:ze},a.a.createElement(Ye,null))))};c.a.render(a.a.createElement(Ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t,n){e.exports={userPhoto:"users_userPhoto__fHABK",button:"users_button__2_l1-",user:"users_user__2xGpK"}},41:function(e,t,n){e.exports={paginator:"Paginator_paginator__3DbrN",pageNumber:"Paginator_pageNumber__pDm6i",selectedPage:"Paginator_selectedPage__ige2P",button:"Paginator_button__2Dudt"}},44:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(191);t.a=function(e){return a.a.createElement("div",{className:"loadingio-spinner-double-ring-t7tyf230e6"},a.a.createElement("div",{className:"ldio-cugu5hgume"},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null,a.a.createElement("div",null)),a.a.createElement("div",null,a.a.createElement("div",null))))}},45:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},48:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1mdPq",error:"FormsControls_error__O00lN",formSummaryError:"FormsControls_formSummaryError__20KP1"}},71:function(e,t,n){e.exports={header:"Header_header__3yT3c",loginBlock:"Header_loginBlock__3FAYk",logo:"Header_logo__1iImO"}},93:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"d",function(){return h}),n.d(t,"c",function(){return E}),n.d(t,"g",function(){return v}),n.d(t,"e",function(){return b}),n.d(t,"f",function(){return w});var r=n(7),a=n.n(r),o=n(12),c=n(35),u=n(4),i=n(10),s=n(30),l="social-network/profile/ADD-POST",f="social-network/profile/SET_STATUS",p="social-network/profile/DELETE_POST",d={posts:[{id:1,message:"what's up man?",likesCount:12},{id:2,message:"so fine, how are you",likesCount:11},{id:3,message:"we go to the cinema tonight",likesCount:11},{id:4,message:"oooo, it's ok",likesCount:11}],profile:null,status:"",newPostText:""},m=function(e){return{type:l,newPostText:e}},g=function(e){return{type:f,status:e}},h=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.f.getProfile(e);case 2:r=t.sent,n({type:"social-network/profile/SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.d.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(g(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"social-network/profile/SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(o.a)(a.a.mark(function t(n,r){var o,c;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,i.d.saveProfile(e);case 3:if(0!==(c=t.sent).data.resultCode){t.next=8;break}n(h(o)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:c.data.messages[0]})),t.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case f:return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"social-network/profile/SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case p:return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter(function(e){return e.id!=t.postId})});case"social-network/profile/SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[161,1,2]]]);
//# sourceMappingURL=main.8723985e.chunk.js.map