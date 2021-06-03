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

const AS = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#071585" />
          <Stop offset="100%" stopColor="#000B64" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#D32636" />
          <Stop offset="100%" stopColor="#BA1827" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="35.4%" y1="0%" y2="89.131%">
          <Stop offset="0%" stopColor="#AB5423" />
          <Stop offset="100%" stopColor="#5A3719" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__c)"
          fillRule="nonzero"
          d="M22 15.5l-22-8 22-8z"
        />
        <Path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M21 .928L2.926 7.5 21 14.072z"
        />
        <Path
          fill="url(#prefix__d)"
          d="M16 7.038c-.118-.118-.806.156-.806.156L14 6s-.062-.663.5-1c.425-.255 1.22-.16 1.999-.5C17.746 3.956 19 3 19 3l-.802 2.206s.919.473.802.794c-.034.093-.93.385-1 .5-.132.22.524.286.32.538C17.733 7.765 17 8.5 17 8.5L16 8s.15-.811 0-.962z"
        />
        <Circle cx={13.5} cy={7.5} r={1} fill="#FFC322" />
        <Path
          fill="#FFC322"
          fillRule="nonzero"
          d="M12.5 9h5a.5.5 0 100-1h-5a.5.5 0 100 1z"
        />
        <Path
          fill="#FFC322"
          fillRule="nonzero"
          d="M14.197 10.46l3.5-1.5a.5.5 0 00-.394-.92l-3.5 1.5a.5.5 0 00.394.92z"
        />
      </G>
    </Svg>
  );
};

export default AS;
