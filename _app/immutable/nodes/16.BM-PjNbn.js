import{s as Y,e as f,t as j,a as L,c as p,b as T,d as B,f as k,g as C,J as M,o as r,i as D,h as c,x as A,n as K,z as Z,k as $,D as ee,j as te}from"../chunks/scheduler.BX8YVY3S.js";import{S as se,i as le}from"../chunks/index.CpUgF7Al.js";import{s as N}from"../chunks/settings.CR0N8Coa.js";function ne(s){let e,o="Загрузить",t,l=s[1][0].name+"",d,i,x;return{c(){e=f("button"),e.textContent=o,t=L(),d=j(l),this.h()},l(n){e=p(n,"BUTTON",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1uxkx8f"&&(e.textContent=o),t=C(n),d=B(n,l),this.h()},h(){r(e,"class","button")},m(n,b){D(n,e,b),D(n,t,b),D(n,d,b),i||(x=A(e,"click",s[4]),i=!0)},p(n,b){b&2&&l!==(l=n[1][0].name+"")&&te(d,l)},d(n){n&&(k(e),k(t),k(d)),i=!1,x()}}}function ae(s){let e,o="Выбрать файл профиля";return{c(){e=f("div"),e.textContent=o,this.h()},l(t){e=p(t,"DIV",{class:!0,"data-svelte-h":!0}),M(e)!=="svelte-1exv0j6"&&(e.textContent=o),this.h()},h(){r(e,"class","button")},m(t,l){D(t,e,l)},p:K,d(t){t&&k(e)}}}function ce(s){let e,o,t,l,d,i,x,n,b,m,U,v,z,h,I,g,O,w,E,J,R,y,Q="Скачать файл профиля",V,W;function X(u,a){return u[1]?ne:ae}let P=X(s),_=P(s);return{c(){e=f("div"),o=f("label"),t=j(`Выделять Диграфы
        `),l=f("input"),d=L(),i=f("label"),x=j(`Выделять Артикли
        `),n=f("input"),b=L(),m=f("label"),U=j(`Выделять Переводы
        `),v=f("input"),z=L(),h=f("label"),I=j(`Звуки
        `),g=f("input"),O=L(),w=f("label"),E=f("input"),J=L(),_.c(),R=L(),y=f("a"),y.textContent=Q,this.h()},l(u){e=p(u,"DIV",{class:!0});var a=T(e);o=p(a,"LABEL",{class:!0});var q=T(o);t=B(q,`Выделять Диграфы
        `),l=p(q,"INPUT",{type:!0}),q.forEach(k),d=C(a),i=p(a,"LABEL",{class:!0});var F=T(i);x=B(F,`Выделять Артикли
        `),n=p(F,"INPUT",{type:!0}),F.forEach(k),b=C(a),m=p(a,"LABEL",{class:!0});var G=T(m);U=B(G,`Выделять Переводы
        `),v=p(G,"INPUT",{type:!0}),G.forEach(k),z=C(a),h=p(a,"LABEL",{class:!0});var H=T(h);I=B(H,`Звуки
        `),g=p(H,"INPUT",{type:!0}),H.forEach(k),O=C(a),w=p(a,"LABEL",{class:!0});var S=T(w);E=p(S,"INPUT",{type:!0,accept:!0,class:!0}),J=C(S),_.l(S),S.forEach(k),R=C(a),y=p(a,"A",{class:!0,href:!0,"data-svelte-h":!0}),M(y)!=="svelte-oyfjox"&&(y.textContent=Q),a.forEach(k),this.h()},h(){r(l,"type","checkbox"),r(o,"class","svelte-x66zwb"),r(n,"type","checkbox"),r(i,"class","svelte-x66zwb"),r(v,"type","checkbox"),r(m,"class","svelte-x66zwb"),r(g,"type","checkbox"),r(h,"class","svelte-x66zwb"),r(E,"type","file"),r(E,"accept",".json"),r(E,"class","svelte-x66zwb"),r(w,"class","svelte-x66zwb"),r(y,"class","button"),r(y,"href","#"),r(e,"class","profile svelte-x66zwb")},m(u,a){D(u,e,a),c(e,o),c(o,t),c(o,l),l.checked=s[3].showDigraphs,c(e,d),c(e,i),c(i,x),c(i,n),n.checked=s[3].showArticles,c(e,b),c(e,m),c(m,U),c(m,v),v.checked=s[3].showTranslates,c(e,z),c(e,h),c(h,I),c(h,g),g.checked=s[3].sound,c(e,O),c(e,w),c(w,E),c(w,J),_.m(w,null),c(e,R),c(e,y),s[10](y),V||(W=[A(l,"change",s[5]),A(n,"change",s[6]),A(v,"change",s[7]),A(g,"change",s[8]),A(E,"change",s[9])],V=!0)},p(u,[a]){a&8&&(l.checked=u[3].showDigraphs),a&8&&(n.checked=u[3].showArticles),a&8&&(v.checked=u[3].showTranslates),a&8&&(g.checked=u[3].sound),P===(P=X(u))&&_?_.p(u,a):(_.d(1),_=P(u),_&&(_.c(),_.m(w,null)))},i:K,o:K,d(u){u&&k(e),_.d(),s[10](null),V=!1,Z(W)}}}function oe(s,e,o){let t;$(s,N,h=>o(3,t=h));let l,d,i;async function x(){if(l[0]){const h=JSON.parse(await l[0].text());Object.entries(h).forEach(([I,g])=>{localStorage.setItem(I,g)})}}function n(){t.showDigraphs=this.checked,N.set(t)}function b(){t.showArticles=this.checked,N.set(t)}function m(){t.showTranslates=this.checked,N.set(t)}function U(){t.sound=this.checked,N.set(t)}function v(){l=this.files,d=this.value,o(1,l),o(2,d)}function z(h){ee[h?"unshift":"push"](()=>{i=h,o(0,i)})}return s.$$.update=()=>{if(s.$$.dirty&1&&i){const h=new Blob([JSON.stringify({...localStorage})]);o(0,i.href=window.URL.createObjectURL(h),i),o(0,i.download="profile.json",i)}},[i,l,d,t,x,n,b,m,U,v,z]}class ue extends se{constructor(e){super(),le(this,e,oe,ce,Y,{})}}export{ue as component};
