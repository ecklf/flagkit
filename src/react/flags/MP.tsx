import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const MP = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#1E8BD6" />
          <stop offset="100%" stopColor="#1074BA" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#A9A7A9" />
          <stop offset="100%" stopColor="#8C8A8C" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M10.5 12.5a5 5 0 100-10 5 5 0 000 10zm0-1a4 4 0 110-8 4 4 0 010 8z"
        />
        <path
          fill="url(#prefix__c)"
          d="M8.938 5.997C8.972 5.447 9.443 5 9.999 5h1.002c.552 0 1.027.453 1.061.997l.376 6.006a.927.927 0 01-.947.997H9.509a.935.935 0 01-.947-.997l.376-6.006z"
        />
        <path
          fill="url(#prefix__a)"
          d="M10.5 9.515l-2.057 1.467.759-2.41-2.03-1.504 2.526-.022.802-2.396.802 2.396 2.527.022-2.03 1.504.758 2.41z"
        />
      </g>
    </svg>
  );
};

export default MP;
