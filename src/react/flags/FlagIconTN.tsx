import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconTN = ({
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
          <stop offset="0%" stopColor="#E92434" />
          <stop offset="100%" stopColor="#E11324" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__a)"
          d="M11.858 4.273a3.5 3.5 0 100 6.453 3.25 3.25 0 010-6.453zM10.5 12a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.766-3.622l1.352.505-.775-1.218.898-1.13-1.398.361-.797-1.204-.088 1.441-1.391.386 1.343.53-.063 1.442.919-1.113z"
        />
      </g>
    </svg>
  );
};

export default FlagIconTN;
