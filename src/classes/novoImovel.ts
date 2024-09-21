import { Imovel } from "./imvel";

export class NovoImovel extends Imovel {
    constructor(
        endereco: string,
        preco: number,
        private _precoAdicional: number) {
        super(endereco, preco)
    }


public get precoAdicional() : number {
    return this._precoAdicional
}

public set precoAdicional(precoAdicional: number) {
    this._precoAdicional = precoAdicional
}



}