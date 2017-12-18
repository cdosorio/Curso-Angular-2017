import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';  //Mas nuevo, usar import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx'; //para el map
 


@Injectable()
export class HeroesService {

  fireURL:string = "https://heroesapp-a049e.firebaseio.com/heroes.json";
  heroeURL:string = "https://heroesapp-a049e.firebaseio.com/heroes/";

  constructor( private http:Http) { }

  
  nuevoHeroe ( heroe:Heroe ){
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    //observable: no se dispara a menos que estemos suscritos a ellos
    return this.http.post( this.fireURL, body, { headers} )
            .map( res=>{
              console.log(res.json());
              return res.json();
            })          
  }


  actualizarHeroe ( heroe:Heroe, key$:string ){
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.heroeURL }/${ key$ }.json`;

    console.log(url);

    //observable: no se dispara a menos que estemos suscritos a ellos
    return this.http.put( url, body, { headers} )
            .map( res=>{
              console.log(res.json());
              return res.json();
            })          
  }


  getHeroe( key$:string ){

    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get( url )
      .map( res=>res.json());
  }


  getHeroes( ){
    
    return this.http.get( this.fireURL )
      .map( res=>res.json());
  }


  borraHeroe(key$:string){

    let url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.delete( url )
      .map( res=>res.json());
  }

}
