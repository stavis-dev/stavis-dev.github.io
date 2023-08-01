"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8227],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,b=p["".concat(u,".").concat(d)]||p[d]||g[d]||o;return r?a.createElement(b,s(s({ref:t},l),{},{components:r})):a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));const o={sidebar_position:3},s="Create a Blog Post",i={unversionedId:"docusaurus-basics/create-a-blog-post",id:"docusaurus-basics/create-a-blog-post",title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",source:"@site/docs/docusaurus-basics/create-a-blog-post.md",sourceDirName:"docusaurus-basics",slug:"/docusaurus-basics/create-a-blog-post",permalink:"/docusaurus-basics/create-a-blog-post",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/docusaurus-basics/create-a-blog-post.md",tags:[],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1690894069,formattedLastUpdatedAt:"1 \u0430\u0432\u0433. 2023 \u0433.",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create a Document",permalink:"/docusaurus-basics/create-a-document"},next:{title:"Markdown Features",permalink:"/docusaurus-basics/markdown-features"}},u={},c=[{value:"Create your first Post",id:"create-your-first-post",level:2}],l={toc:c},p="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-blog-post"},"Create a Blog Post"),(0,n.kt)("p",null,"Docusaurus creates a ",(0,n.kt)("strong",{parentName:"p"},"page for each blog post"),", but also a ",(0,n.kt)("strong",{parentName:"p"},"blog index page"),", a ",(0,n.kt)("strong",{parentName:"p"},"tag system"),", an ",(0,n.kt)("strong",{parentName:"p"},"RSS")," feed..."),(0,n.kt)("h2",{id:"create-your-first-post"},"Create your first Post"),(0,n.kt)("p",null,"Create a file at ",(0,n.kt)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),(0,n.kt)("p",null,"A new blog post is now available at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/blog/greetings"},"http://localhost:3000/blog/greetings"),"."))}g.isMDXComponent=!0}}]);