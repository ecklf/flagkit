var L=Object.create,e=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var F=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var n=r=>e(r,"__esModule",{value:!0});var t=(r,f)=>{for(var i in f)e(r,i,{get:f[i],enumerable:!0})},v=(r,f,i)=>{if(f&&typeof f=="object"||typeof f=="function")for(let s of x(f))!_.call(r,s)&&s!=="default"&&e(r,s,{get:()=>f[s],enumerable:!(i=d(f,s))||i.enumerable});return r},p=r=>v(n(e(r!=null?L(F(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);n(exports);t(exports,{default:()=>C});var o=p(require("react")),l=p(require("react-native-svg"));const u=({size:r=15,width:f=21,height:i=15,...s})=>(r!==i&&(f=f*(r/i),i=i*(r/i)),o.createElement(l.default,{width:f,height:i,viewBox:"0 0 21 15",...s},o.createElement(l.Defs,null,o.createElement(l.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#FFF"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#F0F0F0"})),o.createElement(l.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#0637C5"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#002CAA"})),o.createElement(l.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement(l.Stop,{offset:"0%",stopColor:"#FDD33F"}),o.createElement(l.Stop,{offset:"100%",stopColor:"#FED02F"}))),o.createElement(l.G,{fill:"none",fillRule:"evenodd"},o.createElement(l.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement(l.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),o.createElement(l.Path,{fill:"url(#prefix__c)",d:"M4 12h15v1H3l1-1zm7.5-6c3-2 6.5-4 6.5-4s-1.643 3.073-1.5 4.5C16.69 8.407 19 11 19 11H5s3.5-3 6.5-5z"}),o.createElement(l.Path,{fill:"#FFF",d:"M4 9l-.707.207L3.5 8.5l-.207-.707L4 8l.707-.207L4.5 8.5l.207.707zM5 2.5l-.707.207L4.5 2l-.207-.707L5 1.5l.707-.207L5.5 2l.207.707zM7 5.5l-.707.207L6.5 5l-.207-.707L7 4.5l.707-.207L7.5 5l.207.707zM2 5.5l-.707.207L1.5 5l-.207-.707L2 4.5l.707-.207L2.5 5l.207.707z"}))));var C=u;
