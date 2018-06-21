import { Component, OnInit } from "@angular/core";
import { ListaDesejosService } from "../../app/services/lista-desejos.service";
import { DetalheComponent } from "../detalhe/detalhe.component";
import { NavController } from "ionic-angular";

@Component({
  selector: "app-terminados",
  templateUrl: "terminados.component.html"
})
export class TerminadosComponent implements OnInit {
  listaDesejos: any;

  constructor(
    private _listaDesejos: ListaDesejosService,
    private navCrtl: NavController
  ) {
    this.listaDesejos = this._listaDesejos;
  }

  ngOnInit(): void {}

  // irAdicionar() {
  //   this.navCrtl.push(AdicionarComponent);
  // }

  verDetalhe(lista, index) {
    this.navCrtl.push(DetalheComponent, {
      lista: lista,
      index: index
    });
  }
}
