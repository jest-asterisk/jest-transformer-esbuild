import { hashSum } from "./hashSum.mjs";
import { nodeEnv, nodeVersion } from "./node.mjs";

import { transformerId } from "transformerId.mjs";

import { relative } from "node:path";

const { stringify } = JSON;

export function createGetCacheKey(esbuildOptions) {
  const transformerOptionsString = stringify(esbuildOptions);

  return function getCacheKey(
    sourceText,
    sourcePath,
    { config: { rootDir }, configString, instrument }
  ) {
    const instrumentString = instrument ? "instrument" : "";
    const sourcePathRelative = relative(rootDir, sourcePath);

    return hashSum([
      transformerId,
      transformerOptionsString,
      sourceText,
      sourcePathRelative,
      configString,
      instrumentString,
      nodeEnv,
      nodeVersion,
    ]);
  };
}
