"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:4},l="Features and Requirements",o={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-garden-sensor-array/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"Gabriel Sta Ana",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-garden-sensor-array/docs/requirements/general-requirements"},next:{title:"Use-case descriptions",permalink:"/project-garden-sensor-array/docs/requirements/use-case-descriptions"}},s={},u=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Non-functional Requirements",id:"non-functional-requirements",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,n.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users will be able to connect one or more sensors to the hub device using bluetooth"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users will be able to pair sensors to a hub by pressing buttons on each device simultaneously"),(0,n.kt)("li",{parentName:"ul"},"The device will provide some kind of LED confirmation of successful pairing"),(0,n.kt)("li",{parentName:"ul"},"Alternatively, sensors could come pre-paired to the hub"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The hub will be able to recieve and interpret signals from the sensors"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Sensors will periodically turn on and send readings to the hub device"),(0,n.kt)("li",{parentName:"ul"},"Hub will interpret the signals and prepare them to be sent as readable information to the database"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"There will be a database that can store user credentials and plant data sent from the hub device"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The database will include authentication information like user names and passwords"),(0,n.kt)("li",{parentName:"ul"},"It will also store historical light and moisture data collected by the user's sensors"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Users will be able to log in to a front-end web app that provides various utilities"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Upon logging in, users can connect the hub to their PC to provide network credentials"),(0,n.kt)("li",{parentName:"ul"},"The hub will then be able to connect to the user's WiFi to transmit data from sensors to the database"),(0,n.kt)("li",{parentName:"ul"},"The web app will also display the user's plants' recent light and moisture data from the database"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sensor will be able to withstand harsh outdoor conditions"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Sensors must be waterproof, as well as be able to operate under a wide range of temperatures"),(0,n.kt)("li",{parentName:"ul"},"The sensors must also be secured in some way to prevent various critters from displacing it")))),(0,n.kt)("h2",{id:"non-functional-requirements"},"Non-functional Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On the user\u2019s end there will be a very easy to understand and interactive data table to present the user\u2019s plant history that has been collected so far.  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The table will have clear markings and indications of what data it\u2019s showcasing. There will be columns for everything that is being tracked by the sensors, so: sunlight, soil moisture, and ambient temperature.   "),(0,n.kt)("li",{parentName:"ul"},"The user will be able to filter the data entries to facilitate the search for specific information.  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The data table will have options to show all of its collected data, data from the past 4 weeks, data from the past week, and data from the past 24 hours.  "),(0,n.kt)("li",{parentName:"ul"},"The data table will also allow the user to filter which columns it\u2019s showing. This gives the user the option to see only what they want to see. If the user only wants to see data collected about soil moisture, then they can filter the data table to do so.  "))),(0,n.kt)("li",{parentName:"ul"},"The user will not have to input any query language like SQL in order to filter out and find the specific data that they are looking for. Optimizing user experience is a key aspect of the website. The data table will provide drop down lists where the user can select what columns they want to see and the time frame they want it in."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Garden Sensor Website will include a page titled: Plant Encyclopedia. This page will supply the users with basic information about native/local plants in the Philadelphia area."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For each plant listed, there will be an accompanying picture, as well as basic instructions on how to take care of it.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"What type of soil it grows best/worst in, the best/worst temperature for the plant, common pests and vermin, and more.  "))),(0,n.kt)("li",{parentName:"ul"},"The plants listed on the page will be organized by skill level. Garden Sensor encourages people of all experience levels to participate in gardening. This feature will list the plants in either: Amateur/Beginner, Moderate, and Expert.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"For example, the plants that are the easiest to take care of (the least amount of care needed) will be listed under the \u201cBeginner\u201d category.")))))))}c.isMDXComponent=!0}}]);