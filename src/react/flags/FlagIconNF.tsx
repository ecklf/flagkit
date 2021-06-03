import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconNF = ({
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
    <svg width={width} height={height} viewBox="0 0 21 15" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#219646" />
          <stop offset="100%" stopColor="#197837" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#259D4B" />
          <stop offset="100%" stopColor="#197837" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M10 0h11v15H10zM0 0h7v15H0z" />
        <path fill="url(#prefix__a)" d="M6 0h9v15H6z" />
        <path
          fill="url(#prefix__c)"
          d="M9.444 4.003l.422-1.52A.705.705 0 0110.5 2c.276 0 .562.222.634.484l.422 1.52a.5.5 0 10.248.893l.31 1.116a.501.501 0 00-.614.487.5.5 0 00.85.358l.325 1.174a.499.499 0 10.217.779L13.5 11H11v2h-1v-2H7.5l.608-2.19a.5.5 0 10.217-.778l.326-1.174A.498.498 0 009.5 6.5a.5.5 0 00-.615-.487l.31-1.116a.5.5 0 10.248-.893z"
        />
      </g>
    </svg>
  );
};

export default FlagIconNF;
