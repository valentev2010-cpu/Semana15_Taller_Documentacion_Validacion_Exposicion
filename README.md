# Semana 15 - Taller practico: documentacion, validacion y exposicion tecnica

## 1. Para que se creo esta guia

Esta guia fue creada para ayudarte a cerrar un proyecto web de manera mas profesional. En las semanas anteriores trabajaste con codigo, pruebas, mejoras de usabilidad, accesibilidad, validaciones y una base de datos local simulada. En esta semana vas a demostrar que no solo sabes crear una pagina, sino que tambien sabes explicar, validar, corregir y presentar tu trabajo.

Un proyecto no esta completo solo porque abre en el navegador. Un proyecto esta mejor preparado cuando otra persona puede abrir la carpeta, entender para que sirve, instalar las librerias, ejecutarlo, revisar sus archivos, ver las pruebas realizadas y comprender que errores fueron corregidos.

En este taller vas a trabajar con un proyecto llamado **Feria Rural Digital**. Tu tarea sera ejecutarlo, revisarlo, ajustar algunos detalles del codigo, documentarlo tecnicamente, registrar tus pruebas en una bitacora y preparar un guion de exposicion.

---

## 2. Que vas a aprender en esta semana

Al terminar este taller deberias poder:

1. Abrir un proyecto web en Visual Studio Code.
2. Instalar librerias con `npm install`.
3. Ejecutar una aplicacion web con Vite.
4. Ejecutar una base de datos simulada con JSON Server.
5. Revisar errores en la consola del navegador.
6. Probar formularios, validaciones y guardado de datos.
7. Completar una documentacion tecnica del proyecto.
8. Registrar pruebas, errores y correcciones en una bitacora.
9. Preparar evidencias con capturas de pantalla.
10. Organizar una exposicion tecnica clara y demostrable.

Este trabajo se relaciona con la validacion, correccion y presentacion de proyectos de software. La meta es que puedas demostrar funcionalidad, proceso tecnico y aprendizaje.

---

## 3. Que contiene este proyecto

```text
semana15-taller-documentacion/
|
|-- README.md                         Guia principal que estas leyendo
|-- README_ENTREGA.md                 Plantilla de documentacion tecnica que debes completar
|-- package.json                      Configuracion del proyecto y librerias
|-- db.json                           Base de datos local usada por JSON Server
|-- db.seed.json                      Copia limpia para restaurar la base de datos
|-- index.html                        Estructura principal de la pagina
|
|-- src/
|   |-- css/
|   |   |-- styles.css                Estilos personalizados del proyecto
|   |
|   |-- js/
|       |-- main.js                   Punto de entrada de la aplicacion
|       |-- api.js                    Comunicacion con JSON Server
|       |-- validaciones.js           Reglas de validacion del formulario
|       |-- ui.js                     Funciones visuales de la interfaz
|       |-- charts.js                 Grafico resumen con Chart.js
|
|-- docs/
|   |-- 00_lectura_clase.md          Lectura base de la semana
|   |-- bitacora-validacion.md        Registro de pruebas y correcciones
|   |-- checklist-pruebas.md          Lista de verificacion tecnica
|   |-- decisiones-tecnicas.md        Justificacion de decisiones
|   |-- guion-exposicion.md           Guia para preparar la exposicion
|   |-- informe-final.md              Informe final de entrega
|   |-- guia-pruebas.md               Pruebas sugeridas para realizar
|   |-- guia-evidencias.md            Como organizar capturas
|   |-- rubrica.md                    Criterios de evaluacion
|   |-- glosario.md                   Terminos importantes
|
|-- evidencias/
|   |-- consola/
|   |-- pruebas/
|   |-- responsive/
|   |-- antes-despues/
|   |-- exposicion/
|
|-- scripts/
|   |-- check-project.mjs             Revisa archivos minimos y pendientes
|   |-- reset-db.mjs                  Restaura db.json desde db.seed.json
|   |-- create-evidence-folders.mjs   Crea carpetas de evidencias
```

---

## 4. Requisitos antes de empezar

Necesitas tener instalado:

1. **Visual Studio Code**
2. **Node.js**
3. Un navegador, preferiblemente Google Chrome o Microsoft Edge

Para verificar si tienes Node.js instalado, abre una terminal y escribe:

```bash
node -v
```

Luego verifica npm:

```bash
npm -v
```

Si ambos comandos muestran una version, puedes continuar.

---

## 5. Instalacion del proyecto

Abre la carpeta del proyecto en Visual Studio Code. Luego abre la terminal integrada y ejecuta:

```bash
npm install
```

