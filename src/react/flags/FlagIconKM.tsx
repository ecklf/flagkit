import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconKM = ({
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
          <stop offset="0%" stopColor="#FFCB49" />
          <stop offset="100%" stopColor="#FFC638" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DC1D34" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#4985D4" />
          <stop offset="100%" stopColor="#3D77C2" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#4BA343" />
          <stop offset="100%" stopColor="#408D39" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 7h21v4H0z" />
        <path fill="url(#prefix__d)" d="M0 11h21v4H0z" />
        <path fill="url(#prefix__a)" d="M0 4h21v3H0z" />
        <path fill="url(#prefix__e)" d="M0 15l10-7.5L0 0z" />
        <path
          fill="url(#prefix__a)"
          d="M4.75 4.595a3 3 0 100 5.811 3.001 3.001 0 010-5.811zM5.5 6a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </g>
    </svg>
  );
};

export default FlagIconKM;
