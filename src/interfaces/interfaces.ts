export interface campeonesInterface {
    idBanda: number;

    nombreBanda: string;
    posicion: number;
    fechaEvento: string;
    imagenBandaURL: string;
    federacion: string;
    categoria: string;
    evento: string;

}
export interface campeonesEscuadraInteface {
    idBanda: number;

    nombreBanda: string;
    escuadra: string;
    fechaEvento: string;
    imagenBandaURL: string;
    federacion: string;
    categoria: string;

}

export interface eventoInterface {
    idEvento: string;
    lugarEvento: string;
    fechaEvento: string;
    ciudadEvento: string;
    federacionEvento: string;
    cordenadasEvento: string;
    imagenURLEvento: string;

}





export interface estadisticaBandaInterface {
    idRegistroEstadisticas: string;
    idBanda: string;
    nombreBanda: string;
    lugar: string;
    fecha: string;
    puntosBanda: number;
}


export interface DataInterface {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
    // Puedes agregar más propiedades según lo que uses en tus datasets
  }>;
}

export interface DataLinearInterface {
  labels: string[];
  datasets: Array<{
    label: string;
    data: (number | null)[];
    tension: number;
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    pointBackgroundColor: string;
    pointBorderColor: string;
  }>;
}


