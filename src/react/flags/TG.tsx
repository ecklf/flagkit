import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const TG = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#FFD44D" />
          <stop offset="100%" stopColor="#FFCD2F" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#159A74" />
          <stop offset="100%" stopColor="#0C6A4F" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ED1F45" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__c)"
          d="M9 0h12v3H9V0zm0 6h12v3H9V6zm-9 6h21v3H0v-3z"
        />
        <path fill="url(#prefix__d)" d="M0 0h9v9H0z" />
        <path
          fill="url(#prefix__a)"
          d="M4.5 5.67L2.737 6.927l.65-2.065-1.74-1.29 2.165-.019L4.5 1.5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </g>
    </svg>
  );
};

export default TG;
