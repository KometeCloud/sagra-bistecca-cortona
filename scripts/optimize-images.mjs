/**
 * Ottimizza e converte in WebP tutte le immagini in public/immagini/
 * Supporta: jpg, jpeg, png, gif, tiff, bmp
 * Mantiene la struttura delle sottocartelle
 * Salta i file .webp già convertiti
 */

import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', 'public', 'immagini');
const SUPPORTED = ['.jpg', '.jpeg', '.png', '.gif', '.tiff', '.bmp'];

let converted = 0;
let skipped = 0;

async function processDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDir(fullPath);
      continue;
    }

    const ext = extname(entry.name).toLowerCase();
    if (!SUPPORTED.includes(ext)) continue;

    const webpPath = join(dir, basename(entry.name, ext) + '.webp');

    // Controlla se il webp è già aggiornato
    try {
      const [srcStat, webpStat] = await Promise.all([stat(fullPath), stat(webpPath)]);
      if (webpStat.mtimeMs >= srcStat.mtimeMs) {
        skipped++;
        continue;
      }
    } catch {
      // webp non esiste ancora, procedi
    }

    try {
      await sharp(fullPath)
        .webp({ quality: 85, effort: 4 })
        .toFile(webpPath);

      // Rimuove il file originale
      await unlink(fullPath);

      const relativePath = fullPath.replace(ROOT, '').replace(/^\//, '');
      const relativeWebp = webpPath.replace(ROOT, '').replace(/^\//, '');
      console.log(`✓ ${relativePath} → ${relativeWebp}`);
      converted++;
    } catch (err) {
      console.error(`✗ Errore su ${entry.name}:`, err.message);
    }
  }
}

console.log('🖼  Ottimizzazione immagini...');
await processDir(ROOT);

if (converted > 0) {
  console.log(`\n✅ ${converted} immagini convertite in WebP`);
} else {
  console.log(`✅ Nessuna nuova immagine da convertire (${skipped} già ottimizzate)`);
}
