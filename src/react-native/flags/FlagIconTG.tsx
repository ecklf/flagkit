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

const FlagIconTG = ({
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
          <Stop offset="0%" stopColor="#FFD44D" />
          <Stop offset="100%" stopColor="#FFCD2F" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#159A74" />
          <Stop offset="100%" stopColor="#0C6A4F" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#ED1F45" />
          <Stop offset="100%" stopColor="#D01739" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__c)"
          d="M9 0h12v3H9V0zm0 6h12v3H9V6zm-9 6h21v3H0v-3z"
        />
        <Path fill="url(#prefix__d)" d="M0 0h9v9H0z" />
        <Path
          fill="url(#prefix__a)"
          d="M4.5 5.67L2.737 6.927l.65-2.065-1.74-1.29 2.165-.019L4.5 1.5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconTG;
