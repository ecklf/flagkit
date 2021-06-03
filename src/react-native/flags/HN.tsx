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

const HN = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#0884E6" />
          <Stop offset="100%" stopColor="#0074D0" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#0E88E9" />
          <Stop offset="100%" stopColor="#0074D0" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v5H0zM0 10h21v5H0z" />
        <Path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <Path
          fill="url(#prefix__c)"
          d="M10.5 8l-.707.207L10 7.5l-.207-.707L10.5 7l.707-.207L11 7.5l.207.707zM14.5 7l-.707.207L14 6.5l-.207-.707L14.5 6l.707-.207L15 6.5l.207.707zM14.5 9l-.707.207L14 8.5l-.207-.707L14.5 8l.707-.207L15 8.5l.207.707zM6.5 9l-.707.207L6 8.5l-.207-.707L6.5 8l.707-.207L7 8.5l.207.707zM6.5 7l-.707.207L6 6.5l-.207-.707L6.5 6l.707-.207L7 6.5l.207.707z"
        />
      </G>
    </Svg>
  );
};

export default HN;
