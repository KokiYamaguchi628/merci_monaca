(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){"use strict";n.r(e);var u=n(2),a=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=a(n(25));a(n(19));function a(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{pageStack:[u.default]}}}},function(t,e,n){"use strict";n.r(e);var u=n(4),a=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=r(n(18)),a=r(n(19));function r(t){return t&&t.__esModule?t:{default:t}}e.default={methods:{pop:function(){this.pageStack.pop()},push:function(){this.pageStack.push(a.default)}},props:["pageStack"],components:{customToolbar:u.default},key:"key_page1"}},function(t,e,n){"use strict";n.r(e);var u=n(6),a=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["pop","backLabel"]}},function(t,e,n){"use strict";n.r(e);var u=n(8),a=n.n(u);for(var r in u)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e.default=a.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=a(n(18));a(n(17));function a(t){return t&&t.__esModule?t:{default:t}}e.default={methods:{pop:function(){this.pageStack.pop()}},props:["pageStack"],components:{customToolbar:u.default},key:"key_page2"}},,,function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a}));var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-navigator",{attrs:{"page-stack":t.pageStack}},t._l(t.pageStack,(function(e){return n(e,{key:e.key,tag:"component",attrs:{"page-stack":t.pageStack}})})),1)},a=[];u._withStripped=!0},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a}));var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("custom-toolbar",[this._v("Page 1")]),this._v(" "),e("p",{staticStyle:{"text-align":"center"}},[this._v("\n    This is the first pages\n    "),e("v-ons-button",{on:{click:this.push}},[this._v("Push Page 2")])],1)],1)},a=[];u._withStripped=!0},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a}));var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-page",[e("custom-toolbar",{attrs:{"back-label":"Page 1"}},[this._v("Page 2")]),this._v(" "),e("p",{staticStyle:{"text-align":"center"}},[this._v("This is the second page")])],1)},a=[];u._withStripped=!0},function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return a}));var u=function(){var t=this.$createElement,e=this._self._c||t;return e("v-ons-toolbar",[e("div",{staticClass:"left"},[e("v-ons-back-button",{attrs:{"on-click":this.pop}},[this._v(this._s(this.backLabel))])],1),this._v(" "),e("div",{staticClass:"center"},[this._t("default")],2)])},a=[];u._withStripped=!0},,,function(t,e,n){"use strict";n.r(e);var u=n(11),a=n(1);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var i=n(0),o=Object(i.a)(a.default,u.a,u.b,!1,null,null,null);o.options.__file="src/App.vue",e.default=o.exports},function(t,e,n){"use strict";n.r(e);var u=n(14),a=n(5);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var i=n(0),o=Object(i.a)(a.default,u.a,u.b,!1,null,null,null);o.options.__file="src/CustomToolbar.vue",e.default=o.exports},function(t,e,n){"use strict";n.r(e);var u=n(13),a=n(7);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var i=n(0),o=Object(i.a)(a.default,u.a,u.b,!1,null,null,null);o.options.__file="src/Page2.vue",e.default=o.exports},function(t,e,n){t.exports=n(21)},function(t,e,n){"use strict";var u=o(n(22)),a=o(n(24)),r=o(n(16)),i=o(n(17));function o(t){return t&&t.__esModule?t:{default:t}}n(26),n(27),r.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),u.default.use(a.default),new u.default({el:"#app",template:"<app></app>",components:{App:i.default}})},,,,function(t,e,n){"use strict";n.r(e);var u=n(12),a=n(3);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var i=n(0),o=Object(i.a)(a.default,u.a,u.b,!1,null,null,null);o.options.__file="src/Page1.vue",e.default=o.exports}],[[20,1,2]]]);