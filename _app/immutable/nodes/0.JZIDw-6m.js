import{s as D,l as F,e as m,a as N,c as d,b,f as _,g as O,r as f,i as p,u as j,m as L,o as M,v as P,E as k,t as v,d as E,h as g,n as B}from"../chunks/scheduler.BHoQAHbm.js";import{S as T,i as q,t as z,b as I}from"../chunks/index.C_AqDGW-.js";import{e as A}from"../chunks/each.D6YF6ztN.js";import{b as U}from"../chunks/paths.DvHnJ98j.js";const V=!0,Y=Object.freeze(Object.defineProperty({__proto__:null,prerender:V},Symbol.toStringTag,{value:"Module"}));function S(n,e,o){const a=n.slice();return a[2]=e[o],a[4]=o,a}function w(n){let e,o,a;return{c(){e=m("span"),o=v("Урок №"),a=v(n[4]),this.h()},l(l){e=d(l,"SPAN",{title:!0,class:!0});var t=b(e);o=E(t,"Урок №"),a=E(t,n[4]),t.forEach(_),this.h()},h(){f(e,"title",C[n[4]]),f(e,"class","item svelte-pleh9s")},m(l,t){p(l,e,t),g(e,o),g(e,a)},p:B,d(l){l&&_(e)}}}function G(n){let e,o,a;return{c(){e=m("a"),o=v("Урок №"),a=v(n[4]),this.h()},l(l){e=d(l,"A",{title:!0,class:!0,href:!0});var t=b(e);o=E(t,"Урок №"),a=E(t,n[4]),t.forEach(_),this.h()},h(){f(e,"title",C[n[4]]),f(e,"class","item svelte-pleh9s"),f(e,"href",U+"/"+n[4])},m(l,t){p(l,e,t),g(e,o),g(e,a)},p:B,d(l){l&&_(e)}}}function $(n){let e;function o(t,s){return t[4]<=J?G:w}let l=o(n)(n);return{c(){l.c(),e=k()},l(t){l.l(t),e=k()},m(t,s){l.m(t,s),p(t,e,s)},p(t,s){l.p(t,s)},d(t){t&&_(e),l.d(t)}}}function H(n){let e,o,a,l,t=A({length:21}),s=[];for(let u=0;u<t.length;u+=1)s[u]=$(S(n,t,u));const y=n[1].default,i=F(y,n,n[0],null);return{c(){e=m("nav");for(let u=0;u<s.length;u+=1)s[u].c();o=N(),a=m("main"),i&&i.c(),this.h()},l(u){e=d(u,"NAV",{class:!0});var c=b(e);for(let h=0;h<s.length;h+=1)s[h].l(c);c.forEach(_),o=O(u),a=d(u,"MAIN",{class:!0});var r=b(a);i&&i.l(r),r.forEach(_),this.h()},h(){f(e,"class","svelte-pleh9s"),f(a,"class","svelte-pleh9s")},m(u,c){p(u,e,c);for(let r=0;r<s.length;r+=1)s[r]&&s[r].m(e,null);p(u,o,c),p(u,a,c),i&&i.m(a,null),l=!0},p(u,[c]){if(c&0){t=A({length:21});let r;for(r=0;r<t.length;r+=1){const h=S(u,t,r);s[r]?s[r].p(h,c):(s[r]=$(h),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=t.length}i&&i.p&&(!l||c&1)&&j(i,y,u,u[0],l?M(y,u[0],c,null):L(u[0]),null)},i(u){l||(z(i,u),l=!0)},o(u){I(i,u),l=!1},d(u){u&&(_(e),_(o),_(a)),P(s,u),i&&i.d(u)}}}const J=2,C=["Вводно-фонетический курс","Артикль, Имя существительное, Виды предложений, Порядок слов в предложени"];function K(n,e,o){let{$$slots:a={},$$scope:l}=e;return n.$$set=t=>{"$$scope"in t&&o(0,l=t.$$scope)},[l,a]}class Z extends T{constructor(e){super(),q(this,e,K,H,D,{})}}export{Z as component,Y as universal};
