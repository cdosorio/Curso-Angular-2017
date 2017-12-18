import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/lista';

//el pure = false es para que se mantenga escuchando los cambios

//Este pipe deberia llamarse terminados.
@Pipe({name: 'pendientes', pure: false}) 
export class PendientesPipe implements PipeTransform {
    transform(listas:Lista[], isTerminada: boolean = false): Lista[] {
        
        let listaFiltrada: Lista[] = [];

        for (let lista of listas){
            if (lista.terminada == isTerminada){
                listaFiltrada.push (lista);
            }
        }

        return listaFiltrada;
    }
}