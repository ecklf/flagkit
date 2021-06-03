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

const FlagIconMH = ({
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
          <Stop offset="0%" stopColor="#064DAE" />
          <Stop offset="100%" stopColor="#003D91" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#F18D36" />
          <Stop offset="100%" stopColor="#DB761E" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__c)" d="M21 0v4L0 15z" />
        <Path
          fill="url(#prefix__a)"
          d="M21 8V4L0 15zM4.839 4.372L4.5 2l-.339 2.372-.911-1.037.468 1.383-1.383-.468 1.037.911L1 5.5l2.372.339-1.037.911 1.383-.468-.468 1.383.911-1.037L4.5 9l.339-2.372.911 1.037-.468-1.383 1.383.468-1.037-.911L8 5.5l-2.372-.339 1.037-.911-1.383.468.468-1.383-.911 1.037z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconMH;
