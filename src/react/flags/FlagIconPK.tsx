import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconPK = ({
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
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 21 15"
      {...props}
    >
      <defs>
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0A632F" />
          <stop offset="100%" stopColor="#05411E" />
        </linearGradient>
        <filter
          id="prefix__c"
          width="105.6%"
          height="111.1%"
          x="-2.8%"
          y="-2.8%"
          filterUnits="objectBoundingBox"
        >
          <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feColorMatrix
            in="shadowOffsetOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
        </filter>
        <path
          id="prefix__d"
          d="M15.978 10.878a4.182 4.182 0 01-2.65.95c-2.383 0-4.314-2.015-4.314-4.5 0-2.486 1.931-4.5 4.314-4.5.999 0 1.919.354 2.65.95a4.165 4.165 0 00-1.043-.132c-2.165 0-3.92 1.648-3.92 3.682 0 2.033 1.755 3.681 3.92 3.681.361 0 .711-.045 1.043-.131zm.036-2.77l-1.175.838.434-1.377-1.16-.86 1.443-.013.458-1.368.459 1.368 1.443.013-1.16.86.434 1.377-1.176-.838z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0-.002h21v15H0z" />
        <path fill="url(#prefix__a)" d="M0-.002h6v15H0z" />
        <g transform="rotate(-45 13.465 7.328)">
          <use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__d" />
          <use fill="url(#prefix__a)" xlinkHref="#prefix__d" />
        </g>
      </g>
    </svg>
  );
};

export default FlagIconPK;
