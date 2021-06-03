import * as React from "react";

const KE = ({
  width = 21,
  height = 15,
  ...props
}: React.ComponentProps<"svg">) => {
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
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#018301" />
          <stop offset="100%" stopColor="#006700" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DC0808" />
          <stop offset="100%" stopColor="#BC0000" />
        </linearGradient>
        <path
          id="prefix__e"
          d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 11h21v4H0z" />
        <path fill="url(#prefix__a)" d="M0 4h21v7H0z" />
        <path fill="url(#prefix__d)" d="M0 5h21v5H0z" />
        <g transform="translate(8 2)">
          <mask id="prefix__f" fill="#fff">
            <use xlinkHref="#prefix__e" />
          </mask>
          <use fill="#BC0000" xlinkHref="#prefix__e" />
          <ellipse
            cx={-1.5}
            cy={5.5}
            fill="url(#prefix__b)"
            mask="url(#prefix__f)"
            rx={2.5}
            ry={5.5}
          />
          <ellipse
            cx={6.5}
            cy={5.5}
            fill="url(#prefix__b)"
            mask="url(#prefix__f)"
            rx={2.5}
            ry={5.5}
          />
          <path
            fill="url(#prefix__a)"
            d="M2.5 7C2.224 7 2 6.328 2 5.5S2.224 4 2.5 4s.5.672.5 1.5S2.776 7 2.5 7zm0-3C2.224 4 2 3.105 2 2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2zm0 7c-.276 0-.5-.895-.5-2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2z"
            mask="url(#prefix__f)"
          />
        </g>
      </g>
    </svg>
  );
};

export default KE;
