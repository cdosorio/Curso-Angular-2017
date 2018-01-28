import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Mapas
import { AgmCoreModule } from '@agm/core';

//Servicios
import { MapasService } from "./services/mapas.service";

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyCFb5vXlJr4HBMvETClF4i0E2Wutg2Xk2E'
    }),
    FormsModule
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
