import * as React from "react";

const GL = ({
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
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E82245" />
          <stop offset="100%" stopColor="#CC1838" />
        </linearGradient>
        <filter
          id="prefix__b"
          width="107.1%"
          height="118.8%"
          x="-3.6%"
          y="-9.4%"
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
        <path id="prefix__c" d="M0 0h21v8H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__c" />
        <use fill="url(#prefix__a)" xlinkHref="#prefix__c" />
        <path fill="url(#prefix__d)" d="M3 8H0v7h21V8H11a4 4 0 10-8 0z" />
        <path fill="url(#prefix__a)" d="M3 8a4 4 0 108 0H3z" />
      </g>
    </svg>
  );
};

export default GL;
