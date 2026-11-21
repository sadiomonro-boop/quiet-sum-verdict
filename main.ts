import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'You read the way you always read,',
  'weighing word by word',
  'until the words thin. One line stays.',
  '',
  'The rest drift off like paper',
  'and settle, out of the way.',
  '',
  'The answer was forming before the question ended,',
  'quiet as a sum that adds up to itself,',
  'still warm from your attention.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
