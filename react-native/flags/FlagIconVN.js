var x=Object.create,s=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var n=o=>s(o,"__esModule",{value:!0});var v=(o,l)=>{for(var i in l)s(o,i,{get:l[i],enumerable:!0})},u=(o,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let e of F(l))!_.call(o,e)&&e!=="default"&&s(o,e,{get:()=>l[e],enumerable:!(i=d(l,e))||i.enumerable});return o},p=o=>u(n(s(o!=null?x(t(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);n(exports);v(exports,{default:()=>y});var f=p(require("react")),r=p(require("react-native-svg"));const m=({size:o=15,width:l=21,height:i=15,...e})=>(o!==i&&(l=l*(o/i),i=i*(o/i)),f.createElement(r.default,{width:l,height:i,viewBox:"0 0 21 15",...e},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#EA403F"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#D82827"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFFE4E"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#FFFE38"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M10.5 9.255l-2.645 1.886.976-3.099L6.22 6.11l3.247-.029L10.5 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z"}))));var y=m;