var d=Object.create,s=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty;var e=r=>s(r,"__esModule",{value:!0});var C=(r,f)=>{for(var i in f)s(r,i,{get:f[i],enumerable:!0})},u=(r,f,i)=>{if(f&&typeof f=="object"||typeof f=="function")for(let p of _(f))!t.call(r,p)&&p!=="default"&&s(r,p,{get:()=>f[p],enumerable:!(i=x(f,p))||i.enumerable});return r},n=r=>u(e(s(r!=null?d(L(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);e(exports);C(exports,{default:()=>F});var o=n(require("react")),l=n(require("react-native-svg"));const v=({size:r=15,width:f=21,height:i=15,...p})=>(r!==i&&(f=f*(r/i),i=i*(r/i)),o.createElement(l.default,{width:f,height:i,viewBox:"0 0 21 15",...p},o.createElement(l.Defs,null,o.createElement(l.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#FFF"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#F0F0F0"})),o.createElement(l.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#262626"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#0D0D0D"})),o.createElement(l.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#E8283F"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#CC162C"})),o.createElement(l.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#FFD84E"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#FCD036"}))),o.createElement(l.G,{fill:"none",fillRule:"evenodd"},o.createElement(l.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement(l.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),o.createElement(l.Path,{fill:"url(#prefix__c)",d:"M0 0h21v15z"}),o.createElement(l.Path,{fill:"url(#prefix__a)",d:"M5 12.5l-.707.207L4.5 12l-.207-.707L5 11.5l.707-.207L5.5 12l.207.707zM5 6.5l-.707.207L4.5 6l-.207-.707L5 5.5l.707-.207L5.5 6l.207.707zM2.5 9l-.707.207L2 8.5l-.207-.707L2.5 8l.707-.207L3 8.5l.207.707zM7 8.5l-.707.207L6.5 8l-.207-.707L7 7.5l.707-.207L7.5 8l.207.707z"}),o.createElement(l.Path,{fill:"url(#prefix__d)",d:"M14.146 6.95a.49.49 0 01-.217-.377V5.65c0-.136-.098-.213-.246-.164l-.568.19a.87.87 0 01-.492 0l-.57-.19c-.135-.045-.15-.14-.028-.212l1.334-.8a.322.322 0 00.135-.377l-.19-.568c-.045-.136.016-.214.164-.164l.569.19a.332.332 0 00.376-.136l.8-1.334c.072-.12.163-.119.212.03l.19.568a.87.87 0 010 .492l-.19.569c-.045.136.03.246.165.246h.921c.136 0 .304.095.377.216l.8 1.335c.072.12.014.24-.116.266l-1.276.255a.414.414 0 00-.295.295l-.255 1.276c-.027.136-.144.189-.266.116l-1.334-.8z"}))));var F=v;