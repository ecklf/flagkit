import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconLGBT = ({
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
          <stop offset="0%" stopColor="#F71E24" />
          <stop offset="100%" stopColor="#FB141B" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FB6C2C" />
          <stop offset="100%" stopColor="#FC6420" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FDFC42" />
          <stop offset="100%" stopColor="#FFFD38" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#238F35" />
          <stop offset="100%" stopColor="#1C7E2C" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0F62FA" />
          <stop offset="100%" stopColor="#0059FC" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v3H0z" />
        <path fill="url(#prefix__c)" d="M0 3h21v3H0z" />
        <path fill="url(#prefix__d)" d="M0 6h21v3H0z" />
        <path fill="url(#prefix__e)" d="M0 9h21v3H0z" />
        <path fill="url(#prefix__f)" d="M0 12h21v3H0z" />
      </g>
    </svg>
  );
};

export default FlagIconLGBT;
