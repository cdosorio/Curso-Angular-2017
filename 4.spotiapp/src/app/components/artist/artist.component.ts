import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  toptracks: any[] = [];

  constructor( private _activatedRoute: ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params
                        .map( _params => _params['id'])
                        .subscribe ( _id => { //funcion de flecha

                            console.log( _id );
                            this._spotify.getArtista( _id ).
                                subscribe( artista => {
                                console.log(artista);
                                this.artista = artista;
                            });

                            this._spotify.getTop( _id ).
                                subscribe( pistas => {
                                  console.log( pistas);
                                  this.toptracks = pistas;
                                })
                        } )
  }

}
