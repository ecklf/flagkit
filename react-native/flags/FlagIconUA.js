var x=Object.create,s=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var n=o=>s(o,"__esModule",{value:!0});var F=(o,i)=>{for(var e in i)s(o,e,{get:i[e],enumerable:!0})},u=(o,i,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let l of t(i))!v.call(o,l)&&l!=="default"&&s(o,l,{get:()=>i[l],enumerable:!(e=d(i,l))||e.enumerable});return o},p=o=>u(n(s(o!=null?x(_(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);n(exports);F(exports,{default:()=>D});var f=p(require("react")),r=p(require("react-native-svg"));const m=({size:o=15,width:i=21,height:e=15,...l})=>(o!==e&&(i=i*(o/e),e=e*(o/e)),f.createElement(r.default,{width:i,height:e,viewBox:"0 0 21 15",...l},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#156DD1"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#0D5EB9"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFD948"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#FFD430"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v8H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 8h21v7H0z"}))));var D=m;
