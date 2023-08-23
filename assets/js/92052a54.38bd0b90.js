"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[372],{4137:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=o(a),g=r,m=c["".concat(u,".").concat(g)]||c[g]||d[g]||l;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},9339:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(4137));const l={sidebar_label:"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 wireguard",author:"Stavis",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e wireguard",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e wireguard",tags:["wireguard","devops","linux"],image:"https://blog.wtigga.com/wp-content/uploads/2021/03/wireguard_logo.png"},i="\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u043e wireguard",p={unversionedId:"manuals/wireguard",id:"manuals/wireguard",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e wireguard",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e wireguard",source:"@site/docs/manuals/wireguard.md",sourceDirName:"manuals",slug:"/manuals/wireguard",permalink:"/manuals/wireguard",draft:!1,editUrl:"https://github.com/stavis-dev/stavis-dev.github.io/tree/main/docs/manuals/wireguard.md",tags:[{label:"wireguard",permalink:"/tags/wireguard"},{label:"devops",permalink:"/tags/devops"},{label:"linux",permalink:"/tags/linux"}],version:"current",lastUpdatedBy:"Stavis",lastUpdatedAt:1692810948,formattedLastUpdatedAt:"23 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{sidebar_label:"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 wireguard",author:"Stavis",title:"\u041f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e wireguard",description:"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u0430\u043c\u044f\u0442\u043a\u0430 \u043f\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e wireguard",tags:["wireguard","devops","linux"],image:"https://blog.wtigga.com/wp-content/uploads/2021/03/wireguard_logo.png"},sidebar:"tutorialSidebar",previous:{title:"\u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 VsCode",permalink:"/manuals/vscode"},next:{title:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b yt-dlp",permalink:"/manuals/yt-dlp/"}},u={},o=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043b\u044e\u0447\u0438 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u0451\u043c-\u043a\u043b\u044e\u0447\u0438-\u0434\u043b\u044f-\u0441\u0435\u0440\u0432\u0435\u0440\u0430",level:3},{value:"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043b\u044e\u0447\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430:",id:"\u0441\u043e\u0437\u0434\u0430\u0451\u043c-\u043a\u043b\u044e\u0447\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0430",level:3},{value:"Links",id:"links",level:2}],s={toc:o},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u0448\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430-\u043f\u043e-wireguard"},"\u0428\u043f\u0430\u0440\u0433\u0430\u043b\u043a\u0430 \u043f\u043e wireguard"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog.wtigga.com/wp-content/uploads/2021/03/wireguard_logo.png",alt:"wireguard"})),(0,r.kt)("h2",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,r.kt)("p",null,"\u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt upgrade -y\n")),(0,r.kt)("p",null,"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install -y wireguard\n")),(0,r.kt)("h2",{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"),(0,r.kt)("p",null,"\u0424\u0430\u0439\u043b\u044b \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /etc/wireguard\n")),(0,r.kt)("h3",{id:"\u0441\u043e\u0437\u0434\u0430\u0451\u043c-\u043a\u043b\u044e\u0447\u0438-\u0434\u043b\u044f-\u0441\u0435\u0440\u0432\u0435\u0440\u0430"},"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043b\u044e\u0447\u0438 \u0434\u043b\u044f \u0441\u0435\u0440\u0432\u0435\u0440\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wg genkey | tee /etc/wireguard/privatekey | wg pubkey | tee /etc/wireguard/publickey\n")),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 600 /etc/wireguard/privatekey\n")),(0,r.kt)("p",null,"\u0418\u043b\u0438 \u0435\u0449\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442. \u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0432\u0441\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043a \u0444\u0430\u0439\u043b\u0443 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u0433\u0440\u0443\u043f\u043f, \u043a\u0440\u043e\u043c\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),", \u0447\u0442\u043e\u0431\u044b \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0437\u0430\u043a\u0440\u044b\u0442\u043e\u043c\u0443 \u043a\u043b\u044e\u0447\u0443."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod go= /etc/wireguard/private.key\n")),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u043c, \u043a\u0430\u043a \u0443 \u0432\u0430\u0441 \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ip a\n")),(0,r.kt)("p",null,"\u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0443 \u0432\u0430\u0441 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"eth0"),", \u043d\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0438 \u0434\u0440\u0443\u0433\u043e\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,r.kt)("inlineCode",{parentName:"p"},"ens3")," \u0438\u043b\u0438 \u043a\u0430\u043a-\u0442\u043e \u0438\u043d\u0430\u0447\u0435. \u042d\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u0430\u043b\u0435\u0435 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/wireguard/wg0.conf"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/wireguard/wg0.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf",metastring:'title="wg0.conf"',title:'"wg0.conf"'},"[Interface]\nPrivateKey = <privatekey>\nAddress = 10.0.0.1/24\nListenPort = 51830\nPostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE\nPostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o eth0 -j MASQUERADE\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u0415\u0441\u043b\u0438 \u043d\u0435 \u0437\u043d\u0430\u0435\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 ",(0,r.kt)("inlineCode",{parentName:"p"},"vim")," \u2014 \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0444\u0430\u0439\u043b \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"nano"),", \u043e\u043d \u043f\u0440\u043e\u0449\u0435 \u0432 \u0440\u0430\u0431\u043e\u0442\u0435.")),(0,r.kt)("p",null,"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u2014 \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445 ",(0,r.kt)("inlineCode",{parentName:"p"},"PostUp")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"PostDown")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u043a\u0430\u043a \u0440\u0430\u0437 \u0441\u0435\u0442\u0435\u0432\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"eth0"),".\n\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0434\u0440\u0443\u0433\u043e\u0439 \u2014 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"eth0")," \u043d\u0430 \u0432\u0430\u0448."),(0,r.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u0432\u043c\u0435\u0441\u0442\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"<privatekey>")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/wireguard/privatekey")),(0,r.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c IP \u0444\u043e\u0440\u0432\u0430\u0440\u0434\u0438\u043d\u0433:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "net.ipv4.ip_forward=1" >> /etc/sysctl.conf\nsysctl -p\n')),(0,r.kt)("p",null,"\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," \u0434\u0435\u043c\u043e\u043d \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable wg-quick@wg0.service\nsystemctl start wg-quick@wg0.service\nsystemctl status wg-quick@wg0.service\n")),(0,r.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u043e\u043d\u0438\u0442\u043e\u0440 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wg\n")),(0,r.kt)("h3",{id:"\u0441\u043e\u0437\u0434\u0430\u0451\u043c-\u043a\u043b\u044e\u0447\u0438-\u043a\u043b\u0438\u0435\u043d\u0442\u0430"},"\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u043a\u043b\u044e\u0447\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wg genkey | tee /etc/wireguard/user_privatekey | wg pubkey | tee /etc/wireguard/user_publickey\n")),(0,r.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0432 \u043a\u043e\u043d\u0444\u0438\u0433 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim /etc/wireguard/wg0.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf",metastring:'title="wg0.conf"',title:'"wg0.conf"'},"[Peer]\nPublicKey = <user_publickey>\nAllowedIPs = 10.0.0.2/32\n")),(0,r.kt)("p",null,"\u0412\u043c\u0435\u0441\u0442\u043e ",(0,r.kt)("inlineCode",{parentName:"p"},"<user_publickey>")," \u2014 \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c \u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/wireguard/user_publickey")),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," \u0441\u0435\u0440\u0432\u0438\u0441 \u0441 ",(0,r.kt)("inlineCode",{parentName:"p"},"wireguard"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart wg-quick@wg0\nsystemctl status wg-quick@wg0\n")),(0,r.kt)("p",null,"\u041d\u0430 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043d\u0430 \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0435) \u0441\u043e\u0437\u0434\u0430\u0451\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b \u0441 \u043a\u043e\u043d\u0444\u0438\u0433\u043e\u043c \u043a\u043b\u0438\u0435\u043d\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vim user_wb.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[Interface]\nPrivateKey = <CLIENT-PRIVATE-KEY>\nAddress = 10.0.0.2/32\nDNS = 8.8.8.8\n\n[Peer]\nPublicKey = <SERVER-PUBKEY>\nEndpoint = <SERVER-IP>:51830\nAllowedIPs = 0.0.0.0/0\nPersistentKeepalive = 20\n")),(0,r.kt)("p",null,"\u0417\u0434\u0435\u0441\u044c ",(0,r.kt)("inlineCode",{parentName:"p"},"<CLIENT-PRIVATE-KEY> "),"\u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c \u043d\u0430 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u0442\u043e \u0435\u0441\u0442\u044c \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/wireguard/user_privatekey")," \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. ",(0,r.kt)("inlineCode",{parentName:"p"},"<SERVER-PUBKEY>")," \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c \u043d\u0430 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0442\u043e \u0435\u0441\u0442\u044c \u043d\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0444\u0430\u0439\u043b\u0430 ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/wireguard/publickey "),"\u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. ",(0,r.kt)("inlineCode",{parentName:"p"},"<SERVER-IP>")," \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u043c \u043d\u0430 IP \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,r.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u043c \u0432 Wireguard \u043a\u043b\u0438\u0435\u043d\u0442\u0435 (\u0435\u0441\u0442\u044c \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c, \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445) \u2014 \u0438 \u0436\u043c\u0435\u043c \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f."),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u043f\u043e \u043c\u043e\u0442\u0438\u0432\u0430\u043c \u0432\u0438\u0434\u0435\u043e ",(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/5Aql0V-ta8A"},"\u0432\u0438\u0434\u0435\u043e")),(0,r.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u0430\u044f ",(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-set-up-wireguard-on-ubuntu-22-04"},"\u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f")," \u043d\u0430 digitalocean")))}d.isMDXComponent=!0}}]);