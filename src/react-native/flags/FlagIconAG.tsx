import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Ellipse,
  Mask,
  Use,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconAG = ({
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
          <Stop offset="0%" stopColor="#E2243B" />
          <Stop offset="100%" stopColor="#CC162C" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFCF3C" />
          <Stop offset="100%" stopColor="#FECB2F" />
        </LinearGradient>
        <LinearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#1984D8" />
          <Stop offset="100%" stopColor="#1175C4" />
        </LinearGradient>
        <Path id="prefix__c" d="M0 0h21L10.5 15z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path
          d="M8.5 7a2 2 0 00.998 1.731m2.078-.045c.556-.355.924-.978.924-1.686"
          opacity={0.75}
        />
        <Ellipse
          cx={10.5}
          cy={6.5}
          fill="#FFF"
          fillOpacity={0.5}
          rx={1}
          ry={1.5}
        />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Mask id="prefix__f" fill="#fff">
          <Use xlinkHref="#prefix__c" />
        </Mask>
        <Use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
        <Path
          fill="url(#prefix__e)"
          d="M10.5 8.25l-1.722 1.907.131-2.566-2.566.131L8.25 6 6 4l2.909.5-.409-3 2 2.5 2-2.5-.409 3L15 4l-2.25 2 1.907 1.722-2.566-.131.131 2.566z"
          mask="url(#prefix__f)"
        />
        <Path fill="url(#prefix__g)" d="M0 6h21v4H0z" mask="url(#prefix__f)" />
        <Path fill="url(#prefix__a)" d="M0 10h21v5H0z" mask="url(#prefix__f)" />
      </G>
    </Svg>
  );
};

export default FlagIconAG;
