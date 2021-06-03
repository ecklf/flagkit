import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconCG = ({
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
          <stop offset="0%" stopColor="#F33630" />
          <stop offset="100%" stopColor="#DC241E" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#009643" />
          <stop offset="100%" stopColor="#09C15B" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FCDF4A" />
          <stop offset="100%" stopColor="#FCE154" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__b)"
          d="M6.062 19.017l15-14h1v15h-16z"
          transform="translate(-1.06 -5.02)"
        />
        <path
          fill="url(#prefix__c)"
          d="M1.062 19.017l15-14h1v15h-16z"
          transform="rotate(180 8.532 10.007)"
        />
        <path
          fill="url(#prefix__d)"
          d="M-2.63 9.667h29v5h-29z"
          transform="rotate(134 12.406 9.432)"
        />
      </g>
    </svg>
  );
};

export default FlagIconCG;
