import * as React from "react";

const GY = ({
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
          <stop offset="0%" stopColor="#08C55F" />
          <stop offset="100%" stopColor="#009F49" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD831" />
          <stop offset="100%" stopColor="#FDD117" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E92034" />
          <stop offset="100%" stopColor="#CE1225" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__c)"
          fillRule="nonzero"
          d="M-1 15V0h1l21 7v1L0 15z"
        />
        <path
          fill="url(#prefix__d)"
          fillRule="nonzero"
          d="M0 1.054v12.892L19.338 7.5z"
        />
        <path
          fill="url(#prefix__e)"
          fillRule="nonzero"
          d="M-1 15V0h1l11.5 7.5L0 15z"
        />
        <path
          fill="url(#prefix__f)"
          fillRule="nonzero"
          d="M0 13.806L9.67 7.5 0 1.194z"
        />
      </g>
    </svg>
  );
};

export default GY;
