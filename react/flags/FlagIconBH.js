var n=Object.create,p=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=o=>p(o,"__esModule",{value:!0});var _=(o,r)=>{for(var l in r)p(o,l,{get:r[l],enumerable:!0})},a=(o,r,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of d(r))!x.call(o,e)&&e!=="default"&&p(o,e,{get:()=>r[e],enumerable:!(l=i(r,e))||l.enumerable});return o},u=o=>a(s(p(o!=null?n(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);_(exports,{default:()=>L});var f=u(require("react"));const C=({size:o=15,width:r=21,height:l=15,...e})=>(o!==l&&(r=r*(o/l),l=l*(o/l)),f.createElement("svg",{width:r,height:l,viewBox:"0 0 21 15",...e},f.createElement("defs",null,f.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement("stop",{offset:"0%",stopColor:"#FFF"}),f.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),f.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement("stop",{offset:"0%",stopColor:"#E7243B"}),f.createElement("stop",{offset:"100%",stopColor:"#CC162C"}))),f.createElement("g",{fill:"none",fillRule:"evenodd"},f.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),f.createElement("path",{fill:"url(#prefix__a)",d:"M0 15h7.5L6 14l1.5-1L6 12l1.5-1L6 10l1.5-1L6 8l1.5-1L6 6l1.5-1L6 4l1.5-1L6 2l1.5-1L6 0H0z"}))));var L=C;