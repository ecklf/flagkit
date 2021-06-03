import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const GI = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#E71924" />
          <stop offset="100%" stopColor="#D6101B" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EA1824" />
          <stop offset="100%" stopColor="#D6101B" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ECCE3E" />
          <stop offset="100%" stopColor="#D9BC2D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__a)" d="M0 0h21v10H0z" />
        <path fill="url(#prefix__b)" d="M0 10h21v5H0z" />
        <path
          fill="url(#prefix__c)"
          d="M9 6H8V4.49A.495.495 0 007.495 4h-.99A.49.49 0 006 4.49V8L5 9h11l-1-1V4.49a.495.495 0 00-.505-.49h-.99a.49.49 0 00-.505.49V6h-1V3.49a.49.49 0 00-.495-.49h-2.01A.49.49 0 009 3.49V6z"
        />
        <path
          fill="url(#prefix__d)"
          d="M7 8a.5.5 0 110-1 .5.5 0 010 1zm0-2a.5.5 0 110-1 .5.5 0 010 1zm3.5 2a.5.5 0 110-1 .5.5 0 010 1zm0-3a.5.5 0 110-1 .5.5 0 010 1zM14 8a.5.5 0 110-1 .5.5 0 010 1zm0-2a.5.5 0 110-1 .5.5 0 010 1z"
        />
        <path
          fill="url(#prefix__e)"
          d="M10 9.943V12H9v1h2V9.943c.583-.137 1-.508 1-.943 0-.552-.672-1-1.5-1S9 8.448 9 9c0 .435.417.806 1 .943z"
        />
      </g>
    </svg>
  );
};

export default GI;
