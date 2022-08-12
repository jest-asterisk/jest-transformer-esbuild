import { createGetCacheKey } from "./createGetCacheKey.mjs";
import { createProcess } from "./createProcess.mjs";
import { nodeVersion } from "./node.mjs";

const defaultEsbuildOptions = {
  format: "cjs",
  sourcemap: "both",
  target: `node${nodeVersion}`,
};

const canInstrument = true;

export function createTransformer(userEsbuildOptions) {
  const esbuildOptions = { ...defaultEsbuildOptions, ...userEsbuildOptions };
  const process = createProcess(esbuildOptions);
  const getCacheKey = createGetCacheKey(esbuildOptions);

  return {
    canInstrument,
    getCacheKey,
    process,
  };
}
