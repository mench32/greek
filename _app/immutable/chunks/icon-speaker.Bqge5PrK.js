import{s as f,F as d,G as p,b as u,f as o,q as t,i as v,h as m,n as h}from"./scheduler.DHbXqC6-.js";import{S as g,i as _}from"./index.DmtaVaTq.js";let a=null,r=!1;function E(l){a&&r&&(r=!1,a.removeEventListener("ended",c),a.pause()),a=new Audio(l),r=!0,a.addEventListener("ended",c),a.play()}function c(){r=!1}function w(l){let e,s;return{c(){e=d("svg"),s=d("path"),this.h()},l(n){e=p(n,"svg",{width:!0,height:!0,fill:!0,viewBox:!0,xmlns:!0});var i=u(e);s=p(i,"path",{d:!0}),u(s).forEach(o),i.forEach(o),this.h()},h(){t(s,"d","M15 4.25v15.496c0 1.078-1.274 1.65-2.08.934l-4.492-3.994a.75.75 0 0 0-.498-.19H4.25A2.25 2.25 0 0 1 2 14.247V9.75a2.25 2.25 0 0 1 2.25-2.25h3.68a.75.75 0 0 0 .498-.19l4.491-3.993C13.726 2.599 15 3.17 15 4.25Zm3.992 1.647a.75.75 0 0 1 1.049.157A9.959 9.959 0 0 1 22 12a9.96 9.96 0 0 1-1.96 5.946.75.75 0 0 1-1.205-.892A8.459 8.459 0 0 0 20.5 12a8.459 8.459 0 0 0-1.665-5.054.75.75 0 0 1 .157-1.049ZM17.143 8.37a.75.75 0 0 1 1.017.303c.536.99.84 2.125.84 3.328a6.973 6.973 0 0 1-.84 3.328.75.75 0 0 1-1.32-.714c.42-.777.66-1.666.66-2.614s-.24-1.837-.66-2.614a.75.75 0 0 1 .303-1.017Z"),t(e,"width","24"),t(e,"height","24"),t(e,"fill","none"),t(e,"viewBox","0 0 24 24"),t(e,"xmlns","http://www.w3.org/2000/svg")},m(n,i){v(n,e,i),m(e,s)},p:h,i:h,o:h,d(n){n&&o(e)}}}class A extends g{constructor(e){super(),_(this,e,null,w,f,{})}}export{A as I,E as p};
