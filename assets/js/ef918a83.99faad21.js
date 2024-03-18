"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2832],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(4137));const i={sidebar_position:9,sidebar_label:"JavaScript",author:"Stavis",title:"\u041e\u043d\u043b\u0430\u0439\u043d JavaScript \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440",description:"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u044f\u0432\u0430\u0441\u043a\u0440\u0438\u043f\u0442 \u043e\u043d\u043b\u0430\u0439\u043d",tags:["best","js"]},s="JavaScript \u043a\u043e\u0434\u0438\u043d\u0433",o={unversionedId:"docusaurus-basics/js-live-code",id:"docusaurus-basics/js-live-code",title:"\u041e\u043d\u043b\u0430\u0439\u043d JavaScript \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440",description:"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u044f\u0432\u0430\u0441\u043a\u0440\u0438\u043f\u0442 \u043e\u043d\u043b\u0430\u0439\u043d",source:"@site/docs/docusaurus-basics/js-live-code.mdx",sourceDirName:"docusaurus-basics",slug:"/docusaurus-basics/js-live-code",permalink:"/docusaurus-basics/js-live-code",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/docusaurus-basics/js-live-code.mdx",tags:[{label:"best",permalink:"/tags/best"},{label:"js",permalink:"/tags/js"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1710774801,formattedLastUpdatedAt:"18 \u043c\u0430\u0440. 2024 \u0433.",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"JavaScript",author:"Stavis",title:"\u041e\u043d\u043b\u0430\u0439\u043d JavaScript \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440",description:"\u0422\u0440\u0435\u043d\u0430\u0436\u0435\u0440 \u044f\u0432\u0430\u0441\u043a\u0440\u0438\u043f\u0442 \u043e\u043d\u043b\u0430\u0439\u043d",tags:["best","js"]},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/docusaurus-basics/markdown-features"},next:{title:"readme",permalink:"/docusaurus-basics/img/"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript-\u043a\u043e\u0434\u0438\u043d\u0433"},"JavaScript \u043a\u043e\u0434\u0438\u043d\u0433"),(0,a.kt)("p",null,"\u0422\u0443\u0442 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0442\u0440\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 JavaScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")))}d.isMDXComponent=!0}}]);