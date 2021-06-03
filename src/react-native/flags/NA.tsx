import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Use,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const NA = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#0C4799" />
          <Stop offset="100%" stopColor="#05387E" />
        </LinearGradient>
        <LinearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD243" />
          <Stop offset="100%" stopColor="#FFCD2F" />
        </LinearGradient>
        <LinearGradient id="prefix__j" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#1BAC55" />
          <Stop offset="100%" stopColor="#149447" />
        </LinearGradient>
        <LinearGradient id="prefix__m" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E52347" />
          <Stop offset="100%" stopColor="#D01739" />
        </LinearGradient>
        <Path id="prefix__c" d="M3.121 12.304l21-10h-21z" />
        <Path
          id="prefix__f"
          d="M6.621 6.804l-.765.848.058-1.14-1.14.057.847-.765-.847-.765 1.14.058-.058-1.14.765.847.766-.848-.058 1.14 1.14-.057-.848.765.848.765-1.14-.058.058 1.14z"
        />
        <Path id="prefix__i" d="M3.121 17.304h21v-10z" />
        <Path
          id="prefix__l"
          d="M5.433 19.304L25.75 6.609 21.81.304 1.493 12.999z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <G transform="translate(-3.12 -2.3)">
          <Use fill="#000" xlinkHref="#prefix__c" />
          <Use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
        </G>
        <G transform="translate(-3.12 -2.3)">
          <Use fill="#000" xlinkHref="#prefix__f" />
          <Use fill="url(#prefix__g)" xlinkHref="#prefix__f" />
        </G>
        <G transform="translate(-3.12 -2.3)">
          <Use fill="#000" xlinkHref="#prefix__i" />
          <Use fill="url(#prefix__j)" xlinkHref="#prefix__i" />
        </G>
        <G transform="translate(-3.12 -2.3)">
          <Use fill="#000" xlinkHref="#prefix__l" />
          <Use fill="url(#prefix__a)" xlinkHref="#prefix__l" />
        </G>
        <Path
          fill="url(#prefix__m)"
          d="M2.65 19.608L27.243 4.24 24.593 0 0 15.368z"
          transform="translate(-3.12 -2.3)"
        />
      </G>
    </Svg>
  );
};

export default NA;
