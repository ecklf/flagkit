import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Use,
  Circle,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconMT = ({
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
          <Stop offset="0%" stopColor="#DE233C" />
          <Stop offset="100%" stopColor="#CD1931" />
        </LinearGradient>
        <Path id="prefix__c" d="M4 3V2H3v1H2v1h1v1h1V4h1V3H4z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M11 0h10v15H11z" />
        <Path fill="url(#prefix__a)" d="M0 0h11v15H0z" />
        <Use fill="#CCCCCD" xlinkHref="#prefix__c" />
        <Path
          stroke="#7B716A"
          strokeOpacity={0.66}
          strokeWidth={0.5}
          d="M4.25 2.75h1v1.5h-1v1h-1.5v-1h-1v-1.5h1v-1h1.5v1z"
        />
        <Circle cx={3.5} cy={3.5} r={1} fill="#7B716A" />
      </G>
    </Svg>
  );
};

export default FlagIconMT;
