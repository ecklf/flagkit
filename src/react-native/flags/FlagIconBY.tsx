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

const FlagIconBY = ({
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
          <Stop offset="0%" stopColor="#E54252" />
          <Stop offset="100%" stopColor="#C63442" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#5CBE6B" />
          <Stop offset="100%" stopColor="#4EA55B" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v10H0z" />
        <Path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M3 12.75V15H0V0h3v2.25L2.5 3l.5.75v1.5L2.5 6l.5.75v1.5L2.5 9l.5.75v1.5l-.5.75.5.75z"
        />
        <Path
          fill="url(#prefix__b)"
          d="M-1.5 3l1-1.5L.5 3l-1 1.5-1-1.5zm0 3l1-1.5L.5 6l-1 1.5-1-1.5zm0 3l1-1.5L.5 9l-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zM.5 1.5l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5zm0 3l1-1.5 1 1.5-1 1.5-1-1.5z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconBY;
