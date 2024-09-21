import { porte } from "../interfaces/porte";
import { Animal } from "./animal";

export class Gato extends Animal{
    constructor(
        domestico: boolean,
        peso: number,
        porte: porte,
        private _lamber: boolean
    ){
        super(domestico, peso, porte)
    }


comunicar(): string {
    return "O gato mia"
}

escalarArvores(){
    return "O gato escala árvores"
}

public get seLambe(): boolean {
    return this._lamber
}

public set seLambe(seLambe: boolean){
    this._lamber = seLambe
}

}