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

const TK = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#0637C5" />
          <Stop offset="100%" stopColor="#002CAA" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FDD33F" />
          <Stop offset="100%" stopColor="#FED02F" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__c)"
          d="M4 12h15v1H3l1-1zm7.5-6c3-2 6.5-4 6.5-4s-1.643 3.073-1.5 4.5C16.69 8.407 19 11 19 11H5s3.5-3 6.5-5z"
        />
        <Path
          fill="#FFF"
          d="M4 9l-.707.207L3.5 8.5l-.207-.707L4 8l.707-.207L4.5 8.5l.207.707zM5 2.5l-.707.207L4.5 2l-.207-.707L5 1.5l.707-.207L5.5 2l.207.707zM7 5.5l-.707.207L6.5 5l-.207-.707L7 4.5l.707-.207L7.5 5l.207.707zM2 5.5l-.707.207L1.5 5l-.207-.707L2 4.5l.707-.207L2.5 5l.207.707z"
        />
      </G>
    </Svg>
  );
};

export default TK;
