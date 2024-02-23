import{s as Z,e as p,a as B,c as b,b as T,E as U,g as I,f as m,z as C,i as R,h as f,w as F,t as H,d as L,j as P,v as ot}from"../chunks/scheduler.CtJ7a7Qb.js";import{S as x,i as tt,t as O,g as et,d as lt,b as A,c as st,a as at,m as nt,e as rt}from"../chunks/index.DJIWRqSw.js";import{e as S}from"../chunks/each.D6YF6ztN.js";import{I as it,p as ct}from"../chunks/icon-speaker.C7UkEkvv.js";function G(r,t,e){const l=r.slice();return l[2]=t[e],l}function J(r,t,e){const l=r.slice();return l[2]=t[e],l}function K(r){let t,e,l,o,c;e=new it({});function u(){return r[1](r[2])}return{c(){t=p("button"),st(e.$$.fragment),this.h()},l(i){t=b(i,"BUTTON",{class:!0});var g=T(t);at(e.$$.fragment,g),g.forEach(m),this.h()},h(){C(t,"class","svelte-1tsy4q7")},m(i,g){R(i,t,g),nt(e,t,null),l=!0,o||(c=ot(t,"click",u),o=!0)},p(i,g){r=i},i(i){l||(O(e.$$.fragment,i),l=!0)},o(i){A(e.$$.fragment,i),l=!1},d(i){i&&m(t),rt(e),o=!1,c()}}}function M(r){let t,e,l,o=r[2].article+"",c,u,i=r[2].origin+"",g,E,y,h,k=r[2].translate+"",D,w,q,a=r[2].audio&&K(r);return{c(){t=p("tr"),e=p("td"),l=p("div"),c=H(o),u=B(),g=H(i),E=B(),a&&a.c(),y=B(),h=p("td"),D=H(k),w=B(),this.h()},l($){t=b($,"TR",{});var d=T(t);e=b(d,"TD",{class:!0});var _=T(e);l=b(_,"DIV",{class:!0});var n=T(l);c=L(n,o),u=I(n),g=L(n,i),E=I(n),a&&a.l(n),n.forEach(m),_.forEach(m),y=I(d),h=b(d,"TD",{class:!0});var v=T(h);D=L(v,k),v.forEach(m),w=I(d),d.forEach(m),this.h()},h(){C(l,"class","origin svelte-1tsy4q7"),C(e,"class","svelte-1tsy4q7"),C(h,"class","svelte-1tsy4q7")},m($,d){R($,t,d),f(t,e),f(e,l),f(l,c),f(l,u),f(l,g),f(l,E),a&&a.m(l,null),f(t,y),f(t,h),f(h,D),f(t,w),q=!0},p($,d){(!q||d&1)&&o!==(o=$[2].article+"")&&P(c,o),(!q||d&1)&&i!==(i=$[2].origin+"")&&P(g,i),$[2].audio?a?(a.p($,d),d&1&&O(a,1)):(a=K($),a.c(),O(a,1),a.m(l,null)):a&&(et(),A(a,1,1,()=>{a=null}),lt()),(!q||d&1)&&k!==(k=$[2].translate+"")&&P(D,k)},i($){q||(O(a),q=!0)},o($){A(a),q=!1},d($){$&&m(t),a&&a.d()}}}function Q(r){let t,e,l=r[2].origin+"",o,c,u,i=r[2].translate+"",g,E;return{c(){t=p("tr"),e=p("td"),o=H(l),c=B(),u=p("td"),g=H(i),E=B(),this.h()},l(y){t=b(y,"TR",{});var h=T(t);e=b(h,"TD",{class:!0});var k=T(e);o=L(k,l),k.forEach(m),c=I(h),u=b(h,"TD",{class:!0});var D=T(u);g=L(D,i),D.forEach(m),E=I(h),h.forEach(m),this.h()},h(){C(e,"class","svelte-1tsy4q7"),C(u,"class","svelte-1tsy4q7")},m(y,h){R(y,t,h),f(t,e),f(e,o),f(t,c),f(t,u),f(u,g),f(t,E)},p(y,h){h&1&&l!==(l=y[2].origin+"")&&P(o,l),h&1&&i!==(i=y[2].translate+"")&&P(g,i)},d(y){y&&m(t)}}}function ft(r){let t,e,l,o="Слова",c,u,i,g,E,y="Фразы",h,k,D,w,q=S(r[0].filter(W)),a=[];for(let n=0;n<q.length;n+=1)a[n]=M(J(r,q,n));const $=n=>A(a[n],1,1,()=>{a[n]=null});let d=S(r[0].filter(X)),_=[];for(let n=0;n<d.length;n+=1)_[n]=Q(G(r,d,n));return{c(){t=p("div"),e=p("div"),l=p("h2"),l.textContent=o,c=B(),u=p("table"),i=p("tbody");for(let n=0;n<a.length;n+=1)a[n].c();g=B(),E=p("h2"),E.textContent=y,h=B(),k=p("table"),D=p("tbody");for(let n=0;n<_.length;n+=1)_[n].c();this.h()},l(n){t=b(n,"DIV",{class:!0});var v=T(t);e=b(v,"DIV",{class:!0});var s=T(e);l=b(s,"H2",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-gvfsza"&&(l.textContent=o),c=I(s),u=b(s,"TABLE",{class:!0});var V=T(u);i=b(V,"TBODY",{});var Y=T(i);for(let z=0;z<a.length;z+=1)a[z].l(Y);Y.forEach(m),V.forEach(m),g=I(s),E=b(s,"H2",{class:!0,"data-svelte-h":!0}),U(E)!=="svelte-t62g8o"&&(E.textContent=y),h=I(s),k=b(s,"TABLE",{class:!0});var j=T(k);D=b(j,"TBODY",{});var N=T(D);for(let z=0;z<_.length;z+=1)_[z].l(N);N.forEach(m),j.forEach(m),s.forEach(m),v.forEach(m),this.h()},h(){C(l,"class","svelte-1tsy4q7"),C(u,"class","svelte-1tsy4q7"),C(E,"class","svelte-1tsy4q7"),C(k,"class","svelte-1tsy4q7"),C(e,"class","dict"),C(t,"class","content svelte-1tsy4q7")},m(n,v){R(n,t,v),f(t,e),f(e,l),f(e,c),f(e,u),f(u,i);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(i,null);f(e,g),f(e,E),f(e,h),f(e,k),f(k,D);for(let s=0;s<_.length;s+=1)_[s]&&_[s].m(D,null);w=!0},p(n,[v]){if(v&1){q=S(n[0].filter(W));let s;for(s=0;s<q.length;s+=1){const V=J(n,q,s);a[s]?(a[s].p(V,v),O(a[s],1)):(a[s]=M(V),a[s].c(),O(a[s],1),a[s].m(i,null))}for(et(),s=q.length;s<a.length;s+=1)$(s);lt()}if(v&1){d=S(n[0].filter(X));let s;for(s=0;s<d.length;s+=1){const V=G(n,d,s);_[s]?_[s].p(V,v):(_[s]=Q(V),_[s].c(),_[s].m(D,null))}for(;s<_.length;s+=1)_[s].d(1);_.length=d.length}},i(n){if(!w){for(let v=0;v<q.length;v+=1)O(a[v]);w=!0}},o(n){a=a.filter(Boolean);for(let v=0;v<a.length;v+=1)A(a[v]);w=!1},d(n){n&&m(t),F(a,n),F(_,n)}}}function ut(r){ct(r)}const W=({type:r})=>r==="word",X=({type:r})=>r==="phrase";function ht(r,t,e){let{list:l=[]}=t;const o=c=>ut(c.audio??"");return r.$$set=c=>{"list"in c&&e(0,l=c.list)},[l,o]}class dt extends x{constructor(t){super(),tt(this,t,ht,ft,Z,{list:0})}}function _t(r){let t,e,l;return e=new dt({props:{list:r[0].dict}}),{c(){t=p("div"),st(e.$$.fragment),this.h()},l(o){t=b(o,"DIV",{class:!0});var c=T(t);at(e.$$.fragment,c),c.forEach(m),this.h()},h(){C(t,"class","dict svelte-e5vw95")},m(o,c){R(o,t,c),nt(e,t,null),l=!0},p(o,[c]){const u={};c&1&&(u.list=o[0].dict),e.$set(u)},i(o){l||(O(e.$$.fragment,o),l=!0)},o(o){A(e.$$.fragment,o),l=!1},d(o){o&&m(t),rt(e)}}}function vt(r,t,e){let{data:l}=t;return r.$$set=o=>{"data"in o&&e(0,l=o.data)},[l]}class $t extends x{constructor(t){super(),tt(this,t,vt,_t,Z,{data:0})}}export{$t as component};
