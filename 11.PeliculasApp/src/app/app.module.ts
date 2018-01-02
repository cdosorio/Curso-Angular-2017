import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";

//Rutas
import { APP_ROUTING } from "./app.routes";

//Servicios
import { PeliculasService } from "./services/peliculas.service";

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaComponent,
    NavbarComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule, 
    JsonpModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
