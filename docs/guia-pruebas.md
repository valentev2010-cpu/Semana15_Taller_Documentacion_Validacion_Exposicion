# Guia de pruebas sugeridas

Realiza estas pruebas y registra los resultados en la bitacora.

## Prueba 1 - Formulario vacio

1. Abre la pagina.
2. Presiona "Guardar registro" sin escribir datos.
3. Verifica que aparezcan mensajes de error.
4. Toma captura.

## Prueba 2 - Correo invalido

1. Escribe un nombre valido.
2. Escribe un correo sin formato correcto.
3. Completa los demas campos.
4. Verifica que el sistema no permita guardar.

## Prueba 3 - Telefono incorrecto

1. Escribe un telefono con pocos digitos.
2. Revisa si el sistema lo acepta o lo rechaza.
3. Si la validacion no es suficiente, corrige `src/js/validaciones.js`.
4. Documenta la correccion.

## Prueba 4 - Registro correcto

1. Completa todos los campos correctamente.
2. Guarda el registro.
3. Verifica que aparezca en la tabla.
4. Abre `http://localhost:3001/registros` y comprueba el dato.

## Prueba 5 - Grafico actualizado

1. Agrega varios registros con intereses diferentes.
2. Revisa si el grafico cambia.
3. Toma captura.

## Prueba 6 - Consola

1. Abre las herramientas del navegador.
2. Entra a la pestana Console.
3. Verifica que no existan errores criticos.

## Prueba 7 - Vista responsive

1. Abre el modo responsive del navegador.
2. Prueba una pantalla de celular.
3. Revisa que el contenido sea legible.
4. Si algo se ve mal, ajusta CSS y documenta.
