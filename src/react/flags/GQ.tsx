import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const GQ = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#EC3938" />
          <stop offset="100%" stopColor="#E12524" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#51B422" />
          <stop offset="100%" stopColor="#429919" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#258DE7" />
          <stop offset="100%" stopColor="#1276CC" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 10h21v5H0z" />
        <path fill="url(#prefix__c)" d="M0 0h21v5H0z" />
        <path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <path
          fill="#159940"
          d="M10.066 8.932a.73.73 0 00.175-.425l.008-1.264A.25.25 0 009.996 7h-.242c-.14 0-.176-.078-.08-.174l.652-.652a.247.247 0 01.348 0l.652.652c.096.096.057.174-.08.174h-.242a.253.253 0 00-.254.243v1.264c0 .134.08.322.17.414l-.09-.092c.093.094.063.171-.082.171h-.496c-.139 0-.176-.08-.078-.182l-.108.114z"
        />
        <path fill="url(#prefix__d)" d="M0 0l7 7.5L0 15z" />
      </g>
    </svg>
  );
};

export default GQ;
