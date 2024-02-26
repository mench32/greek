import{s as J,K as oe,L as ae,b as L,f as v,o as k,i as S,h as D,n as N,e as V,t as O,a as T,c as C,d as R,g as q,x as y,j as Y,O as pe,l as be,u as ke,p as we,q as Ie,r as ce,k as ge,I as Ee,F as te,y as De,N as G,M as F,m as Ve}from"../chunks/scheduler.DX4TyY33.js";import{S as Q,i as U,t as j,g as Z,b as M,d as H,c as W,a as X,m as $,e as x}from"../chunks/index.BN6Ch8PT.js";import{I as Ce,t as K}from"../chunks/icon-speaker.Dkt1wFEc.js";import{e as fe}from"../chunks/each.D6YF6ztN.js";import{p as ee}from"../chunks/audio.DeAYY8kc.js";function je(i){let e,l;return{c(){e=oe("svg"),l=oe("path"),this.h()},l(t){e=ae(t,"svg",{width:!0,height:!0,fill:!0,viewBox:!0,xmlns:!0});var s=L(e);l=ae(s,"path",{d:!0}),L(l).forEach(v),s.forEach(v),this.h()},h(){k(l,"d","M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z"),k(e,"width","24"),k(e,"height","24"),k(e,"fill","none"),k(e,"viewBox","0 0 24 24"),k(e,"xmlns","http://www.w3.org/2000/svg")},m(t,s){S(t,e,s),D(e,l)},p:N,i:N,o:N,d(t){t&&v(e)}}}class Se extends Q{constructor(e){super(),U(this,e,null,je,J,{})}}function ue(i){let e,l,t,s,r;return l=new Ce({}),{c(){e=V("div"),W(l.$$.fragment),this.h()},l(n){e=C(n,"DIV",{class:!0});var u=L(e);X(l.$$.fragment,u),u.forEach(v),this.h()},h(){k(e,"class","button svelte-p1rpjk")},m(n,u){S(n,e,u),$(l,e,null),t=!0,s||(r=y(e,"click",i[6]),s=!0)},p:N,i(n){t||(j(l.$$.fragment,n),t=!0)},o(n){M(l.$$.fragment,n),t=!1},d(n){n&&v(e),x(l),s=!1,r()}}}function Le(i){let e;const l=i[4].default,t=be(l,i,i[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,r){t&&t.m(s,r),e=!0},p(s,r){t&&t.p&&(!e||r&8)&&ke(t,l,s,s[3],e?Ie(l,s[3],r,null):we(s[3]),null)},i(s){e||(j(t,s),e=!0)},o(s){M(t,s),e=!1},d(s){t&&t.d(s)}}}function Me(i){let e,l=i[0].translate+"",t;return{c(){e=V("div"),t=O(l),this.h()},l(s){e=C(s,"DIV",{class:!0});var r=L(e);t=R(r,l),r.forEach(v),this.h()},h(){k(e,"class","translate svelte-p1rpjk")},m(s,r){S(s,e,r),D(e,t)},p(s,r){r&1&&l!==(l=s[0].translate+"")&&Y(t,l)},i:N,o:N,d(s){s&&v(e)}}}function Ne(i){var se,ie;let e,l,t,s,r,n=(((se=i[0])==null?void 0:se.article)??"")+"",u,o,d=((ie=i[0])==null?void 0:ie.origin)+"",a,h,g,m,_,c,p,f,b,A,w=i[0].audio&&ue(i);const le=[Me,Le],z=[];function ne(I,E){return I[2]?0:1}return m=ne(i),_=z[m]=le[m](i),{c(){e=V("div"),l=V("div"),t=O(i[1]),s=T(),r=V("div"),u=O(n),o=T(),a=O(d),h=T(),w&&w.c(),g=T(),_.c(),c=T(),p=V("div"),this.h()},l(I){e=C(I,"DIV",{class:!0});var E=L(e);l=C(E,"DIV",{class:!0});var B=L(l);t=R(B,i[1]),B.forEach(v),s=q(E),r=C(E,"DIV",{class:!0});var P=L(r);u=R(P,n),o=q(P),a=R(P,d),h=q(P),w&&w.l(P),P.forEach(v),g=q(E),_.l(E),c=q(E),p=C(E,"DIV",{}),L(p).forEach(v),E.forEach(v),this.h()},h(){k(l,"class","count svelte-p1rpjk"),k(r,"class","origin svelte-p1rpjk"),k(e,"class","card svelte-p1rpjk")},m(I,E){S(I,e,E),D(e,l),D(l,t),D(e,s),D(e,r),D(r,u),D(r,o),D(r,a),D(r,h),w&&w.m(r,null),D(e,g),z[m].m(e,null),D(e,c),D(e,p),f=!0,b||(A=y(e,"click",i[5]),b=!0)},p(I,[E]){var P,re;(!f||E&2)&&Y(t,I[1]),(!f||E&1)&&n!==(n=(((P=I[0])==null?void 0:P.article)??"")+"")&&Y(u,n),(!f||E&1)&&d!==(d=((re=I[0])==null?void 0:re.origin)+"")&&Y(a,d),I[0].audio?w?(w.p(I,E),E&1&&j(w,1)):(w=ue(I),w.c(),j(w,1),w.m(r,null)):w&&(Z(),M(w,1,1,()=>{w=null}),H());let B=m;m=ne(I),m===B?z[m].p(I,E):(Z(),M(z[B],1,1,()=>{z[B]=null}),H(),_=z[m],_?_.p(I,E):(_=z[m]=le[m](I),_.c()),j(_,1),_.m(e,c))},i(I){f||(j(w),j(_),f=!0)},o(I){M(w),M(_),f=!1},d(I){I&&v(e),w&&w.d(),z[m].d(),b=!1,A()}}}function Te(i){ee(i)}function qe(i,e,l){let{$$slots:t={},$$scope:s}=e,{dict:r}=e,{count:n}=e,{show:u=!1}=e;function o(a){pe.call(this,i,a)}const d=()=>Te(r.audio??"");return i.$$set=a=>{"dict"in a&&l(0,r=a.dict),"count"in a&&l(1,n=a.count),"show"in a&&l(2,u=a.show),"$$scope"in a&&l(3,s=a.$$scope)},[r,n,u,s,t,o,d]}class Ae extends Q{constructor(e){super(),U(this,e,qe,Ne,J,{dict:0,count:1,show:2})}}function de(i,e,l){const t=i.slice();return t[14]=e[l],t[16]=l,t}function Pe(i){let e,l="Нет слов для изучения";return{c(){e=V("p"),e.textContent=l},l(t){e=C(t,"P",{"data-svelte-h":!0}),te(e)!=="svelte-l49rcm"&&(e.textContent=l)},m(t,s){S(t,e,s)},p:N,i:N,o:N,d(t){t&&v(e)}}}function ze(i){let e,l,t,s,r,n,u,o,d,a=fe(i[1]),h=[];for(let c=0;c<a.length;c+=1)h[c]=_e(de(i,a,c));r=new Ae({props:{dict:i[0][i[2]],count:i[2]+1+"/"+i[0].length,show:i[3]}});let g=!i[3]&&he(i),m=!i[3]&&me(i),_=i[3]&&ve(i);return{c(){e=V("div");for(let c=0;c<h.length;c+=1)h[c].c();l=T(),t=V("div"),s=V("div"),W(r.$$.fragment),n=T(),g&&g.c(),u=T(),m&&m.c(),o=T(),_&&_.c(),this.h()},l(c){e=C(c,"DIV",{class:!0});var p=L(e);for(let A=0;A<h.length;A+=1)h[A].l(p);p.forEach(v),l=q(c),t=C(c,"DIV",{class:!0});var f=L(t);s=C(f,"DIV",{class:!0});var b=L(s);X(r.$$.fragment,b),b.forEach(v),n=q(f),g&&g.l(f),u=q(f),m&&m.l(f),o=q(f),_&&_.l(f),f.forEach(v),this.h()},h(){k(e,"class","status-list svelte-1311oab"),k(s,"class","card svelte-1311oab"),k(t,"class","train svelte-1311oab")},m(c,p){S(c,e,p);for(let f=0;f<h.length;f+=1)h[f]&&h[f].m(e,null);S(c,l,p),S(c,t,p),D(t,s),$(r,s,null),D(t,n),g&&g.m(t,null),D(t,u),m&&m.m(t,null),D(t,o),_&&_.m(t,null),d=!0},p(c,p){if(p&6){a=fe(c[1]);let b;for(b=0;b<a.length;b+=1){const A=de(c,a,b);h[b]?h[b].p(A,p):(h[b]=_e(A),h[b].c(),h[b].m(e,null))}for(;b<h.length;b+=1)h[b].d(1);h.length=a.length}const f={};p&5&&(f.dict=c[0][c[2]]),p&5&&(f.count=c[2]+1+"/"+c[0].length),p&8&&(f.show=c[3]),r.$set(f),c[3]?g&&(g.d(1),g=null):g?g.p(c,p):(g=he(c),g.c(),g.m(t,u)),c[3]?m&&(m.d(1),m=null):m?m.p(c,p):(m=me(c),m.c(),m.m(t,o)),c[3]?_?(_.p(c,p),p&8&&j(_,1)):(_=ve(c),_.c(),j(_,1),_.m(t,null)):_&&(Z(),M(_,1,1,()=>{_=null}),H())},i(c){d||(j(r.$$.fragment,c),j(_),d=!0)},o(c){M(r.$$.fragment,c),M(_),d=!1},d(c){c&&(v(e),v(l),v(t)),De(h,c),x(r),g&&g.d(),m&&m.d(),_&&_.d()}}}function _e(i){let e;return{c(){e=V("div"),this.h()},l(l){e=C(l,"DIV",{class:!0}),L(e).forEach(v),this.h()},h(){k(e,"class","status svelte-1311oab"),G(e,"current",i[2]===i[16]),G(e,"success",i[14]===!0),G(e,"error",i[14]===!1)},m(l,t){S(l,e,t)},p(l,t){t&4&&G(e,"current",l[2]===l[16]),t&2&&G(e,"success",l[14]===!0),t&2&&G(e,"error",l[14]===!1)},d(l){l&&v(e)}}}function he(i){let e,l="Нет",t,s;return{c(){e=V("div"),e.textContent=l,this.h()},l(r){e=C(r,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-fbe92q"&&(e.textContent=l),this.h()},h(){k(e,"class","button no svelte-1311oab")},m(r,n){S(r,e,n),t||(s=y(e,"click",i[6]),t=!0)},p:N,d(r){r&&v(e),t=!1,s()}}}function me(i){let e,l="Да",t,s;return{c(){e=V("div"),e.textContent=l,this.h()},l(r){e=C(r,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-d2yzxi"&&(e.textContent=l),this.h()},h(){k(e,"class","button yes svelte-1311oab")},m(r,n){S(r,e,n),t||(s=y(e,"click",i[5]),t=!0)},p:N,d(r){r&&v(e),t=!1,s()}}}function ve(i){let e,l,t,s,r;return l=new Se({}),{c(){e=V("div"),W(l.$$.fragment),this.h()},l(n){e=C(n,"DIV",{class:!0});var u=L(e);X(l.$$.fragment,u),u.forEach(v),this.h()},h(){k(e,"class","button next svelte-1311oab")},m(n,u){S(n,e,u),$(l,e,null),t=!0,s||(r=y(e,"click",i[7]),s=!0)},p:N,i(n){t||(j(l.$$.fragment,n),t=!0)},o(n){M(l.$$.fragment,n),t=!1},d(n){n&&v(e),x(l),s=!1,r()}}}function Be(i){let e,l,t,s,r,n;const u=[ze,Pe],o=[];function d(a,h){return a[0].length?0:1}return e=d(i),l=o[e]=u[e](i),{c(){l.c(),t=ce()},l(a){l.l(a),t=ce()},m(a,h){o[e].m(a,h),S(a,t,h),s=!0,r||(n=y(window,"keydown",i[4]),r=!0)},p(a,[h]){let g=e;e=d(a),e===g?o[e].p(a,h):(Z(),M(o[g],1,1,()=>{o[g]=null}),H(),l=o[e],l?l.p(a,h):(l=o[e]=u[e](a),l.c()),j(l,1),l.m(t.parentNode,t))},i(a){s||(j(l),s=!0)},o(a){M(l),s=!1},d(a){a&&v(t),o[e].d(a),r=!1,n()}}}function Ge(i,e,l){let t;ge(i,K,f=>l(11,t=f));let{hard:s=!1}=e,{dict:r=[]}=e,n=[],u=[],o=0;console.log(n[0]);let d=!1,a=null;Ee(()=>{l(0,n=r.sort((f,b)=>t[f.origin].last-t[b.origin].last)),l(3,d=n[0]?t[n[0].origin].count===0:!1),a=n[0]?t[n[0].origin].count===0:null});function h(){return d?(l(3,d=!1),!0):(l(3,d=!0),ee(n[o].audio??""),!1)}function g({key:f}){if(f==="ArrowLeft")return d?p():c();if(f==="ArrowRight"||f==="Enter")return d?p():_()}function m(f){F(K,t[n[o].origin]=t[n[o].origin]||{origin:n[o].origin,count:0,last:0,disabled:!1},t),f?F(K,t[n[o].origin].count+=1,t):F(K,t[n[o].origin].count=0,t),l(1,u[o]=f,u),F(K,t[n[o].origin].last=Date.now(),t)}function _(){a=!0,h()}function c(){a=!1,h()}async function p(){m(a??!1),a=null,o<n.length-1?l(2,o+=1):(l(2,o=0),l(0,n=n.filter(f=>t[f.origin].count<5))),l(3,d=t[n[o].origin].count===0),a=!0,setTimeout(()=>{ee(n[o].audio??"")})}return i.$$set=f=>{"hard"in f&&l(8,s=f.hard),"dict"in f&&l(9,r=f.dict)},i.$$.update=()=>{i.$$.dirty&3&&l(1,u=n.map((f,b)=>u[b]??null))},[n,u,o,d,g,_,c,p,s,r]}class Ke extends Q{constructor(e){super(),U(this,e,Ge,Be,J,{hard:8,dict:9})}}function ye(i){let e,l,t,s,r,n,u;return document.title=e="Greek: Урок "+i[0].lesson+" – Изучение слов",n=new Ke({props:{dict:i[0].dict.filter(i[2])}}),{c(){l=V("meta"),s=T(),r=V("div"),W(n.$$.fragment),this.h()},l(o){const d=Ve("svelte-2zr8bx",document.head);l=C(d,"META",{name:!0,content:!0}),d.forEach(v),s=q(o),r=C(o,"DIV",{class:!0});var a=L(r);X(n.$$.fragment,a),a.forEach(v),this.h()},h(){k(l,"name","description"),k(l,"content",t="Сайт для изучения Греческого языка, Урок №"+i[0].lesson+", Изучение слов."),k(r,"class","content svelte-w780lm")},m(o,d){D(document.head,l),S(o,s,d),S(o,r,d),$(n,r,null),u=!0},p(o,[d]){(!u||d&1)&&e!==(e="Greek: Урок "+o[0].lesson+" – Изучение слов")&&(document.title=e),(!u||d&1&&t!==(t="Сайт для изучения Греческого языка, Урок №"+o[0].lesson+", Изучение слов."))&&k(l,"content",t);const a={};d&3&&(a.dict=o[0].dict.filter(o[2])),n.$set(a)},i(o){u||(j(n.$$.fragment,o),u=!0)},o(o){M(n.$$.fragment,o),u=!1},d(o){o&&(v(s),v(r)),v(l),x(n)}}}function Fe(i,e,l){let t;ge(i,K,n=>l(1,t=n));let{data:s}=e;const r=({origin:n,type:u})=>{var o,d;return u==="word"&&((o=t[n])==null?void 0:o.disabled)===!1&&((d=t[n])==null?void 0:d.count)<5};return i.$$set=n=>{"data"in n&&l(0,s=n.data)},[s,t,r]}class Je extends Q{constructor(e){super(),U(this,e,Fe,ye,J,{data:0})}}export{Je as component};
