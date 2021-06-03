import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const PA = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#E52448" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1367AE" />
          <stop offset="100%" stopColor="#0A5492" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v7H0z" />
        <path fill="url(#prefix__c)" d="M0 7h21v8H0z" />
        <path fill="url(#prefix__a)" d="M0 7V0h10v7H0zm10 8V7h11v8H10z" />
        <path
          fill="url(#prefix__c)"
          d="M5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
        />
        <path
          fill="url(#prefix__b)"
          d="M15.5 11.82l-1.176.798.396-1.365-1.122-.871 1.42-.045L15.5 9l.482 1.337 1.42.045-1.122.871.396 1.365z"
        />
      </g>
    </svg>
  );
};

export default PA;
