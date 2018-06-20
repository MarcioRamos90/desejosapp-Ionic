import { Component, OnInit } from "@angular/core";
import { ListaDesejosService } from "../../app/services/lista-desejos.service";

@Component({
  selector: "app-pendentes",
  templateUrl: "./pendentes.component.html"
})
export class PendentesComponent implements OnInit {
  listaDesejos: any;
  constructor(private _listaDesejos: ListaDesejosService) {
    this.listaDesejos = this._listaDesejos;
  }

  ngOnInit(): void {}
}
