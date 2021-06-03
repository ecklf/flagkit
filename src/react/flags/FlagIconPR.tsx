import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconPR = ({
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
          <stop offset="0%" stopColor="#FA2222" />
          <stop offset="100%" stopColor="#ED0000" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1D63F9" />
          <stop offset="100%" stopColor="#0650F0" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__a)" d="M0 3h21v3H0zM0 9h21v3H0z" />
        <path fill="url(#prefix__c)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#prefix__a)"
          d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"
        />
      </g>
    </svg>
  );
};

export default FlagIconPR;
