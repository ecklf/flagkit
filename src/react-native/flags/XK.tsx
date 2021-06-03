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

const XK = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#2F5FBF" />
          <Stop offset="100%" stopColor="#244EA3" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E9C072" />
          <Stop offset="100%" stopColor="#CFA557" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M9 3.5l-.707.207L8.5 3l-.207-.707L9 2.5l.707-.207L9.5 3l.207.707L9 3.5zm3 0l-.707.207L11.5 3l-.207-.707L12 2.5l.707-.207L12.5 3l.207.707L12 3.5zm3 1l-.707.207L14.5 4l-.207-.707L15 3.5l.707-.207L15.5 4l.207.707L15 4.5zm2 2l-.707.207L16.5 6l-.207-.707L17 5.5l.707-.207L17.5 6l.207.707L17 6.5zm-13 0l-.707.207L3.5 6l-.207-.707L4 5.5l.707-.207L4.5 6l.207.707L4 6.5zm2-2l-.707.207L5.5 4l-.207-.707L6 3.5l.707-.207L6.5 4l.207.707L6 4.5z"
        />
        <Path
          fill="url(#prefix__c)"
          d="M9 10l-1-.5-1-2h1l1-1 .5-1 1-.5.5.5 1 .5v.5l.5.5L14 8l-.5 1.5L12 11l-.5-1-1.5 1v1l-.5-.5z"
        />
      </G>
    </Svg>
  );
};

export default XK;
