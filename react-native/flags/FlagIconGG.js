var v=Object.create,s=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var n=o=>s(o,"__esModule",{value:!0});var F=(o,l)=>{for(var i in l)s(o,i,{get:l[i],enumerable:!0})},u=(o,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let e of d(l))!_.call(o,e)&&e!=="default"&&s(o,e,{get:()=>l[e],enumerable:!(i=x(l,e))||i.enumerable});return o},p=o=>u(n(s(o!=null?v(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);n(exports);F(exports,{default:()=>G});var f=p(require("react")),r=p(require("react-native-svg"));const C=({size:o=15,width:l=21,height:i=15,...e})=>(o!==i&&(l=l*(o/i),i=i*(o/i)),f.createElement(r.default,{width:l,height:i,viewBox:"0 0 21 15",...e},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#F33349"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#E51D34"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FCE24C"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F9DC38"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M10 8v4l-.5 1h2l-.5-1V8h4l1 .5v-2L15 7h-4V3l.5-1h-2l.5 1v4H6l-1-.5v2L6 8h4z"}))));var G=C;
