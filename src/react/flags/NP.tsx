import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const NP = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EE1B44" />
          <stop offset="100%" stopColor="#DD153C" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0543A8" />
          <stop offset="100%" stopColor="#003893" />
        </linearGradient>
        <path
          id="prefix__a"
          d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
        />
        <path
          id="prefix__e"
          d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="prefix__c" fill="#fff">
          <use xlinkHref="#prefix__a" />
        </mask>
        <use fill="url(#prefix__b)" xlinkHref="#prefix__a" />
        <g mask="url(#prefix__c)">
          <use fill="url(#prefix__d)" xlinkHref="#prefix__e" />
          <path
            stroke="url(#prefix__f)"
            d="M.5.5v14h12.17l-8-7h7.679L2.136.691A1.483 1.483 0 001.496.5H.5z"
          />
        </g>
        <path
          fill="url(#prefix__b)"
          d="M5.138 5.85a3.52 3.52 0 00.789-.318 2 2 0 01-3.857 0c.236.132.502.24.791.32L3.25 5.5l-.636-.574.856.044-.044-.856L4 4.75l.574-.636-.044.856.856-.044-.636.574.388.35zM4 12l-.765.848.058-1.14-1.14.057L3 11l-.848-.765 1.14.058-.057-1.14L4 10l.765-.848-.058 1.14 1.14-.057L5 11l.848.765-1.14-.058.057 1.14L4 12z"
          mask="url(#prefix__c)"
        />
      </g>
    </svg>
  );
};

export default NP;
