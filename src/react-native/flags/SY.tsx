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

const SY = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E32139" />
          <Stop offset="100%" stopColor="#CC162C" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#128A49" />
          <Stop offset="100%" stopColor="#0F7A40" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 10h21v5H0z" />
        <Path fill="url(#prefix__c)" d="M0 0h21v5H0z" />
        <Path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <Path
          fill="url(#prefix__d)"
          d="M7 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L7 5.5l.482 1.337 1.42.045-1.122.871.396 1.365zM14 8.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L14 5.5l.482 1.337 1.42.045-1.122.871.396 1.365z"
        />
      </G>
    </Svg>
  );
};

export default SY;
