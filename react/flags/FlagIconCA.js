var s=Object.create,e=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty;var i=r=>e(r,"__esModule",{value:!0});var x=(r,l)=>{for(var f in l)e(r,f,{get:l[f],enumerable:!0})},_=(r,l,f)=>{if(l&&typeof l=="object"||typeof l=="function")for(let p of d(l))!a.call(r,p)&&p!=="default"&&e(r,p,{get:()=>l[p],enumerable:!(f=n(l,p))||f.enumerable});return r},u=r=>_(i(e(r!=null?s(t(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);i(exports);x(exports,{default:()=>F});var o=u(require("react"));const v=({size:r=15,width:l=21,height:f=15,...p})=>(r!==f&&(l=l*(r/f),f=f*(r/f)),o.createElement("svg",{width:l,height:f,viewBox:"0 0 21 15",...p},o.createElement("defs",null,o.createElement("linearGradient",{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#FFF"}),o.createElement("stop",{offset:"100%",stopColor:"#F0F0F0"})),o.createElement("linearGradient",{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},o.createElement("stop",{offset:"0%",stopColor:"#FF3131"}),o.createElement("stop",{offset:"100%",stopColor:"red"}))),o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),o.createElement("path",{fill:"url(#prefix__b)",d:"M10 0h11v15H10zM0 0h7v15H0z"}),o.createElement("path",{fill:"url(#prefix__a)",d:"M6 0h9v15H6z"}),o.createElement("path",{fill:"url(#prefix__b)",d:"M11.674 7.326l.652-.652a.251.251 0 01.355.007L13 7l1-.5-.5 1 .32.32a.247.247 0 01.008.352L12.5 9.5H11l-.25 1.5h-.5L10 9.5H8.5L7.172 8.172a.253.253 0 01.009-.353L7.5 7.5l-.5-1L8 7l.32-.32a.249.249 0 01.354-.006l.652.652c.096.096.152.063.124-.075L9 5l1 .5.5-1.5.5 1.5 1-.5-.45 2.251c-.029.142.028.171.124.075z"}))));var F=v;