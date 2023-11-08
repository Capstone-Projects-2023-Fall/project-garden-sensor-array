"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[5105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1,description:"Descriptions of the frontend classes, data-fields, and methods."},i="Frontend API",s={unversionedId:"api-specification/frontend-api",id:"api-specification/frontend-api",title:"Frontend API",description:"Descriptions of the frontend classes, data-fields, and methods.",source:"@site/docs/api-specification/frontend-api.md",sourceDirName:"api-specification",slug:"/api-specification/frontend-api",permalink:"/project-garden-sensor-array/docs/api-specification/frontend-api",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/api-specification/frontend-api.md",tags:[],version:"current",lastUpdatedBy:"roda33",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Descriptions of the frontend classes, data-fields, and methods."},sidebar:"docsSidebar",previous:{title:"Design Document - Part II API",permalink:"/project-garden-sensor-array/docs/api-specification/design-api-intro"},next:{title:"API 1 - Swagger Petstore",permalink:"/project-garden-sensor-array/docs/api-specification/openapi-spec"}},o={},p=[{value:"App",id:"app",level:2},{value:"NavBar",id:"navbar",level:2},{value:"Tabs",id:"tabs",level:2},{value:"Main_Content",id:"main_content",level:2},{value:"HomePage",id:"homepage",level:2},{value:"WeatherCard",id:"weathercard",level:2},{value:"Weather",id:"weather",level:2},{value:"MySensorsPage",id:"mysensorspage",level:2},{value:"SensorSelection_Card",id:"sensorselection_card",level:2},{value:"SpecificSensorPage",id:"specificsensorpage",level:2},{value:"DataTable",id:"datatable",level:2},{value:"PlantFigure",id:"plantfigure",level:2},{value:"AccountPage",id:"accountpage",level:2},{value:"AddorDelSensor",id:"addordelsensor",level:2},{value:"Footer",id:"footer",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frontend-api"},"Frontend API"),(0,r.kt)("h2",{id:"app"},"App"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),"  "),(0,r.kt)("p",null,"The App file is what holds all of the react components of this application. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"N/A")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")," "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"triggerLandingPage(): void")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"triggers the landing page of the website. The landing page will have a description of what Garden Sensor Array is and it will also include buttons that will trigger the login and resgister pages.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"triggerLoginPage(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers the login page. ")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"triggerRegiserPage(): void")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Triggers the sign-up page. ")),(0,r.kt)("h2",{id:"navbar"},"NavBar"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),"  "),(0,r.kt)("p",null,"The NavBar class represents the navigation bar that will be located at the top of the website (once logged in) and will allow for the user to navigate between differnt pages. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"page_id: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The page_id attribute lets the application know which page it's on/wants to be shown. ")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"triggerNextPage(page_id: int): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"triggerNextPage takes in the page_id and then triggers the next page chosen (which is decided by the page_id).")),(0,r.kt)("h2",{id:"tabs"},"Tabs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"The tabs will be buttons on the navigation bar. There will be a tab for each page, this includes: home page, my sensors page, account page, and the help page. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"page_id: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The page_id attribute lets the application know which page it's on/wants to be shown. ")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"setPage_id(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"changes the page_id value so the correct page chosen can be accessed.")),(0,r.kt)("h2",{id:"main_content"},"Main_Content"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"The main content class will focus on what is displayed in the screen underneath the navigaton bar (header) and above the footer. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"page_id: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The page_id attribute lets the application know which page it's on/wants to be shown. "))),(0,r.kt)("li",{parentName:"ul"},"username: String() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string attribute for the user's username "))),(0,r.kt)("li",{parentName:"ul"},"password: String() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string attribute for the user's password"))),(0,r.kt)("li",{parentName:"ul"},"name: String() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string attrubute for the user's name"))),(0,r.kt)("li",{parentName:"ul"},"email: String()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string attribute for the email the user is linking to the account"))),(0,r.kt)("li",{parentName:"ul"},"account_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identfication for the user's account"))),(0,r.kt)("li",{parentName:"ul"},"sensor_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identification for that specifc sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensorCount: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the amount of sensors that is linked to the account"))),(0,r.kt)("li",{parentName:"ul"},"garden_name: String()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the name the user has assigned to the sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensors_linked[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an array of sensor ids, in case the user wants/has more than one sensor unit")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"fetch(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The fetch function will be used to fetch data about the user and their sensor(s) so it's sub classes can use them.")),(0,r.kt)("h2",{id:"homepage"},"HomePage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"The home page will be the page that the user is immedieately taken to once they have logged in or completed registration. It will show the current weather status and some general tips on plant care. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"page_id: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The page_id attribute lets the application know which page it's on/wants to be shown."))),(0,r.kt)("li",{parentName:"ul"},"account_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identfication for the user's account"))),(0,r.kt)("li",{parentName:"ul"},"generalTips[]: Object ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an object that has key/value pairs. Each tip will have a paired value")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"random(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"picks random numbers out of a given range. The numbers returned will be used to pick which tip object is displayed ")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"displayGeneralTips(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"displays the specific pairs chosen from the generalTips object.")),(0,r.kt)("h2",{id:"weathercard"},"WeatherCard"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Descriptio:")," "),(0,r.kt)("p",null,"The weather card component will be the weather portion mentioned on the HomePage. The card will constantly be updating, as the weather will reflect the current condions occuring. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cardTemp: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the temperature showing on the weather card "))),(0,r.kt)("li",{parentName:"ul"},"condition_descrip: String() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string variable that describes the weather condtions - ex: sunny, raining, cloudy, etc. ")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"refreshWeather(): void")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"refreshes the weather card so that the card is always reflecting real time api data")),(0,r.kt)("h2",{id:"weather"},"Weather"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"This component works with the weather card, and specifically aims at providing the weather api for the card. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields"),"   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cardTemp: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the temperature showing on the weather card "))),(0,r.kt)("li",{parentName:"ul"},"condition_descrip: String() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string variable that describes the weather condtions - ex: sunny, raining, cloudy, etc. ")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"fetch(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The fetch function will be used to fetch data from the weather api")),(0,r.kt)("h2",{id:"mysensorspage"},"MySensorsPage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"This will the page that users will click on in order to get information about their connected sensors. The page will consits of cards - one for each sensor. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"lastUpdated: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"holds the calendar date of the last time the user requested a sensor update"))),(0,r.kt)("li",{parentName:"ul"},"account_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identfication for the user's account"))),(0,r.kt)("li",{parentName:"ul"},"sensor_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identification for that specifc sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensorCount: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the amount of sensors that is linked to the account"))),(0,r.kt)("li",{parentName:"ul"},"garden_name: String()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the name the user has assigned to the sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensors_linked[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an array of sensor ids, in case the user wants/has more than one sensor unit")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"fetch(): void")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"calling another fectch function to get the last calendar date that user requested a sensor update. ")),(0,r.kt)("h2",{id:"sensorselection_card"},"SensorSelection_Card"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"Each card located on the MySensorsPage will have brief info for identification purposes (like sensor id, sensor name, etc). The cards will be clickable and once they are clicked, they lead to their specifc sensor page. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields"),"   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"account_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identfication for the user's account"))),(0,r.kt)("li",{parentName:"ul"},"sensor_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identification for that specifc sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensorCount: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the amount of sensors that is linked to the account"))),(0,r.kt)("li",{parentName:"ul"},"garden_name: String()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the name the user has assigned to the sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensors_linked[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an array of sensor ids, in case the user wants/has more than one sensor unit")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"handleClick(): void")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Makes the card component clickable and leads to the specific sensor's page")),(0,r.kt)("h2",{id:"specificsensorpage"},"SpecificSensorPage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,'SpecifcSensorPage component will be the page where the users will see detailed information about the specifc sensor they have selected. The page is broken into 3 sections. The top half will show the last updated stats for water and sunlgiht levels, as well as a button to activate the sensors and get current/realtime statistics. The bottom left will a "show history" button that opens up a datatable. Lastly, the bottom right will have a helpful figure to aid in understanding the data prodcued by the sensors. '),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"account_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identfication for the user's account"))),(0,r.kt)("li",{parentName:"ul"},"sensor_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identification for that specifc sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensorCount: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the amount of sensors that is linked to the account"))),(0,r.kt)("li",{parentName:"ul"},"garden_name: String()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the name the user has assigned to the sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensors_linked[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an array of sensor ids, in case the user wants/has more than one sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"temp: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int variable representing the most recent temperature recorded by the sensor"))),(0,r.kt)("li",{parentName:"ul"},"soil_moisture: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int variable representing the most recent soil moisture level rercorded by the sensor"))),(0,r.kt)("li",{parentName:"ul"},"light_level: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int variable representing the most recent light level recroded by the sensor")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"fetch(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sends request to the backend to fetch new readings from the sensor")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"updateTemp(): int")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"takes data gathered from fetch and updates the int temp variable")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"updateSoil(): int")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"takes data gathered from fetch and updates the int soil_moisture variable")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"updateLight(): int")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"takes data gathered from fetch and updates teh int light_level variable ")),(0,r.kt)("h2",{id:"datatable"},"DataTable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,'Activated by the "Show History" Button, this datatable will provide the user with all recorded data from the sensor. The table will be easy to understand and will have content prefrences features to facilitate the process for the user. '),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields"),"   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"account_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identfication for the user's account"))),(0,r.kt)("li",{parentName:"ul"},"sensor_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identification for that specifc sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensorCount: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the amount of sensors that is linked to the account"))),(0,r.kt)("li",{parentName:"ul"},"garden_name: String()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the name the user has assigned to the sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensors_linked[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an array of sensor ids, in case the user wants/has more than one sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"temp: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int variable representing the most recent temperature recorded by the sensor"))),(0,r.kt)("li",{parentName:"ul"},"soil_moisture: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int variable representing the most recent soil moisture level rercorded by the sensor"))),(0,r.kt)("li",{parentName:"ul"},"light_level: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int variable representing the most recent light level recroded by the sensor"))),(0,r.kt)("li",{parentName:"ul"},"past_temps[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int array that holds previously recorded temperatures "))),(0,r.kt)("li",{parentName:"ul"},"past_soil_moistures[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int array that holds previously recorded soil moisture levels"))),(0,r.kt)("li",{parentName:"ul"},"past_light_levels[]: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"int array that holds previously recorded sun light levels")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Datatable(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"creates a datatable component ")),(0,r.kt)("h2",{id:"plantfigure"},"PlantFigure"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"This component will provide a figure paired with a small explanation. The figure will show a diagram that helps explain what the data for water and sunlgiht levels mean, and how they would look when applied to an average plant. The purpose of this figure is to help the user understand what the data we are giving them means. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields:")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"plant_description: string() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string that describes the purpose of the figure")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods")," "),(0,r.kt)("h2",{id:"accountpage"},"AccountPage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"The AccountPage is another page that can be accessed through the navigation bar. It will display the user's account information. The page will also have a section where the user can add or delete sensors. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"username: String() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string attribute for the user's username "))),(0,r.kt)("li",{parentName:"ul"},"password: String() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string attribute for the user's password"))),(0,r.kt)("li",{parentName:"ul"},"name: String() ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string attrubute for the user's name"))),(0,r.kt)("li",{parentName:"ul"},"email: String()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"string attribute for the email the user is linking to the account"))),(0,r.kt)("li",{parentName:"ul"},"account_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identfication for the user's account"))),(0,r.kt)("li",{parentName:"ul"},"sensor_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identification for that specifc sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensorCount: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the amount of sensors that is linked to the account"))),(0,r.kt)("li",{parentName:"ul"},"garden_name: String()",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the name the user has assigned to the sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensors_linked[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an array of sensor ids, in case the user wants/has more than one sensor unit")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"fetch(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fetches any account info saved in the database ")),(0,r.kt)("h2",{id:"addordelsensor"},"AddorDelSensor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"This component will allow for the user to add or delete another sensor to their account. The component will make sure that the user will always have at least one sensor linked to the account at all times. As of right now, there is a max of 3 sensors per account. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"account_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identfication for the user's account"))),(0,r.kt)("li",{parentName:"ul"},"sensor_id: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the numerical identification for that specifc sensor unit"))),(0,r.kt)("li",{parentName:"ul"},"sensorCount: int",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the amount of sensors that is linked to the account"))),(0,r.kt)("li",{parentName:"ul"},"sensors_linked[]: int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"an array of sensor ids, in case the user wants/has more than one sensor unit")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Methods"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"addSensor(): void")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prompts user to fill out form to create new Garden Class object, also updates sensorCount variable\n",(0,r.kt)("inlineCode",{parentName:"li"},"delSensor(): void")),(0,r.kt)("li",{parentName:"ul"},"Updates sensorCount and deletes the chosen Garden Class object")),(0,r.kt)("h2",{id:"footer"},"Footer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:")," "),(0,r.kt)("p",null,"The footer that will be located at the very bottom of the page. Does not serve a function but will be on every page. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data Fields")," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"N/A\n",(0,r.kt)("strong",{parentName:"li"},"Methods"),"  "),(0,r.kt)("li",{parentName:"ul"},"N/A")))}m.isMDXComponent=!0}}]);