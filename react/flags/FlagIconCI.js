var e=Object.create,i=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=o=>i(o,"__esModule",{value:!0});var _=(o,f)=>{for(var l in f)i(o,l,{get:f[l],enumerable:!0})},a=(o,f,l)=>{if(f&&typeof f=="object"||typeof f=="function")for(let p of t(f))!x.call(o,p)&&p!=="default"&&i(o,p,{get:()=>f[p],enumerable:!(l=n(f,p))||l.enumerable});return o},u=o=>a(s(i(o!=null?e(d(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);_(exports,{default:()=>v});var r=u(require("react"));const F=({size:o=15,width:f=21,height:l=15,...p})=>(o!==l&&(f=f*(o/l),l=l*(o/l)),r.createElement("svg",{width:f,height:l,viewBox:"0 0 21 15",...p},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF"}),r.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),r.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#1DC87D"}),r.createElement("stop",{offset:"100%",stopColor:"#169E62"})),r.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#F89242"}),r.createElement("stop",{offset:"100%",stopColor:"#F67F22"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__b)",d:"M10 0h11v15H10z"}),r.createElement("path",{fill:"url(#prefix__c)",d:"M0 0h7v15H0z"}),r.createElement("path",{fill:"url(#prefix__a)",d:"M7 0h7v15H7z"}))));var v=F;
