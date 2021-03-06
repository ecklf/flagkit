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

const FlagIconTW = ({
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
        <LinearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="93.767%">
          <Stop offset="0%" stopColor="#FE3030" />
          <Stop offset="100%" stopColor="red" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#0909B6" />
          <Stop offset="100%" stopColor="#000096" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__c)" d="M0 8h11V0H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M5.5 5.25l-.957 1.06.073-1.426-1.426.073L4.25 4l-1.06-.957 1.426.073-.073-1.426.957 1.06.957-1.06-.073 1.426 1.426-.073L6.75 4l1.06.957-1.426-.073.073 1.426z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconTW;
