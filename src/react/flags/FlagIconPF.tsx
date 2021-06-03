import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconPF = ({
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
          <stop offset="0%" stopColor="#E02639" />
          <stop offset="100%" stopColor="#CA1A2C" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DC2235" />
          <stop offset="100%" stopColor="#CA1A2C" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA135" />
          <stop offset="100%" stopColor="#FD9C2D" />
        </linearGradient>
        <linearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DF2034" />
          <stop offset="100%" stopColor="#CA1A2C" />
        </linearGradient>
        <linearGradient id="prefix__h" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0B4BAD" />
          <stop offset="100%" stopColor="#08429A" />
        </linearGradient>
        <circle id="prefix__d" cx={2.5} cy={2.5} r={2.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 11h21v4H0z" />
        <path fill="url(#prefix__a)" d="M0 4h21v7H0z" />
        <g transform="translate(8 5)">
          <mask id="prefix__f" fill="#fff">
            <use xlinkHref="#prefix__d" />
          </mask>
          <path
            fill="url(#prefix__e)"
            d="M0 0h5v2.5H0z"
            mask="url(#prefix__f)"
          />
          <path fill="#FFF" d="M1 1.5h3l-.5 1h-2z" mask="url(#prefix__f)" />
          <path
            fill="url(#prefix__g)"
            d="M2 0h1v1.495A.508.508 0 012.5 2a.495.495 0 01-.5-.505V0zM1 1s.75 1.5 1.5 1.5S4 1 4 1v1c0 .552-.443 1-.999 1H1.999A.997.997 0 011 2V1z"
            mask="url(#prefix__f)"
          />
          <path fill="url(#prefix__h)" d="M0 3h5v2H0z" mask="url(#prefix__f)" />
          <path fill="#FFF" d="M0 3.5h5V4H0z" mask="url(#prefix__f)" />
        </g>
      </g>
    </svg>
  );
};

export default FlagIconPF;
