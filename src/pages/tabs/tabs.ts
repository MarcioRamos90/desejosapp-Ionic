import { Component } from "@angular/core";

import { PendentesComponent } from "../pendentes/pendentes.component";
import { TerminadosComponent } from "../terminados/terminados.component";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = PendentesComponent;
  tab2Root = TerminadosComponent;

  constructor() {}
}
