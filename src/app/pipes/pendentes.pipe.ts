import { Pipe, PipeTransform } from "@angular/core";
import { Lista } from "../classes/listas";

@Pipe({
  name: "pendente",
  pure: false
})
export class PendentePipe implements PipeTransform {
  transform(listas: Lista[], estado: boolean = false): Lista[] {
    let novaLista: Lista[] = [];

    for (let lista of listas) {
      if (lista.finalizada == estado) {
        novaLista.push(lista);
      }
    }

    return novaLista;
  }
}
