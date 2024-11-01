import {build} from "esbuild";
import {copy} from "esbuild-plugin-copy";
import {name} from "../package.json";
import {emptyDir} from "fs-extra";

(async () => {
  console.time("Build Complete");
  console.time("Dist directory cleared");
  await emptyDir("./dist");
  console.timeEnd("Dist directory cleared");
  await Promise.all([
    build({
      // ...defaultOptions,
      bundle: true,
      entryPoints: ["src/main.ts"],
      external: ["MSF"],
      format: "iife",
      globalName: "FDT",
      legalComments: "none",
      logLevel: "info",
      minify: false,
      outfile: `dist/js/${name}.js`,
      plugins: [
        copy({
          resolveFrom: "cwd",
          assets: [
            {
              from: [
                "./src/index.html",
              ],
              to: ["./dist"]
            },
            {
              from: [
                "./src/assets/**/*.*"
              ],
              to: ["./dist/assets"]
            },
            {
              from: ["./responses/*.json"],
              to: ["./dist/responses"]
            },
          ]        
        }),
      ],
      sourcemap: true
    })
  ]);
  console.timeEnd("Build Complete");
})();