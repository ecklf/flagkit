import * as React from "react";

const BI = ({
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
          <stop offset="0%" stopColor="#E4233B" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#34CD4E" />
          <stop offset="100%" stopColor="#2AB441" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DF2239" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__b)"
          d="M2.08 1.437h21v15h-21z"
          transform="translate(-2.08 -1.44)"
        />
        <path
          fill="url(#prefix__c)"
          d="M2 1.437l9 7.5-9 7.5z"
          transform="translate(-2.08 -1.44)"
        />
        <path
          fill="url(#prefix__c)"
          d="M14.08 1.437l9 7.5-9 7.5z"
          transform="matrix(-1 0 0 1 35.08 -1.44)"
        />
        <path
          fill="url(#prefix__a)"
          d="M10.359 6.233L1.119 0 0 1.658 9.24 7.89a3.499 3.499 0 000 2.094L0 16.217l1.118 1.658 9.24-6.233a3.486 3.486 0 002.222.795c.844 0 1.617-.298 2.222-.795l9.24 6.233 1.118-1.658-9.24-6.233a3.499 3.499 0 000-2.094l9.24-6.232L24.042 0l-9.24 6.233a3.486 3.486 0 00-2.222-.796c-.843 0-1.617.299-2.221.796z"
          transform="translate(-2.08 -1.44)"
        />
        <path
          fill="url(#prefix__d)"
          d="M12.58 7.937l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm-1.5 2.5l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm3 0l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207z"
          transform="translate(-2.08 -1.44)"
        />
      </g>
    </svg>
  );
};

export default BI;
