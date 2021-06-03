import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const NA = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

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
          <stop offset="0%" stopColor="#0C4799" />
          <stop offset="100%" stopColor="#05387E" />
        </linearGradient>
        <linearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD243" />
          <stop offset="100%" stopColor="#FFCD2F" />
        </linearGradient>
        <linearGradient id="prefix__j" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1BAC55" />
          <stop offset="100%" stopColor="#149447" />
        </linearGradient>
        <linearGradient id="prefix__m" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E52347" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
        <filter
          id="prefix__b"
          width="107.1%"
          height="115%"
          x="-3.6%"
          y="-7.5%"
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
        <filter
          id="prefix__e"
          width="112.5%"
          height="125%"
          x="-6.2%"
          y="-6.2%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            in="shadowOffsetOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
        </filter>
        <filter
          id="prefix__h"
          width="107.1%"
          height="115%"
          x="-3.6%"
          y="-7.5%"
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
        <filter
          id="prefix__k"
          width="106.2%"
          height="107.9%"
          x="-3.1%"
          y="-3.9%"
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
        <path id="prefix__c" d="M3.121 12.304l21-10h-21z" />
        <path
          id="prefix__f"
          d="M6.621 6.804l-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z"
        />
        <path id="prefix__i" d="M3.121 17.304h21v-10z" />
        <path
          id="prefix__l"
          d="M5.433 19.304L25.75 6.609 21.81.304 1.493 12.999z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <g transform="translate(-3.12 -2.3)">
          <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__c" />
          <use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use fill="#000" filter="url(#prefix__e)" xlinkHref="#prefix__f" />
          <use fill="url(#prefix__g)" xlinkHref="#prefix__f" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use fill="#000" filter="url(#prefix__h)" xlinkHref="#prefix__i" />
          <use fill="url(#prefix__j)" xlinkHref="#prefix__i" />
        </g>
        <g transform="translate(-3.12 -2.3)">
          <use fill="#000" filter="url(#prefix__k)" xlinkHref="#prefix__l" />
          <use fill="url(#prefix__a)" xlinkHref="#prefix__l" />
        </g>
        <path
          fill="url(#prefix__m)"
          d="M2.65 19.608L27.243 4.24 24.593 0 0 15.368z"
          transform="translate(-3.12 -2.3)"
        />
      </g>
    </svg>
  );
};

export default NA;
