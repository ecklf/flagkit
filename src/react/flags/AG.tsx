import * as React from "react";

const AG = ({
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
          <stop offset="0%" stopColor="#E2243B" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCF3C" />
          <stop offset="100%" stopColor="#FECB2F" />
        </linearGradient>
        <linearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1984D8" />
          <stop offset="100%" stopColor="#1175C4" />
        </linearGradient>
        <path id="prefix__c" d="M0 0h21L10.5 15z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path
          d="M8.5 7a2 2 0 00.998 1.731m2.078-.045c.556-.355.924-.978.924-1.686"
          opacity={0.75}
        />
        <ellipse
          cx={10.5}
          cy={6.5}
          fill="#FFF"
          fillOpacity={0.5}
          rx={1}
          ry={1.5}
        />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <mask id="prefix__f" fill="#fff">
          <use xlinkHref="#prefix__c" />
        </mask>
        <use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
        <path
          fill="url(#prefix__e)"
          d="M10.5 8.25l-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z"
          mask="url(#prefix__f)"
        />
        <path fill="url(#prefix__g)" d="M0 6h21v4H0z" mask="url(#prefix__f)" />
        <path fill="url(#prefix__a)" d="M0 10h21v5H0z" mask="url(#prefix__f)" />
      </g>
    </svg>
  );
};

export default AG;
