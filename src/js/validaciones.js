export function limpiarErrores(formulario) {
  const campos = formulario.querySelectorAll('.is-invalid');
  campos.forEach((campo) => campo.classList.remove('is-invalid'));

  const mensajes = formulario.querySelectorAll('.invalid-feedback');
  mensajes.forEach((mensaje) => {
    mensaje.textContent = '';
  });
}

function marcarError(campo, mensaje) {
  campo.classList.add('is-invalid');
  const contenedorError = document.getElementById(`error-${campo.name}`);
  if (contenedorError) {
    contenedorError.textContent = mensaje;
  }
}

function esCorreoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

function soloDigitos(valor) {
  return valor.replace(/\D/g, '');
}

export function obtenerDatosFormulario(formulario) {
  const datos = new FormData(formulario);
  return {
    nombre: String(datos.get('nombre') || '').trim(),
    correo: String(datos.get('correo') || '').trim(),
    telefono: String(datos.get('telefono') || '').trim(),
    interes: String(datos.get('interes') || '').trim(),
    comentario: String(datos.get('comentario') || '').trim()
  };
}

export function validarRegistro(datos, formulario) {
  limpiarErrores(formulario);
  let valido = true;

  const campoNombre = formulario.elements.nombre;
  const campoCorreo = formulario.elements.correo;
  const campoTelefono = formulario.elements.telefono;
  const campoInteres = formulario.elements.interes;
  const campoComentario = formulario.elements.comentario;

  if (datos.nombre.length < 3) {
    marcarError(campoNombre, 'Escribe un nombre de minimo 3 caracteres.');
    valido = false;
  }

  if (!esCorreoValido(datos.correo)) {
    marcarError(campoCorreo, 'Escribe un correo con formato valido.');
    valido = false;
  }

  const telefonoLimpio = soloDigitos(datos.telefono);

  // TODO ESTUDIANTE:
  // Actualmente la validacion acepta telefonos desde 7 digitos.
  // Mejora esta regla para que acepte exactamente 10 digitos.
  // Luego registra la prueba en docs/bitacora-validacion.md.
  if (telefonoLimpio.length < 7) {
    marcarError(campoTelefono, 'El telefono debe tener una cantidad valida de digitos.');
    valido = false;
  }

  if (!datos.interes) {
    marcarError(campoInteres, 'Selecciona un interes principal.');
    valido = false;
  }

  if (datos.comentario.length < 15) {
    marcarError(campoComentario, 'El comentario debe tener minimo 15 caracteres.');
    valido = false;
  }

  return {
    valido,
    datosNormalizados: {
      ...datos,
      telefono: telefonoLimpio
    }
  };
}
