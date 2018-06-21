import { Component, OnInit } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { Lista, ListaItem } from "../../app/classes/index";
import { ListaDesejosService } from "../../app/services/lista-desejos.service";

@Component({
  selector: "app-detalhe",
  templateUrl: "./detalhe.component.html"
})
export class DetalheComponent implements OnInit {
  index: number;
  lista: Lista;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private desejosSrv: ListaDesejosService,
    public alertCtrl: AlertController
  ) {
    this.index = this.navParams.get("index");
    this.lista = this.navParams.get("lista");
  }

  ngOnInit(): void {}

  atualizar(item: ListaItem) {
    item.completo = !item.completo;

    let tudoMarcado = true;

    for (let item of this.lista.items) {
      if (!item.completo) {
        tudoMarcado = false;
        break;
      }
    }

    this.lista.finalizada = tudoMarcado;
    this.desejosSrv.atualizarData();
  }

  excluirLista(lista: Lista) {
    const prompt = this.alertCtrl.create({
      title: "Login",
      message: "Tem certeza que deseja excluir está lista ?",
      buttons: [
        {
          text: "Cancelar",
          handler: data => {
            console.log("Cancel clicado");
          }
        },
        {
          text: "Excluir",
          handler: data => {
            this.desejosSrv.excluirLista(this.index);
            this.desejosSrv.atualizarData();
            this.navCtrl.pop();
          }
        }
      ]
    });
    prompt.present();
  }
}
