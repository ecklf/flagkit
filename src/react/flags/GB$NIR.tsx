import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const GB$NIR = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#E82739" />
          <stop offset="100%" stopColor="#CA1A2B" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E6101E" />
          <stop offset="100%" stopColor="#CA0814" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD148" />
          <stop offset="100%" stopColor="#FFCB2F" />
        </linearGradient>
        <path
          id="prefix__d"
          d="M9 3.75L10 4l.5-.5.5.5 1-.25-.404 1.009a.4.4 0 01-.341.241h-1.51a.39.39 0 01-.341-.241L9 3.75zM10.5 3a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" />
        <path
          fill="url(#prefix__a)"
          d="M11.516 9.26L10.5 11 9.484 9.26l-2.015-.01.998-1.75-.998-1.75 2.015-.01L10.5 4l1.016 1.74 2.015.01-.998 1.75.998 1.75z"
        />
        <path
          fill="url(#prefix__c)"
          d="M9.55 7.006a.656.656 0 01.425-.664l.55-.184c.263-.087.475.063.475.35V7.5s.321-1.037.5-.5c.179.537-.128 1.526-.128 1.526a.671.671 0 01-.63.474h-.484c-.28 0-.531-.23-.559-.506l-.148-1.488z"
        />
        <path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M10.5 2.908c-.511 0-.967.304-1.168.763l-.1.229.457.201.1-.229a.775.775 0 011.418-.005l.102.228.456-.205-.102-.228a1.275 1.275 0 00-1.164-.754z"
        />
        <mask id="prefix__f" fill="#fff">
          <use xlinkHref="#prefix__d" />
        </mask>
        <use fill="url(#prefix__e)" xlinkHref="#prefix__d" />
        <circle
          cx={10.5}
          cy={4.5}
          r={1}
          fill="#5169E2"
          mask="url(#prefix__f)"
        />
        <circle
          cx={11.5}
          cy={4.5}
          r={1}
          fill="#D34D43"
          mask="url(#prefix__f)"
        />
        <circle cx={9.5} cy={4.5} r={1} fill="#D34D43" mask="url(#prefix__f)" />
      </g>
    </svg>
  );
};

export default GB$NIR;
