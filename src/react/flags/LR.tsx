import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const LR = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E1244A" />
          <stop offset="100%" stopColor="#BE1134" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0C3F8E" />
          <stop offset="100%" stopColor="#032A67" />
        </linearGradient>
        <filter
          id="prefix__d"
          width="108.3%"
          height="116.7%"
          x="-4.2%"
          y="-4.2%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            in="shadowOffsetOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
        </filter>
        <path
          id="prefix__e"
          d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__b)"
          d="M10 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2z"
        />
        <path fill="url(#prefix__c)" d="M0 0h10v10H0z" />
        <use fill="#000" filter="url(#prefix__d)" xlinkHref="#prefix__e" />
        <use fill="url(#prefix__a)" xlinkHref="#prefix__e" />
      </g>
    </svg>
  );
};

export default LR;
