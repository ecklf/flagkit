import * as React from "react";

const AW = ({
  width = 21,
  height = 15,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 15" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#5098EA" />
          <stop offset="100%" stopColor="#458BDB" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E82045" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M1.803 4.96a.5.5 0 010-.92l1.566-.67.671-1.567a.5.5 0 01.92 0l.67 1.566 1.567.671a.5.5 0 010 .92l-1.566.67-.671 1.567a.5.5 0 01-.92 0l-.67-1.566-1.567-.671z"
        />
        <path
          fill="url(#prefix__c)"
          d="M3.75 5.25L2 4.5l1.75-.75L4.5 2l.75 1.75L7 4.5l-1.75.75L4.5 7z"
        />
        <path fill="#F9D536" d="M0 11h21v1H0zM0 9h21v1H0z" />
      </g>
    </svg>
  );
};

export default AW;
