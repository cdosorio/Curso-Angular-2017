import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(private router:Router) { }

  buscarPelicula( texto:string){
    if (texto.length == 0){
      return ;
    }

    this.router.navigate(['buscar',texto])
  }

}
