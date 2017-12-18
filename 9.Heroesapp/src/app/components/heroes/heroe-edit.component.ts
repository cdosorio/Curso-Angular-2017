import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe-edit',
  templateUrl: './heroe-edit.component.html',
  styles: []
})
export class HeroeEditComponent {

  //para setear valores por defecto en el form
  private heroe:Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }

  nuevo:boolean = false;
  id:string;

  constructor(private _heroesService: HeroesService, private _router:Router, private _activatedRoute:ActivatedRoute) {
      this._activatedRoute.params
                          .subscribe( parametros=>{
                              this.id = parametros['id'];
                              
                              if (this.id !== "nuevo"){
                                this._heroesService.getHeroe( this.id)
                                      .subscribe( data => this.heroe = data)
                              }
                          }  )
   }

  
  guardar(){
    console.log(this.heroe);

    if (this.id == "nuevo"){
      this._heroesService.nuevoHeroe( this.heroe)
                        .subscribe( data =>{        
                              this._router.navigate(['/heroe',data.name])
                          },
                        error=>console.error(error));     
    }else{
      this._heroesService.actualizarHeroe( this.heroe, this.id)
                        .subscribe( data =>{        
                              this._router.navigate(['/heroe',this.id])
                          },
                        error=>console.error(error));     
    }
  }


  agregarNuevo( forma:NgForm){

    this._router.navigate(['/heroe','nuevo']);
    forma.reset({
      casa:"Marvel"
    });

  }

}
