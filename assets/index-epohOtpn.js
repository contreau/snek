var ze=Object.defineProperty;var Be=(n,t,e)=>t in n?ze(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var ke=(n,t,e)=>(Be(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(l){if(l.ep)return;l.ep=!0;const s=e(l);fetch(l.href,s)}})();function V(){}function Ve(n){return n()}function Ee(){return Object.create(null)}function F(n){n.forEach(Ve)}function We(n){return typeof n=="function"}function he(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function Ge(n){return Object.keys(n).length===0}function Fe(n,...t){if(n==null){for(const o of t)o(void 0);return V}const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function U(n,t,e){n.$$.on_destroy.push(Fe(t,e))}function Y(n,t,e){return n.set(e),t}function u(n,t){n.appendChild(t)}function O(n,t,e){n.insertBefore(t,e||null)}function A(n){n.parentNode&&n.parentNode.removeChild(n)}function pe(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function p(n){return document.createElement(n)}function z(n){return document.createTextNode(n)}function x(){return z(" ")}function de(){return z("")}function X(n,t,e,o){return n.addEventListener(t,e,o),()=>n.removeEventListener(t,e,o)}function S(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function Je(n){return Array.from(n.childNodes)}function Z(n,t){t=""+t,n.data!==t&&(n.data=t)}function B(n,t,e,o){e==null?n.style.removeProperty(t):n.style.setProperty(t,e,o?"important":"")}let Ce;function ce(n){Ce=n}const te=[],Me=[];let ne=[];const Pe=[],Qe=Promise.resolve();let Se=!1;function Xe(){Se||(Se=!0,Qe.then(Ye))}function Ae(n){ne.push(n)}const ye=new Set;let $=0;function Ye(){if($!==0)return;const n=Ce;do{try{for(;$<te.length;){const t=te[$];$++,ce(t),Ze(t.$$)}}catch(t){throw te.length=0,$=0,t}for(ce(null),te.length=0,$=0;Me.length;)Me.pop()();for(let t=0;t<ne.length;t+=1){const e=ne[t];ye.has(e)||(ye.add(e),e())}ne.length=0}while(te.length);for(;Pe.length;)Pe.pop()();Se=!1,ye.clear(),ce(n)}function Ze(n){if(n.fragment!==null){n.update(),F(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Ae)}}function $e(n){const t=[],e=[];ne.forEach(o=>n.indexOf(o)===-1?t.push(o):e.push(o)),e.forEach(o=>o()),ne=t}const ae=new Set;let Q;function et(){Q={r:0,c:[],p:Q}}function tt(){Q.r||F(Q.c),Q=Q.p}function re(n,t){n&&n.i&&(ae.delete(n),n.i(t))}function fe(n,t,e,o){if(n&&n.o){if(ae.has(n))return;ae.add(n),Q.c.push(()=>{ae.delete(n),o&&(e&&n.d(1),o())}),n.o(t)}else o&&o()}function G(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function xe(n){n&&n.c()}function me(n,t,e){const{fragment:o,after_update:l}=n.$$;o&&o.m(t,e),Ae(()=>{const s=n.$$.on_mount.map(Ve).filter(We);n.$$.on_destroy?n.$$.on_destroy.push(...s):F(s),n.$$.on_mount=[]}),l.forEach(Ae)}function _e(n,t){const e=n.$$;e.fragment!==null&&($e(e.after_update),F(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function nt(n,t){n.$$.dirty[0]===-1&&(te.push(n),Xe(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function ge(n,t,e,o,l,s,r=null,c=[-1]){const m=Ce;ce(n);const i=n.$$={fragment:null,ctx:[],props:s,update:V,not_equal:l,bound:Ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(m?m.$$.context:[])),callbacks:Ee(),dirty:c,skip_bound:!1,root:t.target||m.$$.root};r&&r(i.root);let b=!1;if(i.ctx=e?e(n,t.props||{},(a,g,...R)=>{const C=R.length?R[0]:g;return i.ctx&&l(i.ctx[a],i.ctx[a]=C)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](C),b&&nt(n,a)),g}):[],i.update(),b=!0,F(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const a=Je(t.target);i.fragment&&i.fragment.l(a),a.forEach(A)}else i.fragment&&i.fragment.c();t.intro&&re(n.$$.fragment),me(n,t.target,t.anchor),Ye()}ce(m)}class be{constructor(){ke(this,"$$");ke(this,"$$set")}$destroy(){_e(this,1),this.$destroy=V}$on(t,e){if(!We(e))return V;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const l=o.indexOf(e);l!==-1&&o.splice(l,1)}}$set(t){this.$$set&&!Ge(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(rt);const ee=[];function J(n,t=V){let e;const o=new Set;function l(c){if(he(n,c)&&(n=c,e)){const m=!ee.length;for(const i of o)i[1](),ee.push(i,n);if(m){for(let i=0;i<ee.length;i+=2)ee[i][0](ee[i+1]);ee.length=0}}}function s(c){l(c(n))}function r(c,m=V){const i=[c,m];return o.add(i),o.size===1&&(e=t(l,s)||V),c(n),()=>{o.delete(i),o.size===0&&e&&(e(),e=null)}}return{set:l,update:s,subscribe:r}}const je=J(0),Oe=J(0),le=J(0),se=J(0),Le=J(0),ue=J(!1),ie=J(!1),ot=J(!1),ct="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='65'%20height='65'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23ffce10'%20d='M7%2021v-2h4v-3.1q-1.225-.275-2.187-1.037T7.4%2012.95q-1.875-.225-3.137-1.637T3%208V5h4V3h10v2h4v3q0%201.9-1.263%203.313T16.6%2012.95q-.45%201.15-1.412%201.913T13%2015.9V19h4v2zm0-10.2V7H5v1q0%20.95.55%201.713T7%2010.8m10%200q.9-.325%201.45-1.088T19%208V7h-2z'/%3e%3c/svg%3e";function lt(n){let t,e,o,l,s,r,c,m,i,b,a,g,R,C,k,_,M,q,v,H,D,K,P,N,T,w,f,h,y,W,I,L;return{c(){t=p("section"),e=p("div"),o=p("ul"),o.innerHTML=`<li class="mode-name svelte-ctjxk5">game mode</li> <li class="description-text svelte-ctjxk5"> </li> <li style="max-height: 46px;"><img src="${ct}" alt="trophy" height="46" width="46"/></li>`,l=x(),s=p("ul"),r=p("li"),c=p("button"),c.textContent="classic",m=x(),i=p("li"),i.textContent="the snek you know and love.",b=x(),a=p("li"),g=z(n[2]),R=x(),C=p("ul"),k=p("li"),_=p("button"),_.textContent="speedy",M=x(),q=p("li"),q.textContent="movement speed jumps with each bite.",v=x(),H=p("li"),D=z(n[4]),K=x(),P=p("ul"),N=p("li"),T=p("button"),T.textContent="time crunch",w=x(),f=p("li"),h=z(n[0]),y=x(),W=p("li"),W.textContent="0",S(o,"class","heading-row svelte-ctjxk5"),B(c,"color","var(--classic-mode)"),S(r,"class","mode-name svelte-ctjxk5"),S(i,"class","description-text svelte-ctjxk5"),S(a,"class","score svelte-ctjxk5"),S(s,"class","classic-row svelte-ctjxk5"),B(_,"color","var(--speed-mode)"),S(k,"class","mode-name svelte-ctjxk5"),S(q,"class","description-text svelte-ctjxk5"),S(H,"class","score svelte-ctjxk5"),S(C,"class","speed-row svelte-ctjxk5"),B(T,"color","var(--timed-mode)"),S(N,"class","mode-name svelte-ctjxk5"),S(f,"class","description-text svelte-ctjxk5"),S(W,"class","score svelte-ctjxk5"),S(P,"class","time-row svelte-ctjxk5"),S(e,"class","selections svelte-ctjxk5"),S(t,"class","menu-container svelte-ctjxk5")},m(d,E){O(d,t,E),u(t,e),u(e,o),u(e,l),u(e,s),u(s,r),u(r,c),u(s,m),u(s,i),u(s,b),u(s,a),u(a,g),u(e,R),u(e,C),u(C,k),u(k,_),u(C,M),u(C,q),u(C,v),u(C,H),u(H,D),u(e,K),u(e,P),u(P,N),u(N,T),u(P,w),u(P,f),u(f,h),u(P,y),u(P,W),I||(L=[X(c,"click",n[6]),X(_,"click",n[7]),X(T,"click",n[5])],I=!0)},p(d,[E]){E&4&&Z(g,d[2]),E&16&&Z(D,d[4]),E&1&&Z(h,d[0])},i:V,o:V,d(d){d&&A(t),I=!1,F(L)}}}function st(n,t,e){let o,l,s,r;U(n,ue,a=>e(1,o=a)),U(n,je,a=>e(2,l=a)),U(n,ie,a=>e(3,s=a)),U(n,Oe,a=>e(4,r=a));let c="grab food in time or shed your skin.";function m(){e(0,c="under construction!"),setTimeout(()=>{e(0,c="grab food in time or shed your skin.")},1500)}return[c,o,l,s,r,m,()=>Y(ue,o=!0,o),()=>Y(ie,s=!0,s)]}class ft extends be{constructor(t){super(),ge(this,t,st,lt,he,{})}}function Re(n,t,e){const o=n.slice();return o[23]=t[e],o[25]=e,o}function qe(n,t,e){const o=n.slice();return o[23]=t[e],o[27]=e,o}function ut(n){let t;return{c(){t=p("div"),S(t,"class","grid-square")},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function it(n){let t;return{c(){t=p("div"),S(t,"class","grid-square foodSquare svelte-13qvcsj")},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function ht(n){let t;return{c(){t=p("div"),S(t,"class","grid-square activeSquare")},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function Te(n){let t,e;function o(...c){return n[14](n[27],n[25],...c)}function l(c,m){return m&1&&(t=null),t==null&&(t=!!Object.values(c[0]).some(o)),t?ht:c[27]===c[2]&&c[25]===c[1]?it:ut}let s=l(n,-1),r=s(n);return{c(){r.c(),e=de()},m(c,m){r.m(c,m),O(c,e,m)},p(c,m){n=c,s!==(s=l(n,m))&&(r.d(1),r=s(n),r&&(r.c(),r.m(e.parentNode,e)))},d(c){c&&A(e),r.d(c)}}}function Ie(n){let t,e,o=G(n[9]),l=[];for(let s=0;s<o.length;s+=1)l[s]=Te(qe(n,o,s));return{c(){t=p("div");for(let s=0;s<l.length;s+=1)l[s].c();e=x(),S(t,"class","grid-row")},m(s,r){O(s,t,r);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(t,null);u(t,e)},p(s,r){if(r&7){o=G(s[9]);let c;for(c=0;c<o.length;c+=1){const m=qe(s,o,c);l[c]?l[c].p(m,r):(l[c]=Te(m),l[c].c(),l[c].m(t,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=o.length}},d(s){s&&A(t),pe(l,s)}}}function dt(n){let t;return{c(){t=p("p"),t.textContent="GAME OVER - PRESS SPACE TO REPLAY"},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function at(n){let t;return{c(){t=p("p"),t.textContent="PAUSED"},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function pt(n){let t;return{c(){t=p("p"),t.textContent="PRESS SPACE TO PLAY - USE WASD OR ARROW KEYS"},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function mt(n){let t,e,o,l,s,r,c,m,i,b,a,g,R,C,k,_,M,q,v,H,D,K,P,N,T,w,f,h=G(n[10]),y=[];for(let d=0;d<h.length;d+=1)y[d]=Ie(Re(n,h,d));function W(d,E){if(!d[6])return pt;if(d[7])return at;if(d[3])return dt}let I=W(n),L=I&&I(n);return{c(){t=p("section"),e=p("div"),o=p("p"),l=p("button"),l.textContent="return to menu",s=x(),r=p("span"),r.textContent="//",c=x(),m=p("p"),m.textContent="classic mode",i=x(),b=p("div"),a=p("p"),g=p("span"),g.textContent="current score:",R=x(),C=z(n[4]),k=x(),_=p("span"),_.textContent="//",M=x(),q=p("p"),v=p("span"),v.textContent="high score:",H=x(),D=z(n[5]),K=x(),P=p("section");for(let d=0;d<y.length;d+=1)y[d].c();N=x(),L&&L.c(),T=de(),S(l,"class","menu-button"),B(m,"color","var(--classic-mode)"),S(e,"class","hud"),B(g,"color","var(--snake-pink)"),B(v,"color","var(--high-score)"),S(b,"class","hud"),S(t,"class","above-game"),S(P,"class","game-grid")},m(d,E){O(d,t,E),u(t,e),u(e,o),u(o,l),u(e,s),u(e,r),u(e,c),u(e,m),u(t,i),u(t,b),u(b,a),u(a,g),u(a,R),u(a,C),u(b,k),u(b,_),u(b,M),u(b,q),u(q,v),u(q,H),u(q,D),O(d,K,E),O(d,P,E);for(let j=0;j<y.length;j+=1)y[j]&&y[j].m(P,null);O(d,N,E),L&&L.m(d,E),O(d,T,E),w||(f=[X(window,"keydown",n[11]),X(l,"click",n[15])],w=!0)},p(d,[E]){if(E&16&&Z(C,d[4]),E&32&&Z(D,d[5]),E&519){h=G(d[10]);let j;for(j=0;j<h.length;j+=1){const oe=Re(d,h,j);y[j]?y[j].p(oe,E):(y[j]=Ie(oe),y[j].c(),y[j].m(P,null))}for(;j<y.length;j+=1)y[j].d(1);y.length=h.length}I!==(I=W(d))&&(L&&L.d(1),L=I&&I(d),L&&(L.c(),L.m(T.parentNode,T)))},i:V,o:V,d(d){d&&(A(t),A(K),A(P),A(N),A(T)),pe(y,d),L&&L.d(d),w=!1,F(f)}}}let we=80;function _t(n,t,e){let o,l,s;U(n,le,w=>e(4,o=w)),U(n,je,w=>e(5,l=w)),U(n,ue,w=>e(8,s=w));let r={head0:[21,9]},c=[];const m=Array(43),i=Array(19);let b,a,g=!1,R=!1,C=!0,k="right",_;function M(){for(e(2,a=Math.floor(Math.random()*43)),e(1,b=Math.floor(Math.random()*19));Object.values(r).some(w=>w.every((f,h)=>f===[a,b][h]));)e(2,a=Math.floor(Math.random()*43)),e(1,b=Math.floor(Math.random()*19))}function q(){let w=[r.head0[0],r.head0[1]-1];for(let f=1;f<Object.keys(r).length;f++)if(r[`head${f}`][0]===w[0]&&r[`head${f}`][1]===w[1]){e(3,g=!0);return}if(r.head0[1]-1<0){e(3,g=!0);return}else if(r.head0[1]>0){e(0,r.head0[1]=r.head0[1]-1,r),c.push(r.head0.slice()),e(12,c);for(let f=1;f<Object.keys(r).length;f++)e(0,r[`head${f}`]=c[c.length-f-1],r)}else e(0,r),e(1,b),e(2,a),e(12,c),e(4,o);k="up"}function v(){let w=[r.head0[0],r.head0[1]+1];for(let f=1;f<Object.keys(r).length;f++)if(r[`head${f}`][0]===w[0]&&r[`head${f}`][1]===w[1]){e(3,g=!0);return}if(r.head0[1]+1>i.length-1){e(3,g=!0);return}else if(r.head0[1]===i.length-1)e(0,r),e(1,b),e(2,a),e(12,c),e(4,o);else if(r.head0[1]===0||r.head0[1]>0){e(0,r.head0[1]=r.head0[1]+1,r),c.push(r.head0.slice()),e(12,c);for(let f=1;f<Object.keys(r).length;f++)e(0,r[`head${f}`]=c[c.length-f-1],r)}k="down"}function H(){let w=[r.head0[0]+1,r.head0[1]];for(let f=1;f<Object.keys(r).length;f++)if(r[`head${f}`][0]===w[0]&&r[`head${f}`][1]===w[1]){e(3,g=!0);return}if(r.head0[0]+1>m.length-1){e(3,g=!0);return}else if(r.head0[0]===m.length-1)e(0,r),e(1,b),e(2,a),e(12,c),e(4,o);else if(r.head0[0]===0||r.head0[0]>0){e(0,r.head0[0]=r.head0[0]+1,r),c.push(r.head0.slice()),e(12,c);for(let f=1;f<Object.keys(r).length;f++)e(0,r[`head${f}`]=c[c.length-f-1],r)}k="right"}function D(){let w=[r.head0[0]-1,r.head0[1]];for(let f=1;f<Object.keys(r).length;f++)if(r[`head${f}`][0]===w[0]&&r[`head${f}`][1]===w[1]){e(3,g=!0);return}if(r.head0[0]-1<0){e(3,g=!0);return}else if(r.head0[0]>0){e(0,r.head0[0]=r.head0[0]-1,r),c.push(r.head0.slice()),e(12,c);for(let f=1;f<Object.keys(r).length;f++)e(0,r[`head${f}`]=c[c.length-f-1],r)}else e(0,r),e(1,b),e(2,a),e(12,c),e(4,o);k="left"}function K(w,f,h){C||k!==w&&k!==f&&(h(),clearInterval(_),e(13,_=setInterval(()=>{h()},we)))}function P(w){switch(w.code){case"ArrowUp":case"KeyW":g||K("down","up",q);break;case"ArrowDown":case"KeyS":g||K("up","down",v);break;case"ArrowRight":case"KeyD":g||K("left","right",H);break;case"ArrowLeft":case"KeyA":g||K("right","left",D);break;case"Space":R||(M(),e(6,R=!0)),g?(e(12,c=[]),Y(le,o=0,o),e(0,r={head0:[21,9]}),k="right",e(13,_=setInterval(()=>{H()},we)),e(3,g=!1),M()):!g&&C?(e(7,C=!1),e(13,_=setInterval(()=>{k==="up"?q():k==="down"?v():k==="right"?H():k==="left"&&D()},we))):(e(7,C=!0),clearInterval(_))}}const N=(w,f,h)=>h.every((y,W)=>y===[w,f][W]),T=()=>Y(ue,s=!1,s);return n.$$.update=()=>{n.$$.dirty&4119&&r.head0[1]===b&&r.head0[0]===a&&(e(0,r[`head${Object.keys(r).length}`]=c[c.length-1],r),M(),Y(le,o+=1,o)),n.$$.dirty&8248&&g&&(clearInterval(_),l<o&&Y(je,l=o,l))},[r,b,a,g,o,l,R,C,s,m,i,P,c,_,N,T]}class gt extends be{constructor(t){super(),ge(this,t,_t,mt,he,{})}}function ve(n,t,e){const o=n.slice();return o[24]=t[e],o[26]=e,o}function De(n,t,e){const o=n.slice();return o[24]=t[e],o[28]=e,o}function bt(n){let t;return{c(){t=p("div"),S(t,"class","grid-square")},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function kt(n){let t;return{c(){t=p("div"),S(t,"class","grid-square foodSquare svelte-mjcnfm")},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function yt(n){let t;return{c(){t=p("div"),S(t,"class","grid-square activeSquare")},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function Ke(n){let t,e;function o(...c){return n[15](n[28],n[26],...c)}function l(c,m){return m&1&&(t=null),t==null&&(t=!!Object.values(c[0]).some(o)),t?yt:c[28]===c[2]&&c[26]===c[1]?kt:bt}let s=l(n,-1),r=s(n);return{c(){r.c(),e=de()},m(c,m){r.m(c,m),O(c,e,m)},p(c,m){n=c,s!==(s=l(n,m))&&(r.d(1),r=s(n),r&&(r.c(),r.m(e.parentNode,e)))},d(c){c&&A(e),r.d(c)}}}function He(n){let t,e,o=G(n[9]),l=[];for(let s=0;s<o.length;s+=1)l[s]=Ke(De(n,o,s));return{c(){t=p("div");for(let s=0;s<l.length;s+=1)l[s].c();e=x(),S(t,"class","grid-row")},m(s,r){O(s,t,r);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(t,null);u(t,e)},p(s,r){if(r&7){o=G(s[9]);let c;for(c=0;c<o.length;c+=1){const m=De(s,o,c);l[c]?l[c].p(m,r):(l[c]=Ke(m),l[c].c(),l[c].m(t,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=o.length}},d(s){s&&A(t),pe(l,s)}}}function wt(n){let t;return{c(){t=p("p"),t.textContent="GAME OVER - PRESS SPACE TO REPLAY"},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function St(n){let t;return{c(){t=p("p"),t.textContent="PAUSED"},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function At(n){let t;return{c(){t=p("p"),t.textContent="PRESS SPACE TO PLAY - USE WASD OR ARROW KEYS"},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function jt(n){let t,e,o,l,s,r,c,m,i,b,a,g,R,C,k,_,M,q,v,H,D,K,P,N,T,w,f,h=G(n[10]),y=[];for(let d=0;d<h.length;d+=1)y[d]=He(ve(n,h,d));function W(d,E){if(!d[6])return At;if(d[7])return St;if(d[3])return wt}let I=W(n),L=I&&I(n);return{c(){t=p("section"),e=p("div"),o=p("p"),l=p("button"),l.textContent="return to menu",s=x(),r=p("span"),r.textContent="//",c=x(),m=p("p"),m.textContent="speedy mode",i=x(),b=p("div"),a=p("p"),g=p("span"),g.textContent="current score:",R=x(),C=z(n[4]),k=x(),_=p("span"),_.textContent="//",M=x(),q=p("p"),v=p("span"),v.textContent="high score:",H=x(),D=z(n[5]),K=x(),P=p("section");for(let d=0;d<y.length;d+=1)y[d].c();N=x(),L&&L.c(),T=de(),S(l,"class","menu-button"),B(m,"color","var(--speed-mode)"),S(e,"class","hud"),B(g,"color","var(--snake-pink)"),B(v,"color","var(--high-score)"),S(b,"class","hud"),S(t,"class","above-game"),S(P,"class","game-grid")},m(d,E){O(d,t,E),u(t,e),u(e,o),u(o,l),u(e,s),u(e,r),u(e,c),u(e,m),u(t,i),u(t,b),u(b,a),u(a,g),u(a,R),u(a,C),u(b,k),u(b,_),u(b,M),u(b,q),u(q,v),u(q,H),u(q,D),O(d,K,E),O(d,P,E);for(let j=0;j<y.length;j+=1)y[j]&&y[j].m(P,null);O(d,N,E),L&&L.m(d,E),O(d,T,E),w||(f=[X(window,"keydown",n[11]),X(l,"click",n[16])],w=!0)},p(d,[E]){if(E&16&&Z(C,d[4]),E&32&&Z(D,d[5]),E&519){h=G(d[10]);let j;for(j=0;j<h.length;j+=1){const oe=ve(d,h,j);y[j]?y[j].p(oe,E):(y[j]=He(oe),y[j].c(),y[j].m(P,null))}for(;j<y.length;j+=1)y[j].d(1);y.length=h.length}I!==(I=W(d))&&(L&&L.d(1),L=I&&I(d),L&&(L.c(),L.m(T.parentNode,T)))},i:V,o:V,d(d){d&&(A(t),A(K),A(P),A(N),A(T)),pe(y,d),L&&L.d(d),w=!1,F(f)}}}function Ot(n,t,e){let o,l,s;U(n,se,f=>e(4,o=f)),U(n,Oe,f=>e(5,l=f)),U(n,ie,f=>e(8,s=f));let r={head0:[21,9]},c=[];const m=Array(43),i=Array(19);let b,a,g=!1,R=!1,C=!0,k="right",_=80,M;function q(){for(e(2,a=Math.floor(Math.random()*43)),e(1,b=Math.floor(Math.random()*19));Object.values(r).some(f=>f.every((h,y)=>h===[a,b][y]));)e(2,a=Math.floor(Math.random()*43)),e(1,b=Math.floor(Math.random()*19))}function v(){let f=[r.head0[0],r.head0[1]-1];for(let h=1;h<Object.keys(r).length;h++)if(r[`head${h}`][0]===f[0]&&r[`head${h}`][1]===f[1]){e(3,g=!0);return}if(r.head0[1]-1<0){e(3,g=!0);return}else if(r.head0[1]>0){e(0,r.head0[1]=r.head0[1]-1,r),c.push(r.head0.slice()),e(12,c);for(let h=1;h<Object.keys(r).length;h++)e(0,r[`head${h}`]=c[c.length-h-1],r)}else e(0,r),e(1,b),e(2,a),e(12,c),e(4,o),e(13,_);k="up"}function H(){let f=[r.head0[0],r.head0[1]+1];for(let h=1;h<Object.keys(r).length;h++)if(r[`head${h}`][0]===f[0]&&r[`head${h}`][1]===f[1]){e(3,g=!0);return}if(r.head0[1]+1>i.length-1){e(3,g=!0);return}else if(r.head0[1]===i.length-1)e(0,r),e(1,b),e(2,a),e(12,c),e(4,o),e(13,_);else if(r.head0[1]===0||r.head0[1]>0){e(0,r.head0[1]=r.head0[1]+1,r),c.push(r.head0.slice()),e(12,c);for(let h=1;h<Object.keys(r).length;h++)e(0,r[`head${h}`]=c[c.length-h-1],r)}k="down"}function D(){let f=[r.head0[0]+1,r.head0[1]];for(let h=1;h<Object.keys(r).length;h++)if(r[`head${h}`][0]===f[0]&&r[`head${h}`][1]===f[1]){e(3,g=!0);return}if(r.head0[0]+1>m.length-1){e(3,g=!0);return}else if(r.head0[0]===m.length-1)e(0,r),e(1,b),e(2,a),e(12,c),e(4,o),e(13,_);else if(r.head0[0]===0||r.head0[0]>0){e(0,r.head0[0]=r.head0[0]+1,r),c.push(r.head0.slice()),e(12,c);for(let h=1;h<Object.keys(r).length;h++)e(0,r[`head${h}`]=c[c.length-h-1],r)}k="right"}function K(){let f=[r.head0[0]-1,r.head0[1]];for(let h=1;h<Object.keys(r).length;h++)if(r[`head${h}`][0]===f[0]&&r[`head${h}`][1]===f[1]){e(3,g=!0);return}if(r.head0[0]-1<0){e(3,g=!0);return}else if(r.head0[0]>0){e(0,r.head0[0]=r.head0[0]-1,r),c.push(r.head0.slice()),e(12,c);for(let h=1;h<Object.keys(r).length;h++)e(0,r[`head${h}`]=c[c.length-h-1],r)}else e(0,r),e(1,b),e(2,a),e(12,c),e(4,o),e(13,_);k="left"}function P(f,h,y){C||k!==f&&k!==h&&(y(),clearInterval(M),e(14,M=setInterval(()=>{y()},_)))}function N(f){switch(f.code){case"ArrowUp":case"KeyW":g||P("down","up",v);break;case"ArrowDown":case"KeyS":g||P("up","down",H);break;case"ArrowRight":case"KeyD":g||P("left","right",D);break;case"ArrowLeft":case"KeyA":g||P("right","left",K);break;case"Space":R||(q(),e(6,R=!0)),g?(e(13,_=80),e(12,c=[]),Y(se,o=0,o),e(0,r={head0:[21,9]}),k="right",e(14,M=setInterval(()=>{D()},_)),e(3,g=!1),q()):!g&&C?(e(7,C=!1),e(14,M=setInterval(()=>{k==="up"?v():k==="down"?H():k==="right"?D():k==="left"&&K()},_))):(e(7,C=!0),clearInterval(M))}}const T=(f,h,y)=>y.every((W,I)=>W===[f,h][I]),w=()=>Y(ie,s=!1,s);return n.$$.update=()=>{n.$$.dirty&12311&&r.head0[1]===b&&r.head0[0]===a&&(e(0,r[`head${Object.keys(r).length}`]=c[c.length-1],r),q(),Y(se,o+=1,o),_>=15&&e(13,_-=1.5),console.log(_)),n.$$.dirty&16440&&g&&(clearInterval(M),l<o&&Y(Oe,l=o,l))},[r,b,a,g,o,l,R,C,s,m,i,N,c,_,M,T,w]}class Ct extends be{constructor(t){super(),ge(this,t,Ot,jt,he,{})}}function Ne(n){let t;return{c(){t=p("div"),t.innerHTML='<div class="tongue svelte-pdgc10"></div>',S(t,"class","snakehead svelte-pdgc10")},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function xt(n){let t,e;return t=new ft({}),{c(){xe(t.$$.fragment)},m(o,l){me(t,o,l),e=!0},i(o){e||(re(t.$$.fragment,o),e=!0)},o(o){fe(t.$$.fragment,o),e=!1},d(o){_e(t,o)}}}function Et(n){let t,e;return t=new Ct({}),{c(){xe(t.$$.fragment)},m(o,l){me(t,o,l),e=!0},i(o){e||(re(t.$$.fragment,o),e=!0)},o(o){fe(t.$$.fragment,o),e=!1},d(o){_e(t,o)}}}function Mt(n){let t,e;return t=new gt({}),{c(){xe(t.$$.fragment)},m(o,l){me(t,o,l),e=!0},i(o){e||(re(t.$$.fragment,o),e=!0)},o(o){fe(t.$$.fragment,o),e=!1},d(o){_e(t,o)}}}function Pt(n){let t;return{c(){t=p("div"),t.innerHTML="<p>Sorry! Computer only rn.</p>",S(t,"class","mobile-message svelte-pdgc10")},m(e,o){O(e,t,o)},i:V,o:V,d(e){e&&A(t)}}}function Ue(n){let t;return{c(){t=p("footer"),t.innerHTML=`<p>made by <a href="https://conorkelley.me" target="_blank" class="svelte-pdgc10">CK</a> //
      <a href="https://github.com/zenDev-2/snek" target="_blank" class="svelte-pdgc10">source code</a></p>`,S(t,"class","svelte-pdgc10")},m(e,o){O(e,t,o)},d(e){e&&A(t)}}}function Lt(n){let t,e,o,l,s,r,c,m,i,b,a=!n[2]&&!n[1]&&!n[0]&&Ne();const g=[Pt,Mt,Et,xt],R=[];function C(_,M){return window.screen.width<=1280?0:_[2]?1:_[1]?2:3}r=C(n),c=R[r]=g[r](n);let k=!n[2]&&!n[1]&&!n[0]&&Ue();return{c(){t=p("header"),e=p("h1"),e.textContent="snek",o=x(),a&&a.c(),l=x(),s=p("main"),c.c(),m=x(),k&&k.c(),i=de(),S(e,"class","svelte-pdgc10"),S(t,"class","svelte-pdgc10")},m(_,M){O(_,t,M),u(t,e),u(t,o),a&&a.m(t,null),O(_,l,M),O(_,s,M),R[r].m(s,null),O(_,m,M),k&&k.m(_,M),O(_,i,M),b=!0},p(_,[M]){!_[2]&&!_[1]&&!_[0]?a||(a=Ne(),a.c(),a.m(t,null)):a&&(a.d(1),a=null);let q=r;r=C(_),r!==q&&(et(),fe(R[q],1,1,()=>{R[q]=null}),tt(),c=R[r],c||(c=R[r]=g[r](_),c.c()),re(c,1),c.m(s,null)),!_[2]&&!_[1]&&!_[0]?k||(k=Ue(),k.c(),k.m(i.parentNode,i)):k&&(k.d(1),k=null)},i(_){b||(re(c),b=!0)},o(_){fe(c),b=!1},d(_){_&&(A(t),A(l),A(s),A(m),A(i)),a&&a.d(),R[r].d(),k&&k.d(_)}}}function Rt(n,t,e){let o,l,s,r,c,m;return U(n,Le,i=>e(3,o=i)),U(n,ot,i=>e(0,l=i)),U(n,se,i=>e(4,s=i)),U(n,ie,i=>e(1,r=i)),U(n,le,i=>e(5,c=i)),U(n,ue,i=>e(2,m=i)),window.addEventListener("keydown",i=>{(i.code==="Space"&&i.target==document.body||i.code==="ArrowUp"||i.code==="ArrowDown")&&i.preventDefault()}),n.$$.update=()=>{n.$$.dirty&4&&(m||Y(le,c=0,c)),n.$$.dirty&2&&(r||Y(se,s=0,s)),n.$$.dirty&1&&(l||Y(Le,o=0,o))},[l,r,m]}class qt extends be{constructor(t){super(),ge(this,t,Rt,Lt,he,{})}}new qt({target:document.getElementById("app")});
