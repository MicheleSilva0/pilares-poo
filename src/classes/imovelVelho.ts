import { Imovel } from "./imvel";

export class ImovelVelho extends Imovel {
    constructor(
        endereco: string,
        preco: number,
        private _desconto: number) {
        super(endereco, preco)
    }

    public get desconto(): number{
        return this._desconto
    }

    public set desconto(valorDesconto: number) {
        if(this.desconto > this.preco){
            throw Error("Desconto não pode ser maior que o preço do produto")
        }
        this._desconto = valorDesconto
    }
}