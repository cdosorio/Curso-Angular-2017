import { Component, OnInit, Input } from '@angular/core'; //Input es para pasarle data mediante una propiedad

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  @Input('peliculas') peliculas;
  @Input('titulo') titulo;

  constructor() { }

  ngOnInit() {
  }
 
}
