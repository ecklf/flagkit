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

const FlagIconIN = ({
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
          <Stop offset="0%" stopColor="#FFA44A" />
          <Stop offset="100%" stopColor="#FF9934" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#1A9F0B" />
          <Stop offset="100%" stopColor="#138806" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v5H0z" />
        <Path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <Path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <Circle cx={10.5} cy={7.5} r={1.5} fill="#181A93" fillOpacity={0.15} />
        <Path
          fill="#181A93"
          fillRule="nonzero"
          d="M10.5 9.5a2 2 0 110-4 2 2 0 010 4zm0-.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        />
        <Circle cx={10.5} cy={7.5} r={1} fill="#181A93" />
      </G>
    </Svg>
  );
};

export default FlagIconIN;
