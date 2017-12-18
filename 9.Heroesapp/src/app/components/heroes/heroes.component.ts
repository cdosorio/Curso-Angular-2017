import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent {

  heroes: any[] = [];
  loading:boolean = true;

  constructor(private _heroesService: HeroesService) {

    this._heroesService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
        this.loading = false;            
                  
        /*   setTimeout(() => {
            this.loading = false;
            this.heroes = data;
          }, 3000); */
          
      })
  }


  borraHeroe( key$:string){

    this._heroesService.borraHeroe(key$)
          .subscribe( respuesta=>{
            if (respuesta){ //segun la documentacion de Firebase, si el DELETE no devuelve null, entonces es error
              console.error(respuesta);
            }else{
              //todo bien, eliminarlo del objeto. Si fuera arreglo seria con splice
              delete this.heroes[key$];
            }         
          })
  }
}
