var i=Object.create,p=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var e=l=>p(l,"__esModule",{value:!0});var F=(l,r)=>{for(var f in r)p(l,f,{get:r[f],enumerable:!0})},_=(l,r,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of t(r))!x.call(l,s)&&s!=="default"&&p(l,s,{get:()=>r[s],enumerable:!(f=n(r,s))||f.enumerable});return l},a=l=>_(e(p(l!=null?i(d(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l);e(exports);F(exports,{default:()=>L});var o=a(require("react"));const C=({size:l=15,width:r=21,height:f=15,...s})=>(l!==f&&(r=r*(l/f),f=f*(l/f)),o.createElement("svg",{width:r,height:f,viewBox:"0 0 21 15",...s},o.createElement("defs",null,o.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#FFF"}),o.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),o.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#229716"}),o.createElement("stop",{offset:"100%",stopColor:"#1C7E12"})),o.createElement("linearGradient",{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#FFE244"}),o.createElement("stop",{offset:"100%",stopColor:"#FFDF32"}))),o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement("path",{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),o.createElement("path",{fill:"url(#prefix__c)",d:"M4 6a2 2 0 110-4 2 2 0 010 4zm0-2c.208 0-.16 1.054 0 1 .265-.09 1-1.328 1-1.5 0-.276-.448-.5-1-.5s-1 .224-1 .5.448.5 1 .5zM16 13l-.707.207.207-.707-.207-.707L16 12l.707-.207-.207.707.207.707zM16 3.5l-.707.207L15.5 3l-.207-.707L16 2.5l.707-.207L16.5 3l.207.707zM19 6.5l-.707.207L18.5 6l-.207-.707L19 5.5l.707-.207L19.5 6l.207.707zM14 7.5l-.707.207L13.5 7l-.207-.707L14 6.5l.707-.207L14.5 7l.207.707zM17.5 8.75l-.354.104.104-.354-.104-.354.354.104.354-.104-.104.354.104.354zM12.061 5.547a2.5 2.5 0 100 3.905 2.083 2.083 0 110-3.905z"}))));var L=C;