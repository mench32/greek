import{s as C,a as A,r as T,g as N,i as h,n as D,f as _,e as p,t as d,c as b,b as v,d as k,o as c,h as E}from"../chunks/scheduler.ijEjBH80.js";import{S as P,i as j}from"../chunks/index.os67wVQB.js";import{b as u}from"../chunks/paths.Cf-cB1Gr.js";function G(n){let e,r,f;return{c(){e=p("a"),r=d("Grammer"),this.h()},l(i){e=b(i,"A",{href:!0});var s=v(e);r=k(s,"Grammer"),s.forEach(_),this.h()},h(){c(e,"href",f=u+"/lessons/"+n[0].lesson+"/grammer")},m(i,s){h(i,e,s),E(e,r)},p(i,s){s&1&&f!==(f=u+"/lessons/"+i[0].lesson+"/grammer")&&c(e,"href",f)},d(i){i&&_(e)}}}function S(n){let e,r,f;return{c(){e=p("a"),r=d("Texts"),this.h()},l(i){e=b(i,"A",{href:!0});var s=v(e);r=k(s,"Texts"),s.forEach(_),this.h()},h(){c(e,"href",f=u+"/lessons/"+n[0].lesson+"/texts")},m(i,s){h(i,e,s),E(e,r)},p(i,s){s&1&&f!==(f=u+"/lessons/"+i[0].lesson+"/texts")&&c(e,"href",f)},d(i){i&&_(e)}}}function q(n){let e,r,f;return{c(){e=p("a"),r=d("Exercises"),this.h()},l(i){e=b(i,"A",{href:!0});var s=v(e);r=k(s,"Exercises"),s.forEach(_),this.h()},h(){c(e,"href",f=u+"/lessons/"+n[0].lesson+"/exercises")},m(i,s){h(i,e,s),E(e,r)},p(i,s){s&1&&f!==(f=u+"/lessons/"+i[0].lesson+"/exercises")&&c(e,"href",f)},d(i){i&&_(e)}}}function y(n){let e,r,f,i,s,o,t;return{c(){e=p("a"),r=d("Dictionary"),i=A(),s=p("a"),o=d("Train"),this.h()},l(a){e=b(a,"A",{href:!0});var l=v(e);r=k(l,"Dictionary"),l.forEach(_),i=N(a),s=b(a,"A",{href:!0});var m=v(s);o=k(m,"Train"),m.forEach(_),this.h()},h(){c(e,"href",f=u+"/lessons/"+n[0].lesson+"/dict"),c(s,"href",t=u+"/lessons/"+n[0].lesson+"/train")},m(a,l){h(a,e,l),E(e,r),h(a,i,l),h(a,s,l),E(s,o)},p(a,l){l&1&&f!==(f=u+"/lessons/"+a[0].lesson+"/dict")&&c(e,"href",f),l&1&&t!==(t=u+"/lessons/"+a[0].lesson+"/train")&&c(s,"href",t)},d(a){a&&(_(e),_(i),_(s))}}}function w(n){let e,r,f,i,s=n[0].grammer&&G(n),o=n[0].texts&&S(n),t=n[0].exercises&&q(n),a=n[0].dict&&y(n);return{c(){s&&s.c(),e=A(),o&&o.c(),r=A(),t&&t.c(),f=A(),a&&a.c(),i=T()},l(l){s&&s.l(l),e=N(l),o&&o.l(l),r=N(l),t&&t.l(l),f=N(l),a&&a.l(l),i=T()},m(l,m){s&&s.m(l,m),h(l,e,m),o&&o.m(l,m),h(l,r,m),t&&t.m(l,m),h(l,f,m),a&&a.m(l,m),h(l,i,m)},p(l,[m]){l[0].grammer?s?s.p(l,m):(s=G(l),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),l[0].texts?o?o.p(l,m):(o=S(l),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null),l[0].exercises?t?t.p(l,m):(t=q(l),t.c(),t.m(f.parentNode,f)):t&&(t.d(1),t=null),l[0].dict?a?a.p(l,m):(a=y(l),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i:D,o:D,d(l){l&&(_(e),_(r),_(f),_(i)),s&&s.d(l),o&&o.d(l),t&&t.d(l),a&&a.d(l)}}}function z(n,e,r){let{data:f}=e;return n.$$set=i=>{"data"in i&&r(0,f=i.data)},[f]}class I extends P{constructor(e){super(),j(this,e,z,w,C,{data:0})}}export{I as component};
