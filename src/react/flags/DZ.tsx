import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const DZ = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#048345" />
          <stop offset="100%" stopColor="#04753E" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E81B42" />
          <stop offset="100%" stopColor="#D20F34" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h11v15H0z" />
        <path fill="url(#prefix__a)" d="M11 0h10v15H11z" />
        <path
          fill="url(#prefix__c)"
          d="M13 8.28l-1.176.838.434-1.377-1.16-.859 1.444-.013L13 5.5l.458 1.369 1.444.013-1.16.859.434 1.377z"
        />
        <path
          fill="url(#prefix__c)"
          d="M13.26 4.214A4.204 4.204 0 0010.313 3C7.931 3 6 5.015 6 7.5S7.931 12 10.313 12c1.14 0 2.176-.461 2.947-1.214a4.112 4.112 0 01-1.77.396c-2.166 0-3.922-1.649-3.922-3.682s1.756-3.682 3.921-3.682c.638 0 1.24.143 1.771.396z"
        />
      </g>
    </svg>
  );
};

export default DZ;
