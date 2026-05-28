import { Chart } from 'chart.js/auto';

let grafico = null;

export function renderizarGraficoIntereses(registros) {
  const canvas = document.getElementById('graficoIntereses');
  if (!canvas) return;

  const conteo = contarPorInteres(registros);
  const etiquetas = Object.keys(conteo);
  const datos = Object.values(conteo);

  if (grafico) {
    grafico.destroy();
  }

  grafico = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: etiquetas.length ? etiquetas : ['Sin registros'],
      datasets: [{
        label: 'Cantidad de visitantes',
        data: datos.length ? datos : [0]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          }
        }
      }
    }
  });
}

function contarPorInteres(registros) {
  return (registros || []).reduce((acumulador, registro) => {
    const interes = registro.interes || 'Sin interes';
    acumulador[interes] = (acumulador[interes] || 0) + 1;
    return acumulador;
  }, {});
}
