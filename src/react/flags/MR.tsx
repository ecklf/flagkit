import * as React from "react";

const MR = ({
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
          <stop offset="0%" stopColor="#108B4D" />
          <stop offset="100%" stopColor="#0A6135" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC941" />
          <stop offset="100%" stopColor="#FFC42E" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__c)"
          d="M14.86 5.8a4.5 4.5 0 11-8.89 0 4.501 4.501 0 008.89 0zm-4.36.623l-1.236.881.456-1.448-1.22-.903 1.518-.014L10.5 3.5l.482 1.44 1.518.013-1.22.903.456 1.448-1.236-.88z"
        />
      </g>
    </svg>
  );
};

export default MR;
