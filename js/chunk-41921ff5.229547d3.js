(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41921ff5"],{1685:function(e,t,c){"use strict";c("a011")},6511:function(e,t,c){"use strict";c.r(t);var n=c("7a23");const a={class:"list-group"};function s(e,t,c,s,r,i){const u=Object(n["y"])("Item");return Object(n["r"])(),Object(n["e"])("main",a,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(s.data,e=>(Object(n["r"])(),Object(n["d"])(u,{key:e.id,percent:e.percent,name:e.name,time:e.time},null,8,["percent","name","time"]))),128))])}const r=e=>(Object(n["u"])("data-v-e4d7e384"),e=e(),Object(n["s"])(),e),i={class:"item"},u={class:"title"},p=r(()=>Object(n["f"])("i",{class:"bx bx-water"},null,-1)),o={class:"time"},b=r(()=>Object(n["f"])("i",{class:"bx bx-time"},null,-1));function d(e,t,c,a,s,r){const d=Object(n["y"])("Wave");return Object(n["r"])(),Object(n["e"])("div",i,[Object(n["h"])(d,{percent:c.percent},null,8,["percent"]),Object(n["f"])("h4",u,[p,Object(n["g"])(Object(n["A"])(c.name),1)]),Object(n["f"])("p",o,[b,Object(n["g"])(Object(n["A"])(c.time),1)])])}const l=["title"],j={class:"percent"};function O(e,t,c,a,s,r){return Object(n["r"])(),Object(n["e"])("div",{class:"wave-container",title:c.percent+"%"},[Object(n["f"])("div",{class:"wave",style:Object(n["n"])({bottom:c.percent+"%"})},null,4),Object(n["f"])("p",j,Object(n["A"])(c.percent.toFixed(0))+"%",1)],8,l)}var m={props:{percent:{type:Number,default:50}},setup(){return{}}},f=(c("cd6a"),c("d959")),v=c.n(f);const w=v()(m,[["render",O],["__scopeId","data-v-c3ef4d8a"]]);var h=w,y={components:{Wave:h},props:{name:{type:String},percent:{type:Number,default:50},time:{type:String}},setup(){return{}}};c("cd91");const g=v()(y,[["render",d],["__scopeId","data-v-e4d7e384"]]);var x=g,I={components:{Item:x},setup(){const e=Object(n["w"])([]);return fetch("https://www.taiwanstat.com/waters/latest").then(e=>e.json()).then(t=>{e.value=Object.values(t[0]).map(e=>({id:e.id,name:e.name,time:e.updateAt,volumn:parseInt(e.volumn),percent:e.percentage}))}),{data:e}}};c("1685");const _=v()(I,[["render",s],["__scopeId","data-v-108c816b"]]);t["default"]=_},a011:function(e,t,c){},c4af:function(e,t,c){},cd6a:function(e,t,c){"use strict";c("d2a0")},cd91:function(e,t,c){"use strict";c("c4af")},d2a0:function(e,t,c){}}]);
//# sourceMappingURL=chunk-41921ff5.229547d3.js.map