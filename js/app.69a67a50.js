(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"fa3bbee7"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"00535270"}[t]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1afd":function(t,e,n){"use strict";var a=n("f77a"),r=n.n(a);r.a},"1f29":function(t,e,n){"use strict";var a=n("b5fa"),r=n.n(a);r.a},2871:function(t,e,n){},"4d0d":function(t,e,n){"use strict";var a=n("2871"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1)},o=[],i={created:function(){var t=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){t.showUpdateUI=!0}))}},s=i,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"header"},[t._m(0),n("add-icon",{nativeOn:{click:function(e){return t.goToAddStreak(e)}}})],1)]),n("d-list",{},t._l(t.streaks,(function(t){return n("d-card",{key:t.id,attrs:{id:t.id,title:t.title,text:t.text}})})),1)],1)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("On"),n("i",[t._v("Track")])])}],m=n("5530"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card",on:{click:function(e){return t.openStreak(t.id)}}},[n("div",{staticClass:"card__header"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))])]),n("div",{staticClass:"card__body"},[n("div",{staticClass:"text"},[t._v(t._s(t.text))])])])},h=[],b=(n("a9e3"),{name:"d-card",props:{title:{type:String,default:""},text:{type:String,default:""},id:{type:Number,required:!0}},methods:{openStreak:function(t){this.$router.push("/streak/".concat(t))}}}),g=b,_=(n("9c9e"),Object(c["a"])(g,v,h,!1,null,"19060429",null)),y=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t._t("default")],2)},w=[],x={name:"d-list"},C=x,O=(n("1f29"),Object(c["a"])(C,k,w,!1,null,"d8217a50",null)),j=O.exports,S=n("2f62"),E={name:"Home",components:{dCard:y,dList:j},computed:Object(m["a"])({},Object(S["c"])({streaks:function(t){return t.streaks.list}})),methods:{goToAddStreak:function(){this.$router.push("addStreak")}}},$=E,T=(n("4d0d"),Object(c["a"])($,f,p,!1,null,"210c49fc",null)),L=T.exports;a["a"].use(d["a"]);var P=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/streak/:id",name:"Streak",component:function(){return n.e("about").then(n.bind(null,"af46"))}},{path:"/addStreak/",name:"AddStreak",component:function(){return n.e("about").then(n.bind(null,"38cf"))}}],A=new d["a"]({mode:"history",base:"",routes:P}),B=A,q=(n("7db0"),{namespace:!0,state:{list:[{id:1,title:"Meditation",text:"Pariatur veniam eiusmod occaecat occaecat consequat fugiat tempor ut elit aute laboris pariatur."},{id:2,title:"Yoga",text:"Do sit commodo Lorem non in proident dolore proident elit."},{id:3,title:"Programming",text:"Culpa proident nisi deserunt non."},{id:4,title:"Reading",text:"Tempor minim ut fugiat elit quis est ipsum sunt fugiat."},{id:5,title:"Cleaning Bath",text:"Pariatur veniam eiusmod occaecat occaecat consequat fugiat tempor ut elit aute laboris pariatur."},{id:6,title:"Swiping Floor",text:"Do sit commodo Lorem non in proident dolore proident elit."}]},getters:{getStreakById:function(t){return function(e){return t.list.find((function(t){return t.id===e}))}}},mutations:{},actions:{},modules:{}});a["a"].use(S["a"]);var M,N=new S["a"].Store({state:{},mutations:{},actions:{},modules:{streaks:q}}),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.goBack}},[n("path",{staticClass:"icon",attrs:{d:"M0.292892 7.29289C-0.097632 7.68342 -0.0976321 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928931C7.68054 0.538407 7.04738 0.538407 6.65685 0.928931L0.292892 7.29289ZM16 7L0.999999 7L0.999999 9L16 9L16 7Z",fill:"#F42424"}})])},F=[],H={name:"arrow-back",methods:{goBack:function(){this.$router.go(-1)}}},I=H,U=Object(c["a"])(I,D,F,!1,null,null,null),J=U.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("line",{staticClass:"icon",attrs:{x1:"1",y1:"7.5",x2:"14",y2:"7.5",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),n("line",{staticClass:"icon",attrs:{x1:"8",y1:"1",x2:"8",y2:"14",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])},K=[],R={name:"add-icon"},W=R,Y=Object(c["a"])(W,Z,K,!1,null,null,null),z=Y.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("arrow-back"),n("h2",{staticClass:"title"},[t._v(t._s(t.title))])],1)},Q=[],V={name:"d-header",props:{title:{type:String,default:""}}},X=V,tt=(n("f7aa"),Object(c["a"])(X,G,Q,!1,null,"5b6ef9ea",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["tag",{selected:t.selected}]},[t._v(t._s(t.tag))])},at=[],rt={name:"d-tag",props:{tag:{type:String,required:!0},selected:{type:Boolean,default:!1}}},ot=rt,it=(n("8cba"),Object(c["a"])(ot,nt,at,!1,null,"0c6ff0c5",null)),st=it.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tags?n("div",{staticClass:"tag-list grid-h"},t._l(t.tags,(function(e){return n("d-tag",{key:e,attrs:{tag:e,selected:t.selectedTags?t.selectedTags.includes(e):e===t.selectedTag},nativeOn:{click:function(n){return t.selectTag(e)}}})})),1):t._e()},ut=[],lt={name:"d-tag-list",props:{tags:{type:Array,required:!0},selectedTags:{type:Array,default:function(){}},selectedTag:{type:String,default:""}},data:function(){return{}},methods:{selectTag:function(t){this.$emit("onselectionchange",t)}}},dt=lt,ft=Object(c["a"])(dt,ct,ut,!1,null,null,null),pt=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input flex-h"},[n("label",{attrs:{for:t.label}},[t._v(t._s(t.label))]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{type:"text",id:t.label},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])},vt=[],ht={name:"d-input",data:function(){return{input:""}},props:{label:{type:String,default:"label"}}},bt=ht,gt=(n("1afd"),Object(c["a"])(bt,mt,vt,!1,null,"1e4376e2",null)),_t=gt.exports,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button default"},[t.label?n("h3",[t._v(t._s(t.label))]):t._e(),t._t("default")],2)},kt=[],wt={name:"d-button",props:{label:{type:String,default:""}}},xt=wt,Ct=(n("66c9"),Object(c["a"])(xt,yt,kt,!1,null,"0fdc8d7b",null)),Ot=Ct.exports,jt=n("acfa");"serviceWorker"in navigator?(M=new jt["a"]("".concat("","service-worker.js")),M.addEventListener("controlling",(function(){window.location.reload()})),M.register()):M=null;var St=M;a["a"].prototype.$workbox=St,a["a"].config.productionTip=!1,a["a"].component(Ot.name,Ot),a["a"].component(_t.name,_t),a["a"].component(pt.name,pt),a["a"].component(st.name,st),a["a"].component(et.name,et),a["a"].component(J.name,J),a["a"].component(z.name,z),new a["a"]({router:B,store:N,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"626d":function(t,e,n){},"66c9":function(t,e,n){"use strict";var a=n("da2b"),r=n.n(a);r.a},"8cba":function(t,e,n){"use strict";var a=n("bfa9"),r=n.n(a);r.a},"9c0c":function(t,e,n){},"9c9e":function(t,e,n){"use strict";var a=n("c1f0"),r=n.n(a);r.a},b5fa:function(t,e,n){},bfa9:function(t,e,n){},c1f0:function(t,e,n){},da2b:function(t,e,n){},f77a:function(t,e,n){},f7aa:function(t,e,n){"use strict";var a=n("626d"),r=n.n(a);r.a}});
//# sourceMappingURL=app.69a67a50.js.map