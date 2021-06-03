import * as React from "react";

const ZA = ({
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
          <stop offset="0%" stopColor="#06A86E" />
          <stop offset="100%" stopColor="#007A4E" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFBF2E" />
          <stop offset="100%" stopColor="#FFB612" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F44E46" />
          <stop offset="100%" stopColor="#DF3931" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#072CB4" />
          <stop offset="100%" stopColor="#042396" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__c)" d="M0 2l7 5.5L0 13z" />
        <path fill="url(#prefix__d)" d="M-1 2.25L5.75 7.5-1 12.75z" />
        <path fill="#FFF" d="M9 6L2 0h19v6z" />
        <path fill="url(#prefix__e)" d="M9.25 5l-6-5H21v5z" />
        <path fill="#FFF" d="M2 15h19V9H9z" />
        <path fill="url(#prefix__f)" d="M3.25 15H21v-5H9.25z" />
      </g>
    </svg>
  );
};

export default ZA;
