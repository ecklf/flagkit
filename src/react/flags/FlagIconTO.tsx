import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconTO = ({
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
          <stop offset="0%" stopColor="#E20F1B" />
          <stop offset="100%" stopColor="#C00711" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DF101B" />
          <stop offset="100%" stopColor="#C00711" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__a)" d="M0 0h12v8H0z" />
        <path
          fill="url(#prefix__c)"
          d="M7 3V1.258C7 1.104 6.89 1 6.755 1h-1.51A.25.25 0 005 1.258V3H3.258C3.104 3 3 3.11 3 3.245v1.51A.25.25 0 003.258 5H5v1.742c0 .154.11.258.245.258h1.51A.25.25 0 007 6.742V5h1.742C8.896 5 9 4.89 9 4.755v-1.51A.25.25 0 008.742 3H7z"
        />
      </g>
    </svg>
  );
};

export default FlagIconTO;
