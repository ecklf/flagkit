var d=Object.create,s=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var e=o=>s(o,"__esModule",{value:!0});var v=(o,l)=>{for(var i in l)s(o,i,{get:l[i],enumerable:!0})},C=(o,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let p of _(l))!u.call(o,p)&&p!=="default"&&s(o,p,{get:()=>l[p],enumerable:!(i=x(l,p))||i.enumerable});return o},n=o=>C(e(s(o!=null?d(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);e(exports);v(exports,{default:()=>F});var f=n(require("react")),r=n(require("react-native-svg"));const y=({size:o=15,width:l=21,height:i=15,...p})=>(o!==i&&(l=l*(o/i),i=i*(o/i)),f.createElement(r.default,{width:l,height:i,viewBox:"0 0 21 15",...p},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#1DC837"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#13AD2B"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#82C5F5"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#6AB3E8"})),f.createElement(r.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#E21C21"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#D7151A"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 7h21v8H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 0h21v7H0z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0l10 7.5L0 15z"}),f.createElement(r.Path,{fill:"url(#prefix__d)",d:"M3.5 8.475L2.03 9.523 2.574 7.8l-1.45-1.074 1.804-.016L3.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"}))));var F=y;
