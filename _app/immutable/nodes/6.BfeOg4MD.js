import{s as he,v as ue,a as O,e as w,t as G,g as T,c as E,b as S,f as p,d as R,w as _e,r as B,i as q,h as m,x as Z,y,z as de,j as x,A as ee,B as me,k as pe,H as ge,q as ve,C as be,n as $e,D as ke}from"../chunks/scheduler.Bnj1SVgQ.js";import{S as we,i as Ee,e as Se,c as K,a as M,m as Q,t as k,b as I,f as te,d as U,g as le}from"../chunks/index.Ce-6FrRM.js";import{e as j}from"../chunks/each.D6YF6ztN.js";import{B as ze,S as He,H as Ne,D as se}from"../chunks/button-info.AoV3nmI2.js";import{p as De}from"../chunks/stores.CHvjzrxE.js";function ae(a,t,l){const s=a.slice();return s[10]=t[l],s}function ne(a,t,l){const s=a.slice();return s[13]=t[l],s[15]=l,s}function oe(a){let t,l;return t=new He({props:{showHeader:!0,$$slots:{default:[Ie]},$$scope:{ctx:a}}}),t.$on("close",a[4]),{c(){K(t.$$.fragment)},l(s){M(t.$$.fragment,s)},m(s,o){Q(t,s,o),l=!0},p(s,o){const n={};o&65537&&(n.$$scope={dirty:o,ctx:s}),t.$set(n)},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){I(t.$$.fragment,s),l=!1},d(s){U(t,s)}}}function Ie(a){let t,l,s=a[0].short+"";return{c(){t=w("span"),l=new ge(!1),this.h()},l(o){t=E(o,"SPAN",{class:!0});var n=S(t);l=ve(n,!1),n.forEach(p),this.h()},h(){l.a=null,B(t,"class","md")},m(o,n){q(o,t,n),l.m(s,t)},p(o,n){n&1&&s!==(s=o[0].short+"")&&l.p(s)},d(o){o&&p(t)}}}function ie(a){let t,l,s=a[15]+1+"",o;return{c(){t=w("option"),l=G("Упражнение №"),o=G(s),this.h()},l(n){t=E(n,"OPTION",{class:!0});var c=S(t);l=R(c,"Упражнение №"),o=R(c,s),c.forEach(p),this.h()},h(){B(t,"class","menu-item svelte-19p8z2u"),t.__value=a[15],be(t,t.__value)},m(n,c){q(n,t,c),m(t,l),m(t,o)},p:$e,d(n){n&&p(t)}}}function re(a){let t,l,s,o;return l=new Ne({props:{text:a[10],words:[["font-weight: 600;",a[0].exercises[a[2]].hilights],["color: steelblue;",se]]}}),{c(){t=w("li"),K(l.$$.fragment),s=O(),this.h()},l(n){t=E(n,"LI",{class:!0});var c=S(t);M(l.$$.fragment,c),s=T(c),c.forEach(p),this.h()},h(){B(t,"class","svelte-19p8z2u")},m(n,c){q(n,t,c),Q(l,t,null),m(t,s),o=!0},p(n,c){const g={};c&5&&(g.text=n[10]),c&5&&(g.words=[["font-weight: 600;",n[0].exercises[n[2]].hilights],["color: steelblue;",se]]),l.$set(g)},i(n){o||(k(l.$$.fragment,n),o=!0)},o(n){I(l.$$.fragment,n),o=!1},d(n){n&&p(t),U(l)}}}function Be(a){let t,l,s,o,n,c,g,$,v,z=a[0].exercises[a[2]].title+"",C,V,d=a[0].exercises[a[2]].hilights+"",P,F,H,A,J,W,h=a[1]&&oe(a),L=j(a[0].exercises),u=[];for(let e=0;e<L.length;e+=1)u[e]=ie(ne(a,L,e));function ce(e){a[6](e)}let X={};a[1]!==void 0&&(X.checked=a[1]),c=new ze({props:X}),ue.push(()=>Se(c,"checked",ce));let N=j(a[0].exercises[a[2]].words),f=[];for(let e=0;e<N.length;e+=1)f[e]=re(ae(a,N,e));const fe=e=>I(f[e],1,1,()=>{f[e]=null});return{c(){h&&h.c(),t=O(),l=w("div"),s=w("div"),o=w("select");for(let e=0;e<u.length;e+=1)u[e].c();n=O(),K(c.$$.fragment),$=O(),v=w("div"),C=G(z),V=O(),P=G(d),F=O(),H=w("ol");for(let e=0;e<f.length;e+=1)f[e].c();this.h()},l(e){h&&h.l(e),t=T(e),l=E(e,"DIV",{class:!0});var r=S(l);s=E(r,"DIV",{class:!0});var _=S(s);o=E(_,"SELECT",{});var i=S(o);for(let D=0;D<u.length;D+=1)u[D].l(i);i.forEach(p),n=T(_),M(c.$$.fragment,_),_.forEach(p),$=T(r),v=E(r,"DIV",{class:!0});var b=S(v);C=R(b,z),V=T(b),P=R(b,d),b.forEach(p),F=T(r),H=E(r,"OL",{class:!0});var Y=S(H);for(let D=0;D<f.length;D+=1)f[D].l(Y);Y.forEach(p),r.forEach(p),this.h()},h(){a[2]===void 0&&_e(()=>a[5].call(o)),B(s,"class","controls svelte-19p8z2u"),B(v,"class","title svelte-19p8z2u"),B(H,"class","svelte-19p8z2u"),B(l,"class","content svelte-19p8z2u")},m(e,r){h&&h.m(e,r),q(e,t,r),q(e,l,r),m(l,s),m(s,o);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(o,null);Z(o,a[2],!0),m(s,n),Q(c,s,null),m(l,$),m(l,v),m(v,C),m(v,V),m(v,P),m(l,F),m(l,H);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(H,null);A=!0,J||(W=[y(o,"change",a[5]),y(o,"change",a[3])],J=!0)},p(e,[r]){if(e[1]?h?(h.p(e,r),r&2&&k(h,1)):(h=oe(e),h.c(),k(h,1),h.m(t.parentNode,t)):h&&(le(),I(h,1,1,()=>{h=null}),te()),r&1){L=j(e[0].exercises);let i;for(i=0;i<L.length;i+=1){const b=ne(e,L,i);u[i]?u[i].p(b,r):(u[i]=ie(b),u[i].c(),u[i].m(o,null))}for(;i<u.length;i+=1)u[i].d(1);u.length=L.length}r&4&&Z(o,e[2]);const _={};if(!g&&r&2&&(g=!0,_.checked=e[1],de(()=>g=!1)),c.$set(_),(!A||r&5)&&z!==(z=e[0].exercises[e[2]].title+"")&&x(C,z),(!A||r&5)&&d!==(d=e[0].exercises[e[2]].hilights+"")&&x(P,d),r&5){N=j(e[0].exercises[e[2]].words);let i;for(i=0;i<N.length;i+=1){const b=ae(e,N,i);f[i]?(f[i].p(b,r),k(f[i],1)):(f[i]=re(b),f[i].c(),k(f[i],1),f[i].m(H,null))}for(le(),i=N.length;i<f.length;i+=1)fe(i);te()}},i(e){if(!A){k(h),k(c.$$.fragment,e);for(let r=0;r<N.length;r+=1)k(f[r]);A=!0}},o(e){I(h),I(c.$$.fragment,e),f=f.filter(Boolean);for(let r=0;r<f.length;r+=1)I(f[r]);A=!1},d(e){e&&(p(t),p(l)),h&&h.d(e),ee(u,e),U(c),ee(f,e),J=!1,me(W)}}}function Ce(a,t,l){let s;pe(a,De,d=>l(7,s=d));let{data:o}=t,n=!1;const c=s.url.hash||"#1",g=Number(c.replace("#",""));let $=!g||isNaN(g)?1:g-1;function v(d){const P=d.target;l(2,$=Number(P.value)),window.location.hash=`#${$+1}`}const z=()=>l(1,n=!1);function C(){$=ke(this),l(2,$)}function V(d){n=d,l(1,n)}return a.$$set=d=>{"data"in d&&l(0,o=d.data)},[o,n,$,v,z,C,V]}class Ve extends we{constructor(t){super(),Ee(this,t,Ce,Be,he,{data:0})}}export{Ve as component};
