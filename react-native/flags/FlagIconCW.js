var x=Object.create,p=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var s=o=>p(o,"__esModule",{value:!0});var u=(o,l)=>{for(var i in l)p(o,i,{get:l[i],enumerable:!0})},C=(o,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let e of _(l))!v.call(o,e)&&e!=="default"&&p(o,e,{get:()=>l[e],enumerable:!(i=d(l,e))||i.enumerable});return o},n=o=>C(s(p(o!=null?x(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);s(exports);u(exports,{default:()=>m});var f=n(require("react")),r=n(require("react-native-svg"));const F=({size:o=15,width:l=21,height:i=15,...e})=>(o!==i&&(l=l*(o/i),i=i*(o/i)),f.createElement(r.default,{width:l,height:i,viewBox:"0 0 21 15",...e},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#0543A8"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#00307D"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FCC747"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#FEC539"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 10h21v2H0z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M6.5 6.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L6.5 3.5l.45 1.38 1.452.002-1.173.855.447 1.381zM3 3.575l-.882.639.335-1.036-.88-.642 1.089-.001L3 1.5l.338 1.035 1.089.001-.88.642.335 1.036z"}))));var m=F;