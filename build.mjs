import { build } from "esbuild";

import { mkdir, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";

await mkdir("_build/src", { recursive: true });

await writeFile(
  "_build/src/transformerId.mjs",
  `export const transformerId = "${randomUUID()}";\n`
);

await build({
  bundle: true,
  entryPoints: ["src/index.mjs"],
  external: ["esbuild"],
  format: "esm",
  nodePaths: ["_build/src"],
  outfile: "index.js",
  platform: "node",
  sourcemap: true,
  target: "node14",
});
