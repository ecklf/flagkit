import * as React from "react";

const SK = ({
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
          <stop offset="0%" stopColor="#0C47B7" />
          <stop offset="100%" stopColor="#073DA4" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E53B35" />
          <stop offset="100%" stopColor="#D32E28" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F73744" />
          <stop offset="100%" stopColor="#EC212F" />
        </linearGradient>
        <path
          id="prefix__e"
          d="M1.711 2.001A1.048 1.048 0 012.751 1H7.25c.553 0 1.018.447 1.04 1.001L8.46 6.5c.022.553-.297 1.289-.72 1.652L6.146 9.518c-.633.542-1.662.54-2.292 0L2.259 8.15c-.419-.36-.742-1.098-.72-1.652L1.71 2z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 5h21v5H0z" />
        <path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <path fill="url(#prefix__a)" d="M0 0h21v5H0z" />
        <g transform="translate(2.5 2)">
          <path
            fill="url(#prefix__d)"
            fillRule="nonzero"
            d="M2.751 0H7.25c1.09 0 1.997.872 2.039 1.963L9.46 6.46c.033.86-.415 1.89-1.07 2.45l-1.594 1.367c-1.007.863-2.589.861-3.594 0L1.61 8.91C.957 8.352.506 7.32.539 6.46l.173-4.497A2.048 2.048 0 012.752 0z"
          />
          <mask id="prefix__g" fill="#fff">
            <use xlinkHref="#prefix__e" />
          </mask>
          <use fill="url(#prefix__f)" xlinkHref="#prefix__e" />
          <path
            fill="url(#prefix__a)"
            d="M4.5 6.245A.25.25 0 004.252 6H3.248A.246.246 0 013 5.748v-.496C3 5.113 3.118 5 3.248 5h1.004a.246.246 0 00.248-.252v-.496A.249.249 0 004.248 4h-.496a.249.249 0 01-.252-.252v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252-.107.252-.252v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.107.252.252.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 00-.252.252v.496c0 .139.118.252.248.252h1.004C6.89 5 7 5.107 7 5.252v.496C7 5.887 6.882 6 6.752 6H5.748a.245.245 0 00-.248.245v1.51A.245.245 0 015.248 8h-.496a.247.247 0 01-.252-.245v-1.51z"
            mask="url(#prefix__g)"
          />
          <path
            fill="#1251A1"
            d="M4.097 8.07C2.882 8.26 2 8.828 2 9.5c0 .828 1.343 1.5 3 1.5s3-.672 3-1.5c0-.671-.882-1.24-2.097-1.43a1 1 0 00-1.806 0z"
            mask="url(#prefix__g)"
          />
        </g>
      </g>
    </svg>
  );
};

export default SK;
