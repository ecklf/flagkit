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

const FlagIconBR = ({
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
          <Stop offset="0%" stopColor="#05AB41" />
          <Stop offset="100%" stopColor="#019C39" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#053087" />
          <Stop offset="100%" stopColor="#012877" />
        </LinearGradient>
        <Circle id="prefix__c" cx={3.5} cy={3.5} r={3.5} />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v15H0z" />
        <Path
          fill="#FDD216"
          d="M2.422 7.773c-.233-.15-.228-.398 0-.546l7.656-4.954a.85.85 0 01.844 0l7.656 4.954c.233.15.228.398 0 .546l-7.656 4.954a.85.85 0 01-.844 0L2.422 7.773z"
        />
        <G transform="translate(7 4)">
          <Mask id="prefix__e" fill="#fff">
            <Use xlinkHref="#prefix__c" />
          </Mask>
          <Use fill="url(#prefix__d)" xlinkHref="#prefix__c" />
          <Path
            fill="#FFF"
            fillRule="nonzero"
            d="M-.1 2.974c.265-.215 1.463-.04 3.534.512 1.474.394 3.173 1.262 3.562 1.742l.314.388.778-.629-.315-.388c-.55-.68-2.421-1.636-4.081-2.079-2.586-.69-3.758-.86-4.422-.323l-.388.314.629.777.389-.314z"
            mask="url(#prefix__e)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default FlagIconBR;
