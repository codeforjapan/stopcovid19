(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var s=a[r];0!==i[s]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},i={app:0},o=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2e7d08b1":"ad900832","chunk-67fa1354":"f91670f4","chunk-5e8c705a":"f0122958","chunk-adafc8ca":"cad8ab95","chunk-6b5846b4":"c98cdff9","chunk-70f80762":"a8ad8671","chunk-56d00216":"e63790d3","chunk-e204905e":"e43921a5","chunk-e720ccfc":"fcae795c","chunk-0ab7dcdc":"0d4a6d28"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-2e7d08b1":1,"chunk-67fa1354":1,"chunk-5e8c705a":1,"chunk-adafc8ca":1,"chunk-6b5846b4":1,"chunk-70f80762":1,"chunk-56d00216":1,"chunk-e204905e":1,"chunk-e720ccfc":1,"chunk-0ab7dcdc":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-2e7d08b1":"73d90aa2","chunk-67fa1354":"4aad49eb","chunk-5e8c705a":"da0a06df","chunk-adafc8ca":"b11f5541","chunk-6b5846b4":"274ce8ff","chunk-70f80762":"274ce8ff","chunk-56d00216":"ce9e4fb0","chunk-e204905e":"fca48044","chunk-e720ccfc":"42d30285","chunk-0ab7dcdc":"3706303b"}[t]+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],f.parentNode.removeChild(f),a(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}i[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0423":function(t){t.exports=JSON.parse('{"avatar":"StopCovid19全国版","buttons":"ボタン","calendar":"カレンダー","charts":"チャート","components":"コンポーネント","dashboard":"ダッシュボード","area-maps":"地域マップ","area-tables":"地域詳細一覧","about":"当サイトについて","information":"関連情報"}')},"1f55":function(t,e,a){},"27b8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-alert",t._g(t._b({staticClass:"v-alert--material",attrs:{dark:""},scopedSlots:t._u([t.$attrs.icon?{key:"prepend",fn:function(){return[a("v-icon",{staticClass:"v-alert__icon elevation-6 white",attrs:{light:"",color:t.$attrs.color}},[t._v(" "+t._s(t.$attrs.icon)+" ")])]},proxy:!0}:null,t.$attrs.dismissible?{key:"close",fn:function(e){var n=e.toggle;return[a("v-btn",{attrs:{"aria-label":t.$vuetify.lang.t("$vuetify.close"),color:"",icon:"",small:""},on:{click:n}},[a("v-icon",[t._v(" $vuetify.icons.cancel ")])],1)]}}:null],null,!0)},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},r=[],i={name:"MaterialAlert"},o=i,s=(a("b22c"),a("2877")),c=a("6544"),l=a.n(c),u=a("0798"),d=a("8336"),f=a("132d"),p=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=p.exports;l()(p,{VAlert:u["a"],VBtn:d["a"],VIcon:f["a"]})},"2ffb":function(t,e,a){},3648:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-2 font-weight-light col col-12 text-left text--primary pa-0 mb-8"},[a("h5",{staticClass:"font-weight-light"},[t._v(" "+t._s(t.subheading)+" "),t.text?[a("span",{staticClass:"subtitle-1",domProps:{textContent:t._s(t.text)}})]:t._e()],2),a("div",{staticClass:"pt-2"},[t._t("default")],2)])},r=[],i={name:"Subheading",props:{subheading:{type:String,default:""},text:{type:String,default:""}}},o=i,s=a("2877"),c=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},3728:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{attrs:{href:t.href,rel:t.href&&"#"!==t.href?"noopener":void 0,target:t.href&&"#"!==t.href?"_blank":void 0,to:t.item.to,"active-class":"primary "+(t.isDark?"white":"black")+"--text"}},[t.text?a("v-list-item-icon",{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.icon?a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(t.item.icon)}})],1):t._e(),t.item.title||t.item.subtitle?a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title)}}),a("v-list-item-subtitle",{domProps:{textContent:t._s(t.item.subtitle)}})],1):t._e()],1)},r=[],i=(a("4160"),a("ac1f"),a("1276"),a("159b"),a("7560")),o={name:"Item",mixins:[i["a"]],props:{item:{type:Object,default:function(){return{href:void 0,icon:void 0,subtitle:void 0,title:void 0,to:void 0}}},text:{type:Boolean,default:!1}},computed:{computedText:function(){if(!this.item||!this.item.title)return"";var t="";return this.item.title.split(" ").forEach((function(e){t+=e.substring(0,1)})),t},href:function(){return this.item.href||(this.item.to?void 0:"#")}}},s=o,c=a("2877"),l=a("6544"),u=a.n(l),d=a("132d"),f=a("da13"),p=a("5d23"),v=a("34c3"),m=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=m.exports;u()(m,{VIcon:d["a"],VListItem:f["a"],VListItemContent:p["a"],VListItemIcon:v["a"],VListItemSubtitle:p["b"],VListItemTitle:p["c"]})},"407e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",t._b({staticClass:"v-tabs--pill",attrs:{"active-class":t.color+" "+(t.$vuetify.theme.dark?"black":"white")+"--text","hide-slider":""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},"v-tabs",t.$attrs,!1),[t._t("default"),t._t("items")],2)},r=[],i=a("a452"),o={name:"MaterialTabs",mixins:[i["a"]],props:{color:{type:String,default:"primary"}}},s=o,c=(a("9743"),a("2877")),l=a("6544"),u=a.n(l),d=a("fe57"),f=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=f.exports;u()(f,{VTabs:d["a"]})},"4f76":function(t,e,a){},"55a9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"text-center v-card--testimony"},[a("div",{staticClass:"pt-6"},[a("v-icon",{attrs:{color:"black","x-large":""}},[t._v(" mdi-format-quote-close ")])],1),a("v-card-text",{staticClass:"display-1 font-weight-light font-italic mb-3",domProps:{textContent:t._s(t.blurb)}}),a("div",{staticClass:"display-2 font-weight-light mb-2",domProps:{textContent:t._s(t.author)}}),a("div",{staticClass:"body-2 text-uppercase grey--text",domProps:{textContent:t._s(t.handle)}}),a("v-avatar",{staticClass:"elevation-12",attrs:{color:"grey",size:"100"}},[a("v-img",{attrs:{alt:t.author+" Testimonial",src:t.avatar}})],1),a("div")],1)},r=[],i={name:"BaseMaterialTestimony",props:{author:{type:String,default:""},avatar:{type:String,default:"https://demos.creative-tim.com/material-dashboard/assets/img/faces/card-profile1-square.jpg"},blurb:{type:String,default:""},handle:{type:String,default:""}}},o=i,s=(a("7bbe"),a("2877")),c=a("6544"),l=a.n(c),u=a("8212"),d=a("b0af"),f=a("99d9"),p=a("132d"),v=a("adda"),m=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=m.exports;l()(m,{VAvatar:u["a"],VCard:d["a"],VCardText:f["b"],VIcon:p["a"],VImg:v["a"]})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},i=[],o={name:"App"},s=o,c=a("2877"),l=Object(c["a"])(s,r,i,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("8c4f"));n["a"].use(d["a"]);var f=new d["a"]({mode:"history",base:"/",routes:[{path:"/",component:function(){return a.e("chunk-2e7d08b1").then(a.bind(null,"cd59"))},children:[{name:"地域マップ",path:"",component:function(){return Promise.all([a.e("chunk-67fa1354"),a.e("chunk-5e8c705a")]).then(a.bind(null,"6b78"))}},{name:"地域詳細一覧",path:"tables/area-tables",component:function(){return Promise.all([a.e("chunk-67fa1354"),a.e("chunk-adafc8ca")]).then(a.bind(null,"8796"))}},{name:"関連情報",path:"information",component:function(){return a.e("chunk-70f80762").then(a.bind(null,"2056"))}},{name:"当サイトについて",path:"about",component:function(){return a.e("chunk-6b5846b4").then(a.bind(null,"e1fb"))}}]}]}),p=a("2f62");n["a"].use(p["a"]);var v=new p["a"].Store({state:{drawer:null},mutations:{SET_BAR_IMAGE:function(t,e){t.barImage=e},SET_DRAWER:function(t,e){t.drawer=e}},actions:{}}),m=(a("4160"),a("ac1f"),a("5319"),a("159b"),a("ddb0"),a("8103")),h=a.n(m),b=a("bba4"),g=a.n(b),y=a("e51e");y.keys().forEach((function(t){var e=y(t),a=h()(g()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));n["a"].component("Base".concat(a),e.default||e)}));a("4633");n["a"].use(a("84b5"));var _=a("7bb1"),x=a("4c93");Object(_["c"])("email",x["a"]),Object(_["c"])("max",x["b"]),Object(_["c"])("min",x["c"]),Object(_["c"])("numeric",x["d"]),Object(_["c"])("required",x["e"]),n["a"].component("validation-provider",_["b"]),n["a"].component("validation-observer",_["a"]);var C=a("f309"),k=a("5530"),S=a("a925"),O=a("1072"),j=a("c15b");n["a"].use(S["a"]);var w={en:Object(k["a"])({},a("edd4"),{$vuetify:O["a"]}),ja:Object(k["a"])({},a("0423"),{$vuetify:j["a"]})},V=new S["a"]({locale:"ja",messages:w});a("1f55");n["a"].use(C["a"]);var $={primary:"#4CAF50",secondary:"#9C27b0",accent:"#9C27b0",info:"#00CAE3"},I=new C["a"]({lang:{t:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];return V.t(t,a)}},theme:{themes:{dark:$,light:$}}}),E=a("bc3a"),P=a.n(E),A=a("0284"),T=a.n(A);a("6cc5");n["a"].config.productionTip=!1,n["a"].config.devtools=!0,n["a"].use(T.a,{id:"UA-162190058-1",router:f}),new n["a"]({router:f,store:v,vuetify:I,i18n:V,axios:P.a,render:function(t){return t(u)}}).$mount("#app")},"5ac2":function(t,e,a){"use strict";var n=a("a28c"),r=a.n(n);r.a},6644:function(t,e,a){},"71cc":function(t,e,a){},"740d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mb-12 text-center"},[a("h1",{staticClass:"font-weight-light mb-2 headline",domProps:{textContent:t._s("Vuetify "+t.heading)}}),a("span",{staticClass:"font-weight-light subtitle-1"},[t._v(" Please checkout the "),a("a",{staticClass:"secondary--text",staticStyle:{"text-decoration":"none"},attrs:{href:"https://vuetifyjs.com/"+t.link,rel:"noopener",target:"_blank"}},[t._v(" full documentation ")])])])},r=[],i={name:"VComponent",props:{heading:{type:String,default:""},link:{type:String,default:""}}},o=i,s=a("2877"),c=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},"7bbe":function(t,e,a){"use strict";var n=a("6644"),r=a.n(n);r.a},"8a5e":function(t,e,a){},"8df3":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-material-card",t._g(t._b({staticClass:"v-card--material-chart",scopedSlots:t._u([{key:"heading",fn:function(){return[a("chartist",{staticStyle:{"max-height":"150px"},attrs:{data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type}})]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[t._t("reveal-actions",null,{slot:"reveal-actions"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},r=[],i=(a("caad"),{name:"MaterialChartCard",inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),o=i,s=(a("e56a"),a("2877")),c=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},9743:function(t,e,a){"use strict";var n=a("71cc"),r=a.n(n);r.a},"976b":function(t,e,a){},a28c:function(t,e,a){},a46f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-material-card",t._g(t._b({staticClass:"v-card--material-stats",attrs:{icon:t.icon},scopedSlots:t._u([{key:"after-heading",fn:function(){return[a("div",{staticClass:"ml-auto text-right"},[a("div",{staticClass:"body-3 grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),a("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v(" "+t._s(t.value)+" "),a("small",[t._v(t._s(t.smallValue))])])])]},proxy:!0}])},"base-material-card",t.$attrs,!1),t.$listeners),[a("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[a("v-divider")],1),a("v-icon",{staticClass:"ml-2 mr-1",attrs:{color:t.subIconColor,size:"16"}},[t._v(" "+t._s(t.subIcon)+" ")]),a("span",{staticClass:"caption grey--text font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)},r=[],i=a("5530"),o=a("c034"),s={name:"MaterialStatsCard",inheritAttrs:!1,props:Object(i["a"])({},o["default"].props,{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},c=s,l=(a("ecdb"),a("2877")),u=a("6544"),d=a.n(u),f=a("62ad"),p=a("ce7e"),v=a("132d"),m=Object(l["a"])(c,n,r,!1,null,null,null);e["default"]=m.exports;d()(m,{VCol:f["a"],VDivider:p["a"],VIcon:v["a"]})},afbc:function(t,e,a){"use strict";var n=a("976b"),r=a.n(n);r.a},b22c:function(t,e,a){"use strict";var n=a("4f76"),r=a.n(n);r.a},c034:function(t,e,a){"use strict";a.r(e);var n,r,i=a("b0af"),o={name:"Card",extends:i["a"]},s=o,c=a("2877"),l=Object(c["a"])(s,n,r,!1,null,null,null);e["default"]=l.exports},cc0b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-snackbar",t._b({staticClass:"v-snackbar--material",model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},"v-snackbar",Object.assign({},t.$attrs,{color:"transparent"}),!1),[a("base-material-alert",{staticClass:"ma-0",attrs:{color:t.$attrs.color,dismissible:t.dismissible,type:t.type,dark:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)],1)},r=[],i={name:"BaseMaterialSnackbar",props:{dismissible:{type:Boolean,default:!0},type:{type:String,default:""},value:Boolean},data:function(){return{internalValue:this.value}},watch:{internalValue:function(t,e){t!==e&&this.$emit("input",t)},value:function(t,e){t!==e&&(this.internalValue=t)}}},o=i,s=(a("5ac2"),a("2877")),c=a("6544"),l=a.n(c),u=a("2db4"),d=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=d.exports;l()(d,{VSnackbar:u["a"]})},e1fc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-item-group",{attrs:{item:t.item,text:"","sub-group":""}})},r=[],i={name:"ItemSubGroup",props:{item:{type:Object,default:function(){return{avatar:void 0,group:void 0,title:void 0,children:[]}}}}},o=i,s=a("2877"),c=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},e3bb:function(t,e,a){"use strict";var n=a("8a5e"),r=a.n(n);r.a},e51e:function(t,e,a){var n={"./Card.vue":"c034","./Item.vue":"3728","./ItemGroup.vue":"e9c3","./ItemSubGroup.vue":"e1fc","./MaterialAlert.vue":"27b8","./MaterialCard.vue":"e6f8","./MaterialChartCard.vue":"8df3","./MaterialSnackbar.vue":"cc0b","./MaterialStatsCard.vue":"a46f","./MaterialTabs.vue":"407e","./MaterialTestimony.vue":"55a9","./Subheading.vue":"3648","./VComponent.vue":"740d"};function r(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}r.keys=function(){return Object.keys(n)},r.resolve=i,t.exports=r,r.id="e51e"},e56a:function(t,e,a){"use strict";var n=a("f524"),r=a.n(n);r.a},e6f8:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._b({staticClass:"v-card--material pa-3",class:t.classes},"v-card",t.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[t.avatar?a("v-avatar",{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"128",color:"grey"}},[a("v-img",{attrs:{src:t.avatar}})],1):a("v-sheet",{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!t.$slots.image},attrs:{color:t.color,"max-height":t.icon?90:void 0,width:t.icon?"auto":"100%",elevation:"6",dark:""}},[t.$slots.heading?t._t("heading"):t.$slots.image?t._t("image"):t.title&&!t.icon?a("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:t._s(t.title)}}):t.icon?a("v-icon",{attrs:{size:"32"},domProps:{textContent:t._s(t.icon)}}):t._e(),t.text?a("div",{staticClass:"headline font-weight-thin",domProps:{textContent:t._s(t.text)}}):t._e()],2),t.$slots["after-heading"]?a("div",{staticClass:"ml-6"},[t._t("after-heading")],2):t.icon&&t.title?a("div",{staticClass:"ml-4"},[a("div",{staticClass:"card-title font-weight-light",domProps:{textContent:t._s(t.title)}})]):t._e()],1),t._t("default"),t.$slots.actions?[a("v-divider",{staticClass:"mt-2"}),a("v-card-actions",{staticClass:"pb-0"},[t._t("actions")],2)]:t._e()],2)},r=[],i={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes:function(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},o=i,s=(a("e3bb"),a("2877")),c=a("6544"),l=a.n(c),u=a("8212"),d=a("b0af"),f=a("99d9"),p=a("ce7e"),v=a("132d"),m=a("adda"),h=a("8dd9"),b=Object(s["a"])(o,n,r,!1,null,null,null);e["default"]=b.exports;l()(b,{VAvatar:u["a"],VCard:d["a"],VCardActions:f["a"],VDivider:p["a"],VIcon:v["a"],VImg:m["a"],VSheet:h["a"]})},e9c3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-group",{attrs:{group:t.group,"prepend-icon":t.item.icon,"sub-group":t.subGroup,"append-icon":"mdi-menu-down",color:"rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)"!==t.barColor?"white":"grey darken-1"},scopedSlots:t._u([{key:"activator",fn:function(){return[t.text?a("v-list-item-icon",{staticClass:"v-list-item__icon--text",domProps:{textContent:t._s(t.computedText)}}):t.item.avatar?a("v-list-item-avatar",{staticClass:"align-self-center",attrs:{color:"white",contain:""}},[a("v-img",{attrs:{src:"https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"}})],1):t._e(),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(t.item.title)}})],1)]},proxy:!0}])},[t._l(t.children,(function(t,e){return[t.children?a("base-item-sub-group",{key:"sub-group-"+e,attrs:{item:t}}):a("base-item",{key:"item-"+e,attrs:{item:t,text:""}})]}))],2)},r=[],i=(a("99af"),a("4de4"),a("4160"),a("a15b"),a("d81d"),a("ac1f"),a("1276"),a("159b"),a("5530")),o=a("375a"),s=a.n(o),c=a("2f62"),l={name:"ItemGroup",inheritAttrs:!1,props:{item:{type:Object,default:function(){return{avatar:void 0,group:void 0,title:void 0,children:[]}}},subGroup:{type:Boolean,default:!1},text:{type:Boolean,default:!1}},computed:Object(i["a"])({},Object(c["c"])(["barColor"]),{children:function(){var t=this;return this.item.children.map((function(e){return Object(i["a"])({},e,{to:e.to?"".concat(t.item.group,"/").concat(e.to):void 0})}))},computedText:function(){if(!this.item||!this.item.title)return"";var t="";return this.item.title.split(" ").forEach((function(e){t+=e.substring(0,1)})),t},group:function(){return this.genGroup(this.item.children)}}),methods:{genGroup:function(t){var e=this;return t.filter((function(t){return t.to})).map((function(t){var a=t.group||e.item.group,n="".concat(a,"/").concat(s()(t.to));return t.children&&(n="".concat(n,"|").concat(e.genGroup(t.children))),n})).join("|")}}},u=l,d=(a("afbc"),a("2877")),f=a("6544"),p=a.n(f),v=a("adda"),m=a("56b0"),h=a("8270"),b=a("5d23"),g=a("34c3"),y=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=y.exports;p()(y,{VImg:v["a"],VListGroup:m["a"],VListItemAvatar:h["a"],VListItemContent:b["a"],VListItemIcon:g["a"],VListItemTitle:b["c"]})},ecdb:function(t,e,a){"use strict";var n=a("2ffb"),r=a.n(n);r.a},edd4:function(t){t.exports=JSON.parse('{"avatar":"StopCovid19jp","buttons":"Buttons","calendar":"Calendar","charts":"Charts","components":"Components","dashboard":"Dashboard","area-maps":"Area Maps","area-tables":"Area Tables","about":"About","information":"Infomation"}')},f524:function(t,e,a){}});
//# sourceMappingURL=app.5b6f8b06.js.map