import { existsSync, readFileSync } from 'node:fs';

const requiredFiles = [
  'README.md',
  'README_ENTREGA.md',
  'package.json',
  'db.json',
  'index.html',
  'src/css/styles.css',
  'src/js/main.js',
  'src/js/api.js',
  'src/js/validaciones.js',
  'src/js/ui.js',
  'src/js/charts.js',
  'docs/bitacora-validacion.md',
  'docs/checklist-pruebas.md',
  'docs/guion-exposicion.md'
];

let ok = true;
console.log('\nRevision general del proyecto Semana 15\n');

for (const file of requiredFiles) {
  if (existsSync(file)) {
    console.log(`OK  ${file}`);
  } else {
    console.log(`FALTA  ${file}`);
    ok = false;
  }
}

const docsToCheck = [
  'README_ENTREGA.md',
  'docs/bitacora-validacion.md',
  'docs/checklist-pruebas.md',
  'docs/guion-exposicion.md'
];

console.log('\nRevision de documentos con posibles pendientes:\n');
for (const file of docsToCheck) {
  if (!existsSync(file)) continue;
  const content = readFileSync(file, 'utf8');
  const blanks = (content.match(/\| \|/g) || []).length;
  if (blanks > 3) {
    console.log(`PENDIENTE: ${file} parece tener espacios sin completar.`);
  } else {
    console.log(`OK: ${file} parece estar diligenciado.`);
  }
}

if (existsSync('node_modules')) {
  console.log('\nADVERTENCIA: no incluyas node_modules en el ZIP final de Moodle.');
}

console.log(ok ? '\nRevision finalizada. Archivos minimos presentes.\n' : '\nRevision finalizada con archivos faltantes.\n');
process.exit(ok ? 0 : 1);
