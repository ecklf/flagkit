var d=Object.create,e=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var t=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var p=r=>e(r,"__esModule",{value:!0});var v=(r,l)=>{for(var i in l)e(r,i,{get:l[i],enumerable:!0})},u=(r,l,i)=>{if(l&&typeof l=="object"||typeof l=="function")for(let s of _(l))!F.call(r,s)&&s!=="default"&&e(r,s,{get:()=>l[s],enumerable:!(i=x(l,s))||i.enumerable});return r},n=r=>u(p(e(r!=null?d(t(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);p(exports);v(exports,{default:()=>m});var f=n(require("react")),o=n(require("react-native-svg"));const C=({size:r=15,width:l=21,height:i=15,...s})=>(r!==i&&(l=l*(r/i),i=i*(r/i)),f.createElement(o.default,{width:l,height:i,viewBox:"0 0 21 15",...s},f.createElement(o.Defs,null,f.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#EF273F"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#DB1C33"})),f.createElement(o.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#F22A41"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#E51D34"})),f.createElement(o.LinearGradient,{id:"prefix__d",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(o.Stop,{offset:"0%",stopColor:"#FADF46"}),f.createElement(o.Stop,{offset:"100%",stopColor:"#F9DC38"}))),f.createElement(o.G,{fill:"none",fillRule:"evenodd"},f.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(o.Path,{fill:"url(#prefix__b)",d:"M10.5 6.291L-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44 10.5 6.291z"}),f.createElement(o.Path,{fill:"url(#prefix__c)",d:"M9 2.502c0-.279.216-.505.496-.505h2.009c.273 0 .495.214.495.505v.99c0 .28-.16.666-.348.853l-.804.804a.496.496 0 01-.696 0l-.804-.804A1.354 1.354 0 019 3.493v-.991z"}),f.createElement(o.Path,{fill:"url(#prefix__d)",d:"M10.5 3.997a.5.5 0 110-1 .5.5 0 010 1zm0-2c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5c.829 0 1.5.224 1.5.5s-.671.5-1.5.5z"}))));var m=C;