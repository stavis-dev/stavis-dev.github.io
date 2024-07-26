"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8846],{4137:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,k=p["".concat(m,".").concat(d)]||p[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},o),{},{components:n})):a.createElement(k,i({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u[p]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const l={sidebar_label:"tmux - \u043c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0435\u043a\u0441\u043e\u0440",author:"Stavis",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e tmux",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e tmux",tags:["tmux","devops","linux"],image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flightrains.com%2Fassets%2Fimg%2Fblog%2Ftmux-tips.png"},i="\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u043e tmux",u={unversionedId:"manuals/tmux",id:"manuals/tmux",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e tmux",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e tmux",source:"@site/docs/manuals/tmux.md",sourceDirName:"manuals",slug:"/manuals/tmux",permalink:"/manuals/tmux",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/tmux.md",tags:[{label:"tmux",permalink:"/tags/tmux"},{label:"devops",permalink:"/tags/devops"},{label:"linux",permalink:"/tags/linux"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1721996051,formattedLastUpdatedAt:"26 \u0438\u044e\u043b. 2024 \u0433.",frontMatter:{sidebar_label:"tmux - \u043c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0435\u043a\u0441\u043e\u0440",author:"Stavis",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e tmux",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e tmux",tags:["tmux","devops","linux"],image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flightrains.com%2Fassets%2Fimg%2Fblog%2Ftmux-tips.png"},sidebar:"manualsSidebar",previous:{title:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",permalink:"/manuals/the-art-of-command-line"},next:{title:"Vim \u0443\u0442\u0438\u043b\u0438\u0442\u0430",permalink:"/manuals/vim/"}},m={},s=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b",level:2},{value:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u043d\u0435\u043b\u0438",id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043f\u0430\u043d\u0435\u043b\u0438",level:2},{value:"Environment",id:"environment",level:2},{value:"tmux as systemd",id:"tmux-as-systemd",level:2},{value:"Links",id:"links",level:2}],o={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430-\u043f\u043e-tmux"},"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u043e tmux"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lightrains.com/assets/img/blog/tmux-tips.png",alt:"tmux"})),(0,r.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# mac\nbrew install tmux\n\n#linux\nsudo pacman -S tmux\n")),(0,r.kt)("h2",{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b"},"\u041a\u043e\u043c\u0430\u043d\u0434\u044b"),(0,r.kt)("p",null,"\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u0435\u0441\u0441\u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+b d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u0437\u0430\u043f\u0443\u0441\u043a\ntmux\n\n# \u0437\u0430\u043f\u0443\u0441\u043a \u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435\u043c \u043d\u043e\u0432\u043e\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 'name-session'\ntmux new-session -s name-session\n\n# \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0441\u0441\u0438\u0438 \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u043e\u0434\u043d\u0430\ntmux attach\n# \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0441\u0441\u0438\u0438 name-session\ntmux attach -t name-session\n\n# \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0441\u0435\u0441\u0441\u0438 tmux\ntmux ls\n")),(0,r.kt)("h2",{id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043f\u0430\u043d\u0435\u043b\u0438"},"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u043d\u0435\u043b\u0438"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+b ?")," - help \u043f\u043e \u0433\u043e\u0440\u044f\u0447\u0438\u043c \u043a\u043b\u0430\u0432\u0438\u0448\u0430\u043c."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+b d")," - \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0441\u0435\u0441\u0441\u0438\u0438"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+b %")," - \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043d\u0435\u043b\u044c \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'Ctrl+b "')," - \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043d\u0435\u043b\u044c \u043f\u043e \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u0438;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+b c")," - \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+b w")," - \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043e\u043a\u043d\u043e \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+b 0-9")," - \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e \u043f\u043e \u0435\u0433\u043e \u043d\u043e\u043c\u0435\u0440\u0443;"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+b ,")," - \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u043e\u043a\u043d\u043ei;"),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u044b \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux"),". \u041e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u043d\u0430\u044f \u0448\u0442\u0443\u043a\u0430,\n\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430 \u0432 \u0434\u0440\u0443\u0433\u043e\u0435."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435\ntmux show-environment\n\n# \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e FOO\ntmux setenv FOO foo-one\n\ntmux setenv TV 192.168.1.55:5555\n\n# \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e\nexport FOO='foo-one'\n\nexport TV='192.168.1.55:5555'\n")),(0,r.kt)("p",null,"\u0412 \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u043e\u043a\u043d\u0430\u0445, \u0434\u0430\u043d\u043d\u044b\u0435 \u0438\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 ",(0,r.kt)("inlineCode",{parentName:"p"},"FOO"),"\n\u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b."),(0,r.kt)("h2",{id:"tmux-as-systemd"},"tmux as systemd"),(0,r.kt)("p",null,"\u041d\u0438\u043a\u0430\u043a \u043d\u0435 \u043c\u043e\u0433\u0443 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c tmux \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435"),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tmux/tmux/wiki"},"tmux repo wiki")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tmux/tmux"},"tmux repo"))))}c.isMDXComponent=!0}}]);