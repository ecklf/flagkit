import * as React from "react";

const IL = ({
  width = 21,
  height = 15,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 15" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0E46D4" />
          <stop offset="100%" stopColor="#0538B9" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <path fill="url(#prefix__a)" d="M0 3h21v9H0z" />
        <path
          stroke="#093EC5"
          strokeWidth={0.5}
          d="M7.575 9.25L10.5 3.985l2.925 5.265h-5.85z"
        />
        <path
          stroke="#093EC5"
          strokeWidth={0.5}
          d="M7.575 5.75l2.925 5.265 2.925-5.265h-5.85z"
        />
      </g>
    </svg>
  );
};

export default IL;
