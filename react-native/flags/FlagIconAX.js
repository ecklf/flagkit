var d=Object.create,e=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty;var p=r=>e(r,"__esModule",{value:!0});var F=(r,i)=>{for(var l in i)e(r,l,{get:i[l],enumerable:!0})},C=(r,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of _(i))!t.call(r,s)&&s!=="default"&&e(r,s,{get:()=>i[s],enumerable:!(l=x(i,s))||l.enumerable});return r},n=r=>C(p(e(r!=null?d(v(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);p(exports);F(exports,{default:()=>y});var f=n(require("react")),o=n(require("react-native-svg"));const u=({size:r=15,width:i=21,height:l=15,...s})=>(r!==l&&(i=i*(r/l),l=l*(r/l)),f.createElement(o.default,{width:i,height:l,viewBox:"0 0 21 15",...s},f.createElement(o.Defs,null,f.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#157CBB"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#0E6CA5"})),f.createElement(o.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#FFD34D"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#FECB2F"})),f.createElement(o.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#EB363A"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#D52B2F"}))),f.createElement(o.G,{fill:"none",fillRule:"evenodd"},f.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(o.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),f.createElement(o.Path,{fill:"url(#prefix__c)",d:"M0 9h6v6h3V9h12V6H9V0H6v6H0z"}),f.createElement(o.Path,{fill:"url(#prefix__d)",d:"M0 8h7v7h1V8h13V7H8V0H7v7H0z"}))));var y=u;