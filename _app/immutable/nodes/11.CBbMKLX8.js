import{s as m,e as p,c as _,b,f as c,i as w,G as k,I as H,D as M,o as S,k as D,n as I}from"../chunks/scheduler.ijEjBH80.js";import{S as y,i as E,c as L,a as A,m as x,t as u,b as f,e as T,d as q,g as C}from"../chunks/index.os67wVQB.js";import{b as P}from"../chunks/paths.Cf-cB1Gr.js";import{p as z}from"../chunks/audio.DeAYY8kc.js";import{H as G,A as R,D as V}from"../chunks/common.consts.Cqy0S1Qp.js";import{s as K}from"../chunks/settings.B63KtCET.js";function W(e){let t,n,o;return n=new G({props:{text:e[1],words:e[0]}}),{c(){t=p("div"),L(n.$$.fragment)},l(r){t=_(r,"DIV",{});var s=b(t);A(n.$$.fragment,s),s.forEach(c)},m(r,s){w(r,t,s),x(n,t,null),e[3](t),o=!0},p(r,[s]){const i={};s&2&&(i.text=r[1]),s&1&&(i.words=r[0]),n.$set(i)},i(r){o||(u(n.$$.fragment,r),o=!0)},o(r){f(n.$$.fragment,r),o=!1},d(r){r&&c(t),T(n),e[3](null)}}}function j(e){if(e&&e instanceof HTMLElement){const t=e.getAttribute("data-placeholder")??"",n=Math.max(3,t.length);e.style.minWidth=`calc(${n}ch + 1ch)`}}function g(e){if(e.target instanceof HTMLElement){const t=e.target.innerText;if(e.target.querySelectorAll("br").forEach(n=>n.remove()),(e.target.querySelectorAll("br").length||t.trim()!==e.target.innerHTML.trim())&&(e.target.innerHTML=t),e.key==="Enter"){const n=e.target.getAttribute("data-answer");t.trim().toLowerCase()===n?(e.target.classList.remove("error"),e.target.removeAttribute("contenteditable"),z(`${P}/success.mp3`)):e.target.classList.add("error")}}}function h(e){e.target instanceof HTMLElement&&(e.target.querySelectorAll("br").forEach(t=>t.remove()),(e.target.querySelectorAll("br").length||e.target.innerText.trim()!==e.target.innerHTML.trim())&&(e.target.innerHTML=e.target.innerText))}function B(e,t,n){let{words:o=[]}=t,{text:r}=t,s;k(()=>{s.querySelectorAll(".answer").forEach(a=>{a instanceof HTMLElement&&(a.setAttribute("contenteditable","true"),a.innerText=a.getAttribute("data-placeholder")??"",j(a))}),s.addEventListener("input",h),s.addEventListener("keypress",g)}),H(()=>{s.removeEventListener("input",h),s.removeEventListener("keypress",g)});function i(a){M[a?"unshift":"push"](()=>{s=a,n(2,s)})}return e.$$set=a=>{"words"in a&&n(0,o=a.words),"text"in a&&n(1,r=a.text)},[o,r,s,i]}class F extends y{constructor(t){super(),E(this,t,B,W,m,{words:0,text:1})}}function d(e){let t,n;return t=new F({props:{text:e[1],words:e[0]}}),{c(){L(t.$$.fragment)},l(o){A(t.$$.fragment,o)},m(o,r){x(t,o,r),n=!0},p(o,r){const s={};r&2&&(s.text=o[1]),r&1&&(s.words=o[0]),t.$set(s)},i(o){n||(u(t.$$.fragment,o),n=!0)},o(o){f(t.$$.fragment,o),n=!1},d(o){T(t,o)}}}function J(e){let t,n=e[1],o,r=d(e);return{c(){t=p("div"),r.c(),this.h()},l(s){t=_(s,"DIV",{class:!0});var i=b(t);r.l(i),i.forEach(c),this.h()},h(){S(t,"class","md")},m(s,i){w(s,t,i),r.m(t,null),o=!0},p(s,[i]){i&2&&m(n,n=s[1])?(C(),f(r,1,1,I),q(),r=d(s),r.c(),u(r,1),r.m(t,null)):r.p(s,i)},i(s){o||(u(r),o=!0)},o(s){f(r),o=!1},d(s){s&&c(t),r.d(s)}}}function N(e,t,n){let o;D(e,K,l=>n(4,o=l));let{data:r}=t,s=[],i="",a=[];return e.$$set=l=>{"data"in l&&n(2,r=l.data)},e.$$.update=()=>{e.$$.dirty&4&&(n(3,s=r.dict.map(l=>({word:l.origin.trim().replace(/(\sη$)|(\sο$)|(\sτο$)/,""),title:l.translate,whole:!0}))),n(1,i=r.exercise??"")),e.$$.dirty&25&&(n(0,a=[]),o.showTranslates&&a.push(["color: steelblue;",s]),o.showArticles&&a.push(["color: coral;",R]),o.showDigraphs&&a.push(["text-decoration: underline;",V]),n(0,a),n(4,o),n(3,s),n(2,r))},[a,i,r,s,o]}class v extends y{constructor(t){super(),E(this,t,N,J,m,{data:2})}}export{v as component};
