import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const CU = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <svg width={width} height={height} viewBox="0 0 21 15" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0B389F" />
          <stop offset="100%" stopColor="#052E8D" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E12A43" />
          <stop offset="100%" stopColor="#CD1931" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v3H0zM0 6h21v3H0z" />
        <path fill="url(#prefix__a)" d="M0 3h21v3H0z" />
        <path fill="url(#prefix__b)" d="M0 12h21v3H0z" />
        <path fill="url(#prefix__a)" d="M0 9h21v3H0z" />
        <path fill="url(#prefix__c)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#prefix__a)"
          d="M3.5 8.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L3.5 5.5l.45 1.38 1.452.002-1.173.855.447 1.381z"
        />
      </g>
    </svg>
  );
};

export default CU;
