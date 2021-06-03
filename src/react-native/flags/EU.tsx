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

const EU = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#043CAE" />
          <Stop offset="100%" stopColor="#00339A" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD429" />
          <Stop offset="100%" stopColor="#FC0" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__c)"
          d="M10.5 3l-.707.207L10 2.5l-.207-.707L10.5 2l.707-.207L11 2.5l.207.707L10.5 3zm0 10l-.707.207L10 12.5l-.207-.707.707.207.707-.207L11 12.5l.207.707L10.5 13zm5-5l-.707.207L15 7.5l-.207-.707L15.5 7l.707-.207L16 7.5l.207.707L15.5 8zm-10 0l-.707.207L5 7.5l-.207-.707L5.5 7l.707-.207L6 7.5l.207.707L5.5 8zm9.33-2.5l-.707.207L14.33 5l-.207-.707.707.207.707-.207L15.33 5l.207.707-.707-.207zm-8.66 5l-.707.207L5.67 10l-.207-.707.707.207.707-.207L6.67 10l.207.707-.707-.207zM13 3.67l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L13 3.67zm-5 8.66l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L8 12.33zm6.83-1.83l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm-8.66-5l-.707.207L5.67 5l-.207-.707.707.207.707-.207L6.67 5l.207.707L6.17 5.5zM13 12.33l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707L13 12.33zM8 3.67l-.707.207.207-.707-.207-.707L8 2.67l.707-.207-.207.707.207.707L8 3.67z"
        />
      </G>
    </Svg>
  );
};

export default EU;
