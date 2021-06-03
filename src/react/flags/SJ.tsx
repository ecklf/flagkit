import * as React from "react";

const SJ = ({
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
          <stop offset="0%" stopColor="#F14247" />
          <stop offset="100%" stopColor="#ED2F35" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0A3A85" />
          <stop offset="100%" stopColor="#032A67" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__a)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
        <path fill="url(#prefix__c)" d="M0 8h7v7h1V8h13V7H8V0H7v7H0z" />
      </g>
    </svg>
  );
};

export default SJ;
