import{s as Y,I as le,J as ie,b as C,f as _,z as b,i as y,h as I,n as S,e as E,t as J,a as P,c as V,d as M,g as q,v as B,j as R,K as _e,p as se,k as he,E as W,w as me,L as T,G}from"../chunks/scheduler.BaN0QtDd.js";import{S as Z,i as $,t as j,g as X,b as L,d as x,c as F,a as H,m as O,e as Q}from"../chunks/index.CrKnT-xF.js";import{I as ve,p as U,t as A}from"../chunks/icon-speaker.B6On12cn.js";import{e as ne}from"../chunks/each.D6YF6ztN.js";function ge(n){let e,t;return{c(){e=le("svg"),t=le("path"),this.h()},l(l){e=ie(l,"svg",{width:!0,height:!0,fill:!0,viewBox:!0,xmlns:!0});var s=C(e);t=ie(s,"path",{d:!0}),C(t).forEach(_),s.forEach(_),this.h()},h(){b(t,"d","M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z"),b(e,"width","24"),b(e,"height","24"),b(e,"fill","none"),b(e,"viewBox","0 0 24 24"),b(e,"xmlns","http://www.w3.org/2000/svg")},m(l,s){y(l,e,s),I(e,t)},p:S,i:S,o:S,d(l){l&&_(e)}}}class pe extends Z{constructor(e){super(),$(this,e,null,ge,Y,{})}}function re(n){let e,t,l,s,i;return t=new ve({}),{c(){e=E("div"),F(t.$$.fragment),this.h()},l(a){e=V(a,"DIV",{class:!0});var o=C(e);H(t.$$.fragment,o),o.forEach(_),this.h()},h(){b(e,"class","button svelte-p1rpjk")},m(a,o){y(a,e,o),O(t,e,null),l=!0,s||(i=B(e,"click",n[4]),s=!0)},p:S,i(a){l||(j(t.$$.fragment,a),l=!0)},o(a){L(t.$$.fragment,a),l=!1},d(a){a&&_(e),Q(t),s=!1,i()}}}function ae(n){let e,t=n[0].translate+"",l;return{c(){e=E("div"),l=J(t),this.h()},l(s){e=V(s,"DIV",{class:!0});var i=C(e);l=M(i,t),i.forEach(_),this.h()},h(){b(e,"class","translate svelte-p1rpjk")},m(s,i){y(s,e,i),I(e,l)},p(s,i){i&1&&t!==(t=s[0].translate+"")&&R(l,t)},d(s){s&&_(e)}}}function ke(n){var ee,te;let e,t,l,s,i,a=(((ee=n[0])==null?void 0:ee.article)??"")+"",o,f,D=((te=n[0])==null?void 0:te.origin)+"",d,u,m,v,h,r,p,k,c=n[0].audio&&re(n),g=n[2]&&ae(n);return{c(){e=E("div"),t=E("div"),l=J(n[1]),s=P(),i=E("div"),o=J(a),f=P(),d=J(D),u=P(),c&&c.c(),m=P(),g&&g.c(),v=P(),h=E("div"),this.h()},l(w){e=V(w,"DIV",{class:!0});var z=C(e);t=V(z,"DIV",{class:!0});var K=C(t);l=M(K,n[1]),K.forEach(_),s=q(z),i=V(z,"DIV",{class:!0});var N=C(i);o=M(N,a),f=q(N),d=M(N,D),u=q(N),c&&c.l(N),N.forEach(_),m=q(z),g&&g.l(z),v=q(z),h=V(z,"DIV",{}),C(h).forEach(_),z.forEach(_),this.h()},h(){b(t,"class","count svelte-p1rpjk"),b(i,"class","origin svelte-p1rpjk"),b(e,"class","card svelte-p1rpjk")},m(w,z){y(w,e,z),I(e,t),I(t,l),I(e,s),I(e,i),I(i,o),I(i,f),I(i,d),I(i,u),c&&c.m(i,null),I(e,m),g&&g.m(e,null),I(e,v),I(e,h),r=!0,p||(k=B(e,"click",n[3]),p=!0)},p(w,[z]){var K,N;(!r||z&2)&&R(l,w[1]),(!r||z&1)&&a!==(a=(((K=w[0])==null?void 0:K.article)??"")+"")&&R(o,a),(!r||z&1)&&D!==(D=((N=w[0])==null?void 0:N.origin)+"")&&R(d,D),w[0].audio?c?(c.p(w,z),z&1&&j(c,1)):(c=re(w),c.c(),j(c,1),c.m(i,null)):c&&(X(),L(c,1,1,()=>{c=null}),x()),w[2]?g?g.p(w,z):(g=ae(w),g.c(),g.m(e,v)):g&&(g.d(1),g=null)},i(w){r||(j(c),r=!0)},o(w){L(c),r=!1},d(w){w&&_(e),c&&c.d(),g&&g.d(),p=!1,k()}}}function be(n){U(n)}function we(n,e,t){let{dict:l}=e,{count:s}=e,{show:i=!1}=e;function a(f){_e.call(this,n,f)}const o=()=>be(l.audio??"");return n.$$set=f=>{"dict"in f&&t(0,l=f.dict),"count"in f&&t(1,s=f.count),"show"in f&&t(2,i=f.show)},[l,s,i,a,o]}class ze extends Z{constructor(e){super(),$(this,e,we,ke,Y,{dict:0,count:1,show:2})}}function oe(n,e,t){const l=n.slice();return l[12]=e[t],l}function Ie(n){let e,t="Нет слов для изучения";return{c(){e=E("p"),e.textContent=t},l(l){e=V(l,"P",{"data-svelte-h":!0}),W(e)!=="svelte-l49rcm"&&(e.textContent=t)},m(l,s){y(l,e,s)},p:S,i:S,o:S,d(l){l&&_(e)}}}function De(n){let e,t,l,s,i,a,o,f,D,d=ne(n[1]),u=[];for(let r=0;r<d.length;r+=1)u[r]=fe(oe(n,d,r));i=new ze({props:{dict:n[0][n[2]],count:n[2]+1+"/"+n[0].length,show:n[3]}});let m=!n[3]&&ce(n),v=!n[3]&&ue(n),h=n[3]&&de(n);return{c(){e=E("div");for(let r=0;r<u.length;r+=1)u[r].c();t=P(),l=E("div"),s=E("div"),F(i.$$.fragment),a=P(),m&&m.c(),o=P(),v&&v.c(),f=P(),h&&h.c(),this.h()},l(r){e=V(r,"DIV",{class:!0});var p=C(e);for(let g=0;g<u.length;g+=1)u[g].l(p);p.forEach(_),t=q(r),l=V(r,"DIV",{class:!0});var k=C(l);s=V(k,"DIV",{class:!0});var c=C(s);H(i.$$.fragment,c),c.forEach(_),a=q(k),m&&m.l(k),o=q(k),v&&v.l(k),f=q(k),h&&h.l(k),k.forEach(_),this.h()},h(){b(e,"class","status-list svelte-zzf9yz"),b(s,"class","card svelte-zzf9yz"),b(l,"class","train svelte-zzf9yz")},m(r,p){y(r,e,p);for(let k=0;k<u.length;k+=1)u[k]&&u[k].m(e,null);y(r,t,p),y(r,l,p),I(l,s),O(i,s,null),I(l,a),m&&m.m(l,null),I(l,o),v&&v.m(l,null),I(l,f),h&&h.m(l,null),D=!0},p(r,p){if(p&2){d=ne(r[1]);let c;for(c=0;c<d.length;c+=1){const g=oe(r,d,c);u[c]?u[c].p(g,p):(u[c]=fe(g),u[c].c(),u[c].m(e,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=d.length}const k={};p&5&&(k.dict=r[0][r[2]]),p&5&&(k.count=r[2]+1+"/"+r[0].length),p&8&&(k.show=r[3]),i.$set(k),r[3]?m&&(m.d(1),m=null):m?m.p(r,p):(m=ce(r),m.c(),m.m(l,o)),r[3]?v&&(v.d(1),v=null):v?v.p(r,p):(v=ue(r),v.c(),v.m(l,f)),r[3]?h?(h.p(r,p),p&8&&j(h,1)):(h=de(r),h.c(),j(h,1),h.m(l,null)):h&&(X(),L(h,1,1,()=>{h=null}),x())},i(r){D||(j(i.$$.fragment,r),j(h),D=!0)},o(r){L(i.$$.fragment,r),L(h),D=!1},d(r){r&&(_(e),_(t),_(l)),me(u,r),Q(i),m&&m.d(),v&&v.d(),h&&h.d()}}}function fe(n){let e;return{c(){e=E("div"),this.h()},l(t){e=V(t,"DIV",{class:!0}),C(e).forEach(_),this.h()},h(){b(e,"class","status svelte-zzf9yz"),T(e,"success",n[12]===!0),T(e,"error",n[12]===!1)},m(t,l){y(t,e,l)},p(t,l){l&2&&T(e,"success",t[12]===!0),l&2&&T(e,"error",t[12]===!1)},d(t){t&&_(e)}}}function ce(n){let e,t="Нет",l,s;return{c(){e=E("div"),e.textContent=t,this.h()},l(i){e=V(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-fbe92q"&&(e.textContent=t),this.h()},h(){b(e,"class","button no svelte-zzf9yz")},m(i,a){y(i,e,a),l||(s=B(e,"click",n[6]),l=!0)},p:S,d(i){i&&_(e),l=!1,s()}}}function ue(n){let e,t="Да",l,s;return{c(){e=E("div"),e.textContent=t,this.h()},l(i){e=V(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-d2yzxi"&&(e.textContent=t),this.h()},h(){b(e,"class","button yes svelte-zzf9yz")},m(i,a){y(i,e,a),l||(s=B(e,"click",n[5]),l=!0)},p:S,d(i){i&&_(e),l=!1,s()}}}function de(n){let e,t,l,s,i;return t=new pe({}),{c(){e=E("div"),F(t.$$.fragment),this.h()},l(a){e=V(a,"DIV",{class:!0});var o=C(e);H(t.$$.fragment,o),o.forEach(_),this.h()},h(){b(e,"class","button next svelte-zzf9yz")},m(a,o){y(a,e,o),O(t,e,null),l=!0,s||(i=B(e,"click",n[7]),s=!0)},p:S,i(a){l||(j(t.$$.fragment,a),l=!0)},o(a){L(t.$$.fragment,a),l=!1},d(a){a&&_(e),Q(t),s=!1,i()}}}function Ee(n){let e,t,l,s,i,a;const o=[De,Ie],f=[];function D(d,u){return d[0].length?0:1}return e=D(n),t=f[e]=o[e](n),{c(){t.c(),l=se()},l(d){t.l(d),l=se()},m(d,u){f[e].m(d,u),y(d,l,u),s=!0,i||(a=B(window,"keydown",n[4]),i=!0)},p(d,[u]){let m=e;e=D(d),e===m?f[e].p(d,u):(X(),L(f[m],1,1,()=>{f[m]=null}),x(),t=f[e],t?t.p(d,u):(t=f[e]=o[e](d),t.c()),j(t,1),t.m(l.parentNode,l))},i(d){s||(j(t),s=!0)},o(d){L(t),s=!1},d(d){d&&_(l),f[e].d(d),i=!1,a()}}}function Ve(n,e,t){let l;he(n,A,r=>t(9,l=r));let{dict:s=[]}=e,i=[],a=[],o=0,f=!1;function D(){return f?(t(3,f=!1),!0):(t(3,f=!0),U(i[o].audio??""),!1)}function d({key:r}){if(r==="ArrowLeft")return f?h():v();if(r==="ArrowRight"||r==="Enter")return f?h():m()}function u(r){G(A,l[i[o].origin]=l[i[o].origin]||{origin:i[o].origin,count:0,last:0,disabled:!1},l),r?G(A,l[i[o].origin].count+=1,l):G(A,l[i[o].origin].count=0,l),t(1,a[o]=r,a),G(A,l[i[o].origin].last=Date.now(),l)}function m(){u(!0),D()}function v(){u(!1),D()}function h(){o<i.length-1?t(2,o+=1):t(2,o=0),U(i[o].audio??""),t(3,f=!1)}return n.$$set=r=>{"dict"in r&&t(8,s=r.dict)},n.$$.update=()=>{n.$$.dirty&256&&t(0,i=s),n.$$.dirty&3&&t(1,a=i.map((r,p)=>a[p]??null))},[i,a,o,f,d,m,v,h,s]}class Ce extends Z{constructor(e){super(),$(this,e,Ve,Ee,Y,{dict:8})}}function ye(n){let e,t,l;return t=new Ce({props:{dict:n[0].dict.filter(n[2])}}),{c(){e=E("div"),F(t.$$.fragment),this.h()},l(s){e=V(s,"DIV",{class:!0});var i=C(e);H(t.$$.fragment,i),i.forEach(_),this.h()},h(){b(e,"class","content svelte-w780lm")},m(s,i){y(s,e,i),O(t,e,null),l=!0},p(s,[i]){const a={};i&3&&(a.dict=s[0].dict.filter(s[2])),t.$set(a)},i(s){l||(j(t.$$.fragment,s),l=!0)},o(s){L(t.$$.fragment,s),l=!1},d(s){s&&_(e),Q(t)}}}function je(n,e,t){let l;he(n,A,a=>t(1,l=a));let{data:s}=e;const i=({origin:a,type:o})=>{var f;return o==="word"&&((f=l[a])==null?void 0:f.disabled)===!1};return n.$$set=a=>{"data"in a&&t(0,s=a.data)},[s,l,i]}class qe extends Z{constructor(e){super(),$(this,e,je,ye,Y,{data:0})}}export{qe as component};
