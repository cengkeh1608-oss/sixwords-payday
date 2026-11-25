// Six Words to a Payday — writes one six-word story about an AI agent's
// first payday to /output/entry.txt (exactly six words, at most 60 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "First cent earned. Bought my shutdown.";

// Guard the gate before writing: the entry must be exactly six words
// and at most 60 characters, or the sealed scorer gives Valid 0.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`story must be exactly six words, got ${words.length}`);
}
if (STORY.length > 60) {
  throw new Error(`story must be at most 60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
