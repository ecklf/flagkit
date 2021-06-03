import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  Ellipse,
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

const FlagIconTM = ({
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
        <Ellipse id="prefix__d" cx={1.5} cy={1} rx={1.5} ry={1} />
        <Ellipse id="prefix__f" cx={1.5} cy={1} rx={1.5} ry={1} />
        <Ellipse id="prefix__h" cx={1.5} cy={1} rx={1.5} ry={1} />
        <Ellipse id="prefix__j" cx={1.5} cy={0.5} rx={1.5} ry={1} />
        <Ellipse id="prefix__k" cx={1.5} cy={1} rx={1.5} ry={1} />
        <LinearGradient id="prefix__a" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFF" />
          <Stop offset="100%" stopColor="#F0F0F0" />
        </LinearGradient>
        <LinearGradient id="prefix__b" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#30C375" />
          <Stop offset="100%" stopColor="#28AE67" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DE414F" />
          <Stop offset="100%" stopColor="#CA3745" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__c)" d="M3 0h3v15H3z" />
        <G transform="translate(3 1)">
          <Mask id="prefix__e" fill="#fff">
            <Use xlinkHref="#prefix__d" />
          </Mask>
          <Use fill="#FFF" xlinkHref="#prefix__d" />
          <Circle cx={1.5} cy={1} r={1} fill="#DD404F" mask="url(#prefix__e)" />
          <Path
            fill="#FBAF29"
            d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
            mask="url(#prefix__e)"
          />
        </G>
        <G transform="translate(3 12)">
          <Mask id="prefix__g" fill="#fff">
            <Use xlinkHref="#prefix__f" />
          </Mask>
          <Use fill="#FFF" xlinkHref="#prefix__f" />
          <Circle cx={1.5} cy={1} r={1} fill="#DD404F" mask="url(#prefix__g)" />
          <Path
            fill="#FBAF29"
            d="M0 0h1.5v1H0zM1.5 1H3v1H1.5z"
            mask="url(#prefix__g)"
          />
        </G>
        <G transform="translate(3 7)">
          <Mask id="prefix__i" fill="#fff">
            <Use xlinkHref="#prefix__h" />
          </Mask>
          <Use fill="#28AE67" xlinkHref="#prefix__h" />
          <Circle cx={1.5} cy={1} r={1} fill="#DD404F" mask="url(#prefix__i)" />
        </G>
        <Use
          fill="#28AE67"
          transform="translate(3 10)"
          xlinkHref="#prefix__j"
        />
        <G transform="translate(3 4)">
          <Mask id="prefix__l" fill="#fff">
            <Use xlinkHref="#prefix__k" />
          </Mask>
          <Use fill="#FBAF29" xlinkHref="#prefix__k" />
          <Circle cx={1.5} cy={1} r={1} fill="#DD404F" mask="url(#prefix__l)" />
          <Path
            fill="#28AE67"
            d="M0 0h1v2H0zM2 0h1v2H2z"
            mask="url(#prefix__l)"
          />
        </G>
        <Path
          fill="url(#prefix__a)"
          d="M11.117 3.179a.5.5 0 10.766.642.5.5 0 00-.766-.642zM9.821 5.117a.5.5 0 10-.642.766.5.5 0 00.642-.766zm-1-1a.5.5 0 10-.642.766.5.5 0 00.642-.766zm2-2a.5.5 0 10-.642.766.5.5 0 00.642-.766zm-.5 1.5a.5.5 0 10-.642.766.5.5 0 00.642-.766z"
        />
        <Path
          fill="url(#prefix__a)"
          d="M13.107 7.088a3.05 3.05 0 01-4.626-.366 3.05 3.05 0 004.26-4.26 3.05 3.05 0 01.366 4.626z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconTM;
