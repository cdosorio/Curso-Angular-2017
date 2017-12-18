import { Injectable } from '@angular/core';
//HttpClient es un servicio. Tambien se requiere importar HttpClientModule en app.module.
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
//para el map
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas: any[] = [];
  toptracks: any[] = [];
  
  urlSpotify: string = 'https://api.spotify.com/v1/';
  token: string = 'BQDBZfQygYmu5rLpLQ3YvzDU4NLZm9KeLv01jbpNoyqRUBI6VZS1reKj_fdhLg8MQveXgvAeDsSisIBtoNNAaQ';


  constructor(public _http: HttpClient) {  }

  private getHeaders() : HttpHeaders {
    let _headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return _headers;
  }

  getArtistas(termino: string){
    let _url = `${ this.urlSpotify}search?query=${ termino }&type=artist&limit=20`; //Templates literales de ES6
    let headers = this.getHeaders();

    return this._http.get(_url, { headers}) //observable: no se dispara a menos que estemos suscritos a ellos
                  .map( (resp: any) => {
                      this.artistas = resp.artists.items;
                      return this.artistas;
                  })            
  }

  getArtista( id: string){
    let _url = `${ this.urlSpotify}artists/${ id }`;
    let headers = this.getHeaders();

    return this._http.get(_url, { headers}) //observable: no se dispara a menos que estemos suscritos a ellos
                  .map( (resp: any) => {
                      this.artistas = resp;
                      return this.artistas;
                  })
  }

  getTop( id: string ){
    let _url = `${ this.urlSpotify}artists/${ id }/top-tracks?country=US`;
    let headers = this.getHeaders();

    return this._http.get(_url, { headers}) //observable: no se dispara a menos que estemos suscritos a ellos
                  .map( (resp: any) => {
                      this.toptracks = resp.tracks;
                      return this.toptracks;
                  })
  }

}
