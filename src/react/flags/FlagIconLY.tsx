import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconLY = ({
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
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#34B857" />
          <stop offset="100%" stopColor="#2B9E4A" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F41F34" />
          <stop offset="100%" stopColor="#E60B21" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 5h21v5H0z" />
        <path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#prefix__d)" d="M0 0h21v5H0z" />
        <path
          fill="url(#prefix__a)"
          d="M11.334 6.253a1.25 1.25 0 100 2.495 1.5 1.5 0 110-2.495zM11.5 8a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </g>
    </svg>
  );
};

export default FlagIconLY;
