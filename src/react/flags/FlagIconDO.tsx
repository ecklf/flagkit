import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconDO = ({
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
          <stop offset="0%" stopColor="#083D7A" />
          <stop offset="100%" stopColor="#032F61" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DF1E35" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h9v6H0zM12 9h9v6h-9z" />
        <path fill="url(#prefix__c)" d="M0 9h9v6H0zM12 0h9v6h-9z" />
        <path fill="url(#prefix__a)" d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" />
        <path
          fill="#C93127"
          fillOpacity={0.2}
          d="M9.44 6.44a1.5 1.5 0 002.12 2.12 1.5 1.5 0 000-2.12"
        />
        <circle cx={10.5} cy={7.5} r={1} fill="#042F60" />
        <path
          fill="#0F6D1A"
          fillRule="nonzero"
          d="M11.56 8.56a1.5 1.5 0 01-2.12-2.12l.353.353a1 1 0 101.414 0l.354-.354a1.5 1.5 0 010 2.122zm0 0a1.5 1.5 0 01-2.12-2.12l.353.353a1 1 0 101.414 0l.354-.354a1.5 1.5 0 010 2.122z"
        />
      </g>
    </svg>
  );
};

export default FlagIconDO;
