var d=Object.create,e=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var p=r=>e(r,"__esModule",{value:!0});var C=(r,i)=>{for(var l in i)e(r,l,{get:i[l],enumerable:!0})},u=(r,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of _(i))!v.call(r,s)&&s!=="default"&&e(r,s,{get:()=>i[s],enumerable:!(l=x(i,s))||l.enumerable});return r},n=r=>u(p(e(r!=null?d(t(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);p(exports);C(exports,{default:()=>y});var f=n(require("react")),o=n(require("react-native-svg"));const F=({size:r=15,width:i=21,height:l=15,...s})=>(r!==l&&(i=i*(r/l),l=l*(r/l)),f.createElement(o.default,{width:i,height:l,viewBox:"0 0 21 15",...s},f.createElement(o.Defs,null,f.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#1DBE5E"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#169E4D"})),f.createElement(o.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#E72B42"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#CC162C"})),f.createElement(o.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#FFD952"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#FCD036"}))),f.createElement(o.G,{fill:"none",fillRule:"evenodd"},f.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(o.Path,{fill:"url(#prefix__b)",d:"M10 0h11v15H10z"}),f.createElement(o.Path,{fill:"url(#prefix__c)",d:"M0 0h7v15H0z"}),f.createElement(o.Path,{fill:"url(#prefix__d)",d:"M7 0h7v15H7z"}))));var y=F;
