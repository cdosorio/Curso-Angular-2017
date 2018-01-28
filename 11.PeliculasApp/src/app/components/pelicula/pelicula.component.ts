import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any = {};
  regresarA: string = "";
  busqueda: string = "";

  constructor(private route: ActivatedRoute, private _ps: PeliculasService) {
    this.route.params.subscribe( parametros => {

        this.regresarA = parametros['pag'];

        if (parametros['busqueda']){
          console.log('param busqueda:' + parametros['busqueda']);
          this.busqueda = parametros['busqueda'];
        }

        this._ps.getById(parametros['id']).
          subscribe(peli => {  
             this.pelicula = peli;
          });

      })
  }

  ngOnInit() {}

}
