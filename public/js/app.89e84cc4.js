(function(t){function e(e){for(var r,o,c=e[0],l=e[1],s=e[2],u=0,d=[];u<c.length;u++)o=c[u],i[o]&&d.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},o={app:0},i={app:0},a=[];function c(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7c3969ad"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"a36bfb65"}[t]+".css",o=l.p+r,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var c=i[a],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===r||s===o))return e()}var u=document.getElementsByTagName("style");for(a=0;a<u.length;a++){c=u[a],s=c.getAttribute("data-href");if(s===r||s===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){o[t]=0}));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise(function(e,n){r=i[t]=[e,n]});e.push(r[2]=a);var s,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(t),s=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("2D")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("3D")])],1),n("router-view")],1)},i=[],a=(n("034f"),n("2877")),c={},l=Object(a["a"])(c,o,i,!1,null,null,null);l.options.__file="App.vue";var s=l.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Articles")]),n("div",{staticClass:"list"},t._l(t.categories,function(e){return n("div",{staticClass:"reading"},[n("h2",[t._v(t._s(e.category)+" News")]),n("h4",[t._v(t._s(e.data[e.currentArticleIndex].webTitle))]),e.data[e.currentArticleIndex].imageUrl?n("img",{attrs:{src:e.data[e.currentArticleIndex].imageUrl,alt:""}}):t._e(),e.data[e.currentArticleIndex].imageUrl?t._e():n("img",{attrs:{src:"http://thehill.us/wp-content/uploads/2017/05/wait.jpg"}}),n("div",{staticClass:"buttonNavs"},[n("div",{staticClass:"kids"},[n("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",on:{click:function(n){t.downOne(e)}}},[t._v("Back")])]),n("div",{staticClass:"kids"},[n("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--accent",attrs:{id:"show-dialog"},on:{click:function(n){t.read2(e)}}},[t._v("READ ARTICLE")])]),n("div",{staticClass:"kids"},[n("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",on:{click:function(n){t.upOne(e)}}},[t._v("Next")])])]),e.currentArticleVisible?n("div",{staticClass:"reading"},[n("p",{domProps:{innerHTML:t._s(t.info.response.content.blocks.body[0].bodyHtml)}}),n("div",{staticClass:"collapse"},[n("button",{staticClass:"mdl-button mdl-js-button mdl-button--raised mdl-button--accent",attrs:{id:"show-dialog"},on:{click:function(n){t.collapse(e)}}},[t._v("COLLAPSE ARTICLE")])])]):t._e()])})),t._m(0)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"http://www.theguardian.com/us",target:"_blank"}},[n("img",{attrs:{src:"http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2010/03/01/poweredbyguardianBLACK.png"}})])}],p=(n("ac6a"),n("bc3a")),g={data:function(){return{categories:[],info:[]}},created:function(){p.get("/api/articles").then(function(t){var e=this;console.log("categories"),console.log(t),this.categories=t.data,this.categories.forEach(function(t){console.log("getArticleImage for",t.data[0]),e.getArticleImage(t.data[0])})}.bind(this))},methods:{upOne:function(t){t.currentArticleIndex<t.data.length&&(t.currentArticleIndex+=1,this.getArticleImage(t.data[t.currentArticleIndex]))},downOne:function(t){t.currentArticleIndex>0&&(t.currentArticleIndex-=1)},read2:function(t){var e=t.data[t.currentArticleIndex].apiUrl;p.get("/api/read/",{params:{api_URL:e}}).then(function(t){this.info=t.data.info}.bind(this)),console.log("CURRENT STATUS:"),console.log(t.currentArticleVisible),this.categories.forEach(function(t){return t.currentArticleVisible=!1}),t.currentArticleVisible=!t.currentArticleVisible,console.log("NEW STATUS:"),console.log(t.currentArticleVisible),console.log(this)},getArticleImage:function(t){if(!t.imageUrl){console.log("get the image using ",t.apiUrl);t.apiUrl;p.get("/api/pic/",{params:{api_URL:t.apiUrl}}).then(function(e){t.imageUrl=e.data.img})}},collapse:function(t){t.currentArticleVisible=!t.currentArticleVisible,console.log("RIDIN DIRTY")}},computed:{}},b=g,m=(n("cccb"),Object(a["a"])(b,d,f,!1,null,null,null));m.options.__file="Home.vue";var h=m.exports;r["a"].use(u["a"]);var v=new u["a"]({routes:[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});n("bc3a");r["a"].config.productionTip=!1,new r["a"]({router:v,render:function(t){return t(s)}}).$mount("#app")},"8f59":function(t,e,n){},c21b:function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("8f59"),o=n.n(r);o.a}});
//# sourceMappingURL=app.89e84cc4.js.map