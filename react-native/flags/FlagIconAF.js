var x=Object.create,s=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty;var e=f=>s(f,"__esModule",{value:!0});var v=(f,l)=>{for(var i in l)s(f,i,{get:l[i],enumerable:!0})},y=(f,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let p of _(l))!t.call(f,p)&&p!=="default"&&s(f,p,{get:()=>l[p],enumerable:!(i=d(l,p))||i.enumerable});return f},n=f=>y(e(s(f!=null?x(F(f)):{},"default",f&&f.__esModule&&"default"in f?{get:()=>f.default,enumerable:!0}:{value:f,enumerable:!0})),f);e(exports);v(exports,{default:()=>C});var r=n(require("react")),o=n(require("react-native-svg"));const u=({size:f=15,width:l=21,height:i=15,...p})=>(f!==i&&(l=l*(f/i),i=i*(f/i)),r.createElement(o.default,{width:l,height:i,viewBox:"0 0 21 15",...p},r.createElement(o.Defs,null,r.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),r.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#1AB11F"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#149818"})),r.createElement(o.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#262626"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#0D0D0D"})),r.createElement(o.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#DC0D18"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#BE0711"}))),r.createElement(o.G,{fill:"none",fillRule:"evenodd"},r.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement(o.Path,{fill:"url(#prefix__b)",d:"M10 0h11v15H10z"}),r.createElement(o.Path,{fill:"url(#prefix__c)",d:"M0 0h7v15H0z"}),r.createElement(o.Path,{fill:"url(#prefix__d)",d:"M7 0h7v15H7z"}),r.createElement(o.Path,{fill:"#FFF",fillRule:"nonzero",d:"M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 00.502-.865A1.499 1.499 0 019 7a.5.5 0 00-1 0zm3.846 2.107A2.498 2.498 0 0013 7a.5.5 0 10-1 0c0 .518-.264.99-.693 1.265a.5.5 0 10.539.842z",opacity:.75}),r.createElement(o.Ellipse,{cx:10.5,cy:6.5,fill:"#FFF",fillOpacity:.5,rx:1,ry:1.5}))));var C=u;