import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconIR = ({
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
          <Stop offset="0%" stopColor="#38BB56" />
          <Stop offset="100%" stopColor="#2B9F45" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DE1B27" />
          <Stop offset="100%" stopColor="#D80915" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v5H0z" />
        <Path fill="url(#prefix__c)" d="M0 10h21v5H0z" />
        <Path fill="url(#prefix__a)" d="M0 5h21v5H0z" />
        <Path
          fill="#FFF"
          fillOpacity={0.5}
          d="M1 4.252C1 4.113 1.107 4 1.252 4h.496c.139 0 .252.107.252.252v.496C2 4.887 1.893 5 1.748 5h-.496A.249.249 0 011 4.748v-.496zm2 0C3 4.113 3.107 4 3.252 4h.496c.139 0 .252.107.252.252v.496C4 4.887 3.893 5 3.748 5h-.496A.249.249 0 013 4.748v-.496zm2 0C5 4.113 5.107 4 5.252 4h.496c.139 0 .252.107.252.252v.496C6 4.887 5.893 5 5.748 5h-.496A.249.249 0 015 4.748v-.496zm2 0C7 4.113 7.107 4 7.252 4h.496c.139 0 .252.107.252.252v.496C8 4.887 7.893 5 7.748 5h-.496A.249.249 0 017 4.748v-.496zm2 0C9 4.113 9.107 4 9.252 4h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 019 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0111 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0113 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0115 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0117 4.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 0119 4.748v-.496zm-18 6c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 011 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 013 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 015 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 017 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496A.249.249 0 019 10.748v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496zm2 0c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139-.107.252-.252.252h-.496a.249.249 0 01-.252-.252v-.496z"
        />
        <Path
          stroke="#D80915"
          strokeWidth={0.5}
          d="M9.591 6.642a1.25 1.25 0 101.83.014l-1.83-.014z"
        />
        <Rect width={1} height={2} x={10} y={7} fill="#D80915" rx={0.5} />
      </G>
    </Svg>
  );
};

export default FlagIconIR;
