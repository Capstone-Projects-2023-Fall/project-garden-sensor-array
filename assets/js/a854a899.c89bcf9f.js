"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return r?n.createElement(p,a(a({ref:t},u),{},{components:r})):n.createElement(p,a({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:1},a="System Overview",s={unversionedId:"requirements/system-overview",id:"requirements/system-overview",title:"System Overview",description:"Project Abstract",source:"@site/docs/requirements/system-overview.md",sourceDirName:"requirements",slug:"/requirements/system-overview",permalink:"/project-garden-sensor-array/docs/requirements/system-overview",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/requirements/system-overview.md",tags:[],version:"current",lastUpdatedBy:"ak74ub",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Requirements Specification",permalink:"/project-garden-sensor-array/docs/category/requirements-specification"},next:{title:"System Block Diagram",permalink:"/project-garden-sensor-array/docs/requirements/system-block-diagram"}},l={},c=[{value:"Project Abstract",id:"project-abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Background",id:"background",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-overview"},"System Overview"),(0,o.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,o.kt)("p",null,"The purpose of this project is to provide the average community gardener with little to no technical knowledge the ability to place sensors in their garden that will provide them with access to valuable information about their garden's conditions i.e., sunlight, soil moisture, and ambient temperature. This will reduce the demands on community gardeners in food-desert areas in Philadelphia by allowing them to work fewer hours while still maintaining proper garden conditions. Ultimately, this will help reduce the fresh food shortage in areas that have less common access to nutrition. We will do this by accomplishing three things, making the sensors cost-effective, reliable, and with high levels of UX design."),(0,o.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,o.kt)("p",null,"To meet this goal, we will focus on having the sensors simply require the user to power them on and install them into the soil where they desire to collect data. The sensors will utilize wireless Bluetooth communication to a central module, which will then utilize a wireless or cellular connection to a server to transmite the data. When the user logs into the our Web App using their central module\u2019s login credentials, it will display the sensor\u2019s collected information in an easy to understand way."),(0,o.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,o.kt)("p",null,"A microcontroller (either Raspberry Pi Pico W or ESP32) will be used to collect data from a light sensor (BH1750) and a soil moisture sensor (Stemma Soil Sensor) and send it to a central module that will be in charge of relaying this data to a server so that it can be displayed on a webpage for the user. This data will be sent over Bluetooth and will consist of: an integer representing the amount of sunlight received, an integer representing the soil moisture level, and a float representing the temperature of the soil. The code for the microcontrollers in charge of reading from the sensors will be written in either MicroPython, Arduino, or C, and the code for the central module will be written in either Python, C, or some combination of both."),(0,o.kt)("p",null,"In order for the central module to be able to send the data to a server where the webpage will ultimately retrieve the data an display it in a convenient way for the user, we will use MQTT(Message Query Telemetry Transport) that will send the packets as they are retrieved in real time."),(0,o.kt)("p",null,"Once the server receives the information it will store it using a Web API. When queried from an outside source, the webpage will verify the credentials requesting the information to ensure that it displays the correct central module\u2019s sensor information."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"There are already several companies that make garden sensors, but when looking at options for smaller community gardens there is no cost-effective sensor that allows users to easily collect data from their garden and view it through a web page. Instead of having community gardeners take time out of their day to confirm whether their garden requires certain levels of maintenance, with our project they will be able to reduce their working hours while simulataneously being more productive in the hours they to spend working. Another future functionality for this project is to automate certain processes such as the watering of plants to even further reduce the burden on community gardens and provide areas in need with more fresh food."))}d.isMDXComponent=!0}}]);