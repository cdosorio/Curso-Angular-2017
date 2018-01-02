import { Component } from '@angular/core';

//Servicios
import { ChatService  } from "./services/chat.service";   

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public _cs: ChatService) {
    
  }
}
