"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,g=u["".concat(c,".").concat(p)]||u[p]||h[p]||s;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={sidebar_position:2},o="Use Case Diagrams",i={unversionedId:"system-architecture/sequence_diagrams",id:"system-architecture/sequence_diagrams",title:"Use Case Diagrams",description:"Use Case 1: Browsing Plant Data",source:"@site/docs/system-architecture/sequence_diagrams.md",sourceDirName:"system-architecture",slug:"/system-architecture/sequence_diagrams",permalink:"/project-garden-sensor-array/docs/system-architecture/sequence_diagrams",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/system-architecture/sequence_diagrams.md",tags:[],version:"current",lastUpdatedBy:"Sam GL",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"design",permalink:"/project-garden-sensor-array/docs/system-architecture/design"},next:{title:"Class Diagrams",permalink:"/project-garden-sensor-array/docs/system-architecture/class_diagrams"}},c={},l=[{value:"Use Case #1: Browsing Plant Data",id:"use-case-1-browsing-plant-data",level:2},{value:"Use Case #7: Adding Additional Sensor Clusters",id:"use-case-7-adding-additional-sensor-clusters",level:2},{value:"Use Case #8: Resetting Password",id:"use-case-8-resetting-password",level:2}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-case-diagrams"},"Use Case Diagrams"),(0,a.kt)("h2",{id:"use-case-1-browsing-plant-data"},"Use Case #1: Browsing Plant Data"),(0,a.kt)("mermaid",{value:'sequenceDiagram\n    Actor User\n\n    User --\x3e>+ GSA Website: clicks "Plant Data" dropdown list\n    GSA Website->>+Plant Database: requests for Plant Information\n   \n    Plant Database--\x3e>-GSA Website: sends Plant Information\n    \n    GSA Website->>-Plant Data (Dropdown List): Updates Plant Data Dropdown List according to Database\n    activate GSA Website\n    activate Plant Data (Dropdown List)\n    Plant Data (Dropdown List)--\x3e>-User: Plant Data Dropdown List is shown to the User after update\n    \n    '}),(0,a.kt)("p",null,'In an event where the user wants to browse through their Plant data, they can do so by using Garden Sensor Array\'s dedicated website. In the GSA Website, the user will be given the option to press the "Plant Data" button. By selecting this button, the GSA Website will then request for the current Plant information stored within the Plant Databse. The Plant Database, upon receiving the request, will send out the current Plant information collected from the sensors to the GSA Website. The website will then take this information and update the Plant Data Dropdown list with its corresponding data field. Once the update has been completed, the newly updated Plant Data Dropdown list will be shown to the user for viewing within the GSA Website.'),(0,a.kt)("h2",{id:"use-case-7-adding-additional-sensor-clusters"},"Use Case #7: Adding Additional Sensor Clusters"),(0,a.kt)("mermaid",{value:'sequenceDiagram\n\n    User --)+ Web API: clicks "Add New Sensor"\n    Web API->>+Hub: Request nearby BT devices\n\n    Hub->>+Sensor Control Unit 1: lookup_name()\n    Sensor Control Unit 1 --\x3e>-Hub: Returns device name\n    Hub->>+Sensor Control Unit 2: lookup_name()\n    Sensor Control Unit 2 --\x3e>-Hub: Returns device name\n\n    Hub--\x3e>-Web API: list_bt_devices()\n    Web API--\x3e>-User: Displays nearby BT device names\n\n    User--)Web API: Selects "Sensor 1" from list\n    Web API->>+Hub: Sends "Sensor 1"\n    Hub ->>+ Sensor Control Unit 1: connect()\n    Sensor Control Unit 1 --\x3e>-Hub: confirm_connect()\n\n    Hub--\x3e>-Web API: Confirm Sensor 1 connection\n    Web API--\x3e>User: "Sensor 1 Connected Successfully!"'}),(0,a.kt)("p",null,'When users want to monitor a new plant or garden, they can do so by pairing a new sensor control unit to one of their hubs.\nTo start, they can select "add new sensors" on the web app that will send a request to the hub to begin sending requests to\nall nearby Bluetooth devices to ask for their names. After recieving a list of all nearby devices, the hub will return that\nlist to the web app that will then prompt the user to select the sensor contol unit they wish to add. The web app then returns\nthe users selection to the hub that will then initiate a connection with the respective sensor control unit. Upon successful\nconnection, the hub returns that the connection was sucessful and the web app will display "Sensor 1 Connected Successfully!"'),(0,a.kt)("h2",{id:"use-case-8-resetting-password"},"Use Case #8: Resetting Password"),(0,a.kt)("mermaid",{value:'\nsequenceDiagram\n\n    Actor User\n\n    User->>+Login Page: Navigates to GSA Login Page\n\n    activate Login Page\n\n    Login Page --\x3e> User: Login Prompt\n    User ->> Login Page: Selects "Trouble Logging in?" button\n    Login Page --\x3e>+ Account Recovery Page: Redirects to\n\n    Account Recovery Page ->> User: Prompts for Recovery Credentials\n    User --\x3e> Account Recovery Page: Enters Credentials\n    Account Recovery Page ->>+ User Database: Relays Credentials\n\n    User Database --\x3e> User Database: Validates Credentials\n    User Database --\x3e> Account Recovery Page: Confirms Identity\n    Account Recovery Page --\x3e>+ Password Change Page: Redirects to\n\n    deactivate Account Recovery Page\n\n    Password Change Page ->> User: Prompts for new Password\n    User --\x3e> Password Change Page: Enters New Password\n    Password Change Page --\x3e> User Database: Updates User Password\n    User Database --) Password Change Page: Confirms Update\n    deactivate User Database\n    Password Change Page --\x3e> User: Confirmation Message\n\n    Password Change Page --\x3e>- Login Page: Redirects to\n    Login Page --\x3e> User: Login Prompt\n\n    User ->> Login Page: Enters Credentials\n    Login Page --\x3e>- Account Page: Redirects to'}),(0,a.kt)("p",null,'If the user finds themselves in a position where they need to reset their password, they are able to do so by navigating to the login page, and selecting the "Trouble Loggin In?" button. This will redirect them to an account recovery page, which prompts them to enter their recovery credentials (Email and secret questioon). After the user enters their credentials, they will be checked against the information stored in the user database. Upon confirmation, the user will be redirected to a page which prompts for an updated password. Once the new password is entered, it is updated in the user database, and the user is again redirected to the login page. Here, the user is able to enter their newly reestablished credentials, and log in, taking them to the account page.'))}u.isMDXComponent=!0}}]);