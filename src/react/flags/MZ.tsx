import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const MZ = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#FFE547" />
          <stop offset="100%" stopColor="#FCE032" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#118C81" />
          <stop offset="100%" stopColor="#0D7168" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EF2147" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE444" />
          <stop offset="100%" stopColor="#FCE032" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 11h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 0h21v4H0z" />
        <path fill="url(#prefix__a)" d="M0 4h21v7H0z" />
        <path fill="url(#prefix__d)" d="M0 5h21v5H0z" />
        <path fill="url(#prefix__e)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#prefix__f)"
          d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"
        />
      </g>
    </svg>
  );
};

export default MZ;
