import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first ng maps app';

  lat: number = -33.4214955;
  lng: number = -70.6109097;
  zoom:number = 16;
  
  marcadorSel:any = null;
  draggable:string="1";

  constructor ( public _ms:MapasService ){
    this._ms.cargarMarcadores();
  }

  clickMapa ( evento ){
    let nuevoMarcador:Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: "sin titulo",
      draggable: true
    }

    this._ms.insertarMarcador( nuevoMarcador);
  }

  clickMarcador( marcador:Marcador, i:number){
    console.log(marcador, i);
    this.marcadorSel = marcador;

  }

  
  dragEndMarcador(marcador:Marcador, evento){
    console.log(marcador, evento);
    let lat = evento.coords.lat;
    let lng = evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();

  }

 
}
