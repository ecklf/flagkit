var n=Object.create,p=Object.defineProperty;var e=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var i=o=>p(o,"__esModule",{value:!0});var a=(o,l)=>{for(var f in l)p(o,f,{get:l[f],enumerable:!0})},F=(o,l,f)=>{if(l&&typeof l=="object"||typeof l=="function")for(let s of t(l))!x.call(o,s)&&s!=="default"&&p(o,s,{get:()=>l[s],enumerable:!(f=e(l,s))||f.enumerable});return o},_=o=>F(i(p(o!=null?n(d(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);i(exports);a(exports,{default:()=>C});var r=_(require("react"));const u=({size:o=15,width:l=21,height:f=15,...s})=>(o!==f&&(l=l*(o/f),f=f*(o/f)),r.createElement("svg",{width:l,height:f,viewBox:"0 0 21 15",...s},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF"}),r.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),r.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#158AFF"}),r.createElement("stop",{offset:"100%",stopColor:"#007FFF"})),r.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#CE1120"}),r.createElement("stop",{offset:"100%",stopColor:"#E11B2B"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__b)",d:"M4.294 1.443h21v15h-21z",transform:"translate(-4.29 -1.44)"}),r.createElement("path",{fill:"#FDD216",d:"M24.273 3.906l-25.84 13.166-2.723-5.346L21.55-1.44z"}),r.createElement("path",{fill:"url(#prefix__c)",d:"M.057 7.074h29v4h-29z",transform:"rotate(153 12.585 7.839)"}),r.createElement("path",{fill:"#FDD216",d:"M3.504 4.478l-1.47 1.047.542-1.721-1.45-1.074 1.805-.016.573-1.711.573 1.71 1.804.017-1.45 1.074.542 1.721z"}))));var C=u;