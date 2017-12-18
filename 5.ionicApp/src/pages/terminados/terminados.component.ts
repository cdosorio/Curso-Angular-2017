import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-terminados',
    templateUrl: './terminados.component.html'
})
export class TerminadosComponent implements OnInit {

    constructor( public _listaDeseos : ListaDeseosService, private _navController: NavController ) { }

    ngOnInit() { }
   
    verDetalle(lista, idx){
        this._navController.push(DetalleComponent, {lista,idx});
    }
}   