var i=Object.create,p=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var e=o=>p(o,"__esModule",{value:!0});var _=(o,f)=>{for(var l in f)p(o,l,{get:f[l],enumerable:!0})},F=(o,f,l)=>{if(f&&typeof f=="object"||typeof f=="function")for(let s of t(f))!x.call(o,s)&&s!=="default"&&p(o,s,{get:()=>f[s],enumerable:!(l=n(f,s))||l.enumerable});return o},C=o=>F(e(p(o!=null?i(d(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);e(exports);_(exports,{default:()=>u});var r=C(require("react"));const a=({size:o=15,width:f=21,height:l=15,...s})=>(o!==l&&(f=f*(o/l),l=l*(o/l)),r.createElement("svg",{width:f,height:l,viewBox:"0 0 21 15",...s},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF"}),r.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),r.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#157CBB"}),r.createElement("stop",{offset:"100%",stopColor:"#0E6CA5"})),r.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFD34D"}),r.createElement("stop",{offset:"100%",stopColor:"#FECB2F"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__c)",d:"M0 9h6v6h3V9h12V6H9V0H6v6H0z"}))));var u=a;
