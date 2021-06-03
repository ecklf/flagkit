import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconKN = ({
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
          <Stop offset="0%" stopColor="#1EC160" />
          <Stop offset="100%" stopColor="#169E4D" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DF2A40" />
          <Stop offset="100%" stopColor="#CC162C" />
        </LinearGradient>
        <LinearGradient
          id="prefix__d"
          x1="50%"
          x2="50%"
          y1="16.742%"
          y2="82.422%"
        >
          <Stop offset="0%" stopColor="#FFD956" />
          <Stop offset="100%" stopColor="#FCD036" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M.001 10l21-10h-21z" />
        <Path fill="url(#prefix__c)" d="M.001 15h21V5z" />
        <Path
          fill="url(#prefix__d)"
          d="M.59 19L25.182 3.632 20.413-4-4.18 11.368z"
        />
        <Path
          fill="url(#prefix__e)"
          d="M-.47 17.304L24.122 1.936l-2.65-4.24L-3.12 13.064z"
        />
        <Path
          fill="url(#prefix__a)"
          d="M15.233 5.848l-.709 1.123-.46-1.246-1.287-.327 1.043-.823-.087-1.325 1.105.738 1.234-.492-.36 1.278.848 1.022zM7.233 10.698l-.709 1.123-.46-1.246-1.287-.327 1.043-.823L5.733 8.1l1.105.738 1.234-.492-.36 1.278.848 1.022z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconKN;
