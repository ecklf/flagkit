var d=Object.create,n=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var p=r=>n(r,"__esModule",{value:!0});var u=(r,f)=>{for(var l in f)n(r,l,{get:f[l],enumerable:!0})},a=(r,f,l)=>{if(f&&typeof f=="object"||typeof f=="function")for(let i of t(f))!_.call(r,i)&&i!=="default"&&n(r,i,{get:()=>f[i],enumerable:!(l=x(f,i))||l.enumerable});return r},s=r=>a(p(n(r!=null?d(v(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);p(exports);u(exports,{default:()=>F});var e=s(require("react")),o=s(require("react-native-svg"));const m=({size:r=15,width:f=21,height:l=15,...i})=>(r!==l&&(f=f*(r/l),l=l*(r/l)),e.createElement(o.default,{width:f,height:l,viewBox:"0 0 21 15",...i},e.createElement(o.Defs,null,e.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},e.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),e.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),e.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},e.createElement(o.Stop,{offset:"0%",stopColor:"#E92434"}),e.createElement(o.Stop,{offset:"100%",stopColor:"#E11324"}))),e.createElement(o.G,{fill:"none",fillRule:"evenodd"},e.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),e.createElement(o.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),e.createElement(o.Path,{fill:"url(#prefix__a)",d:"M11.858 4.273a3.5 3.5 0 100 6.453 3.25 3.25 0 010-6.453zM10.5 12a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.766-3.622l1.352.505-.775-1.218.898-1.13-1.398.361-.797-1.204-.088 1.441-1.391.386 1.343.53-.063 1.442.919-1.113z"}))));var F=m;