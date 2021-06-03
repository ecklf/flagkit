import * as React from "react";

const MD = ({
  width = 21,
  height = 15,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 21 15"
      {...props}
    >
      <defs>
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EB1C43" />
          <stop offset="100%" stopColor="#CA1134" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#115BCB" />
          <stop offset="100%" stopColor="#094AAC" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD953" />
          <stop offset="100%" stopColor="#FFD130" />
        </linearGradient>
        <filter
          id="prefix__d"
          width="121.4%"
          height="110%"
          x="-10.7%"
          y="-5%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius={0.25}
            result="shadowSpreadOuter1"
          />
          <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feColorMatrix
            in="shadowOffsetOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
        </filter>
        <path id="prefix__e" d="M7 0h7v15H7z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M10 0h11v15H10z" />
        <path fill="url(#prefix__c)" d="M0 0h7v15H0z" />
        <use fill="#000" filter="url(#prefix__d)" xlinkHref="#prefix__e" />
        <use fill="url(#prefix__f)" xlinkHref="#prefix__e" />
        <path
          fill="#AF7F59"
          d="M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9V6zm1 1v1.5h1V7h-1z"
        />
      </g>
    </svg>
  );
};

export default MD;
