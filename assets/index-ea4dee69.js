var y=Object.defineProperty,v=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(i,e,t)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,u=(i,e)=>{for(var t in e||(e={}))k.call(e,t)&&f(i,t,e[t]);if(d)for(var t of d(e))w.call(e,t)&&f(i,t,e[t]);return i},_=(i,e)=>v(i,b(e));var h=(i,e,t)=>new Promise((s,n)=>{var m=r=>{try{a(t.next(r))}catch(l){n(l)}},o=r=>{try{a(t.throw(r))}catch(l){n(l)}},a=r=>r.done?s(r.value):Promise.resolve(r.value).then(m,o);a((t=t.apply(i,e)).next())});import{a as C}from"./componentMap-f7f5ce27.js";import"./index.js";import"./helper-b0407d84.js";import"./BasicForm.vue_vue_type_style_index_0_lang-9667d3a7.js";import"./index-05c55ef7.js";import"./TableImg.vue_vue_type_style_index_0_lang-0fa6f8d4.js";import"./uuid-31b8b5a4.js";import"./sortable.esm-4ae27e0b.js";import{g as S}from"./system-f9b163cb.js";import{P as A}from"./index-7bb076d5.js";import{_ as B}from"./DeptTree.vue_vue_type_script_setup_true_lang-c72ba403.js";import{d as P}from"./account.data-18eb9a0b.js";import{V as R}from"./index-56b836dc.js";import{d as T,f as g,r as V,Z as I,a8 as N,a9 as x,l as p,$,u as c,ac as q}from"./vue-f962b0e4.js";import"./useFormItem-be9db066.js";import"./get-3d19de2f.js";import"./antd-2f1e67c0.js";import"./RadioButtonGroup.vue_vue_type_script_setup_true_lang-b737c8dd.js";import"./isBoolean-9388e2d6.js";import"./useSortable-b9fa3fd2.js";import"./download-4dc1f19b.js";import"./base64Conver-39fc0d26.js";import"./index-328dacc6.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-32ae3128.js";import"./copyTextToClipboard-1186e738.js";import"./index-8a187562.js";import"./index-c694e7f6.js";import"./isNumber-f0336cfd.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./useContentViewHeight-4ea1ac81.js";import"./index-7e7dc6cb.js";import"./useContextMenu-b69faf00.js";const z=[{title:"用户名",field:"account",width:120},{title:"昵称",field:"nickname",width:120},{title:"邮箱",field:"email",width:120},{title:"创建时间",field:"createTime",width:180},{title:"角色",field:"role",width:200},{title:"所属部门",field:"dept",slots:{default:({row:i})=>P[i.dept]}},{title:"备注",field:"remark"},{width:160,title:"操作",align:"center",slots:{default:"action"},fixed:"right"}],F=[{field:"account",title:"用户名",itemRender:{name:"AInput"},span:6},{field:"nickname",title:"昵称",itemRender:{name:"AInput"},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"查询",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"重置"}}]}}],H={class:"m-4 vxebasic-form-container"},ye=T({__name:"index",setup(i){const e=g(),t=g(),s=V({id:"VxeTable",keepSource:!0,columns:z,formConfig:{enabled:!0,items:F},height:"auto",proxyConfig:{ajax:{query:r=>h(this,[r],function*({page:o,form:a}){return S(_(u({page:o.currentPage,pageSize:o.pageSize},a),{searchInfo:t.value}))})}}}),n=(o="")=>{t.value=o,e.value&&e.value.commitProxy("query")},m=o=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var r;(r=e.value)==null||r.remove(o)}}}];return(o,a)=>(I(),N(c(A),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x(()=>[p(B,{class:"w-1/4 xl:w-1/5",onSelect:n}),$("div",H,[p(c(R),q({ref_key:"tableRef",ref:e},s),{action:x(({row:r})=>[p(c(C),{outside:"",actions:m(r)},null,8,["actions"])]),_:1},16)])]),_:1}))}});export{ye as default};
