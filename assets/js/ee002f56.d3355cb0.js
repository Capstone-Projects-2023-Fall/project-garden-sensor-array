"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1935],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=s.createContext({}),h=function(e){var t=s.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=h(e.components);return s.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=h(a),u=n,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return a?s.createElement(g,i(i({ref:t},l),{},{components:a})):s.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var h=2;h<r;h++)i[h]=a[h];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var s=a(87462),n=(a(67294),a(3905));const r={sidebar_position:3},i="Class Diagrams",o={unversionedId:"system-architecture/class_diagrams",id:"system-architecture/class_diagrams",title:"Class Diagrams",description:"Hub Class Diagram",source:"@site/docs/system-architecture/class_diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/class_diagrams",permalink:"/project-garden-sensor-array/docs/system-architecture/class_diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/system-architecture/class_diagrams.md",tags:[],version:"current",lastUpdatedBy:"ak74ub",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Use Case Diagrams",permalink:"/project-garden-sensor-array/docs/system-architecture/sequence_diagrams"},next:{title:"Circuit Diagram",permalink:"/project-garden-sensor-array/docs/system-architecture/circuit_diagram"}},c={},h=[{value:"Hub Class Diagram",id:"hub-class-diagram",level:2},{value:"Sensor Array Class Diagram",id:"sensor-array-class-diagram",level:2},{value:"Web API Class Diagram",id:"web-api-class-diagram",level:2}],l={toc:h};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,n.kt)("h2",{id:"hub-class-diagram"},"Hub Class Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"system_block_diagram",src:a(83368).Z,width:"771",height:"142"})),(0,n.kt)("p",null,"This sequence diagram describes the code package that will be run on the Garden Sensor Array's hub device. Here we have the Broker class that acts as the main class for the hub,\nand it is responsible for controlling the flow of data from the sensors to the database as well as for connecting the hub device to WiFi. It connects to WiFi by having users\nenter WiFi credentials while the device is plugged into a computer. These credentials are then written to the Raspberry Pi's config file to allow it to connect to the internet\nwirelessly. Broker also has the search_devices() function that scans nearby Bluetooth devices, determines which are unused Garden Sensors, and returns a list of them. The Sensors\nare represented by the Sensor class, which stores their id and name. The Sensor class' connect() method then uses that id to connect to its respective sensor. The listen() method will\nthen be used to recieve data from that sensor and return it as an array of integers representing temperature, moisture, and sunlight. Another class we have is Database, which stores\ncredentials that will be used by the Database class' connect() to connect the device to a given user's database table where their plant's data will be written using write_data(). "),(0,n.kt)("h2",{id:"sensor-array-class-diagram"},"Sensor Array Class Diagram"),(0,n.kt)("mermaid",{value:"classDiagram\n    SensorMain --\x3e BluetoothBLE\n    SensorMain o-- BLECharacteristic \n    SensorMain o-- AdafruitSeesaw\n    SensorMain o-- BH1750\n    SensorMain --\x3e Wire\n    \n    class SensorMain{\n        -AdafruitSeesaw soilSensor\n        -BH1750 lightSensor\n        -BLECharacteristic soilCharacteristic\n        -BLECharacteristic lightCharacteristic\n        setup() void\n        loop() void\n    }\n\n    class BluetoothBLE{\n        +begin() bool\n        +end() void\n        +advertise() bool\n        +stopAdvertise() void\n        +setEventHandler(eventType, callback) void\n    }\n\n    class BLECharacteristic{\n        +BLECharacteristic(uuid, properties, value, valueSize) BLECharacteristic\n    }\n\n    class AdafruitSeesaw{\n        +begin(address) bool\n        +getTemp() float\n        +touchRead() uint16_t\n    }\n\n    class BH1750{\n        +begin(address) bool\n        +readLightLevel() float\n    }\n\n    class Wire{\n        +begin() void\n    }"}),(0,n.kt)("p",null,"This Diagram outlines the basic architecture of the sensor units. SensorMain is the program ran by the sensor units, and it has relationships to several important classes: Adafruit_Seesaw (the soil moisture and temperature sensor), BH1750 (the ambient light sensor), BluetoothBLE (the library for finding and connecting to other Bluetooth BLE devices), and BLECharacteristic (the library for managing BLECharacteristics and how they change). Importantly, SensorMain contains objects of type Adafruit_Seesaw, for representing the soil sensor; BH1750, for representing the light sensor; and BLECharacteristic, which will track the data recorded by the sensors and send data to the hub when there is new information to report. SensorMain does not directly contain any objects of type BluetoothBLE, but it will access functions from that library to initiate the BLE connection."),(0,n.kt)("h2",{id:"web-api-class-diagram"},"Web API Class Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"system_block_diagram",src:a(11344).Z,width:"1541",height:"1838"})),(0,n.kt)("p",null,'Pictured above is the UML Class Diagram for the frontend portion of the website. These are all the components that the user will directly view and interact with. The diagram is component focused as the website itself is written using React.js - which is component based. The first component at the very top is "App.js". This file is what holds all the components of the entire website, it is necessary in all react applications. This is the reason why the components underneath all eventually flow towards App.js - as it all the components are stated there. The Landingpage function is triggered which leads to the landing component - this acts as a gateway for the user to register or login into their account. Once the user is officially logged in or registered they will be directed to the fundamental part of the website. Each page on the website at this point will have three sections, a navigation bar at the top, a footer at the bottom, and the main aspect right in the center (the main aspect is the main topic shown on screen). The main component has four direct sub components. These components include: Home Page, My Sensors Page, Account Page, and Help/Setup. Each of these components have elements that create their "pages". The Home Page will have a top portion and a bottom portion. The top will display the current weather of the location that the user has set in their account page. It will only show the weather happening in real time- as reported by weather outlets, it will not forecast the hours or days after it. The bottom portion will have revolving tips that show general gardening tips. The next component titled My Sensors Page will cover the most important feature of the website. This page will showcase at least one card. Each sensor linked on the account will have their own card. The card will have the sensor id, the garden name, and it will also be clickable. When clicked it brings the user to that specific sensor\'s page. The specific sensor page shows the last updated statistics that were recorded, as well as button to activate the sensor and get real time statistics. A helpful figure will be on the bottom portion of this page. It gives a visual diagram of how to understand what the readings from the sensors mean and how they would apply in real life for the user. Sharing the bottom portion will be a "Show History" button that triggers the data-table. The data-table will have all the recorded info from this specific sensor. It\'s easy to read and easy to navigate, as usability is an essential factor of the website. Another page the user can access is the Account Page. This shows all the information entered during registration, and it also has a sub component that allows for the user to add or delete sensors linked to their account. The last main component page is the Help/Setup page, this does not have any actions or functions, just an explanation of everything the user might need to know to ensure they have a good experience using the Garden Sensor Array. The navigation bar and the footer stay the same no matter what, but the main component is what will change. The attribute: "page_id: int" is what lets the system know which "page" is which..The navigation bar will have tabs that allows the user to switch from one main aspect to another. The footer will be placed at the very bottom of the page and will have the product logo that is clickable, and leads back to the home page. When viewing this class diagram the relationships between the components are visible, and they all use aggregation. This is because without the parent the child is non- existent. For example, you can only get to a specific sensor\'s data table by accessing the "My Sensors Page" first, otherwise it is inaccessible/ unattainable.'))}d.isMDXComponent=!0},11344:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/frontend-ed38139a8e7bb96d6b412e95e731e6f6.png"},83368:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/hub-ec200aed7cdfcb1568b72126c62d91ac.png"}}]);