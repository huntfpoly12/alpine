import{u as d}from"./asyncData.RCWpWpja.js";import{d as l,au as v,I as f,q as p,V as m,aw as g,av as h,a8 as y,N as u,E as _}from"./entry._aiJTA0l.js";const q=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(r){const{query:t}=v(r),n=f(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(r){const t=y(),{navigation:n}=r,o=e=>u(_,{to:e._path},()=>e.title),a=(e,i)=>u("ul",i?{"data-level":i}:null,e.map(s=>s.children?u("li",null,[o(s),a(s.children,i+1)]):u("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),w=q;export{w as default};
