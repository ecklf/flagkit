import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconPM = ({
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
          <stop offset="0%" stopColor="#138E16" />
          <stop offset="100%" stopColor="#0F7F12" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#26A7DC" />
          <stop offset="100%" stopColor="#1B94C6" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FBCD3F" />
          <stop offset="100%" stopColor="#FFCE2F" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F03633" />
          <stop offset="100%" stopColor="#D82A28" />
        </linearGradient>
        <linearGradient
          id="prefix__g"
          x1="82.842%"
          x2="20.426%"
          y1="18.137%"
          y2="78.479%"
        >
          <stop offset="0%" stopColor="#2AA854" />
          <stop offset="100%" stopColor="#219447" />
        </linearGradient>
        <linearGradient id="prefix__i" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__j" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#D7181D" />
          <stop offset="100%" stopColor="#C60E13" />
        </linearGradient>
        <linearGradient id="prefix__k" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FBCD3F" />
          <stop offset="100%" stopColor="#FECB2F" />
        </linearGradient>
        <path id="prefix__e" d="M0 0h7v5H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 10h21v5H0z" />
        <path fill="url(#prefix__c)" d="M0 15h21V0H0z" />
        <path
          fill="url(#prefix__d)"
          d="M17.326 6.429C18.353 6.176 19 6.109 19 7c0 1.657-2.239 3-5 3S9 8.657 9 7c0-.89.647-.824 1.674-.571a4.114 4.114 0 01-.161-.563c-.287-1.35.137-2.584.947-2.757.81-.172 1.7.783 1.987 2.134.136.636.113 1.247-.034 1.733a7.414 7.414 0 001.174 0c-.147-.486-.17-1.097-.034-1.733.287-1.35 1.176-2.306 1.987-2.134.81.173 1.234 1.407.947 2.757a4.114 4.114 0 01-.161.563z"
        />
        <path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M15.776 12.947a.5.5 0 00.448 0l2-1a.5.5 0 00-.448-.894L16 11.94l-1.776-.888a.5.5 0 00-.448 0L12 11.94l-1.776-.888a.5.5 0 00-.448.894l2 1a.5.5 0 00.448 0L14 12.06l1.776.888z"
        />
        <mask id="prefix__h" fill="#fff">
          <use xlinkHref="#prefix__e" />
        </mask>
        <use fill="url(#prefix__f)" xlinkHref="#prefix__e" />
        <path
          fill="url(#prefix__g)"
          d="M4 2v-4H3v4h-4v1h4v4h1V3h4V2H4z"
          mask="url(#prefix__h)"
          transform="rotate(-45 3.5 2.5)"
        />
        <path
          fill="url(#prefix__a)"
          d="M4 2v-3H3v3H0v1h3v3h1V3h3V2H4z"
          mask="url(#prefix__h)"
        />
        <path fill="url(#prefix__a)" d="M0 5h7v5H0z" />
        <path
          fill="url(#prefix__i)"
          d="M1.5 7a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-1 2a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"
        />
        <path fill="url(#prefix__j)" d="M0 10h7v5H0z" />
        <path
          fill="url(#prefix__k)"
          d="M3.5 12c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5zm0 2c-1.38 0-2.5-.224-2.5-.5s1.12-.5 2.5-.5 2.5.224 2.5.5-1.12.5-2.5.5z"
        />
      </g>
    </svg>
  );
};

export default FlagIconPM;
