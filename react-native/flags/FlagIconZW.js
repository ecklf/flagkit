var x=Object.create,p=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var s=f=>p(f,"__esModule",{value:!0});var F=(f,l)=>{for(var i in l)p(f,i,{get:l[i],enumerable:!0})},t=(f,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let e of _(l))!u.call(f,e)&&e!=="default"&&p(f,e,{get:()=>l[e],enumerable:!(i=d(l,e))||i.enumerable});return f},n=f=>t(s(p(f!=null?x(v(f)):{},"default",f&&f.__esModule&&"default"in f?{get:()=>f.default,enumerable:!0}:{value:f,enumerable:!0})),f);s(exports);F(exports,{default:()=>C});var o=n(require("react")),r=n(require("react-native-svg"));const z=({size:f=15,width:l=21,height:i=15,...e})=>(f!==i&&(l=l*(f/i),i=i*(f/i)),o.createElement(r.default,{width:l,height:i,viewBox:"0 0 21 15",...e},o.createElement(r.Defs,null,o.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),o.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#369D0C"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#319209"})),o.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#262626"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#0D0D0D"})),o.createElement(r.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#FFD40E"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#FFD201"})),o.createElement(r.LinearGradient,{id:"prefix__e",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#F12F1F"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#DE2010"}))),o.createElement(r.G,{fill:"none",fillRule:"evenodd"},o.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v2H0zM0 13h21v2H0zM0 4h21v2H0zM0 9h21v2H0z"}),o.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 6h21v3H0z"}),o.createElement(r.Path,{fill:"url(#prefix__d)",d:"M0 2h21v2H0zM0 11h21v2H0z"}),o.createElement(r.Path,{fill:"url(#prefix__c)",fillRule:"nonzero",d:"M-1 15V0h1l10 7.5L0 15z"}),o.createElement(r.Path,{fill:"url(#prefix__a)",fillRule:"nonzero",d:"M0 13.75L8.333 7.5 0 1.25z"}),o.createElement(r.Path,{fill:"url(#prefix__e)",d:"M3 8.475L1.53 9.523 2.074 7.8.623 6.727l1.804-.016L3 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"}))));var C=z;