var p=Object.create,v=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var l=r=>v(r,"__esModule",{value:!0});var H=(r,f)=>{for(var e in f)v(r,e,{get:f[e],enumerable:!0})},u=(r,f,e)=>{if(f&&typeof f=="object"||typeof f=="function")for(let n of d(f))!x.call(r,n)&&n!=="default"&&v(r,n,{get:()=>f[n],enumerable:!(e=m(f,n))||e.enumerable});return r},s=r=>u(l(v(r!=null?p(t(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);l(exports);H(exports,{default:()=>_});var i=s(require("react")),o=s(require("react-native-svg"));const z=({size:r=15,width:f=21,height:e=15,...n})=>(r!==e&&(f=f*(r/e),e=e*(r/e)),i.createElement(o.default,{width:f,height:e,viewBox:"0 0 21 15",...n},i.createElement(o.Defs,null,i.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},i.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),i.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),i.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},i.createElement(o.Stop,{offset:"0%",stopColor:"#1C6DC1"}),i.createElement(o.Stop,{offset:"100%",stopColor:"#1660AD"}))),i.createElement(o.G,{fill:"none",fillRule:"evenodd"},i.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),i.createElement(o.Path,{fill:"url(#prefix__b)",d:"M0 0h4v4H0V0zm6 0h4v4H6V0zm4 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2zm6-6h4v4H6V6zM0 6h4v4H0V6z"}))));var _=z;