"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),o=l,k=c["".concat(s,".").concat(o)]||c[o]||m[o]||r;return n?a.createElement(k,p(p({ref:t},u),{},{components:n})):a.createElement(k,p({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=o;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},4384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),l=(n(7294),n(3905));const r={author:"Stavis",title:"Linux command line",description:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 Linux. \u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430",tags:["command line","linux"]},p="\u041a\u043e\u043c\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 Linux",i={unversionedId:"manuals/linux-command-line",id:"manuals/linux-command-line",title:"Linux command line",description:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 Linux. \u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430",source:"@site/docs/manuals/linux-command-line.md",sourceDirName:"manuals",slug:"/manuals/linux-command-line",permalink:"/manuals/linux-command-line",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/linux-command-line.md",tags:[{label:"command line",permalink:"/tags/command-line"},{label:"linux",permalink:"/tags/linux"}],version:"current",frontMatter:{author:"Stavis",title:"Linux command line",description:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 Linux. \u041a\u043e\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430",tags:["command line","linux"]},sidebar:"tutorialSidebar",previous:{title:"\u0428\u0438\u0444\u0440\u0443\u0435\u043c \u0441 GPG",permalink:"/manuals/gpg"},next:{title:"\u041b\u0438\u043d\u0443\u043a\u0441 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",permalink:"/manuals/linux-terminal"}},s={},d=[{value:"wc",id:"wc",level:2},{value:"wc \u043f\u0440\u0438\u043c\u0435\u0440\u044b",id:"wc-\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:3},{value:"head",id:"head",level:2},{value:"cut",id:"cut",level:2},{value:"sort",id:"sort",level:2},{value:"pushd, popd, dirs",id:"pushd-popd-dirs",level:2},{value:"pushd \u041f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432 \u0441\u0442\u0435\u043a",id:"pushd-\u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c-\u043a\u0430\u0442\u0430\u043b\u043e\u0433-\u0432-\u0441\u0442\u0435\u043a",level:3},{value:"dirs \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0441\u0442\u0435\u043a\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432",id:"dirs-\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440-\u0441\u0442\u0435\u043a\u0430-\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432",level:3},{value:"popd \u0418\u0437\u0432\u043b\u0435\u0447\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0438\u0437 \u0441\u0442\u0435\u043a\u0430",id:"popd-\u0438\u0437\u0432\u043b\u0435\u0447\u044c-\u043a\u0430\u0442\u0430\u043b\u043e\u0433-\u0438\u0437-\u0441\u0442\u0435\u043a\u0430",level:3},{value:"\u0423\u0433\u043b\u0443\u0431\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u0442\u0435\u043a",id:"\u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c\u0441\u044f-\u0432-\u0441\u0442\u0435\u043a",level:3},{value:"env \u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f",id:"env-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f",level:2},{value:"alias",id:"alias",level:2},{value:"\u0424\u0430\u0439\u043b animals.txt",id:"\u0444\u0430\u0439\u043b-animalstxt",level:2}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u043a\u043e\u043c\u043c\u0430\u043d\u0434\u043d\u0430\u044f-\u0441\u0442\u0440\u043e\u043a\u0430-linux"},"\u041a\u043e\u043c\u043c\u0430\u043d\u0434\u043d\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 Linux"),(0,l.kt)("h2",{id:"wc"},"wc"),(0,l.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 wc \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u0441\u043b\u043e\u0432 \u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 \u0432 \u0444\u0430\u0439\u043b\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"wc animals.txt\n# 7 51 325 animals.txt\n")),(0,l.kt)("p",null,"wc \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442, \u0447\u0442\u043e \u0432 \u0444\u0430\u0439\u043b\u0435 animals.txt 7 \u0441\u0442\u0440\u043e\u043a, 51 \u0441\u043b\u043e\u0432\u043e \u0438 325 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432. \u0415\u0441\u043b\u0438 \u0432\u044b\n\u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0440\u043e\u0431\u0435\u043b\u044b \u0438 \u0442\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u0438, \u0442\u043e \u043d\u0430\u0439\u0434\u0435\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e 318 \u0441\u0438\u043c-\n\u0432\u043e\u043b\u043e\u0432, \u043d\u043e wc \u0442\u0430\u043a\u0436\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442 \u0441\u043a\u0440\u044b\u0442\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-l")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lines")," \u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-w")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"words")," \u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u043e\u0432")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-c")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"characters")," \u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")))),(0,l.kt)("h3",{id:"wc-\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"wc \u043f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u043a\u043e\u043b\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls -p | grep -v / | wc -l\n")),(0,l.kt)("h2",{id:"head"},"head"),(0,l.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 head \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043f\u0435\u0440\u0432\u044b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0444\u0430\u0439\u043b\u0430.\n\u0415\u0441\u043b\u0438 \u0432\u044b \u043e\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 -n, \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 10 \u0441\u0442\u0440\u043e\u043a (-n10).\n\u0412\u044b\u0432\u0435\u0434\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0435 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438 \u0444\u0430\u0439\u043b\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"animals.txt"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f head \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c -n:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"head -n3 animals.txt\n# python Programming Python 2010 Lutz, Mark\n# snail SSH, The Secure Shell 2005 Barrett, Daniel\n# alpaca Intermediate Perl 2012 Schwartz, Randal\n")),(0,l.kt)("h2",{id:"cut"},"cut"),(0,l.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"cut")," \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043e\u0434\u043d\u0443 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0438\u0437 \u0444\u0430\u0439\u043b\u0430."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"filds")," \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u043f\u043e\u043b\u044f\u043c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-c")),(0,l.kt)("td",{parentName:"tr",align:null},"'characters' \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u0435 \u043f\u043e \u0441\u0438\u043c\u0432\u043e\u043b\u0430\u043c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-d")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"delimiter")," \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c")))),(0,l.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"cut")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0447\u0442\u043e \u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u043e\u0439."),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0432\u044b\u0439 \u2014 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u043e \u043f\u043e\u043b\u044f\u043c (-f), \u043a\u043e\u0433\u0434\u0430 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0438\u0437 \u0441\u0442\u0440\u043e\u043a (\u043f\u043e\u043b\u0435\u0439),\n\u043a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0430 \u043e\u0434\u043d\u0438\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c \u0442\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u0438.\n\u0418\u043c\u0435\u043d\u043d\u043e \u0442\u0430\u043a\u043e\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"animals.txt"),".\n\u041a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"cut")," \u0438\u0437 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442 \u0432\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u043e\u043f\u0446\u0438\u0438 -f2.\n\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u043a\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u044b\u0432\u043e\u0434, \u043f\u0435\u0440\u0435\u0434\u0430\u0434\u0438\u043c \u0435\u0433\u043e \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"head"),". \u0412\u044b\u0432\u0435\u0434\u0435\u043c \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0432\u044b\u0435 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438:"),(0,l.kt)("p",null,"\u0412\u044b\u0432\u0435\u0434\u0435\u043c \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0435\u0440\u0432\u044b\u0435 \u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u0438:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cut -f2 animals.txt | head -n3\n# Programming Python\n# SSH, The Secure Shell\n# Intermediate Perl\n")),(0,l.kt)("p",null,"\u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0435\u0439, \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0432 \u0438\u0445 \u043d\u043e\u043c\u0435\u0440\u0430 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cut -f1,3 animals.txt | head -n3\n# python 2010\n# snail 2005\n# alpaca 2012\n")),(0,l.kt)("p",null,"\u0438\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cut -f2-4 animals.txt | head -n3\n# Programming Python 2010 Lutz, Mark\n# SSH, The Secure Shell 2005 Barrett, Daniel\n# Intermediate Perl 2012 Schwartz, Randal\n")),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043a\u043e\u043b\u043e\u043d\u043a\u0443 \u0434\u043b\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b cut \u043f\u043e \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u0441\u0438\u043c\u0432\u043e\u043b\u0430\n\u0432 \u0441\u0442\u0440\u043e\u043a\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 -c. \u0412\u044b\u0432\u0435\u0434\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0435 \u0442\u0440\u0438 \u0441\u0438\u043c\u0432\u043e\u043b\u0430 \u0438\u0437 \u043a\u0430\u0436-\n\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0444\u0430\u0439\u043b\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u0438\u0431\u043e \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e (1, 2, 3), \u043b\u0438\u0431\u043e\n\u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 (1\u20133)"),(0,l.kt)("p",null,"\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u0447\u0442\u043e \u0444\u0430\u0439\u043b animals.txt \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0442\u044b\u0441\u044f\u0447 \u0441\u0442\u0440\u043e\u043a \u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0438\u0437\u0432\u043b\u0435\u0447\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u043c\u0438\u043b\u0438\u0438 \u0430\u0432\u0442\u043e\u0440\u043e\u0432.\n\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0434\u0435\u043b\u0438\u043c \u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043e\u0435 \u043f\u043e\u043b\u0435 \u2014 \u0438\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u0430\u0432\u0442\u043e\u0440\u0430."),(0,l.kt)("p",null,"\u0417\u0430\u0442\u0435\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0434\u0438\u043c \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u043d\u043e\u0432\u0430 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 cut, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 -d (delimiter \u2014 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c),\n\u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b-\u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u043d\u0430 \u0437\u0430\u043f\u044f\u0442\u0443\u044e \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0430\u0431\u0443\u043b\u044f\u0446\u0438\u0438.\n\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u043c\u0438\u043b\u0438\u0438 \u0430\u0432\u0442\u043e\u0440\u043e\u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cut -f4 animals.txt | cut -d, -f1\n# Lutz\n# Barrett\n# Schwartz\n")),(0,l.kt)("h2",{id:"sort"},"sort"),(0,l.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 sort \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0444\u0430\u0439\u043b\u0430 \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044f (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sort\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0446\u0438\u0438"),(0,l.kt)("th",{parentName:"tr",align:null},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0432 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435")))),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"cut -f3 animals.txt | sort -n | head -n3\n# 1999\n# 2005\n# 2005\n")),(0,l.kt)("h2",{id:"pushd-popd-dirs"},"pushd, popd, dirs"),(0,l.kt)("p",null,"\u0412\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439 \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u043e\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0441\u0442\u0435\u043a\u043e\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432"),".\n\u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043b\u0435\u0433\u043a\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430\u043c\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"pushd"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"popd")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"dirs"),".\n\u041d\u0430 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u0435, \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c, 15 \u043c\u0438\u043d\u0443\u0442, \u0430 \u043f\u043e\u043b\u044c\u0437\u0443 \u043e\u0442 \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0432\u0441\u044e \u0436\u0438\u0437\u043d\u044c."),(0,l.kt)("h3",{id:"pushd-\u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c-\u043a\u0430\u0442\u0430\u043b\u043e\u0433-\u0432-\u0441\u0442\u0435\u043a"},"pushd \u041f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432 \u0441\u0442\u0435\u043a"),(0,l.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"pushd")," (\u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043e\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"push directory"),") \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0432 \u0432\u0435\u0440\u0448\u0438\u043d\u0443 \u0441\u0442\u0435\u043a\u0430."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 cd \u0432 \u044d\u0442\u043e\u0442 \u043a\u0430\u0442\u0430\u043b\u043e\u0433."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0441\u0442\u0435\u043a \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437 \u0434\u043b\u044f \u0441\u043f\u0440\u0430\u0432\u043a\u0438.")),(0,l.kt)("p",null,"\u042f \u0441\u043e\u0437\u0434\u0430\u043c \u0441\u0442\u0435\u043a \u0438\u0437 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f \u0438\u0445 \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pwd\n# /home/smith/Work/Projects/Web/src\npushd /var/www/html\n# /var/www/html ~/Work/Projects/Web/src\npushd /etc/apache2\n# /etc/apache2 /var/www/html ~/Work/Projects/Web/src\npushd /etc/ssl/certs\n# /etc/ssl/certs /etc/apache2 /var/www/html ~/Work/Projects/Web/src\npwd\n# /etc/ssl/certs\n")),(0,l.kt)("p",null,"\u041e\u0431\u043e\u043b\u043e\u0447\u043a\u0430 \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442 \u0441\u0442\u0435\u043a \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b pushd. \u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u2014 \u043b\u0435\u0432\u044b\u0439 (\u0432\u0435\u0440\u0445\u043d\u0438\u0439)."),(0,l.kt)("h3",{id:"dirs-\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440-\u0441\u0442\u0435\u043a\u0430-\u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432"},"dirs \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0441\u0442\u0435\u043a\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432"),(0,l.kt)("p",null,"\u0412\u044b\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0441\u0442\u0435\u043a \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u044d\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0430 \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b dirs. \u041e\u043d\u0430 \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u0442\u0435\u043a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"dirs\n# /etc/ssl/certs /etc/apache2 /var/www/html ~/Work/Projects/Web/src\n")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0432\u044b \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u0441\u0442\u0435\u043a \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 -p:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"dirs -p\n# /etc/ssl/certs\n# /etc/apache2\n# /var/www/html\n# ~/Work/Projects/Web/src\n")),(0,l.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"nl")," \u0434\u043b\u044f \u043d\u0443\u043c\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u043e\u043a \u0441 \u043d\u0443\u043b\u044f.\n\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0432 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"dirs -p | nl -v0"),".\n\u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0449\u0435 \u043f\u0440\u043e\u0449\u0435, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"dirs -v"),".\n\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0441\u0442\u0435\u043a \u0441 \u043f\u0440\u043e\u043d\u0443\u043c\u0435\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"dirs -v\n# 0 /etc/ssl/certs\n# 1 /etc/apache2\n# 2 /var/www/html\n# 3 ~/Work/Projects/Web/src\n")),(0,l.kt)("h3",{id:"popd-\u0438\u0437\u0432\u043b\u0435\u0447\u044c-\u043a\u0430\u0442\u0430\u043b\u043e\u0433-\u0438\u0437-\u0441\u0442\u0435\u043a\u0430"},"popd \u0418\u0437\u0432\u043b\u0435\u0447\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0438\u0437 \u0441\u0442\u0435\u043a\u0430"),(0,l.kt)("p",null,"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 popd (pop directory) \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0435 pushd. \u041e\u043d\u0430 \u0434\u0435\u043b\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0423\u0434\u0430\u043b\u044f\u0435\u0442 \u043e\u0434\u0438\u043d \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0438\u0437 \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u0441\u0442\u0435\u043a\u0430."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 cd \u0432 \u043d\u043e\u0432\u044b\u0439 \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433."),(0,l.kt)("li",{parentName:"ul"},"\u0412\u044b\u0432\u043e\u0434\u0438\u0442 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0441\u0442\u0435\u043a \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437 \u0434\u043b\u044f \u0441\u043f\u0440\u0430\u0432\u043a\u0438.")),(0,l.kt)("h3",{id:"\u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c\u0441\u044f-\u0432-\u0441\u0442\u0435\u043a"},"\u0423\u0433\u043b\u0443\u0431\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u0442\u0435\u043a"),(0,l.kt)("p",null,"\u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 \u0432 \u0441\u0442\u0435\u043a\u0435, \u043f\u043e\u043c\u0438\u043c\u043e \u0434\u0432\u0443\u0445 \u0432\u0435\u0440\u0445\u043d\u0438\u0445? pushd \u0438 popd \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0438\u043b\u0438 \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e \u0441\u0442\u0435\u043a\u043e\u043c. \u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pushd +N\n")),(0,l.kt)("p",null,"\u0441\u0434\u0432\u0438\u0433\u0430\u0435\u0442 N \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432 \u0441 \u0432\u0435\u0440\u0448\u0438\u043d\u044b \u0441\u0442\u0435\u043a\u0430 \u0432\u043d\u0438\u0437, \u0430 \u0437\u0430\u0442\u0435\u043c \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u0442 \u043a \u043d\u043e\u0432\u043e\u043c\u0443 \u0432\u0435\u0440\u0445\u043d\u0435\u043c\u0443 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443. \u041e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 (-N) \u0441\u0434\u0432\u0438\u0433\u0430\u0435\u0442 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u043f\u043e\u043b\u043e\u0436\u043d\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438, \u0441\u043d\u0438\u0437\u0443 \u0432\u0432\u0435\u0440\u0445, \u043f\u0435\u0440\u0435\u0434 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c cd:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dirs\n# /etc/ssl/certs ~/Work/Projects/Web/src /var/www/html /etc/apache2\npushd +1\n# ~/Work/Projects/Web/src /var/www/html /etc/apache2 /etc/ssl/certs\npushd +2\n# /etc/apache2 /etc/ssl/certs ~/Work/Projects/Web/src /var/www/html\n")),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043b\u044e\u0431\u043e\u043c\u0443 \u0434\u0440\u0443\u0433\u043e\u043c\u0443 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 \u0432 \u0441\u0442\u0435\u043a\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b. \u041e\u0434\u043d\u0430\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u0430\u0448 \u0441\u0442\u0435\u043a \u0434\u043b\u0438\u043d\u043d\u044b\u0439, \u0442\u0440\u0443\u0434\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u0432\u0443\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043d\u0443\u0436\u043d\u043e\u0433\u043e \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e\u0432\u0443\u044e \u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e dirs -v, \u043a\u0430\u043a \u0432\u044b \u0434\u0435\u043b\u0430\u043b\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xab\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0441\u0442\u0435\u043a\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432\xbb \u043d\u0430 \u0441. 82:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dirs -v\n# 0 /etc/apache2\n# 1 /etc/ssl/certs\n# 2 ~/Work/Projects/Web/src\n# 3 /var/www/html\n")),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c /var/www/html \u043d\u0430 \u0432\u0435\u0440\u0448\u0438\u043d\u0443 \u0441\u0442\u0435\u043a\u0430 (\u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0435\u0433\u043e \u0442\u0435\u043a\u0443\u0449\u0438\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u043c), \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 pushd +3."),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443 \u0432 \u043d\u0438\u0436\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u0442\u0435\u043a\u0430, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 pushd -0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"dirs\n# /etc/apache2 /etc/ssl/certs ~/Work/Projects/Web/src /var/www/html\npushd -0\n# /var/www/html /etc/apache2 /etc/ssl/certs ~/Work/Projects/Web/src\n")),(0,l.kt)("p",null,"\u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 \u0438\u0437 \u0441\u0442\u0435\u043a\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f popd \u0441 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u043c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u043c. \u041a\u043e\u043c\u0430\u043d\u0434\u0430"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"popd +N\n")),(0,l.kt)("p",null,"\u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u043a\u0430\u0442\u0430\u043b\u043e\u0433, \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 N, \u0438\u0437 \u0441\u0442\u0435\u043a\u0430, \u0441\u0447\u0438\u0442\u0430\u044f \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437. \u041e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 (-N) \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043e\u0442\u0441\u0447\u0435\u0442 \u0441\u043d\u0438\u0437\u0443 \u0441\u0442\u0435\u043a\u0430. \u041f\u043e\u0434\u0441\u0447\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0441 \u043d\u0443\u043b\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 popd +1 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0432\u0442\u043e\u0440\u043e\u0439 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0441\u0432\u0435\u0440\u0445\u0443:"),(0,l.kt)("h2",{id:"env-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"},"env \u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 HOME \u0438 USER \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443\nprintenv:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"printenv HOME\n# /home/smith\nprintenv USER\n# smith\n")),(0,l.kt)("h2",{id:"alias"},"alias"),(0,l.kt)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0432\u0441\u0435\u0445 \u0430\u043b\u0438\u0430\u0441\u043e\u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"alias\n")),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043b\u0438\u0430\u0441"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'alias ll="ls -l"\n')),(0,l.kt)("h2",{id:"\u0444\u0430\u0439\u043b-animalstxt"},"\u0424\u0430\u0439\u043b animals.txt"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="animals.txt"',title:'"animals.txt"'},"python  Programming Python  2010    Lutz, Mark\nsnail   SSH, The Secure Shell   2005    Barrett, Daniel\nalpaca  Intermediate Perl   2012    Schwartz, Randal\nrobin   MySQL High Availability 2014    Bell, Charles\nhorse   Linux in a Nutshell 2009    Siever, Ellen\ndonkey  Cisco IOS in a Nutshell 2005    Boney, James\noryx    Writing Word Macros 1999    Roman, Steven\n")))}m.isMDXComponent=!0}}]);