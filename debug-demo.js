const fs = require('fs');
const path = require('path');

const DEMOS_DIR = path.join(process.cwd(), 'public', 'demos');
const files = fs.readdirSync(DEMOS_DIR);
console.log('Files in public/demos:', files);

const slug = 'apex-medical-billing';
console.log('\nSlug:', slug);

const exact = [
  `demo-${slug}-flow.html`,
  `demo-${slug}.html`,
  `${slug}.html`,
];
console.log('\nExact matches:');
for (const name of exact) {
  console.log('  Checking:', name, '-', files.includes(name) ? 'FOUND' : 'NOT FOUND');
}

const words = slug.split('-').filter(w => w.length > 2);
console.log('\nWords:', words);

const match = files.find(
  f => f.endsWith('.html') && words.every(w => f.includes(w))
);
console.log('Fuzzy match:', match);

// Check file content
if (match) {
  const filePath = path.join(DEMOS_DIR, match);
  const content = fs.readFileSync(filePath, 'utf-8');
  console.log('\nFile size:', content.length, 'bytes');
  console.log('First 100 chars:', content.substring(0, 100));
}