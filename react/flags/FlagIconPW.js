var p=Object.create,e=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var i=o=>e(o,"__esModule",{value:!0});var F=(o,f)=>{for(var l in f)e(o,l,{get:f[l],enumerable:!0})},_=(o,f,l)=>{if(f&&typeof f=="object"||typeof f=="function")for(let s of t(f))!x.call(o,s)&&s!=="default"&&e(o,s,{get:()=>f[s],enumerable:!(l=n(f,s))||l.enumerable});return o},u=o=>_(i(e(o!=null?p(d(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);i(exports);F(exports,{default:()=>C});var r=u(require("react"));const a=({size:o=15,width:f=21,height:l=15,...s})=>(o!==l&&(f=f*(o/l),l=l*(o/l)),r.createElement("svg",{width:f,height:l,viewBox:"0 0 21 15",...s},r.createElement("defs",null,r.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFF"}),r.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),r.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#65C6EE"}),r.createElement("stop",{offset:"100%",stopColor:"#4FAED5"})),r.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement("stop",{offset:"0%",stopColor:"#FFE044"}),r.createElement("stop",{offset:"100%",stopColor:"#FFDD32"}))),r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),r.createElement("circle",{cx:9.5,cy:7.5,r:4.5,fill:"url(#prefix__c)"}))));var C=a;