var p=Object.create,l=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var n=o=>l(o,"__esModule",{value:!0});var a=(o,r)=>{for(var e in r)l(o,e,{get:r[e],enumerable:!0})},u=(o,r,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of t(r))!x.call(o,s)&&s!=="default"&&l(o,s,{get:()=>r[s],enumerable:!(e=i(r,s))||e.enumerable});return o},v=o=>u(n(l(o!=null?p(d(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);n(exports);a(exports,{default:()=>_});var f=v(require("react"));const F=({size:o=15,width:r=21,height:e=15,...s})=>(o!==e&&(r=r*(o/e),e=e*(o/e)),f.createElement("svg",{width:r,height:e,viewBox:"0 0 21 15",...s},f.createElement("defs",null,f.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement("stop",{offset:"0%",stopColor:"#FFF"}),f.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),f.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement("stop",{offset:"0%",stopColor:"#0848A6"}),f.createElement("stop",{offset:"100%",stopColor:"#003480"}))),f.createElement("g",{fill:"none",fillRule:"evenodd"},f.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement("path",{fill:"url(#prefix__b)",d:"M0 9h6v6h3V9h12V6H9V0H6v6H0z"}))));var _=F;
