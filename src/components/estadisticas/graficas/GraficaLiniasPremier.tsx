import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { dataGraficaLiniaPremier } from "../../../Feacture/ConfigGraficas";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OPTIONS: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#e5e7eb", // color texto leyenda para modo oscuro
      },
    },
    title: {
      display: true,
      text: "",
      color: "#e5e7eb", // color título para modo oscuro
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#9ca3af", // color texto eje X
      },
      grid: {
        color: "#374151", // color líneas de grid
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "#9ca3af", // color texto eje Y
      },
      grid: {
        color: "#374151", // color líneas de grid
      },
    },
  },
  elements: {
    line: {
      spanGaps: false,
    },
  },
};

export default function LineChartDemo() {
  const [exampleKey, setExampleKey] = useState<string>("ascendente");

  return (
    <div className="p-4 w-full ">
  

 

      <div
        className="bg-gray-800 p-3 rounded-lg shadow"
        style={{ height: "400px" }}
      >
        <Line data={dataGraficaLiniaPremier[exampleKey]} options={OPTIONS} />
      </div>

    </div>
  );
}
