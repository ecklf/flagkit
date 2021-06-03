import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const TF = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#073AB6" />
          <stop offset="100%" stopColor="#002B93" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F44653" />
          <stop offset="100%" stopColor="#EE2A39" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1035BB" />
          <stop offset="100%" stopColor="#042396" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__a)"
          d="M0 0h9.5v7.25c0 .138-.107.25-.254.25H0V0z"
        />
        <path fill="url(#prefix__c)" d="M6 0h3v7H6z" />
        <path fill="url(#prefix__d)" d="M0 0h3v7H0z" />
        <path fill="url(#prefix__a)" d="M3 0h3v7H3z" />
        <path
          fill="#FFF"
          d="M13 6h5l-.5 1H16v.5h1l-.5 1H16V10h-1V7h-1.5L13 6zm4 2.5l1 1.5h-2l1-1.5zm-3 0l1 1.5h-2l1-1.5zm1.5 3l-1-1.5h2l-1 1.5zm3-3.5a.5.5 0 110-1 .5.5 0 010 1zm-6 0a.5.5 0 110-1 .5.5 0 010 1zm1 4a.5.5 0 110-1 .5.5 0 010 1zm4 0a.5.5 0 110-1 .5.5 0 010 1zm-2 1a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </g>
    </svg>
  );
};

export default TF;
