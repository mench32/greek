import{s as H,K as oe,L as ae,b as L,f as m,o as k,i as S,h as D,n as N,e as V,t as R,a as T,c as C,d as Y,g as A,x as J,j as Z,O as pe,l as ke,u as be,p as we,q as Ie,r as ce,k as ge,G as Ee,J as te,y as De,N as K,M as O,m as Ve}from"../chunks/scheduler.BX8YVY3S.js";import{S as Q,i as U,t as j,g as y,b as M,d as F,c as W,a as X,m as $,e as x}from"../chunks/index.CpUgF7Al.js";import{I as Ce,t as z}from"../chunks/icon-speaker.CTWZjvKh.js";import{e as ue}from"../chunks/each.D6YF6ztN.js";import{p as ee}from"../chunks/audio.DeAYY8kc.js";function je(i){let e,l;return{c(){e=oe("svg"),l=oe("path"),this.h()},l(t){e=ae(t,"svg",{width:!0,height:!0,fill:!0,viewBox:!0,xmlns:!0});var s=L(e);l=ae(s,"path",{d:!0}),L(l).forEach(m),s.forEach(m),this.h()},h(){k(l,"d","M8.293 4.293a1 1 0 0 0 0 1.414L14.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414l7-7a1 1 0 0 0 0-1.414l-7-7a1 1 0 0 0-1.414 0Z"),k(e,"width","24"),k(e,"height","24"),k(e,"fill","none"),k(e,"viewBox","0 0 24 24"),k(e,"xmlns","http://www.w3.org/2000/svg")},m(t,s){S(t,e,s),D(e,l)},p:N,i:N,o:N,d(t){t&&m(e)}}}class Se extends Q{constructor(e){super(),U(this,e,null,je,H,{})}}function fe(i){let e,l,t,s,n;return l=new Ce({}),{c(){e=V("div"),W(l.$$.fragment),this.h()},l(r){e=C(r,"DIV",{class:!0});var o=L(e);X(l.$$.fragment,o),o.forEach(m),this.h()},h(){k(e,"class","button svelte-p1rpjk")},m(r,o){S(r,e,o),$(l,e,null),t=!0,s||(n=J(e,"click",i[6]),s=!0)},p:N,i(r){t||(j(l.$$.fragment,r),t=!0)},o(r){M(l.$$.fragment,r),t=!1},d(r){r&&m(e),x(l),s=!1,n()}}}function Le(i){let e;const l=i[4].default,t=ke(l,i,i[3],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,n){t&&t.m(s,n),e=!0},p(s,n){t&&t.p&&(!e||n&8)&&be(t,l,s,s[3],e?Ie(l,s[3],n,null):we(s[3]),null)},i(s){e||(j(t,s),e=!0)},o(s){M(t,s),e=!1},d(s){t&&t.d(s)}}}function Me(i){let e,l=i[0].translate+"",t;return{c(){e=V("div"),t=R(l),this.h()},l(s){e=C(s,"DIV",{class:!0});var n=L(e);t=Y(n,l),n.forEach(m),this.h()},h(){k(e,"class","translate svelte-p1rpjk")},m(s,n){S(s,e,n),D(e,t)},p(s,n){n&1&&l!==(l=s[0].translate+"")&&Z(t,l)},i:N,o:N,d(s){s&&m(e)}}}function Ne(i){var se,ie;let e,l,t,s,n,r=(((se=i[0])==null?void 0:se.article)??"")+"",o,c,_=((ie=i[0])==null?void 0:ie.origin)+"",u,v,p,h,d,a,f,g,I,G,b=i[0].audio&&fe(i);const le=[Me,Le],q=[];function ne(w,E){return w[2]?0:1}return h=ne(i),d=q[h]=le[h](i),{c(){e=V("div"),l=V("div"),t=R(i[1]),s=T(),n=V("div"),o=R(r),c=T(),u=R(_),v=T(),b&&b.c(),p=T(),d.c(),a=T(),f=V("div"),this.h()},l(w){e=C(w,"DIV",{class:!0});var E=L(e);l=C(E,"DIV",{class:!0});var B=L(l);t=Y(B,i[1]),B.forEach(m),s=A(E),n=C(E,"DIV",{class:!0});var P=L(n);o=Y(P,r),c=A(P),u=Y(P,_),v=A(P),b&&b.l(P),P.forEach(m),p=A(E),d.l(E),a=A(E),f=C(E,"DIV",{}),L(f).forEach(m),E.forEach(m),this.h()},h(){k(l,"class","count svelte-p1rpjk"),k(n,"class","origin svelte-p1rpjk"),k(e,"class","card svelte-p1rpjk")},m(w,E){S(w,e,E),D(e,l),D(l,t),D(e,s),D(e,n),D(n,o),D(n,c),D(n,u),D(n,v),b&&b.m(n,null),D(e,p),q[h].m(e,null),D(e,a),D(e,f),g=!0,I||(G=J(e,"click",i[5]),I=!0)},p(w,[E]){var P,re;(!g||E&2)&&Z(t,w[1]),(!g||E&1)&&r!==(r=(((P=w[0])==null?void 0:P.article)??"")+"")&&Z(o,r),(!g||E&1)&&_!==(_=((re=w[0])==null?void 0:re.origin)+"")&&Z(u,_),w[0].audio?b?(b.p(w,E),E&1&&j(b,1)):(b=fe(w),b.c(),j(b,1),b.m(n,null)):b&&(y(),M(b,1,1,()=>{b=null}),F());let B=h;h=ne(w),h===B?q[h].p(w,E):(y(),M(q[B],1,1,()=>{q[B]=null}),F(),d=q[h],d?d.p(w,E):(d=q[h]=le[h](w),d.c()),j(d,1),d.m(e,a))},i(w){g||(j(b),j(d),g=!0)},o(w){M(b),M(d),g=!1},d(w){w&&m(e),b&&b.d(),q[h].d(),I=!1,G()}}}function Te(i){ee(i)}function Ae(i,e,l){let{$$slots:t={},$$scope:s}=e,{dict:n}=e,{count:r}=e,{show:o=!1}=e;function c(u){pe.call(this,i,u)}const _=()=>Te(n.audio??"");return i.$$set=u=>{"dict"in u&&l(0,n=u.dict),"count"in u&&l(1,r=u.count),"show"in u&&l(2,o=u.show),"$$scope"in u&&l(3,s=u.$$scope)},[n,r,o,s,t,c,_]}class Ge extends Q{constructor(e){super(),U(this,e,Ae,Ne,H,{dict:0,count:1,show:2})}}function de(i,e,l){const t=i.slice();return t[13]=e[l],t[15]=l,t}function Pe(i){let e,l="Нет слов для изучения";return{c(){e=V("p"),e.textContent=l},l(t){e=C(t,"P",{"data-svelte-h":!0}),te(e)!=="svelte-l49rcm"&&(e.textContent=l)},m(t,s){S(t,e,s)},p:N,i:N,o:N,d(t){t&&m(e)}}}function qe(i){let e,l,t,s,n,r,o,c,_,u=ue(i[1]),v=[];for(let a=0;a<u.length;a+=1)v[a]=_e(de(i,u,a));n=new Ge({props:{dict:i[0][i[2]],count:i[2]+1+"/"+i[0].length,show:i[3]}});let p=!i[3]&&he(i),h=!i[3]&&me(i),d=i[3]&&ve(i);return{c(){e=V("div");for(let a=0;a<v.length;a+=1)v[a].c();l=T(),t=V("div"),s=V("div"),W(n.$$.fragment),r=T(),p&&p.c(),o=T(),h&&h.c(),c=T(),d&&d.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var f=L(e);for(let G=0;G<v.length;G+=1)v[G].l(f);f.forEach(m),l=A(a),t=C(a,"DIV",{class:!0});var g=L(t);s=C(g,"DIV",{class:!0});var I=L(s);X(n.$$.fragment,I),I.forEach(m),r=A(g),p&&p.l(g),o=A(g),h&&h.l(g),c=A(g),d&&d.l(g),g.forEach(m),this.h()},h(){k(e,"class","status-list svelte-r14k57"),k(s,"class","card svelte-r14k57"),k(t,"class","train svelte-r14k57")},m(a,f){S(a,e,f);for(let g=0;g<v.length;g+=1)v[g]&&v[g].m(e,null);S(a,l,f),S(a,t,f),D(t,s),$(n,s,null),D(t,r),p&&p.m(t,null),D(t,o),h&&h.m(t,null),D(t,c),d&&d.m(t,null),_=!0},p(a,f){if(f&6){u=ue(a[1]);let I;for(I=0;I<u.length;I+=1){const G=de(a,u,I);v[I]?v[I].p(G,f):(v[I]=_e(G),v[I].c(),v[I].m(e,null))}for(;I<v.length;I+=1)v[I].d(1);v.length=u.length}const g={};f&5&&(g.dict=a[0][a[2]]),f&5&&(g.count=a[2]+1+"/"+a[0].length),f&8&&(g.show=a[3]),n.$set(g),a[3]?p&&(p.d(1),p=null):p?p.p(a,f):(p=he(a),p.c(),p.m(t,o)),a[3]?h&&(h.d(1),h=null):h?h.p(a,f):(h=me(a),h.c(),h.m(t,c)),a[3]?d?(d.p(a,f),f&8&&j(d,1)):(d=ve(a),d.c(),j(d,1),d.m(t,null)):d&&(y(),M(d,1,1,()=>{d=null}),F())},i(a){_||(j(n.$$.fragment,a),j(d),_=!0)},o(a){M(n.$$.fragment,a),M(d),_=!1},d(a){a&&(m(e),m(l),m(t)),De(v,a),x(n),p&&p.d(),h&&h.d(),d&&d.d()}}}function _e(i){let e;return{c(){e=V("div"),this.h()},l(l){e=C(l,"DIV",{class:!0}),L(e).forEach(m),this.h()},h(){k(e,"class","status svelte-r14k57"),K(e,"current",i[2]===i[15]),K(e,"success",i[13]===!0),K(e,"error",i[13]===!1)},m(l,t){S(l,e,t)},p(l,t){t&4&&K(e,"current",l[2]===l[15]),t&2&&K(e,"success",l[13]===!0),t&2&&K(e,"error",l[13]===!1)},d(l){l&&m(e)}}}function he(i){let e,l="Нет",t,s;return{c(){e=V("div"),e.textContent=l,this.h()},l(n){e=C(n,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1duhrh"&&(e.textContent=l),this.h()},h(){k(e,"class","button large no svelte-r14k57")},m(n,r){S(n,e,r),t||(s=J(e,"click",i[6]),t=!0)},p:N,d(n){n&&m(e),t=!1,s()}}}function me(i){let e,l="Да",t,s;return{c(){e=V("div"),e.textContent=l,this.h()},l(n){e=C(n,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1taabih"&&(e.textContent=l),this.h()},h(){k(e,"class","button large yes svelte-r14k57")},m(n,r){S(n,e,r),t||(s=J(e,"click",i[5]),t=!0)},p:N,d(n){n&&m(e),t=!1,s()}}}function ve(i){let e,l,t,s,n;return l=new Se({}),{c(){e=V("div"),W(l.$$.fragment),this.h()},l(r){e=C(r,"DIV",{class:!0});var o=L(e);X(l.$$.fragment,o),o.forEach(m),this.h()},h(){k(e,"class","button large next svelte-r14k57")},m(r,o){S(r,e,o),$(l,e,null),t=!0,s||(n=J(e,"click",i[7]),s=!0)},p:N,i(r){t||(j(l.$$.fragment,r),t=!0)},o(r){M(l.$$.fragment,r),t=!1},d(r){r&&m(e),x(l),s=!1,n()}}}function Be(i){let e,l,t,s,n,r;const o=[qe,Pe],c=[];function _(u,v){return u[0].length?0:1}return e=_(i),l=c[e]=o[e](i),{c(){l.c(),t=ce()},l(u){l.l(u),t=ce()},m(u,v){c[e].m(u,v),S(u,t,v),s=!0,n||(r=J(window,"keydown",i[4]),n=!0)},p(u,[v]){let p=e;e=_(u),e===p?c[e].p(u,v):(y(),M(c[p],1,1,()=>{c[p]=null}),F(),l=c[e],l?l.p(u,v):(l=c[e]=o[e](u),l.c()),j(l,1),l.m(t.parentNode,t))},i(u){s||(j(l),s=!0)},o(u){M(l),s=!1},d(u){u&&m(t),c[e].d(u),n=!1,r()}}}function Ke(i,e,l){let t;ge(i,z,f=>l(10,t=f));let{dict:s=[]}=e,n=[],r=[],o=0,c=!1,_=null;Ee(()=>{l(0,n=s.sort((f,g)=>t[f.origin].last-t[g.origin].last)),l(3,c=n[0]?t[n[0].origin].count===0:!1),_=n[0]?t[n[0].origin].count===0:null});function u(){return c?(l(3,c=!1),!0):(l(3,c=!0),ee(n[o].audio??""),!1)}function v({key:f}){if(f==="ArrowLeft")return c?a():d();if(f==="ArrowRight"||f==="Enter")return c?a():h()}function p(f){O(z,t[n[o].origin]=t[n[o].origin]||{origin:n[o].origin,count:0,last:0,disabled:!1},t),f?O(z,t[n[o].origin].count+=1,t):O(z,t[n[o].origin].count=0,t),l(1,r[o]=f,r),O(z,t[n[o].origin].last=Date.now(),t)}function h(){_=!0,u()}function d(){_=!1,u()}async function a(){p(_??!1),_=null,o<n.length-1?l(2,o+=1):(l(2,o=0),l(0,n=n.filter(f=>t[f.origin].count<5))),l(3,c=t[n[o].origin].count===0),_=!0,setTimeout(()=>{ee(n[o].audio??"")})}return i.$$set=f=>{"dict"in f&&l(8,s=f.dict)},i.$$.update=()=>{i.$$.dirty&3&&l(1,r=n.map((f,g)=>r[g]??null))},[n,r,o,c,v,h,d,a,s]}class ze extends Q{constructor(e){super(),U(this,e,Ke,Be,H,{dict:8})}}function Je(i){let e,l,t,s,n,r,o;return document.title=e="Greek: Урок "+i[0].lesson+" – Изучение слов",r=new ze({props:{dict:i[0].dict.filter(i[2])}}),{c(){l=V("meta"),s=T(),n=V("div"),W(r.$$.fragment),this.h()},l(c){const _=Ve("svelte-2zr8bx",document.head);l=C(_,"META",{name:!0,content:!0}),_.forEach(m),s=A(c),n=C(c,"DIV",{class:!0});var u=L(n);X(r.$$.fragment,u),u.forEach(m),this.h()},h(){k(l,"name","description"),k(l,"content",t="Сайт для изучения Греческого языка, Урок №"+i[0].lesson+", Изучение слов."),k(n,"class","content svelte-w780lm")},m(c,_){D(document.head,l),S(c,s,_),S(c,n,_),$(r,n,null),o=!0},p(c,[_]){(!o||_&1)&&e!==(e="Greek: Урок "+c[0].lesson+" – Изучение слов")&&(document.title=e),(!o||_&1&&t!==(t="Сайт для изучения Греческого языка, Урок №"+c[0].lesson+", Изучение слов."))&&k(l,"content",t);const u={};_&3&&(u.dict=c[0].dict.filter(c[2])),r.$set(u)},i(c){o||(j(r.$$.fragment,c),o=!0)},o(c){M(r.$$.fragment,c),o=!1},d(c){c&&(m(s),m(n)),m(l),x(r)}}}function Oe(i,e,l){let t;ge(i,z,r=>l(1,t=r));let{data:s}=e;const n=({origin:r,type:o})=>{var c,_;return o==="word"&&((c=t[r])==null?void 0:c.disabled)===!1&&((_=t[r])==null?void 0:_.count)<5};return i.$$set=r=>{"data"in r&&l(0,s=r.data)},[s,t,n]}class He extends Q{constructor(e){super(),U(this,e,Oe,Je,H,{data:0})}}export{He as component};
