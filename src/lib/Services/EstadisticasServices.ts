import type { estadisticaBandaInterface } from "../../interfaces/interfaces";
import estadisticasPremier from "../data/TablaPosiciones/FECCAH/estadisticasPremier.json";

export default class EstadisticasServices {
    async getDataPremier(): Promise<any> {
        return estadisticasPremier as estadisticaBandaInterface[];
    }
 

   
        


}