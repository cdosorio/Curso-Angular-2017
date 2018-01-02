import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../../services/peliculas.service";   

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(public _ps:PeliculasService) { }

  buscarPelicula( texto:string){
    if (texto.length == 0){
      return ;
    }

    this._ps.buscarPelicula(texto)
        .subscribe( data => console.log(data) )
  }

}
