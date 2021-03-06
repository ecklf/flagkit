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

const FlagIconTO = ({
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
          <Stop offset="0%" stopColor="#E20F1B" />
          <Stop offset="100%" stopColor="#C00711" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DF101B" />
          <Stop offset="100%" stopColor="#C00711" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__a)" d="M0 0h12v8H0z" />
        <Path
          fill="url(#prefix__c)"
          d="M7 3V1.258C7 1.104 6.89 1 6.755 1h-1.51A.25.25 0 005 1.258V3H3.258C3.104 3 3 3.11 3 3.245v1.51A.25.25 0 003.258 5H5v1.742c0 .154.11.258.245.258h1.51A.25.25 0 007 6.742V5h1.742C8.896 5 9 4.89 9 4.755v-1.51A.25.25 0 008.742 3H7z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconTO;
