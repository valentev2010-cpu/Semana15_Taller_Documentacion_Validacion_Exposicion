import { mkdirSync, writeFileSync, existsSync } from 'node:fs';

const folders = [
  'evidencias/consola',
  'evidencias/pruebas',
  'evidencias/responsive',
  'evidencias/antes-despues',
  'evidencias/exposicion'
];

for (const folder of folders) {
  mkdirSync(folder, { recursive: true });
  const readme = `${folder}/README.md`;
  if (!existsSync(readme)) {
    writeFileSync(readme, `# ${folder}\n\nGuarda aqui tus capturas relacionadas con esta categoria.\n`, 'utf8');
  }
}

console.log('Carpetas de evidencias creadas o verificadas.');
