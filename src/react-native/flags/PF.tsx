import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
  Mask,
  Use,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const PF = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#E02639" />
          <Stop offset="100%" stopColor="#CA1A2C" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DC2235" />
          <Stop offset="100%" stopColor="#CA1A2C" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFA135" />
          <Stop offset="100%" stopColor="#FD9C2D" />
        </LinearGradient>
        <LinearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DF2034" />
          <Stop offset="100%" stopColor="#CA1A2C" />
        </LinearGradient>
        <LinearGradient id="prefix__h" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#0B4BAD" />
          <Stop offset="100%" stopColor="#08429A" />
        </LinearGradient>
        <Circle id="prefix__d" cx={2.5} cy={2.5} r={2.5} />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v4H0z" />
        <Path fill="url(#prefix__c)" d="M0 11h21v4H0z" />
        <Path fill="url(#prefix__a)" d="M0 4h21v7H0z" />
        <G transform="translate(8 5)">
          <Mask id="prefix__f" fill="#fff">
            <Use xlinkHref="#prefix__d" />
          </Mask>
          <Path
            fill="url(#prefix__e)"
            d="M0 0h5v2.5H0z"
            mask="url(#prefix__f)"
          />
          <Path fill="#FFF" d="M1 1.5h3l-.5 1h-2z" mask="url(#prefix__f)" />
          <Path
            fill="url(#prefix__g)"
            d="M2 0h1v1.495A.508.508 0 012.5 2a.495.495 0 01-.5-.505V0zM1 1s.75 1.5 1.5 1.5S4 1 4 1v1c0 .552-.443 1-.999 1H1.999A.997.997 0 011 2V1z"
            mask="url(#prefix__f)"
          />
          <Path fill="url(#prefix__h)" d="M0 3h5v2H0z" mask="url(#prefix__f)" />
          <Path fill="#FFF" d="M0 3.5h5V4H0z" mask="url(#prefix__f)" />
        </G>
      </G>
    </Svg>
  );
};

export default PF;
