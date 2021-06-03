import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const GW = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#1AB558" />
          <stop offset="100%" stopColor="#169E4D" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD952" />
          <stop offset="100%" stopColor="#FCD036" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E72B42" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 7h21v8H0z" />
        <path fill="url(#prefix__c)" d="M0 0h21v7H0z" />
        <path fill="url(#prefix__d)" d="M0 0h8v15H0z" />
        <path
          fill="url(#prefix__e)"
          d="M4 8.459L2.53 9.523l.558-1.727-1.466-1.069 1.814-.003L4 5l.564 1.724 1.814.003-1.466 1.07.557 1.726z"
        />
      </g>
    </svg>
  );
};

export default GW;
