import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-por-template',
  templateUrl: './por-template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }    
    `]

})
export class PorTemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: "",
    sexo: "Hombre",
    acepta: false
  }

  //Arreglo de objetos
  paises = [
    {
      codigo: "CRI",
      nombre: "Costa Rica"
    },
    {
      codigo: "ESP",
      nombre: "ESpana"
    },
    {
      codigo: "CL",
      nombre: "Chile"
    },
  ]

  sexos: string[] = ["Hombre", "Mujer"]

  constructor() { }

  guardar(forma: NgForm) {

    console.log('ngForm', forma);
    console.log("Valor forma", forma.value);
    console.log("usuario", this.usuario)
  }

}
