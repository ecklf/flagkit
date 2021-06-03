import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconGB = ({
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
          <stop offset="0%" stopColor="#0A17A7" />
          <stop offset="100%" stopColor="#030E88" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E6273E" />
          <stop offset="100%" stopColor="#CF152B" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M-.002 0h21v15h-21z" />
        <path
          fill="url(#prefix__a)"
          d="M5.003 10H-.002V5h5.005L-2.082.22l1.118-1.657 8.962 6.045V-1h5v5.608l8.962-6.045L23.078.22 15.993 5h5.005v5h-5.005l7.085 4.78-1.118 1.657-8.962-6.045V16h-5v-5.608l-8.962 6.045-1.118-1.658L5.003 10z"
        />
        <path
          fill="#DB1F35"
          fillRule="nonzero"
          d="M14.136 4.958l9.5-6.25a.25.25 0 00-.275-.417l-9.5 6.25a.25.25 0 10.275.417zM14.868 10.48l8.515 5.74a.25.25 0 10.28-.415l-8.516-5.74a.25.25 0 00-.279.415zM6.142 4.526L-2.74-1.461a.25.25 0 00-.28.415L5.863 4.94a.25.25 0 00.279-.414zM6.827 9.995l-9.845 6.53a.25.25 0 10.276.416l9.846-6.529a.25.25 0 00-.277-.417z"
        />
        <path fill="url(#prefix__c)" d="M-.002 9h9v6h3V9h9V6h-9V0h-3v6h-9z" />
      </g>
    </svg>
  );
};

export default FlagIconGB;
