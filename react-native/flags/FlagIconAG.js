var e=Object.create,s=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var n=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var _=o=>s(o,"__esModule",{value:!0});var F=(o,i)=>{for(var l in i)s(o,l,{get:i[l],enumerable:!0})},y=(o,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let p of n(i))!u.call(o,p)&&p!=="default"&&s(o,p,{get:()=>i[p],enumerable:!(l=d(i,p))||l.enumerable});return o},x=o=>y(_(s(o!=null?e(C(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);_(exports);F(exports,{default:()=>m});var f=x(require("react")),r=x(require("react-native-svg"));const v=({size:o=15,width:i=21,height:l=15,...p})=>(o!==l&&(i=i*(o/l),l=l*(o/l)),f.createElement(r.default,{width:i,height:l,viewBox:"0 0 21 15",...p},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#E2243B"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#CC162C"})),f.createElement(r.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#262626"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#0D0D0D"})),f.createElement(r.LinearGradient,{id:"prefix__e",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFCF3C"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#FECB2F"})),f.createElement(r.LinearGradient,{id:"prefix__g",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#1984D8"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#1175C4"})),f.createElement(r.Path,{id:"prefix__c",d:"M0 0h21L10.5 15z"})),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{d:"M8.5 7a2 2 0 00.998 1.731m2.078-.045c.556-.355.924-.978.924-1.686",opacity:.75}),f.createElement(r.Ellipse,{cx:10.5,cy:6.5,fill:"#FFF",fillOpacity:.5,rx:1,ry:1.5}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),f.createElement(r.Mask,{id:"prefix__f",fill:"#fff"},f.createElement(r.Use,{xlinkHref:"#prefix__c"})),f.createElement(r.Use,{fill:"url(#prefix__d)",xlinkHref:"#prefix__c"}),f.createElement(r.Path,{fill:"url(#prefix__e)",d:"M10.5 8.25l-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z",mask:"url(#prefix__f)"}),f.createElement(r.Path,{fill:"url(#prefix__g)",d:"M0 6h21v4H0z",mask:"url(#prefix__f)"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 10h21v5H0z",mask:"url(#prefix__f)"}))));var m=v;