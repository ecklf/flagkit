import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconSC = ({
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
          <stop offset="0%" stopColor="#1DBE4F" />
          <stop offset="100%" stopColor="#159B3F" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0858B4" />
          <stop offset="100%" stopColor="#013F87" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ED3535" />
          <stop offset="100%" stopColor="#D62828" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#08964F" />
          <stop offset="100%" stopColor="#017B3E" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDD67" />
          <stop offset="100%" stopColor="#FDD856" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__c)" d="M0 0h7L0 15z" />
        <path fill="url(#prefix__d)" d="M14 0h7v5L0 15z" />
        <path fill="url(#prefix__e)" d="M21 15v-5L0 15z" />
        <path fill="url(#prefix__f)" d="M7 0h7L0 15z" />
        <path fill="url(#prefix__a)" d="M21 10V5L0 15z" />
      </g>
    </svg>
  );
};

export default FlagIconSC;
