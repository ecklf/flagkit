var p=Object.create,n=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=o=>n(o,"__esModule",{value:!0});var u=(o,r)=>{for(var l in r)n(o,l,{get:r[l],enumerable:!0})},a=(o,r,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of d(r))!x.call(o,e)&&e!=="default"&&n(o,e,{get:()=>r[e],enumerable:!(l=i(r,e))||l.enumerable});return o},_=o=>a(s(n(o!=null?p(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);u(exports,{default:()=>v});var f=_(require("react"));const m=({size:o=15,width:r=21,height:l=15,...e})=>(o!==l&&(r=r*(o/l),l=l*(o/l)),f.createElement("svg",{width:r,height:l,viewBox:"0 0 21 15",...e},f.createElement("defs",null,f.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement("stop",{offset:"0%",stopColor:"#FFF"}),f.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),f.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement("stop",{offset:"0%",stopColor:"#E33B44"}),f.createElement("stop",{offset:"100%",stopColor:"#C02A32"}))),f.createElement("g",{fill:"none",fillRule:"evenodd"},f.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),f.createElement("path",{fill:"#0A6135",fillRule:"nonzero",d:"M10.5 9.255l-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099L10.5 9.255zm0-1.228l.794.566-.293-.93.784-.58-.975-.01-.31-.924-.31.925-.975.008.784.58-.293.931.794-.566z"}))));var v=m;