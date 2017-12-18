import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class PendientesComponent implements OnInit {

    constructor( public _listaDeseos : ListaDeseosService, private _navController: NavController ) { }

    ngOnInit() { }

    irAgregar(){
        this._navController.push(AgregarComponent);
    }

    verDetalle(lista, idx){
        this._navController.push(DetalleComponent, {lista,idx});
    }
}   