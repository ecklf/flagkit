var e=Object.create,p=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var t=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var s=r=>p(r,"__esModule",{value:!0});var v=(r,l)=>{for(var i in l)p(r,i,{get:l[i],enumerable:!0})},_=(r,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let f of t(l))!x.call(r,f)&&f!=="default"&&p(r,f,{get:()=>l[f],enumerable:!(i=n(l,f))||i.enumerable});return r},h=r=>_(s(p(r!=null?e(d(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);s(exports);v(exports,{default:()=>u});var o=h(require("react"));const C=({size:r=15,width:l=21,height:i=15,...f})=>(r!==i&&(l=l*(r/i),i=i*(r/i)),o.createElement("svg",{xmlnsXlink:"http://www.w3.org/1999/xlink",width:l,height:i,viewBox:"0 0 21 15",...f},o.createElement("defs",null,o.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#FFF"}),o.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),o.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#DE233C"}),o.createElement("stop",{offset:"100%",stopColor:"#CD1931"})),o.createElement("path",{id:"prefix__c",d:"M4 3V2H3v1H2v1h1v1h1V4h1V3H4z"})),o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement("path",{fill:"url(#prefix__b)",d:"M11 0h10v15H11z"}),o.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h11v15H0z"}),o.createElement("use",{fill:"#CCCCCD",xlinkHref:"#prefix__c"}),o.createElement("path",{stroke:"#7B716A",strokeOpacity:.66,strokeWidth:.5,d:"M4.25 2.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5v1z"}),o.createElement("circle",{cx:3.5,cy:3.5,r:1,fill:"#7B716A"}))));var u=C;