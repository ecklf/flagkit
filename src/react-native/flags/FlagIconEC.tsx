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

const FlagIconEC = ({
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
          <Stop offset="0%" stopColor="#0748AE" />
          <Stop offset="100%" stopColor="#003993" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DE2035" />
          <Stop offset="100%" stopColor="#CE1126" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD935" />
          <Stop offset="100%" stopColor="#FDD216" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FBDC44" />
          <Stop offset="100%" stopColor="#FFDC32" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 7h21v4H0z" />
        <Path fill="url(#prefix__c)" d="M0 11h21v4H0z" />
        <Path fill="url(#prefix__d)" d="M0 0h21v7H0z" />
        <Path
          fill="url(#prefix__e)"
          d="M9.3 6a2 2 0 102.4 0L11 8.1h-1L9.3 6z"
        />
        <Path fill="#5FC0DC" d="M10.5 5.5L11 8h-1z" />
        <Path
          fill="#3F2821"
          fillRule="nonzero"
          d="M9.677 3.823a.25.25 0 00-.256-.06l-1.5.5a.25.25 0 10.158.474l1.353-.451.891.89a.25.25 0 00.354 0l.89-.89 1.354.451a.25.25 0 10.158-.474l-1.5-.5a.25.25 0 00-.256.06l-.823.823-.823-.823z"
          opacity={0.66}
        />
      </G>
    </Svg>
  );
};

export default FlagIconEC;
