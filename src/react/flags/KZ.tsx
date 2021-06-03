import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const KZ = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#30C6E0" />
          <stop offset="100%" stopColor="#1CB0C9" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFCD4B" />
          <stop offset="100%" stopColor="#FEC531" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <circle cx={10.5} cy={7.5} r={3} fill="url(#prefix__c)" />
        <path
          fill="url(#prefix__c)"
          d="M10.5 11.035l-1.224 1.827-.31-2.177L7.071 11.8l.665-2.096-2.191.182 1.508-1.6L5 7.5l2.053-.787-1.508-1.6 2.191.183L7.071 3.2l1.895 1.115.31-2.177L10.5 3.965l1.224-1.827.31 2.177L13.929 3.2l-.665 2.096 2.191-.182-1.508 1.6L16 7.5l-2.053.787 1.508 1.6-2.191-.183.665 2.096-1.895-1.115-.31 2.177-1.224-1.827zm0-.035a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM1 1.252C1 1.113 1.107 1 1.252 1h.496c.139 0 .252.107.252.252v.496C2 1.887 1.893 2 1.748 2h-.496A.249.249 0 011 1.748v-.496zm0 2C1 3.113 1.107 3 1.252 3h.496c.139 0 .252.107.252.252v.496C2 3.887 1.893 4 1.748 4h-.496A.249.249 0 011 3.748v-.496zm0 2C1 5.113 1.107 5 1.252 5h.496c.139 0 .252.107.252.252v.496C2 5.887 1.893 6 1.748 6h-.496A.249.249 0 011 5.748v-.496zm0 2C1 7.113 1.107 7 1.252 7h.496c.139 0 .252.107.252.252v.496C2 7.887 1.893 8 1.748 8h-.496A.249.249 0 011 7.748v-.496zm0 2C1 9.113 1.107 9 1.252 9h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 011 9.748v-.496zm0 2c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 011 11.748v-.496zm0 2c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 011 13.748v-.496zm1-1c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 012 12.748v-.496zm0-2c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 012 10.748v-.496zm0-2C2 8.113 2.107 8 2.252 8h.496c.139 0 .252.107.252.252v.496C3 8.887 2.893 9 2.748 9h-.496A.249.249 0 012 8.748v-.496zm0-2C2 6.113 2.107 6 2.252 6h.496c.139 0 .252.107.252.252v.496C3 6.887 2.893 7 2.748 7h-.496A.249.249 0 012 6.748v-.496zm0-2C2 4.113 2.107 4 2.252 4h.496c.139 0 .252.107.252.252v.496C3 4.887 2.893 5 2.748 5h-.496A.249.249 0 012 4.748v-.496zm0-2C2 2.113 2.107 2 2.252 2h.496c.139 0 .252.107.252.252v.496C3 2.887 2.893 3 2.748 3h-.496A.249.249 0 012 2.748v-.496z"
        />
      </g>
    </svg>
  );
};

export default KZ;
