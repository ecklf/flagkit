var x=Object.create,p=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var s=f=>p(f,"__esModule",{value:!0});var C=(f,i)=>{for(var l in i)p(f,l,{get:i[l],enumerable:!0})},t=(f,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let e of d(i))!F.call(f,e)&&e!=="default"&&p(f,e,{get:()=>i[e],enumerable:!(l=_(i,e))||l.enumerable});return f},n=f=>t(s(p(f!=null?x(v(f)):{},"default",f&&f.__esModule&&"default"in f?{get:()=>f.default,enumerable:!0}:{value:f,enumerable:!0})),f);s(exports);C(exports,{default:()=>m});var o=n(require("react")),r=n(require("react-native-svg"));const u=({size:f=15,width:i=21,height:l=15,...e})=>(f!==l&&(i=i*(f/l),l=l*(f/l)),o.createElement(r.default,{width:i,height:l,viewBox:"0 0 21 15",...e},o.createElement(r.Defs,null,o.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),o.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#EB1C43"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#CA1134"})),o.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#115BCB"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#094AAC"})),o.createElement(r.LinearGradient,{id:"prefix__f",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#FFD953"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#FFD130"})),o.createElement(r.Path,{id:"prefix__e",d:"M7 0h7v15H7z"})),o.createElement(r.G,{fill:"none",fillRule:"evenodd"},o.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement(r.Path,{fill:"url(#prefix__b)",d:"M10 0h11v15H10z"}),o.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 0h7v15H0z"}),o.createElement(r.Use,{fill:"#000",xlinkHref:"#prefix__e"}),o.createElement(r.Use,{fill:"url(#prefix__f)",xlinkHref:"#prefix__e"}),o.createElement(r.Path,{fill:"#AF7F59",d:"M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9V6zm1 1v1.5h1V7h-1z"}))));var m=u;
