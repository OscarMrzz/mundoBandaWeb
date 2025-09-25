import React from "react";
import { Bar } from "react-chartjs-2";
import { dataGraficabarraPremier } from "../../../Feacture/cofigGraficaBarraPremier";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraficaBarraPremier = () => {
  const options = {
    indexAxis: "y" as const, // <-- esto la hace horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "white", // Color de texto de la leyenda
        },
      },
      title: {
        display: true,
        text: "",
        color: "white", // Color del título
      },
      tooltip: {
        titleColor: "white", // Color del título del tooltip
        bodyColor: "white", // Color del texto del tooltip
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white", // Color de las etiquetas del eje X
        },
        
      },
      y: {
        ticks: {
          color: "white", // Color de las etiquetas del eje Y
        },
      
      },
    },
  };

  return (
    <div  className="bg-gray-800  mx-4 rounded-lg shadow "
        style={{ height: "400px" }}>
      <Bar data={dataGraficabarraPremier} options={options} />
    </div>
  );
};

export default GraficaBarraPremier;
