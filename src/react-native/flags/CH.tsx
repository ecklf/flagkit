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

const CH = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
        <LinearGradient id="prefix__b" x1="50%" x2="50%" y1="100%" y2="0%">
          <Stop offset="0%" stopColor="red" />
          <Stop offset="100%" stopColor="#FF3131" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M9 9H6.256A.255.255 0 016 8.744V6.256C6 6.115 6.114 6 6.256 6H9V3.256C9 3.115 9.114 3 9.256 3h2.488c.141 0 .256.114.256.256V6h2.744c.141 0 .256.114.256.256v2.488a.255.255 0 01-.256.256H12v2.744a.255.255 0 01-.256.256H9.256A.255.255 0 019 11.744V9z"
        />
      </G>
    </Svg>
  );
};

export default CH;
