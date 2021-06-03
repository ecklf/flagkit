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

const FlagIconER = ({
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
          <Stop offset="0%" stopColor="#29C53F" />
          <Stop offset="100%" stopColor="#21AC35" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#579DED" />
          <Stop offset="100%" stopColor="#458BDB" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#F42D56" />
          <Stop offset="100%" stopColor="#E9103D" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v7.5H0z" />
        <Path fill="url(#prefix__c)" d="M0 7.5h21v8H0z" />
        <Path fill="url(#prefix__d)" d="M0 15l21-7.5L0 0z" />
        <Path
          fill="#FFC63C"
          fillRule="nonzero"
          d="M6.5 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 1a3.5 3.5 0 110-7 3.5 3.5 0 010 7z"
        />
        <Circle cx={6} cy={6.5} r={1} fill="#FFC63C" />
        <Circle cx={7} cy={7} r={1} fill="#FFC63C" />
        <Circle cx={6.5} cy={6} r={1} fill="#FFC63C" />
        <Circle cx={6} cy={7.5} r={1} fill="#FFC63C" />
        <Circle cx={7} cy={8} r={1} fill="#FFC63C" />
        <Circle cx={6} cy={8.5} r={1} fill="#FFC63C" />
        <Circle cx={7} cy={9} r={1} fill="#FFC63C" />
      </G>
    </Svg>
  );
};

export default FlagIconER;
