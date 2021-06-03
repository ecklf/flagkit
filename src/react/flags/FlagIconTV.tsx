import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconTV = ({
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
          <stop offset="0%" stopColor="#72AFC8" />
          <stop offset="100%" stopColor="#5D98B0" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0A17A7" />
          <stop offset="100%" stopColor="#030E88" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#DB1E36" />
          <stop offset="100%" stopColor="#D51931" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="#FFCD2F"
          d="M9 13l-.707.207.207-.707-.207-.707L9 12l.707-.207-.207.707.207.707L9 13zm3-1l-.707.207.207-.707-.207-.707L12 11l.707-.207-.207.707.207.707L12 12zm3 0l-.707.207.207-.707-.207-.707L15 11l.707-.207-.207.707.207.707L15 12zm2-2l-.707.207.207-.707-.207-.707L17 9l.707-.207-.207.707.207.707L17 10zm2-2l-.707.207.207-.707-.207-.707L19 7l.707-.207-.207.707.207.707L19 8zm-6 1l-.707.207.207-.707-.207-.707L13 8l.707-.207-.207.707.207.707L13 9zm2-4l-.707.207.207-.707-.207-.707L15 4l.707-.207-.207.707.207.707L15 5zm2-1l-.707.207.207-.707-.207-.707L17 3l.707-.207-.207.707.207.707L17 4zm2-1l-.707.207.207-.707-.207-.707L19 2l.707-.207-.207.707.207.707L19 3z"
        />
        <path fill="url(#prefix__c)" d="M0 0h9v7H0z" />
        <path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
        />
        <path
          fill="url(#prefix__d)"
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        />
        <path
          fill="url(#prefix__a)"
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
        />
        <path fill="url(#prefix__d)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
      </g>
    </svg>
  );
};

export default FlagIconTV;
