var d=Object.create,n=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var p=r=>n(r,"__esModule",{value:!0});var L=(r,l)=>{for(var f in l)n(r,f,{get:l[f],enumerable:!0})},_=(r,l,f)=>{if(l&&typeof l=="object"||typeof l=="function")for(let i of m(l))!v.call(r,i)&&i!=="default"&&n(r,i,{get:()=>l[i],enumerable:!(f=x(l,i))||f.enumerable});return r},s=r=>_(p(n(r!=null?d(t(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);p(exports);L(exports,{default:()=>F});var e=s(require("react")),o=s(require("react-native-svg"));const u=({size:r=15,width:l=21,height:f=15,...i})=>(r!==f&&(l=l*(r/f),f=f*(r/f)),e.createElement(o.default,{width:l,height:f,viewBox:"0 0 21 15",...i},e.createElement(o.Defs,null,e.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},e.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),e.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),e.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},e.createElement(o.Stop,{offset:"0%",stopColor:"#95CEF5"}),e.createElement(o.Stop,{offset:"100%",stopColor:"#78B3DC"}))),e.createElement(o.G,{fill:"none",fillRule:"evenodd"},e.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),e.createElement(o.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),e.createElement(o.Path,{fill:"url(#prefix__a)",d:"M10.5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365L10.5 4.32zm0 8l-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 9.5l.482 1.337 1.42.045-1.122.871.396 1.365-1.176-.798zm4-4l-1.176.798.396-1.365-1.122-.871 1.42-.045L14.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365L14.5 8.32zm-8 0l-1.176.798.396-1.365-1.122-.871 1.42-.045L6.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365L6.5 8.32z"}))));var F=u;
