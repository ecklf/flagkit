import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Mask,
  Use,
  Ellipse,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconKE = ({
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
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#018301" />
          <Stop offset="100%" stopColor="#006700" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DC0808" />
          <Stop offset="100%" stopColor="#BC0000" />
        </LinearGradient>
        <Path
          id="prefix__e"
          d="M2.5 10.5c1 0 2.5-1.962 2.5-5 0-3.038-1.5-5-2.5-5S0 2.462 0 5.5c0 3.038 1.5 5 2.5 5z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v4H0z" />
        <Path fill="url(#prefix__c)" d="M0 11h21v4H0z" />
        <Path fill="url(#prefix__a)" d="M0 4h21v7H0z" />
        <Path fill="url(#prefix__d)" d="M0 5h21v5H0z" />
        <G transform="translate(8 2)">
          <Mask id="prefix__f" fill="#fff">
            <Use xlinkHref="#prefix__e" />
          </Mask>
          <Use fill="#BC0000" xlinkHref="#prefix__e" />
          <Ellipse
            cx={-1.5}
            cy={5.5}
            fill="url(#prefix__b)"
            mask="url(#prefix__f)"
            rx={2.5}
            ry={5.5}
          />
          <Ellipse
            cx={6.5}
            cy={5.5}
            fill="url(#prefix__b)"
            mask="url(#prefix__f)"
            rx={2.5}
            ry={5.5}
          />
          <Path
            fill="url(#prefix__a)"
            d="M2.5 7C2.224 7 2 6.328 2 5.5S2.224 4 2.5 4s.5.672.5 1.5S2.776 7 2.5 7zm0-3C2.224 4 2 3.105 2 2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2zm0 7c-.276 0-.5-.895-.5-2s.224-2 .5-2 .5.895.5 2-.224 2-.5 2z"
            mask="url(#prefix__f)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default FlagIconKE;
