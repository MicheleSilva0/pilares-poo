import { Ingresso } from "./ingresso";

export class Camarote extends Ingresso {
    constructor(
        valor: number,
        private valorAdicinal: number){
        super(valor)
    }

    public imprimeValor(): void {
        console.log(this.valor + this.valorAdicinal);      
    }
}