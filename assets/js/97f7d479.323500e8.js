"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4997],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>N});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(n),s=l,N=u["".concat(d,".").concat(s)]||u[s]||k[s]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[u]="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={title:"\u041b\u0438\u043d\u0443\u043a\u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",author:"Stavis Vega",date:"2022-05-25",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0441\u043a\u043e\u043b\u044c\u044e, \u0431\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430  \u0438 \u043b\u0430\u0439\u0444\u0445\u0430\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f",tags:["terminal","ssh"],categories:["devops","linux"],ShowToc:!0,TocOpen:!0,math:!0},i=void 0,p={unversionedId:"manuals/linux-terminal",id:"manuals/linux-terminal",title:"\u041b\u0438\u043d\u0443\u043a\u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0441\u043a\u043e\u043b\u044c\u044e, \u0431\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430  \u0438 \u043b\u0430\u0439\u0444\u0445\u0430\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f",source:"@site/docs/manuals/linux-terminal.md",sourceDirName:"manuals",slug:"/manuals/linux-terminal",permalink:"/manuals/linux-terminal",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/linux-terminal.md",tags:[{label:"terminal",permalink:"/tags/terminal"},{label:"ssh",permalink:"/tags/ssh"}],version:"current",frontMatter:{title:"\u041b\u0438\u043d\u0443\u043a\u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",author:"Stavis Vega",date:"2022-05-25",description:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0441\u043a\u043e\u043b\u044c\u044e, \u0431\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430  \u0438 \u043b\u0430\u0439\u0444\u0445\u0430\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f",tags:["terminal","ssh"],categories:["devops","linux"],ShowToc:!0,TocOpen:!0,math:!0},sidebar:"tutorialSidebar",previous:{title:"\u041c\u0430\u043d\u0443\u0430\u043b\u044b \u043f\u043e \u0441\u043e\u0444\u0442\u0443",permalink:"/category/\u043c\u0430\u043d\u0443\u0430\u043b\u044b-\u043f\u043e-\u0441\u043e\u0444\u0442\u0443"},next:{title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e tmux",permalink:"/manuals/tmux"}},d={},o=[{value:"\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u043b\u0438\u043d\u0443\u043a\u0441",id:"\u0431\u044b\u0441\u0442\u0440\u044b\u0435-\u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430-\u043b\u0438\u043d\u0443\u043a\u0441",level:2},{value:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u044b \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c",id:"\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044b-\u043f\u043e-\u0441\u0442\u0440\u043e\u043a\u0430\u043c",level:3},{value:"\u0412\u044b\u0440\u0435\u0437\u0430\u043d\u0438\u0435 \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435",id:"\u0432\u044b\u0440\u0435\u0437\u0430\u043d\u0438\u0435-\u0432\u0441\u0442\u0430\u0432\u043a\u0430-\u0432-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435",level:3},{value:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430",id:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0442\u0435\u043a\u0441\u0442\u0430",level:3},{value:"\u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430",id:"\u043e\u0447\u0438\u0441\u0442\u043a\u0430-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430",level:3},{value:"\u0417\u0430\u0432\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430",id:"\u0437\u0430\u0432\u0438\u0441\u0430\u043d\u0438\u0435-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430",level:2},{value:"\u0417\u0430\u0432\u0438\u0441\u0448\u0438\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u0432 \u0441\u0435\u0441\u0441\u0438\u0438 ssh",id:"\u0437\u0430\u0432\u0438\u0441\u0448\u0438\u0439-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b-\u0432-\u0441\u0435\u0441\u0441\u0438\u0438-ssh",level:3},{value:"Shell \u0441\u043a\u0440\u0438\u043f\u0442\u044b \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430",id:"shell-\u0441\u043a\u0440\u0438\u043f\u0442\u044b-\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430",level:2},{value:"\u0421\u0431\u043e\u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430",id:"\u0441\u0431\u043e\u0441-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430",level:2},{value:"\u0423\u0437\u043d\u0430\u0442\u044c \u0432\u043d\u0435\u0448\u043d\u0438\u0439 ip \u0430\u0434\u0440\u0435\u0441\u0441",id:"\u0443\u0437\u043d\u0430\u0442\u044c-\u0432\u043d\u0435\u0448\u043d\u0438\u0439-ip-\u0430\u0434\u0440\u0435\u0441\u0441",level:3},{value:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b \u043f\u0440\u044f\u043c\u043e \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435",id:"\u043f\u0440\u043e\u0433\u043d\u043e\u0437-\u043f\u043e\u0433\u043e\u0434\u044b-\u043f\u0440\u044f\u043c\u043e-\u0432-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435",level:3},{value:"\u041d\u0435 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f bash \u0441\u043a\u0440\u0438\u043f\u0442\u0430",id:"\u043d\u0435-\u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0442\u044c-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b-\u043f\u043e\u0441\u043b\u0435-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-bash-\u0441\u043a\u0440\u0438\u043f\u0442\u0430",level:3},{value:"\u0417\u0430\u043f\u0443\u0441\u043a Nautilus \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",id:"\u0437\u0430\u043f\u0443\u0441\u043a-nautilus-\u0447\u0435\u0440\u0435\u0437-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",level:3},{value:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043a\u043e\u0432\u043e\u0433\u043e \u0442\u0435\u0442\u043c\u0438\u043d\u0430\u043b\u0430",id:"\u0437\u0430\u043c\u0435\u043d\u0430-\u0441\u0442\u043e\u043a\u043e\u0432\u043e\u0433\u043e-\u0442\u0435\u0442\u043c\u0438\u043d\u0430\u043b\u0430",level:3},{value:"\u0421\u0441\u044b\u043b\u043a\u0438 \u043f\u043e \u0442\u0435\u043c\u0435",id:"\u0441\u0441\u044b\u043b\u043a\u0438-\u043f\u043e-\u0442\u0435\u043c\u0435",level:2}],m={toc:o},u="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u043b\u0438\u043d\u0443\u043a\u0441 (Mac). \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0430\u043c\u0438.\n\u0421\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u0441\u044f \u0441 \u0437\u0430\u0432\u0438\u0441\u0430\u043d\u0438\u044f\u043c\u0438.",(0,l.kt)("br",{parentName:"p"}),"\n","\u041f\u043e\u0433\u043d\u0430\u043b\u0438:"),(0,l.kt)("h2",{id:"\u0431\u044b\u0441\u0442\u0440\u044b\u0435-\u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430-\u043b\u0438\u043d\u0443\u043a\u0441"},"\u0411\u044b\u0441\u0442\u0440\u044b\u0435 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u043b\u0438\u043d\u0443\u043a\u0441"),(0,l.kt)("h3",{id:"\u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044b-\u043f\u043e-\u0441\u0442\u0440\u043e\u043a\u0430\u043c"},"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u044b \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0421\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0414\u0435\u0439\u0441\u0442\u0438\u0432\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"A")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u043d\u0430\u0447\u0430\u043b\u0443 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"E")),(0,l.kt)("td",{parentName:"tr",align:null},"\u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u0432 \u043a\u043e\u043d\u0435\u0446 \u0441\u0442\u0440\u043e\u043a\u0438")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CTRL")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0410\u043d\u0430\u043b\u043e\u0433 \u0441\u0442\u0440\u0435\u043b\u043a\u0438 \u043d\u0430\u0437\u0430\u0434")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"F")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0410\u043d\u0430\u043b\u043e\u0433 \u0441\u0442\u0440\u0435\u043b\u043a\u0438 \u0432\u043f\u0435\u0440\u0435\u0434")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ALT")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"B")),(0,l.kt)("td",{parentName:"tr",align:null},"\u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u043e\u0432\u043e \u043d\u0430\u0437\u0430\u0434")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ALT")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"F")),(0,l.kt)("td",{parentName:"tr",align:null},"\u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u043b\u043e\u0432\u043e \u0432\u043f\u0435\u0440\u0435\u0434")))),(0,l.kt)("h3",{id:"\u0432\u044b\u0440\u0435\u0437\u0430\u043d\u0438\u0435-\u0432\u0441\u0442\u0430\u0432\u043a\u0430-\u0432-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435"},"\u0412\u044b\u0440\u0435\u0437\u0430\u043d\u0438\u0435 \u0432\u0441\u0442\u0430\u0432\u043a\u0430 \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0421\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0414\u0435\u0439\u0441\u0442\u0438\u0432\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CTRL")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"W")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0441\u043b\u043e\u0432\u043e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"U")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0432\u044b\u0440\u0435\u0437\u0430\u0435\u0442 \u0432\u0441\u0435 \u043e\u0442 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u0434\u043e \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 <--")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"K")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0432\u044b\u0440\u0435\u0437\u0430\u0435\u0442 \u0432\u0441\u0435 \u043e\u0442 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 --\x3e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ctrl")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"Y")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0412\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0440\u0430\u043d\u0435\u0435 \u0432\u044b\u0440\u0435\u0437\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442.")))),(0,l.kt)("h3",{id:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u0442\u0435\u043a\u0441\u0442\u0430"},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0421\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0414\u0435\u0439\u0441\u0442\u0438\u0432\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ALT")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"u")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uppercase")," \u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0432\u0435\u0441\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0440\u0435\u0442\u043a\u0438 \u0432 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440 ",(0,l.kt)("inlineCode",{parentName:"td"},"\u043f\u0440\u043e\u043f\u0438\u0441\u043d\u044b\u0435"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ALT")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"l")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lowercase")," \u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0432\u0435\u0441\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0440\u0435\u0442\u043a\u0438 \u0432  \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u0441\u0442\u0440\u043e\u0447\u043d\u044b\u0445 \u0431\u0443\u043a\u0432")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ALT")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"c")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"capitalize")," \u041f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442 \u0432\u0435\u0441\u044c \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0440\u0435\u0442\u043a\u0438 \u0432 \u0437\u0430\u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440")))),(0,l.kt)("h3",{id:"\u043e\u0447\u0438\u0441\u0442\u043a\u0430-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430"},"\u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430"),(0,l.kt)("p",null,"\u041f\u043e \u0441\u0443\u0442\u0438 \u044d\u0442\u043e \u0430\u043d\u0430\u043b\u043e\u0433 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,l.kt)("inlineCode",{parentName:"p"},"clear"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u0421\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0432\u0438\u0448"),(0,l.kt)("th",{parentName:"tr",align:null},"\u0414\u0435\u0439\u0441\u0442\u0438\u0432\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CTRL")," + ",(0,l.kt)("inlineCode",{parentName:"td"},"L")),(0,l.kt)("td",{parentName:"tr",align:null},"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b")))),(0,l.kt)("h2",{id:"\u0437\u0430\u0432\u0438\u0441\u0430\u043d\u0438\u0435-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430"},"\u0417\u0430\u0432\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430"),(0,l.kt)("p",null,"\u041c\u043d\u043e\u0433\u0438\u0435 \u043f\u0440\u0438\u0432\u044b\u043a\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," \u0434\u043b\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f.\n\u041e\u0434\u043d\u0430\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u0435\u0451 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435, \u043e\u043d \u0447\u0430\u0441\u0442\u043e \u0437\u0430\u0432\u0438\u0441\u0430\u0435\u0442.\n\u0427\u0442\u043e\u0431\u044b \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0435\u0433\u043e \u0432 \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"Q"),"."),(0,l.kt)("h3",{id:"\u0437\u0430\u0432\u0438\u0441\u0448\u0438\u0439-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b-\u0432-\u0441\u0435\u0441\u0441\u0438\u0438-ssh"},"\u0417\u0430\u0432\u0438\u0441\u0448\u0438\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u0432 \u0441\u0435\u0441\u0441\u0438\u0438 ssh"),(0,l.kt)("p",null,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0432 ssh \u0441\u0435\u0441\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0430\u0435\u0442 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u0432 \u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0435\u0441\u043b\u0438 \u0432\u0434\u0440\u0443\u0433 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430\n\u0437\u0430\u0432\u0438\u0441\u043b\u0430 \u0438\u043b\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u0435\u043b \u043e\u0431\u0440\u044b\u0432 \u0441\u0430\u043c\u043e\u0439 \u0441\u0435\u0442\u0438."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e (\u0432 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0439 \u0440\u0430\u0441\u043a\u043b\u0430\u0434\u043a\u0435) \u043f\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u043c:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"~"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".")),(0,l.kt)("p",null,'(\u041a\u043b\u0430\u0432\u0438\u0448\u0430 "Enter", "\u0422\u0438\u043b\u044c\u0434\u0430", "\u0422\u043e\u0447\u043a\u0430")'),(0,l.kt)("p",null,"\u042d\u0442\u043e \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u0441\u0442\u0430\u0432\u0438\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"ssh")," \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u043e\u0431\u043e\u0440\u0432\u0430\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.\n\u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430\u0436\u0430\u0432 \u043f\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0438:",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"~"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"?")),(0,l.kt)("h2",{id:"shell-\u0441\u043a\u0440\u0438\u043f\u0442\u044b-\u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430"},"Shell \u0441\u043a\u0440\u0438\u043f\u0442\u044b \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430"),(0,l.kt)("p",null,"\u041d\u0438\u0436\u0435 \u0432\u0441\u044f\u043a\u0438\u0435 \u0443\u0434\u043e\u0431\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u043d\u043e\u0433\u0434\u0430 \u043f\u0440\u0438\u0433\u043e\u0436\u0434\u0430\u044e\u0442\u0441\u044f."),(0,l.kt)("h2",{id:"\u0441\u0431\u043e\u0441-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430"},"\u0421\u0431\u043e\u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"reset\n")),(0,l.kt)("h3",{id:"\u0443\u0437\u043d\u0430\u0442\u044c-\u0432\u043d\u0435\u0448\u043d\u0438\u0439-ip-\u0430\u0434\u0440\u0435\u0441\u0441"},"\u0423\u0437\u043d\u0430\u0442\u044c \u0432\u043d\u0435\u0448\u043d\u0438\u0439 ip \u0430\u0434\u0440\u0435\u0441\u0441"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl ifconfig.me\n")),(0,l.kt)("h3",{id:"\u043f\u0440\u043e\u0433\u043d\u043e\u0437-\u043f\u043e\u0433\u043e\u0434\u044b-\u043f\u0440\u044f\u043c\u043e-\u0432-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435"},"\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u043f\u043e\u0433\u043e\u0434\u044b \u043f\u0440\u044f\u043c\u043e \u0432 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0435"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl wttr.in/moscow\n")),(0,l.kt)("p",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"curl wttr.in/<\u043d\u0443\u0436\u043d\u044b\u0439 \u0433\u043e\u0440\u043e\u0434>")," \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043a\u0440\u0430\u0441\u0438\u0432\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443\n\u0441 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u043e\u043c \u043f\u043e\u0433\u043e\u0434\u044b:"),(0,l.kt)("h3",{id:"\u043d\u0435-\u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0442\u044c-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b-\u043f\u043e\u0441\u043b\u0435-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-bash-\u0441\u043a\u0440\u0438\u043f\u0442\u0430"},"\u041d\u0435 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f bash \u0441\u043a\u0440\u0438\u043f\u0442\u0430"),(0,l.kt)("p",null,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u043a\u0443\u044e \u0442\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432 shell \u0441\u043a\u0440\u0438\u043f\u0442\u0435, \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u043b\u0430\u0441\u044c\n\u0434\u0432\u043e\u0439\u043d\u044b\u043c \u043a\u043b\u0438\u043a\u043e\u043c \u043f\u043e \u044f\u0440\u043b\u044b\u0447\u043a\u0443 \u0432 \u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0438\u043a\u0435.\n\u0422\u0430\u043a \u0432\u043e\u0442 \u0441\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f, \u0447\u0442\u043e \u043f\u0440\u0438 \u0442\u0430\u043a\u043e\u043c \u043a\u043b\u0438\u043a\u0435, \u0441\u0430\u043c \u0441\u043a\u0440\u0438\u043f\u0442 \u043e\u0442\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f, \u043d\u043e \u043e\u043a\u043d\u0430 \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u043d\u0435 \u043f\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n# \u043f\u0440\u0438\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430  \n\necho "\u041f\u0440\u0438\u0432\u0435\u0442 \u0438\u0437 \u0431\u0430\u0448 \u0441\u043a\u0440\u0438\u043f\u0442\u0430"\n')),(0,l.kt)("p",null,"\u041d\u0435 \u0443\u0434\u043e\u0431\u043d\u043e. \u0427\u0442\u043e\u0431 \u043f\u043e\u044f\u0432\u043b\u044f\u043b\u043e\u0441\u044c \u043e\u043a\u043d\u043e \u043a\u043e\u043d\u0441\u043e\u043b\u0438 \u043c\u043e\u0436\u043d\u043e \u0432 \u043a\u043e\u043d\u0446\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u0434\u043e\u043f\u0438\u0441\u0430\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"$SHELL")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n# \u043f\u0440\u0438\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430  \n\necho "\u041f\u0440\u0438\u0432\u0435\u0442 \u0438\u0437 \u0431\u0430\u0448 \u0441\u043a\u0440\u0438\u043f\u0442\u0430"\n$SHELL\n')),(0,l.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u043a\u043d\u043e \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u0430."),(0,l.kt)("h3",{id:"\u0437\u0430\u043f\u0443\u0441\u043a-nautilus-\u0447\u0435\u0440\u0435\u0437-\u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b"},"\u0417\u0430\u043f\u0443\u0441\u043a Nautilus \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b"),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043d\u0430\u0443\u0442\u0438\u043b\u0443\u0441\u0430 \u0438\u0437 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0433\u043b\u044e\u043a.\n\u0415\u0441\u043b\u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430, \u0442\u043e \u0442\u0430\u043a \u0436\u0435 \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0438 \u043e\u043a\u043d\u043e \u043d\u0430\u0443\u0442\u0438\u043b\u0443\u0441\u0430."),(0,l.kt)("p",null,"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0443\u0441\u043a \u0447\u0435\u0440\u0435\u0437 ",(0,l.kt)("inlineCode",{parentName:"p"},"nohup")),(0,l.kt)("p",null,"In order to avoid nasty warnings in my terminal I use ",(0,l.kt)("inlineCode",{parentName:"p"},"nohup"),".\nTo have it detached from my terminal I'm adding ",(0,l.kt)("inlineCode",{parentName:"p"},"&")," at the end of my command. I also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"-w")," flag to open in a new window."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nohup nautilus -w . &\n")),(0,l.kt)("h3",{id:"\u0437\u0430\u043c\u0435\u043d\u0430-\u0441\u0442\u043e\u043a\u043e\u0432\u043e\u0433\u043e-\u0442\u0435\u0442\u043c\u0438\u043d\u0430\u043b\u0430"},"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u043e\u043a\u043e\u0432\u043e\u0433\u043e \u0442\u0435\u0442\u043c\u0438\u043d\u0430\u043b\u0430"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0437\u0430\u043c\u0435\u043d\u0442\u044b \u0441\u0442\u043e\u043a\u043e\u0432\u043e\u0433\u043e \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0441 bash \u043d\u0430 zsh"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"chsh -s $(which zsh)\n")),(0,l.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438-\u043f\u043e-\u0442\u0435\u043c\u0435"},"\u0421\u0441\u044b\u043b\u043a\u0438 \u043f\u043e \u0442\u0435\u043c\u0435"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/jlevy/the-art-of-command-line/blob/master/README-ru.md"},"\u0420\u0435\u043f\u0430"),' "\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438", \u0441\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u043f\u0440\u043e\u043a\u0430\u0447\u043a\u0435 \u0441\u043a\u0438\u043b\u0430'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/trimstray/the-book-of-secret-knowledge"},"The Book of Secret Knowledge"))))}k.isMDXComponent=!0}}]);