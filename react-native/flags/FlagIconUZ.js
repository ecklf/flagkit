var x=Object.create,p=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var s=o=>p(o,"__esModule",{value:!0});var t=(o,i)=>{for(var l in i)p(o,l,{get:i[l],enumerable:!0})},a=(o,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let e of _(i))!m.call(o,e)&&e!=="default"&&p(o,e,{get:()=>i[e],enumerable:!(l=d(i,e))||l.enumerable});return o},n=o=>a(s(p(o!=null?x(v(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);t(exports,{default:()=>z});var f=n(require("react")),r=n(require("react-native-svg"));const u=({size:o=15,width:i=21,height:l=15,...e})=>(o!==l&&(i=i*(o/l),l=l*(o/l)),f.createElement(r.default,{width:i,height:l,viewBox:"0 0 21 15",...e},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#04AAC8"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#009AB6"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#23C840"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#1EB639"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 10h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 5h21v5H0zM4.334 1.253a1.5 1.5 0 100 2.495 1.25 1.25 0 110-2.495zM5.5 4a.5.5 0 110-1 .5.5 0 010 1zm2-2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"}))));var z=u;