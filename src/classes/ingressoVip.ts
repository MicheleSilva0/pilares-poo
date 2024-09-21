import { Ingresso } from "./ingresso";

export class IngressoVip extends Ingresso {
    constructor(
        valor: number,
        private valorAdicional: number) {
        super(valor)
    }

    public imprimeValor() {
        console.log(this.valor + this.valorAdicional);
    }
}