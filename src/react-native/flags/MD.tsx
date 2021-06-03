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

const MD = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#EB1C43" />
          <Stop offset="100%" stopColor="#CA1134" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#115BCB" />
          <Stop offset="100%" stopColor="#094AAC" />
        </LinearGradient>
        <LinearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD953" />
          <Stop offset="100%" stopColor="#FFD130" />
        </LinearGradient>
        <Path id="prefix__e" d="M7 0h7v15H7z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M10 0h11v15H10z" />
        <Path fill="url(#prefix__c)" d="M0 0h7v15H0z" />
        <Use fill="#000" xlinkHref="#prefix__e" />
        <Use fill="url(#prefix__f)" xlinkHref="#prefix__e" />
        <Path
          fill="#AF7F59"
          d="M9 6h1l.5-1.5L11 6h1v3l-1.5 1L9 9V6zm1 1v1.5h1V7h-1z"
        />
      </G>
    </Svg>
  );
};

export default MD;
