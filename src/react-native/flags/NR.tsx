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

const NR = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#0744A7" />
          <Stop offset="100%" stopColor="#00307D" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FCC747" />
          <Stop offset="100%" stopColor="#FEC539" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__c)" d="M0 6h21v2H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M5.5 12.25l-.773 1.128.038-1.367-1.288.458.834-1.083L3 11l1.311-.386-.834-1.083 1.288.458-.038-1.367L5.5 9.75l.773-1.128-.038 1.367 1.288-.458-.834 1.083L8 11l-1.311.386.834 1.083-1.288-.458.038 1.367z"
        />
      </G>
    </Svg>
  );
};

export default NR;
