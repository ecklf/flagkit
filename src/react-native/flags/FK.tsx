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
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FK = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#07319C" />
          <Stop offset="100%" stopColor="#00247E" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#1F8BDE" />
          <Stop offset="100%" stopColor="#1075C2" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFF" />
          <Stop offset="100%" stopColor="#F0F0F0" />
        </LinearGradient>
        <LinearGradient id="prefix__g" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#187536" />
          <Stop offset="100%" stopColor="#0E5023" />
        </LinearGradient>
        <LinearGradient id="prefix__h" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DB1E36" />
          <Stop offset="100%" stopColor="#D51931" />
        </LinearGradient>
        <Path
          id="prefix__c"
          d="M0 3.5V.51C0 .228.215 0 .498 0h4.004C4.777 0 5 .227 5 .51V3.5C5 6 2.5 7 2.5 7S0 6 0 3.5z"
        />
        <Path
          id="prefix__i"
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <G transform="translate(13 4)">
          <Mask id="prefix__f" fill="#fff">
            <Use xlinkHref="#prefix__c" />
          </Mask>
          <Use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
          <Path
            fill="url(#prefix__e)"
            fillRule="nonzero"
            d="M0 3.5V.51C0 .228.215 0 .498 0h4.004C4.777 0 5 .227 5 .51V3.5C5 6 2.5 7 2.5 7S0 6 0 3.5zm2.644 2.87c.263-.15.527-.334.772-.554C4.099 5.2 4.5 4.439 4.5 3.5V.51C4.5.5.499.5.499.5l.001 3c0 .939.401 1.701 1.084 2.316a4.398 4.398 0 00.916.632c.043-.022.091-.048.144-.078z"
            mask="url(#prefix__f)"
          />
          <Path
            fill="url(#prefix__g)"
            d="M1.158 3.475C1.071 3.212 1.216 3 1.495 3h2.01c.273 0 .425.209.337.475l-.184.55c-.087.263-.295.306-.524.133 0 0 .088-.158-.634-.158s-.634.158-.634.158c-.202.189-.436.133-.524-.133l-.184-.55z"
            mask="url(#prefix__f)"
          />
          <Path
            fill="url(#prefix__a)"
            d="M1.5 3c.27.054.59-.5 1-.5.437 0 .726.567 1 .5.246-.06.5-.739.5-1 0-.552-.672-1-1.5-1S1 1.448 1 2c0 .28.223.945.5 1z"
            mask="url(#prefix__f)"
          />
          <Path
            fill="url(#prefix__a)"
            fillRule="nonzero"
            d="M-.323 6.177l.35-.35.3-.3a.244.244 0 01.346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 01.346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 01.346 0l.3.3.177.177.354-.354-.177-.177-.3-.3a.744.744 0 00-1.054 0l-.3.3a.244.244 0 01-.346 0l-.3-.3a.744.744 0 00-1.054 0l-.3.3a.244.244 0 01-.346 0l-.3-.3a.744.744 0 00-1.054 0l-.3.3-.35.35L-.854 6l.354.354.177-.177zM-.323 4.677l.35-.35.3-.3a.244.244 0 01.346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 01.346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 01.346 0l.3.3.177.177.354-.354-.177-.177-.3-.3a.744.744 0 00-1.054 0l-.3.3a.244.244 0 01-.346 0l-.3-.3a.744.744 0 00-1.054 0l-.3.3a.244.244 0 01-.346 0l-.3-.3a.744.744 0 00-1.054 0l-.3.3-.35.35-.177.177.354.354.177-.177zM-.323 7.677l.35-.35.3-.3a.244.244 0 01.346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 01.346 0l.3.3c.291.29.762.291 1.054 0l.3-.3a.244.244 0 01.346 0l.3.3.177.177.354-.354-.177-.177-.3-.3a.744.744 0 00-1.054 0l-.3.3a.244.244 0 01-.346 0l-.3-.3a.744.744 0 00-1.054 0l-.3.3a.244.244 0 01-.346 0l-.3-.3a.744.744 0 00-1.054 0l-.3.3-.35.35-.177.177.354.354.177-.177z"
            mask="url(#prefix__f)"
          />
        </G>
        <Use fill="url(#prefix__h)" xlinkHref="#prefix__i" />
        <Path
          stroke="#FFF"
          strokeWidth={0.5}
          d="M3.25 3.115L-.676-.25H.5l.145.047L4.08 2.25h.848L9.25-.451V.25c0 .222-.128.47-.313.602L5.75 3.13v.756l3.225 2.764c.282.242.138.601-.225.601-.193 0-.442-.08-.604-.195L4.92 4.75h-.848L-.25 7.451v-1.08l3.5-2.5v-.756z"
        />
        <Path
          fill="url(#prefix__a)"
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
        />
        <Path fill="url(#prefix__h)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
      </G>
    </Svg>
  );
};

export default FK;
