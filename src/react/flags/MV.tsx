import * as React from "react";

const MV = ({
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
          <stop offset="0%" stopColor="#F32249" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#15A04F" />
          <stop offset="100%" stopColor="#0F7E3D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <rect
          width={15}
          height={9}
          x={3}
          y={3}
          fill="url(#prefix__c)"
          rx={0.5}
        />
        <path
          fill="url(#prefix__a)"
          d="M12.25 4.08a3.5 3.5 0 100 6.839 3.501 3.501 0 010-6.838z"
        />
      </g>
    </svg>
  );
};

export default MV;
