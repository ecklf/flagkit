var e=Object.create,i=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=o=>i(o,"__esModule",{value:!0});var _=(o,f)=>{for(var l in f)i(o,l,{get:f[l],enumerable:!0})},a=(o,f,l)=>{if(f&&typeof f=="object"||typeof f=="function")for(let p of t(f))!x.call(o,p)&&p!=="default"&&i(o,p,{get:()=>f[p],enumerable:!(l=n(f,p))||l.enumerable});return o},u=o=>a(s(i(o!=null?e(d(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);_(exports,{default:()=>F});var r=u(require("react"));const v=({size:o=15,width:f=21,height:l=15,...p})=>(o!==l&&(f=f*(o/l),l=l*(o/l)),r.createElement("svg",{width:f,height:l,viewBox:"0 0 21 15",...p},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF"}),r.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),r.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#F12532"}),r.createElement("stop",{offset:"100%",stopColor:"#EB212E"})),r.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#322B6C"}),r.createElement("stop",{offset:"100%",stopColor:"#241F4E"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v3H0zM0 12h21v3H0z"}),r.createElement("path",{fill:"url(#prefix__a)",d:"M0 3h21v9H0z"}),r.createElement("path",{fill:"url(#prefix__c)",d:"M0 5h21v5H0z"}))));var F=v;