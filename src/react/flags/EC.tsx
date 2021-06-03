import * as React from "react";

const EC = ({
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
          <stop offset="0%" stopColor="#0748AE" />
          <stop offset="100%" stopColor="#003993" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DE2035" />
          <stop offset="100%" stopColor="#CE1126" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD935" />
          <stop offset="100%" stopColor="#FDD216" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FBDC44" />
          <stop offset="100%" stopColor="#FFDC32" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 7h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 11h21v4H0z" />
        <path fill="url(#prefix__d)" d="M0 0h21v7H0z" />
        <path
          fill="url(#prefix__e)"
          d="M9.3 6a2 2 0 102.4 0L11 8.1h-1L9.3 6z"
        />
        <path fill="#5FC0DC" d="M10.5 5.5L11 8h-1z" />
        <path
          fill="#3F2821"
          fillRule="nonzero"
          d="M9.677 3.823a.25.25 0 00-.256-.06l-1.5.5a.25.25 0 10.158.474l1.353-.451.891.89a.25.25 0 00.354 0l.89-.89 1.354.451a.25.25 0 10.158-.474l-1.5-.5a.25.25 0 00-.256.06l-.823.823-.823-.823z"
          opacity={0.66}
        />
      </g>
    </svg>
  );
};

export default EC;
