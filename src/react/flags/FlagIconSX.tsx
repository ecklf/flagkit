import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconSX = ({
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
          <stop offset="0%" stopColor="#0740AA" />
          <stop offset="100%" stopColor="#012F85" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F02C33" />
          <stop offset="100%" stopColor="#D82027" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E72C33" />
          <stop offset="100%" stopColor="#D82027" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#78C1F0" />
          <stop offset="100%" stopColor="#67B1E0" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F7E14B" />
          <stop offset="100%" stopColor="#F7DF3E" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 7h21v8H0z" />
        <path fill="url(#prefix__c)" d="M0 0h21v7H0z" />
        <path fill="url(#prefix__a)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#prefix__d)"
          fillRule="nonzero"
          d="M1.5 7V5.506A.997.997 0 012.495 4.5h2.01c.55 0 .995.457.995 1.006V7c0 .845-.384 1.447-1.003 1.798a2.304 2.304 0 01-1.03.3 2.312 2.312 0 01-.964-.3C1.884 8.447 1.5 7.845 1.5 7z"
        />
        <path
          fill="url(#prefix__e)"
          d="M2 7V5.506c0-.28.216-.506.495-.506h2.01c.273 0 .495.232.495.506V7c0 1.5-1.5 1.6-1.5 1.6S2 8.5 2 7z"
        />
        <path fill="#FFF" d="M3 6.5l.5-.5.5.5v1H3z" />
        <path
          fill="#F9D835"
          fillRule="nonzero"
          d="M1.001 9.368A3.389 3.389 0 003.5 10.5c.948 0 1.915-.448 2.521-1.162a.5.5 0 00-.762-.647A2.395 2.395 0 013.5 9.5a2.39 2.39 0 01-1.743-.787.5.5 0 10-.756.655z"
        />
        <circle cx={3.5} cy={4.5} r={1} fill="url(#prefix__f)" />
      </g>
    </svg>
  );
};

export default FlagIconSX;
