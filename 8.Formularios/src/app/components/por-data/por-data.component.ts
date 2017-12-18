import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';
import { Observable } from 'rxjs/Observable';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-por-data',
  templateUrl: './por-data.component.html',
  styles: []
})
export class PorDataComponent {

  forma: FormGroup;

  usuario: Object = {
    nombrecompleto: {
      nombre: "fernando",
      apellido: "herrera"
    },
    correo: 'cdosorio@gmail.com' ,
    //pasatiempos:["correr","Dormir","comer"]  
  }

  constructor() {

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', [
                                        Validators.required,
                                        this.noHerrera
                                      ]),
      }),
     
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),

      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),

      'username': new FormControl('', Validators.required, this.existeUsuario),

      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()      
    })

    //otra forma de setear los validators:
    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind( this.forma)      //dentro de noIgual el this está vacío, por eso debemos asignarselo a mano
    ])

    //Detectar cambios en los valores de un control
    this.forma.controls['username'].valueChanges
      .subscribe( data => {
        console.log(data);
      })

    this.forma.controls['username'].statusChanges
      .subscribe( data => {
        console.log(data);
      })



    //para setear el formulario
    //this.forma.setValue( this.usuario);

  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required )
    )
  }

  //validaciones personalizadas
  noHerrera(control: FormControl ): { [s:string]:boolean}{
    if (control.value === "herrera"){
      return {
        noHerrera:true
      }
    }

    //si devuelve null es que pasó la validación
    return null;
  }

  noIgual(control: FormControl ): { [s:string]:boolean}{
    //gracias al bind, dentro de esta función tenemos que: this = forma

    //para hacerlo mas claro, seteamos una variable local
    let forma:any = this;

    if (control.value !== forma.controls['password1'].value ){
      return {
        noIgual:true
      }
    }
    
    return null;
  }
   
  existeUsuario (control: FormControl): Promise<any>|Observable<any>{
    let promesa = new Promise(
      (resolve, reject) => {

        setTimeout( () =>{
          if (control.value === "strider"){
            resolve( {existe:true} )            
          }else{
            resolve( null )
          }        
          
        }, 3000 )
      }
    )

    return promesa;
  }

  guardar() {

    console.log(this.forma.value);
    console.log(this.forma);

    //para resetear el formulario
    //this.forma.reset({});


  }
}
