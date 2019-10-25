import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-fighters-by-category',
  templateUrl: './fighters-by-category.component.html',
  styleUrls: ['./fighters-by-category.component.css']
})
export class FightersByCategoryComponent implements OnInit {
@Input() nameFighter
  constructor() { }

  ngOnInit() {
  }

}