Este comando descarga las librerias necesarias para ejecutar el taller.

### Librerias usadas

| Libreria | Para que se usa |
|---|---|
| Vite | Ejecutar el proyecto web en modo desarrollo |
| JSON Server | Simular una base de datos local |
| Bootstrap | Mejorar el diseno responsive |
| Bootstrap Icons | Agregar iconos visuales |
| SweetAlert2 | Mostrar alertas claras y agradables |
| Chart.js | Crear un grafico de resumen |
| Concurrently | Ejecutar el sitio y la base al mismo tiempo |

---

## 6. Como ejecutar el proyecto

Despues de instalar las librerias, ejecuta:

```bash
npm run start
```

Este comando inicia dos servicios al mismo tiempo:

1. La pagina web con Vite.
2. La base de datos local con JSON Server.

Normalmente veras direcciones similares a estas:

```text
http://localhost:5173
http://localhost:3001
```

Abre la primera direccion para ver la pagina web. Abre la segunda para revisar la base de datos.

Tambien puedes abrir directamente:

```text
http://localhost:3001/registros
```

Alli deberias ver los registros guardados.

---

## 7. Tu mision en este taller

Tu trabajo no es solamente ejecutar el proyecto. Debes revisar, probar, completar, corregir y documentar.

### Parte A - Ejecutar y explorar

1. Abre el proyecto en VS Code.
2. Instala librerias con `npm install`.
3. Ejecuta con `npm run start`.
4. Abre la pagina en el navegador.
5. Revisa el formulario, la tabla, las tarjetas y el grafico.
6. Abre la consola del navegador.
7. Abre la API en `http://localhost:3001/registros`.

### Parte B - Probar y ajustar el codigo

Debes revisar especialmente estos archivos:

```text
src/js/validaciones.js
src/js/api.js
src/js/ui.js
src/css/styles.css
```

En el proyecto hay tareas marcadas con comentarios como:

```js
// TODO ESTUDIANTE
```

Debes leer esos comentarios, entender el problema y aplicar una mejora.

### Parte C - Documentar tecnicamente

Completa el archivo:

```text
README_ENTREGA.md
```

Ese archivo sera tu documentacion tecnica final. Debe explicar que hace el proyecto, como se instala, como se ejecuta, que tecnologias usa, que validaciones tiene y que pruebas realizaste.

### Parte D - Registrar pruebas y correcciones

Completa:

```text
docs/bitacora-validacion.md
```

Alli debes registrar minimo 5 pruebas reales. No escribas solo "funciona". Debes explicar que probaste, que esperabas, que paso, que corregiste y que evidencia guardaste.

### Parte E - Tomar evidencias

Guarda capturas en la carpeta `evidencias/`.

Debes incluir capturas de:

1. Proyecto abierto en navegador.
2. Consola sin errores criticos.
3. Formulario validando campos.
4. Registro guardado en JSON Server.
5. Vista responsive en celular.
6. Alguna mejora antes y despues.

### Parte F - Preparar exposicion

Completa:

```text
docs/guion-exposicion.md
```

Tu exposicion debe mostrar el proyecto funcionando y explicar tus pruebas, correcciones y aprendizajes.

---

## 8. Comandos utiles

### Instalar librerias

```bash
npm install
```

### Ejecutar pagina y base de datos

```bash
npm run start
```

### Ejecutar solo la pagina

```bash
npm run dev
```

### Ejecutar solo JSON Server

```bash
npm run db
```

### Revisar archivos minimos del taller

```bash
npm run check
```

### Restaurar la base de datos

```bash
npm run reset-db
```

### Crear carpetas de evidencias

```bash
npm run evidencias
```

---

## 9. Como debes entregar en Moodle

Al finalizar, comprime la carpeta del proyecto en formato `.zip`. Antes de comprimir, verifica que tu entrega incluya:

- Proyecto ejecutable.
- `README_ENTREGA.md` completo.
- `docs/bitacora-validacion.md` completo.
- `docs/checklist-pruebas.md` completo.
- `docs/guion-exposicion.md` completo.
- Evidencias en capturas.
- Codigo ajustado.
- Consola sin errores criticos.

No incluyas la carpeta `node_modules` en tu entrega. Esa carpeta se puede volver a generar con `npm install`.

---

## 10. Recomendacion final

Piensa como si otra persona fuera a abrir tu proyecto sin que tu estes presente. Esa persona deberia poder entenderlo, instalarlo, ejecutarlo y revisar tus pruebas leyendo tus documentos.

Ese es el objetivo real de esta actividad: entregar un proyecto que funcione, pero tambien que este explicado, validado y listo para presentarse.
