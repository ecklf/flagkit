var L=Object.create,p=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var _=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var s=r=>p(r,"__esModule",{value:!0});var t=(r,f)=>{for(var i in f)p(r,i,{get:f[i],enumerable:!0})},u=(r,f,i)=>{if(f&&typeof f=="object"||typeof f=="function")for(let e of d(f))!v.call(r,e)&&e!=="default"&&p(r,e,{get:()=>f[e],enumerable:!(i=x(f,e))||i.enumerable});return r},n=r=>u(s(p(r!=null?L(_(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);s(exports);t(exports,{default:()=>z});var o=n(require("react")),l=n(require("react-native-svg"));const M=({size:r=15,width:f=21,height:i=15,...e})=>(r!==i&&(f=f*(r/i),i=i*(r/i)),o.createElement(l.default,{width:f,height:i,viewBox:"0 0 21 15",...e},o.createElement(l.Defs,null,o.createElement(l.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#FFF"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#F0F0F0"})),o.createElement(l.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#0884E6"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#0074D0"})),o.createElement(l.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#0E88E9"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#0074D0"}))),o.createElement(l.G,{fill:"none",fillRule:"evenodd"},o.createElement(l.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement(l.Path,{fill:"url(#prefix__b)",d:"M0 0h21v5H0zM0 10h21v5H0z"}),o.createElement(l.Path,{fill:"url(#prefix__a)",d:"M0 5h21v5H0z"}),o.createElement(l.Path,{fill:"url(#prefix__c)",d:"M10.5 8l-.707.207L10 7.5l-.207-.707L10.5 7l.707-.207L11 7.5l.207.707zM14.5 7l-.707.207L14 6.5l-.207-.707L14.5 6l.707-.207L15 6.5l.207.707zM14.5 9l-.707.207L14 8.5l-.207-.707L14.5 8l.707-.207L15 8.5l.207.707zM6.5 9l-.707.207L6 8.5l-.207-.707L6.5 8l.707-.207L7 8.5l.207.707zM6.5 7l-.707.207L6 6.5l-.207-.707L6.5 6l.707-.207L7 6.5l.207.707z"}))));var z=M;