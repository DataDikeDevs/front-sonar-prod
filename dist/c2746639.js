import{P as y,S as z,T as L,e as p,U as k,V as E,W as q,r as w,ai as D,M as c,O as v,aj as O,ak as h,al as m,am as P,an as _,ao as T,af as B}from"./7e207d24.js";const C=["ul","ol"];var R=y({name:"QList",props:{...z,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:r}){const t=q(),n=L(e,t.proxy.$q),i=p(()=>C.includes(e.tag)?null:"list"),a=p(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>k(e.tag,{class:a.value,role:i.value},E(r.default))}});function H(){const e=w(!D.value);return e.value===!1&&c(()=>{e.value=!0}),{isHydrated:e}}const x=typeof ResizeObserver<"u",b=x===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var S=y({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let t=null,n,i={width:-1,height:-1};function a(o){o===!0||e.debounce===0||e.debounce==="0"?l():t===null&&(t=setTimeout(l,e.debounce))}function l(){if(t!==null&&(clearTimeout(t),t=null),n){const{offsetWidth:o,offsetHeight:s}=n;(o!==i.width||s!==i.height)&&(i={width:o,height:s},r("resize",i))}}const{proxy:d}=q();if(d.trigger=a,x===!0){let o;const s=u=>{n=d.$el.parentNode,n?(o=new ResizeObserver(a),o.observe(n),l()):u!==!0&&h(()=>{s(!0)})};return c(()=>{s()}),v(()=>{t!==null&&clearTimeout(t),o!==void 0&&(o.disconnect!==void 0?o.disconnect():n&&o.unobserve(n))}),O}else{let u=function(){t!==null&&(clearTimeout(t),t=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",a,m.passive),s=void 0)},f=function(){u(),n&&n.contentDocument&&(s=n.contentDocument.defaultView,s.addEventListener("resize",a,m.passive),l())};const{isHydrated:o}=H();let s;return c(()=>{h(()=>{n=d.$el,n&&f()})}),v(u),()=>{if(o.value===!0)return k("object",{class:"q--avoid-card-border",style:b.style,tabindex:-1,type:"text/html",data:b.url,"aria-hidden":"true",onLoad:f})}}}});function g(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const r=parseInt(e,10);return isNaN(r)?0:r}var K=P({name:"close-popup",beforeMount(e,{value:r}){const t={depth:g(r),handler(n){t.depth!==0&&setTimeout(()=>{const i=_(e);i!==void 0&&T(i,n,t.depth)})},handlerKey(n){B(n,13)===!0&&t.handler(n)}};e.__qclosepopup=t,e.addEventListener("click",t.handler),e.addEventListener("keyup",t.handlerKey)},updated(e,{value:r,oldValue:t}){r!==t&&(e.__qclosepopup.depth=g(r))},beforeUnmount(e){const r=e.__qclosepopup;e.removeEventListener("click",r.handler),e.removeEventListener("keyup",r.handlerKey),delete e.__qclosepopup}});export{K as C,R as Q,S as a};
