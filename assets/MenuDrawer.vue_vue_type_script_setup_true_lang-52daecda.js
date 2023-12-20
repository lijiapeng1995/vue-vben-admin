var _=Object.defineProperty;var b=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(e,o,t)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,w=(e,o)=>{for(var t in o||(o={}))S.call(o,t)&&h(e,t,o[t]);if(b)for(var t of b(o))x.call(o,t)&&h(e,t,o[t]);return e};var d=(e,o,t)=>new Promise((i,s)=>{var c=a=>{try{u(t.next(a))}catch(n){s(n)}},m=a=>{try{u(t.throw(a))}catch(n){s(n)}},u=a=>a.done?i(a.value):Promise.resolve(a.value).then(c,m);u((t=t.apply(e,o)).next())});import{_ as B}from"./BasicForm.vue_vue_type_script_setup_true_lang-b0d03306.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9667d3a7.js";import"./componentMap-f7f5ce27.js";import{u as R}from"./useForm-8838369c.js";import{I as D}from"./index.js";import{m as g,d as N,f as V,c as k,u as r,Z as F,a8 as G,a9 as M,l as q,ac as C}from"./vue-f962b0e4.js";import{o as L}from"./antd-2f1e67c0.js";import{a as T,B as $}from"./index-4eb9ab1a.js";import{d as U}from"./system-f9b163cb.js";const Y=[{title:"菜单名称",dataIndex:"menuName",width:200,align:"left"},{title:"图标",dataIndex:"icon",width:50,customRender:({record:e})=>g(D,{icon:e.icon})},{title:"权限标识",dataIndex:"permission",width:180},{title:"组件",dataIndex:"component"},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:80,customRender:({record:e})=>{const t=~~e.status===0,i=t?"green":"red",s=t?"启用":"停用";return g(L,{color:i},()=>s)}},{title:"创建时间",dataIndex:"createTime",width:180}],A=e=>e==="0",v=e=>e==="1",p=e=>e==="2",ee=[{field:"menuName",label:"菜单名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],E=[{field:"type",label:"菜单类型",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"目录",value:"0"},{label:"菜单",value:"1"},{label:"按钮",value:"2"}]},colProps:{lg:24,md:24}},{field:"menuName",label:"菜单名称",component:"Input",required:!0},{field:"parentMenu",label:"上级菜单",component:"TreeSelect",componentProps:{fieldNames:{label:"menuName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"orderNo",label:"排序",component:"InputNumber",required:!0},{field:"icon",label:"图标",component:"IconPicker",required:!0,ifShow:({values:e})=>!p(e.type)},{field:"routePath",label:"路由地址",component:"Input",required:!0,ifShow:({values:e})=>!p(e.type)},{field:"component",label:"组件路径",component:"Input",ifShow:({values:e})=>v(e.type)},{field:"permission",label:"权限标识",component:"Input",ifShow:({values:e})=>!A(e.type)},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"禁用",value:"1"}]}},{field:"isExt",label:"是否外链",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>!p(e.type)},{field:"keepalive",label:"是否缓存",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"否",value:"0"},{label:"是",value:"1"}]},ifShow:({values:e})=>v(e.type)},{field:"show",label:"是否显示",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"是",value:"0"},{label:"否",value:"1"}]},ifShow:({values:e})=>!p(e.type)}],te=N({name:"MenuDrawer",__name:"MenuDrawer",emits:["success","register"],setup(e,{emit:o}){const t=V(!0),[i,{resetFields:s,setFieldsValue:c,updateSchema:m,validate:u}]=R({labelWidth:100,schemas:E,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[a,{setDrawerProps:n,closeDrawer:P}]=T(l=>d(this,null,function*(){s(),n({confirmLoading:!1}),t.value=!!(l!=null&&l.isUpdate),r(t)&&c(w({},l.record));const f=yield U();m({field:"parentMenu",componentProps:{treeData:f}})})),I=k(()=>r(t)?"编辑菜单":"新增菜单");function y(){return d(this,null,function*(){try{const l=yield u();n({confirmLoading:!0}),P(),o("success")}finally{n({confirmLoading:!1})}})}return(l,f)=>(F(),G(r($),C(l.$attrs,{onRegister:r(a),showFooter:"",title:I.value,width:"50%",onOk:y}),{default:M(()=>[q(r(B),{onRegister:r(i)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{te as _,Y as c,ee as s};
