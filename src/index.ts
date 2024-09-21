// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.

import { IngressoVip } from "./classes/ingressoVip";

const vip: IngressoVip = new IngressoVip(15,15)
vip.imprimeValor()

import { Camarote } from "./classes/camarote";

const camarote: Camarote = new Camarote(20,15)

camarote.imprimeValor()

// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.

import { NovoImovel } from "./classes/novoImovel";
import { ImovelVelho } from "./classes/imovelVelho";

const novoImovel: NovoImovel = new NovoImovel("RS", 250000, 2500)
novoImovel.precoAdicional = 3000
console.log(novoImovel.precoAdicional);

const imovelVelho: ImovelVelho = new ImovelVelho("RS", 250000, 2500)
imovelVelho.desconto
console.log(imovelVelho.desconto);


// 3. Dado o seguinte diagrama:

// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
import { Cavalo } from "./classes/cavalo";
import { Cachorro } from "./classes/cachorro";
import { Gato } from "./classes/gato";

const cavalo: Cavalo = new Cavalo(true, 450,"Grande",true)
console.log(cavalo.comunicar());
cavalo.possuiFerradura = true
console.log(cavalo.possuiFerradura);

const cachorro: Cachorro =  new Cachorro(true, 15, "Pequeno", true)

console.log(cachorro.comunicar());
cachorro.morde = false
console.log(cachorro.morde);


const gato: Gato =  new Gato(true, 10, "Pequeno", true)

console.log(gato.comunicar());
gato.seLambe = false
console.log(gato.seLambe);



