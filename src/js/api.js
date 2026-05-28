const API_URL = 'http://localhost:3001/registros';

async function manejarRespuesta(respuesta) {
  if (!respuesta.ok) {
    throw new Error(`Error HTTP: ${respuesta.status}`);
  }
  return respuesta.json();
}

export async function obtenerRegistros() {
  const respuesta = await fetch(`${API_URL}?_sort=fecha&_order=desc`);
  return manejarRespuesta(respuesta);
}

export async function crearRegistro(registro) {
  const respuesta = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(registro)
  });
  return manejarRespuesta(respuesta);
}

export async function probarConexionApi() {
  try {
    await obtenerRegistros();
    return true;
  } catch (error) {
    console.error('No fue posible conectar con JSON Server:', error);
    return false;
  }
}
