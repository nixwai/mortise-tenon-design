import{f as C,u as D,g as S,h as O,i as G,j as H,_ as M,o as N,c as F,a as P,k as U,n as X,l as q,b as J,d as K,m as Q,F as Y}from"./app-BRBGdtNb.js";var Z=typeof global=="object"&&global&&global.Object===Object&&global,ee=typeof self=="object"&&self&&self.Object===Object&&self,W=Z||ee||Function("return this")(),x=W.Symbol,z=Object.prototype,te=z.hasOwnProperty,ne=z.toString,g=x?x.toStringTag:void 0;function re(e){var t=te.call(e,g),n=e[g];try{e[g]=void 0;var r=!0}catch{}var a=ne.call(e);return r&&(t?e[g]=n:delete e[g]),a}var oe=Object.prototype,ae=oe.toString;function ie(e){return ae.call(e)}var se="[object Null]",ce="[object Undefined]",I=x?x.toStringTag:void 0;function ue(e){return e==null?e===void 0?ce:se:I&&I in Object(e)?re(e):ie(e)}function fe(e){return e!=null&&typeof e=="object"}var le="[object Symbol]";function de(e){return typeof e=="symbol"||fe(e)&&ue(e)==le}var me=/\s/;function pe(e){for(var t=e.length;t--&&me.test(e.charAt(t)););return t}var ge=/^\s+/;function be(e){return e&&e.slice(0,pe(e)+1).replace(ge,"")}function h(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var $=NaN,_e=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,ve=/^0o[0-7]+$/i,ye=parseInt;function k(e){if(typeof e=="number")return e;if(de(e))return $;if(h(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=h(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=be(e);var n=xe.test(e);return n||ve.test(e)?ye(e.slice(2),n?2:8):_e.test(e)?$:+e}var j=function(){return W.Date.now()},Te="Expected a function",Se=Math.max,je=Math.min;function Oe(e,t,n){var r,a,c,u,i,s,f=0,d=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(Te);t=k(t)||0,h(n)&&(d=!!n.leading,m="maxWait"in n,c=m?Se(k(n.maxWait)||0,t):c,v="trailing"in n?!!n.trailing:v);function y(o){var l=r,p=a;return r=a=void 0,f=o,u=e.apply(p,l),u}function L(o){return f=o,i=setTimeout(_,t),d?y(o):u}function A(o){var l=o-s,p=o-f,R=t-l;return m?je(R,c-p):R}function B(o){var l=o-s,p=o-f;return s===void 0||l>=t||l<0||m&&p>=c}function _(){var o=j();if(B(o))return E(o);i=setTimeout(_,A(o))}function E(o){return i=void 0,v&&r?y(o):(r=a=void 0,u)}function V(){i!==void 0&&clearTimeout(i),f=0,r=s=a=i=void 0}function w(){return i===void 0?u:E(j())}function T(){var o=j(),l=B(o);if(r=arguments,a=this,s=o,l){if(i===void 0)return L(s);if(m)return clearTimeout(i),i=setTimeout(_,t),y(s)}return i===void 0&&(i=setTimeout(_,t)),u}return T.cancel=V,T.flush=w,T}const he=C({name:"MtExpandBox",__name:"expand-box",props:{open:{type:Boolean,default:!1},targetRange:{default:0},transitionTime:{default:200}},setup(e,{expose:t}){t(),D(d=>({"347e481a":r.value}));const n=e,r=S(()=>`${n.transitionTime}ms`),a=O(0),c=S(()=>a.value>n.targetRange),u=S(()=>({height:`${!c.value||n.open?a.value:n.targetRange}px`})),i=O(),s=Oe(()=>{var d;a.value=(d=i.value)==null?void 0:d.offsetHeight},n.transitionTime);G(i,s),H(()=>{s()});const f={props:n,transitionDuration:r,contentRange:a,isOutRange:c,contentStyle:u,contentRef:i,getContentRange:s};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}),Be={ref:"contentRef"};function Ee(e,t,n,r,a,c){return N(),F("div",{class:X(["mt-expand-box",{"mt-expand-transition":!!n.transitionTime}]),style:q(r.contentStyle)},[P("div",Be,[U(e.$slots,"default",{open:n.open,isOutRange:r.isOutRange},void 0,!0)],512)],6)}const b=M(he,[["render",Ee],["__scopeId","data-v-f8266fc1"],["__file","expand-box.vue"]]);b.install=e=>{b.name&&e.component(b.name,b)};const Re=b,Ie=C({__name:"demo1",setup(e,{expose:t}){t();const n=O(!1);function r(){n.value=!n.value}const a={open:n,toggle:r,get MtExpandBox(){return Re}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function $e(e,t,n,r,a,c){return N(),F(Y,null,[P("button",{onClick:r.toggle}," 点击 "),J(r.MtExpandBox,{open:r.open},{default:K(()=>t[0]||(t[0]=[Q(" 展开后内容 ")])),_:1},8,["open"])],64)}const Ce=M(Ie,[["render",$e],["__file","demo1.vue"]]);export{Ce as default};
