var e=Object.create,i=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var n=o=>i(o,"__esModule",{value:!0});var a=(o,l)=>{for(var f in l)i(o,f,{get:l[f],enumerable:!0})},u=(o,l,f)=>{if(l&&typeof l=="object"||typeof l=="function")for(let p of d(l))!x.call(o,p)&&p!=="default"&&i(o,p,{get:()=>l[p],enumerable:!(f=s(l,p))||f.enumerable});return o},_=o=>u(n(i(o!=null?e(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);n(exports);a(exports,{default:()=>C});var r=_(require("react"));const v=({size:o=15,width:l=21,height:f=15,...p})=>(o!==f&&(l=l*(o/f),f=f*(o/f)),r.createElement("svg",{width:l,height:f,viewBox:"0 0 21 15",...p},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF"}),r.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),r.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#1A78D6"}),r.createElement("stop",{offset:"100%",stopColor:"#106AC4"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v5H0zM0 10h21v5H0z"}),r.createElement("path",{fill:"url(#prefix__a)",d:"M0 5h21v5H0z"}),r.createElement("path",{fill:"#DBCD92",fillRule:"nonzero",d:"M10.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 .5a2 2 0 110-4 2 2 0 010 4z"}),r.createElement("path",{fill:"#9CDDEE",d:"M10.5 6.5l1 2h-2z"}))));var C=v;