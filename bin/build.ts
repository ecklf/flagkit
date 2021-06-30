import svgr from "@svgr/core";
import { promises as fs } from "fs";
import { templateReact, templateReactNative } from "./template";
const junk = require("junk");

const resetSrcDir = async () => {
  try {
    await fs.rm(`./src`, { recursive: true });
    await fs.mkdir(`./src/react/flags`, { recursive: true });
    await fs.mkdir(`./src/react-native/flags`, { recursive: true });
  } catch (error) {
    throw new Error(error);
  }
};

const genComponentFromBuffer = async (
  reactNative: boolean,
  componentName: string,
  svgBuffer: Buffer
): Promise<string> => {
  try {
    return await svgr(
      svgBuffer,
      {
        template: reactNative ? templateReactNative : templateReact,
        svgo: true,
        svgoConfig: {
          plugins: [
            { sortAttrs: true },
            { removeXMLNS: true },
            { removeViewBox: false },
            {
              removeAttrs: {
                elemSeparator: "^",
                attrs: reactNative ? ["xmlns:xlink", "filter"] : [],
              },
            },
            // {
            //   addAttributesToSVGElement: {
            //     attributes: [{ stroke: "currentColor" }],
            //   },
            // },
          ],
        },
        ref: false,
        native: reactNative,
        svgProps: {
          width: "{width}",
          height: "{height}",
        },
        plugins: [
          "@svgr/plugin-svgo",
          "@svgr/plugin-jsx",
          "@svgr/plugin-prettier",
        ],
      },
      {
        componentName: componentName,
      }
    );
  } catch (error) {
    throw new Error(error);
  }
};

const getIcons = async () => {
  const iconDir = "./FlagKit/Assets/SVG";
  let files = await fs.readdir(`${iconDir}/`);
  return Promise.all(
    files.filter(junk.not).map(async (file) => ({
      svg: await fs.readFile(`${iconDir}/${file}`),
      name: `${file.replace(/\.svg$/, "")}`,
      componentName: `FlagIcon${file.replace(/\.svg$/, "").replace(/-/g, "$")}`,
    }))
  );
};

const exportIcons = async () => {
  const icons = await getIcons();

  // Build all SVG components
  for (let { componentName, svg } of icons) {
    const reactJsx = await genComponentFromBuffer(false, componentName, svg);
    const reactNativeJsx = await genComponentFromBuffer(
      true,
      componentName,
      svg
    );
    await fs.writeFile(`./src/react/flags/${componentName}.tsx`, reactJsx);
    await fs.writeFile(
      `./src/react-native/flags/${componentName}.tsx`,
      reactNativeJsx
    );
    const exportStr = `export { default as ${componentName} } from './${componentName}';\n`;
    await fs.writeFile(`./src/react/flags/index.ts`, exportStr, { flag: "a" });
    await fs.writeFile(`./src/react-native/flags/index.ts`, exportStr, {
      flag: "a",
    });

    // write to main index file
    const indexExportStr = `export { default as ${componentName.replace(
      /\$/g,
      ""
    )} } from './flags/${componentName}';\n`;
    await fs.writeFile(`./src/react/index.ts`, indexExportStr, { flag: "a" });
    await fs.writeFile(`./src/react-native/index.ts`, indexExportStr, {
      flag: "a",
    });
  }
};

(async () => {
  await resetSrcDir();
  await exportIcons();
})();
