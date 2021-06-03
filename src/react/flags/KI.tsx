import * as React from "react";

const KI = ({
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
          <stop offset="0%" stopColor="#E62B3F" />
          <stop offset="100%" stopColor="#CA1A2C" />
        </linearGradient>
        <linearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDA57" />
          <stop offset="100%" stopColor="#FCD036" />
        </linearGradient>
        <linearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0752A2" />
          <stop offset="100%" stopColor="#034285" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v8H0z" />
        <circle cx={10.5} cy={8.5} r={2.5} fill="url(#prefix__c)" />
        <path
          fill="url(#prefix__c)"
          d="M10.5 12.035l-1.224 1.827-.31-2.177L7.071 12.8l.665-2.096-2.191.182 1.508-1.6L5 8.5l2.053-.787-1.508-1.6 2.191.183L7.071 4.2l1.895 1.115.31-2.177L10.5 4.965l1.224-1.827.31 2.177L13.929 4.2l-.665 2.096 2.191-.182-1.508 1.6L16 8.5l-2.053.787 1.508 1.6-2.191-.183.665 2.096-1.895-1.115-.31 2.177-1.224-1.827zm0-.035a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM8.86 2.403l-.047-.234.982-.164s-1.318-.311-1.753-.467c-.625-.224-.538-.398-.538-.398s1.785.35 2.665.35c.188 0 .561.468.561.468s.649-.655.959-.677C13.095 1.178 14.61 1 14.61 1s-.44.294-.702.374c-.711.216-2.22.514-2.22.514l-.21.328h1.495l-.63.187.326.304s-.343-.178-.794-.094c-.31.058-.673.265-1.006.35-.818.211-1.309-.56-1.309-.56H8.86z"
        />
        <path fill="url(#prefix__d)" d="M0 8h21v7H0z" />
        <path
          fill="#FFF"
          fillRule="nonzero"
          d="M23.322 12.933l.474.159-.316.948-.474-.158-.47-.156-2.062-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688-.475.158-.316-.949.474-.158 2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687.469.156zm0-2.5l.474.159-.316.948-.474-.158-.47-.156-2.062-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688-.475.158-.316-.949.474-.158 2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687.469.156zm0-2.5l.474.159-.316.948-.474-.158-.47-.156-2.062-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688c-.36.12-.897.119-1.254 0l-2.063-.688a1.278 1.278 0 00-.62 0l-2.063.688-.475.158L-1 7.935l.474-.158 2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687c.153.051.467.051.621 0l2.063-.687c.357-.12.894-.12 1.254 0l2.062.687.469.156z"
        />
      </g>
    </svg>
  );
};

export default KI;
