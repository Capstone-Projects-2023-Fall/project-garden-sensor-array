"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:4},s="Features and Requirements",l={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-garden-sensor-array/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"noise404",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-garden-sensor-array/docs/requirements/general-requirements"},next:{title:"Use-case descriptions",permalink:"/project-garden-sensor-array/docs/requirements/use-case-descriptions"}},o={},u=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Non-functional Requirements",id:"non-functional-requirements",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,n.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"System must be able to track a plant\u2019s sunlight exposure, temperature, and soil moisture"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users must be able to track sunlight so that they can properly ensure the plant's UV intake."),(0,n.kt)("li",{parentName:"ul"},"Users must be able to track temperature so that they can properly ensure the plant's ambient temperature is survivable."),(0,n.kt)("li",{parentName:"ul"},"Users must be able to track soil moisture so that they can properly ensure the plant's water intake is sustainable."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"System must be able to show info to user while user is far away from the plants"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users must be able to provide login credentials to the system to connect it to the internet"),(0,n.kt)("li",{parentName:"ul"},"Users must be able to view all relevant data (sun, moisture, temperature) from the sensors remotely"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"System components must be able to withstand harsh outdoor conditions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"System must be waterproof, as well as be able to operate under a wide range of temperatures"),(0,n.kt)("li",{parentName:"ul"},"The system must also be secured in some way to prevent various critters from displacing it")))),(0,n.kt)("h2",{id:"non-functional-requirements"},"Non-functional Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Availability: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"High Uptime: The sensors that are connected should be available for use at nearly any time of the day.  "),(0,n.kt)("li",{parentName:"ul"},"Weather Resistant: The sensors will be protected by cases, that will allow them to still read the plant\u2019s vitals properly, but without getting damaged from inclement weather. "),(0,n.kt)("li",{parentName:"ul"},"Website Availability: The website is also available 24/7 for users to login into and use under any circumstance.  "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Performance: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Real-time Response: Sensor immediately transfers requested data to database \u2013which is then reported directly to user on website.  "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Accessibility: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Setup is Simple: The Garden Sensors should be easy to connect to the hub when setting up the device.  "),(0,n.kt)("li",{parentName:"ul"},"LED Visual Aid: LED light attachments on sensors to visibly show hydration and sunlight levels.  "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Usability:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Instructions Given: Understandable descriptions and explanations must be supplied to help ensure the sensors and the website are straightforward. "),(0,n.kt)("li",{parentName:"ul"},"Clear Interface: The Garden Sensor Website will have a very clear and easy to use interface. With useful elements like preference options and clearly defined data which makes the website easier to operate. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Accuracy:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Low Percentage Error: The Garden Sensors must achieve 5% or less in percentage error. "),(0,n.kt)("li",{parentName:"ul"},"Only Keeps Necessary Info: The sensors should only send the database data when prompted to/activated by the user. Only important data is recorded, freeing up its capacity from irrelevant data and maintaining high accuracy and response time. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Scalability:  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Easy Linking on Website: The website makes it easy for the user to connect additional monitored garden bed.  The site is carefully organized to minimize confusion on which plant bed is which. "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Security:  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Mandatory Login: To access plant data from personal sensors on the website, the system must require successful user login.  "),(0,n.kt)("li",{parentName:"ul"},"User Authentication: System prompts user to answer security questions and recreate login credentials if forgotten.  "),(0,n.kt)("li",{parentName:"ul"},"Wi-Fi Authentication: Required to authenticate network connection to ensure user safety.")))))}m.isMDXComponent=!0}}]);