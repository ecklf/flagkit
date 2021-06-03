import * as React from "react";

const MK = ({
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
          <stop offset="0%" stopColor="#E81B26" />
          <stop offset="100%" stopColor="#D00914" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE94F" />
          <stop offset="100%" stopColor="#FFE633" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M-.004-.002h21v15h-21z" />
        <circle cx={10.496} cy={7.498} r={2.5} fill="url(#prefix__c)" />
        <path
          fill="url(#prefix__c)"
          d="M13.961 7.993l7.035 1.005v-3l-7.035 1.005a3.53 3.53 0 010 .99zm-6.93-.99L-.004 5.998v3l7.035-1.005a3.53 3.53 0 010-.99zm4.152-2.938l.813-4.067h-3l.814 4.067a3.517 3.517 0 011.373 0zM9.81 10.931l-.814 4.067h3l-.813-4.067a3.517 3.517 0 01-1.373 0zM7.652 9.539L-.54 15.417l2.007 2.229 6.703-7.533a3.52 3.52 0 01-.518-.574zm5.688-4.082L21.532-.42 19.525-2.65l-6.702 7.533c.192.172.366.364.517.574zm-.517 4.656l6.702 7.533 2.007-2.23L13.34 9.54a3.52 3.52 0 01-.517.574zM8.17 4.883L1.467-2.65-.54-.42l8.192 5.877a3.52 3.52 0 01.518-.574z"
        />
      </g>
    </svg>
  );
};

export default MK;
