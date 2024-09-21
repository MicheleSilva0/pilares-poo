import { porte } from "../interfaces/porte";
import { Animal } from "./animal";

export class Cachorro extends Animal{
    constructor(
        domestico: boolean,
        peso: number,
        porte: porte,
        private _morder: boolean
    ){
        super(domestico, peso, porte)
    }


comunicar(): string {
    return "O cachorro late"
}

roerOsso(){
    return "O cachorro está roendo ossos"
}

public get morde(): boolean {
    return this._morder
}

public set morde(morder: boolean){
    this._morder = morder
}

}