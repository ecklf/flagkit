var x=Object.create,p=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var n=f=>p(f,"__esModule",{value:!0});var m=(f,i)=>{for(var l in i)p(f,l,{get:i[l],enumerable:!0})},t=(f,i,l)=>{if(i&&typeof i=="object"||typeof i=="function")for(let e of d(i))!u.call(f,e)&&e!=="default"&&p(f,e,{get:()=>i[e],enumerable:!(l=_(i,e))||l.enumerable});return f},s=f=>t(n(p(f!=null?x(v(f)):{},"default",f&&f.__esModule&&"default"in f?{get:()=>f.default,enumerable:!0}:{value:f,enumerable:!0})),f);n(exports);m(exports,{default:()=>H});var o=s(require("react")),r=s(require("react-native-svg"));const F=({size:f=15,width:i=21,height:l=15,...e})=>(f!==l&&(i=i*(f/l),l=l*(f/l)),o.createElement(r.default,{width:i,height:l,viewBox:"0 0 21 15",...e},o.createElement(r.Defs,null,o.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),o.createElement(r.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(r.Stop,{offset:"0%",stopColor:"#E82245"}),o.createElement(r.Stop,{offset:"100%",stopColor:"#CC1838"})),o.createElement(r.Path,{id:"prefix__c",d:"M0 0h21v8H0z"})),o.createElement(r.G,{fill:"none",fillRule:"evenodd"},o.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement(r.Use,{fill:"#000",xlinkHref:"#prefix__c"}),o.createElement(r.Use,{fill:"url(#prefix__a)",xlinkHref:"#prefix__c"}),o.createElement(r.Path,{fill:"url(#prefix__d)",d:"M3 8H0v7h21V8H11a4 4 0 10-8 0z"}),o.createElement(r.Path,{fill:"url(#prefix__a)",d:"M3 8a4 4 0 108 0H3z"}))));var H=F;