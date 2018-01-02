import { Component } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  peliculas: any[] = [];

  constructor(public _ps:PeliculasService){
    this._ps.getPopulares()
            .subscribe(data => {
              console.log(data);
              this.peliculas = data.results;        
            });
  }

}
