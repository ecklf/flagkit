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

const FlagIconZW = ({
  size = 15,
  width = 21,
  height = 15,
  ...props
}: Props) => {
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
          <Stop offset="0%" stopColor="#369D0C" />
          <Stop offset="100%" stopColor="#319209" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD40E" />
          <Stop offset="100%" stopColor="#FFD201" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#F12F1F" />
          <Stop offset="100%" stopColor="#DE2010" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__b)"
          d="M0 0h21v2H0zM0 13h21v2H0zM0 4h21v2H0zM0 9h21v2H0z"
        />
        <Path fill="url(#prefix__c)" d="M0 6h21v3H0z" />
        <Path fill="url(#prefix__d)" d="M0 2h21v2H0zM0 11h21v2H0z" />
        <Path
          fill="url(#prefix__c)"
          fillRule="nonzero"
          d="M-1 15V0h1l10 7.5L0 15z"
        />
        <Path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M0 13.75L8.333 7.5 0 1.25z"
        />
        <Path
          fill="url(#prefix__e)"
          d="M3 8.475L1.53 9.523 2.074 7.8.623 6.727l1.804-.016L3 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconZW;
