import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const SB = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
  if (size !== height) {
    width = width * (size / height);
    height = height * (size / height);
  }

  return (
    <Svg width={width} height={height} viewBox="0 0 21 15" {...props}>
      <Defs>
        <LinearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFF" />
          <Stop offset="100%" stopColor="#F0F0F0" />
        </LinearGradient>
        <LinearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#1DBE4F" />
          <Stop offset="100%" stopColor="#159B3F" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#0660D4" />
          <Stop offset="100%" stopColor="#0051BB" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#2C7442" />
          <Stop offset="100%" stopColor="#225B34" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD646" />
          <Stop offset="100%" stopColor="#FED02F" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M5.92 5.812c0-.139.078-.33.18-.433l.14-.138c.1-.1.102-.26 0-.362l-.14-.138a.69.69 0 01-.18-.433v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.046.16.116.02l.268-.536a.459.459 0 01.364-.232h1.004c.137 0 .248.116.248.25 0 .138-.107.25-.252.25h-.496a.254.254 0 00-.252.25c0 .138.107.25.252.25h.496c.139 0 .252.108.252.245v1.51a.245.245 0 01-.252.245h-.496a.249.249 0 01-.252-.252v-.496c0-.139.116-.252.25-.252.138 0 .25-.116.25-.25a.247.247 0 00-.252-.25h-.496a.255.255 0 00-.252.248v1.004a.251.251 0 01-.25.248.247.247 0 01-.25-.252v-.496a.254.254 0 00-.25-.252.247.247 0 00-.25.252v.496c0 .139-.116.252-.25.252a.247.247 0 01-.25-.252v-.496z"
        />
        <Path fill="url(#prefix__b)" d="M0-.003h21v15H0z" />
        <Path fill="url(#prefix__c)" d="M0-.003h21l-21 15z" />
        <Path
          fill="url(#prefix__d)"
          d="M0-.003l21 15H0z"
          transform="matrix(-1 0 0 1 21 0)"
        />
        <Path fill="url(#prefix__e)" d="M-4 6.497h29v2H-4z" />
        <Path
          fill="#FFF"
          d="M2.25 2.872l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm5 0l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm0 3l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm-5 0l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387zm2.5-1.5l-.734.387.14-.819-.595-.579.822-.12.367-.744.368.745.821.12-.594.578.14.819-.735-.387z"
        />
      </G>
    </Svg>
  );
};

export default SB;
