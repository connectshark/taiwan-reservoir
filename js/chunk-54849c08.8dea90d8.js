(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54849c08"],{"09fc":function(e,t,n){},6511:function(e,t,n){"use strict";n.r(t);var c=n("7a23");const r={class:"list-group"};function a(e,t,n,a,s,p){const u=Object(c["y"])("Item");return Object(c["r"])(),Object(c["e"])("main",r,[(Object(c["r"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(a.data,e=>(Object(c["r"])(),Object(c["d"])(u,{key:e.id,percent:e.percent,name:e.name,time:e.time},null,8,["percent","name","time"]))),128))])}const s={class:"item"};function p(e,t,n,r,a,p){const u=Object(c["y"])("Wave");return Object(c["r"])(),Object(c["e"])("div",s,[Object(c["f"])("h4",null,Object(c["A"])(n.name),1),Object(c["h"])(u,{percent:n.percent},null,8,["percent"]),Object(c["f"])("p",null,Object(c["A"])(n.time),1)])}const u=["title"],o={class:"percent"};function i(e,t,n,r,a,s){return Object(c["r"])(),Object(c["e"])("div",{class:"wave-container",title:n.percent+"%"},[Object(c["f"])("div",{class:"wave",style:Object(c["n"])({bottom:n.percent+"%"})},null,4),Object(c["f"])("p",o,Object(c["A"])(n.percent.toFixed(0))+"%",1)],8,u)}var b={props:{percent:{type:Number,default:50}},setup(){return{}}},l=(n("688f"),n("d959")),m=n.n(l);const d=m()(b,[["render",i],["__scopeId","data-v-9c5b0482"]]);var j=d,O={components:{Wave:j},props:{name:{type:String},percent:{type:Number,default:50},time:{type:String}},setup(){return{}}};const f=m()(O,[["render",p]]);var v=f,w={components:{Item:v},setup(){const e=Object(c["w"])([]);return fetch("https://www.taiwanstat.com/waters/latest").then(e=>e.json()).then(t=>{e.value=Object.values(t[0]).map(e=>({id:e.id,name:e.name,time:e.updateAt,volumn:parseInt(e.volumn),percent:e.percentage}))}),{data:e}}};n("f181");const h=m()(w,[["render",a],["__scopeId","data-v-560d0a45"]]);t["default"]=h},"688f":function(e,t,n){"use strict";n("09fc")},b9ec:function(e,t,n){},f181:function(e,t,n){"use strict";n("b9ec")}}]);
//# sourceMappingURL=chunk-54849c08.8dea90d8.js.map