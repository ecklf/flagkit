var e=Object.create,p=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=o=>p(o,"__esModule",{value:!0});var a=(o,r)=>{for(var f in r)p(o,f,{get:r[f],enumerable:!0})},_=(o,r,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of d(r))!x.call(o,i)&&i!=="default"&&p(o,i,{get:()=>r[i],enumerable:!(f=n(r,i))||f.enumerable});return o},u=o=>_(s(p(o!=null?e(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);a(exports,{default:()=>F});var l=u(require("react"));const v=({size:o=15,width:r=21,height:f=15,...i})=>(o!==f&&(r=r*(o/f),f=f*(o/f)),l.createElement("svg",{width:r,height:f,viewBox:"0 0 21 15",...i},l.createElement("defs",null,l.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},l.createElement("stop",{offset:"0%",stopColor:"#FFF"}),l.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),l.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},l.createElement("stop",{offset:"0%",stopColor:"#5098EA"}),l.createElement("stop",{offset:"100%",stopColor:"#458BDB"})),l.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},l.createElement("stop",{offset:"0%",stopColor:"#E82045"}),l.createElement("stop",{offset:"100%",stopColor:"#D01739"}))),l.createElement("g",{fill:"none",fillRule:"evenodd"},l.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),l.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),l.createElement("path",{fill:"url(#prefix__a)",fillRule:"nonzero",d:"M1.803 4.96a.5.5 0 010-.92l1.566-.67.671-1.567a.5.5 0 01.92 0l.67 1.566 1.567.671a.5.5 0 010 .92l-1.566.67-.671 1.567a.5.5 0 01-.92 0l-.67-1.566-1.567-.671z"}),l.createElement("path",{fill:"url(#prefix__c)",d:"M3.75 5.25L2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z"}),l.createElement("path",{fill:"#F9D536",d:"M0 11h21v1H0zM0 9h21v1H0z"}))));var F=v;