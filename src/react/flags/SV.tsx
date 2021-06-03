import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const SV = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#1B57C4" />
          <stop offset="100%" stopColor="#154BAD" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#3C7839" />
          <stop offset="100%" stopColor="#31642E" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
        <path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <path
          fill="url(#prefix__c)"
          d="M9.3 5.9a2 2 0 102.4 0L11 8h-1l-.7-2.1z"
        />
        <path fill="#F9C92E" d="M10.5 5.5L11 8h-1z" />
      </g>
    </svg>
  );
};

export default SV;
