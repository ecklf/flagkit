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

const IL = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#0E46D4" />
          <Stop offset="100%" stopColor="#0538B9" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <Path fill="url(#prefix__a)" d="M0 3h21v9H0z" />
        <Path
          stroke="#093EC5"
          strokeWidth={0.5}
          d="M7.575 9.25L10.5 3.985l2.925 5.265h-5.85z"
        />
        <Path
          stroke="#093EC5"
          strokeWidth={0.5}
          d="M7.575 5.75l2.925 5.265 2.925-5.265h-5.85z"
        />
      </G>
    </Svg>
  );
};

export default IL;
