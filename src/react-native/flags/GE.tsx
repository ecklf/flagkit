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

const GE = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#FF2B37" />
          <Stop offset="100%" stopColor="#FD0D1B" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" />
        <Path
          fill="#FD0D1B"
          d="M16.2 2.7L16 1.5h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2zM4.2 2.7L4 1.5h1l-.2 1.2L6 2.5v1l-1.2-.2.2 1.2H4l.2-1.2-1.2.2v-1l1.2.2zM4.2 11.7L4 10.5h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2H4l.2-1.2-1.2.2v-1l1.2.2zM16.2 11.7l-.2-1.2h1l-.2 1.2 1.2-.2v1l-1.2-.2.2 1.2h-1l.2-1.2-1.2.2v-1l1.2.2z"
        />
      </G>
    </Svg>
  );
};

export default GE;
