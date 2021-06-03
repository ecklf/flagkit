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

const FlagIconKP = ({
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
          <Stop offset="0%" stopColor="#1461B6" />
          <Stop offset="100%" stopColor="#0B52A1" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#F53846" />
          <Stop offset="100%" stopColor="#EB2130" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <Path fill="url(#prefix__a)" d="M0 3h21v9H0z" />
        <Path fill="url(#prefix__c)" d="M0 4h21v7H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M7.5 10a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1.497l1.47 1.02-.516-1.713 1.424-1.083-1.788-.039L7.5 5l-.59 1.688-1.788.04L6.546 7.81 6.03 9.523 7.5 8.503z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconKP;
