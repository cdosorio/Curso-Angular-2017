import { Component } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  cartelera: any[] = [];
  populares: any[] = [];
  
  constructor(public _ps:PeliculasService){
    
    this._ps.getEnCartelera()
            .subscribe(data => {
              //console.log(data);
              this.cartelera = data.results;        
            });

    this._ps.getPopulares()
          .subscribe(data => {            
            this.populares = data.results;        
          });
  }

}
