"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[549],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(4137));const l={title:"\u0411\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a",author:"stavis",description:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u041f\u0438\u0442\u043e\u043d\u0435",tags:["dataclasses","\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a"]},i=void 0,o={unversionedId:"python/algorithms/binary_search",id:"python/algorithms/binary_search",title:"\u0411\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a",description:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u041f\u0438\u0442\u043e\u043d\u0435",source:"@site/docs/python/algorithms/binary_search.md",sourceDirName:"python/algorithms",slug:"/python/algorithms/binary_search",permalink:"/python/algorithms/binary_search",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/python/algorithms/binary_search.md",tags:[{label:"dataclasses",permalink:"/tags/dataclasses"},{label:"\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a",permalink:"/tags/\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439-\u043f\u043e\u0438\u0441\u043a"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1690887008,formattedLastUpdatedAt:"1 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"\u0411\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a",author:"stavis",description:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0432 \u041f\u0438\u0442\u043e\u043d\u0435",tags:["dataclasses","\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a"]},sidebar:"tutorialSidebar",previous:{title:"x_comprehensions",permalink:"/python/functions/x_comprehensions"},next:{title:"\u041b\u0443\u0447\u0448\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 python",permalink:"/python/best-practices-python"}},p={},s=[{value:"\u0411\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a python",id:"\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439-\u043f\u043e\u0438\u0441\u043a-python",level:2},{value:"\u041d\u0430\u0439\u0442\u0438 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439 \u043a\u043e\u0440\u0435\u043d\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a",id:"\u043d\u0430\u0439\u0442\u0438-\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439-\u043a\u043e\u0440\u0435\u043d\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439-\u043f\u043e\u0438\u0441\u043a",level:2},{value:"Links",id:"links",level:2},{value:"Leetcode",id:"leetcode",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0411\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0432 ",(0,a.kt)("strong",{parentName:"p"},"\u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u043e\u043c \u043c\u0430\u0441\u0441\u0438\u0432\u0435"),"."),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u043c \u043f\u043e\u0438\u0441\u043a\u0435 \u0438\u0441\u043a\u043e\u043c\u044b\u0439 \u043a\u043b\u044e\u0447 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441 \u043a\u043b\u044e\u0447\u043e\u043c \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0441\u0441\u0438\u0432\u0435. \u0415\u0441\u043b\u0438 \u043e\u043d\u0438 \u0440\u0430\u0432\u043d\u044b, \u0442\u043e \u043f\u043e\u0438\u0441\u043a \u0443\u0441\u043f\u0435\u0448\u0435\u043d.\n\u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u043e\u0438\u0441\u043a \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0432 \u043b\u0435\u0432\u043e\u0439 \u0438\u043b\u0438 \u043f\u0440\u0430\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u044f\u0445 \u043c\u0430\u0441\u0441\u0438\u0432\u0430."),(0,a.kt)("p",null,"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d \u0432 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e\u0439 \u0438 \u043d\u0435\u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0430\u0445."),(0,a.kt)("p",null,"\u0411\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u0442\u0430\u043a\u0436\u0435 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442 ",(0,a.kt)("strong",{parentName:"p"},"\u043f\u043e\u0438\u0441\u043a\u043e\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u043c \u0434\u0435\u043b\u0435\u043d\u0438\u044f")," \u043e\u0442\u0440\u0435\u0437\u043a\u0430 \u043f\u043e\u043f\u043e\u043b\u0430\u043c \u0438\u043b\u0438 \u0434\u0438\u0445\u043e\u0442\u043e\u043c\u0438\u0438."),(0,a.kt)("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0430\u0433\u043e\u0432 \u043f\u043e\u0438\u0441\u043a\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u0441\u044f \u043a\u0430\u043a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"log2n")),(0,a.kt)("p",null,"\u0433\u0434\u0435 n-\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432."),(0,a.kt)("p",null,"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c \u0445\u043e\u0440\u043e\u0448\u043e \u043e\u043f\u0438\u0441\u0430\u043d \u0432 ",(0,a.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA"},"\u0432\u0438\u043a\u0438\u043f\u0435\u0434\u0438\u0438"),", \u0442\u0443\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0432 \u043a\u043e\u0434."),(0,a.kt)("h2",{id:"\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439-\u043f\u043e\u0438\u0441\u043a-python"},"\u0411\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from typing import List\n\ndef binary_search(nums: List[int], target: int) -> int:\n        left, right = 0, len(nums) - 1\n        while left <= right:\n            mid = (left + right) // 2\n            if nums[mid] == target:\n                return mid\n            elif nums[mid] < target:\n                left = mid + 1\n            else:\n                right = mid - 1\n        return left\n")),(0,a.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043d\u0434\u0435\u043a\u0441 \u0438\u0441\u043a\u043e\u043c\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0438\u043b\u0438, \u0435\u0441\u043b\u0438 \u0442\u0430\u043a\u043e\u0432\u043e\u0433\u043e \u043d\u0435\u0442, \u0438\u043d\u0434\u0435\u043a\u0441, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"target"),"\n\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"nums = [1, 3, 5, 6, 7, 9, 15, 18, 20]; target = 8\n\nprint(binary_search(nums, target))\n# 5\n")),(0,a.kt)("h2",{id:"\u043d\u0430\u0439\u0442\u0438-\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439-\u043a\u043e\u0440\u0435\u043d\u044c-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439-\u043f\u043e\u0438\u0441\u043a"},"\u041d\u0430\u0439\u0442\u0438 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439 \u043a\u043e\u0440\u0435\u043d\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a"),(0,a.kt)("p",null,"\u0417\u0430\u0434\u0430\u0447\u0430 \u043d\u0430 ",(0,a.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/sqrtx/"},"leetcode.com")),(0,a.kt)("p",null,"\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u043d\u0435\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e x, \u0432\u0435\u0440\u043d\u0438\u0442\u0435 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0439 \u043a\u043e\u0440\u0435\u043d\u044c \u0438\u0437 x, \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u043d\u044b\u0439 \u0432 \u043c\u0435\u043d\u044c\u0448\u0443\u044e \u0441\u0442\u043e\u0440\u043e\u043d\u0443 \u0434\u043e \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0433\u043e \u0446\u0435\u043b\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430.\n\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0446\u0435\u043b\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u0430\u043a\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c."),(0,a.kt)("p",null,"\u0412\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a\u0443\u044e-\u043b\u0438\u0431\u043e \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u044d\u043a\u0441\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0438\u043b\u0438 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440."),(0,a.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 pow(x, 0.5) \u0432 c++ \u0438\u043b\u0438 x ** 0.5 \u0432 python."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Input: x = 4\nOutput: 2\nExplanation: The square root of 4 is 2, so we return 2.\n")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Input: x = 8\nOutput: 2\nExplanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def mySqrt(x: int) -> int:\n    left, right = 1, x\n    while left <= right:\n        mid = (left + right) // 2\n        if mid * mid == x:\n            return mid\n        if mid * mid > x:\n            right = mid - 1\n        else:\n            left = mid + 1\n    return right\n")),(0,a.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"print(mySqrt(12))\n# 3\n")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("h3",{id:"leetcode"},"Leetcode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/search-insert-position/"},"https://leetcode.com/problems/search-insert-position/"))))}m.isMDXComponent=!0}}]);