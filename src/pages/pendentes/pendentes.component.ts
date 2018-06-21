import { Component, OnInit } from "@angular/core";
import { ListaDesejosService } from "../../app/services/lista-desejos.service";

import { NavController } from "ionic-angular";
import { AdicionarComponent } from "../adicionar/adicionar.component";
import { DetalheComponent } from "../detalhe/detalhe.component";

@Component({
  selector: "app-pendentes",
  templateUrl: "./pendentes.component.html"
})
export class PendentesComponent implements OnInit {
  listaDesejos: any;
  constructor(
    private _listaDesejos: ListaDesejosService,
    private navCrtl: NavController
  ) {
    this.listaDesejos = this._listaDesejos;
  }

  ngOnInit(): void {}

  irAdicionar() {
    this.navCrtl.push(AdicionarComponent);
  }

  verDetalhe(lista, index) {
    this.navCrtl.push(DetalheComponent, {
      lista: lista,
      index: index
    });
  }
}
