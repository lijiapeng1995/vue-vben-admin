var m=(l,s,e)=>new Promise((r,a)=>{var o=t=>{try{n(e.next(t))}catch(c){a(c)}},i=t=>{try{n(e.throw(t))}catch(c){a(c)}},n=t=>t.done?r(t.value):Promise.resolve(t.value).then(o,i);n((e=e.apply(l,s)).next())});import{_ as p}from"./index-7e7dc6cb.js";import{a as f}from"./system-f9b163cb.js";import{d as _,f as d,o as u,Z as h,_ as D,l as v,u as w}from"./vue-f962b0e4.js";const k={class:"m-4 mr-0 overflow-hidden bg-white"},g=_({name:"DeptTree",__name:"DeptTree",emits:["select"],setup(l,{emit:s}){const e=d([]);function r(){return m(this,null,function*(){e.value=yield f()})}function a(o){s("select",o[0])}return u(()=>{r()}),(o,i)=>(h(),D("div",k,[v(w(p),{title:"部门列表",toolbar:"",search:"",treeWrapperClassName:"h-[calc(100%-35px)] overflow-auto",clickRowToExpand:!1,treeData:e.value,fieldNames:{key:"id",title:"deptName"},onSelect:a},null,8,["treeData"])]))}});export{g as _};
