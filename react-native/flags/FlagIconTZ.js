var x=Object.create,e=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var p=f=>e(f,"__esModule",{value:!0});var F=(f,i)=>{for(var l in i)e(f,l,{get:i[l],enumerable:!0})},u=(f,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of _(i))!C.call(f,s)&&s!=="default"&&e(f,s,{get:()=>i[s],enumerable:!(l=d(i,s))||l.enumerable});return f},n=f=>u(p(e(f!=null?x(t(f)):{},"default",f&&f.__esModule&&"default"in f?{get:()=>f.default,enumerable:!0}:{value:f,enumerable:!0})),f);p(exports);F(exports,{default:()=>y});var r=n(require("react")),o=n(require("react-native-svg"));const v=({size:f=15,width:i=21,height:l=15,...s})=>(f!==l&&(i=i*(f/l),l=l*(f/l)),r.createElement(o.default,{width:i,height:l,viewBox:"0 0 21 15",...s},r.createElement(o.Defs,null,r.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),r.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#33CC4D"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#2AB441"})),r.createElement(o.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#2DAFE4"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#1BA4DC"})),r.createElement(o.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#FFD84F"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#FCD036"})),r.createElement(o.LinearGradient,{id:"prefix__e",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#262626"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#0D0D0D"}))),r.createElement(o.G,{fill:"none",fillRule:"evenodd"},r.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement(o.Path,{fill:"url(#prefix__b)",d:"M.001 10.004l21-10h-21z"}),r.createElement(o.Path,{fill:"url(#prefix__c)",d:"M.001 15.004h21v-10z"}),r.createElement(o.Path,{fill:"url(#prefix__d)",d:"M2.313 17.004L22.63 4.309l-3.94-6.305-20.317 12.695z"}),r.createElement(o.Path,{fill:"url(#prefix__e)",d:"M-.47 17.308L24.123 1.94l-2.65-4.24L-3.12 13.068z"}))));var y=v;