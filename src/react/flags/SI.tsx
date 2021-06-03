import * as React from "react";

const SI = ({
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
          <stop offset="0%" stopColor="#0C47B7" />
          <stop offset="100%" stopColor="#073DA4" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E53B35" />
          <stop offset="100%" stopColor="#D32E28" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 3h21v7H0z" />
        <path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <path
          fill="url(#prefix__a)"
          d="M0 5V0h21v5H6.933V4s-.705-.5-1.433-.5C4.772 3.5 4 4 4 4v1H0zm5.5 2a1 1 0 110-2 1 1 0 010 2z"
        />
      </g>
    </svg>
  );
};

export default SI;
