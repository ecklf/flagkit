import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconCD = ({
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
          <stop offset="0%" stopColor="#158AFF" />
          <stop offset="100%" stopColor="#007FFF" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#CE1120" />
          <stop offset="100%" stopColor="#E11B2B" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__b)"
          d="M4.294 1.443h21v15h-21z"
          transform="translate(-4.29 -1.44)"
        />
        <path
          fill="#FDD216"
          d="M24.273 3.906l-25.84 13.166-2.723-5.346L21.55-1.44z"
        />
        <path
          fill="url(#prefix__c)"
          d="M.057 7.074h29v4h-29z"
          transform="rotate(153 12.585 7.839)"
        />
        <path
          fill="#FDD216"
          d="M3.504 4.478l-1.47 1.047.542-1.721-1.45-1.074 1.805-.016.573-1.711.573 1.71 1.804.017-1.45 1.074.542 1.721z"
        />
      </g>
    </svg>
  );
};

export default FlagIconCD;
