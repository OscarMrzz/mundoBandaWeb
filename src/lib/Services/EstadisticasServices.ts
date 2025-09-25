import type { estadisticaBandaInterface } from "../../interfaces/interfaces";
import estadisticasPremier from "../data/TablaPosiciones/FECCAH/estadisticasPremier.json";
import estadisticasPremierGL from "../data/TablaPosiciones/FECCAH/estadicasPremierGL.json";
export default class EstadisticasServices {
    async getDataPremier(): Promise<any> {
        return estadisticasPremier as estadisticaBandaInterface[];
    }
    async getDataPremierGL(): Promise<any> {
        return estadisticasPremierGL as estadisticaBandaInterface[];
    }
 

   
        


}