import type { estadisticaBandaInterface } from "../interfaces/interfaces";
import type { DataLinearInterface } from "../interfaces/dataLinearInterface";
import EstadisticasServices from "../lib/Services/EstadisticasServices";


const estadisticasServices = new EstadisticasServices();
const dataEstadisticas: estadisticaBandaInterface[] = await estadisticasServices.getDataAGL();


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
  "07": "rgb(201, 203, 207)",
  "08": "rgb(255, 99, 71)",
  "09": "rgb(100, 149, 237)",
  "10": "rgb(60, 179, 113)",
  "11": "rgb(238, 130, 238)",
  "12": "rgb(255, 215, 0)",
  

};

export const dataGraficaLiniarA: Record<string, DataLinearInterface> = {
  ascendente: {
    labels: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18"],
    datasets: [
 
      ...idsUnicos.map((id)=>{
        const datosBanda = dataEstadisticas.filter((item) => item.idBanda === id);
 
        const datosOrdenados = datosBanda.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
        const nombreBanda = datosOrdenados[0].nombreBanda ;
        const puntos = datosOrdenados.map((item) => item.puntosBanda === 0 ? null : item.puntosBanda);

        return {
          label: nombreBanda,
          data: puntos,
           tension: 0,
        fill: false,
        borderColor: coloresliniaGrafica[id] || "rgb(75, 192, 192)",
        backgroundColor: coloresliniaGrafica[id] || "rgb(75, 192, 192)",
        pointBackgroundColor: coloresliniaGrafica[id] || "rgb(75, 192, 192)",
        pointBorderColor: coloresliniaGrafica[id] || "rgb(75, 192, 192)",
        };

      })



     
    ],
    
  }

  

 
};

