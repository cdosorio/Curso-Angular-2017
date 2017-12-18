import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta: string = "alert-danger";
  cargando:boolean = false;

  propiedades:Object = {
    danger: false
  }

  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.cargando = true;

    //simular un proceso asincrono que toma 3 segundos
    //setTimeout( ()=> this.cargando = false,  3000 )
  }

}
