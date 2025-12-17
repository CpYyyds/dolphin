import{d as fe,r as N,aa as Zn,o as De,a3 as cn,h as f,M as Qn,V as wn,U as xn,a1 as Je,ab as Oe,a4 as Xn,T as kn,l as $,p as L,n as G,k as X,$ as ke,e as me,Y as Z,ac as et,g as D,H as Fe,R as rn,t as We,P as nt,j as q,a7 as tt,ad as ot,ae as W,b as Sn,f as rt,N as lt,W as it,af as at,a2 as st,F as ct,ag as dt,J as ut,L as ft,ah as ht}from"./index.02a17cf1.js";import{f as Pn}from"./fade-in-scale-up.cssr.d8408fe5.js";import{u as fn}from"./use-merged-state.2bdc3563.js";import{u as vt}from"./use-locale.47aab0f5.js";import{u as gt}from"./use-compitable.cd47f4ac.js";import{c as hn,u as bt}from"./use-form-item.96cfc8ba.js";import{N as pt,W as mt,g as yt}from"./Scrollbar.988383de.js";import{r as ln,b as Ct,c as le}from"./resolve-slot.92499a18.js";import{c as wt,a as xt}from"./cssr.f561ccf0.js";import{i as dn,a as kt,N as St,u as an,V as Pt,b as Ot,c as Ft}from"./Popover.92dc7b00.js";import{V as Rt,N as Tt,g as Mt}from"./Empty.249462a1.js";import{a as zt}from"./Suffix.62982c61.js";import{r as vn}from"./VResizeObserver.f80d6e55.js";import{c as gn}from"./index.8a81335d.js";import{d as It,a as Ze}from"./index.5f9a33e7.js";import{m as Bt}from"./index.21198e00.js";function Ee(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function Qe(e){const t=e.filter(n=>n!==void 0);if(t.length!==0)return t.length===1?t[0]:n=>{e.forEach(o=>{o&&o(n)})}}const ue="v-hidden",_t=xt("[v-hidden]",{display:"none!important"}),bn=fe({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){const n=N(null),o=N(null);function i(a){const{value:l}=n,{getCounter:g,getTail:b}=e;let h;if(g!==void 0?h=g():h=o.value,!l||!h)return;h.hasAttribute(ue)&&h.removeAttribute(ue);const{children:m}=l;if(a.showAllItemsBeforeCalculate)for(const R of m)R.hasAttribute(ue)&&R.removeAttribute(ue);const S=l.offsetWidth,x=[],c=t.tail?b==null?void 0:b():null;let P=c?c.offsetWidth:0,M=!1;const k=l.children.length-(t.tail?1:0);for(let R=0;R<k-1;++R){if(R<0)continue;const p=m[R];if(M){p.hasAttribute(ue)||p.setAttribute(ue,"");continue}else p.hasAttribute(ue)&&p.removeAttribute(ue);const C=p.offsetWidth;if(P+=C,x[R]=C,P>S){const{updateCounter:T}=e;for(let z=R;z>=0;--z){const K=k-1-z;T!==void 0?T(K):h.textContent=`${K}`;const V=h.offsetWidth;if(P-=x[z],P+V<=S||z===0){M=!0,R=z-1,c&&(R===-1?(c.style.maxWidth=`${S-V}px`,c.style.boxSizing="border-box"):c.style.maxWidth="");const{onUpdateCount:I}=e;I&&I(K);break}}}}const{onUpdateOverflow:O}=e;M?O!==void 0&&O(!0):(O!==void 0&&O(!1),h.setAttribute(ue,""))}const s=Zn();return _t.mount({id:"vueuc/overflow",head:!0,anchorMetaName:wt,ssr:s}),De(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:o,sync:i}},render(){const{$slots:e}=this;return cn(()=>this.sync({showAllItemsBeforeCalculate:!1})),f("div",{class:"v-overflow",ref:"selfRef"},[Qn(e,"default"),e.counter?e.counter():f("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function On(e,t){t&&(De(()=>{const{value:n}=e;n&&vn.registerHandler(n,t)}),wn(()=>{const{value:n}=e;n&&vn.unregisterHandler(n)}))}const At=fe({name:"Checkmark",render(){return f("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},f("g",{fill:"none"},f("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),$t=fe({props:{onFocus:Function,onBlur:Function},setup(e){return()=>f("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function pn(e){return Array.isArray(e)?e:[e]}const sn={STOP:"STOP"};function Fn(e,t){const n=t(e);e.children!==void 0&&n!==sn.STOP&&e.children.forEach(o=>Fn(o,t))}function Nt(e,t={}){const{preserveGroup:n=!1}=t,o=[],i=n?a=>{a.isLeaf||(o.push(a.key),s(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),s(a.children))};function s(a){a.forEach(i)}return s(e),o}function Et(e,t){const{isLeaf:n}=e;return n!==void 0?n:!t(e)}function Lt(e){return e.children}function Kt(e){return e.key}function Dt(){return!1}function Wt(e,t){const{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function Vt(e){return e.disabled===!0}function Ht(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function Xe(e){var t;return e==null?[]:Array.isArray(e)?e:(t=e.checkedKeys)!==null&&t!==void 0?t:[]}function en(e){var t;return e==null||Array.isArray(e)?[]:(t=e.indeterminateKeys)!==null&&t!==void 0?t:[]}function jt(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)||n.add(o)}),Array.from(n)}function Ut(e,t){const n=new Set(e);return t.forEach(o=>{n.has(o)&&n.delete(o)}),Array.from(n)}function Gt(e){return(e==null?void 0:e.type)==="group"}function qt(e){const t=new Map;return e.forEach((n,o)=>{t.set(n.key,o)}),n=>{var o;return(o=t.get(n))!==null&&o!==void 0?o:null}}class Yt extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function Jt(e,t,n,o){return Le(t.concat(e),n,o,!1)}function Zt(e,t){const n=new Set;return e.forEach(o=>{const i=t.treeNodeMap.get(o);if(i!==void 0){let s=i.parent;for(;s!==null&&!(s.disabled||n.has(s.key));)n.add(s.key),s=s.parent}}),n}function Qt(e,t,n,o){const i=Le(t,n,o,!1),s=Le(e,n,o,!0),a=Zt(e,n),l=[];return i.forEach(g=>{(s.has(g)||a.has(g))&&l.push(g)}),l.forEach(g=>i.delete(g)),i}function nn(e,t){const{checkedKeys:n,keysToCheck:o,keysToUncheck:i,indeterminateKeys:s,cascade:a,leafOnly:l,checkStrategy:g,allowNotLoaded:b}=e;if(!a)return o!==void 0?{checkedKeys:jt(n,o),indeterminateKeys:Array.from(s)}:i!==void 0?{checkedKeys:Ut(n,i),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(n),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:h}=t;let m;i!==void 0?m=Qt(i,n,t,b):o!==void 0?m=Jt(o,n,t,b):m=Le(n,t,b,!1);const S=g==="parent",x=g==="child"||l,c=m,P=new Set,M=Math.max.apply(null,Array.from(h.keys()));for(let k=M;k>=0;k-=1){const O=k===0,R=h.get(k);for(const p of R){if(p.isLeaf)continue;const{key:C,shallowLoaded:T}=p;if(x&&T&&p.children.forEach(I=>{!I.disabled&&!I.isLeaf&&I.shallowLoaded&&c.has(I.key)&&c.delete(I.key)}),p.disabled||!T)continue;let z=!0,K=!1,V=!0;for(const I of p.children){const Y=I.key;if(!I.disabled){if(V&&(V=!1),c.has(Y))K=!0;else if(P.has(Y)){K=!0,z=!1;break}else if(z=!1,K)break}}z&&!V?(S&&p.children.forEach(I=>{!I.disabled&&c.has(I.key)&&c.delete(I.key)}),c.add(C)):K&&P.add(C),O&&x&&c.has(C)&&c.delete(C)}}return{checkedKeys:Array.from(c),indeterminateKeys:Array.from(P)}}function Le(e,t,n,o){const{treeNodeMap:i,getChildren:s}=t,a=new Set,l=new Set(e);return e.forEach(g=>{const b=i.get(g);b!==void 0&&Fn(b,h=>{if(h.disabled)return sn.STOP;const{key:m}=h;if(!a.has(m)&&(a.add(m),l.add(m),Ht(h.rawNode,s))){if(o)return sn.STOP;if(!n)throw new Yt}})}),l}function Xt(e,{includeGroup:t=!1,includeSelf:n=!0},o){var i;const s=o.treeNodeMap;let a=e==null?null:(i=s.get(e))!==null&&i!==void 0?i:null;const l={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return l.treeNode=null,l;for(;a;)!a.ignored&&(t||!a.isGroup)&&l.treeNodePath.push(a),a=a.parent;return l.treeNodePath.reverse(),n||l.treeNodePath.pop(),l.keyPath=l.treeNodePath.map(g=>g.key),l}function eo(e){if(e.length===0)return null;const t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function no(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i+1)%o]:i===n.length-1?null:n[i+1]}function mn(e,t,{loop:n=!1,includeDisabled:o=!1}={}){const i=t==="prev"?to:no,s={reverse:t==="prev"};let a=!1,l=null;function g(b){if(b!==null){if(b===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){l=e;return}}else if((!b.disabled||o)&&!b.ignored&&!b.isGroup){l=b;return}if(b.isGroup){const h=un(b,s);h!==null?l=h:g(i(b,n))}else{const h=i(b,!1);if(h!==null)g(h);else{const m=oo(b);m!=null&&m.isGroup?g(i(m,n)):n&&g(i(b,!0))}}}}return g(e),l}function to(e,t){const n=e.siblings,o=n.length,{index:i}=e;return t?n[(i-1+o)%o]:i===0?null:n[i-1]}function oo(e){return e.parent}function un(e,t={}){const{reverse:n=!1}=t,{children:o}=e;if(o){const{length:i}=o,s=n?i-1:0,a=n?-1:i,l=n?-1:1;for(let g=s;g!==a;g+=l){const b=o[g];if(!b.disabled&&!b.ignored)if(b.isGroup){const h=un(b,t);if(h!==null)return h}else return b}}return null}const ro={getChild(){return this.ignored?null:un(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return mn(this,"next",e)},getPrev(e={}){return mn(this,"prev",e)}};function lo(e,t){const n=t?new Set(t):void 0,o=[];function i(s){s.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||n===void 0||n.has(a.key))&&i(a.children)})}return i(e),o}function io(e,t){const n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Rn(e,t,n,o,i,s=null,a=0){const l=[];return e.forEach((g,b)=>{var h;const m=Object.create(o);if(m.rawNode=g,m.siblings=l,m.level=a,m.index=b,m.isFirstChild=b===0,m.isLastChild=b+1===e.length,m.parent=s,!m.ignored){const S=i(g);Array.isArray(S)&&(m.children=Rn(S,t,n,o,i,m,a+1))}l.push(m),t.set(m.key,m),n.has(a)||n.set(a,[]),(h=n.get(a))===null||h===void 0||h.push(m)}),l}function ao(e,t={}){var n;const o=new Map,i=new Map,{getDisabled:s=Vt,getIgnored:a=Dt,getIsGroup:l=Gt,getKey:g=Kt}=t,b=(n=t.getChildren)!==null&&n!==void 0?n:Lt,h=t.ignoreEmptyChildren?p=>{const C=b(p);return Array.isArray(C)?C.length?C:null:C}:b,m=Object.assign({get key(){return g(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return l(this.rawNode)},get isLeaf(){return Et(this.rawNode,h)},get shallowLoaded(){return Wt(this.rawNode,h)},get ignored(){return a(this.rawNode)},contains(p){return io(this,p)}},ro),S=Rn(e,o,i,m,h);function x(p){if(p==null)return null;const C=o.get(p);return C&&!C.isGroup&&!C.ignored?C:null}function c(p){if(p==null)return null;const C=o.get(p);return C&&!C.ignored?C:null}function P(p,C){const T=c(p);return T?T.getPrev(C):null}function M(p,C){const T=c(p);return T?T.getNext(C):null}function k(p){const C=c(p);return C?C.getParent():null}function O(p){const C=c(p);return C?C.getChild():null}const R={treeNodes:S,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:h,getFlattenedNodes(p){return lo(S,p)},getNode:x,getPrev:P,getNext:M,getParent:k,getChild:O,getFirstAvailableNode(){return eo(S)},getPath(p,C={}){return Xt(p,C,R)},getCheckedKeys(p,C={}){const{cascade:T=!0,leafOnly:z=!1,checkStrategy:K="all",allowNotLoaded:V=!1}=C;return nn({checkedKeys:Xe(p),indeterminateKeys:en(p),cascade:T,leafOnly:z,checkStrategy:K,allowNotLoaded:V},R)},check(p,C,T={}){const{cascade:z=!0,leafOnly:K=!1,checkStrategy:V="all",allowNotLoaded:I=!1}=T;return nn({checkedKeys:Xe(C),indeterminateKeys:en(C),keysToCheck:p==null?[]:pn(p),cascade:z,leafOnly:K,checkStrategy:V,allowNotLoaded:I},R)},uncheck(p,C,T={}){const{cascade:z=!0,leafOnly:K=!1,checkStrategy:V="all",allowNotLoaded:I=!1}=T;return nn({checkedKeys:Xe(C),indeterminateKeys:en(C),keysToUncheck:p==null?[]:pn(p),cascade:z,leafOnly:K,checkStrategy:V,allowNotLoaded:I},R)},getNonLeafKeys(p={}){return Nt(S,p)}};return R}function so(e,t){return f(kn,{name:"fade-in-scale-up-transition"},{default:()=>e?f(Xn,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>f(At)}):null})}const yn=fe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:t,pendingTmNodeRef:n,multipleRef:o,valueSetRef:i,renderLabelRef:s,renderOptionRef:a,labelFieldRef:l,valueFieldRef:g,showCheckmarkRef:b,nodePropsRef:h,handleOptionClick:m,handleOptionMouseEnter:S}=xn(dn),x=Je(()=>{const{value:k}=n;return k?e.tmNode.key===k.key:!1});function c(k){const{tmNode:O}=e;O.disabled||m(k,O)}function P(k){const{tmNode:O}=e;O.disabled||S(k,O)}function M(k){const{tmNode:O}=e,{value:R}=x;O.disabled||R||S(k,O)}return{multiple:o,isGrouped:Je(()=>{const{tmNode:k}=e,{parent:O}=k;return O&&O.rawNode.type==="group"}),showCheckmark:b,nodeProps:h,isPending:x,isSelected:Je(()=>{const{value:k}=t,{value:O}=o;if(k===null)return!1;const R=e.tmNode.rawNode[g.value];if(O){const{value:p}=i;return p.has(R)}else return k===R}),labelField:l,renderLabel:s,renderOption:a,handleMouseMove:M,handleMouseEnter:P,handleClick:c}},render(){const{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:o,isGrouped:i,showCheckmark:s,nodeProps:a,renderOption:l,renderLabel:g,handleClick:b,handleMouseEnter:h,handleMouseMove:m}=this,S=so(n,e),x=g?[g(t,n),s&&S]:[Oe(t[this.labelField],t,n),s&&S],c=a==null?void 0:a(t),P=f("div",Object.assign({},c,{class:[`${e}-base-select-option`,t.class,c==null?void 0:c.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[(c==null?void 0:c.style)||"",t.style||""],onClick:Qe([b,c==null?void 0:c.onClick]),onMouseenter:Qe([h,c==null?void 0:c.onMouseenter]),onMousemove:Qe([m,c==null?void 0:c.onMousemove])}),f("div",{class:`${e}-base-select-option__content`},x));return t.render?t.render({node:P,option:t,selected:n}):l?l({node:P,option:t,selected:n}):P}}),Cn=fe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:o}=xn(dn);return{labelField:n,nodeProps:o,renderLabel:e,renderOption:t}},render(){const{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:o,tmNode:{rawNode:i}}=this,s=o==null?void 0:o(i),a=t?t(i,!1):Oe(i[this.labelField],i,!1),l=f("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),a);return i.render?i.render({node:l,option:i}):n?n({node:l,option:i,selected:!1}):l}}),co=$("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$("scrollbar",`
 max-height: var(--n-height);
 `),$("virtual-list",`
 max-height: var(--n-height);
 `),$("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[L("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),L("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),L("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),L("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[G("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),X("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),X("&:active",`
 color: var(--n-option-text-color-pressed);
 `),G("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),G("pending",[X("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),G("selected",`
 color: var(--n-option-text-color-active);
 `,[X("&::before",`
 background-color: var(--n-option-color-active);
 `),G("pending",[X("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),G("disabled",`
 cursor: not-allowed;
 `,[ke("selected",`
 color: var(--n-option-text-color-disabled);
 `),G("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),L("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Pn({enterScale:"0.5"})])])]),uo=fe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},me.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const t=me("InternalSelectMenu","-internal-select-menu",co,et,e,Z(e,"clsPrefix")),n=N(null),o=N(null),i=N(null),s=D(()=>e.treeMate.getFlattenedNodes()),a=D(()=>qt(s.value)),l=N(null);function g(){const{treeMate:d}=e;let y=null;const{value:H}=e;H===null?y=d.getFirstAvailableNode():(e.multiple?y=d.getNode((H||[])[(H||[]).length-1]):y=d.getNode(H),(!y||y.disabled)&&(y=d.getFirstAvailableNode())),Y(y||null)}function b(){const{value:d}=l;d&&!e.treeMate.getNode(d.key)&&(l.value=null)}let h;Fe(()=>e.show,d=>{d?h=Fe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():b(),cn(U)):b()},{immediate:!0}):h==null||h()},{immediate:!0}),wn(()=>{h==null||h()});const m=D(()=>It(t.value.self[q("optionHeight",e.size)])),S=D(()=>Ze(t.value.self[q("padding",e.size)])),x=D(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),c=D(()=>{const d=s.value;return d&&d.length===0});function P(d){const{onToggle:y}=e;y&&y(d)}function M(d){const{onScroll:y}=e;y&&y(d)}function k(d){var y;(y=i.value)===null||y===void 0||y.sync(),M(d)}function O(){var d;(d=i.value)===null||d===void 0||d.sync()}function R(){const{value:d}=l;return d||null}function p(d,y){y.disabled||Y(y,!1)}function C(d,y){y.disabled||P(y)}function T(d){var y;Ee(d,"action")||(y=e.onKeyup)===null||y===void 0||y.call(e,d)}function z(d){var y;Ee(d,"action")||(y=e.onKeydown)===null||y===void 0||y.call(e,d)}function K(d){var y;(y=e.onMousedown)===null||y===void 0||y.call(e,d),!e.focusable&&d.preventDefault()}function V(){const{value:d}=l;d&&Y(d.getNext({loop:!0}),!0)}function I(){const{value:d}=l;d&&Y(d.getPrev({loop:!0}),!0)}function Y(d,y=!1){l.value=d,y&&U()}function U(){var d,y;const H=l.value;if(!H)return;const re=a.value(H.key);re!==null&&(e.virtualScroll?(d=o.value)===null||d===void 0||d.scrollTo({index:re}):(y=i.value)===null||y===void 0||y.scrollTo({index:re,elSize:m.value}))}function te(d){var y,H;!((y=n.value)===null||y===void 0)&&y.contains(d.target)&&((H=e.onFocus)===null||H===void 0||H.call(e,d))}function he(d){var y,H;!((y=n.value)===null||y===void 0)&&y.contains(d.relatedTarget)||(H=e.onBlur)===null||H===void 0||H.call(e,d)}rn(dn,{handleOptionMouseEnter:p,handleOptionClick:C,valueSetRef:x,pendingTmNodeRef:l,nodePropsRef:Z(e,"nodeProps"),showCheckmarkRef:Z(e,"showCheckmark"),multipleRef:Z(e,"multiple"),valueRef:Z(e,"value"),renderLabelRef:Z(e,"renderLabel"),renderOptionRef:Z(e,"renderOption"),labelFieldRef:Z(e,"labelField"),valueFieldRef:Z(e,"valueField")}),rn(kt,n),De(()=>{const{value:d}=i;d&&d.sync()});const ce=D(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:y},self:{height:H,borderRadius:re,color:ve,groupHeaderTextColor:ye,actionDividerColor:Ce,optionTextColorPressed:ge,optionTextColor:de,optionTextColorDisabled:ae,optionTextColorActive:Q,optionOpacityDisabled:be,optionCheckColor:se,actionTextColor:Re,optionColorPending:we,optionColorActive:xe,loadingColor:Te,loadingSize:Me,optionColorActivePending:ze,[q("optionFontSize",d)]:Se,[q("optionHeight",d)]:Pe,[q("optionPadding",d)]:ne}}=t.value;return{"--n-height":H,"--n-action-divider-color":Ce,"--n-action-text-color":Re,"--n-bezier":y,"--n-border-radius":re,"--n-color":ve,"--n-option-font-size":Se,"--n-group-header-text-color":ye,"--n-option-check-color":se,"--n-option-color-pending":we,"--n-option-color-active":xe,"--n-option-color-active-pending":ze,"--n-option-height":Pe,"--n-option-opacity-disabled":be,"--n-option-text-color":de,"--n-option-text-color-active":Q,"--n-option-text-color-disabled":ae,"--n-option-text-color-pressed":ge,"--n-option-padding":ne,"--n-option-padding-left":Ze(ne,"left"),"--n-option-padding-right":Ze(ne,"right"),"--n-loading-color":Te,"--n-loading-size":Me}}),{inlineThemeDisabled:oe}=e,ee=oe?We("internal-select-menu",D(()=>e.size[0]),ce,e):void 0,ie={selfRef:n,next:V,prev:I,getPendingTmNode:R};return On(n,e.onResize),Object.assign({mergedTheme:t,virtualListRef:o,scrollbarRef:i,itemSize:m,padding:S,flattenedNodes:s,empty:c,virtualListContainer(){const{value:d}=o;return d==null?void 0:d.listElRef},virtualListContent(){const{value:d}=o;return d==null?void 0:d.itemsElRef},doScroll:M,handleFocusin:te,handleFocusout:he,handleKeyUp:T,handleKeyDown:z,handleMouseDown:K,handleVirtualListResize:O,handleVirtualListScroll:k,cssVars:oe?void 0:ce,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender},ie)},render(){const{$slots:e,virtualScroll:t,clsPrefix:n,mergedTheme:o,themeClass:i,onRender:s}=this;return s==null||s(),f("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,i,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?f("div",{class:`${n}-base-select-menu__loading`},f(nt,{clsPrefix:n,strokeWidth:20})):this.empty?f("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},Ct(e.empty,()=>[f(Tt,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):f(pt,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:t?this.virtualListContainer:void 0,content:t?this.virtualListContent:void 0,onScroll:t?void 0:this.doScroll},{default:()=>t?f(Rt,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?f(Cn,{key:a.key,clsPrefix:n,tmNode:a}):a.ignored?null:f(yn,{clsPrefix:n,key:a.key,tmNode:a})}):f("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?f(Cn,{key:a.key,clsPrefix:n,tmNode:a}):f(yn,{clsPrefix:n,key:a.key,tmNode:a})))}),ln(e.action,a=>a&&[f("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},a),f($t,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),fo=e=>{const{textColor2:t,primaryColorHover:n,primaryColorPressed:o,primaryColor:i,infoColor:s,successColor:a,warningColor:l,errorColor:g,baseColor:b,borderColor:h,opacityDisabled:m,tagColor:S,closeIconColor:x,closeIconColorHover:c,closeIconColorPressed:P,borderRadiusSmall:M,fontSizeMini:k,fontSizeTiny:O,fontSizeSmall:R,fontSizeMedium:p,heightMini:C,heightTiny:T,heightSmall:z,heightMedium:K,closeColorHover:V,closeColorPressed:I,buttonColor2Hover:Y,buttonColor2Pressed:U,fontWeightStrong:te}=e;return Object.assign(Object.assign({},ot),{closeBorderRadius:M,heightTiny:C,heightSmall:T,heightMedium:z,heightLarge:K,borderRadius:M,opacityDisabled:m,fontSizeTiny:k,fontSizeSmall:O,fontSizeMedium:R,fontSizeLarge:p,fontWeightStrong:te,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:b,colorCheckable:"#0000",colorHoverCheckable:Y,colorPressedCheckable:U,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:o,border:`1px solid ${h}`,textColor:t,color:S,colorBordered:"rgb(250, 250, 252)",closeIconColor:x,closeIconColorHover:c,closeIconColorPressed:P,closeColorHover:V,closeColorPressed:I,borderPrimary:`1px solid ${W(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:W(i,{alpha:.12}),colorBorderedPrimary:W(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:W(i,{alpha:.12}),closeColorPressedPrimary:W(i,{alpha:.18}),borderInfo:`1px solid ${W(s,{alpha:.3})}`,textColorInfo:s,colorInfo:W(s,{alpha:.12}),colorBorderedInfo:W(s,{alpha:.1}),closeIconColorInfo:s,closeIconColorHoverInfo:s,closeIconColorPressedInfo:s,closeColorHoverInfo:W(s,{alpha:.12}),closeColorPressedInfo:W(s,{alpha:.18}),borderSuccess:`1px solid ${W(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:W(a,{alpha:.12}),colorBorderedSuccess:W(a,{alpha:.1}),closeIconColorSuccess:a,closeIconColorHoverSuccess:a,closeIconColorPressedSuccess:a,closeColorHoverSuccess:W(a,{alpha:.12}),closeColorPressedSuccess:W(a,{alpha:.18}),borderWarning:`1px solid ${W(l,{alpha:.35})}`,textColorWarning:l,colorWarning:W(l,{alpha:.15}),colorBorderedWarning:W(l,{alpha:.12}),closeIconColorWarning:l,closeIconColorHoverWarning:l,closeIconColorPressedWarning:l,closeColorHoverWarning:W(l,{alpha:.12}),closeColorPressedWarning:W(l,{alpha:.18}),borderError:`1px solid ${W(g,{alpha:.23})}`,textColorError:g,colorError:W(g,{alpha:.1}),colorBorderedError:W(g,{alpha:.08}),closeIconColorError:g,closeIconColorHoverError:g,closeIconColorPressedError:g,closeColorHoverError:W(g,{alpha:.12}),closeColorPressedError:W(g,{alpha:.18})})},ho={name:"Tag",common:tt,self:fo},vo=ho,go={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},bo=$("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[G("strong",`
 font-weight: var(--n-font-weight-strong);
 `),L("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),L("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),L("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),L("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),G("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[L("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),L("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),G("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),G("icon, avatar",[G("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),G("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),G("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[ke("disabled",[X("&:hover","background-color: var(--n-color-hover-checkable);",[ke("checked","color: var(--n-text-color-hover-checkable);")]),X("&:active","background-color: var(--n-color-pressed-checkable);",[ke("checked","color: var(--n-text-color-pressed-checkable);")])]),G("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[ke("disabled",[X("&:hover","background-color: var(--n-color-checked-hover);"),X("&:active","background-color: var(--n-color-checked-pressed);")])])])]),po=Object.assign(Object.assign(Object.assign({},me.props),go),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),mo=it("n-tag"),tn=fe({name:"Tag",props:po,setup(e){const t=N(null),{mergedBorderedRef:n,mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:s}=Sn(e),a=me("Tag","-tag",bo,vo,e,o);rn(mo,{roundRef:Z(e,"round")});function l(x){if(!e.disabled&&e.checkable){const{checked:c,onCheckedChange:P,onUpdateChecked:M,"onUpdate:checked":k}=e;M&&M(!c),k&&k(!c),P&&P(!c)}}function g(x){if(e.triggerClickOnClose||x.stopPropagation(),!e.disabled){const{onClose:c}=e;c&&le(c,x)}}const b={setTextContent(x){const{value:c}=t;c&&(c.textContent=x)}},h=rt("Tag",s,o),m=D(()=>{const{type:x,size:c,color:{color:P,textColor:M}={}}=e,{common:{cubicBezierEaseInOut:k},self:{padding:O,closeMargin:R,closeMarginRtl:p,borderRadius:C,opacityDisabled:T,textColorCheckable:z,textColorHoverCheckable:K,textColorPressedCheckable:V,textColorChecked:I,colorCheckable:Y,colorHoverCheckable:U,colorPressedCheckable:te,colorChecked:he,colorCheckedHover:ce,colorCheckedPressed:oe,closeBorderRadius:ee,fontWeightStrong:ie,[q("colorBordered",x)]:d,[q("closeSize",c)]:y,[q("closeIconSize",c)]:H,[q("fontSize",c)]:re,[q("height",c)]:ve,[q("color",x)]:ye,[q("textColor",x)]:Ce,[q("border",x)]:ge,[q("closeIconColor",x)]:de,[q("closeIconColorHover",x)]:ae,[q("closeIconColorPressed",x)]:Q,[q("closeColorHover",x)]:be,[q("closeColorPressed",x)]:se}}=a.value;return{"--n-font-weight-strong":ie,"--n-avatar-size-override":`calc(${ve} - 8px)`,"--n-bezier":k,"--n-border-radius":C,"--n-border":ge,"--n-close-icon-size":H,"--n-close-color-pressed":se,"--n-close-color-hover":be,"--n-close-border-radius":ee,"--n-close-icon-color":de,"--n-close-icon-color-hover":ae,"--n-close-icon-color-pressed":Q,"--n-close-icon-color-disabled":de,"--n-close-margin":R,"--n-close-margin-rtl":p,"--n-close-size":y,"--n-color":P||(n.value?d:ye),"--n-color-checkable":Y,"--n-color-checked":he,"--n-color-checked-hover":ce,"--n-color-checked-pressed":oe,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":te,"--n-font-size":re,"--n-height":ve,"--n-opacity-disabled":T,"--n-padding":O,"--n-text-color":M||Ce,"--n-text-color-checkable":z,"--n-text-color-checked":I,"--n-text-color-hover-checkable":K,"--n-text-color-pressed-checkable":V}}),S=i?We("tag",D(()=>{let x="";const{type:c,size:P,color:{color:M,textColor:k}={}}=e;return x+=c[0],x+=P[0],M&&(x+=`a${hn(M)}`),k&&(x+=`b${hn(k)}`),n.value&&(x+="c"),x}),m,e):void 0;return Object.assign(Object.assign({},b),{rtlEnabled:h,mergedClsPrefix:o,contentRef:t,mergedBordered:n,handleClick:l,handleCloseClick:g,cssVars:i?void 0:m,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender})},render(){var e,t;const{mergedClsPrefix:n,rtlEnabled:o,closable:i,color:{borderColor:s}={},round:a,onRender:l,$slots:g}=this;l==null||l();const b=ln(g.avatar,m=>m&&f("div",{class:`${n}-tag__avatar`},m)),h=ln(g.icon,m=>m&&f("div",{class:`${n}-tag__icon`},m));return f("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:o,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:a,[`${n}-tag--avatar`]:b,[`${n}-tag--icon`]:h,[`${n}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||b,f("span",{class:`${n}-tag__content`,ref:"contentRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)),!this.checkable&&i?f(lt,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?f("div",{class:`${n}-tag__border`,style:{borderColor:s}}):null)}}),yo=X([$("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[$("base-loading",`
 color: var(--n-loading-color);
 `),$("base-selection-tags","min-height: var(--n-height);"),L("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),L("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[L("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[L("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[L("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),$("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),$("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[$("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[L("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),L("render-label",`
 color: var(--n-text-color);
 `)]),ke("disabled",[X("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),G("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),G("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),G("disabled","cursor: not-allowed;",[L("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),L("render-label",`
 color: var(--n-text-color-disabled);
 `)]),$("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[L("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),L("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>G(`${e}-status`,[L("state-border",`border: var(--n-border-${e});`),ke("disabled",[X("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),G("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),G("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[X("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[L("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Co=fe({name:"InternalSelection",props:Object.assign(Object.assign({},me.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const t=N(null),n=N(null),o=N(null),i=N(null),s=N(null),a=N(null),l=N(null),g=N(null),b=N(null),h=N(null),m=N(!1),S=N(!1),x=N(!1),c=me("InternalSelection","-internal-selection",yo,at,e,Z(e,"clsPrefix")),P=D(()=>e.clearable&&!e.disabled&&(x.value||e.active)),M=D(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),k=D(()=>{const u=e.selectedOption;if(!!u)return u[e.labelField]}),O=D(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function R(){var u;const{value:w}=t;if(w){const{value:j}=n;j&&(j.style.width=`${w.offsetWidth}px`,e.maxTagCount!=="responsive"&&((u=b.value)===null||u===void 0||u.sync()))}}function p(){const{value:u}=h;u&&(u.style.display="none")}function C(){const{value:u}=h;u&&(u.style.display="inline-block")}Fe(Z(e,"active"),u=>{u||p()}),Fe(Z(e,"pattern"),()=>{e.multiple&&cn(R)});function T(u){const{onFocus:w}=e;w&&w(u)}function z(u){const{onBlur:w}=e;w&&w(u)}function K(u){const{onDeleteOption:w}=e;w&&w(u)}function V(u){const{onClear:w}=e;w&&w(u)}function I(u){const{onPatternInput:w}=e;w&&w(u)}function Y(u){var w;(!u.relatedTarget||!(!((w=o.value)===null||w===void 0)&&w.contains(u.relatedTarget)))&&T(u)}function U(u){var w;!((w=o.value)===null||w===void 0)&&w.contains(u.relatedTarget)||z(u)}function te(u){V(u)}function he(){x.value=!0}function ce(){x.value=!1}function oe(u){!e.active||!e.filterable||u.target!==n.value&&u.preventDefault()}function ee(u){K(u)}function ie(u){if(u.key==="Backspace"&&!d.value&&!e.pattern.length){const{selectedOptions:w}=e;w!=null&&w.length&&ee(w[w.length-1])}}const d=N(!1);let y=null;function H(u){const{value:w}=t;if(w){const j=u.target.value;w.textContent=j,R()}e.ignoreComposition&&d.value?y=u:I(u)}function re(){d.value=!0}function ve(){d.value=!1,e.ignoreComposition&&I(y),y=null}function ye(u){var w;S.value=!0,(w=e.onPatternFocus)===null||w===void 0||w.call(e,u)}function Ce(u){var w;S.value=!1,(w=e.onPatternBlur)===null||w===void 0||w.call(e,u)}function ge(){var u,w;if(e.filterable)S.value=!1,(u=a.value)===null||u===void 0||u.blur(),(w=n.value)===null||w===void 0||w.blur();else if(e.multiple){const{value:j}=i;j==null||j.blur()}else{const{value:j}=s;j==null||j.blur()}}function de(){var u,w,j;e.filterable?(S.value=!1,(u=a.value)===null||u===void 0||u.focus()):e.multiple?(w=i.value)===null||w===void 0||w.focus():(j=s.value)===null||j===void 0||j.focus()}function ae(){const{value:u}=n;u&&(C(),u.focus())}function Q(){const{value:u}=n;u&&u.blur()}function be(u){const{value:w}=l;w&&w.setTextContent(`+${u}`)}function se(){const{value:u}=g;return u}function Re(){return n.value}let we=null;function xe(){we!==null&&window.clearTimeout(we)}function Te(){e.disabled||e.active||(xe(),we=window.setTimeout(()=>{O.value&&(m.value=!0)},100))}function Me(){xe()}function ze(u){u||(xe(),m.value=!1)}Fe(O,u=>{u||(m.value=!1)}),De(()=>{st(()=>{const u=a.value;!u||(u.tabIndex=e.disabled||S.value?-1:0)})}),On(o,e.onResize);const{inlineThemeDisabled:Se}=e,Pe=D(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:w},self:{borderRadius:j,color:Ie,placeholderColor:Ve,textColor:He,paddingSingle:je,paddingMultiple:Ue,caretColor:Be,colorDisabled:_e,textColorDisabled:Ae,placeholderColorDisabled:Ge,colorActive:qe,boxShadowFocus:$e,boxShadowActive:pe,boxShadowHover:r,border:v,borderFocus:F,borderHover:E,borderActive:B,arrowColor:A,arrowColorDisabled:_,loadingColor:J,colorActiveWarning:Ne,boxShadowFocusWarning:Ye,boxShadowActiveWarning:Mn,boxShadowHoverWarning:zn,borderWarning:In,borderFocusWarning:Bn,borderHoverWarning:_n,borderActiveWarning:An,colorActiveError:$n,boxShadowFocusError:Nn,boxShadowActiveError:En,boxShadowHoverError:Ln,borderError:Kn,borderFocusError:Dn,borderHoverError:Wn,borderActiveError:Vn,clearColor:Hn,clearColorHover:jn,clearColorPressed:Un,clearSize:Gn,arrowSize:qn,[q("height",u)]:Yn,[q("fontSize",u)]:Jn}}=c.value;return{"--n-bezier":w,"--n-border":v,"--n-border-active":B,"--n-border-focus":F,"--n-border-hover":E,"--n-border-radius":j,"--n-box-shadow-active":pe,"--n-box-shadow-focus":$e,"--n-box-shadow-hover":r,"--n-caret-color":Be,"--n-color":Ie,"--n-color-active":qe,"--n-color-disabled":_e,"--n-font-size":Jn,"--n-height":Yn,"--n-padding-single":je,"--n-padding-multiple":Ue,"--n-placeholder-color":Ve,"--n-placeholder-color-disabled":Ge,"--n-text-color":He,"--n-text-color-disabled":Ae,"--n-arrow-color":A,"--n-arrow-color-disabled":_,"--n-loading-color":J,"--n-color-active-warning":Ne,"--n-box-shadow-focus-warning":Ye,"--n-box-shadow-active-warning":Mn,"--n-box-shadow-hover-warning":zn,"--n-border-warning":In,"--n-border-focus-warning":Bn,"--n-border-hover-warning":_n,"--n-border-active-warning":An,"--n-color-active-error":$n,"--n-box-shadow-focus-error":Nn,"--n-box-shadow-active-error":En,"--n-box-shadow-hover-error":Ln,"--n-border-error":Kn,"--n-border-focus-error":Dn,"--n-border-hover-error":Wn,"--n-border-active-error":Vn,"--n-clear-size":Gn,"--n-clear-color":Hn,"--n-clear-color-hover":jn,"--n-clear-color-pressed":Un,"--n-arrow-size":qn}}),ne=Se?We("internal-selection",D(()=>e.size[0]),Pe,e):void 0;return{mergedTheme:c,mergedClearable:P,patternInputFocused:S,filterablePlaceholder:M,label:k,selected:O,showTagsPanel:m,isComposing:d,counterRef:l,counterWrapperRef:g,patternInputMirrorRef:t,patternInputRef:n,selfRef:o,multipleElRef:i,singleElRef:s,patternInputWrapperRef:a,overflowRef:b,inputTagElRef:h,handleMouseDown:oe,handleFocusin:Y,handleClear:te,handleMouseEnter:he,handleMouseLeave:ce,handleDeleteOption:ee,handlePatternKeyDown:ie,handlePatternInputInput:H,handlePatternInputBlur:Ce,handlePatternInputFocus:ye,handleMouseEnterCounter:Te,handleMouseLeaveCounter:Me,handleFocusout:U,handleCompositionEnd:ve,handleCompositionStart:re,onPopoverUpdateShow:ze,focus:de,focusInput:ae,blur:ge,blurInput:Q,updateCounter:be,getCounter:se,getTail:Re,renderLabel:e.renderLabel,cssVars:Se?void 0:Pe,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender}},render(){const{status:e,multiple:t,size:n,disabled:o,filterable:i,maxTagCount:s,bordered:a,clsPrefix:l,onRender:g,renderTag:b,renderLabel:h}=this;g==null||g();const m=s==="responsive",S=typeof s=="number",x=m||S,c=f(mt,null,{default:()=>f(zt,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var M,k;return(k=(M=this.$slots).arrow)===null||k===void 0?void 0:k.call(M)}})});let P;if(t){const{labelField:M}=this,k=U=>f("div",{class:`${l}-base-selection-tag-wrapper`,key:U.value},b?b({option:U,handleClose:()=>this.handleDeleteOption(U)}):f(tn,{size:n,closable:!U.disabled,disabled:o,onClose:()=>this.handleDeleteOption(U),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(U,!0):Oe(U[M],U,!0)})),O=(S?this.selectedOptions.slice(0,s):this.selectedOptions).map(k),R=i?f("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),f("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,p=m?()=>f("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},f(tn,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let C;if(S){const U=this.selectedOptions.length-s;U>0&&(C=f("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},f(tn,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${U}`})))}const T=m?i?f(bn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>O,counter:p,tail:()=>R}):f(bn,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>O,counter:p}):S?O.concat(C):O,z=x?()=>f("div",{class:`${l}-base-selection-popover`},m?O:this.selectedOptions.map(k)):void 0,K=x?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,I=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},f("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,Y=i?f("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},T,m?null:R,c):f("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:o?void 0:0},T,c);P=f(ct,null,x?f(St,Object.assign({},K,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Y,default:z}):Y,I)}else if(i){const M=this.pattern||this.isComposing,k=this.active?!M:!this.selected,O=this.active?!1:this.selected;P=f("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`},f("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),O?f("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},f("div",{class:`${l}-base-selection-overlay__wrapper`},b?b({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,k?f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,c)}else P=f("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?f("div",{class:`${l}-base-selection-input`,title:Mt(this.label),key:"input"},f("div",{class:`${l}-base-selection-input__content`},b?b({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):f("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},f("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),c);return f("div",{ref:"selfRef",class:[`${l}-base-selection`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},P,a?f("div",{class:`${l}-base-selection__border`}):null,a?f("div",{class:`${l}-base-selection__state-border`}):null)}});function Ke(e){return e.type==="group"}function Tn(e){return e.type==="ignored"}function on(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function wo(e,t){return{getIsGroup:Ke,getIgnored:Tn,getKey(o){return Ke(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[t]}}}function xo(e,t,n,o){if(!t)return e;function i(s){if(!Array.isArray(s))return[];const a=[];for(const l of s)if(Ke(l)){const g=i(l[o]);g.length&&a.push(Object.assign({},l,{[o]:g}))}else{if(Tn(l))continue;t(n,l)&&a.push(l)}return a}return i(e)}function ko(e,t,n){const o=new Map;return e.forEach(i=>{Ke(i)?i[n].forEach(s=>{o.set(s[t],s)}):o.set(i[t],i)}),o}const So=X([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Pn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Po=Object.assign(Object.assign({},me.props),{to:an.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Wo=fe({name:"Select",props:Po,setup(e){const{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:o,inlineThemeDisabled:i}=Sn(e),s=me("Select","-select",So,ht,e,t),a=N(e.defaultValue),l=Z(e,"value"),g=fn(l,a),b=N(!1),h=N(""),m=D(()=>{const{valueField:r,childrenField:v}=e,F=wo(r,v);return ao(U.value,F)}),S=D(()=>ko(I.value,e.valueField,e.childrenField)),x=N(!1),c=fn(Z(e,"show"),x),P=N(null),M=N(null),k=N(null),{localeRef:O}=vt("Select"),R=D(()=>{var r;return(r=e.placeholder)!==null&&r!==void 0?r:O.value.placeholder}),p=gt(e,["items","options"]),C=[],T=N([]),z=N([]),K=N(new Map),V=D(()=>{const{fallbackOption:r}=e;if(r===void 0){const{labelField:v,valueField:F}=e;return E=>({[v]:String(E),[F]:E})}return r===!1?!1:v=>Object.assign(r(v),{value:v})}),I=D(()=>z.value.concat(T.value).concat(p.value)),Y=D(()=>{const{filter:r}=e;if(r)return r;const{labelField:v,valueField:F}=e;return(E,B)=>{if(!B)return!1;const A=B[v];if(typeof A=="string")return on(E,A);const _=B[F];return typeof _=="string"?on(E,_):typeof _=="number"?on(E,String(_)):!1}}),U=D(()=>{if(e.remote)return p.value;{const{value:r}=I,{value:v}=h;return!v.length||!e.filterable?r:xo(r,Y.value,v,e.childrenField)}});function te(r){const v=e.remote,{value:F}=K,{value:E}=S,{value:B}=V,A=[];return r.forEach(_=>{if(E.has(_))A.push(E.get(_));else if(v&&F.has(_))A.push(F.get(_));else if(B){const J=B(_);J&&A.push(J)}}),A}const he=D(()=>{if(e.multiple){const{value:r}=g;return Array.isArray(r)?te(r):[]}return null}),ce=D(()=>{const{value:r}=g;return!e.multiple&&!Array.isArray(r)?r===null?null:te([r])[0]||null:null}),oe=bt(e),{mergedSizeRef:ee,mergedDisabledRef:ie,mergedStatusRef:d}=oe;function y(r,v){const{onChange:F,"onUpdate:value":E,onUpdateValue:B}=e,{nTriggerFormChange:A,nTriggerFormInput:_}=oe;F&&le(F,r,v),B&&le(B,r,v),E&&le(E,r,v),a.value=r,A(),_()}function H(r){const{onBlur:v}=e,{nTriggerFormBlur:F}=oe;v&&le(v,r),F()}function re(){const{onClear:r}=e;r&&le(r)}function ve(r){const{onFocus:v}=e,{nTriggerFormFocus:F}=oe;v&&le(v,r),F()}function ye(r){const{onSearch:v}=e;v&&le(v,r)}function Ce(r){const{onScroll:v}=e;v&&le(v,r)}function ge(){var r;const{remote:v,multiple:F}=e;if(v){const{value:E}=K;if(F){const{valueField:B}=e;(r=he.value)===null||r===void 0||r.forEach(A=>{E.set(A[B],A)})}else{const B=ce.value;B&&E.set(B[e.valueField],B)}}}function de(r){const{onUpdateShow:v,"onUpdate:show":F}=e;v&&le(v,r),F&&le(F,r),x.value=r}function ae(){ie.value||(de(!0),x.value=!0,e.filterable&&Ae())}function Q(){de(!1)}function be(){h.value="",z.value=C}const se=N(!1);function Re(){e.filterable&&(se.value=!0)}function we(){e.filterable&&(se.value=!1,c.value||be())}function xe(){ie.value||(c.value?e.filterable?Ae():Q():ae())}function Te(r){var v,F;!((F=(v=k.value)===null||v===void 0?void 0:v.selfRef)===null||F===void 0)&&F.contains(r.relatedTarget)||(b.value=!1,H(r),Q())}function Me(r){ve(r),b.value=!0}function ze(r){b.value=!0}function Se(r){var v;!((v=P.value)===null||v===void 0)&&v.$el.contains(r.relatedTarget)||(b.value=!1,H(r),Q())}function Pe(){var r;(r=P.value)===null||r===void 0||r.focus(),Q()}function ne(r){var v;c.value&&(!((v=P.value)===null||v===void 0)&&v.$el.contains(yt(r))||Q())}function u(r){if(!Array.isArray(r))return[];if(V.value)return Array.from(r);{const{remote:v}=e,{value:F}=S;if(v){const{value:E}=K;return r.filter(B=>F.has(B)||E.has(B))}else return r.filter(E=>F.has(E))}}function w(r){j(r.rawNode)}function j(r){if(ie.value)return;const{tag:v,remote:F,clearFilterAfterSelect:E,valueField:B}=e;if(v&&!F){const{value:A}=z,_=A[0]||null;if(_){const J=T.value;J.length?J.push(_):T.value=[_],z.value=C}}if(F&&K.value.set(r[B],r),e.multiple){const A=u(g.value),_=A.findIndex(J=>J===r[B]);if(~_){if(A.splice(_,1),v&&!F){const J=Ie(r[B]);~J&&(T.value.splice(J,1),E&&(h.value=""))}}else A.push(r[B]),E&&(h.value="");y(A,te(A))}else{if(v&&!F){const A=Ie(r[B]);~A?T.value=[T.value[A]]:T.value=C}_e(),Q(),y(r[B],r)}}function Ie(r){return T.value.findIndex(F=>F[e.valueField]===r)}function Ve(r){c.value||ae();const{value:v}=r.target;h.value=v;const{tag:F,remote:E}=e;if(ye(v),F&&!E){if(!v){z.value=C;return}const{onCreate:B}=e,A=B?B(v):{[e.labelField]:v,[e.valueField]:v},{valueField:_}=e;p.value.some(J=>J[_]===A[_])||T.value.some(J=>J[_]===A[_])?z.value=C:z.value=[A]}}function He(r){r.stopPropagation();const{multiple:v}=e;!v&&e.filterable&&Q(),re(),v?y([],[]):y(null,null)}function je(r){!Ee(r,"action")&&!Ee(r,"empty")&&r.preventDefault()}function Ue(r){Ce(r)}function Be(r){var v,F,E,B,A;switch(r.key){case" ":if(e.filterable)break;r.preventDefault();case"Enter":if(!(!((v=P.value)===null||v===void 0)&&v.isComposing)){if(c.value){const _=(F=k.value)===null||F===void 0?void 0:F.getPendingTmNode();_?w(_):e.filterable||(Q(),_e())}else if(ae(),e.tag&&se.value){const _=z.value[0];if(_){const J=_[e.valueField],{value:Ne}=g;e.multiple&&Array.isArray(Ne)&&Ne.some(Ye=>Ye===J)||j(_)}}}r.preventDefault();break;case"ArrowUp":if(r.preventDefault(),e.loading)return;c.value&&((E=k.value)===null||E===void 0||E.prev());break;case"ArrowDown":if(r.preventDefault(),e.loading)return;c.value?(B=k.value)===null||B===void 0||B.next():ae();break;case"Escape":c.value&&(Bt(r),Q()),(A=P.value)===null||A===void 0||A.focus();break}}function _e(){var r;(r=P.value)===null||r===void 0||r.focus()}function Ae(){var r;(r=P.value)===null||r===void 0||r.focusInput()}function Ge(){var r;!c.value||(r=M.value)===null||r===void 0||r.syncPosition()}ge(),Fe(Z(e,"options"),ge);const qe={focus:()=>{var r;(r=P.value)===null||r===void 0||r.focus()},blur:()=>{var r;(r=P.value)===null||r===void 0||r.blur()}},$e=D(()=>{const{self:{menuBoxShadow:r}}=s.value;return{"--n-menu-box-shadow":r}}),pe=i?We("select",void 0,$e,e):void 0;return Object.assign(Object.assign({},qe),{mergedStatus:d,mergedClsPrefix:t,mergedBordered:n,namespace:o,treeMate:m,isMounted:dt(),triggerRef:P,menuRef:k,pattern:h,uncontrolledShow:x,mergedShow:c,adjustedTo:an(e),uncontrolledValue:a,mergedValue:g,followerRef:M,localizedPlaceholder:R,selectedOption:ce,selectedOptions:he,mergedSize:ee,mergedDisabled:ie,focused:b,activeWithoutMenuOpen:se,inlineThemeDisabled:i,onTriggerInputFocus:Re,onTriggerInputBlur:we,handleTriggerOrMenuResize:Ge,handleMenuFocus:ze,handleMenuBlur:Se,handleMenuTabOut:Pe,handleTriggerClick:xe,handleToggle:w,handleDeleteOption:j,handlePatternInput:Ve,handleClear:He,handleTriggerBlur:Te,handleTriggerFocus:Me,handleKeydown:Be,handleMenuAfterLeave:be,handleMenuClickOutside:ne,handleMenuScroll:Ue,handleMenuKeydown:Be,handleMenuMousedown:je,mergedTheme:s,cssVars:i?void 0:$e,themeClass:pe==null?void 0:pe.themeClass,onRender:pe==null?void 0:pe.onRender})},render(){return f("div",{class:`${this.mergedClsPrefix}-select`},f(Pt,null,{default:()=>[f(Ot,null,{default:()=>f(Co,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,t;return[(t=(e=this.$slots).arrow)===null||t===void 0?void 0:t.call(e)]}})}),f(Ft,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===an.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>f(kn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,t,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),ut(f(uo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(t=this.menuProps)===null||t===void 0?void 0:t.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[ft,this.mergedShow],[gn,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[gn,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{$t as F,Wo as N,Yt as S,uo as a,wo as b,ao as c,tn as d,At as e,Co as f,lo as g,Ee as h,qt as i,Qe as m,On as u};
