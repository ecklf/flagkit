import * as React from "react";

const RW = ({
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
          <stop offset="0%" stopColor="#2D754D" />
          <stop offset="100%" stopColor="#235F3E" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#25B1EB" />
          <stop offset="100%" stopColor="#1AA3DC" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FAD546" />
          <stop offset="100%" stopColor="#FAD12F" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EDC738" />
          <stop offset="100%" stopColor="#E5BE2A" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 11h21v4H0z" />
        <path fill="url(#prefix__c)" d="M0 0h21v7H0z" />
        <path fill="url(#prefix__d)" d="M0 7h21v4H0z" />
        <path
          fill="url(#prefix__e)"
          d="M16 4.5l-.765.848.058-1.14-1.14.057L15 3.5l-.848-.765 1.14.058-.057-1.14L16 2.5l.765-.848-.058 1.14 1.14-.057L17 3.5l.848.765-1.14-.058.057 1.14z"
        />
      </g>
    </svg>
  );
};

export default RW;
