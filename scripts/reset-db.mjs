import { copyFileSync } from 'node:fs';

copyFileSync('db.seed.json', 'db.json');
console.log('Base de datos restaurada desde db.seed.json hacia db.json');
