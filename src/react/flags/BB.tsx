import * as React from "react";

const BB = ({
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
          <stop offset="0%" stopColor="#1132C7" />
          <stop offset="100%" stopColor="#0522A5" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#08379D" />
          <stop offset="100%" stopColor="#042A7D" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCC50" />
          <stop offset="100%" stopColor="#FFC63C" />
        </linearGradient>
        <linearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__c)" d="M10 0h11v15H10zM0 0h7v15H0z" />
        <path fill="url(#prefix__d)" d="M7 0h7v15H7z" />
        <path
          fill="url(#prefix__e)"
          d="M10.378 4.709c.079-.116.206-.11.278 0l.708 1.082c.075.116.019.209-.118.209h-.242a.221.221 0 00-.23.249l.201 2.002c.014.138.141.249.275.249a.695.695 0 00.43-.179l.14-.137c.1-.099.18-.286.18-.432v-.498a.696.696 0 00-.18-.435l-.14-.138c-.1-.1-.082-.214.054-.26l1.032-.343c.13-.043.214.03.188.17l-.368 2.003a.918.918 0 01-.227.423l-.678.652a.726.726 0 01-.431.174.247.247 0 00-.25.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496a.254.254 0 00-.25-.252.69.69 0 01-.424-.174l-.652-.652a.956.956 0 01-.224-.423l-.4-2.002c-.028-.138.048-.216.184-.17l1.032.343c.13.043.156.156.053.259l-.138.138c-.1.1-.181.289-.181.435v.498c0 .14.078.33.18.432l.14.137c.1.1.296.179.43.179.138 0 .26-.107.275-.249l.2-2.002A.225.225 0 009.996 6h-.242c-.14 0-.187-.098-.112-.209l.736-1.082z"
        />
      </g>
    </svg>
  );
};

export default BB;
