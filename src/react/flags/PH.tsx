import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const PH = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#DD1C34" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0D4BC3" />
          <stop offset="100%" stopColor="#073DA6" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FDD64D" />
          <stop offset="100%" stopColor="#FCD036" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 7h21v8H0z" />
        <path fill="url(#prefix__c)" d="M0 0h21v7H0z" />
        <path fill="url(#prefix__a)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#prefix__d)"
          d="M3.4 8.495L2.542 9.81l.325-1.535c-.052-.043-.1-.09-.143-.143l-1.535.325L2.505 7.6a1.012 1.012 0 010-.202L1.19 6.543l1.535.325c.043-.052.09-.1.143-.143L2.543 5.19 3.4 6.505a1.012 1.012 0 01.202 0l.856-1.315-.325 1.535c.052.043.1.09.143.143l1.535-.325-1.315.856a1.012 1.012 0 010 .202l1.315.856-1.535-.325c-.043.052-.09.1-.143.143l.325 1.535L3.6 8.495a1.012 1.012 0 01-.202 0zM7.5 8a.5.5 0 110-1 .5.5 0 010 1zm-6-5a.5.5 0 110-1 .5.5 0 010 1zm0 10a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </g>
    </svg>
  );
};

export default PH;
