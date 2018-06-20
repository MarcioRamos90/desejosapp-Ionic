import { Injectable } from "@angular/core";
import { Lista } from "../classes/listas";
import { listener } from "@angular/core/src/render3/instructions";

@Injectable()
export class ListaDesejosService {
  desejos: Lista[] = [];

  constructor() {
    let lista1 = new Lista("Compras de mercado");
    let lista2 = new Lista("Jogos desejados");
    let lista3 = new Lista("Lista de Estudos Matemática");

    this.desejos.push(lista1);
    this.desejos.push(lista2);
    this.desejos.push(lista3);

    console.log("serviço inicializado");
  }
}
