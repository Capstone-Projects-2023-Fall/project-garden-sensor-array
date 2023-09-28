"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||s;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},76126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const s={sidebar_position:2},a="Sensor Control Unit Pairing",i={unversionedId:"system-architecture/sequence_diagrams",id:"system-architecture/sequence_diagrams",title:"Sensor Control Unit Pairing",description:"When users want to monitor a new plant or garden, they can do so by pairing a new sensor control unit to one of their hubs.",source:"@site/docs/system-architecture/sequence_diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence_diagrams",permalink:"/project-garden-sensor-array/docs/system-architecture/sequence_diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/system-architecture/sequence_diagrams.md",tags:[],version:"current",lastUpdatedBy:"noise404",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"design",permalink:"/project-garden-sensor-array/docs/system-architecture/design"},next:{title:"API Specification",permalink:"/project-garden-sensor-array/docs/category/api-specification"}},c={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sensor-control-unit-pairing"},"Sensor Control Unit Pairing"),(0,o.kt)("mermaid",{value:'sequenceDiagram\n\n    User --)+ Web API: clicks "Add New Sensor"\n    Web API->>+Hub: Request nearby BT devices\n\n    Hub->>+Sensor Control Unit 1: lookup_name()\n    Sensor Control Unit 1 --\x3e>-Hub: Returns device name\n    Hub->>+Sensor Control Unit 2: lookup_name()\n    Sensor Control Unit 2 --\x3e>-Hub: Returns device name\n\n    Hub--\x3e>-Web API: list_bt_devices()\n    Web API--\x3e>-User: Displays nearby BT device names\n\n    User--)Web API: Selects "Sensor 1" from list\n    Web API->>+Hub: Sends "Sensor 1"\n    Hub ->>+ Sensor Control Unit 1: connect()\n    Sensor Control Unit 1 --\x3e>-Hub: confirm_connect()\n\n    Hub--\x3e>-Web API: Confirm Sensor 1 connection\n    Web API--\x3e>User: "Sensor 1 Connected Successfully!"'}),(0,o.kt)("p",null,'When users want to monitor a new plant or garden, they can do so by pairing a new sensor control unit to one of their hubs.\nTo start, they can select "add new sensors" on the web app that will send a request to the hub to begin sending requests to\nall nearby Bluetooth devices to ask for their names. After recieving a list of all nearby devices, the hub will return that\nlist to the web app that will then prompt the user to select the sensor contol unit they wish to add. The web app then returns\nthe users selection to the hub that will then initiate a connection with the respective sensor control unit. Upon successful\nconnection, the hub returns that the connection was sucessful and the web app will display "Sensor 1 Connected Successfully!"'))}p.isMDXComponent=!0}}]);