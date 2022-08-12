import { transformSync } from "esbuild";

export function createProcess(esbuildOptions) {
  return function process(sourceText, sourcePath) {
    const options = { ...esbuildOptions, sourcefile: sourcePath };
    const { code, map } = transformSync(sourceText, options);

    return { code, map };
  };
}
