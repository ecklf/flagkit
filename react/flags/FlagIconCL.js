var e=Object.create,i=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=r=>i(r,"__esModule",{value:!0});var _=(r,l)=>{for(var f in l)i(r,f,{get:l[f],enumerable:!0})},a=(r,l,f)=>{if(l&&typeof l=="object"||typeof l=="function")for(let p of d(l))!x.call(r,p)&&p!=="default"&&i(r,p,{get:()=>l[p],enumerable:!(f=n(l,p))||f.enumerable});return r},u=r=>a(s(i(r!=null?e(t(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);s(exports);_(exports,{default:()=>C});var o=u(require("react"));const v=({size:r=15,width:l=21,height:f=15,...p})=>(r!==f&&(l=l*(r/f),f=f*(r/f)),o.createElement("svg",{width:l,height:f,viewBox:"0 0 21 15",...p},o.createElement("defs",null,o.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#FFF"}),o.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),o.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#EA3B2E"}),o.createElement("stop",{offset:"100%",stopColor:"#D52B1E"})),o.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#0B48C2"}),o.createElement("stop",{offset:"100%",stopColor:"#0239A7"}))),o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement("path",{fill:"url(#prefix__b)",d:"M0 7h21v8H0z"}),o.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v7H0z"}),o.createElement("path",{fill:"url(#prefix__c)",d:"M0 0h7v7H0z"}),o.createElement("path",{fill:"url(#prefix__a)",d:"M3.5 4.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L3.5 1.5l.458 1.369 1.444.013-1.16.859.434 1.377z"}))));var C=v;