var d=Object.create,s=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty;var e=o=>s(o,"__esModule",{value:!0});var u=(o,i)=>{for(var l in i)s(o,l,{get:i[l],enumerable:!0})},C=(o,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let p of _(i))!t.call(o,p)&&p!=="default"&&s(o,p,{get:()=>i[p],enumerable:!(l=x(i,p))||l.enumerable});return o},n=o=>C(e(s(o!=null?d(v(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);e(exports);u(exports,{default:()=>F});var f=n(require("react")),r=n(require("react-native-svg"));const y=({size:o=15,width:i=21,height:l=15,...p})=>(o!==l&&(i=i*(o/l),l=l*(o/l)),f.createElement(r.default,{width:i,height:l,viewBox:"0 0 21 15",...p},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#DF2237"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#CE1126"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#4B9334"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#3B7828"})),f.createElement(r.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#1526A7"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#0C1B8D"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 10h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 5h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__d)",d:"M0 6h21v3H0z"}))));var F=y;
