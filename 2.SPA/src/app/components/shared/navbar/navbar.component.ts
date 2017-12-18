import { Component, OnInit } from '@angular/core';
import { HttpModule } from "@angular/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe( termino: string ){
    this._router.navigate( ['/filtered-heroes',termino]);
  }
}
