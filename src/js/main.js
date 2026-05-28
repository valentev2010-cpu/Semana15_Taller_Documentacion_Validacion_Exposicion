import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2';
import '../css/styles.css';

import { obtenerRegistros, crearRegistro, probarConexionApi } from './api.js';
import { obtenerDatosFormulario, validarRegistro, limpiarErrores } from './validaciones.js';
import { renderizarRegistros, actualizarTotalRegistros, enfocarPrimerError } from './ui.js';
import { renderizarGraficoIntereses } from './charts.js';

const formulario = document.getElementById('formRegistro');
const btnRecargar = document.getElementById('btnRecargar');
const btnLimpiar = document.getElementById('btnLimpiar');

async function iniciarAplicacion() {
  const conectado = await probarConexionApi();

  if (!conectado) {
    await Swal.fire({
      icon: 'warning',
      title: 'JSON Server no esta activo',
      text: 'Ejecuta npm run start o npm run db para activar la base de datos local.'
    });
  }

  await cargarRegistros();
}

async function cargarRegistros() {
  try {
    const registros = await obtenerRegistros();
    renderizarRegistros(registros);
    actualizarTotalRegistros(registros);
    renderizarGraficoIntereses(registros);
  } catch (error) {
    console.error('Error al cargar registros:', error);
    await Swal.fire({
      icon: 'error',
      title: 'No se pudieron cargar los registros',
      text: 'Revisa que JSON Server este activo en http://localhost:3001.'
    });
  }
}

async function manejarEnvioFormulario(evento) {
  evento.preventDefault();

  const datos = obtenerDatosFormulario(formulario);
  const resultado = validarRegistro(datos, formulario);

  if (!resultado.valido) {
    enfocarPrimerError(formulario);
    await Swal.fire({
      icon: 'info',
      title: 'Revisa el formulario',
      text: 'Hay campos que necesitan correccion antes de guardar.'
    });
    return;
  }

  const nuevoRegistro = {
    ...resultado.datosNormalizados,
    fecha: new Date().toISOString()
  };

  try {
    await crearRegistro(nuevoRegistro);
    formulario.reset();
    limpiarErrores(formulario);
    await cargarRegistros();

    await Swal.fire({
      icon: 'success',
      title: 'Registro guardado',
      text: 'El visitante fue guardado correctamente en JSON Server.'
    });
  } catch (error) {
    console.error('Error al guardar registro:', error);
    await Swal.fire({
      icon: 'error',
      title: 'No se pudo guardar',
      text: 'Revisa la consola y la conexion con JSON Server.'
    });
  }
}

formulario?.addEventListener('submit', manejarEnvioFormulario);
btnRecargar?.addEventListener('click', cargarRegistros);
btnLimpiar?.addEventListener('click', () => limpiarErrores(formulario));

document.addEventListener('DOMContentLoaded', iniciarAplicacion);
