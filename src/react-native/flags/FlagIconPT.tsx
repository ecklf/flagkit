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

const FlagIconPT = ({
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
          <Stop offset="0%" stopColor="#FF2936" />
          <Stop offset="100%" stopColor="#FD0D1B" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#128415" />
          <Stop offset="100%" stopColor="#0A650C" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FAF94F" />
          <Stop offset="100%" stopColor="#F8F736" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#1D50B5" />
          <Stop offset="100%" stopColor="#15439D" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__c)" d="M0 0h8v15H0z" />
        <Path
          fill="url(#prefix__d)"
          fillRule="nonzero"
          d="M8 9.5a2 2 0 100-4 2 2 0 000 4zm0 1a3 3 0 110-6 3 3 0 010 6z"
        />
        <Path
          fill="url(#prefix__a)"
          d="M7 6.256A.25.25 0 017.245 6h1.51A.25.25 0 019 6.256V8A.997.997 0 018 9c-.552 0-1-.443-1-.999V6.256z"
        />
        <Path
          fill="url(#prefix__e)"
          d="M8 8c.276 0 .5-.724.5-1a.5.5 0 00-1 0c0 .276.224 1 .5 1z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconPT;
