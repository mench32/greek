import{s as K,e as d,a as y,c as b,b as L,f as _,g as E,q as A,i as k,l as M,p as q,h as g,z,u as O,m as Q,o as W,B as X}from"./scheduler.DHbXqC6-.js";import{S as Y,i as Z,c as G,a as j,m as F,t as H,b as U,d as J}from"./index.DmtaVaTq.js";import{C as $,H as ee,A as te,D as se}from"./highlight.CcJb6eaN.js";function le(a){let o,e,u,h,c,m="Диграфы",t,l,n,f,C,P="Артикли",x,r,v,T,w,R="Перевод",I,D,V;const B=a[6].default,p=M(B,a,a[10],null);return{c(){p&&p.c(),o=y(),e=d("label"),u=d("input"),h=y(),c=d("span"),c.textContent=m,t=y(),l=d("label"),n=d("input"),f=y(),C=d("span"),C.textContent=P,x=y(),r=d("label"),v=d("input"),T=y(),w=d("span"),w.textContent=R,this.h()},l(s){p&&p.l(s),o=E(s),e=b(s,"LABEL",{});var i=L(e);u=b(i,"INPUT",{class:!0,type:!0}),h=E(i),c=b(i,"SPAN",{"data-svelte-h":!0}),q(c)!=="svelte-tzz8my"&&(c.textContent=m),i.forEach(_),t=E(s),l=b(s,"LABEL",{});var S=L(l);n=b(S,"INPUT",{class:!0,type:!0}),f=E(S),C=b(S,"SPAN",{"data-svelte-h":!0}),q(C)!=="svelte-18k2fh3"&&(C.textContent=P),S.forEach(_),x=E(s),r=b(s,"LABEL",{});var N=L(r);v=b(N,"INPUT",{class:!0,type:!0}),T=E(N),w=b(N,"SPAN",{"data-svelte-h":!0}),q(w)!=="svelte-x3aq15"&&(w.textContent=R),N.forEach(_),this.h()},h(){A(u,"class","checkbox svelte-1so8uby"),A(u,"type","checkbox"),A(n,"class","checkbox svelte-1so8uby"),A(n,"type","checkbox"),A(v,"class","checkbox svelte-1so8uby"),A(v,"type","checkbox")},m(s,i){p&&p.m(s,i),k(s,o,i),k(s,e,i),g(e,u),u.checked=a[1],g(e,h),g(e,c),k(s,t,i),k(s,l,i),g(l,n),n.checked=a[2],g(l,f),g(l,C),k(s,x,i),k(s,r,i),g(r,v),v.checked=a[3],g(r,T),g(r,w),I=!0,D||(V=[z(u,"change",a[7]),z(n,"change",a[8]),z(v,"change",a[9])],D=!0)},p(s,i){p&&p.p&&(!I||i&1024)&&O(p,B,s,s[10],I?W(B,s[10],i,null):Q(s[10]),null),i&2&&(u.checked=s[1]),i&4&&(n.checked=s[2]),i&8&&(v.checked=s[3])},i(s){I||(H(p,s),I=!0)},o(s){U(p,s),I=!1},d(s){s&&(_(o),_(e),_(t),_(l),_(x),_(r)),p&&p.d(s),D=!1,X(V)}}}function ne(a){let o,e,u,h,c,m;return e=new $({props:{$$slots:{default:[le]},$$scope:{ctx:a}}}),c=new ee({props:{text:a[0],words:a[4]}}),{c(){o=d("div"),G(e.$$.fragment),u=y(),h=d("div"),G(c.$$.fragment),this.h()},l(t){o=b(t,"DIV",{class:!0});var l=L(o);j(e.$$.fragment,l),l.forEach(_),u=E(t),h=b(t,"DIV",{class:!0});var n=L(h);j(c.$$.fragment,n),n.forEach(_),this.h()},h(){A(o,"class","controls svelte-1so8uby"),A(h,"class","md")},m(t,l){k(t,o,l),F(e,o,null),k(t,u,l),k(t,h,l),F(c,h,null),m=!0},p(t,[l]){const n={};l&1038&&(n.$$scope={dirty:l,ctx:t}),e.$set(n);const f={};l&1&&(f.text=t[0]),l&16&&(f.words=t[4]),c.$set(f)},i(t){m||(H(e.$$.fragment,t),H(c.$$.fragment,t),m=!0)},o(t){U(e.$$.fragment,t),U(c.$$.fragment,t),m=!1},d(t){t&&(_(o),_(u),_(h)),J(e),J(c)}}}function ae(a,o,e){let{$$slots:u={},$$scope:h}=o,{text:c}=o,{dict:m}=o,t=!0,l=!0,n=!0,f=[];function C(){t=this.checked,e(1,t)}function P(){l=this.checked,e(2,l)}function x(){n=this.checked,e(3,n)}return a.$$set=r=>{"text"in r&&e(0,c=r.text),"dict"in r&&e(5,m=r.dict),"$$scope"in r&&e(10,h=r.$$scope)},a.$$.update=()=>{a.$$.dirty&62&&(e(4,f=[]),n&&f.push(["color: steelblue;",m]),l&&f.push(["color: coral;",te]),t&&f.push(["text-decoration: underline;",se]),e(4,f),e(3,n),e(5,m),e(2,l),e(1,t))},[c,t,l,n,f,m,u,C,P,x,h]}class ue extends Y{constructor(o){super(),Z(this,o,ae,ne,K,{text:0,dict:5})}}export{ue as T};
