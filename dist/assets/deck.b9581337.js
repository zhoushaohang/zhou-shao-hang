import{T as p,B as m}from"./Bottom.5d5e65e3.js";import{_ as B,n as v,r as _,o as a,c as n,b as l,a as e,F as i,q as f,s as g,t as k}from"./index.ad5e9876.js";const x={components:{TouBU:p,Bottom:m},name:"About",setup(){const t=v({list:[]});return{testData:t,getData:function(){g.get("http://127.0.0.1:4523/mock/856723/echres1").then(r=>{t.list=r.data,console.log(t)})}}}},D={class:"box"},T={class:"one"};function b(t,o,r,c,h,y){const u=_("TouBU"),d=_("Bottom");return a(),n(i,null,[l(u),e("div",D,[e("div",T,[(a(!0),n(i,null,f(c.testData.list,s=>(a(),n("ul",{key:s},[e("li",null,"\u54C8\u54C8\u54C8"+k(s),1)]))),128))]),e("button",{onClick:o[0]||(o[0]=s=>c.getData())},"test axios \u8BF7\u6C42\u6570\u636E")]),l(d)],64)}var C=B(x,[["render",b],["__scopeId","data-v-047058e0"]]);export{C as default};