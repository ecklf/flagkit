import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconLK = ({
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
          <stop offset="0%" stopColor="#FFBF19" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#A52531" />
          <stop offset="100%" stopColor="#8E1F29" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#03664F" />
          <stop offset="100%" stopColor="#005642" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6816" />
          <stop offset="100%" stopColor="#FF5B01" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFBF18" />
          <stop offset="100%" stopColor="#FFB800" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__c)"
          d="M8 1h11.25a.75.75 0 01.75.755v11.49a.751.751 0 01-.75.755H8V1z"
        />
        <path
          fill="url(#prefix__d)"
          d="M1 1.755A.76.76 0 011.757 1H4v13H1.757A.754.754 0 011 13.245V1.755z"
        />
        <rect
          width={3}
          height={13}
          x={4}
          y={1}
          fill="url(#prefix__e)"
          rx={0.5}
        />
        <path
          fill="url(#prefix__f)"
          d="M9.5 3a.5.5 0 01-.5-.5V2h.5a.5.5 0 010 1zm9 0a.5.5 0 110-1h.5v.5a.5.5 0 01-.5.5zm0 9a.5.5 0 01.5.5v.5h-.5a.5.5 0 110-1zm-9 0a.5.5 0 110 1H9v-.5a.5.5 0 01.5-.5zM12 9.5c0-.276-.227-.5-.5-.5h.5a3.04 3.04 0 01-.975-.185S10 8.5 10 8c0-.5.203-.614.203-.614.164-.213.215-.588.112-.86 0 0-.415-.926-.315-1.526.1-.6.57-.749.57-.749.238-.139.43-.035.43.244v2.01c0 .273.193.591.453.722l.094.046c.25.126.611.069.806-.126l-.206.206c.195-.195.16-.45-.1-.58L11.5 6.5V6h.5c.276 0 .307-.096.047-.227L11.5 5.5V5h.5c.276 0 .658-.158.853-.353l-.206.206c.195-.195.585-.353.853-.353.276 0 .596.193.727.453l.046.094c.126.25.157.662.069.928l-.184.55c-.087.263.073.475.348.475h1.488c.28 0 .664-.158.859-.353l-.206.206c.195-.195.16-.45-.1-.58l-.094-.046A2.566 2.566 0 0015.5 6a.505.505 0 01-.5-.5c0-.276.158-.658.353-.853L15.5 4.5V5c0 .276.227.5.5.5h-.5 1c.276 0 .596.193.727.453l.046.094c.126.25.247.673.264.947 0 0 .069.476-.037 1.006-.106.53-.226.589-.226.589a1.898 1.898 0 00-.274.916v.99a.508.508 0 01-.5.505c-.276 0-.404-.193-.273-.453l.046-.094a1.12 1.12 0 000-.906l-.046-.094C16.1 9.203 16 9.232 16 9.5c0 .276-.096.693-.227.953l-.046.094c-.126.25-.459.453-.727.453-.276 0-.404-.193-.273-.453l.046-.094c.126-.25.227-.685.227-.953 0-.276-.214-.5-.505-.5h-.99a.508.508 0 00-.505.5c0 .276-.096.693-.227.953l-.046.094c-.126.25-.459.453-.727.453-.276 0-.404-.193-.273-.453l.046-.094c.126-.25.227-.685.227-.953z"
        />
      </g>
    </svg>
  );
};

export default FlagIconLK;
