import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const CN = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#F1361D" />
          <stop offset="100%" stopColor="#DF2910" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1="37.059%"
          x2="62.941%"
          y1="1.704%"
          y2="98.296%"
        >
          <stop offset="0%" stopColor="#FFDC42" />
          <stop offset="100%" stopColor="#FDD217" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDC42" />
          <stop offset="100%" stopColor="#FDD217" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__c)"
          d="M10.13 4.483l-.63.383.017-.737-.383-.629.737.017.629-.383-.017.737.383.629-.737-.017zM8.28 2.449l-.726-.123.497-.545.123-.727.545.497.727.123-.497.545-.123.727-.545-.497zm.366 6.53l-.615.404-.01-.737-.404-.615.737-.01.615-.404.01.737.404.615-.737.01zm1.267-1.987l-.732.082.327-.66-.082-.733.66.327.733-.082-.327.66.082.733-.66-.327z"
        />
        <path
          fill="url(#prefix__d)"
          d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </g>
    </svg>
  );
};

export default CN;
