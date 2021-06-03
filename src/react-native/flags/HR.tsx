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

const HR = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#FF202D" />
          <Stop offset="100%" stopColor="#FD0D1B" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#2027AC" />
          <Stop offset="100%" stopColor="#191F94" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FF212E" />
          <Stop offset="100%" stopColor="#FD0D1B" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v5H0z" />
        <Path
          fill="#1895DB"
          d="M8 4l.5-.5.5.5v1H8V4zm2 0l.5-.5.5.5v1h-1V4zm2 0l.5-.5.5.5v1h-1V4z"
          opacity={0.5}
        />
        <Path
          fill="#191F94"
          d="M9 4l.5-.5.5.5v1H9V4zm2 0l.5-.5.5.5v1h-1V4z"
          opacity={0.5}
        />
        <Path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M0 10V5h21v5H0zm12 0h1l-.273.547c-.126.25-.454.453-.727.453v-1zm-2 0h1v1h-1v-1zm-2 0h1v1a.876.876 0 01-.727-.453L8 10z"
        />
        <Path
          fill="url(#prefix__d)"
          d="M10 5h1v1h-1V5zm2 0h.5l.5 1h-1V5zM8.5 5H9v1H8l.5-1zM9 6h1v1H9V6zm2 0h1v1h-1V6zm-1 1h1v1h-1V7zm2 0h1v1h-1V7zm-1 1h1v1h-1V8zM8 7h1v1H8V7zm1 1h1v1H9V8zM8 9h1v1H8V9zm2 0h1v1h-1V9zm2 0h1v1h-1V9zm-1 1h1v1h-1v-1zm-2 0h1v1H9v-1z"
        />
      </G>
    </Svg>
  );
};

export default HR;
