import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http"; //usaremos Jsonp y no Http porque el primero permite peticiones cross domain
import 'rxjs/Rx'; //para el Map
import * as moment from 'moment';

@Injectable()
export class PeliculasService {
  
  private apikey:string = "8ab85085b098230bed087c17ec3e3fef";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any[] = []; //para guardar resultados de busqueda y nmostrarlos al volver al buscador
  

  constructor( private jsonp:Jsonp ) { }

  getEnCartelera(){
    
    let fechaActual = moment();
    let f1 = moment(fechaActual).subtract(10,'days').format("YYYY-MM-DD");
    let f2 =  moment(fechaActual).format("YYYY-MM-DD");
    
    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${f1}&primary_release_date.lte=${f2}&api_key=${ this.apikey }&region=US&callback=JSONP_CALLBACK`;
    //console.log(url);
    return this.jsonp.get( url )
                .map( res=> res.json());                
  }

  getById(id:number){
    
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    console.log(url);
    
    return this.jsonp.get( url )
                .map( res=> res.json());                
  }

  getPopulares(){
    
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());                
  }

  buscarPelicula( titulo:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ titulo }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get( url )
                .map( res=> {
                  this.peliculas = res.json().results;
                  return res.json();
                });
  }

}
