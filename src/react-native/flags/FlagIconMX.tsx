import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconMX = ({
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
          <Stop offset="0%" stopColor="#E3283E" />
          <Stop offset="100%" stopColor="#CC162C" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#128A60" />
          <Stop offset="100%" stopColor="#0B6848" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M10 0h11v15H10z" />
        <Path fill="url(#prefix__c)" d="M0 0h7v15H0z" />
        <Path fill="url(#prefix__a)" d="M7 0h7v15H7z" />
        <Path
          fill="#8C9157"
          fillRule="nonzero"
          d="M8 7c0 .901.482 1.72 1.247 2.164a.5.5 0 00.502-.865A1.499 1.499 0 019 7a.5.5 0 00-1 0zm3.846 2.107A2.498 2.498 0 0013 7a.5.5 0 10-1 0c0 .518-.264.99-.693 1.265a.5.5 0 10.539.842z"
        />
        <Ellipse cx={10.5} cy={6.5} fill="#C59262" rx={1} ry={1.5} />
      </G>
    </Svg>
  );
};

export default FlagIconMX;
