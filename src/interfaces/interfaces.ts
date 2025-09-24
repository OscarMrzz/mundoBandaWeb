export interface campeonesInterface{
   idBanda: number;
    
    nombreBanda: string;
    posicion: number;
    fechaEvento: string;
    imagenBandaURL: string;
    federacion: string;
    categoria: string;
    evento: string;

}
export interface campeonesEscuadraInteface{
    idBanda: number;
    
    nombreBanda: string;
    escuadra: string;
    fechaEvento: string;
    imagenBandaURL: string;
    federacion: string;
    categoria: string;

}

export interface eventoInterface{
    idEvento: string;
    lugarEvento: string;
    fechaEvento: string;
    ciudadEvento: string;
    federacionEvento: string;
    cordenadasEvento: string;
    imagenURLEvento: string;

}