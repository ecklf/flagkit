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

const CV = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#0C49AE" />
          <Stop offset="100%" stopColor="#063B91" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#CD232E" />
          <Stop offset="100%" stopColor="#CD232E" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v8H0zM0 11h21v4H0z" />
        <Path fill="url(#prefix__a)" d="M0 8h21v3H0z" />
        <Path fill="url(#prefix__c)" d="M0 9h21v1H0z" />
        <Path
          fill="#F7D035"
          fillRule="nonzero"
          d="M8 13a.5.5 0 110-1c.284 0 .56-.047.822-.138a.5.5 0 01.329.944A3.495 3.495 0 018 13zm2.651-1.215a3.5 3.5 0 00.605-.998.5.5 0 00-.93-.368 2.5 2.5 0 01-.432.713.5.5 0 00.757.653zm.817-2.759a3.48 3.48 0 00-.348-1.114.5.5 0 00-.891.454c.126.248.21.516.248.794a.5.5 0 10.991-.134zM9.857 6.533a3.482 3.482 0 00-1.08-.446.5.5 0 10-.22.975c.273.062.532.17.769.318a.5.5 0 10.53-.847zm-2.8-.405a3.487 3.487 0 00-1.055.498.5.5 0 10.571.82c.23-.159.484-.28.753-.354a.5.5 0 10-.268-.964zM4.85 7.973a3.48 3.48 0 00-.327 1.121.5.5 0 10.994.115 2.48 2.48 0 01.232-.8.5.5 0 10-.9-.436zm-.06 2.925c.157.359.373.689.638.976a.5.5 0 10.735-.678 2.503 2.503 0 01-.456-.698.5.5 0 10-.917.4zm2.146 1.937a.5.5 0 11.304-.953c.229.073.469.113.714.118a.5.5 0 01-.018 1 3.495 3.495 0 01-1-.165z"
        />
      </G>
    </Svg>
  );
};

export default CV;
