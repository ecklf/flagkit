import * as React from "react";

const LB = ({
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
          <stop offset="0%" stopColor="#F03340" />
          <stop offset="100%" stopColor="#EB212E" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1FC065" />
          <stop offset="100%" stopColor="#17A555" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v4H0zM0 11h21v4H0z" />
        <path fill="url(#prefix__a)" d="M0 4h21v7H0z" />
        <path
          fill="url(#prefix__c)"
          d="M9.65 9.35a.497.497 0 00-.003-.703l.206.206a.972.972 0 00-.837-.232l-1.032.258c-.267.067-.3-.017-.08-.183l1.191-.892c.224-.168.184-.304-.103-.304h-.484c-.28 0-.309-.1-.064-.222l1.112-.556c.245-.123.223-.222-.064-.222h-.484c-.28 0-.323-.138-.103-.304l1.19-.892a.719.719 0 01.81 0l1.19.892c.224.168.184.304-.103.304h-.484c-.28 0-.309.1-.064.222l1.112.556c.245.123.223.222-.064.222h-.484c-.28 0-.323.138-.103.304l1.19.892c.224.168.191.25-.08.183l-1.03-.258a.977.977 0 00-.838.232l.206-.206a.496.496 0 00-.003.703l.3.3c.193.193.134.35-.145.35h-2.01c-.273 0-.339-.156-.145-.35l.3-.3z"
        />
      </g>
    </svg>
  );
};

export default LB;
