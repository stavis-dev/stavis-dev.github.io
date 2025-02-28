"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2314],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,b=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(b,i(i({ref:t},c),{},{components:a})):r.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(4137));const o={sidebar_position:1},i="Create a Document",s={unversionedId:"docusaurus-basics/create-a-document",id:"docusaurus-basics/create-a-document",title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/docusaurus-basics/create-a-document.md",sourceDirName:"docusaurus-basics",slug:"/docusaurus-basics/create-a-document",permalink:"/docusaurus-basics/create-a-document",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/docusaurus-basics/create-a-document.md",tags:[],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1740760842,formattedLastUpdatedAt:"28 \u0444\u0435\u0432\u0440. 2025 \u0433.",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Docusaurus - Tutorial",permalink:"/category/docusaurus---tutorial"},next:{title:"Create a Blog Post",permalink:"/docusaurus-basics/create-a-blog-post"}},l={},u=[{value:"Create your first Doc",id:"create-your-first-doc",level:2},{value:"Configure the Sidebar",id:"configure-the-sidebar",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0444\u0430\u0439\u043b\u043e\u0432-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",level:3},{value:"\u0421\u0441\u044b\u043b\u043a\u0438",id:"\u0441\u0441\u044b\u043b\u043a\u0438",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-document"},"Create a Document"),(0,n.kt)("p",null,"Documents are ",(0,n.kt)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("strong",{parentName:"li"},"sidebar")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"previous/next navigation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"versioning"))),(0,n.kt)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,n.kt)("p",null,"Create a Markdown file at ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,n.kt)("p",null,"A new document is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/hello"},"http://localhost:3000/docs/hello"),"."),(0,n.kt)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,n.kt)("p",null,"Docusaurus automatically ",(0,n.kt)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,n.kt)("p",null,"Add metadata to customize the sidebar label and position:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md" {1-4}',title:'"docs/hello.md"',"{1-4}":!0},"---\nsidebar_label: 'Hi!'\nsidebar_position: 3\n---\n\n# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,n.kt)("p",null,"It is also possible to create your sidebar explicitly in ",(0,n.kt)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    'intro',\n    // highlight-next-line\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n};\n")),(0,n.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,n.kt)("h3",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0444\u0430\u0439\u043b\u043e\u0432-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u0421\u0430\u0439\u0442 ",(0,n.kt)("a",{parentName:"p",href:"https://hydra.cc/"},"hydra.cc")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u0444\u0430\u0439\u043b ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/hydra/blob/main/website/docusaurus.config.js"},"docusaurus.config.js")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u041f\u0440\u043e\u0435\u043a\u0442 ",(0,n.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"docusaurus")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u0444\u0430\u0439\u043b ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus/blob/main/website/docusaurus.config.js"},"docusaurus.config.js")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u041f\u0440\u043e\u0435\u043a\u0442 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.venom.foundation/"},"venom")," "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u0444\u0430\u0439\u043b ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/venom-blockchain/venom-blockchain.github.io/blob/main/docusaurus.config.js"},"docusaurus.config.js")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u041f\u0440\u043e\u0435\u043a\u0442 ",(0,n.kt)("a",{parentName:"p",href:"https://www.lazyvim.org/"},"lazyvim")," "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u0444\u0430\u0439\u043b - ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/LazyVim/lazyvim.github.io/blob/main/docusaurus.config.js"},"docusaurus.config.js"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/markdown-features/code-blocks"},"\u0411\u043b\u043e\u043a\u0438 \u043a\u043e\u0434\u0430"))),(0,n.kt)("h2",{id:"\u0441\u0441\u044b\u043b\u043a\u0438"},"\u0421\u0441\u044b\u043b\u043a\u0438"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 ",(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430")," \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f.")))}d.isMDXComponent=!0}}]);