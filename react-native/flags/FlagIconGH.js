var x=Object.create,e=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty;var p=f=>e(f,"__esModule",{value:!0});var v=(f,i)=>{for(var l in i)e(f,l,{get:i[l],enumerable:!0})},u=(f,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of _(i))!t.call(f,s)&&s!=="default"&&e(f,s,{get:()=>i[s],enumerable:!(l=d(i,s))||l.enumerable});return f},n=f=>u(p(e(f!=null?x(C(f)):{},"default",f&&f.__esModule&&"default"in f?{get:()=>f.default,enumerable:!0}:{value:f,enumerable:!0})),f);p(exports);v(exports,{default:()=>F});var r=n(require("react")),o=n(require("react-native-svg"));const y=({size:f=15,width:i=21,height:l=15,...s})=>(f!==l&&(i=i*(f/l),l=l*(f/l)),r.createElement(o.default,{width:i,height:l,viewBox:"0 0 21 15",...s},r.createElement(o.Defs,null,r.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),r.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#E71F37"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#CC162C"})),r.createElement(o.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#118B56"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#0B6B41"})),r.createElement(o.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#FDD64C"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#FCD036"})),r.createElement(o.LinearGradient,{id:"prefix__e",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#262626"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#0D0D0D"}))),r.createElement(o.G,{fill:"none",fillRule:"evenodd"},r.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement(o.Path,{fill:"url(#prefix__b)",d:"M0 0h21v5H0z"}),r.createElement(o.Path,{fill:"url(#prefix__c)",d:"M0 10h21v5H0z"}),r.createElement(o.Path,{fill:"url(#prefix__d)",d:"M0 5h21v5H0z"}),r.createElement(o.Path,{fill:"url(#prefix__e)",d:"M10.5 8.709L9.03 9.773l.558-1.727-1.466-1.069 1.814-.003.564-1.724.564 1.724 1.814.003-1.466 1.07.557 1.726z"}))));var F=y;
