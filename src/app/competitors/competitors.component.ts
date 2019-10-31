import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';




 
@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})
export class CompetitorsComponent implements OnInit {
  
  @Input()  fighters = AppComponent;

  id: string;
  name: string;
  age: string;
  weight: string;

  category: string;
  notes: string;
  photo: string;

  constructor() { }

  ngOnInit() {
  }

}
