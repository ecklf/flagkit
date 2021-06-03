export const templateReact = (
  { template }: any,
  opts: any,
  { imports, componentName, props, jsx, exports }: any
) => {
  const tsTemplate = template.smart({ plugins: ["typescript"] });

  return tsTemplate.ast`
      import * as React from "react";
      
      interface Props extends React.ComponentProps<'svg'> {
        size?: number;
        width?: number;
        height?: number;
      }

      const ${componentName} = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
        if (size !== height) {
          width = width * (size / height);
          height = height * (size / height);
        }
        return (
          ${jsx}
        )
      };

      ${exports}
    `;
};

export const templateReactNative = (
  { template }: any,
  opts: any,
  { imports, componentName, props, jsx, exports }: any
) => {
  const tsTemplate = template.smart({ plugins: ["typescript"] });

  return tsTemplate.ast`
      import * as React from "react";
      import Svg, { Path, SvgProps } from "react-native-svg";

      interface Props extends SvgProps {
        size?: number;
        width?: number;
        height?: number;
      }

      const ${componentName} = ({ size = 15, width = 21, height = 15, ...props }: Props) => {
        if (size !== height) {
          width = width * (size / height);
          height = height * (size / height);
        }
        return (
          ${jsx}
        )
      };

      ${exports}
    `;
};
