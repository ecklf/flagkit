import * as React from "react";
interface Props extends React.ComponentProps<"svg"> {
    size?: number;
    width?: number;
    height?: number;
}
declare const FlagIconNP: ({ size, width, height, ...props }: Props) => JSX.Element;
export default FlagIconNP;
