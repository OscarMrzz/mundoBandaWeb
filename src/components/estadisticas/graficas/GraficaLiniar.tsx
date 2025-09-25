import React, { use, useEffect, useState } from "react";
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
import type { DataLinearInterface } from "../../../interfaces/interfaces";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);





type Props = {
  data: Record<string, DataLinearInterface>;
  minimo?: number;
  maximo?: number;
};

export default function GraficaLiniar({data, minimo, maximo}: Props) {
  const [exampleKey, setExampleKey] = useState<string>("ascendente");
  const [options, setOptions] = useState<any>({});

  useEffect(() => {
  setOptions({
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
      beginAtZero: false,
      min: 0, // Valor mínimo del eje Y (cambia este valor según necesites)
      max: 100, // Valor máximo del eje Y (opcional, puedes omitirlo para que sea automático)
      ticks: {
        color: "#9ca3af", // color texto eje Y
        stepSize: 5, // Incremento entre cada marca del eje Y
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
}
);
}, []);

  
  useEffect(() => {
    if (minimo !== undefined && maximo !== undefined) {
      setOptions((prevOptions: any) => ({
        ...prevOptions,
        scales: {
          ...prevOptions.scales,
          y: {
            ...prevOptions.scales.y,
            min: minimo,
            max: maximo,
          },
        },
      }));
    }
  }, []);
  

  return (
    <div className="p-4 w-full ">
      <div
        className="bg-gray-800 p-3 rounded-lg shadow h-120"
      
      >
        <Line data={data[exampleKey]} options={options} />
      </div>
    </div>
  );
}
