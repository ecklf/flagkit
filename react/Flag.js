var E=Object.create,T=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var o=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var A=M=>T(M,"__esModule",{value:!0});var P=(M,G)=>{for(var S in G)T(M,S,{get:G[S],enumerable:!0})},e=(M,G,S)=>{if(G&&typeof G=="object"||typeof G=="function")for(let C of L(G))!F.call(M,C)&&C!=="default"&&T(M,C,{get:()=>G[C],enumerable:!(S=N(G,C))||S.enumerable});return M},I=M=>e(A(T(M!=null?E(o(M)):{},"default",M&&M.__esModule&&"default"in M?{get:()=>M.default,enumerable:!0}:{value:M,enumerable:!0})),M);A(exports);P(exports,{default:()=>U});var B=I(require("react")),K=I(require("./flags"));const R=({code:M,...G})=>{const S=K[`FlagIcon${M.replace("/-/g","$")}`];return B.default.createElement(B.default.Fragment,null,B.default.createElement(S,{...G}))};var U=R;
