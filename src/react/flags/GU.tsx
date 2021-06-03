import * as React from "react";

const GU = ({
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
          <stop offset="0%" stopColor="#DE3149" />
          <stop offset="100%" stopColor="#C2273D" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#053B94" />
          <stop offset="100%" stopColor="#002E7A" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DE3149" />
          <stop offset="100%" stopColor="#C2273D" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#81C1F3" />
          <stop offset="100%" stopColor="#6AB1E9" />
        </linearGradient>
        <linearGradient id="prefix__h" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#27A07E" />
          <stop offset="100%" stopColor="#1F9171" />
        </linearGradient>
        <linearGradient id="prefix__i" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1E8CE8" />
          <stop offset="100%" stopColor="#107FDC" />
        </linearGradient>
        <linearGradient id="prefix__j" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF048" />
          <stop offset="100%" stopColor="#FFEF36" />
        </linearGradient>
        <linearGradient id="prefix__k" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#8F5715" />
          <stop offset="100%" stopColor="#7A480D" />
        </linearGradient>
        <path
          id="prefix__e"
          d="M2.5 8.5s2.5-2 2.5-4-2.5-4-2.5-4-2.5 2-2.5 4 2.5 4 2.5 4z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <rect
          width={19}
          height={13}
          x={1}
          y={1}
          fill="url(#prefix__c)"
          rx={0.75}
        />
        <path
          fill="url(#prefix__d)"
          d="M10.5 12s3-2.015 3-4.5-3-4.5-3-4.5-3 2.015-3 4.5 3 4.5 3 4.5z"
        />
        <g transform="translate(8 3)">
          <mask id="prefix__g" fill="#fff">
            <use xlinkHref="#prefix__e" />
          </mask>
          <use fill="url(#prefix__a)" xlinkHref="#prefix__e" />
          <path fill="url(#prefix__f)" d="M0 0h5v5H0z" mask="url(#prefix__g)" />
          <path
            fill="url(#prefix__h)"
            d="M2.5 4.1l-.882.614.311-1.029-.856-.649 1.074-.021L2.5 2l.353 1.015 1.074.021-.856.65.31 1.028z"
            mask="url(#prefix__g)"
          />
          <path fill="url(#prefix__i)" d="M0 5h5v4H0z" mask="url(#prefix__g)" />
          <path
            fill="url(#prefix__j)"
            d="M0 6s1.59 1.5 2 1.5c.488 0 .496-.723 1-1 .794-.436 2-.5 2-.5v3H0V6z"
            mask="url(#prefix__g)"
          />
        </g>
        <path
          fill="url(#prefix__k)"
          fillRule="nonzero"
          d="M10.251 6.475a14.974 14.974 0 00-.067 1.084c-.01.467.01.812.079 1.02.087.261.284.506.557.742.208.18.415.316.557.397a.25.25 0 00.246-.436 3.148 3.148 0 01-.477-.34c-.21-.182-.356-.363-.409-.521-.044-.134-.063-.442-.053-.85a13.917 13.917 0 01.065-1.046.25.25 0 10-.498-.05z"
        />
        <path fill="#FFF" d="M9 7.5L10 9H9z" />
      </g>
    </svg>
  );
};

export default GU;
