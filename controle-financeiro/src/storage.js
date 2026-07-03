import fs from 'node:fs';
import path from 'node:path';

const dataDir = path.join('data');
const filePath = path.join(dataDir, 'transactions.json');

export function readRecords() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf8');
  }

  const raw = fs.readFileSync(filePath, 'utf8');

  try {
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

export function writeRecords(records) {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(filePath, JSON.stringify(records, null, 2), 'utf8');
}