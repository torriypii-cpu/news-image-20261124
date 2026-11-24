// Entry for make.fun's news-image-20261124 bounty: a single image that sums
// up the world news of Tuesday 24 November 2026.
//
// The picture itself sits beside this file as entry.png — a newspaper front
// page built from six text-free illustrations, with the date banner and
// every headline typeset programmatically so nothing on the page is
// garbled. This program's whole job is to deliver that image to the output
// directory:
//
//   MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
