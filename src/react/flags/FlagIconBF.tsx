import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconBF = ({
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
          <stop offset="0%" stopColor="#00B051" />
          <stop offset="100%" stopColor="#009F49" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FA494B" />
          <stop offset="100%" stopColor="#F02B2D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 8h21v7H0z" />
        <path fill="url(#prefix__c)" d="M0 0h21v8H0z" />
        <path
          fill="#FDD216"
          d="M10.5 9.17l-1.763 1.257.65-2.065-1.74-1.29 2.165-.019L10.5 5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </g>
    </svg>
  );
};

export default FlagIconBF;
