import{a2 as f,m as x,bx as t,e as y}from"./index.js";import{P as S}from"./index-7bb076d5.js";import{_ as g}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-8318effc.js";import{d as v,c,a7 as E,Z as R,a8 as T,a9 as a,l as s,$ as i,E as n,a0 as l,u as e}from"./vue-f962b0e4.js";import{x as C,u as P}from"./antd-2f1e67c0.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";const b={class:"mt-4"},k=v({__name:"index",setup(B){const{changeRole:p}=f(),r=x(),m=c(()=>r.getRoleList.includes(t.SUPER)),_=c(()=>r.getRoleList.includes(t.TEST));return(U,o)=>{const u=E("a-button");return R(),T(e(S),{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:a(()=>[s(g),i("p",null,[n(" 当前角色: "),i("a",null,l(e(r).getRoleList),1)]),s(e(C),{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),i("div",b,[n(" 权限切换(请先切换权限模式为前端角色权限模式): "),s(e(P),null,{default:a(()=>[s(u,{onClick:o[0]||(o[0]=d=>e(p)(e(t).SUPER)),type:m.value?"primary":"default"},{default:a(()=>[n(l(e(t).SUPER),1)]),_:1},8,["type"]),s(u,{onClick:o[1]||(o[1]=d=>e(p)(e(t).TEST)),type:_.value?"primary":"default"},{default:a(()=>[n(l(e(t).TEST),1)]),_:1},8,["type"])]),_:1})])]),_:1})}}});const W=y(k,[["__scopeId","data-v-b9f581f7"]]);export{W as default};
