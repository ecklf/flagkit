import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const TR = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#E92434" />
          <stop offset="100%" stopColor="#E11324" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__a)"
          d="M13.052 4.737A3.907 3.907 0 0010.75 4C8.679 4 7 5.567 7 7.5S8.679 11 10.75 11c.868 0 1.667-.275 2.302-.737a4.5 4.5 0 110-5.526zm1.214 3.34l-.919 1.113.063-1.442-1.343-.53 1.39-.386.09-1.441.796 1.204 1.398-.361-.898 1.13.775 1.217-1.352-.505z"
        />
      </g>
    </svg>
  );
};

export default TR;
