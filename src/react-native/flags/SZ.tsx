import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Ellipse,
  G,
  Mask,
  Use,
  Circle,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const SZ = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#486BCA" />
          <Stop offset="100%" stopColor="#3E5FBA" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFDF20" />
          <Stop offset="100%" stopColor="#FFDA00" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#CF1615" />
          <Stop offset="100%" stopColor="#B20D0C" />
        </LinearGradient>
        <LinearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <Ellipse id="prefix__e" cx={4.5} cy={2.5} rx={4.5} ry={2.5} />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v3H0zM0 12h21v3H0z" />
        <Path fill="url(#prefix__c)" d="M0 3h21v9H0z" />
        <Path fill="url(#prefix__d)" d="M0 4h21v7H0z" />
        <G transform="translate(6 5)">
          <Mask id="prefix__g" fill="#fff">
            <Use xlinkHref="#prefix__e" />
          </Mask>
          <Use fill="url(#prefix__a)" xlinkHref="#prefix__e" />
          <Path
            fill="url(#prefix__f)"
            d="M0 0h5v5H1z"
            mask="url(#prefix__g)"
            transform="matrix(-1 0 0 1 5 0)"
          />
          <Circle
            cx={5.5}
            cy={2.5}
            r={1}
            fill="#1A1A1A"
            mask="url(#prefix__g)"
          />
          <Circle
            cx={3.5}
            cy={2.5}
            r={1}
            fill="#F6F6F6"
            mask="url(#prefix__g)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default SZ;
