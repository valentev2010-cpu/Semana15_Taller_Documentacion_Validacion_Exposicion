export function renderizarRegistros(registros) {
  const tabla = document.getElementById('tablaRegistros');

  if (!tabla) return;

  if (!Array.isArray(registros) || registros.length === 0) {
    tabla.innerHTML = '<tr><td colspan="5" class="text-center p-4">Aun no hay registros guardados.</td></tr>';
    return;
  }

  tabla.innerHTML = registros.map((registro) => {
    const fecha = registro.fecha ? new Date(registro.fecha).toLocaleString('es-CO') : 'Sin fecha';
    return `
      <tr>
        <td>${escaparHtml(registro.nombre)}</td>
        <td>${escaparHtml(registro.correo)}</td>
        <td>${escaparHtml(registro.telefono)}</td>
        <td><span class="badge text-bg-success">${escaparHtml(registro.interes)}</span></td>
        <td>${fecha}</td>
      </tr>
    `;
  }).join('');
}

export function actualizarTotalRegistros(registros) {
  const total = document.getElementById('totalRegistros');
  if (total) {
    total.textContent = Array.isArray(registros) ? registros.length : 0;
  }
}

export function enfocarPrimerError(formulario) {
  const primerError = formulario.querySelector('.is-invalid');
  if (primerError) {
    primerError.focus();
  }
}

function escaparHtml(valor) {
  return String(valor ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
