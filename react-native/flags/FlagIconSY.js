var d=Object.create,s=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var e=o=>s(o,"__esModule",{value:!0});var u=(o,l)=>{for(var i in l)s(o,i,{get:l[i],enumerable:!0})},C=(o,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let p of _(l))!v.call(o,p)&&p!=="default"&&s(o,p,{get:()=>l[p],enumerable:!(i=x(l,p))||i.enumerable});return o},n=o=>C(e(s(o!=null?d(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);e(exports);u(exports,{default:()=>F});var f=n(require("react")),r=n(require("react-native-svg"));const y=({size:o=15,width:l=21,height:i=15,...p})=>(o!==i&&(l=l*(o/i),i=i*(o/i)),f.createElement(r.default,{width:l,height:i,viewBox:"0 0 21 15",...p},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#262626"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#0D0D0D"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#E32139"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#CC162C"})),f.createElement(r.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#128A49"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#0F7A40"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 10h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 0h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 5h21v5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__d)",d:"M7 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L7 5.5l.482 1.337 1.42.045-1.122.871.396 1.365zM14 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L14 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z"}))));var F=y;
