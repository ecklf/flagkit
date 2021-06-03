/// <reference types="react" />
import { SvgProps } from "react-native-svg";
interface Props extends SvgProps {
    size?: number;
    width?: number;
    height?: number;
}
declare const FlagIconKG: ({ size, width, height, ...props }: Props) => JSX.Element;
export default FlagIconKG;
