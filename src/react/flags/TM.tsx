import * as React from "react";

const TM = ({
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
        <ellipse id="prefix__d" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="prefix__f" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="prefix__h" cx={1.5} cy={1} rx={1.5} ry={1} />
        <ellipse id="prefix__j" cx={1.5} cy={0.5} rx={1.5} ry={1} />
        <ellipse id="prefix__k" cx={1.5} cy={1} rx={1.5} ry={1} />
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#30C375" />
          <stop offset="100%" stopColor="#28AE67" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DE414F" />
          <stop offset="100%" stopColor="#CA3745" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__c)" d="M3 0h3v15H3z" />
        <g transform="translate(3 1)">
          <mask id="prefix__e" fill="#fff">
            <use xlinkHref="#prefix__d" />
          </mask>
          <use fill="#FFF" xlinkHref="#prefix__d" />
          <circle cx={1.5} cy={1} r={1} fill="#DD404F" mask="url(#prefix__e)" />
          <path
            fill="#FBAF29"
            d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
            mask="url(#prefix__e)"
          />
        </g>
        <g transform="translate(3 12)">
          <mask id="prefix__g" fill="#fff">
            <use xlinkHref="#prefix__f" />
          </mask>
          <use fill="#FFF" xlinkHref="#prefix__f" />
          <circle cx={1.5} cy={1} r={1} fill="#DD404F" mask="url(#prefix__g)" />
          <path
            fill="#FBAF29"
            d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
            mask="url(#prefix__g)"
          />
        </g>
        <g transform="translate(3 7)">
          <mask id="prefix__i" fill="#fff">
            <use xlinkHref="#prefix__h" />
          </mask>
          <use fill="#28AE67" xlinkHref="#prefix__h" />
          <circle cx={1.5} cy={1} r={1} fill="#DD404F" mask="url(#prefix__i)" />
        </g>
        <use
          fill="#28AE67"
          transform="translate(3 10)"
          xlinkHref="#prefix__j"
        />
        <g transform="translate(3 4)">
          <mask id="prefix__l" fill="#fff">
            <use xlinkHref="#prefix__k" />
          </mask>
          <use fill="#FBAF29" xlinkHref="#prefix__k" />
          <circle cx={1.5} cy={1} r={1} fill="#DD404F" mask="url(#prefix__l)" />
          <path
            fill="#28AE67"
            d="M0 0h1v2H0zM2 0h1v2H2z"
            mask="url(#prefix__l)"
          />
        </g>
        <path
          fill="url(#prefix__a)"
          d="M11.117 3.179a.5.5 0 10.766.642.5.5 0 00-.766-.642zM9.821 5.117a.5.5 0 10-.642.766.5.5 0 00.642-.766zm-1-1a.5.5 0 10-.642.766.5.5 0 00.642-.766zm2-2a.5.5 0 10-.642.766.5.5 0 00.642-.766zm-.5 1.5a.5.5 0 10-.642.766.5.5 0 00.642-.766z"
        />
        <path
          fill="url(#prefix__a)"
          d="M13.107 7.088a3.05 3.05 0 01-4.626-.366 3.05 3.05 0 004.26-4.26 3.05 3.05 0 01.366 4.626z"
        />
      </g>
    </svg>
  );
};

export default TM;
