var x=Object.create,p=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty;var s=o=>p(o,"__esModule",{value:!0});var u=(o,i)=>{for(var l in i)p(o,l,{get:i[l],enumerable:!0})},C=(o,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let e of _(i))!t.call(o,e)&&e!=="default"&&p(o,e,{get:()=>i[e],enumerable:!(l=d(i,e))||l.enumerable});return o},n=o=>C(s(p(o!=null?x(v(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);u(exports,{default:()=>m});var f=n(require("react")),r=n(require("react-native-svg"));const F=({size:o=15,width:i=21,height:l=15,...e})=>(o!==l&&(i=i*(o/l),l=l*(o/l)),f.createElement(r.default,{width:i,height:l,viewBox:"0 0 21 15",...e},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#35CE4F"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#2AB441"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#1C87DB"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#1175C4"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 10h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 5h21v5H0z"}))));var m=F;
