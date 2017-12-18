import { Injectable } from '@angular/core';
import { Lista } from '../clases/lista';


@Injectable()
export class ListaDeseosService {

    listas: Lista[] = []

    constructor() {

        // let lista1 = new Lista('compras supermercado');
        // let lista2 = new Lista('compras sodimac');
       
        // this.listas.push( lista1 );
        // this.listas.push( lista2 );
        this.cargarData();

        console.log('servicio inicializado');
    }

    actualizarData() {
        localStorage.setItem("data", JSON.stringify(this.listas));
    }

    cargarData() {
        if ( localStorage.getItem("data") ){
            this.listas = JSON.parse(localStorage.getItem("data"));
        }        
    }

    agregarLista(lista: Lista) {
        this.listas.push(lista);
        this.actualizarData();
    }

    eliminarLista(idx: number) {
        this.listas.splice(idx,1);
        this.actualizarData();
    }
}