import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
  size?: number;
  width?: number;
  height?: number;
}

const SA = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <stop offset="0%" stopColor="#128C4B" />
          <stop offset="100%" stopColor="#0B6C38" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <path
          fill="url(#prefix__a)"
          d="M5 9h8v-.992c0-.28.193-.412.453-.281L14 8v1h1.495c.279 0 .505.214.505.505V10c0 .552-.443 1-.999 1h-1.506a.503.503 0 01-.495-.5V10H6.503c-.278 0-.66-.156-.853-.35L5 9zM5 6.252c0-.139.078-.33.18-.433l.14-.138c.1-.1.102-.26 0-.362l-.14-.138A.69.69 0 015 4.748v-.496C5 4.113 5.107 4 5.252 4h.496c.139 0 .252.107.252.252v.496c0 .139.046.16.116.02l.268-.536A.459.459 0 016.748 4h1.004C7.89 4 8 4.116 8 4.25c0 .138-.107.25-.252.25h-.496A.254.254 0 007 4.75c0 .138.107.25.252.25h.496c.139 0 .252.108.252.245v1.51A.245.245 0 017.748 7h-.496A.249.249 0 017 6.748v-.496C7 6.113 7.116 6 7.25 6c.138 0 .25-.116.25-.25a.247.247 0 00-.252-.25h-.496a.255.255 0 00-.252.248v1.004A.251.251 0 016.25 7 .247.247 0 016 6.748v-.496A.254.254 0 005.75 6a.247.247 0 00-.25.252v.496c0 .139-.116.252-.25.252A.247.247 0 015 6.748v-.496zM13 6.252c0-.139.078-.33.18-.433l.14-.138c.1-.1.102-.26 0-.362l-.14-.138a.69.69 0 01-.18-.433v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.046.16.116.02l.268-.536A.459.459 0 0114.748 4h1.004c.137 0 .248.116.248.25 0 .138-.107.25-.252.25h-.496a.254.254 0 00-.252.25c0 .138.107.25.252.25h.496c.139 0 .252.108.252.245v1.51a.245.245 0 01-.252.245h-.496A.249.249 0 0115 6.748v-.496c0-.139.116-.252.25-.252.138 0 .25-.116.25-.25a.247.247 0 00-.252-.25h-.496a.255.255 0 00-.252.248v1.004a.251.251 0 01-.25.248.247.247 0 01-.25-.252v-.496A.254.254 0 0013.75 6a.247.247 0 00-.25.252v.496c0 .139-.116.252-.25.252a.247.247 0 01-.25-.252v-.496zM12 4.748c0 .139-.078.33-.18.433l-.14.138c-.1.1-.102.26 0 .362l.14.138c.1.1.18.288.18.433v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0111 6.748v-.496c0-.139-.046-.16-.116-.02l-.268.536a.459.459 0 01-.364.232H9.248A.251.251 0 019 6.75c0-.138.107-.25.252-.25h.496c.139 0 .252-.116.252-.25A.247.247 0 009.748 6h-.496A.247.247 0 019 5.755v-1.51C9 4.11 9.107 4 9.252 4h.496c.139 0 .252.107.252.252v.496c0 .139-.116.252-.25.252a.253.253 0 00-.25.25c0 .138.107.25.252.25h.496c.139 0 .252-.118.252-.248V4.248c0-.137.116-.248.25-.248.138 0 .25.107.25.252v.496c0 .139.116.252.25.252.138 0 .25-.107.25-.252v-.496c0-.139.116-.252.25-.252.138 0 .25.107.25.252v.496z"
        />
      </g>
    </svg>
  );
};

export default SA;
