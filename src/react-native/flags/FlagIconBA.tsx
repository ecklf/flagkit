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

const FlagIconBA = ({
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
          <Stop offset="0%" stopColor="#0B36B2" />
          <Stop offset="100%" stopColor="#042993" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD045" />
          <Stop offset="100%" stopColor="#FECA2F" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__c)" d="M17 15V0H6.5z" />
        <Path
          fill="url(#prefix__a)"
          d="M13 14l-.707.207.207-.707-.207-.707L13 13l.707-.207-.207.707.207.707zM11 11l-.707.207.207-.707-.207-.707L11 10l.707-.207-.207.707.207.707zM9 8l-.707.207L8.5 7.5l-.207-.707L9 7l.707-.207L9.5 7.5l.207.707zM7 5l-.707.207L6.5 4.5l-.207-.707L7 4l.707-.207L7.5 4.5l.207.707zM5 2l-.707.207L4.5 1.5 4.293.793 5 1l.707-.207L5.5 1.5l.207.707z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconBA;
