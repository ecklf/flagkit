var d=Object.create,n=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var p=r=>n(r,"__esModule",{value:!0});var u=(r,f)=>{for(var l in f)n(r,l,{get:f[l],enumerable:!0})},m=(r,f,l)=>{if(f&&typeof f=="object"||typeof f=="function")for(let i of t(f))!_.call(r,i)&&i!=="default"&&n(r,i,{get:()=>f[i],enumerable:!(l=x(f,i))||l.enumerable});return r},s=r=>m(p(n(r!=null?d(v(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);p(exports);u(exports,{default:()=>F});var e=s(require("react")),o=s(require("react-native-svg"));const a=({size:r=15,width:f=21,height:l=15,...i})=>(r!==l&&(f=f*(r/l),l=l*(r/l)),e.createElement(o.default,{width:f,height:l,viewBox:"0 0 21 15",...i},e.createElement(o.Defs,null,e.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},e.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),e.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),e.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},e.createElement(o.Stop,{offset:"0%",stopColor:"#E92434"}),e.createElement(o.Stop,{offset:"100%",stopColor:"#E11324"}))),e.createElement(o.G,{fill:"none",fillRule:"evenodd"},e.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),e.createElement(o.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),e.createElement(o.Path,{fill:"url(#prefix__a)",d:"M13.052 4.737A3.907 3.907 0 0010.75 4C8.679 4 7 5.567 7 7.5S8.679 11 10.75 11c.868 0 1.667-.275 2.302-.737a4.5 4.5 0 110-5.526zm1.214 3.34l-.919 1.113.063-1.442-1.343-.53 1.39-.386.09-1.441.796 1.204 1.398-.361-.898 1.13.775 1.217-1.352-.505z"}))));var F=a;
