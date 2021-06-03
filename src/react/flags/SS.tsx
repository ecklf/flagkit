import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const SS = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E22A32" />
          <stop offset="100%" stopColor="#D61C24" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#2CA244" />
          <stop offset="100%" stopColor="#218736" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#185AC6" />
          <stop offset="100%" stopColor="#104CAD" />
        </linearGradient>
        <linearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE14A" />
          <stop offset="100%" stopColor="#FCDC34" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 5h21v5H0z" />
        <path fill="url(#prefix__a)" d="M0 4h21v1H0z" />
        <path fill="url(#prefix__d)" d="M0 11h21v4H0z" />
        <path fill="url(#prefix__a)" d="M0 10h21v1H0z" />
        <path fill="url(#prefix__e)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#prefix__f)"
          d="M3.836 7.987l-.683 1.28-.205-1.437-1.429-.254 1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z"
        />
      </g>
    </svg>
  );
};

export default SS;
