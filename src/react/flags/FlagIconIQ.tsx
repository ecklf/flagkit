import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconIQ = ({
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
          <stop offset="0%" stopColor="#DF1E35" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v5H0z" />
        <path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <path
          fill="#0F7A40"
          d="M14 6.256c0-.141.092-.21.232-.14l.536.268a.444.444 0 01.232.365V8.75a.247.247 0 01-.252.249h-.496A.254.254 0 0114 8.744V6.256zM8 6.256c0-.141.092-.21.232-.14l.536.268A.444.444 0 019 6.749V8.75A.247.247 0 018.748 9h-.496A.254.254 0 018 8.744V6.256zM12 6.749c0-.138.092-.295.232-.365l.536-.268c.128-.064.232-.002.232.14v2.488a.25.25 0 01-.252.256h-.496A.248.248 0 0112 8.751V6.75z"
        />
        <path
          fill="#0F7A40"
          d="M10 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9h-2.248A.255.255 0 0110 8.752V7.748zM6 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9H6.252A.255.255 0 016 8.752V7.748z"
        />
      </g>
    </svg>
  );
};

export default FlagIconIQ;
