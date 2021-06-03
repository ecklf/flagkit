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
/* SVGR has dropped some elements not supported by react-native-svg: filter */

interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconYT = ({
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
        <LinearGradient id="prefix__f" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#1B2CA9" />
          <Stop offset="100%" stopColor="#132294" />
        </LinearGradient>
        <LinearGradient id="prefix__i" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E6402C" />
          <Stop offset="100%" stopColor="#D1321F" />
        </LinearGradient>
        <LinearGradient id="prefix__j" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#D0D0D0" />
          <Stop offset="100%" stopColor="#C4C4C4" />
        </LinearGradient>
        <LinearGradient id="prefix__k" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <LinearGradient id="prefix__l" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#F7E04B" />
          <Stop offset="100%" stopColor="#EAD135" />
        </LinearGradient>
        <Path
          id="prefix__b"
          d="M0 .491A.49.49 0 01.498 0h4.004A.5.5 0 015 .491v5.018a.535.535 0 01-.5.522S3 6 2.5 6.94C2 6 .5 6.03.5 6.03a.54.54 0 01-.5-.522V.491z"
        />
        <Path id="prefix__e" d="M0 0h5v3H0z" />
        <Path id="prefix__h" d="M0 3h5v4H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <G transform="translate(8 4)">
          <Mask id="prefix__c" fill="#fff">
            <Use xlinkHref="#prefix__b" />
          </Mask>
          <Use fill="#D8D8D8" xlinkHref="#prefix__b" />
          <Path
            stroke="#979797"
            d="M4.5.5V.491.5zm0 0h.002H4.5zm-4 0v5.009s.02.022-.01.022H.5c.342-.004.793.048 1.25.213.285.102.538.24.75.418.212-.178.465-.316.75-.418.444-.16.882-.214 1.22-.213.02-.005.03-.017.03-.022V.5s0 0 0 0h-4z"
          />
          <G mask="url(#prefix__c)">
            <Use fill="#000" xlinkHref="#prefix__e" />
            <Use fill="url(#prefix__f)" xlinkHref="#prefix__e" />
          </G>
          <G mask="url(#prefix__c)">
            <Use fill="#000" xlinkHref="#prefix__h" />
            <Use fill="url(#prefix__i)" xlinkHref="#prefix__h" />
          </G>
        </G>
        <G transform="translate(14 3)">
          <Path
            fill="url(#prefix__j)"
            d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
          />
          <Circle
            cx={1.75}
            cy={1.75}
            r={1}
            fill="url(#prefix__k)"
            fillOpacity={0.3}
          />
        </G>
        <G transform="matrix(-1 0 0 1 7 3)">
          <Path
            fill="url(#prefix__j)"
            d="M1.039 1.726v-.464L1.5 1S1.045.444 1.27.444C1.545.444 2.7.81 3 1c.3.19.453.418.496.85.042.431-.316.981-.316.981L3 3.25l.788-.179s.128.826-.452 1.429c-.58.603-1.395.49-1.395.49l-.164-.49s-.53.206-.843.674C.62 5.642.533 6.45 1.039 6.95c.506.5 1.341.457 1.74-.245 0 0 .159-.62-.21-.912-.367-.291-.616.311-.628.278-.071-.21-.164-.57.428-.57s.896.637.81 1.126c-.084.489-.255.953-1.402 1.083C.631 7.84.336 6.386.336 6.386s-.292-1.356 0-2.335c.292-.98.725-1.004 1.605-1.541.88-.538-.531-.183-.531-.183s-.67.504-.88.32c-.21-.183.509-.921.509-.921z"
          />
          <Circle
            cx={1.75}
            cy={1.75}
            r={1}
            fill="url(#prefix__k)"
            fillOpacity={0.3}
          />
        </G>
        <Path
          fill="url(#prefix__a)"
          d="M9.634 5a1 1 0 101.732 0 1 1 0 01-1.732 0z"
        />
        <Path
          fill="url(#prefix__l)"
          d="M9.5 9a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconYT;
