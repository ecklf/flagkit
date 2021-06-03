import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const ET = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#20AA46" />
          <Stop offset="100%" stopColor="#168835" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E92F3B" />
          <Stop offset="100%" stopColor="#D81824" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FADF50" />
          <Stop offset="100%" stopColor="#FCDC34" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#205CCA" />
          <Stop offset="100%" stopColor="#154BAD" />
        </LinearGradient>
        <LinearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFDB3D" />
          <Stop offset="100%" stopColor="#FDD420" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v5H0z" />
        <Path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <Path fill="url(#prefix__d)" d="M0 5h21v5H0z" />
        <Circle cx={10.5} cy={7.5} r={3.5} fill="url(#prefix__e)" />
        <Path
          fill="url(#prefix__f)"
          fillRule="nonzero"
          d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722L10.5 8.475zm0-.614l.544.388-.2-.637.536-.398-.668-.006-.212-.634-.212.634-.668.006.537.398-.201.637.544-.388z"
        />
      </G>
    </Svg>
  );
};

export default ET;
