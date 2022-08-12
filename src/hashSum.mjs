import { createHash } from "node:crypto";

export function hashSum(items) {
  return items
    .reduce(updateHash, createHash("sha256"))
    .digest("hex")
    .substring(0, 32);
}

function updateHash(hash, item) {
  return hash.update(item).update("\0", "utf8");
}
