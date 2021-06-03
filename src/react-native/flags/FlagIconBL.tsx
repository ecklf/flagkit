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

const FlagIconBL = ({
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
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#216CD3" />
          <Stop offset="100%" stopColor="#1557B2" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#F7E14B" />
          <Stop offset="100%" stopColor="#F7DF3E" />
        </LinearGradient>
        <LinearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E12539" />
          <Stop offset="100%" stopColor="#CA192C" />
        </LinearGradient>
        <Path
          id="prefix__b"
          d="M.5 0h7v4.491c0 .557-.336 1.297-.76 1.66L5.147 7.518c-.633.542-1.662.54-2.292 0L1.259 6.15C.84 5.791.5 5.05.5 4.491V0z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <G transform="translate(6.5 5)">
          <Mask id="prefix__e" fill="#fff">
            <Use xlinkHref="#prefix__b" />
          </Mask>
          <Use fill="url(#prefix__c)" xlinkHref="#prefix__b" />
          <Path
            fill="url(#prefix__d)"
            d="M2 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zM2.5 6.5a.5.5 0 110-1 .5.5 0 010 1zM4 7a.5.5 0 110-1 .5.5 0 010 1zm1.5-.5a.5.5 0 110-1 .5.5 0 010 1z"
            mask="url(#prefix__e)"
          />
          <Path
            fill="url(#prefix__f)"
            d="M.5 3h7v2h-7z"
            mask="url(#prefix__e)"
          />
          <Circle cx={4} cy={4} r={1} fill="#FFF" mask="url(#prefix__e)" />
        </G>
        <Path
          fill="url(#prefix__d)"
          d="M6.5 3.5s2-.5 4-.5 4 .5 4 .5l-.5 2S12.25 5 10.5 5 7 5.5 7 5.5l-.5-2z"
        />
        <Path
          fill="#5E5216"
          d="M10.5 4.5a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-4 0a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconBL;
