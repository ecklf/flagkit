import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const NI = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#1A78D6" />
          <stop offset="100%" stopColor="#106AC4" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
        <path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <path
          fill="#DBCD92"
          fillRule="nonzero"
          d="M10.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 .5a2 2 0 110-4 2 2 0 010 4z"
        />
        <path fill="#9CDDEE" d="M10.5 6.5l1 2h-2z" />
      </g>
    </svg>
  );
};

export default NI;
