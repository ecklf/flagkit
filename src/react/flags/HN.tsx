import * as React from "react";

const HN = ({
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
          <stop offset="0%" stopColor="#0884E6" />
          <stop offset="100%" stopColor="#0074D0" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0E88E9" />
          <stop offset="100%" stopColor="#0074D0" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
        <path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <path
          fill="url(#prefix__c)"
          d="M10.5 8l-.707.207L10 7.5l-.207-.707L10.5 7l.707-.207L11 7.5l.207.707zM14.5 7l-.707.207L14 6.5l-.207-.707L14.5 6l.707-.207L15 6.5l.207.707zM14.5 9l-.707.207L14 8.5l-.207-.707L14.5 8l.707-.207L15 8.5l.207.707zM6.5 9l-.707.207L6 8.5l-.207-.707L6.5 8l.707-.207L7 8.5l.207.707zM6.5 7l-.707.207L6 6.5l-.207-.707L6.5 6l.707-.207L7 6.5l.207.707z"
        />
      </g>
    </svg>
  );
};

export default HN;
