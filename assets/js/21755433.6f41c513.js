"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8181],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),m=i,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:4},o="Circuit Diagram",c={unversionedId:"system-architecture/circuit_diagram",id:"system-architecture/circuit_diagram",title:"Circuit Diagram",description:"circuitdiagram",source:"@site/docs/system-architecture/circuit_diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/circuit_diagram",permalink:"/project-garden-sensor-array/docs/system-architecture/circuit_diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/system-architecture/circuit_diagram.md",tags:[],version:"current",lastUpdatedBy:"ak74ub",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Class Diagrams",permalink:"/project-garden-sensor-array/docs/system-architecture/class_diagrams"},next:{title:"API Specification",permalink:"/project-garden-sensor-array/docs/category/api-specification"}},s={},l=[{value:"Parts included",id:"parts-included",level:3},{value:"Connections Descriptions",id:"connections-descriptions",level:3},{value:"Description",id:"description",level:3}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"circuit-diagram"},"Circuit Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"circuit_diagram",src:r(88353).Z,width:"1523",height:"863"})),(0,i.kt)("h3",{id:"parts-included"},"Parts included"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lipo 3V Battery"),(0,i.kt)("li",{parentName:"ul"},"Raspberry Pico W"),(0,i.kt)("li",{parentName:"ul"},"BH1750"),(0,i.kt)("li",{parentName:"ul"},"Seesaw Soil Sensor"),(0,i.kt)("li",{parentName:"ul"},"3 Red LED"),(0,i.kt)("li",{parentName:"ul"},"6 Green LED")),(0,i.kt)("h3",{id:"connections-descriptions"},"Connections Descriptions"),(0,i.kt)("p",null,"The above diagram depicts the following connections"),(0,i.kt)("p",null,"(1) Lipo3V Battery "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(+) Connections",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Raspberry Pico W VSS Pin 39"),(0,i.kt)("li",{parentName:"ul"},"BH1750 VCC Pin"),(0,i.kt)("li",{parentName:"ul"},"Seesaw Soil Sensor VIN Pin")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(-) Connections",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Raspberrry Pico W GND Pin"),(0,i.kt)("li",{parentName:"ul"},"BH 1750 GND Pin"),(0,i.kt)("li",{parentName:"ul"},"Seesaw Soil Sensor GND Pin"),(0,i.kt)("li",{parentName:"ul"},"(6) LED Negative connections")))),(0,i.kt)("p",null,"(2) Raspbery PI Pico W"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Pin 1 GP0 to BH1750 SCL Pin\n- Pin 2 GP1 to BH1750 SDA Pin\n- Pin 14 GP10 to Seesaw Soil Sensor SDA Pin\n- Pin 15 GP11 to Seesaw Soil Sensor SCL Pin\n- GND Pin to Lipo 3V Battery (-) Connection\n- Pin 39 VSS Pin to Lipo 3V Battery (+) Connection\n- Pin GP17 through Pin GP 22 to LED (+) Side\n    - Pin GP17 through Pin GP19 are connected to Red LED\n    - Pin GP20 through Pin GP22 are connected to Green LED.\n")),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The above diagram is to be used to help facilitate how you can connect the pins to the Raspberry Pico W to the sensors used for the Garden Sensor Array.\nNOTE : The LEDs have to be connected to the correct pins order when differentiating between Greed and Red"))}u.isMDXComponent=!0},88353:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Garden_Sensor_schem-d21c5b036288e3c835c8b71067a829ed.png"}}]);