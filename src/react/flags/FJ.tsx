import * as React from "react";

const FJ = ({
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
          <stop offset="0%" stopColor="#79CFF6" />
          <stop offset="100%" stopColor="#68BFE6" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#042C90" />
          <stop offset="100%" stopColor="#00247E" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EB1D43" />
          <stop offset="100%" stopColor="#D21034" />
        </linearGradient>
        <linearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DB1E36" />
          <stop offset="100%" stopColor="#D51931" />
        </linearGradient>
        <path id="prefix__d" d="M0 3.5V0h5v3.5C5 6 2.5 7 2.5 7S0 6 0 3.5z" />
        <path
          id="prefix__h"
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__c)" d="M0 0h9v7H0z" />
        <g transform="translate(13 4)">
          <mask id="prefix__e" fill="#fff">
            <use xlinkHref="#prefix__d" />
          </mask>
          <use fill="url(#prefix__a)" xlinkHref="#prefix__d" />
          <path
            fill="#2A915C"
            d="M1 2.5a.5.5 0 110-1 .5.5 0 010 1zm3 0a.5.5 0 110-1 .5.5 0 010 1z"
            mask="url(#prefix__e)"
          />
          <path
            fill="url(#prefix__f)"
            d="M0 0h5v1H3v2h2v1H3v3H2V4H0V3h2V1H0z"
            mask="url(#prefix__e)"
          />
        </g>
        <use fill="url(#prefix__g)" xlinkHref="#prefix__h" />
        <path
          stroke="#FFF"
          strokeWidth={0.5}
          d="M3.25 3.115L-.676-.25H.5l.145.047L4.08 2.25h.848L9.25-.451V.25c0 .222-.128.47-.313.602L5.75 3.13v.756l3.225 2.764c.282.242.138.601-.225.601-.193 0-.442-.08-.604-.195L4.92 4.75h-.848L-.25 7.451v-1.08l3.5-2.5v-.756z"
        />
        <path
          fill="url(#prefix__a)"
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
        />
        <path fill="url(#prefix__g)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
      </g>
    </svg>
  );
};

export default FJ;
