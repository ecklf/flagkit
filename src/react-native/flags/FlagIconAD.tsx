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

const FlagIconAD = ({
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
          <Stop offset="0%" stopColor="#1537D1" />
          <Stop offset="100%" stopColor="#0522A5" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#EA3058" />
          <Stop offset="100%" stopColor="#CE173E" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFCF3C" />
          <Stop offset="100%" stopColor="#FECB2F" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__c)" d="M10 0h11v15H10z" />
        <Path fill="url(#prefix__d)" d="M7 0h7v15H7z" />
        <Path fill="#FFEDB1" d="M9.5 6.5h1V7h-1z" />
        <Path
          fill="#D32E28"
          fillRule="nonzero"
          d="M9.665 7.96c.025.295.292.54.587.54h.496a.607.607 0 00.587-.54l.122-1.46H9.543l.122 1.46zm-.624-1.465A.446.446 0 019.495 6h2.01c.273 0 .477.216.454.495l-.126 1.506c-.046.552-.53.999-1.085.999h-.496c-.553 0-1.039-.443-1.085-.999L9.04 6.495z"
        />
        <Path fill="#D32E28" d="M9.5 7h2v.5h-2z" />
      </G>
    </Svg>
  );
};

export default FlagIconAD;
