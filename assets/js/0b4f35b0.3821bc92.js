"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1306],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(o,".").concat(d)]||u[d]||c[d]||s;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<s;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(4137));const s={title:"sshfs - \u0430\u0432\u0442\u043e\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u041b\u0430\u0439\u0444\u0445\u0430\u043a \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f sshfs \u0441 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u043e\u0439",authors:"stavis",tags:["sshfs","DevOps","bashdays","linux"]},l=void 0,i={permalink:"/blog/2023/08/24/sshfs-mount",editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/blog/2023-08-24-sshfs-mount.md",source:"@site/blog/2023-08-24-sshfs-mount.md",title:"sshfs - \u0430\u0432\u0442\u043e\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u041b\u0430\u0439\u0444\u0445\u0430\u043a \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f sshfs \u0441 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u043e\u0439",date:"2023-08-24T00:00:00.000Z",formattedDate:"24 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 2023 \u0433.",tags:[{label:"sshfs",permalink:"/blog/tags/sshfs"},{label:"DevOps",permalink:"/blog/tags/dev-ops"},{label:"bashdays",permalink:"/blog/tags/bashdays"},{label:"linux",permalink:"/blog/tags/linux"}],readingTime:3.325,hasTruncateMarker:!0,authors:[{name:"Stavis Vega",title:"This blog author",url:"https://github.com/stavis-dev",imageURL:"https://github.com/stavis-dev.png",key:"stavis"}],frontMatter:{title:"sshfs - \u0430\u0432\u0442\u043e\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",description:"\u041b\u0430\u0439\u0444\u0445\u0430\u043a \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0433\u043e \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f sshfs \u0441 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u043e\u0439",authors:"stavis",tags:["sshfs","DevOps","bashdays","linux"]},prevItem:{title:"ssh - \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u043a\u043b\u044e\u0447\u0430\u043c.",permalink:"/blog/2023/08/24/ssh-config"},nextItem:{title:"DevOps \u0438\u0433\u0440\u0430 Bandit",permalink:"/blog/2023/08/23/linux-game"}},o={authorsImageUrls:[void 0]},m=[{value:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 SSHFS",id:"\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-sshfs",level:2},{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430",level:2},{value:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435",id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435",level:2},{value:"\u042e\u043d\u0438\u0442 1",id:"\u044e\u043d\u0438\u0442-1",level:3},{value:"\u042e\u043d\u0438\u0442 2",id:"\u044e\u043d\u0438\u0442-2",level:3},{value:"\u042e\u043d\u0438\u0442 3",id:"\u044e\u043d\u0438\u0442-3",level:3},{value:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f",id:"\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f",level:3},{value:"\u0418\u0442\u043e\u0433",id:"\u0438\u0442\u043e\u0433",level:2},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],p={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0439 ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/bashdays/41"},"\u043f\u043e\u0441\u0442")," \u0441 \u0442\u0435\u043b\u0435\u0433\u0440\u0430\u043c \u043a\u0430\u043d\u0430\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"BASH DAYS | LINUX")," - ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/bashdays"},"@bashdays"),". \u0427\u0442\u043e\u0431\u044b \u043d\u0435 \u0437\u0430\u0431\u044b\u0442\u044c, \u0432\u044b\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e \u0442\u0443\u0442, \u0432\u0441\u0435 \u0441\u043e \u0441\u043b\u043e\u0432 \u0430\u0432\u0442\u043e\u0440\u0430.")),(0,r.kt)("p",null,"\u041a\u0430\u043a-\u0442\u043e \u0433\u043e\u0434\u0430 3 \u043d\u0430\u0437\u0430\u0434 \u043c\u044b \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0443\u0441\u0442\u0430\u043b\u0438 \u043a\u0430\u0436\u0434\u0443\u044e \u043d\u0435\u0434\u0435\u043b\u044e \u0440\u0435\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u0430\u0443\u043d\u0442\u0448\u0430\u0440\u044b \u0447\u0435\u0440\u0435\u0437 glusterfs, \u0447\u0442\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u0438\u043d\u044f\u0442\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0432\u044b\u043a\u0438\u043d\u0443\u0442\u044c \u0435\u0433\u043e \u043d\u0430\u0445\u0443\u0439 \u0438 \u043f\u043e\u0439\u0442\u0438 \u0432 \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f. \u041c\u043d\u043e\u0433\u043e \u0447\u0442\u043e \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u043b\u0438, \u043d\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438\u0441\u044c \u043d\u0430 sshfs."),(0,r.kt)("h2",{id:"\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-sshfs"},"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 SSHFS"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GlusterFS")," \u2014 \u044d\u0442\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u0430\u044f, \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u0430\u044f, \u043b\u0438\u043d\u0435\u0439\u043d\u043e \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u0444\u0430\u0439\u043b\u043e\u0432\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0437\u0430\u0449\u0438\u0442\u044b \u043e\u0442 \u0441\u0431\u043e\u0435\u0432. \u041d\u0423-\u041d\u0423 \ud83d\ude20"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SSHFS")," \u2014 \u044d\u0442\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u0434\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"Linux"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u0430\u044f \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 SSH \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u043a\u0430\u043a \u0431\u0443\u0434\u0442\u043e \u043e\u043d\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435."),(0,r.kt)("h2",{id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"},"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430"),(0,r.kt)("p",null,"\u041f\u043e \u0432\u0432\u043e\u0434\u043d\u044b\u043c: \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"baremetal")," \u0441\u0435\u0440\u0432\u0435\u0440 \u0441 \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u043c\u0438 HDD \u0434\u0438\u0441\u043a\u0430\u043c\u0438 \u043d\u0430 \u043e\u0432\u0435\u0440 500 \u0442\u0435\u0440\u0430\u0431\u0430\u0439\u0442. \u041d\u0430 \u0434\u0438\u0441\u043a\u0435 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0441\u0442\u0430\u0442\u0438\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043e\u0442\u0434\u0430\u0435\u043c \u0447\u0435\u0440\u0435\u0437 ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx"),". \u0417\u0430\u0434\u0430\u0447\u0430: \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u044d\u0442\u043e\u0442 \u0434\u0438\u0441\u043a \u0432 \u043e\u0431\u043b\u0430\u0447\u043d\u0443\u044e \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043a \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u043d\u043e\u0434\u0430\u043c.",(0,r.kt)("br",{parentName:"p"}),"\n","\u0423\u0441\u043b\u043e\u0432\u0438\u044f: \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e \u0438 \u043d\u0435 \u0432\u043e\u043d\u044f\u043b\u043e. \ud83e\udd12"),(0,r.kt)("p",null,"\u0422\u0443\u0442 \u0432\u0441\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u043e. \u0414\u0430\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u043d\u0430 \u043d\u0443\u0436\u043d\u043e\u0439 \u043d\u0430\u043c \u043d\u043e\u0434\u0435 \u0438 \u0448\u0430\u0440\u0430 \u043c\u043e\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0430\u043f\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/storage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sshfs -o compression=no,allow_other,reconnect storage@bashdayz.ru:/storage /mnt/storage\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"compression")," - \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u0440\u0435\u0441\u0441\u0438\u044e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allow_other")," - \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0448\u0430\u0440\u0435 "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reconnect")," - \u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0440\u0435\u043a\u043e\u043d\u0435\u043a\u0442 \u0435\u0441\u043b\u0438 \u0448\u0430\u0440\u0430 \u043e\u0442\u0432\u0430\u043b\u0438\u043b\u0430\u0441\u044c ")),(0,r.kt)("p",null,"\u0418\u0437 \u043f\u043b\u044e\u0441\u043e\u0432: \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"baremetal")," \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043d\u0435 \u043d\u0430\u0434\u043e \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043d\u0438\u043a\u0430\u043a\u043e\u0439 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u043e\u0444\u0442, \u0432\u0441\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh"),"."),(0,r.kt)("p",null,"\u041d\u043e \u0435\u0441\u0442\u044c \u043d\u044e\u0430\u043d\u0441\u044b. \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c \u0435\u0441\u043b\u0438 \u043d\u043e\u0434\u0443 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c, \u0442\u043e \u0432\u0441\u0451 \u043e\u0442\u0432\u0430\u043b\u0438\u0442\u0441\u044f. \u041b\u0438\u0431\u043e \u043f\u0440\u0438\u0434\u0443\u0442 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u043d\u043e\u0436\u043d\u0438\u0446\u044b \u0438 \u043e\u043d\u043e \u0442\u043e\u0436\u0435 \u043e\u0442\u0432\u0430\u043b\u0438\u0442\u0441\u044f. "),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0438\u0445\u0430\u0442\u044c \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"fstab")," \u043d\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442. \u0422\u0430\u043a \u043a\u0430\u043a \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043c\u0430\u0443\u043d\u0442\u0430 \u0435\u0449\u0435 \u043d\u0435\u0442 \u0441\u0435\u0442\u0438 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0432 \u043f\u043e\u043f\u044b\u0442\u043a\u0430\u0445 \u043f\u0440\u0438\u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0440\u0443. \u0410 \u043a\u043b\u044e\u0447\u0438\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"reconnect")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u0435\u043c\u0443 \u0437\u0430\u0445\u043e\u0447\u0435\u0442\u0441\u044f, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u0430\u0439\u043c\u0430\u0443\u0442\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a."),(0,r.kt)("h2",{id:"\u0440\u0435\u0448\u0435\u043d\u0438\u0435"},"\u0420\u0435\u0448\u0435\u043d\u0438\u0435"),(0,r.kt)("p",null,"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0442\u043e\u0435, \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0442\u0440\u0438 \u044e\u043d\u0438\u0442\u0430 \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),"."),(0,r.kt)("h3",{id:"\u044e\u043d\u0438\u0442-1"},"\u042e\u043d\u0438\u0442 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/etc/systemd/system/mnt-storage.mount"',title:'"/etc/systemd/system/mnt-storage.mount"'},"[Unit]\nDescription=Mount remote filesystem over sshfs with fuse\nAfter=network.target\n\n[Install]\nWantedBy=multi-user.target\n\n[Mount]\nWhat=storage@bashdayz.ru:/storage\nWhere=/mnt/storage\nType=fuse.sshfs\nOptions=kernel_cache,compression=no,allow_other,reconnect\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"After=network.target")," - \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043c\u0430\u0443\u043d\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043d\u0430 \u0445\u043e\u0441\u0442\u0435 \u043f\u043e\u0434\u043d\u0438\u043c\u0435\u0442\u0441\u044f \u0441\u0435\u0442\u044c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"What=storage@bashdayz.ru:/storage")," - \u0447\u0442\u043e \u043c\u043e\u043d\u0442\u0438\u0440\u0443\u0435\u043c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Where=/mnt/storage")," - \u043a\u0443\u0434\u0430 \u043c\u043e\u043d\u0442\u0438\u0440\u0443\u0435\u043c")),(0,r.kt)("admonition",{title:"\u0412\u0430\u0436\u043d\u043e!",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u0424\u0430\u0439\u043b \u044e\u043d\u0438\u0442\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043f\u0443\u0442\u0435\u043c \u043a\u0443\u0434\u0430 \u043c\u043e\u043d\u0442\u0438\u0440\u0443\u0435\u043c. \u0423\u0437\u043d\u0430\u0442\u044c \u0438\u043c\u044f \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemd-escape -p /mnt/storage\n"))),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0432\u044b\u0439 \u044e\u043d\u0438\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0441\u044e\u0434\u0430: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/mnt-storage.mount")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/systemd/system/mnt-storage.mount\n")),(0,r.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0443\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044e\u043d\u0438\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438, \u0435\u0441\u043b\u0438 \u0448\u0430\u0440\u0430 \u043e\u0442\u0432\u0430\u043b\u0438\u043b\u0430\u0441\u044c. \u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u044e\u043d\u0438\u0442 \u0441 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u043c:"),(0,r.kt)("h3",{id:"\u044e\u043d\u0438\u0442-2"},"\u042e\u043d\u0438\u0442 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/etc/systemd/system/mnt-storage.timer"',title:'"/etc/systemd/system/mnt-storage.timer"'},"[Unit]\nDescription=Run ssh mount /mnt/storage check\nAfter=mnt-storage.mount\n\n[Timer]\nUnit=mnt-storage.service\nOnCalendar=*-*-* *:*:00\n\n[Install]\nWantedBy=timers.target\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"After=mnt-storage.mount")," - \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0442 \u0437\u0430\u043f\u0443\u0441\u043a \u0442\u0430\u0439\u043c\u0435\u0440\u0430 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u043c\u0430\u0443\u043d\u0442 \u044e\u043d\u0438\u0442 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0449\u0435\u043d, \u0442\u043e \u0435\u0441\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0443\u0434\u0430\u043b\u0451\u043d\u043d\u0430\u044f \u0424\u0421 \u0441\u043c\u043e\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Unit=mnt-storage.service")," - \u043a\u0430\u043a\u043e\u0439 \u044e\u043d\u0438\u0442 \u0431\u0443\u0434\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u0440\u0438 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0438 \u0442\u0430\u0439\u043c\u0435\u0440\u0430. \u041e \u043d\u0451\u043c \u0447\u0443\u0442\u044c \u043d\u0438\u0436\u0435.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OnCalendar=*-*-* *:*:00")," - \u044d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442 \u043a\u0430\u0436\u0434\u0443\u044e \u043c\u0438\u043d\u0443\u0442\u0443.")),(0,r.kt)("p",null,"\u042e\u043d\u0438\u0442-\u0444\u0430\u0439\u043b \u0442\u0430\u0439\u043c\u0435\u0440\u0430 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0443\u0433\u043e\u0434\u043d\u043e. \u041d\u043e \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u043b\u043e \u043f\u043e\u043d\u044f\u0442\u043d\u0435\u0435, \u0431\u0443\u0434\u0435\u043c \u043d\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0436\u0435, \u043a\u0430\u043a \u0438 \u043c\u0430\u0443\u043d\u0442-\u044e\u043d\u0438\u0442. \u0418\u0442\u0430\u043a, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/mnt-storage.timer")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/systemd/system/mnt-storage.timer\n")),(0,r.kt)("p",null,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044e\u043d\u0438\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u043e\u0439 \u043c\u0430\u0443\u043d\u0442\u0430 \u0438 \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438:"),(0,r.kt)("h3",{id:"\u044e\u043d\u0438\u0442-3"},"\u042e\u043d\u0438\u0442 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="/etc/systemd/system/mnt-storage.service"',title:'"/etc/systemd/system/mnt-storage.service"'},'[Unit]\nDescription=SSH mount /mnt/storage check\n\n[Service]\nType=oneshot\nExecStart=/bin/bash -c "if [[ ! -f /mnt/storage/mount.yes ]] ;then systemctl restart mnt-storage.mount;fi"\n\nTimeoutSec=300\n\n[Install]\nWantedBy=multi-user.target \n')),(0,r.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c \u0432\u0441\u0451 \u043f\u0440\u043e\u0441\u0442\u043e. Bash \u0441\u0442\u0440\u043e\u043a\u0430 \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecStart")," \u044d\u0442\u043e bash\u2019\u0435\u0432\u044b\u0439 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u043e\u0447\u043d\u0438\u043a,\n\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0439 \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043c\u0430\u0440\u043a\u0435\u0440\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"mount.yes"),", \u043f\u0440\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0449\u0435\u043d \u043c\u0430\u0443\u043d\u0442-\u044e\u043d\u0438\u0442.",(0,r.kt)("br",{parentName:"p"}),"\n","\u0412 \u0431\u043e\u043b\u0435\u0435 \u043d\u043e\u0432\u043e\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," \u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u0431\u044b \u044d\u0442\u043e \u0432\u0441\u0451 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438\u043d\u0430\u0447\u0435, \u043d\u043e \u0437\u0430\u0442\u043e \u0442\u0430\u043a\u043e\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0431\u043e\u043b\u0435\u0435 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u0435\u043d."),(0,r.kt)("p",null,"C\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/mnt-storage.service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/systemd/system/mnt-storage.service\n")),(0,r.kt)("h3",{id:"\u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f"},"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f"),(0,r.kt)("p",null,"\u0420\u0435\u043b\u043e\u0434\u0438\u043c \u0438 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u043c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\nsystemctl enable mnt-storage.mount\nsystemctl enable mnt-storage.timer\n")),(0,r.kt)("p",null,"\u0422\u0440\u0435\u0442\u0438\u0439 \u044e\u043d\u0438\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"mnt-storage.service")," \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u044d\u0442\u043e\u0442 \u044e\u043d\u0438\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"mnt-storage.timer"),".",(0,r.kt)("br",{parentName:"p"}),"\n","\u041e\u043d \u0431\u0443\u0434\u0435\u0442 \u0432\u0441\u0435\u0433\u0434\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"Active: inactive (dead)"),", \u044d\u0442\u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e."),(0,r.kt)("p",null,"\u041d\u0443 \u0438 \u0432 \u0444\u0438\u043d\u0430\u043b\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u0442\u0430\u0439\u043c\u0435\u0440:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start mnt-storage.timer\n")),(0,r.kt)("h2",{id:"\u0438\u0442\u043e\u0433"},"\u0418\u0442\u043e\u0433"),(0,r.kt)("p",null,"\u0412\u043e\u0442 \u0438 \u0432\u0441\u0435! \u041d\u0430\u0448\u0430 \u0448\u0430\u0440\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u0437\u044f\u0442\u0430 \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0430. \u0410 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u0442\u0432\u0430\u043b\u0430 \u043f\u043e \u043b\u044e\u0431\u044b\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c, \u043e\u043d\u0430 \u0441\u0430\u043c\u0430 \u043f\u0435\u0440\u0435\u043c\u043e\u043d\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0431\u0435\u0437 \u043b\u0438\u0448\u043d\u0438\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432. \u041d\u0443 \u0438 \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043d\u043e\u0434\u044b, \u0442\u043e\u0436\u0435 \u0432\u0441\u0435 \u043f\u043e\u0434\u043d\u0438\u043c\u0435\u0442\u0441\u044f \u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438."),(0,r.kt)("p",null,"\u0421\u043f\u043e\u0441\u043e\u0431 \u0440\u0430\u0431\u043e\u0447\u0438\u0439, \u043f\u043e\u043b\u0435\u0442 \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0431\u043e\u043b\u0435\u0435 \u0442\u0440\u0451\u0445 \u043b\u0435\u0442. \u041c\u043e\u0436\u0435\u0448\u044c \u043f\u0440\u0438\u0441\u043f\u043e\u0441\u043e\u0431\u0438\u0442\u044c \u043a \u0441\u0432\u043e\u0438\u043c \u043a\u0430\u043a\u0438\u043c-\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u044f\u043c \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0443\u0436\u0435 \u044e\u043d\u0438\u0442\u044b, \u0430 \u043d\u0435 \u0437\u0430\u043a\u0440\u043e\u043d\u0435\u043d\u043d\u044b\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"bash")," \u0441\u043a\u0440\u0438\u043f\u0442\u044b. \u0410 \u0448\u0430\u0440\u044b \u043c\u043e\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0447\u0435\u0440\u0435\u0437 ",(0,r.kt)("inlineCode",{parentName:"p"},"sshfs"),", \u0430 \u043d\u0435 \u0447\u0435\u0440\u0435\u0437 \u0432\u043e\u043d\u044e\u0447\u0438\u0439, \u0440\u0430\u0437\u0432\u0430\u043b\u0438\u0432\u0430\u044e\u0449\u0438\u0439\u0441\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"gluster"),". \u0424\u0430\u043a \u0435\u0435\u0435! \ud83d\udc04"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u041f\u043e\u0434\u043f\u0438\u0448\u0438\u0441\u044c: ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/bashdays"},"@bashdays"))),(0,r.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u043e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0439 ",(0,r.kt)("a",{parentName:"li",href:"https://t.me/bashdays/41"},"\u043f\u043e\u0441\u0442")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://telegra.ph/YUnity-montirovaniya-sshfs-07-26"},"\u044e\u043d\u0438\u0442\u044b")," \u0432 \u0442\u0435\u043b\u0435\u0433\u0440\u0430\u0444")))}c.isMDXComponent=!0}}]);