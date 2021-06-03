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

const FlagIconPK = ({
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
          <Stop offset="0%" stopColor="#0A632F" />
          <Stop offset="100%" stopColor="#05411E" />
        </LinearGradient>
        <Path
          id="prefix__d"
          d="M15.978 10.878a4.182 4.182 0 01-2.65.95c-2.383 0-4.314-2.015-4.314-4.5 0-2.486 1.931-4.5 4.314-4.5.999 0 1.919.354 2.65.95a4.165 4.165 0 00-1.043-.132c-2.165 0-3.92 1.648-3.92 3.682 0 2.033 1.755 3.681 3.92 3.681.361 0 .711-.045 1.043-.131zm.036-2.77l-1.175.838.434-1.377-1.16-.86 1.443-.013.458-1.368.459 1.368 1.443.013-1.16.86.434 1.377-1.176-.838z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0-.002h21v15H0z" />
        <Path fill="url(#prefix__a)" d="M0-.002h6v15H0z" />
        <G transform="rotate(-45 13.465 7.328)">
          <Use fill="#000" xlinkHref="#prefix__d" />
          <Use fill="url(#prefix__a)" xlinkHref="#prefix__d" />
        </G>
      </G>
    </Svg>
  );
};

export default FlagIconPK;
