const { build } = require("esbuild");
const glob = require("tiny-glob");
const fs = require("fs/promises");

(async () => {
  // react
  const reactEntryPoints = await glob("./src/react/**/*.{ts,tsx}");

  await build({
    entryPoints: reactEntryPoints,
    format: "cjs",
    minify: true,
    outdir: "./react",
  });

  await build({
    entryPoints: reactEntryPoints,
    format: "esm",
    minify: true,
    outdir: "./react/esm",
  });

  // react-native
  const reactNativeEntryPoints = await glob("./src/react-native/**/*.{ts,tsx}");

  await build({
    entryPoints: reactNativeEntryPoints,
    format: "cjs",
    minify: true,
    outdir: "./react-native",
  });

  await build({
    entryPoints: reactNativeEntryPoints,
    format: "esm",
    minify: true,
    outdir: "./react-native/esm",
  });
})();
