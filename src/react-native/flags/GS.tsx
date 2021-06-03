import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  Ellipse,
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

const GS = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DB1E36" />
          <Stop offset="100%" stopColor="#D51931" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#1E1E1E" />
          <Stop offset="100%" />
        </LinearGradient>
        <LinearGradient id="prefix__h" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#A2ADB0" />
          <Stop offset="100%" stopColor="#8B9497" />
        </LinearGradient>
        <LinearGradient id="prefix__i" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#4F4F4F" />
          <Stop offset="100%" stopColor="#2B2B2B" />
        </LinearGradient>
        <LinearGradient id="prefix__k" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FEC241" />
          <Stop offset="100%" stopColor="#FEBB2C" />
        </LinearGradient>
        <LinearGradient id="prefix__l" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#A84B14" />
          <Stop offset="100%" stopColor="#913F0E" />
        </LinearGradient>
        <LinearGradient id="prefix__m" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#CFB063" />
          <Stop offset="100%" stopColor="#BEA157" />
        </LinearGradient>
        <LinearGradient id="prefix__n" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#2D42FF" />
          <Stop offset="100%" stopColor="#0B24FC" />
        </LinearGradient>
        <LinearGradient id="prefix__o" x1="0%" x2="100%" y1="0%" y2="50%">
          <Stop offset="0%" stopColor="#E3DC3D" />
          <Stop offset="100%" stopColor="#CFC82A" />
        </LinearGradient>
        <LinearGradient id="prefix__p" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#7F7D7D" />
          <Stop offset="100%" stopColor="#656263" />
        </LinearGradient>
        <LinearGradient id="prefix__s" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#0F8012" />
          <Stop offset="100%" stopColor="#0B6A0D" />
        </LinearGradient>
        <LinearGradient id="prefix__t" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFCF44" />
          <Stop offset="100%" stopColor="#FCC72E" />
        </LinearGradient>
        <Ellipse id="prefix__d" cx={0.5} cy={1.5} rx={1} ry={1.5} />
        <Ellipse id="prefix__g" cx={0.5} cy={1.5} rx={1} ry={1.5} />
        <Path
          id="prefix__q"
          d="M.007.506A.489.489 0 01.495 0h2.01c.273 0 .498.23.502.506L3.03 2.25a.52.52 0 01-.207.388l-1.095.722a.414.414 0 01-.417 0L.24 2.639a.526.526 0 01-.21-.388L.007.506z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__a)"
          fillRule="nonzero"
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
        />
        <Path
          fill="url(#prefix__c)"
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
        />
        <Path
          fill="url(#prefix__a)"
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
        />
        <Path fill="url(#prefix__c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        <G transform="translate(18 8)">
          <Mask id="prefix__f" fill="#fff">
            <Use xlinkHref="#prefix__d" />
          </Mask>
          <Use fill="url(#prefix__e)" xlinkHref="#prefix__d" />
          <Ellipse
            cy={2}
            fill="url(#prefix__a)"
            mask="url(#prefix__f)"
            rx={1}
            ry={1.5}
          />
        </G>
        <G transform="translate(14 8)">
          <Mask id="prefix__j" fill="#fff">
            <Use xlinkHref="#prefix__g" />
          </Mask>
          <Use fill="url(#prefix__h)" xlinkHref="#prefix__g" />
          <Ellipse
            cx={1}
            cy={2}
            fill="url(#prefix__i)"
            mask="url(#prefix__j)"
            rx={1}
            ry={1.5}
          />
        </G>
        <Path
          fill="url(#prefix__k)"
          d="M16.5 12.5c.828.5 1.5.276 1.5 0s-.672-.5-1.5-.5-1.5.224-1.5.5.672.5 1.5 0z"
        />
        <Circle cx={18.5} cy={5.5} r={1} fill="url(#prefix__a)" />
        <Circle cx={16.5} cy={4.5} r={1} fill="url(#prefix__l)" />
        <Circle cx={16.5} cy={3.75} r={1} fill="url(#prefix__m)" />
        <Circle cx={16.5} cy={11.5} r={1} fill="url(#prefix__a)" />
        <Circle cx={14.5} cy={5.5} r={1} fill="url(#prefix__a)" />
        <Circle cx={15} cy={6.5} r={1} fill="url(#prefix__n)" />
        <Circle cx={18} cy={6.5} r={1} fill="url(#prefix__n)" />
        <Circle cx={19} cy={8} r={1} fill="url(#prefix__o)" />
        <Path
          fill="url(#prefix__p)"
          d="M16 7.5l-.5.5h2l-.5-.5.5-1.5s-.448-1-1-1-1 1-1 1l.5 1.5z"
        />
        <Path
          fill="#5D0543"
          d="M16.5 6.5s.5-.112.5-.38c0-.008-.5-.12-.5-.12s-.5.112-.5.12c0 .268.5.38.5.38z"
        />
        <G transform="translate(15 8)">
          <Mask id="prefix__r" fill="#fff">
            <Use xlinkHref="#prefix__q" />
          </Mask>
          <Use fill="url(#prefix__a)" xlinkHref="#prefix__q" />
          <Circle
            cx={2.5}
            cy={2.5}
            r={1}
            fill="#225DA4"
            mask="url(#prefix__r)"
          />
          <Circle
            cx={0.5}
            cy={1.5}
            r={1}
            fill="#225DA4"
            mask="url(#prefix__r)"
          />
          <Path
            fill="url(#prefix__s)"
            d="M0 0h3L1.5 3z"
            mask="url(#prefix__r)"
          />
          <Circle
            cx={1.5}
            cy={1.5}
            r={1}
            fill="url(#prefix__t)"
            mask="url(#prefix__r)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default GS;
