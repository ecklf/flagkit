import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const NC = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#094CC7" />
          <stop offset="100%" stopColor="#003CAB" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#2AAD55" />
          <stop offset="100%" stopColor="#219447" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F65D55" />
          <stop offset="100%" stopColor="#E9443C" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FAE749" />
          <stop offset="100%" stopColor="#FBE533" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v5H0z" />
        <path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#prefix__d)" d="M0 5h21v5H0z" />
        <circle cx={10.5} cy={7.5} r={3.5} fill="url(#prefix__e)" />
        <path
          fill="url(#prefix__f)"
          d="M10.092 6.211a.5.5 0 10.514-.2c.048-.024.096-.05.144-.078.598-.345.97-.819.833-1.058-.139-.24-.735-.153-1.333.192s-.97.819-.833 1.058c.086.148.347.171.675.086zM10.5 10.5c-.828 0-1-.724-1-1s.172-.5 1-.5c.828 0 1 .224 1 .5s-.172 1-1 1zm0-1.5a.5.5 0 110-1 .5.5 0 010 1zm0-1a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </g>
    </svg>
  );
};

export default NC;
