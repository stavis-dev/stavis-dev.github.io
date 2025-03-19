"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[725],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,y=u["".concat(i,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(y,p(p({ref:t},d),{},{components:n})):o.createElement(y,p({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(4137));const a={author:"stavis",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 .env",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 .env \u0444\u0430\u0439\u043b\u0430\u043c\u0438. \u0425\u0440\u0430\u043d\u0438\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",tags:["modules","dotenv","decouple"]},p=void 0,l={unversionedId:"python/modules/env-dotenv",id:"python/modules/env-dotenv",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 .env",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 .env \u0444\u0430\u0439\u043b\u0430\u043c\u0438. \u0425\u0440\u0430\u043d\u0438\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",source:"@site/docs/python/modules/env-dotenv.md",sourceDirName:"python/modules",slug:"/python/modules/env-dotenv",permalink:"/python/modules/env-dotenv",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/python/modules/env-dotenv.md",tags:[{label:"modules",permalink:"/tags/modules"},{label:"dotenv",permalink:"/tags/dotenv"},{label:"decouple",permalink:"/tags/decouple"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1742411210,formattedLastUpdatedAt:"19 \u043c\u0430\u0440. 2025 \u0433.",frontMatter:{author:"stavis",title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 .env",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 .env \u0444\u0430\u0439\u043b\u0430\u043c\u0438. \u0425\u0440\u0430\u043d\u0438\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e",tags:["modules","dotenv","decouple"]},sidebar:"pythonSidebar",previous:{title:"\u041c\u043e\u0434\u0443\u043b\u0438",permalink:"/python/modules/"},next:{title:"http \u0437\u0430\u043f\u0440\u043e\u0441\u044b",permalink:"/python/modules/http-python"}},i={},s=[{value:"Python-dotenv",id:"python-dotenv",level:2},{value:"Python-decouple",id:"python-decouple",level:2},{value:"ini files",id:"ini-files",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u0424\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," - \u044d\u0442\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u043f\u0430\u0440\u044b \u043a\u043b\u044e\u0447-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0445 \u0432\u0430\u0448\u0438\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u043c.\n\u042d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0432\u043a\u043b\u044e\u0447\u0435\u043d \u0432 \u0432\u0430\u0448 \u043f\u0440\u043e\u0435\u043a\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e, \u043d\u043e \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0435\u0440\u0441\u0438\u044f\u043c\u0438,\n\u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043d\u0435 \u043f\u043e\u0434\u0432\u0435\u0440\u0433\u0430\u043b\u0438 \u0440\u0438\u0441\u043a\u0443 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title=".env"',title:'".env"'},"# environment variables defined inside a .env file\nGCP_PROJECT_ID=my-project-id\nSERVICE_ACCOUNT_FILE=path/to/serviceAccountCredentials\nSTORAGE_BUCKET_NAME=my-super-important-data\n\nDEBUG=True\nTEMPLATE_DEBUG=True\nSECRET_KEY=ARANDOMSECRETKEY\nDATABASE_URL=mysql://myuser:mypassword@myhost/mydatabase\nPERCENTILE=90%\n#COMMENTED=42\n")),(0,r.kt)("p",null,"\u0412\u043e \u0432\u0441\u0435\u0445 \u044f\u0437\u044b\u043a\u0430\u0445 \u0435\u0441\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u0434\u0430\u044e\u0442 \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438"),(0,r.kt)("p",null,"\u041f\u043e\u0447\u0442\u0438 \u0432 \u043a\u0430\u0436\u0434\u043e\u043c \u044f\u0437\u044b\u043a\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0435\u0441\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0438\u043b\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430,\n\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),",\n\u0430 \u043d\u0435 \u0438\u0437 \u0432\u0430\u0448\u0435\u0439 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0440\u0435\u0434\u044b.\n\u0414\u043b\u044f Python \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/python-dotenv/",title:"Python-dotenv pypi"},"Python-dotenv")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/HBNetwork/python-decouple",title:"Python-decouple pypi"},"Python-decouple"))),(0,r.kt)("h2",{id:"python-dotenv"},"Python-dotenv"),(0,r.kt)("p",null,"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0430\u044f \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install python-dotenv\n")),(0,r.kt)("p",null,"\u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430, \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"python-dotenv")," \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432 \u0432\u0430\u0448 \u043f\u0440\u043e\u0435\u043a\u0442 \u0432\u0441\u0435\u0433\u043e \u0434\u0432\u0443\u0445 \u0441\u0442\u0440\u043e\u043a \u043a\u043e\u0434\u0430."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"import os\nfrom dotenv import load_dotenv\n\nload_dotenv()\n\nGCP_PROJECT_ID = os.getenv('GCP_PROJECT_ID')\nSERVICE_ACCOUNT_FILE = os.getenv('SERVICE_ACCOUNT_FILE')\nSTORAGE_BUCKET_NAME = os.getenv('STORAGE_BUCKET_NAME')\n")),(0,r.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},"load_dotenv")," \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043a\u0430\u0442\u044c \u0444\u0430\u0439\u043b ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u043c \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u0438\u043b\u0438 \u043b\u044e\u0431\u044b\u0445 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430\u0445,\n\u043e\u0434\u043d\u0430\u043a\u043e \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0443\u0442\u044c, \u0435\u0441\u043b\u0438 \u0432\u0430\u0448 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0440\u0435\u0431\u0443\u0435\u0442, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \u0445\u0440\u0430\u043d\u0438\u043b\u0441\u044f \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u043c\u0435\u0441\u0442\u0435."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"from dotenv import load_dotenv\nfrom pathlib import Path\n\ndotenv_path = Path('path/to/.env')\nload_dotenv(dotenv_path=dotenv_path)\n")),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u044d\u0442\u043e \u0432\u0441\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f,\n\u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u0430\u043c \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 python-dotenv, \u043e\u0434\u043d\u0430\u043a\u043e \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439,\n\u043e \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 ","[python-dotenv][python-dotenv]","."),(0,r.kt)("h2",{id:"python-decouple"},"Python-decouple"),(0,r.kt)("p",null,"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0442\u0430\u043a \u0436\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0435\u0435\u0439, \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u043c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install python-decouple\n")),(0,r.kt)("p",null,"\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u0441 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442\u044c \u0442\u0430\u043a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"from decouple import config\n\nSECRET_KEY = config('SECRET_KEY')\nDEBUG = config('DEBUG', default=False, cast=bool)\nEMAIL_HOST = config('EMAIL_HOST', default='localhost')\nEMAIL_PORT = config('EMAIL_PORT', default=25, cast=int)\n")),(0,r.kt)("h3",{id:"ini-files"},"ini files"),(0,r.kt)("p",null,"\u041f\u0440\u0438\u044f\u0442\u043d\u044b\u043c \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c Decouple \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),", \u043d\u043e \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},".ini")," \u0444\u0430\u0439\u043b\u043e\u0432."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="settings.ini"',title:'"settings.ini"'},"[settings]\nDEBUG=True\nTEMPLATE_DEBUG=%(DEBUG)s\nSECRET_KEY=ARANDOMSECRETKEY\nDATABASE_URL=mysql://myuser:mypassword@myhost/mydatabase\nPERCENTILE=90%%\n#COMMENTED=42\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"),": \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigParser")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u043f\u043e\u043b\u044f\u0446\u0438\u044e \u0441\u0442\u0440\u043e\u043a, \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0438\u043c\u0432\u043e\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"%%"),"."),(0,r.kt)("p",null,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u0432\u0441\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 Decouple \u043c\u043e\u0436\u043d\u043e \u0443\u0437\u043d\u0430\u0442\u044c \u0432 ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/python-decouple/",title:"Python-decouple github"},"\u0440\u0435\u0442\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438")))}c.isMDXComponent=!0}}]);