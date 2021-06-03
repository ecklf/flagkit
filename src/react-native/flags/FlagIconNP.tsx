import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Mask,
  Use,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconNP = ({
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
        <LinearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFF" />
          <Stop offset="100%" stopColor="#F0F0F0" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#EE1B44" />
          <Stop offset="100%" stopColor="#DD153C" />
        </LinearGradient>
        <LinearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#0543A8" />
          <Stop offset="100%" stopColor="#003893" />
        </LinearGradient>
        <Path
          id="prefix__a"
          d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
        />
        <Path
          id="prefix__e"
          d="M0 0h1.495c.279 0 .693.126.918.275L13.175 7.45c.456.304.372.55-.172.55H6l7.247 6.341c.416.364.303.659-.254.659H0V0z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Mask id="prefix__c" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Use fill="url(#prefix__b)" xlinkHref="#prefix__a" />
        <G mask="url(#prefix__c)">
          <Use fill="url(#prefix__d)" xlinkHref="#prefix__e" />
          <Path
            stroke="url(#prefix__f)"
            d="M.5.5v14h12.17l-8-7h7.679L2.136.691A1.483 1.483 0 001.496.5H.5z"
          />
        </G>
        <Path
          fill="url(#prefix__b)"
          d="M5.138 5.85a3.52 3.52 0 00.789-.318 2 2 0 01-3.857 0c.236.132.502.24.791.32L3.25 5.5l-.636-.574.856.044-.044-.856L4 4.75l.574-.636-.044.856.856-.044-.636.574.388.35zM4 12l-.765.848.058-1.14-1.14.057L3 11l-.848-.765 1.14.058-.057-1.14L4 10l.765-.848-.058 1.14 1.14-.057L5 11l.848.765-1.14-.058.057 1.14L4 12z"
          mask="url(#prefix__c)"
        />
      </G>
    </Svg>
  );
};

export default FlagIconNP;
