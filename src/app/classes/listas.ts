import { ListaItem } from "./lista-item";

export class Lista {
  nome: string;
  finalizada: boolean;
  items: ListaItem[];

  constructor(nome: string) {
    this.nome = nome;
    this.finalizada = false;
  }
}
