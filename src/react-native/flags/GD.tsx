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
  Circle,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const GD = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#E42235" />
          <Stop offset="100%" stopColor="#CE1225" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#079B77" />
          <Stop offset="100%" stopColor="#007B5D" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD938" />
          <Stop offset="100%" stopColor="#FDD117" />
        </LinearGradient>
        <LinearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFD93B" />
          <Stop offset="100%" stopColor="#FDD117" />
        </LinearGradient>
        <LinearGradient id="prefix__h" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E21C30" />
          <Stop offset="100%" stopColor="#CE1225" />
        </LinearGradient>
        <Path id="prefix__c" d="M0 0h17v11H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <G transform="translate(2 2)">
          <Mask id="prefix__f" fill="#fff">
            <Use xlinkHref="#prefix__c" />
          </Mask>
          <Use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
          <Path
            fill="url(#prefix__e)"
            d="M1.295 5.599c.283.453.69.752 1.068.829.209.042-.173-.914-.007-1.018.142-.088.825.706.885.54.137-.38.056-.921-.25-1.411-.439-.703-.456-.239-1.643-.742.124.72-.492 1.1-.053 1.802z"
            mask="url(#prefix__f)"
          />
          <Path
            fill="url(#prefix__g)"
            d="M0 0h17L8.5 5.5 0 0zm0 11l8.5-5.5L17 11H0z"
            mask="url(#prefix__f)"
          />
          <Circle
            cx={8.5}
            cy={5.5}
            r={2.5}
            fill="url(#prefix__h)"
            mask="url(#prefix__f)"
          />
          <Path
            fill="url(#prefix__e)"
            d="M8.5 6.271l-1.176.847.442-1.38-1.168-.856 1.449-.006L8.5 3.5l.453 1.376 1.45.006-1.17.856.443 1.38z"
            mask="url(#prefix__f)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default GD;
