import{H as g,I as e,J as x,K as c,c as n,L as a,M as v,N as b,G as L}from"./@vue.bf000146.js";import{_ as I,a as N,b as S,c as w,d as k,T as A,L as O,e as Y}from"./ant-design-vue.6836c95a.js";import{m as B}from"./@ant-design.e5bfbd6b.js";import"./@babel.382c84ab.js";import"./resize-observer-polyfill.8deb1e21.js";import"./vue-types.6e6d84ba.js";import"./@ctrl.a33f4eba.js";import"./dom-align.243fa364.js";import"./lodash-es.c8a42ea0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))_(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&_(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const C=(s,r)=>{const i=s.__vccOpts||s;for(const[_,t]of r)i[_]=t;return i},p=s=>(v("data-v-b02a0969"),s=s(),b(),s),J={class:"container"},P={style:{"max-width":"700px",margin:"auto"}},T=a("\u6297\u75AB\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u662F\u81EA\u5DF1\u5065\u5EB7\u7684\u7B2C\u4E00\u8D23\u4EFB\u4EBA"),V=a(" \u5173\u4E8E\u8FDB\u4E00\u6B65\u4F18\u5316\u65B0\u51A0\u80BA\u708E\u75AB\u60C5\u9632\u63A7\u63AA\u65BD "),F=p(()=>c("br",null,null,-1)),H=a(" \u79D1\u5B66\u7CBE\u51C6\u505A\u597D\u9632\u63A7\u5DE5\u4F5C\u7684\u901A\u77E5 "),K=a("\u4E8C\u3001\u843D\u5B9E\u515A\u4E2D\u592E\u90E8\u7F72\uFF0C\u79EF\u6781\u7A33\u59A5\u6293\u597D\u9632\u63A7\u63AA\u65BD\u7684\u4F18\u5316\u8C03\u6574 "),M={class:"text-list"},q=a(" \u515A\u4E2D\u592E\u5BF9\u8FDB\u4E00\u6B65\u4F18\u5316\u9632\u63A7\u5DE5\u4F5C\u7684\u4E8C\u5341\u6761\u63AA\u65BD\u4F5C\u51FA\u91CD\u8981\u90E8\u7F72\u3001\u63D0\u51FA\u660E\u786E\u8981\u6C42\uFF0C\u5404\u5730\u5404\u90E8\u95E8\u8981\u4E0D\u6298\u4E0D\u6263\u628A\u5404\u9879\u4F18\u5316\u63AA\u65BD\u843D\u5B9E\u5230\u4F4D\u3002 "),E=p(()=>c("strong",null,"\uFF08\u56DB\uFF09",-1)),G=a(" \u201C\u9AD8\u3001\u4E2D\u3001\u4F4E\u201D\u4E09\u7C7B\u8C03\u6574\u4E3A\u201C\u9AD8\u3001\u4F4E\u201D\u4E24\u7C7B\uFF0C\u6700\u5927\u9650\u5EA6\u51CF\u5C11\u7BA1\u63A7\u4EBA\u5458\u3002 \u539F\u5219\u4E0A\u5C06\u611F\u67D3\u8005\u5C45\u4F4F\u5730\u4EE5\u53CA\u6D3B\u52A8\u9891\u7E41\u4E14\u75AB\u60C5\u4F20\u64AD\u98CE\u9669\u8F83\u9AD8\u7684\u5DE5\u4F5C\u5730\u548C\u6D3B\u52A8\u5730\u7B49\u533A\u57DF\u5212\u5B9A\u4E3A\u9AD8\u98CE\u9669\u533A\uFF0C\u9AD8\u98CE\u9669\u533A\u4E00\u822C\u4EE5\u5355\u5143\u3001\u697C\u680B\u4E3A\u5355\u4F4D\u5212\u5B9A\uFF0C \u4E0D\u5F97\u968F\u610F\u6269\u5927\uFF1B\u9AD8\u98CE\u9669\u533A\u6240\u5728\u53BF\uFF08\u5E02\u3001\u533A\u3001\u65D7\uFF09\u7684\u5176\u4ED6\u5730\u533A\u5212\u5B9A\u4E3A\u4F4E\u98CE\u9669\u533A\u3002\u9AD8\u98CE\u9669\u533A\u8FDE\u7EED5\u5929\u672A\u53D1\u73B0\u65B0\u589E\u611F\u67D3\u8005\uFF0C\u964D\u4E3A\u4F4E\u98CE\u9669\u533A\u3002 \u7B26\u5408\u89E3\u5C01\u6761\u4EF6\u7684\u9AD8\u98CE\u9669\u533A\u8981\u53CA\u65F6\u89E3\u5C01\u3002 "),j=a(" 2022\u5E7412\u670824\u65E512\u65F6 \u6211\u56FD\u5927\u9646\u5730\u533A\u4E2D\u9AD8\u98CE\u9669\u533A\u5DF2\u5168\u90E8\u6E05\u96F6 "),z=a(" \u5C71\u6CB3\u65E0\u6059 \u2764\uFE0F \u56DB\u6D77\u6E05\u5E73 "),D={class:"text"},Q=a(" Created by "),R=p(()=>c("a",{href:"https://blog.sakurapuare.com"},"SakuraPuare",-1)),U=p(()=>c("br",null,null,-1)),W=a(" Host on "),X=p(()=>c("a",{href:"https://github.com/ShuYingJiYu"},"ShuYingJiYu",-1)),Z={__name:"App",setup(s){return(r,i)=>{const _=N,t=S,o=w,l=k,m=A,f=O,h=Y,y=I;return x(),g(y,null,{default:e(()=>[c("div",J,[n(f,{class:"main"},{default:e(()=>[c("div",P,[n(m,null,{default:e(()=>[n(l,null,{default:e(()=>[n(_,{class:"text"},{default:e(()=>[T]),_:1}),n(_,{type:"warning",level:2,class:"text",style:{"margin-bottom":"40px"}},{default:e(()=>[V,F,H]),_:1}),n(_,{level:3,style:{"text-align":"center","margin-bottom":"30px"}},{default:e(()=>[K]),_:1}),c("div",M,[n(o,{style:{margin:"0 2em 20px"}},{default:e(()=>[n(t,{strong:"",type:"danger"},{default:e(()=>[q]),_:1})]),_:1}),n(o,{style:{margin:"0 2em 20px"}},{default:e(()=>[n(t,null,{default:e(()=>[E,G]),_:1})]),_:1})])]),_:1})]),_:1}),n(_,{level:5,class:"text"},{default:e(()=>[j]),_:1}),n(_,{level:4,class:"text"},{default:e(()=>[z]),_:1})])]),_:1}),n(h,{class:"footer"},{default:e(()=>[c("div",D,[n(l,null,{default:e(()=>[Q,R,U,W,X]),_:1})])]),_:1})])]),_:1})}}},$=C(Z,[["__scopeId","data-v-b02a0969"]]),d=L($),u=B;for(const s in u)d.component(s,u[s]);d.mount("#app");
