import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconCF = ({
  size = 15,
  width = 21,
  height = 15,
  ...props
}: Props) => {
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
          <stop offset="0%" stopColor="#083D96" />
          <stop offset="100%" stopColor="#053380" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#37AE39" />
          <stop offset="100%" stopColor="#2E9630" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD13F" />
          <stop offset="100%" stopColor="#FFCD2F" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E42346" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD03B" />
          <stop offset="100%" stopColor="#FFCD2F" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 7h21v4H0z" />
        <path fill="url(#prefix__d)" d="M0 11h21v4H0z" />
        <path fill="url(#prefix__a)" d="M0 4h21v3H0z" />
        <path fill="url(#prefix__e)" d="M8 0h5v15H8z" />
        <path
          fill="url(#prefix__f)"
          d="M3.5 2.585l-.882.629.326-1.033-.87-.645 1.082-.01L3.5.5l.344 1.027 1.083.01-.87.644.325 1.033z"
        />
      </g>
    </svg>
  );
};

export default FlagIconCF;
