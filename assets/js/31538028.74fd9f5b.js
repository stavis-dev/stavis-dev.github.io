"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7967],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5642:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(4137));const l={sidebar_label:"HiveOs",author:"stavis",title:"HiveOs - \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 HiveOs, \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",tags:["hiveos","linux","devops"]},i=void 0,o={unversionedId:"manuals/hiveos",id:"manuals/hiveos",title:"HiveOs - \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 HiveOs, \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",source:"@site/docs/manuals/hiveos.md",sourceDirName:"manuals",slug:"/manuals/hiveos",permalink:"/manuals/hiveos",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/hiveos.md",tags:[{label:"hiveos",permalink:"/tags/hiveos"},{label:"linux",permalink:"/tags/linux"},{label:"devops",permalink:"/tags/devops"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1715432985,formattedLastUpdatedAt:"11 \u043c\u0430\u044f 2024 \u0433.",frontMatter:{sidebar_label:"HiveOs",author:"stavis",title:"HiveOs - \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",description:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 HiveOs, \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b",tags:["hiveos","linux","devops"]},sidebar:"manualsSidebar",previous:{title:"GPG - \u0448\u0438\u0444\u0440\u043e\u0432\u0430\u043d\u0438\u0435",permalink:"/manuals/gpg"},next:{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u043c\u0430\u043d\u0434 Linux",permalink:"/manuals/linux-command-line"}},p={},s=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",level:2},{value:"\u0421\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 IP",id:"\u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439-ip",level:3},{value:"Watchdog",id:"watchdog",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Watchdog",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-watchdog",level:4},{value:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",id:"\u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435-\u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a",level:3},{value:"\u041b\u043e\u0433\u0438",id:"\u043b\u043e\u0433\u0438",level:2},{value:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438",id:"\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435-\u0441\u0441\u044b\u043b\u043a\u0438",level:2},{value:"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442 \u043d\u0430 \u0444\u043e\u0440\u0443\u043c\u0430\u0445",id:"\u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f-\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442-\u043d\u0430-\u0444\u043e\u0440\u0443\u043c\u0430\u0445",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,r.kt)("h3",{id:"\u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439-ip"},"\u0421\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 IP"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://hiveon.com/knowledge-base/guides/ip/"},"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b \u0441\u0442\u0430\u0442\u044c\u0438")," \u0432 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438")),(0,r.kt)("p",null,"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0442\u0443\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /hive-config/network/20-ethernet.network\n")),(0,r.kt)("p",null,"\u0414\u043b\u044f wireless \u0441\u0435\u0442\u0435\u0439 \u0442\u0443\u0442:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat /hive-config/network/30-wireless.network\n")),(0,r.kt)("p",null,"\u0424\u0430\u0439\u043b \u0432\u044b\u0433\u043b\u044f\u0434\u0438\u0442 \u0442\u0430\u043a:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"root@ssh:~# cat /hive-config/network/20-ethernet.network \n[Match]\n#Match eth0, eth1, ... interfaces. Don't change it to other names\nName=e*\n\n[Network]\nDHCP=yes\n\n#Uncomment the following for static IP, set DHCP=no\n#Address=192.168.0.189/24\n#Gateway=192.168.0.1\n#DNS=192.168.0.1\n\n#to disable IPV6 if it's not disabled in grub\n#LinkLocalAddressing=no\n#IPv6AcceptRA=no\n\n[DHCP]\nClientIdentifier=mac\nRouteMetric=10\n")),(0,r.kt)("p",null,"\u041d\u0443 \u0438 \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0434\u043b\u044f \u0440\u0438\u0433\u0430 \u0441 \u0430\u0434\u0440\u0435\u0441\u043e\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.1.12")," \u0431\u0443\u0434\u0435\u0442 \u0442\u0430\u043a\u0438\u043c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[Network]\nDHCP=no\nAddress=192.168.1.12/24\nGateway=192.168.1.1\nDNS=192.168.1.1\n")),(0,r.kt)("h3",{id:"watchdog"},"Watchdog"),(0,r.kt)("p",null,"\u0412\u0430\u0436\u043d\u0430\u044f \u0448\u0442\u0443\u043a\u0430, \u043a\u0430\u043a \u043e\u043a\u0430\u0437\u0430\u043b\u043e\u0441\u044c.\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f ",(0,r.kt)("a",{parentName:"p",href:"https://open-dev.ru/watchdog"},"OpenDev Watchdog"),",\n\u0430 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e ",(0,r.kt)("a",{parentName:"p",href:"https://open-dev.ru/mining/tproduct/230408497-351859668740-usb-watchdog-lite"},"USB WatchDog Lite"),".",(0,r.kt)("br",{parentName:"p"}),"\n","\u0420\u0438\u0433 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0442\u043d\u0443\u0442\u044c \u043f\u043e \u0440\u0430\u0437\u043d\u044b\u043c \u043f\u0440\u0438\u0447\u0438\u043d\u0430\u043c, \u0434\u0430 \u0435\u0449\u0435 \u0442\u0430\u043a, \u0447\u0442\u043e \u043d\u0438\u043a\u0430\u043a\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430\n\u043d\u0430 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0443 \u043d\u0435 \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442. \u0422\u043e\u043b\u044c\u043a\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u0430\u0442\u0447\u0434\u043e\u0433\u0430, \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u043e\u0439"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/hive/opt/opendev/watchdog-opendev reset\n")),(0,r.kt)("h4",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-watchdog"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 Watchdog"),(0,r.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 USB \u0432\u043e\u0442\u0447\u0434\u043e\u0433\u043e\u0432."),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043e\u0431\u0440\u0430\u043d\u0443\u0436\u0438\u043b \u043b\u0438 \u0440\u0438\u0433 \u0432\u043e\u0442\u0447\u0434\u043e\u0433."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u043a\u043e\u043c\u0430\u043d\u0434\u0430\njournalctl -u hive -b0\n\n# \u0434\u043e\u043b\u0436\u043d\u043e \u0432\u044b\u0434\u0430\u0442\u044c \u0447\u0442\u043e \u0442\u043e \u0442\u0438\u043f\u0430\nOct 28 23:37:55 worker hive[861]: Watchdogs OpenDev found: 1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434 \u0432\u043e\u0442\u0447\u0434\u043e\u0433\u0430:\n/hive/opt/opendev/watchdog-opendev\n\n# \u0432\u044b\u0432\u043e\u0434\nUsage: watchdog-opendev  ping|reset|power [port]\n       watchdog-opendev  fw|read|settings [port]\n       watchdog-opendev  temp|temperature [port]\n       watchdog-opendev  write <settings> [port]\n       watchdog-opendev  decode <settings>\n       watchdog-opendev  enable|disable [port]\n       watchdog-opendev  poweroff [port]\n")),(0,r.kt)("p",null,"\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u0438\u0445 \u043f\u043b\u0430\u0442\u0430\u0445 \u0432\u043e\u0442\u0447\u0434\u043e\u0433\u0438 \u043c\u043e\u0433\u0443\u0442 \u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u044d\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\n\u0438\u0437-\u0437\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"(+/-)")," \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0432\u043e\u0442\u0447\u0434\u043e\u0433\u0435 \u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u043d\u0441\u043a\u043e\u0439 \u043f\u043b\u0430\u0442\u0435.\n\u0420\u0435\u0448\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0437\u0430\u043c\u0435\u043d\u043e\u0439 \u043c\u0435\u0441\u0442\u0430\u043c\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432."),(0,r.kt)("p",null,"\u0422\u0435\u0441\u0442 \u043d\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0432\u043e\u0442\u0447\u0434\u043e\u0433\u0430 \u043c\u043e\u0436\u043d\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c.\n\u041e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c 2 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430. \u0412 \u043f\u0435\u0440\u0432\u043e\u043c \u043f\u0438\u043d\u0433\u0443\u0435\u043c \u043d\u0443\u0436\u043d\u0443\u044e \u043c\u0430\u0448\u0438\u043d\u0443,\n\u0432\u043e \u0432\u0442\u043e\u0440\u043e\u043c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c\u0441\u044f \u043f\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh")," \u043a \u043c\u0430\u0448\u0438\u043d\u0435 \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/hive/opt/opendev/watchdog-opendev reset\n")),(0,r.kt)("p",null,"\u041d\u0443, \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0432\u043e\u0442\u0447\u0434\u043e\u0433\u0430, \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438,\n\u043f\u0438\u043d\u0433 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u043e\u043f\u0430\u0441\u0442\u044c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# 1\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\nping 192.168.1.10\n\n# 2\u0439 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b ssh 10\n/hive/opt/opendev/watchdog-opendev reset\n")),(0,r.kt)("h3",{id:"\u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435-\u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b-\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"},"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),(0,r.kt)("p",null,"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u0440\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0440\u0438\u0433\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c \u043e\u0441\u0442\u0430\u0432\u0448\u0435\u0435\u0441\u044f \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0435\ndisk-expand\n\n# \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c wi-fi \u0435\u0441\u043b\u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f\nwifi-disable\n")),(0,r.kt)("h2",{id:"\u043b\u043e\u0433\u0438"},"\u041b\u043e\u0433\u0438"),(0,r.kt)("p",null,'\u041e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0432\u0430\u0436\u043d\u044b\u0445 \u043d\u0430\u0432\u044b\u043a\u043e\u0432 \u043a\u0430\u043a \u0432 \u043c\u0430\u0439\u043d\u0438\u043d\u0433\u0435, \u0442\u0430\u043a \u0438 \u0432\u043e\u043e\u0431\u0449\u0435 \u0432 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043b\u0438\u043d\u0443\u043a\u0441 \u0441\u0438\u0441\u0442\u0435\u043c\n\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0430\u043d\u0430\u043b\u0438\u0437 \u043b\u043e\u0433\u043e\u0432. \u041a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e \u0434\u043b\u044f \u043c\u0430\u0439\u043d\u0438\u043d\u0433\u0430 \u044d\u0442\u043e \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u043e\u0442\u043b\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c "\u0431\u043e\u043b\u044c\u043d\u044b\u0435" \u043a\u0430\u0440\u0442\u044b.\n\u0420\u0435\u0434\u0436\u0435\u043a\u0442\u044b, \u043d\u0435\u0432\u0430\u043b\u0438\u0434\u043d\u044b\u0435 \u0448\u0430\u0440\u044b \u0438 \u0442. \u0434.'),(0,r.kt)("p",null,"\u0418\u0442\u0430\u043a.\n\u041b\u043e\u0433\u0438, \u043a\u0430\u043a \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e \u0432 \u043b\u0438\u043d\u0443\u043a\u0441 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log")),(0,r.kt)("p",null,"\u041b\u043e\u0433\u0438 \u043c\u0430\u0439\u043d\u0435\u0440\u043e\u0432 \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"hiveos")," \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441 \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/miner/")," \u0438 \u0434\u0430\u043b\u0435\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043c\u0430\u0439\u043d\u0435\u0440\u0430."),(0,r.kt)("p",null,"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043c\u0430\u0439\u043d\u0435\u0440\u044b \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls /var/log/miner\n")),(0,r.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043b\u043e\u0433\u0438 \u043c\u0430\u0439\u043d\u0435\u0440\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"phoenix")," \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u0447\u0438\u0442\u0430\u0435\u043c \u043b\u043e\u0433 \u0444\u0435\u043d\u0438\u043a\u0441 \u043c\u0430\u0439\u043d\u0435\u0440\u0430\nless /var/log/miner/phoenixminer/phoenixminer.log\n\n# \u0447\u0438\u0442\u0430\u0435\u043c \u043b\u043e\u0433 nbminer\nless /var/log/miner/nbminer/nbminer.log\n")),(0,r.kt)("p",null,"\u041e\u0434\u043d\u0430\u043a\u043e \u044d\u0442\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0430\u043c \u043f\u043e\u043a\u0430\u0436\u0443\u0442 \u0432\u0435\u0441\u044c \u0444\u0430\u0439 \u043b\u043e\u0433\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439, \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u043b\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c.\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u044b\u0432\u043e\u0434 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0447\u0443\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0435\u0435."),(0,r.kt)("p",null,"\u042f \u0445\u043e\u0447\u0443 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 \u0440\u0435\u0434\u0436\u0435\u043a\u0442\u044b \u0432 \u0444\u0435\u043d\u0438\u043a\u0441 \u043c\u0430\u0439\u043d\u0435\u0440\u0435. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u044f \u0431\u0443\u0434\u0443 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043c\u0430\u043d\u0434\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"grep")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# -i - \u0438\u0441\u043a\u0430\u0442\u044c \u0431\u0435\u0437 \u0443\u0447\u0435\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\n# -w - \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0447\u043d\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 \u0431\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0439\n# -n - \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u0430 \u0441\u0442\u0440\u043e\u043a.\n\ngrep -iwn 'Share rejected' /var/log/miner/phoenixminer/phoenixminer.log\n\n# \u041e\u0447\u0435\u043d\u044c \u0443\u0434\u043e\u0431\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \n# -B # - \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c # \u0441\u0442\u0440\u043e\u043a \u0414\u041e \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f.\n# -\u0410 # - \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c # \u0441\u0442\u0440\u043e\u043a \u041f\u041e\u0421\u041b\u0415 \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f.\n\ngrep -iwn -B 2 'Share rejected' /var/log/miner/phoenixminer/phoenixminer.log\n\n")),(0,r.kt)("h2",{id:"\u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435-\u0441\u0441\u044b\u043b\u043a\u0438"},"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hiveos.farm/guides_ru/"},"\u0413\u0430\u0439\u0434\u044b \u0438 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u043f\u043e Hive Os")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://download.hiveos.farm/latest/"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0432\u0435\u0440\u0441\u0438\u044f HiveOs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://download.hiveos.farm/history/VERSIONS.txt"},"\u0422\u0435\u043a\u0441\u0442\u043e\u0432\u0430\u044f \u0438\u0441\u0442\u043e\u0438\u0440\u044f \u0432\u0435\u0440\u0441\u0438\u0439")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://download.hiveos.farm/history/"},"HTML \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0432\u0435\u0440\u0441\u0438\u0439 HiveOs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://download.hiveos.farm/"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hiveos.farm/guides-nvidia_dr_ru/"},"\u041a\u0430\u043a \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u044b?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://download.hiveos.farm/drivers/"},"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u043e\u0432"))),(0,r.kt)("h3",{id:"\u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f-\u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442-\u043d\u0430-\u0444\u043e\u0440\u0443\u043c\u0430\u0445"},"\u041e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u0440\u0442 \u043d\u0430 \u0444\u043e\u0440\u0443\u043c\u0430\u0445"),(0,r.kt)("p",null,"\u0422\u0435\u043c\u044b \u043f\u043e \u043a\u0430\u0440\u0442\u0430\u043c \u0441 \u0444\u043e\u0440\u0443\u043c\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://miningclub.info/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://miningclub.info/threads/vse-rtx-3080-10gb-v-majninge.70017/"},"\u0412\u0421\u0415 RTX 3080 10gb \u0432 \u043c\u0430\u0439\u043d\u0438\u043d\u0433\u0435"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://miningclub.info/threads/vse-rtx-3060ti-v-majninge.72385/",title:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0440\u0443\u043c miningclub"},"\u0412\u0421\u0415 RTX 3060ti \u0432 \u043c\u0430\u0439\u043d\u0438\u043d\u0433\u0435"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://miningclub.info/threads/palit-dual-3060ti-xeshrejt-majnit-eth-kak-3070-63mh-na-130vatt-novyj-lider-v-linejke-rtx30.72834/"},"Palit Dual 3060Ti"))),(0,r.kt)("li",{parentName:"ul"})))}m.isMDXComponent=!0}}]);