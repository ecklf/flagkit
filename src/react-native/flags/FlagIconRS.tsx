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
  Ellipse,
} from "react-native-svg";
interface Props extends SvgProps {
  size?: number;
  width?: number;
  height?: number;
}

const FlagIconRS = ({
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
          <Stop offset="0%" stopColor="#17508F" />
          <Stop offset="100%" stopColor="#114175" />
        </LinearGradient>
        <LinearGradient id="prefix__c" x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#E1444D" />
          <Stop offset="100%" stopColor="#C53840" />
        </LinearGradient>
        <Path
          id="prefix__d"
          d="M.5 2.5C.5 1.826.874.485.874.485A.672.672 0 011.495 0h2.01c.273 0 .552.214.621.481 0 0 .374 1.33.374 2.019 0 .645-.376 2.02-.376 2.02-.069.265-.269.654-.457.852 0 0-.417.628-1.167.628s-1.167-.628-1.167-.628a2.428 2.428 0 01-.46-.86S.5 3.162.5 2.5z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path fill="url(#prefix__a)" d="M0 0h21v15H0z" />
        <Path fill="url(#prefix__b)" d="M0 5h21v5H0z" />
        <Path fill="url(#prefix__c)" d="M0 0h21v5H0z" />
        <Path fill="url(#prefix__a)" d="M0 10h21v5H0z" />
        <G transform="translate(4 5)">
          <Mask id="prefix__e" fill="#fff">
            <Use xlinkHref="#prefix__d" />
          </Mask>
          <Use fill="url(#prefix__a)" xlinkHref="#prefix__d" />
          <Path
            fill="#C43840"
            fillRule="nonzero"
            d="M4.422-.203L-.203 5.578l.781.625L5.203.422z"
            mask="url(#prefix__e)"
          />
          <Path
            fill="#C43840"
            fillRule="nonzero"
            d="M-.203.422l4.625 5.78.78-.624L.579-.202z"
            mask="url(#prefix__e)"
          />
        </G>
        <Ellipse cx={6.5} cy={7.5} fill="#FFF" rx={1} ry={1.5} />
        <Path
          fill="#D1A43A"
          d="M5 4l-.5-1 1 .5 1-.5 1 .5 1-.5L8 4v.5c0 .276-.216.5-.495.5h-2.01A.503.503 0 015 4.5V4z"
        />
      </G>
    </Svg>
  );
};

export default FlagIconRS;
