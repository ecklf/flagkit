import * as React from "react";

const DJ = ({
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
          <stop offset="0%" stopColor="#1DC837" />
          <stop offset="100%" stopColor="#13AD2B" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#82C5F5" />
          <stop offset="100%" stopColor="#6AB3E8" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E21C21" />
          <stop offset="100%" stopColor="#D7151A" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 7h21v8H0z" />
        <path fill="url(#prefix__c)" d="M0 0h21v7H0z" />
        <path fill="url(#prefix__a)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#prefix__d)"
          d="M3.5 8.475L2.03 9.523 2.574 7.8l-1.45-1.074 1.804-.016L3.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        />
      </g>
    </svg>
  );
};

export default DJ;
