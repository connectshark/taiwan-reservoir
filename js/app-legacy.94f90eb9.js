(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],f=0,s=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o={app:0},a=[];function u(e){return i.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-09cdff06":"41968d26","chunk-2d0d6f02":"84588c22","chunk-4abe5cf3":"47a82b94"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09cdff06":1,"chunk-4abe5cf3":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-09cdff06":"ce3ca28c","chunk-2d0d6f02":"31d6cfe0","chunk-4abe5cf3":"286996b5"}[e]+".css",o=i.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var l=a[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete c[e],d.parentNode.removeChild(d),n(a)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/taiwan-reservoir/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"4ee2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),o=c.createRouter,a=c.createWebHashHistory,u=a(),i=o({history:u,routes:[{path:"/",name:"home",component:function(){return n.e("chunk-4abe5cf3").then(n.bind(null,"6511"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d0d6f02").then(n.bind(null,"754b"))}},{path:"/:pathMatch(.*)*",name:"notFound",component:function(){return n.e("chunk-09cdff06").then(n.bind(null,"8cdb"))}}]}),l=i,f=n("5502"),s=Object(f["a"])({state:{},mutations:{},actions:{}}),d=s;function p(e,t,n,c,o,a){var u=Object(r["y"])("Head"),i=Object(r["y"])("router-view");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),Object(r["h"])(i)],64)}n("b0c0");var h={class:"header"},b={class:"title"},m={class:"link-group"};function v(e,t,n,c,o,a){var u=Object(r["y"])("router-link");return Object(r["r"])(),Object(r["e"])("header",h,[Object(r["f"])("h1",b,[Object(r["h"])(u,{to:"/",class:"link"},{default:Object(r["D"])((function(){return[Object(r["g"])(Object(r["A"])(c.title),1)]})),_:1})]),Object(r["f"])("nav",null,[Object(r["f"])("ul",m,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(c.nav,(function(e){return Object(r["r"])(),Object(r["e"])("li",{key:e.path,class:"link-item"},[Object(r["h"])(u,{to:e.path,class:"link"},{default:Object(r["D"])((function(){return[Object(r["g"])(Object(r["A"])(e.name),1)]})),_:2},1032,["to"])])})),128))])])])}var O={setup:function(){return{title:"台灣水庫即時水情",nav:[{path:"/about",name:"作者"}]}}},j=(n("e3e1"),n("d959")),g=n.n(j);const y=g()(O,[["render",v],["__scopeId","data-v-17f8c68c"]]);var k=y,w={name:"App",components:{Head:k}};n("6e36");const _=g()(w,[["render",p]]);var P=_;n("4ee2");Object(r["c"])(P).use(l).use(d).mount("#app")},"6e36":function(e,t,n){"use strict";n("8998")},"7fcc":function(e,t,n){},8998:function(e,t,n){},e3e1:function(e,t,n){"use strict";n("7fcc")}});
//# sourceMappingURL=app-legacy.94f90eb9.js.map