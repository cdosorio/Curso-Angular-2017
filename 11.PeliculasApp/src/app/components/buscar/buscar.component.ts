import { Component, OnInit } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent{

  titulo:string = '';
  peliculas: any[] = [];

  constructor(public _ps:PeliculasService, public router:ActivatedRoute) { 
    this.router.params.subscribe (parametros =>{
      
      if ( parametros['texto']) {
        this.titulo = parametros['texto'];
        this.buscarPorTitulo();
      }
    })
  }

  buscarPorTitulo() {
    if (this.titulo.length == 0){
      return ;
    }
    
    this._ps.buscarPelicula(this.titulo)
            .subscribe(data => {            
              this.peliculas = data.results;        
            });
  }

}
