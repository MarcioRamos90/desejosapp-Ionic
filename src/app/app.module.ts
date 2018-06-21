import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

// Services
import { ListaDesejosService } from "./services/lista-desejos.service";

// Pipes
import { PlaceHolderPipe } from "./pipes/placeholder.pipe";

import { TabsPage } from "../pages/tabs/tabs";
import { PendentesComponent } from "../pages/pendentes/pendentes.component";
import { TerminadosComponent } from "../pages/terminados/terminados.component";
import { AdicionarComponent } from "../pages/adicionar/adicionar.component";
import { DetalheComponent } from "../pages/detalhe/detalhe.component";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    PlaceHolderPipe,
    PendentesComponent,
    TerminadosComponent,
    AdicionarComponent,
    DetalheComponent,
    TabsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendentesComponent,
    TerminadosComponent,
    AdicionarComponent,
    DetalheComponent,
    TabsPage
  ],
  providers: [
    ListaDesejosService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
