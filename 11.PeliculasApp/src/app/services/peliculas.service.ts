import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http"; //usaremos Jsonp y no Http porque el primero permite peticiones cross domain
import 'rxjs/Rx'; //para el Map

@Injectable()
export class PeliculasService {
  
  private apikey:string = "8ab85085b098230bed087c17ec3e3fef";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  public urlImagen300:string ="image.tmdb.org/t/p/w300";

  constructor( private jsonp:Jsonp ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());                
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
