// Generate PWA PNG icons from the SVG logo using sharp.
// Outputs: public/icon-192.png, public/icon-512.png, public/apple-touch-icon.png, etc.
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, '..', 'public', 'logo.svg');
const svgBuffer = fs.readFileSync(svgPath);

const outputs = [
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 32, name: 'favicon-32.png' },
  { size: 16, name: 'favicon-16.png' },
];

for (const { size, name } of outputs) {
  const outPath = path.join(__dirname, '..', 'public', name);
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(outPath);
  console.log(`Generated ${name} (${size}x${size})`);
}

console.log('All icons generated successfully.');
