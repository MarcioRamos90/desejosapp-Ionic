import { Injectable } from "@angular/core";
import { Lista } from "../classes/listas";

@Injectable()
export class ListaDesejosService {
  desejos: Lista[] = [];

  constructor() {
    this.carregarData();
    console.log("serviço inicializado");
  }

  atualizarData() {
    localStorage.setItem("data", JSON.stringify(this.desejos));
  }

  carregarData() {
    if (localStorage.getItem("data")) {
      this.desejos = JSON.parse(localStorage.getItem("data"));
    }
  }

  adicionarLista(lista: Lista) {
    this.desejos.push(lista);
    this.atualizarData();
  }

  excluirLista(index: number) {
    this.desejos.splice(index, 1);
  }
}
