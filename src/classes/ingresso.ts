export abstract class Ingresso {
    constructor(
        protected valor: number
    ) { }

    abstract imprimeValor(): void
}