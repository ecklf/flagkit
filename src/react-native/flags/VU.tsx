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

const VU = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#27AB53" />
          <Stop offset="100%" stopColor="#219447" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#EC2547" />
          <Stop offset="100%" stopColor="#CE1A39" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD449" />
          <Stop offset="100%" stopColor="#FDCD34" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M.2 9h21v6H.2z" />
        <Path fill="url(#prefix__c)" d="M.2 0h21v6H.2z" />
        <Path fill="url(#prefix__d)" d="M8.2 6h13v3h-13l-8 6V0l8 6z" />
        <Path
          fill="url(#prefix__e)"
          fillRule="nonzero"
          d="M6.867 7.5L-.6 1.9l-.4-.3.6-.8.4.3L7.867 7H21.2v1H7.7l.3-.1-8 6-.4.3-.6-.8.4-.3 7.467-5.6z"
        />
        <Path
          fill="url(#prefix__e)"
          d="M2.7 9a1.5 1.5 0 111.5-1.5c0 .727-.813 2.363-1.5 2.5-.096.02.101-1 0-1zm0-.75c.276.25.5-.474.5-.75a.5.5 0 00-1 0c0 .276.224 1 .5.75z"
        />
      </G>
    </Svg>
  );
};

export default VU;
