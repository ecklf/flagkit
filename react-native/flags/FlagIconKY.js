var x=Object.create,p=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var e=l=>p(l,"__esModule",{value:!0});var u=(l,i)=>{for(var o in i)p(l,o,{get:i[o],enumerable:!0})},H=(l,i,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let _ of d(i))!L.call(l,_)&&_!=="default"&&p(l,_,{get:()=>i[_],enumerable:!(o=n(i,_))||o.enumerable});return l},s=l=>H(e(p(l!=null?x(v(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l);e(exports);u(exports,{default:()=>C});var f=s(require("react")),r=s(require("react-native-svg"));const h=({size:l=15,width:i=21,height:o=15,..._})=>(l!==o&&(i=i*(l/o),o=o*(l/o)),f.createElement(r.default,{width:i,height:o,viewBox:"0 0 21 15",..._},f.createElement(r.Defs,null,f.createElement(r.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#FFF"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#F0F0F0"})),f.createElement(r.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#07319C"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#00247E"})),f.createElement(r.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#DB1E36"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#D51931"})),f.createElement(r.LinearGradient,{id:"prefix__f",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},f.createElement(r.Stop,{offset:"0%",stopColor:"#125FBA"}),f.createElement(r.Stop,{offset:"100%",stopColor:"#0C50A1"})),f.createElement(r.Path,{id:"prefix__d",d:"M0 3.5V0h5v3.5C5 6 2.5 7 2.5 7S0 6 0 3.5z"})),f.createElement(r.G,{fill:"none",fillRule:"evenodd"},f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",fillRule:"nonzero",d:"M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"}),f.createElement(r.Path,{fill:"url(#prefix__a)",d:"M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"}),f.createElement(r.Path,{fill:"url(#prefix__c)",d:"M0 3h4V0h1v3h4v1H5v3H4V4H0z"}),f.createElement(r.Ellipse,{cx:15.5,cy:4,fill:"#FAD051",rx:1.5,ry:1}),f.createElement(r.G,{transform:"translate(13 4)"},f.createElement(r.Mask,{id:"prefix__e",fill:"#fff"},f.createElement(r.Use,{xlinkHref:"#prefix__d"})),f.createElement(r.Use,{fill:"url(#prefix__a)",xlinkHref:"#prefix__d"}),f.createElement(r.Path,{fill:"#CF142C",d:"M0 0h5v1H0z",mask:"url(#prefix__e)"}),f.createElement(r.Path,{fill:"url(#prefix__f)",d:"M0 6h5v1H0V6zm0-2h5v1H0V4zm0-2h5v1H0V2z",mask:"url(#prefix__e)"})))));var C=h;