import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconJE = ({
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
          <stop offset="0%" stopColor="#EF273F" />
          <stop offset="100%" stopColor="#DB1C33" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F22A41" />
          <stop offset="100%" stopColor="#E51D34" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FADF46" />
          <stop offset="100%" stopColor="#F9DC38" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__b)"
          d="M10.5 6.291L-.962-1.44-2.08.218l10.792 7.28-10.792 7.279 1.118 1.658L10.5 8.704l11.462 7.73 1.118-1.657-10.791-7.28L23.08.218 21.962-1.44 10.5 6.291z"
        />
        <path
          fill="url(#prefix__c)"
          d="M9 2.502c0-.279.216-.505.496-.505h2.009c.273 0 .495.214.495.505v.99c0 .28-.16.666-.348.853l-.804.804a.496.496 0 01-.696 0l-.804-.804A1.354 1.354 0 019 3.493v-.991z"
        />
        <path
          fill="url(#prefix__d)"
          d="M10.5 3.997a.5.5 0 110-1 .5.5 0 010 1zm0-2c-.828 0-1.5-.224-1.5-.5s.672-.5 1.5-.5c.829 0 1.5.224 1.5.5s-.671.5-1.5.5z"
        />
      </g>
    </svg>
  );
};

export default FlagIconJE;
