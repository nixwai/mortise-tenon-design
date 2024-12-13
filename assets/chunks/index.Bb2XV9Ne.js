import{h,q as ne,p as w,v as U,a3 as re,d as z,o as y,c as b,j as B,r as V,n as ae,N as R,a4 as oe,_ as q,F as _,C,a as K,t as N}from"./framework.D6w4zQ8K.js";import{t as X,i as se,a as ie}from"./index.5EWLbd1v.js";const ce=se?window:void 0;function P(e){var t;const r=X(e);return(t=r==null?void 0:r.$el)!=null?t:r}function le(){const e=w(!1),t=re();return t&&U(()=>{e.value=!0},t),e}function ue(e){const t=le();return h(()=>(t.value,!!e()))}function fe(e,t,r={}){const{window:a=ce,...c}=r;let s;const d=ue(()=>a&&"ResizeObserver"in a),i=()=>{s&&(s.disconnect(),s=void 0)},n=h(()=>{const o=X(e);return Array.isArray(o)?o.map(l=>P(l)):[P(o)]}),u=ne(n,o=>{if(i(),d.value&&a){s=new ResizeObserver(t);for(const l of o)l&&s.observe(l,c)}},{immediate:!0,flush:"post"}),f=()=>{i(),u()};return ie(f),{isSupported:d,stop:f}}var de=typeof global=="object"&&global&&global.Object===Object&&global,pe=typeof self=="object"&&self&&self.Object===Object&&self,J=de||pe||Function("return this")(),x=J.Symbol,Q=Object.prototype,me=Q.hasOwnProperty,ge=Q.toString,$=x?x.toStringTag:void 0;function ye(e){var t=me.call(e,$),r=e[$];try{e[$]=void 0;var a=!0}catch{}var c=ge.call(e);return a&&(t?e[$]=r:delete e[$]),c}var be=Object.prototype,he=be.toString;function ve(e){return he.call(e)}var Se="[object Null]",Te="[object Undefined]",I=x?x.toStringTag:void 0;function _e(e){return e==null?e===void 0?Te:Se:I&&I in Object(e)?ye(e):ve(e)}function Oe(e){return e!=null&&typeof e=="object"}var je="[object Symbol]";function Ce(e){return typeof e=="symbol"||Oe(e)&&_e(e)==je}var $e=/\s/;function Re(e){for(var t=e.length;t--&&$e.test(e.charAt(t)););return t}var ke=/^\s+/;function Me(e){return e&&e.slice(0,Re(e)+1).replace(ke,"")}function W(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var G=NaN,Ee=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,Le=parseInt;function H(e){if(typeof e=="number")return e;if(Ce(e))return G;if(W(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=W(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Me(e);var r=xe.test(e);return r||Ae.test(e)?Le(e.slice(2),r?2:8):Ee.test(e)?G:+e}var L=function(){return J.Date.now()},we="Expected a function",Be=Math.max,Ve=Math.min;function We(e,t,r){var a,c,s,d,i,n,u=0,f=!1,o=!1,l=!0;if(typeof e!="function")throw new TypeError(we);t=H(t)||0,W(r)&&(f=!!r.leading,o="maxWait"in r,s=o?Be(H(r.maxWait)||0,t):s,l="trailing"in r?!!r.trailing:l);function p(m){var S=a,j=c;return a=c=void 0,u=m,d=e.apply(j,S),d}function g(m){return u=m,i=setTimeout(T,t),f?p(m):d}function v(m){var S=m-n,j=m-u,F=t-S;return o?Ve(F,s-j):F}function O(m){var S=m-n,j=m-u;return n===void 0||S>=t||S<0||o&&j>=s}function T(){var m=L();if(O(m))return D(m);i=setTimeout(T,v(m))}function D(m){return i=void 0,l&&a?p(m):(a=c=void 0,d)}function ee(){i!==void 0&&clearTimeout(i),u=0,a=n=c=i=void 0}function te(){return i===void 0?d:D(L())}function A(){var m=L(),S=O(m);if(a=arguments,c=this,n=m,S){if(i===void 0)return g(n);if(o)return clearTimeout(i),i=setTimeout(T,t),p(n)}return i===void 0&&(i=setTimeout(T,t)),d}return A.cancel=ee,A.flush=te,A}const ze=z({name:"MtExpand",__name:"expand",props:{open:{type:Boolean,default:!1},targetRange:{default:0},transitionTime:{default:200}},setup(e){oe(n=>({"5e8c9858":r.value}));const t=e,r=h(()=>`${t.transitionTime}ms`),a=w(0),c=h(()=>a.value>t.targetRange),s=h(()=>({height:`${!c.value||t.open?a.value:t.targetRange}px`})),d=w(),i=We(()=>{var n;a.value=(n=d.value)==null?void 0:n.offsetHeight},t.transitionTime);return fe(d,i),U(()=>{i()}),(n,u)=>(y(),b("div",{class:ae(["mt-expand",{"mt-expand-transition":!!n.transitionTime}]),style:R(s.value)},[B("div",{ref_key:"contentRef",ref:d},[V(n.$slots,"default",{open:n.open,isOutRange:c.value},void 0,!0)],512)],6))}}),k=q(ze,[["__scopeId","data-v-f8dab1fa"]]);k.install=e=>{k.name&&e.component(k.name,k)};const Ge=k,M=z({name:"MtSort",props:{sortList:{type:Array,default:()=>[]},keyName:{type:String,default:"sort-key"}},setup(e,{slots:t}){const r=h(()=>{var d;const a=((d=t.default)==null?void 0:d.call(t))||[],c=Y(e.keyName,a),s=Array.from(new Set(e.sortList)).map(i=>c[i]).filter(Boolean);return Z(e.keyName,a,e.sortList,s)});return()=>r.value}});function Y(e,t,r={}){return t.forEach(a=>{var s;const c=(s=a.props)==null?void 0:s[e];if(c){r[c]?console.warn(`<mt-sort-space> ${e}: ${c} repeat`):r[c]=a;return}Array.isArray(a.children)&&Y(e,a.children,r)}),r}function Z(e,t,r,a){const c=[];return t.forEach(s=>{var i;const d=(i=s.props)==null?void 0:i[e];if(d&&r.includes(d)){const n=a.shift();if(n){c.push(n);return}}Array.isArray(s.children)&&(s={...s},s.children=Z(e,s.children,r,a)),c.push(s)}),c}M.install=e=>{M.name&&e.component(M.name,M)};const He=M,De={class:"mt-table"},Fe=["colspan","rowspan"],Ke=["colspan","rowspan"],Ne=z({name:"MtTable",__name:"table",props:{data:{default:()=>[]},config:{default:()=>[]}},setup(e){const t=e,r=h(()=>t.config.map(n=>({...n,columns:n.columns.filter(u=>u.title)}))),a=h(()=>t.config.map(n=>({...n,columns:n.columns.filter(u=>u.dataKey)}))),c=h(()=>{const n=r.value.map(f=>f.columns.reduce((o,l)=>{var p;return o+(((p=l.head)==null?void 0:p.colSpan)||1)},0)),u=a.value.map(f=>f.columns.reduce((o,l)=>{var p;return o+(((p=l.cell)==null?void 0:p.colSpan)||1)},0));return Math.max(...n,...u)}),s=h(()=>{const n=r.value.map(u=>u.columns.map(f=>{var o;return((o=f.head)==null?void 0:o.colSpan)||0}));return i(n)}),d=h(()=>{const n=a.value.map(u=>u.columns.map(f=>{var o;return((o=f.cell)==null?void 0:o.colSpan)||0}));return i(n)});function i(n){return n.map(u=>{const f=u.filter(Boolean),o=f.reduce((g,v)=>g+v,0);let l=u.length-f.length,p=c.value-o;return u.map(g=>(!g&&p>0&&(g=Math.ceil(p/l),l--,p-=g),g))})}return(n,u)=>(y(),b("table",De,[B("thead",null,[(y(!0),b(_,null,C(r.value,(f,o)=>(y(),b("tr",{key:o,style:R(f.headStyle)},[(y(!0),b(_,null,C(f.columns,(l,p)=>{var g,v;return y(),b("th",{key:`${l.title}-${p}`,colspan:s.value[o][p],rowspan:(g=l.head)==null?void 0:g.rowSpan,style:R((v=l.head)==null?void 0:v.style)},[V(n.$slots,"header",{column:l,columnIndex:p,row:f,rowIndex:o},()=>[K(N(l.title),1)],!0)],12,Fe)}),128))],4))),128))]),B("tbody",null,[(y(!0),b(_,null,C(n.data,(f,o)=>(y(),b(_,{key:o},[(y(!0),b(_,null,C(a.value,(l,p)=>(y(),b("tr",{key:p,style:R(l.rowStyle)},[(y(!0),b(_,null,C(l.columns,(g,v)=>{var O,T;return y(),b("td",{key:`${g.dataKey}-${v}`,colspan:d.value[p][v],rowspan:(O=g.cell)==null?void 0:O.rowSpan,style:R((T=g.cell)==null?void 0:T.style)},[V(n.$slots,"cell",{column:g,columnIndex:v,dataIndex:o,record:f,row:l,rowIndex:p},()=>[K(N(f[g.dataKey]),1)],!0)],12,Ke)}),128))],4))),128))],64))),128))])]))}}),E=q(Ne,[["__scopeId","data-v-e54743a9"]]);E.install=e=>{E.name&&e.component(E.name,E)};const Ue=E;export{Ge as M,He as a,Ue as b};