import { SaberPro } from "./saberpro";
import { SaberP } from "./saberp";
import { PorSaberPro } from "./porsaberp";
import { PorSaber } from "./porsaber";
import { ValorAgregado } from "./valoragregado";

export interface Estudiante {
    id: string;
    nombre: string;
    saberPro: SaberPro;
    saber: SaberP;
    porsaberpro: PorSaberPro;
    porsaber: PorSaber;
    valoragregado: ValorAgregado;
}
