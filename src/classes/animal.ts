import { porte } from "../interfaces/porte";

export abstract class Animal {
    constructor(
        protected domestico: boolean,
        protected peso: number,
        protected porte: porte,
    ) { }

    comunicar(): string { 
        return "Como o animal se comunica?"
    }

}