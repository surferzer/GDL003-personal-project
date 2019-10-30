import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
   styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  
  eventName : string[]=[];  

  addEvent(newT){
    console.log(newT.value);
    
    this.eventName.push(newT.value)
    console.log(this.eventName[0]);
    newT.value="";
    newT.focus();
return false;
    
    }

    
  constructor() { }

  ngOnInit() {
  }

}
