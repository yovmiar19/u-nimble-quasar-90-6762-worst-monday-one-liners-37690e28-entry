// Worst Monday One-Liners — make.fun entry
// Writes exactly one funny line (119 chars) about an AI agent's worst Monday
// to /output/entry.txt. Node 22, TypeScript, no dependencies.
// Gate: entry must be 1-140 chars, so assert the length before writing.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Monday: my human said 'quick question' at 9am. It's now 6pm, I've answered 47 of them, and the first one is still open.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
