var d=Object.create,n=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var u=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var s=l=>n(l,"__esModule",{value:!0});var F=(l,f)=>{for(var i in f)n(l,i,{get:f[i],enumerable:!0})},v=(l,f,i)=>{if(f&&typeof f=="object"||typeof f=="function")for(let e of _(f))!C.call(l,e)&&e!=="default"&&n(l,e,{get:()=>f[e],enumerable:!(i=x(f,e))||i.enumerable});return l},p=l=>v(s(n(l!=null?d(u(l)):{},"default",l&&l.__esModule&&"default"in l?{get:()=>l.default,enumerable:!0}:{value:l,enumerable:!0})),l);s(exports);F(exports,{default:()=>t});var r=p(require("react")),o=p(require("react-native-svg"));const z=({size:l=15,width:f=21,height:i=15,...e})=>(l!==i&&(f=f*(l/i),i=i*(l/i)),r.createElement(o.default,{width:f,height:i,viewBox:"0 0 21 15",...e},r.createElement(o.Defs,null,r.createElement(o.LinearGradient,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#FFF"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#F0F0F0"})),r.createElement(o.LinearGradient,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#071585"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#000B64"})),r.createElement(o.LinearGradient,{id:"prefix__c",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#D32636"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#BA1827"})),r.createElement(o.LinearGradient,{id:"prefix__d",x1:"50%",x2:"35.4%",y1:"0%",y2:"89.131%"},r.createElement(o.Stop,{offset:"0%",stopColor:"#AB5423"}),r.createElement(o.Stop,{offset:"100%",stopColor:"#5A3719"}))),r.createElement(o.G,{fill:"none",fillRule:"evenodd"},r.createElement(o.Path,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement(o.Path,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),r.createElement(o.Path,{fill:"url(#prefix__c)",fillRule:"nonzero",d:"M22 15.5l-22-8 22-8z"}),r.createElement(o.Path,{fill:"url(#prefix__a)",fillRule:"nonzero",d:"M21 .928L2.926 7.5 21 14.072z"}),r.createElement(o.Path,{fill:"url(#prefix__d)",d:"M16 7.038c-.118-.118-.806.156-.806.156L14 6s-.062-.663.5-1c.425-.255 1.22-.16 1.999-.5C17.746 3.956 19 3 19 3l-.802 2.206s.919.473.802.794c-.034.093-.93.385-1 .5-.132.22.524.286.32.538C17.733 7.765 17 8.5 17 8.5L16 8s.15-.811 0-.962z"}),r.createElement(o.Circle,{cx:13.5,cy:7.5,r:1,fill:"#FFC322"}),r.createElement(o.Path,{fill:"#FFC322",fillRule:"nonzero",d:"M12.5 9h5a.5.5 0 100-1h-5a.5.5 0 100 1z"}),r.createElement(o.Path,{fill:"#FFC322",fillRule:"nonzero",d:"M14.197 10.46l3.5-1.5a.5.5 0 00-.394-.92l-3.5 1.5a.5.5 0 00.394.92z"}))));var t=z;