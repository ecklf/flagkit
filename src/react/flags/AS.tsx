import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const AS = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#071585" />
          <stop offset="100%" stopColor="#000B64" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#D32636" />
          <stop offset="100%" stopColor="#BA1827" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="35.4%" y1="0%" y2="89.131%">
          <stop offset="0%" stopColor="#AB5423" />
          <stop offset="100%" stopColor="#5A3719" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__c)"
          fillRule="nonzero"
          d="M22 15.5l-22-8 22-8z"
        />
        <path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M21 .928L2.926 7.5 21 14.072z"
        />
        <path
          fill="url(#prefix__d)"
          d="M16 7.038c-.118-.118-.806.156-.806.156L14 6s-.062-.663.5-1c.425-.255 1.22-.16 1.999-.5C17.746 3.956 19 3 19 3l-.802 2.206s.919.473.802.794c-.034.093-.93.385-1 .5-.132.22.524.286.32.538C17.733 7.765 17 8.5 17 8.5L16 8s.15-.811 0-.962z"
        />
        <circle cx={13.5} cy={7.5} r={1} fill="#FFC322" />
        <path
          fill="#FFC322"
          fillRule="nonzero"
          d="M12.5 9h5a.5.5 0 100-1h-5a.5.5 0 100 1z"
        />
        <path
          fill="#FFC322"
          fillRule="nonzero"
          d="M14.197 10.46l3.5-1.5a.5.5 0 00-.394-.92l-3.5 1.5a.5.5 0 00.394.92z"
        />
      </g>
    </svg>
  );
};

export default AS;
