var N=Object.defineProperty;var f=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var b=(o,t,e)=>t in o?N(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,g=(o,t)=>{for(var e in t||(t={}))P.call(t,e)&&b(o,e,t[e]);if(f)for(var e of f(t))v.call(t,e)&&b(o,e,t[e]);return o};var m=(o,t,e)=>new Promise((i,n)=>{var p=a=>{try{c(e.next(a))}catch(s){n(s)}},d=a=>{try{c(e.throw(a))}catch(s){n(s)}},c=a=>a.done?i(a.value):Promise.resolve(a.value).then(p,d);c((e=e.apply(o,t)).next())});import{a as w,B as x}from"./index-05c55ef7.js";import{_ as D}from"./BasicForm.vue_vue_type_script_setup_true_lang-b0d03306.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9667d3a7.js";import"./componentMap-f7f5ce27.js";import{u as M}from"./useForm-8838369c.js";import{m as S,d as k,f as y,c as B,u as l,Z as R,a8 as F,a9 as T,l as q,ac as C}from"./vue-f962b0e4.js";import{o as L}from"./antd-2f1e67c0.js";import{a as V}from"./system-f9b163cb.js";const H=[{title:"部门名称",dataIndex:"deptName",width:160,align:"left"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:o})=>{const e=~~o.status===0,i=e?"green":"red",n=e?"启用":"停用";return S(L,{color:i},()=>n)}},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],J=[{field:"deptName",label:"部门名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],A=[{field:"deptName",label:"部门名称",component:"Input",required:!0},{field:"parentDept",label:"上级部门",component:"TreeSelect",ifShow({values:o}){const{deptName:t,parentDept:e}=o;return e||!t&&!e},componentProps:{fieldNames:{label:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},required:!0},{label:"备注",field:"remark",component:"InputTextArea"}],K=k({name:"DeptModal",__name:"DeptModal",emits:["success","register"],setup(o,{emit:t}){const e=y(!0),[i,{resetFields:n,setFieldsValue:p,updateSchema:d,validate:c}]=M({labelWidth:100,baseColProps:{span:24},schemas:A,showActionButtonGroup:!1}),[a,{setModalProps:s,closeModal:h}]=w(r=>m(this,null,function*(){n(),s({confirmLoading:!1}),e.value=!!(r!=null&&r.isUpdate),l(e)&&p(g({},r.record));const u=yield V();d({field:"parentDept",componentProps:{treeData:u}})})),_=B(()=>l(e)?"编辑部门":"新增部门");function I(){return m(this,null,function*(){try{const r=yield c();s({confirmLoading:!0}),h(),t("success")}finally{s({confirmLoading:!1})}})}return(r,u)=>(R(),F(l(x),C(r.$attrs,{onRegister:l(a),title:_.value,onOk:I}),{default:T(()=>[q(l(D),{onRegister:l(i)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{K as _,H as c,J as s};
