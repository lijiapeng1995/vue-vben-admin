import{d as C,an as K,f as d,a7 as N,Z as n,a8 as P,a9 as e,l as t,E as p,u as r,$ as c,_ as f,F as y,aa as v,a0 as _,ab as b}from"./vue-f962b0e4.js";import{P as V}from"./index-7bb076d5.js";import{bm as w,bn as D}from"./index.js";import{w as k}from"./antd-2f1e67c0.js";import"./useContentViewHeight-4ea1ac81.js";import"./useWindowSizeFn-844b46eb.js";import"./onMountedOrActivated-affa4888.js";import"./isNumber-f0336cfd.js";const E={class:"pt-4 m-4 desc-wrap"},$=C({name:"AccountDetail",__name:"AccountDetail",setup(F){var i;const g=k,u=k.TabPane,T=K(),B=w(),o=d((i=T.params)==null?void 0:i.id),s=d("detail"),{setTitle:x}=D();x("详情：用户"+o.value);function A(){B("/system/account")}return(h,l)=>{const m=N("a-button");return n(),P(r(V),{title:"用户"+o.value+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:A},{extra:e(()=>[t(m,{type:"primary",danger:""},{default:e(()=>[p(" 禁用账号 ")]),_:1}),t(m,{type:"primary"},{default:e(()=>[p(" 修改密码 ")]),_:1})]),footer:e(()=>[t(r(g),{"default-active-key":"detail",activeKey:s.value,"onUpdate:activeKey":l[0]||(l[0]=a=>s.value=a)},{default:e(()=>[t(r(u),{key:"detail",tab:"用户资料"}),t(r(u),{key:"logs",tab:"操作日志"})]),_:1},8,["activeKey"])]),default:e(()=>[c("div",E,[s.value=="detail"?(n(),f(y,{key:0},v(10,a=>c("div",{key:a},"这是用户"+_(o.value)+"资料Tab",1)),64)):b("",!0),s.value=="logs"?(n(),f(y,{key:1},v(10,a=>c("div",{key:a},"这是用户"+_(o.value)+"操作日志Tab",1)),64)):b("",!0)])]),_:1},8,["title"])}}});export{$ as default};
