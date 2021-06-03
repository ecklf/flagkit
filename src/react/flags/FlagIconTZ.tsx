import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconTZ = ({
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
          <stop offset="0%" stopColor="#33CC4D" />
          <stop offset="100%" stopColor="#2AB441" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#2DAFE4" />
          <stop offset="100%" stopColor="#1BA4DC" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD84F" />
          <stop offset="100%" stopColor="#FCD036" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M.001 10.004l21-10h-21z" />
        <path fill="url(#prefix__c)" d="M.001 15.004h21v-10z" />
        <path
          fill="url(#prefix__d)"
          d="M2.313 17.004L22.63 4.309l-3.94-6.305-20.317 12.695z"
        />
        <path
          fill="url(#prefix__e)"
          d="M-.47 17.308L24.123 1.94l-2.65-4.24L-3.12 13.068z"
        />
      </g>
    </svg>
  );
};

export default FlagIconTZ;
