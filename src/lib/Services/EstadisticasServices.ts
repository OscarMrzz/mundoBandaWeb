import type { estadisticaBandaInterface } from "../../interfaces/interfaces";
import estadisticasPremier from "../data/TablaPosiciones/FECCAH/estadisticasPremier.json";
import estadisticasPremierGL from "../data/TablaPosiciones/FECCAH/estadicasPremierGL.json";
import estadisticasA from "../data/TablaPosiciones/FECCAH/estadisticasAGL.json";
import estadisticasAGL from "../data/TablaPosiciones/FECCAH/estadisticasAGL.json";
import estadisticasB from "../data/TablaPosiciones/FECCAH/estadisticasB.json";
import estadisticasBGL from "../data/TablaPosiciones/FECCAH/estadisticasBGL.json";

export default class EstadisticasServices {
    async getDataPremier(): Promise<any> {
        return estadisticasPremier as estadisticaBandaInterface[];
    }
    async getDataPremierGL(): Promise<any> {
        return estadisticasPremierGL as estadisticaBandaInterface[];
    }
    async getDataA(): Promise<any> {
        return estadisticasA as estadisticaBandaInterface[];
    }
    async getDataAGL(): Promise<any> {
        return estadisticasAGL as estadisticaBandaInterface[];
    }
 
    async getDataB(): Promise<any> {
        return estadisticasB as estadisticaBandaInterface[];
    }
    async getDataBGL(): Promise<any> {
        return estadisticasBGL as estadisticaBandaInterface[];
    }
 

   
        


}