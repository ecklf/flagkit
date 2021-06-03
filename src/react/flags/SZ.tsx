import * as React from "react";

const SZ = ({
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
          <stop offset="0%" stopColor="#486BCA" />
          <stop offset="100%" stopColor="#3E5FBA" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDF20" />
          <stop offset="100%" stopColor="#FFDA00" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#CF1615" />
          <stop offset="100%" stopColor="#B20D0C" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <ellipse id="prefix__e" cx={4.5} cy={2.5} rx={4.5} ry={2.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#prefix__c)" d="M0 3h21v9H0z" />
        <path fill="url(#prefix__d)" d="M0 4h21v7H0z" />
        <g transform="translate(6 5)">
          <mask id="prefix__g" fill="#fff">
            <use xlinkHref="#prefix__e" />
          </mask>
          <use fill="url(#prefix__a)" xlinkHref="#prefix__e" />
          <path
            fill="url(#prefix__f)"
            d="M0 0h5v5H1z"
            mask="url(#prefix__g)"
            transform="matrix(-1 0 0 1 5 0)"
          />
          <circle
            cx={5.5}
            cy={2.5}
            r={1}
            fill="#1A1A1A"
            mask="url(#prefix__g)"
          />
          <circle
            cx={3.5}
            cy={2.5}
            r={1}
            fill="#F6F6F6"
            mask="url(#prefix__g)"
          />
        </g>
      </g>
    </svg>
  );
};

export default SZ;
