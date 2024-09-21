import { porte } from "../interfaces/porte";
import { Animal } from "./animal";

export class Cavalo extends Animal {
    constructor(
        domestico: boolean,
        peso: number,
        porte: porte,
        private _ferradura: boolean
    ) {
        super(domestico, peso, porte)
    }

    comunicar(): string{
        return "O cavalo relincha"
    }

    trotar(){
        return "O cavalo está trotando"
        
    }

    public get possuiFerradura(): boolean{
        return this._ferradura
    }

    public set possuiFerradura(possuiFerradura: boolean){
        this._ferradura = possuiFerradura
    }

}