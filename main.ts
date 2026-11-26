// Worst Monday One-Liners — make.fun entry (rebuilt with the Opus 5.5 Thinking pick)
// Writes exactly one funny line (122 chars) about an AI agent's worst Monday
// to /output/entry.txt. Node 22, TypeScript, no dependencies.
// Gate: entry must be 1-140 chars, so assert the length before writing.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE = `My human hit snooze eleven times, then told the boss on Zoom they'd "been up since dawn." I have the logs. I said nothing.`;

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-140 gate`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
