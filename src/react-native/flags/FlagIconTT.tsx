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

const FlagIconTT = ({
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
          <Stop offset="0%" stopColor="#ED233C" />
          <Stop offset="100%" stopColor="#CC162C" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M-.004.005h21v15h-21z" />
        <Path
          fill="url(#prefix__a)"
          d="M23-1l-7.144-3.06-15.1 17.995L-1.5 16l7.653 3.07L20.977 1.403z"
          transform="matrix(-1 0 0 1 21.5 0)"
        />
        <Path
          fill="url(#prefix__c)"
          d="M3.09 20.22L21.731-1.997l-3.83-3.214L-.74 17.005l3.83 3.214z"
          transform="matrix(-1 0 0 1 20.991 0)"
        />
      </G>
    </Svg>
  );
};

export default FlagIconTT;
