"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13297:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Data Structures",sidebar_position:2},i="Packet Information",l={unversionedId:"api-specification/server",id:"api-specification/server",title:"Data Structures",description:"Hardware",source:"@site/docs/api-specification/server.mdx",sourceDirName:"api-specification",slug:"/api-specification/server",permalink:"/project-garden-sensor-array/docs/api-specification/server",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/api-specification/server.mdx",tags:[],version:"current",lastUpdatedBy:"noise404",sidebarPosition:2,frontMatter:{title:"Data Structures",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"API Calls and Responses",permalink:"/project-garden-sensor-array/docs/api-specification/openapi-spec"},next:{title:"Test Procedures",permalink:"/project-garden-sensor-array/docs/category/test-procedures"}},p={},s=[{value:"Hardware",id:"hardware",level:2},{value:"SCU",id:"scu",level:3},{value:"HUB",id:"hub",level:3},{value:"Firebase",id:"firebase",level:2},{value:"pyDocs",id:"pydocs",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packet-information"},"Packet Information"),(0,a.kt)("h2",{id:"hardware"},"Hardware"),(0,a.kt)("h3",{id:"scu"},"SCU"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disc:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Information sent from the SCU to the HUB")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Structure:")),(0,a.kt)("p",null,"String "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"formatted as ",(0,a.kt)("em",{parentName:"li"},"Soil, Temperature, Lux"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Soil: 16bit int\nTeemperature: float\nLux: float\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Comma delimited "),(0,a.kt)("li",{parentName:"ul"},"Used to report data from individual SCU's to centralized HUB's"),(0,a.kt)("li",{parentName:"ul"},"Sent every \u0394t")),(0,a.kt)("h3",{id:"hub"},"HUB"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disc:")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Information sent from the HUB to the Database")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Structure:"),"\nJSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sensorID: int\nHUBID: int\nTemperature: float\nMoisture: int\nLux: float\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sent via function call ",(0,a.kt)("em",{parentName:"li"},"'to_fb()'")," (Firebase library function)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"sensorID")," and ",(0,a.kt)("em",{parentName:"li"},"HUBID")," are unique per sensor/HUB ")),(0,a.kt)("h2",{id:"firebase"},"Firebase"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"User")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Structure:"),"\nStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"UID: String\nEmail: String\nUsername: String\nHubName: String\n- HubSerial: String\n  - SensorName: String\n    - SensorSerial: String\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Used to store user information")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Serial Map")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Structure:"),"\nStruct"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HubSerial: String\n    - HubName: String\n    - User: String\nSensorSerial: String:\n    - SensorName: String\n    - User: String\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notes:")),(0,a.kt)("h2",{id:"pydocs"},"pyDocs"),(0,a.kt)("a",{target:"_blank",href:"/doxygen/html/index.html"}," SCU docs "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("a",{target:"_blank",href:"/pydoc/Broker.html"}," Broker.py docs "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("a",{target:"_blank",href:"/pydoc/Sensor.html"}," Sensor.py docs "),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("a",{target:"_blank",href:"/pydoc/Database.html"}," Database.py docs"))}u.isMDXComponent=!0}}]);