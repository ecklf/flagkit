import * as React from "react";
import Svg, {
  Path,
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const DM = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
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
          <Stop offset="0%" stopColor="#108753" />
          <Stop offset="100%" stopColor="#0B6B41" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#262626" />
          <Stop offset="100%" stopColor="#0D0D0D" />
        </LinearGradient>
        <LinearGradient id="prefix__d" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FCD449" />
          <Stop offset="100%" stopColor="#FCD036" />
        </LinearGradient>
        <LinearGradient id="prefix__e" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E02C42" />
          <Stop offset="100%" stopColor="#D22036" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 0h21v6H0zM0 9h21v6H0z" />
        <Path fill="url(#prefix__a)" d="M9 6H0v3h9v6h3V9h9V6h-9V0H9v6z" />
        <Path fill="url(#prefix__c)" d="M10 8v7h1V8h10V7H11V0h-1v7H0v1h10z" />
        <Path fill="url(#prefix__d)" d="M9 7v8h1V7h11V6H10V0H9v6H0v1h9z" />
        <Circle cx={10.5} cy={7.5} r={3.5} fill="url(#prefix__e)" />
        <Path
          fill="#0E673F"
          fillRule="nonzero"
          d="M10.5 10.5a.5.5 0 110-1c.274 0 .538-.055.784-.16a.5.5 0 11.392.92c-.369.158-.767.24-1.176.24zm2.816-1.965a2.993 2.993 0 00.177-1.242.5.5 0 10-.998.068 1.983 1.983 0 01-.117.83.5.5 0 10.938.344zm-.95-3.383a2.992 2.992 0 00-1.07-.545.5.5 0 00-.264.964c.26.072.502.195.712.363a.5.5 0 10.623-.782zm-3.422-.217c-.345.21-.645.487-.88.814a.5.5 0 10.811.584c.158-.218.358-.404.588-.544a.5.5 0 00-.52-.854zM7.564 8.12c.084.397.247.771.479 1.101a.5.5 0 00.818-.574 1.987 1.987 0 01-.318-.733.5.5 0 10-.979.206zm2.54 2.354a.5.5 0 11.132-.991c.08.01.163.016.245.017a.5.5 0 11-.009 1 3.021 3.021 0 01-.367-.026z"
        />
        <Path
          fill="#0E673F"
          d="M10.5 8.5c.552 0 .5-.448.5-1s.052-1-.5-1-.5.448-.5 1-.052 1 .5 1z"
        />
      </G>
    </Svg>
  );
};

export default DM;
