import { Pipe, PipeTransform } from '@angular/core';


//permite pasar un objeto a arreglo
@Pipe({
  name: 'keys',
  pure: false //para que este pendiente de los cambios
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    
    let keys = [];
    for (let key in value){
      keys.push(key)
    }

    return keys;
  }

}
