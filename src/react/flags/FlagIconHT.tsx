import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconHT = ({
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
          <stop offset="0%" stopColor="#112EBC" />
          <stop offset="100%" stopColor="#0620A0" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E3264A" />
          <stop offset="100%" stopColor="#D20F34" />
        </linearGradient>
        <path
          id="prefix__f"
          d="M0 5l1.105-.553C1.6 4.2 2.443 4 3 4h1.002c.552 0 1.404.202 1.894.447L7 5v1H0V5z"
        />
        <path
          id="prefix__g"
          d="M1 3.006c0-.28.18-.362.39-.193l1.72 1.374a.66.66 0 00.78 0l1.72-1.375c.215-.172.39-.081.39.194v1.488c0 .28-.215.506-.498.506H1.498A.505.505 0 011 4.494V3.006z"
        />
        <rect id="prefix__d" width={7} height={6} x={0} y={0} rx={0.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v7H0z" />
        <path fill="url(#prefix__c)" d="M0 7h21v8H0z" />
        <g transform="translate(7 5)">
          <mask id="prefix__e" fill="#fff">
            <use xlinkHref="#prefix__d" />
          </mask>
          <use fill="url(#prefix__a)" xlinkHref="#prefix__d" />
          <g mask="url(#prefix__e)">
            <use fill="#AABCAE" xlinkHref="#prefix__f" />
            <path
              stroke="#366C14"
              strokeWidth={0.5}
              d="M.25 5.155v.595h6.5v-.595l-.967-.484C5.326 4.443 4.513 4.25 4 4.25H2.999c-.516 0-1.321.19-1.782.421l-.967.484z"
            />
          </g>
          <circle
            cx={3.5}
            cy={2.5}
            r={1.5}
            fill="#D4B872"
            mask="url(#prefix__e)"
          />
          <g mask="url(#prefix__e)">
            <use fill="#C28321" xlinkHref="#prefix__g" />
            <path
              stroke="#0D3488"
              strokeWidth={0.5}
              d="M1.25 3.02v1.474c0 .14.114.256.248.256h4.004c.14 0 .248-.11.248-.256V3.02L4.047 4.383a.91.91 0 01-1.094 0L1.25 3.02z"
            />
          </g>
          <path
            fill="#216C30"
            d="M2.172 1.172C2.077 1.077 2.114 1 2.256 1h2.488c.141 0 .175.08.084.172L3.672 2.328a.247.247 0 01-.344 0L2.172 1.172z"
            mask="url(#prefix__e)"
          />
        </g>
      </g>
    </svg>
  );
};

export default FlagIconHT;
