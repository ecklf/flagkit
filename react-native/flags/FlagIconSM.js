var x=Object.create,n=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var v=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var p=o=>n(o,"__esModule",{value:!0});var _=(o,f)=>{for(var i in f)n(o,i,{get:f[i],enumerable:!0})},a=(o,f,i)=>{if(f&&typeof f=="object"||typeof f=="function")for(let e of v(f))!F.call(o,e)&&e!=="default"&&n(o,e,{get:()=>f[e],enumerable:!(i=d(f,e))||i.enumerable});return o},s=o=>a(p(n(o!=null?x(u(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);p(exports);_(exports,{default:()=>t});var l=s(require("react")),r=s(require("react-native-svg"));const m=({size:o=15,width:f=21,height:i=15,...e})=>(o!==i&&(f=f*(o/i),i=i*(o/i)),l.createElement(r.default,{width:f,height:i,viewBox:"0 0 21 15",...e},l.createElement(r.Defs,null,l.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},l.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),l.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),l.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},l.createElement(r.Stop,{offset:"0%",stopColor:"#7CCCF5"}),l.createElement(r.Stop,{offset:"100%",stopColor:"#62B7E3"}))),l.createElement(r.G,{fill:"none",fillRule:"evenodd"},l.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),l.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 7h21v8H0z"}),l.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v7H0z"}),l.createElement(r.Path,{fill:"#445F42",fillRule:"nonzero",d:"M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 00.502-.865A1.499 1.499 0 019 7a.5.5 0 00-1 0zm3.846 2.107A2.498 2.498 0 0013 7a.5.5 0 10-1 0c0 .518-.264.99-.693 1.265a.5.5 0 10.539.842z"}),l.createElement(r.Ellipse,{cx:10.5,cy:6.5,fill:"#D89F3D",rx:1,ry:1.5}))));var t=m;
