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

const FlagIconCY = ({
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
          <Stop offset="0%" stopColor="#E7832C" />
          <Stop offset="100%" stopColor="#D7751F" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path
          fill="url(#prefix__b)"
          d="M15.547 2.227c.25-.126.33-.043.18.183l-.454.68c-.15.226-.457.533-.683.683l-.68.454c-.226.15-.568.431-.763.626l.206-.206a.496.496 0 00-.003.703l.3.3a.494.494 0 010 .7l-.3.3a.729.729 0 01-.803.123l-.094-.046a.5.5 0 00-.68.226l-.046.094c-.126.25-.436.523-.702.611l-.55.184A3.743 3.743 0 019.5 8a.876.876 0 00-.727.453l-.046.094a.502.502 0 01-.67.231l-1.113-.556a3.651 3.651 0 01-.794-.572l-.3-.3c-.193-.193-.35-.582-.35-.85 0-.276.227-.5.5-.5h-.5c.276 0 .656-.156.85-.35l.3-.3c.193-.193.582-.35.85-.35.276 0 .57-.209.658-.475l.184-.55a.574.574 0 01.64-.379l1.536.308c.266.053.696.042.966-.025l1.032-.258a5.4 5.4 0 00.937-.348l.094-.046.906-.454.094-.046.906-.454.094-.046z"
        />
        <Circle cx={10.5} cy={11.5} r={1} fill="#445128" />
        <Path
          fill="#445128"
          fillRule="nonzero"
          d="M12.158 11.474a.5.5 0 11-.316-.948 4.528 4.528 0 00.96-.482c.354-.236.615-.497.75-.768a.5.5 0 11.895.448c-.224.449-.603.828-1.09 1.152a5.512 5.512 0 01-1.199.598zm-3-.948a.5.5 0 11-.316.948 5.512 5.512 0 01-1.2-.598c-.486-.324-.865-.703-1.09-1.152a.5.5 0 01.895-.448c.136.271.397.532.75.768a4.528 4.528 0 00.961.482z"
          opacity={0.75}
        />
      </G>
    </Svg>
  );
};

export default FlagIconCY;
