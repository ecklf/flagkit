import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const KR = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E01B41" />
          <stop offset="100%" stopColor="#C51335" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0E4B9C" />
          <stop offset="100%" stopColor="#053677" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <circle id="prefix__b" cx={3.5} cy={3.5} r={3.5} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <g transform="translate(7 4)">
          <mask id="prefix__e" fill="#fff">
            <use xlinkHref="#prefix__b" />
          </mask>
          <use fill="url(#prefix__c)" xlinkHref="#prefix__b" />
          <path
            fill="url(#prefix__d)"
            d="M0 4c1 .937 2.5 1.5 3.5 0s3-1.5 3.5 0 0 3 0 3H0s-1-3.937 0-3z"
            mask="url(#prefix__e)"
          />
        </g>
        <path
          fill="url(#prefix__f)"
          d="M14.208 3.922a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm1.3-.75a.25.25 0 01.09-.347l.429-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm-12.125 7a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095l-1.244-2.156zm1.299-.75a.25.25 0 01.09-.347l.43-.248a.254.254 0 01.346.095l1.244 2.156a.25.25 0 01-.09.347l-.43.248a.254.254 0 01-.346-.095L4.682 9.422zm10.77-.5a.25.25 0 01.347-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 01-.346.095l-.43-.248a.254.254 0 01-.09-.347l1.244-2.156zm1.3.75a.25.25 0 01.346-.095l.429.248c.12.07.161.225.09.347l-1.244 2.156a.25.25 0 01-.346.095l-.43-.248a.254.254 0 01-.09-.347l1.244-2.156zm-12.125-7a.25.25 0 01.346-.095l.43.248c.12.07.16.225.09.347L4.249 5.328a.25.25 0 01-.347.095l-.429-.248a.254.254 0 01-.09-.347l1.244-2.156zm1.299.75a.25.25 0 01.346-.095l.43.248c.12.07.16.225.09.347L5.548 6.078a.25.25 0 01-.347.095l-.429-.248a.254.254 0 01-.09-.347l1.244-2.156z"
          opacity={0.75}
        />
      </g>
    </svg>
  );
};

export default KR;
