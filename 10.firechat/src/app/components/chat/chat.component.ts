import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../services/chat.service";
//import { setTimeout } from 'timers';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento: any;

  constructor(public _cs: ChatService) {

    this._cs.cargarMensajes() //hay que suscribirse al observable para que este se ejecute
      .subscribe(() => {

        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20);

      })
    // .subscribe( (mensajes:any[])=>{ 
    //   console.log(mensajes);
    //})

  }

  ngOnInit() {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this._cs.agregarMensaje(this.mensaje)
      .then(() => this.mensaje = "")
      .catch((err) => console.log('Error al enviar', err));


  }

}
