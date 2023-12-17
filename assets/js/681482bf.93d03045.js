"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2840],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(a),g=s,u=h["".concat(c,".").concat(g)]||h[g]||p[g]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const r={sidebar_position:2},i="Use Case Diagrams",o={unversionedId:"system-architecture/sequence_diagrams",id:"system-architecture/sequence_diagrams",title:"Use Case Diagrams",description:"Use Case 1: Browsing Plant Data",source:"@site/docs/system-architecture/sequence_diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence_diagrams",permalink:"/project-garden-sensor-array/docs/system-architecture/sequence_diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/system-architecture/sequence_diagrams.md",tags:[],version:"current",lastUpdatedBy:"Gabriel Sta Ana",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-garden-sensor-array/docs/category/system-architecture"},next:{title:"Class Diagrams",permalink:"/project-garden-sensor-array/docs/system-architecture/class_diagrams"}},c={},l=[{value:"Use Case #1: Browsing Plant Data",id:"use-case-1-browsing-plant-data",level:2},{value:"Use Case #2: Monitoring Long Term Plant Growth",id:"use-case-2-monitoring-long-term-plant-growth",level:2},{value:"Use Case #3: Accessing Sensor Data in Person",id:"use-case-3-accessing-sensor-data-in-person",level:2},{value:"Use Case #4,5,6 : Monitoring Soil Moisture, Light Levels, Temperature",id:"use-case-456--monitoring-soil-moisture-light-levels-temperature",level:2},{value:"Use Case #7: Adding Additional Sensor Clusters",id:"use-case-7-adding-additional-sensor-clusters",level:2}],d={toc:l};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-case-diagrams"},"Use Case Diagrams"),(0,s.kt)("h2",{id:"use-case-1-browsing-plant-data"},"Use Case #1: Browsing Plant Data"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n    Actor User\n\n    User --\x3e>+ Dashboard: Logs into website\n    Dashboard--\x3e>-HUB Page: presses on a specific HUB\n\n   activate HUB Page\n\n    HUB Page--\x3e-SCU Page: presses on a specific SCU\n\n    activate SCU Page\n    \n    SCU Page--\x3e>+Firebase: Requests for information\n\n\n    Firebase--\x3e>-SCU Page: Sends Information of specific SCU\n\n    SCU Page--\x3e>SCU Page: Updates Graph/Icons/Averages according to new data given\n\n    SCU Page --\x3e>-User: SCU Page displays information about their plant to User\n    \n    "}),(0,s.kt)("p",null,"In an event where the user wants to know more about the condition and health of their plant, they can do so by using Garden Sensor Array's dedicated website. Upon logging in successfully, the website will then gather all HUBS that are associated with the user and have them visible to the user as a list form. All HUBS listed are clickable items and once they are clicked, the user is taken to the specialized HUB page for that specific HUB they have chosen. The HUB Page will then gather all SCU's associated with the HUB and have them shown as list form, akin to the main dashboard. Upon clicking a specific SCU, the user will be taken to the specialized SCU page for that specific SCU they have chosen. The SCU page will then request information about the specific SCU from Firebase, which stores all the information gathered from our sensors. Firebase will then send all the required information to the SCU page and the SCU page responds by updating graphs, averages, and icons according to the new data it has received. After all updates are finalized and fixed visibly within the SCU page, the user is able to see all the information they need about their plant."),(0,s.kt)("h2",{id:"use-case-2-monitoring-long-term-plant-growth"},"Use Case #2: Monitoring Long Term Plant Growth"),(0,s.kt)("mermaid",{value:'sequenceDiagram\n    Actor User\n    participant GSA Home Page\n    participant Login Page\n    participant Database \n    participant My Sensors Page \n    participant Specific Sensor Page\n\n    User->>+GSA Home Page: Accesses Website \n    activate GSA Home Page\n    GSA Home Page->>+Login Page: Clicks login button\n    Login Page--\x3e>User: Login prompt\n    User->>Login Page: Enters login info \n    Login Page->>+Database: Sends info entered \n    deactivate Login Page \n    Database--\x3e>Database: Verifies login info\n    Database--\x3e>GSA Home Page: Succesfully logged in\n    GSA Home Page--\x3e>User: Return\n    deactivate GSA Home Page\n    User->>+My Sensors Page: Clicks My Sensors Tab\n    My Sensors Page--\x3e>User: Prompts to choose specific sensor\n\n    deactivate My Sensors Page\n    User->>+Specific Sensor Page: Chooses sensor they want to know about\n    Specific Sensor Page--\x3e>User: Return\n    User->>Specific Sensor Page: Clicks "Show History"\n    Specific Sensor Page--\x3e>Database: Requests all recorded data \n    Database->>Specific Sensor Page: Sends data\n    deactivate Database \n    Specific Sensor Page--\x3e>User: Return\n\n    deactivate Specific Sensor Page\n    User--\x3e>User: Looking for trends in plant/sensor history\n'}),(0,s.kt)("p",null,'Not only does the Garden Sensor Array allow for users to get real-time information about thier plant, but it also allows for users to check previously recorded data as well. This becomes useful in events where the user wants to find trends or patterns in their plant\'s history, epspecially if the plant in question is growing much slower than expected. The User can go to the GSA website and login. Once the credentials that were entered in by the user are verifed with the database, the user will be succesfully logged in. Now, they can select the "My Sensors Tab" located at the top of the page. At this point the user will be presented with all the sensor units they have connected and can pick the one they specifically want to know more about. When the specifc sensor is chosen, the user will be redirected to that specific sensor\'s page. Here, the user will have the option to view all the sensor\'s recorded data by clicking "Show History". This button requests all the appropriate data from the database; and once returned, the page will be able to show the full recorded history that the sensor took of the plant. The user will be able to check for any trends to solve the growth problem.'),(0,s.kt)("h2",{id:"use-case-3-accessing-sensor-data-in-person"},"Use Case #3: Accessing Sensor Data in Person"),(0,s.kt)("mermaid",{value:"sequenceDiagram\n\n    title Accessing Sensor Data\n\n    actor user\n    participant plant\n    participant SCU\n    participant GSA Database\n    participant GSA Website\n\nactivate plant\n\n\nuser --\x3e plant: Waters\n\nplant --\x3e+ SCU: Reads condition\n\nSCU --\x3e SCU: Toggles LED on/off\n\nSCU --)+ GSA Database: Writes Data\ndeactivate SCU\n\nuser --\x3e SCU: Observes\n\nGSA Database --)+ GSA Website: Updates\ndeactivate GSA Database\n\ndeactivate plant\n"}),(0,s.kt)("p",null,"It isn't always convinient for a user to access their devices while in their garden so, for convenience, the sensor cluster unit is equipped with a LED that changes state based on measured data. When sensor data is read, the unit will decide whether or not to update the LED, and the user need only to look upon its visage to determine whether sufficient gardening has been done. "),(0,s.kt)("h2",{id:"use-case-456--monitoring-soil-moisture-light-levels-temperature"},"Use Case #4,5,6 : Monitoring Soil Moisture, Light Levels, Temperature"),(0,s.kt)("mermaid",{value:'sequenceDiagram\n    Actor User\n    participant GSA Home Page\n    participant Login Page\n    participant Database \n    participant My Sensors Page \n    participant Specific Sensor Page\n\n    User->>+GSA Home Page: Accesses Website \n    activate GSA Home Page\n    GSA Home Page->>+Login Page: Clicks login button\n    Login Page--\x3e>User: Login prompt\n    User->>Login Page: Enters login info \n    Login Page->>+Database: Sends info entered \n    deactivate Login Page \n    Database--\x3e>Database: Verifies login info\n    Database--\x3e>GSA Home Page: Succesfully logged in\n    GSA Home Page--\x3e>User: Return\n    deactivate GSA Home Page\n    activate My Sensors Page\n    User->>+My Sensors Page: Clicks My Sensors Tab\n    My Sensors Page--\x3e>User: Prompts to choose specific sensor\n\n    deactivate My Sensors Page\n    User->>+Specific Sensor Page: Chooses sensor they want to know about\n    Specific Sensor Page--\x3e>User: Return\n    User->>Specific Sensor Page: Clicks "Show Daily Recap or Show Weekly Recap"\n    Specific Sensor Page--\x3e>Database: Requests last hours/ last weeks data \n    Database->>Specific Sensor Page: Sends data\n    deactivate Database \n    Specific Sensor Page--\x3e>User: Return\n\n    deactivate Specific Sensor Page\n    User--\x3e>User: Looking for current light levels, soil moisture, and temperature. \n'}),(0,s.kt)("p",null,"The gardener seeks for their daily or weekly data on their sensors page. The database mantains three averages. The weekly, daily, or hourly average of their sensor's readings of light levels, soil moisture, or temperature. Once the gardener reaches the site's page on their sensors, the home page of that sensor will display one of the requested averages from the user in a drop down menu underneath that sensors readings. On default the home page of the sensor will display the daily monitoring. If the user wishes to be able to see the levels locally at the sensor, the sensor will display on their metric otherwise a green or red LED on the sensors status. The threshold of whether its red or green can be set by the user under sensor settings page. "),(0,s.kt)("h2",{id:"use-case-7-adding-additional-sensor-clusters"},"Use Case #7: Adding Additional Sensor Clusters"),(0,s.kt)("mermaid",{value:'sequenceDiagram\n\n    Actor User\n    participant GSA Website\n    participant Firebase\n    participant Hub\n    participant SCU\n    \n    User -)+ GSA Website: clicks "Add New Sensor"\n    GSA Website ->>+ Firebase: Sends sensor registration info\n    Firebase->>+Firebase: Associates Sensor with account\n    Firebase->>+GSA Website: Sensor Page added\n    \n    loop\n        SCU--)Hub: Sends raw sensor data\n        Hub--)Firebase: Organizes sensor data\n        Firebase--)GSA Website: Sends processed data\n        GSA Website --\x3e> User: Displays relevant plant data\n    end'}),(0,s.kt)("p",null,"When users want to monitor a new plant or garden, they can do so by pairing a new sensor control unit to o their account. First, they type the sensor's serial number and desired name they want to give the sensor (any plant name or identifier). That information goes to Firebase where that sensor is associated with that user's account, at which point a page will be created on the website and sensor data will begin populating it and will update continuously in real time. This sensor data is transmitted from sensors via a Hub device that the user paired beforehand."))}h.isMDXComponent=!0}}]);