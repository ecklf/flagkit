import * as React from "react";

const KN = ({
  width = 21,
  height = 15,
  ...props
}: React.ComponentProps<"svg">) => {
  return (
    <svg width={width} height={height} viewBox="0 0 21 15" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1EC160" />
          <stop offset="100%" stopColor="#169E4D" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DF2A40" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
        <linearGradient
          id="prefix__d"
          x1="50%"
          x2="50%"
          y1="16.742%"
          y2="82.422%"
        >
          <stop offset="0%" stopColor="#FFD956" />
          <stop offset="100%" stopColor="#FCD036" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M.001 10l21-10h-21z" />
        <path fill="url(#prefix__c)" d="M.001 15h21V5z" />
        <path
          fill="url(#prefix__d)"
          d="M.59 19L25.182 3.632 20.413-4-4.18 11.368z"
        />
        <path
          fill="url(#prefix__e)"
          d="M-.47 17.304L24.122 1.936l-2.65-4.24L-3.12 13.064z"
        />
        <path
          fill="url(#prefix__a)"
          d="M15.233 5.848l-.709 1.123-.46-1.246-1.287-.327 1.043-.823-.087-1.325 1.105.738 1.234-.492-.36 1.278.848 1.022zM7.233 10.698l-.709 1.123-.46-1.246-1.287-.327 1.043-.823L5.733 8.1l1.105.738 1.234-.492-.36 1.278.848 1.022z"
        />
      </g>
    </svg>
  );
};

export default KN;
