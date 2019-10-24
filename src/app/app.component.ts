import { Component } from '@angular/core';
import { Url } from 'url';
import { HtmlAstPath } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
 
  fighters : string[]= ["juan", "eduardo", "luis", "cristian"]
  id: number;
  name: string;
  age: string;
  weight: string;
  yearsOfTrainning: number;
  category: string;
  notes: string;
  photo: string;





  constructor() {
    this.id = 1;
    this.name = "Juan Pablo Benítez Rodríguez"
    this.age = "25 años"
    this.weight = "-61kgs"
    this.yearsOfTrainning = 2;
    this.category = "male paja"
    this.notes = "lesion en rodilla derecha, qx hace 2 años"
    this.photo = "https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.0-9/49697075_2008398092575906_4042235571874037760_n.jpg?_nc_cat=105&_nc_oc=AQmc7NEhRt0G9Uhd7AGo1eTqyY4ubeZWYRRuNo7BIXbUD-hKkvL7_FXZeN8E7Fwxhx4&_nc_ht=scontent.fgdl3-1.fna&oh=4a026a71a2ba45609748d880b5bd2418&oe=5E266A8C"
  }
}
