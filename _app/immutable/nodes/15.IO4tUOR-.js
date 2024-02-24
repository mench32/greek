import{s as Z,I as le,J as ie,b as j,f as _,z as k,i as S,h as D,n as N,e as V,t as M,a as z,c as C,d as R,g as A,v as T,j as Y,K as _e,p as se,k as he,E as W,w as me,L as B,G as J}from"../chunks/scheduler.BaN0QtDd.js";import{S as $,i as y,t as L,g as X,b as P,d as x,c as F,a as H,m as O,e as Q}from"../chunks/index.CrKnT-xF.js";import{I as ve,p as U,t as K}from"../chunks/icon-speaker.B6On12cn.js";import{e as ne}from"../chunks/each.D6YF6ztN.js";function pe(s){let e,t;return{c(){e=le("svg"),t=le("path"),this.h()},l(l){e=ie(l,"svg",{width:!0,height:!0,fill:!0,viewBox:!0,xmlns:!0});var n=j(e);t=ie(n,"path",{d:!0}),j(t).forEach(_),n.forEach(_),this.h()},h(){k(t,"d","M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z"),k(e,"width","24"),k(e,"height","24"),k(e,"fill","none"),k(e,"viewBox","0 0 24 24"),k(e,"xmlns","http://www.w3.org/2000/svg")},m(l,n){S(l,e,n),D(e,t)},p:N,i:N,o:N,d(l){l&&_(e)}}}class ge extends ${constructor(e){super(),y(this,e,null,pe,Z,{})}}function re(s){let e,t,l,n,i;return t=new ve({}),{c(){e=V("div"),F(t.$$.fragment),this.h()},l(a){e=C(a,"DIV",{class:!0});var o=j(e);H(t.$$.fragment,o),o.forEach(_),this.h()},h(){k(e,"class","button svelte-p1rpjk")},m(a,o){S(a,e,o),O(t,e,null),l=!0,n||(i=T(e,"click",s[4]),n=!0)},p:N,i(a){l||(L(t.$$.fragment,a),l=!0)},o(a){P(t.$$.fragment,a),l=!1},d(a){a&&_(e),Q(t),n=!1,i()}}}function ae(s){let e,t=s[0].translate+"",l;return{c(){e=V("div"),l=M(t),this.h()},l(n){e=C(n,"DIV",{class:!0});var i=j(e);l=R(i,t),i.forEach(_),this.h()},h(){k(e,"class","translate svelte-p1rpjk")},m(n,i){S(n,e,i),D(e,l)},p(n,i){i&1&&t!==(t=n[0].translate+"")&&Y(l,t)},d(n){n&&_(e)}}}function be(s){var ee,te;let e,t,l,n,i,a=(((ee=s[0])==null?void 0:ee.article)??"")+"",o,f,E=((te=s[0])==null?void 0:te.origin)+"",d,u,m,v,h,r,g,b,c=s[0].audio&&re(s),p=s[2]&&ae(s);return{c(){e=V("div"),t=V("div"),l=M(s[1]),n=z(),i=V("div"),o=M(a),f=z(),d=M(E),u=z(),c&&c.c(),m=z(),p&&p.c(),v=z(),h=V("div"),this.h()},l(w){e=C(w,"DIV",{class:!0});var I=j(e);t=C(I,"DIV",{class:!0});var G=j(t);l=R(G,s[1]),G.forEach(_),n=A(I),i=C(I,"DIV",{class:!0});var q=j(i);o=R(q,a),f=A(q),d=R(q,E),u=A(q),c&&c.l(q),q.forEach(_),m=A(I),p&&p.l(I),v=A(I),h=C(I,"DIV",{}),j(h).forEach(_),I.forEach(_),this.h()},h(){k(t,"class","count svelte-p1rpjk"),k(i,"class","origin svelte-p1rpjk"),k(e,"class","card svelte-p1rpjk")},m(w,I){S(w,e,I),D(e,t),D(t,l),D(e,n),D(e,i),D(i,o),D(i,f),D(i,d),D(i,u),c&&c.m(i,null),D(e,m),p&&p.m(e,null),D(e,v),D(e,h),r=!0,g||(b=T(e,"click",s[3]),g=!0)},p(w,[I]){var G,q;(!r||I&2)&&Y(l,w[1]),(!r||I&1)&&a!==(a=(((G=w[0])==null?void 0:G.article)??"")+"")&&Y(o,a),(!r||I&1)&&E!==(E=((q=w[0])==null?void 0:q.origin)+"")&&Y(d,E),w[0].audio?c?(c.p(w,I),I&1&&L(c,1)):(c=re(w),c.c(),L(c,1),c.m(i,null)):c&&(X(),P(c,1,1,()=>{c=null}),x()),w[2]?p?p.p(w,I):(p=ae(w),p.c(),p.m(e,v)):p&&(p.d(1),p=null)},i(w){r||(L(c),r=!0)},o(w){P(c),r=!1},d(w){w&&_(e),c&&c.d(),p&&p.d(),g=!1,b()}}}function ke(s){U(s)}function we(s,e,t){let{dict:l}=e,{count:n}=e,{show:i=!1}=e;function a(f){_e.call(this,s,f)}const o=()=>ke(l.audio??"");return s.$$set=f=>{"dict"in f&&t(0,l=f.dict),"count"in f&&t(1,n=f.count),"show"in f&&t(2,i=f.show)},[l,n,i,a,o]}class Ie extends ${constructor(e){super(),y(this,e,we,be,Z,{dict:0,count:1,show:2})}}function oe(s,e,t){const l=s.slice();return l[12]=e[t],l[14]=t,l}function De(s){let e,t="Нет слов для изучения";return{c(){e=V("p"),e.textContent=t},l(l){e=C(l,"P",{"data-svelte-h":!0}),W(e)!=="svelte-l49rcm"&&(e.textContent=t)},m(l,n){S(l,e,n)},p:N,i:N,o:N,d(l){l&&_(e)}}}function Ee(s){let e,t,l,n,i,a,o,f,E,d=ne(s[1]),u=[];for(let r=0;r<d.length;r+=1)u[r]=fe(oe(s,d,r));i=new Ie({props:{dict:s[0][s[2]],count:s[2]+1+"/"+s[0].length,show:s[3]}});let m=!s[3]&&ce(s),v=!s[3]&&ue(s),h=s[3]&&de(s);return{c(){e=V("div");for(let r=0;r<u.length;r+=1)u[r].c();t=z(),l=V("div"),n=V("div"),F(i.$$.fragment),a=z(),m&&m.c(),o=z(),v&&v.c(),f=z(),h&&h.c(),this.h()},l(r){e=C(r,"DIV",{class:!0});var g=j(e);for(let p=0;p<u.length;p+=1)u[p].l(g);g.forEach(_),t=A(r),l=C(r,"DIV",{class:!0});var b=j(l);n=C(b,"DIV",{class:!0});var c=j(n);H(i.$$.fragment,c),c.forEach(_),a=A(b),m&&m.l(b),o=A(b),v&&v.l(b),f=A(b),h&&h.l(b),b.forEach(_),this.h()},h(){k(e,"class","status-list svelte-bp8tfe"),k(n,"class","card svelte-bp8tfe"),k(l,"class","train svelte-bp8tfe")},m(r,g){S(r,e,g);for(let b=0;b<u.length;b+=1)u[b]&&u[b].m(e,null);S(r,t,g),S(r,l,g),D(l,n),O(i,n,null),D(l,a),m&&m.m(l,null),D(l,o),v&&v.m(l,null),D(l,f),h&&h.m(l,null),E=!0},p(r,g){if(g&6){d=ne(r[1]);let c;for(c=0;c<d.length;c+=1){const p=oe(r,d,c);u[c]?u[c].p(p,g):(u[c]=fe(p),u[c].c(),u[c].m(e,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=d.length}const b={};g&5&&(b.dict=r[0][r[2]]),g&5&&(b.count=r[2]+1+"/"+r[0].length),g&8&&(b.show=r[3]),i.$set(b),r[3]?m&&(m.d(1),m=null):m?m.p(r,g):(m=ce(r),m.c(),m.m(l,o)),r[3]?v&&(v.d(1),v=null):v?v.p(r,g):(v=ue(r),v.c(),v.m(l,f)),r[3]?h?(h.p(r,g),g&8&&L(h,1)):(h=de(r),h.c(),L(h,1),h.m(l,null)):h&&(X(),P(h,1,1,()=>{h=null}),x())},i(r){E||(L(i.$$.fragment,r),L(h),E=!0)},o(r){P(i.$$.fragment,r),P(h),E=!1},d(r){r&&(_(e),_(t),_(l)),me(u,r),Q(i),m&&m.d(),v&&v.d(),h&&h.d()}}}function fe(s){let e;return{c(){e=V("div"),this.h()},l(t){e=C(t,"DIV",{class:!0}),j(e).forEach(_),this.h()},h(){k(e,"class","status svelte-bp8tfe"),B(e,"current",s[2]===s[14]),B(e,"success",s[12]===!0),B(e,"error",s[12]===!1)},m(t,l){S(t,e,l)},p(t,l){l&4&&B(e,"current",t[2]===t[14]),l&2&&B(e,"success",t[12]===!0),l&2&&B(e,"error",t[12]===!1)},d(t){t&&_(e)}}}function ce(s){let e,t="Нет",l,n;return{c(){e=V("div"),e.textContent=t,this.h()},l(i){e=C(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-fbe92q"&&(e.textContent=t),this.h()},h(){k(e,"class","button no svelte-bp8tfe")},m(i,a){S(i,e,a),l||(n=T(e,"click",s[6]),l=!0)},p:N,d(i){i&&_(e),l=!1,n()}}}function ue(s){let e,t="Да",l,n;return{c(){e=V("div"),e.textContent=t,this.h()},l(i){e=C(i,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-d2yzxi"&&(e.textContent=t),this.h()},h(){k(e,"class","button yes svelte-bp8tfe")},m(i,a){S(i,e,a),l||(n=T(e,"click",s[5]),l=!0)},p:N,d(i){i&&_(e),l=!1,n()}}}function de(s){let e,t,l,n,i;return t=new ge({}),{c(){e=V("div"),F(t.$$.fragment),this.h()},l(a){e=C(a,"DIV",{class:!0});var o=j(e);H(t.$$.fragment,o),o.forEach(_),this.h()},h(){k(e,"class","button next svelte-bp8tfe")},m(a,o){S(a,e,o),O(t,e,null),l=!0,n||(i=T(e,"click",s[7]),n=!0)},p:N,i(a){l||(L(t.$$.fragment,a),l=!0)},o(a){P(t.$$.fragment,a),l=!1},d(a){a&&_(e),Q(t),n=!1,i()}}}function Ve(s){let e,t,l,n,i,a;const o=[Ee,De],f=[];function E(d,u){return d[0].length?0:1}return e=E(s),t=f[e]=o[e](s),{c(){t.c(),l=se()},l(d){t.l(d),l=se()},m(d,u){f[e].m(d,u),S(d,l,u),n=!0,i||(a=T(window,"keydown",s[4]),i=!0)},p(d,[u]){let m=e;e=E(d),e===m?f[e].p(d,u):(X(),P(f[m],1,1,()=>{f[m]=null}),x(),t=f[e],t?t.p(d,u):(t=f[e]=o[e](d),t.c()),L(t,1),t.m(l.parentNode,l))},i(d){n||(L(t),n=!0)},o(d){P(t),n=!1},d(d){d&&_(l),f[e].d(d),i=!1,a()}}}function Ce(s,e,t){let l;he(s,K,r=>t(9,l=r));let{dict:n=[]}=e,i=[],a=[],o=0,f=!1;function E(){return f?(t(3,f=!1),!0):(t(3,f=!0),U(i[o].audio??""),!1)}function d({key:r}){if(r==="ArrowLeft")return f?h():v();if(r==="ArrowRight"||r==="Enter")return f?h():m()}function u(r){J(K,l[i[o].origin]=l[i[o].origin]||{origin:i[o].origin,count:0,last:0,disabled:!1},l),r?J(K,l[i[o].origin].count+=1,l):J(K,l[i[o].origin].count=0,l),t(1,a[o]=r,a),J(K,l[i[o].origin].last=Date.now(),l)}function m(){u(!0),E()}function v(){u(!1),E()}function h(){o<i.length-1?t(2,o+=1):t(2,o=0),U(i[o].audio??""),t(3,f=!1)}return s.$$set=r=>{"dict"in r&&t(8,n=r.dict)},s.$$.update=()=>{s.$$.dirty&256&&t(0,i=n),s.$$.dirty&3&&t(1,a=i.map((r,g)=>a[g]??null))},[i,a,o,f,d,m,v,h,n]}class je extends ${constructor(e){super(),y(this,e,Ce,Ve,Z,{dict:8})}}function Se(s){let e,t,l;return t=new je({props:{dict:s[0].dict.filter(s[2])}}),{c(){e=V("div"),F(t.$$.fragment),this.h()},l(n){e=C(n,"DIV",{class:!0});var i=j(e);H(t.$$.fragment,i),i.forEach(_),this.h()},h(){k(e,"class","content svelte-w780lm")},m(n,i){S(n,e,i),O(t,e,null),l=!0},p(n,[i]){const a={};i&3&&(a.dict=n[0].dict.filter(n[2])),t.$set(a)},i(n){l||(L(t.$$.fragment,n),l=!0)},o(n){P(t.$$.fragment,n),l=!1},d(n){n&&_(e),Q(t)}}}function Le(s,e,t){let l;he(s,K,a=>t(1,l=a));let{data:n}=e;const i=({origin:a,type:o})=>{var f;return o==="word"&&((f=l[a])==null?void 0:f.disabled)===!1};return s.$$set=a=>{"data"in a&&t(0,n=a.data)},[n,l,i]}class Ae extends ${constructor(e){super(),y(this,e,Le,Se,Z,{data:0})}}export{Ae as component};
