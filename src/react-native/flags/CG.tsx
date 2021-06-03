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

const CG = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#F33630" />
          <Stop offset="100%" stopColor="#DC241E" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#009643" />
          <Stop offset="100%" stopColor="#09C15B" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FCDF4A" />
          <Stop offset="100%" stopColor="#FCE154" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__b)"
          d="M6.062 19.017l15-14h1v15h-16z"
          transform="translate(-1.06 -5.02)"
        />
        <Path
          fill="url(#prefix__c)"
          d="M1.062 19.017l15-14h1v15h-16z"
          transform="rotate(180 8.532 10.007)"
        />
        <Path
          fill="url(#prefix__d)"
          d="M-2.63 9.667h29v5h-29z"
          transform="rotate(134 12.406 9.432)"
        />
      </G>
    </Svg>
  );
};

export default CG;
