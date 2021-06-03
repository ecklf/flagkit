import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconCA = ({
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
          <stop offset="0%" stopColor="#FF3131" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M10 0h11v15H10zM0 0h7v15H0z" />
        <path fill="url(#prefix__a)" d="M6 0h9v15H6z" />
        <path
          fill="url(#prefix__b)"
          d="M11.674 7.326l.652-.652a.251.251 0 01.355.007L13 7l1-.5-.5 1 .32.32a.247.247 0 01.008.352L12.5 9.5H11l-.25 1.5h-.5L10 9.5H8.5L7.172 8.172a.253.253 0 01.009-.353L7.5 7.5l-.5-1L8 7l.32-.32a.249.249 0 01.354-.006l.652.652c.096.096.152.063.124-.075L9 5l1 .5.5-1.5.5 1.5 1-.5-.45 2.251c-.029.142.028.171.124.075z"
        />
      </g>
    </svg>
  );
};

export default FlagIconCA;
