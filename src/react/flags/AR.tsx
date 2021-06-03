import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const AR = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#88BBE8" />
          <stop offset="100%" stopColor="#76ADDD" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
        <path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <path
          fill="#DB7A2C"
          fillRule="nonzero"
          d="M10.5 9.5a2 2 0 110-4 2 2 0 010 4z"
        />
        <circle cx={10.5} cy={7.5} r={1.5} fill="#F4B32E" />
      </g>
    </svg>
  );
};

export default AR;
