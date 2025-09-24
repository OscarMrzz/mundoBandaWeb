import type { eventoInterface } from "../../interfaces/interfaces";
import EventosData from "../data/EventosData.json";

export default class EventosServices {


    async get(){
        return EventosData as eventoInterface[];

    }
}