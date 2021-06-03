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

const FlagIconOM = ({
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
          <Stop offset="0%" stopColor="#138E16" />
          <Stop offset="100%" stopColor="#0F7F12" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#ED2B35" />
          <Stop offset="100%" stopColor="#D91B25" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 10h21v5H0z" />
        <Path fill="url(#prefix__c)" d="M0 15h7v-5h14V5H7V0H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M3.5 3.534l-.868 1.268.45-1.47-1.532.113 1.43-.564-1.044-1.128 1.332.766L3.5 1l.232 1.519 1.332-.766L4.02 2.881l1.43.564-1.533-.112.45 1.469zM7 0h14v5H7z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconOM;
