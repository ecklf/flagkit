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

const SS = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E22A32" />
          <Stop offset="100%" stopColor="#D61C24" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#2CA244" />
          <Stop offset="100%" stopColor="#218736" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#185AC6" />
          <Stop offset="100%" stopColor="#104CAD" />
        </LinearGradient>
        <LinearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FDE14A" />
          <Stop offset="100%" stopColor="#FCDC34" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v4H0z" />
        <Path fill="url(#prefix__c)" d="M0 5h21v5H0z" />
        <Path fill="url(#prefix__a)" d="M0 4h21v1H0z" />
        <Path fill="url(#prefix__d)" d="M0 11h21v4H0z" />
        <Path fill="url(#prefix__a)" d="M0 10h21v1H0z" />
        <Path fill="url(#prefix__e)" d="M0 0l10 7.5L0 15z" />
        <Path
          fill="url(#prefix__f)"
          d="M3.836 7.987l-.683 1.28-.205-1.437-1.429-.254 1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z"
        />
      </G>
    </Svg>
  );
};

export default SS;
