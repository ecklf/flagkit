import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconNC = ({
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
          <Stop offset="0%" stopColor="#094CC7" />
          <Stop offset="100%" stopColor="#003CAB" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#2AAD55" />
          <Stop offset="100%" stopColor="#219447" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#F65D55" />
          <Stop offset="100%" stopColor="#E9443C" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FAE749" />
          <Stop offset="100%" stopColor="#FBE533" />
        </LinearGradient>
        <LinearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v5H0z" />
        <Path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <Path fill="url(#prefix__d)" d="M0 5h21v5H0z" />
        <Circle cx={10.5} cy={7.5} r={3.5} fill="url(#prefix__e)" />
        <Path
          fill="url(#prefix__f)"
          d="M10.092 6.211a.5.5 0 10.514-.2c.048-.024.096-.05.144-.078.598-.345.97-.819.833-1.058-.139-.24-.735-.153-1.333.192s-.97.819-.833 1.058c.086.148.347.171.675.086zM10.5 10.5c-.828 0-1-.724-1-1s.172-.5 1-.5c.828 0 1 .224 1 .5s-.172 1-1 1zm0-1.5a.5.5 0 110-1 .5.5 0 010 1zm0-1a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconNC;
