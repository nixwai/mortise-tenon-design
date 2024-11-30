import{M as u}from"./chunks/index.Bb2XV9Ne.js";import{d as c,p as f,o as p,c as i,j as e,G as a,w as r,a as o,k as d,F as h,a0 as b,B as x}from"./chunks/framework.D6w4zQ8K.js";import{R as v}from"./chunks/index.CP7nzNwI.js";import"./chunks/index.5EWLbd1v.js";const _=`<script lang="ts" setup>\r
import { MtExpand } from '@mortise-tenon/components';\r
import { ref } from 'vue';\r
\r
const open = ref(false);\r
\r
function toggle() {\r
  open.value = !open.value;\r
}\r
<\/script>\r
\r
<template>\r
  <button @click="toggle">\r
    点击\r
  </button>\r
  <MtExpand :open="open">\r
    展开后内容\r
  </MtExpand>\r
</template>\r
`,g=c({__name:"demo1",setup(m){const n=f(!1);function t(){n.value=!n.value}return(l,s)=>(p(),i(h,null,[e("button",{onClick:t}," 点击 "),a(d(u),{open:n.value},{default:r(()=>s[0]||(s[0]=[o(" 展开后内容 ")])),_:1},8,["open"])],64))}}),y=JSON.parse('{"title":"Expand","description":"","frontmatter":{},"headers":[],"relativePath":"zh/components/expand.md","filePath":"zh/components/expand.md"}'),C={name:"zh/components/expand.md"},V=Object.assign(C,{setup(m){return(n,t)=>{const l=x("ClientOnly");return p(),i("div",null,[t[0]||(t[0]=e("h1",{id:"expand",tabindex:"-1"},[o("Expand "),e("a",{class:"header-anchor",href:"#expand","aria-label":'Permalink to "Expand"'},"​")],-1)),t[1]||(t[1]=e("p",null,"控制内容的展开/收起",-1)),t[2]||(t[2]=e("h2",{id:"基础用法",tabindex:"-1"},[o("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1)),a(l,null,{default:r(()=>[a(d(v),{title:"",description:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,vueCode:d(_)},{vue:r(()=>[a(g)]),_:1},8,["vueCode"])]),_:1}),t[3]||(t[3]=b('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>open</td><td>是否展开</td><td>boolean</td><td>true</td></tr><tr><td>targetRange</td><td>收起时的范围大小(px)</td><td>number</td><td>0</td></tr><tr><td>transitionTime</td><td>动画过渡时间(ms)</td><td>number</td><td>200</td></tr></tbody></table>',2))])}}});export{y as __pageData,V as default};