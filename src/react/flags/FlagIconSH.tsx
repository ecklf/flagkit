import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconSH = ({
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
          <stop offset="0%" stopColor="#07319C" />
          <stop offset="100%" stopColor="#00247E" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#A7D2FF" />
          <stop offset="100%" stopColor="#91C6FD" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EE7B2D" />
          <stop offset="100%" stopColor="#CC621A" />
        </linearGradient>
        <linearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFC4B" />
          <stop offset="100%" stopColor="#FFFC38" />
        </linearGradient>
        <linearGradient id="prefix__h" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DB1E36" />
          <stop offset="100%" stopColor="#D51931" />
        </linearGradient>
        <path
          id="prefix__c"
          d="M0 3.5V.51C0 .228.215 0 .498 0h4.004C4.777 0 5 .227 5 .51V3.5C5 5.5 2.5 6 2.5 6S0 5.5 0 3.5z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <g transform="translate(13 6)">
          <mask id="prefix__f" fill="#fff">
            <use xlinkHref="#prefix__c" />
          </mask>
          <use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
          <path
            fill="url(#prefix__e)"
            d="M.5 6.5c.828 0 1-1.395 1-2.5s-.172-1.5-1-1.5C-.328 2.5-1 2.895-1 4S-.328 6.5.5 6.5z"
            mask="url(#prefix__f)"
          />
          <ellipse
            cx={2.5}
            cy={4.5}
            fill="#A75113"
            mask="url(#prefix__f)"
            rx={1.5}
            ry={1}
          />
          <circle cx={2.5} cy={3.5} r={1} fill="#FFF" mask="url(#prefix__f)" />
          <path fill="url(#prefix__g)" d="M0 0h5v2H0z" mask="url(#prefix__f)" />
        </g>
        <path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
        />
        <path
          fill="url(#prefix__h)"
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        />
        <path
          fill="url(#prefix__a)"
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
        />
        <path fill="url(#prefix__h)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
      </g>
    </svg>
  );
};

export default FlagIconSH;
