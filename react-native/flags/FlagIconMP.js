var x=Object.create,n=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,t=Object.prototype.hasOwnProperty;var p=o=>n(o,"__esModule",{value:!0});var v=(o,l)=>{for(var i in l)n(o,i,{get:l[i],enumerable:!0})},C=(o,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let e of _(l))!t.call(o,e)&&e!=="default"&&n(o,e,{get:()=>l[e],enumerable:!(i=d(l,e))||i.enumerable});return o},s=o=>C(p(n(o!=null?x(u(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o);p(exports);v(exports,{default:()=>m});var f=s(require("react")),r=s(require("react-native-svg"));const a=({size:o=15,width:l=21,height:i=15,...e})=>(o!==i&&(l=l*(o/i),i=i*(o/i)),f.createElement(r.default,{width:l,height:i,viewBox:"0 0 21 15",...e},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#1E8BD6"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#1074BA"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#A9A7A9"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#8C8A8C"}))),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",fillRule:"nonzero",d:"M10.5 12.5a5 5 0 100-10 5 5 0 000 10zm0-1a4 4 0 110-8 4 4 0 010 8z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M8.938 5.997C8.972 5.447 9.443 5 9.999 5h1.002c.552 0 1.027.453 1.061.997l.376 6.006a.927.927 0 01-.947.997H9.509a.935.935 0 01-.947-.997l.376-6.006z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M10.5 9.515l-2.057 1.467.759-2.41-2.03-1.504 2.526-.022.802-2.396.802 2.396 2.527.022-2.03 1.504.758 2.41z"}))));var m=a;