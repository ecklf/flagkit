import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconBR = ({
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
          <stop offset="0%" stopColor="#05AB41" />
          <stop offset="100%" stopColor="#019C39" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#053087" />
          <stop offset="100%" stopColor="#012877" />
        </linearGradient>
        <circle id="prefix__c" cx={3.5} cy={3.5} r={3.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="#FDD216"
          d="M2.422 7.773c-.233-.15-.228-.398 0-.546l7.656-4.954a.85.85 0 01.844 0l7.656 4.954c.233.15.228.398 0 .546l-7.656 4.954a.85.85 0 01-.844 0L2.422 7.773z"
        />
        <g transform="translate(7 4)">
          <mask id="prefix__e" fill="#fff">
            <use xlinkHref="#prefix__c" />
          </mask>
          <use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
          <path
            fill="#FFF"
            fillRule="nonzero"
            d="M-.1 2.974c.265-.215 1.463-.04 3.534.512 1.474.394 3.173 1.262 3.562 1.742l.314.388.778-.629-.315-.388c-.55-.68-2.421-1.636-4.081-2.079-2.586-.69-3.758-.86-4.422-.323l-.388.314.629.777.389-.314z"
            mask="url(#prefix__e)"
          />
        </g>
      </g>
    </svg>
  );
};

export default FlagIconBR;
