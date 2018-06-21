import { Component, OnInit } from "@angular/core";
import { Lista, ListaItem } from "../../app/classes/index";
import { ListaDesejosService } from "../../app/services/lista-desejos.service";

import { AlertController, NavController } from "ionic-angular";

@Component({
  selector: "adicionar-name",
  templateUrl: "adicionar.component.html"
})
export class AdicionarComponent implements OnInit {
  nomeLista: string = "";
  nomeItem: string = "";

  listaItems: ListaItem[] = [];
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public _listaDesejos: ListaDesejosService
  ) {}

  ngOnInit(): void {}

  adicionarItem() {
    if (this.nomeItem.length == 0) {
      return;
    }

    let item = new ListaItem();
    item.nome = this.nomeItem;

    this.listaItems.push(item);
    this.nomeItem = "";
  }

  excluirItem(index) {
    // console.log(this.listaItems[index]);
    this.listaItems.splice(index, 1);
  }

  salvarLista() {
    if (this.nomeLista.length == 0) {
      this.showAlert();
      return;
    }

    let lista = new Lista(this.nomeLista);
    lista.items = this.listaItems;

    this._listaDesejos.adicionarLista(lista);
    this.navCtrl.pop();
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: "Nome Lista Vazia",
      subTitle: "Por favor adicione o nome da lista",
      buttons: ["OK"]
    });
    alert.present();
  }
}
