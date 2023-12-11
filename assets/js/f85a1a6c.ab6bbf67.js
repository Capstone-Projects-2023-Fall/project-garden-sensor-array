"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),g=o,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=g;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const s={sidebar_position:1},i="Unit tests",a={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit tests",description:"SCU(Sensor Control Unit) Unit Test",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-garden-sensor-array/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"noise404",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-garden-sensor-array/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-garden-sensor-array/docs/testing/integration-testing"}},c={},u=[{value:"SCU(Sensor Control Unit) Unit Test",id:"scusensor-control-unit-unit-test",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"unit-tests"},"Unit tests"),(0,o.kt)("h2",{id:"scusensor-control-unit-unit-test"},"SCU(Sensor Control Unit) Unit Test"),(0,o.kt)("p",null,"For this testing metric we use GitHub actions to test our logic when we update our SCU technology.\nWe created data type structures to represent the connecting sensors to the SCU, and update the logic\nwe use in their .uf2 files. If there is a push or pull request made on the main branch, we ensure\nthat if there is any change in the logic, we update our Ctest files to ensure they work. "),(0,o.kt)("p",null,"Also since CMake and CTest is the means we use to test our code, whenever there is a change to the c files themselves, we do not have to regenerate the build manually, since GitHub actions will do this\nwhenever it cleans the section. "),(0,o.kt)("p",null,"In order to be able to see our testing through Github actions please follow this link.\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Capstone-Projects-2023-Fall/project-garden-sensor-array/actions"},"LINK")))}p.isMDXComponent=!0}}]);