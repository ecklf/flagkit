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

const FlagIconSR = ({
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
          <Stop offset="0%" stopColor="#43924C" />
          <Stop offset="100%" stopColor="#3A7E42" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#CD153A" />
          <Stop offset="100%" stopColor="#B31031" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#F5D24B" />
          <Stop offset="100%" stopColor="#ECC736" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <Path fill="url(#prefix__a)" d="M0 3h21v9H0z" />
        <Path fill="url(#prefix__c)" d="M0 5h21v5H0z" />
        <Path
          fill="url(#prefix__d)"
          d="M10.5 8.775l-1.47.998.495-1.706-1.403-1.09 1.776-.056.602-1.671.602 1.67 1.776.057-1.403 1.09.494 1.706z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconSR;
