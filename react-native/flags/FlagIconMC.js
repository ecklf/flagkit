var d=Object.create,n=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var p=r=>n(r,"__esModule",{value:!0});var u=(r,f)=>{for(var e in f)n(r,e,{get:f[e],enumerable:!0})},C=(r,f,e)=>{if(f&&typeof f=="object"||typeof f=="function")for(let l of v(f))!_.call(r,l)&&l!=="default"&&n(r,l,{get:()=>f[l],enumerable:!(e=x(f,l))||e.enumerable});return r},s=r=>C(p(n(r!=null?d(t(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);p(exports);u(exports,{default:()=>F});var i=s(require("react")),o=s(require("react-native-svg"));const m=({size:r=15,width:f=21,height:e=15,...l})=>(r!==e&&(f=f*(r/e),e=e*(r/e)),i.createElement(o.default,{width:f,height:e,viewBox:"0 0 21 15",...l},i.createElement(o.Defs,null,i.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},i.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),i.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),i.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},i.createElement(o.Stop,{offset:"0%",stopColor:"#EA233B"}),i.createElement(o.Stop,{offset:"100%",stopColor:"#CC162C"}))),i.createElement(o.G,{fill:"none",fillRule:"evenodd"},i.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),i.createElement(o.Path,{fill:"url(#prefix__b)",d:"M0 0h21v8H0z"}),i.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 8h21v7H0z"}))));var F=m;
