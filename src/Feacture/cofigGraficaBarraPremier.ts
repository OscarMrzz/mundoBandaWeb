  import type { estadisticaBandaInterface } from "../interfaces/interfaces";
  import EstadisticasServices from "../lib/Services/EstadisticasServices";
  
  
  const estadisticasServices = new EstadisticasServices();
  const dataEstadisticas: estadisticaBandaInterface[] = await estadisticasServices.getDataPremier();
  
  
  async function extrarIdsUnicosBandas(estadisticas: estadisticaBandaInterface[]) {
    const ids = estadisticas.map((item) => item.idBanda);
    const idsUnicos = Array.from(new Set(ids));
    return idsUnicos;
  
  
  
  }
  
  const idsUnicos =  await extrarIdsUnicosBandas(dataEstadisticas);
  const coloresliniaGrafica: Record<string, string> = {
    "01": "rgb(75, 192, 192)",
    "02": "rgb(255, 99, 132)",
    "03": "rgb(54, 162, 235)",
    "04": "rgb(255, 206, 86)",
    "05": "rgb(153, 102, 255)",
    "06": "rgb(255, 159, 64)",
  
  };

  function sumatoriaPuntosPorBanda (){
    const puntosPorBanda: Record<string, number> = {};
    idsUnicos.forEach((id) => {
      const datosBanda = dataEstadisticas.filter((item) => item.idBanda === id);
      const totalPuntos = datosBanda.reduce((sum, item) => sum + item.puntosBanda, 0);
      puntosPorBanda[id] = totalPuntos;
    });

    const puntosOrdenados = ordenarPuntsosDescendente(puntosPorBanda);
    return puntosPorBanda;
  }

  function ordenarPuntsosDescendente(puntosPorBanda: Record<string, number>) {
    const entradasOrdenadas = Object.entries(puntosPorBanda).sort((a, b) => b[1] - a[1]);
    return Object.fromEntries(entradasOrdenadas);
  }

  function extraerNombresBandas() {
    const nombresPorBanda: Record<string, string> = {};
    idsUnicos.forEach((id) => {
      const datosBanda = dataEstadisticas.filter((item) => item.idBanda === id);
        if (datosBanda.length > 0) {
            nombresPorBanda[id] = datosBanda[0].nombreBanda;
        } else {
            nombresPorBanda[id] = "Desconocida";
        }
    });
    
    return nombresPorBanda;
  }

  function ordenarNombresConIdes(nombresPorBandas: Record<string, string>, puntosPorBandas: Record<string, number>) {
    const nombresOrdenados: Record<string, string> = {};
    Object.keys(puntosPorBandas).forEach((id) => {
      nombresOrdenados[id] = nombresPorBanda[id];
    });
    return nombresOrdenados;
  }

  const puntosPorBanda = sumatoriaPuntosPorBanda();
    const nombresPorBanda = extraerNombresBandas();

const nombresOrdenados = ordenarNombresConIdes(nombresPorBanda, puntosPorBanda);

  
  
  
  
  export const dataGraficabarraPremier = {
    labels: Object.values(nombresOrdenados),
    datasets: [
      {
        label: "",
        data: Object.values(puntosPorBanda),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };