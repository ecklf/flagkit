import*as r from"react";import s,{Path as l,Defs as d,LinearGradient as n,Stop as f,G as v}from"react-native-svg";const x=({size:e=15,width:i=21,height:o=15,...p})=>(e!==o&&(i=i*(e/o),o=o*(e/o)),r.createElement(s,{width:i,height:o,viewBox:"0 0 21 15",...p},r.createElement(d,null,r.createElement(n,{id:"prefix__a",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(f,{offset:"0%",stopColor:"#FFF"}),r.createElement(f,{offset:"100%",stopColor:"#F0F0F0"})),r.createElement(n,{id:"prefix__b",x1:"50%",x2:"50%",y1:"0%",y2:"100%"},r.createElement(f,{offset:"0%",stopColor:"#EF264D"}),r.createElement(f,{offset:"100%",stopColor:"#E1143C"}))),r.createElement(v,{fill:"none",fillRule:"evenodd"},r.createElement(l,{fill:"url(#prefix__a)",d:"M0 0h21v15H0z"}),r.createElement(l,{fill:"url(#prefix__b)",d:"M0 0h21v15H0z"}),r.createElement(l,{fill:"url(#prefix__a)",d:"M0 9h6v6h3V9h12V6H9V0H6v6H0z"}))));var u=x;export{u as default};