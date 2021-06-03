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

const GL = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#E82245" />
          <Stop offset="100%" stopColor="#CC1838" />
        </LinearGradient>
        <Path id="prefix__c" d="M0 0h21v8H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Use fill="#000" xlinkHref="#prefix__c" />
        <Use fill="url(#prefix__a)" xlinkHref="#prefix__c" />
        <Path fill="url(#prefix__d)" d="M3 8H0v7h21V8H11a4 4 0 10-8 0z" />
        <Path fill="url(#prefix__a)" d="M3 8a4 4 0 108 0H3z" />
      </G>
    </Svg>
  );
};

export default GL;
