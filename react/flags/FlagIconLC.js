var e=Object.create,p=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=o=>p(o,"__esModule",{value:!0});var _=(o,l)=>{for(var f in l)p(o,f,{get:l[f],enumerable:!0})},F=(o,l,f)=>{if(l&&typeof l=="object"||typeof l=="function")for(let i of d(l))!x.call(o,i)&&i!=="default"&&p(o,i,{get:()=>l[i],enumerable:!(f=n(l,i))||f.enumerable});return o},C=o=>F(s(p(o!=null?e(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);_(exports,{default:()=>u});var r=C(require("react"));const a=({size:o=15,width:l=21,height:f=15,...i})=>(o!==f&&(l=l*(o/f),f=f*(o/f)),r.createElement("svg",{width:l,height:f,viewBox:"0 0 21 15",...i},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF"}),r.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),r.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#86D7FF"}),r.createElement("stop",{offset:"100%",stopColor:"#6BCDFE"})),r.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#262626"}),r.createElement("stop",{offset:"100%",stopColor:"#0D0D0D"})),r.createElement("linearGradient",{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFDA57"}),r.createElement("stop",{offset:"100%",stopColor:"#FCD036"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__a)",d:"M10.5 2L15 13H6z"}),r.createElement("path",{fill:"url(#prefix__c)",d:"M10.5 4l3.5 9H7z"}),r.createElement("path",{fill:"url(#prefix__d)",d:"M10.5 7l4.5 6H6z"}))));var u=a;