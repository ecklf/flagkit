import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const KH = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#0F3EB6" />
          <stop offset="100%" stopColor="#09339F" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#ED1A3C" />
          <stop offset="100%" stopColor="#DE0B2D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v4H0zM0 11h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 4h21v7H0z" />
        <path
          fill="url(#prefix__a)"
          d="M7.5 8h1v2h-2l1-2zM9 8h3v2H9V8zm3.5 0h1l1 2h-2V8zm0-1.492A.51.51 0 0113 6a.5.5 0 01.5.508V7.5h-1v-.992zM9 6.545h1v-.547c0-.275.232-.498.5-.498.276 0 .5.222.5.498v.547h1V7.5H9v-.955zm-1.5-.037A.51.51 0 018 6a.5.5 0 01.5.508V7.5h-1v-.992z"
        />
      </g>
    </svg>
  );
};

export default KH;
