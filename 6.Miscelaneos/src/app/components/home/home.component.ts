import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
  <app-ng-style></app-ng-style>
  <hr>
  <h3>2.Aplicando css solo a un componente</h3>
  <app-css></app-css>
  <p>
      hola mundo fuera del component
  </p>
  <hr>
  <h3>3.ngClass</h3>
  <app-clases></app-clases>
  <hr>
  <h3>5.Directivas personalizadas</h3>
  <p [appResaltado]="'orange'">
      Hola mundo
  </p>
  <hr>
  <h3>6.ngSwitch</h3>
  <app-ng-switch></app-ng-switch>
  
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
