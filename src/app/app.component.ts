import { Component, Input, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { Url } from 'url';
import { HtmlAstPath } from '@angular/compiler';
import figthersList from '../assets/figthersList.json';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  fighters = figthersList
  newR: string[] = [];
  selectedFighters: string[] = [];


  randomThis() {
    let aleatorio = [];
    // let versusAleatorio=[];


    for (let i = 0; i < this.fighters.length; i++) {
      aleatorio.push(Math.floor(Math.random() * (this.fighters.length - 1)));
      // versusAleatorio.push(Math.floor(Math.random() * (this.fighters.length - 1)));

      let removed = this.fighters.splice(aleatorio[0], 1)
      this.selectedFighters.push(removed[0].name);
      console.log(this.selectedFighters)
      let resultado = removed[0].name

      console.log(resultado)
      this.newR.push(resultado)

      //return console.log(this.newR);  
      return resultado;

    }

  }

  round2: string[] = [];

  winner() {
    this.round2.push(this.selectedFighters[0]);
  }

  winner1() {
    this.round2.push(this.selectedFighters[1]);
  }

  winner2() {
    this.round2.push(this.selectedFighters[2]);
  }

  winner3() {
    this.round2.push(this.selectedFighters[3]);
  }

  winner4() {
    this.round2.push(this.selectedFighters[4]);
  }

  winner5() {
    this.round2.push(this.selectedFighters[5]);
  }

  winner6() {
    this.round2.push(this.selectedFighters[6]);
  }

  winner7() {
    this.round2.push(this.selectedFighters[7]);
  }

  winner8() {
    this.round2.push(this.selectedFighters[8]);
  }


  title: string[] = [];


  myTitle() {
    return this.title.push(this.round2[0]);
  }

  myTitle1() {
    return this.title.push(this.round2[1]);
  }

  myTitle2() {
    return this.title.push(this.round2[2]);
  }

  myTitle3() {
    return this.title.push(this.round2[3]);
  }

  almostChampion: string[] = [];

  aChamp() {
    return this.almostChampion.push(this.title[0]);
  }

  aChamp1() {
    return this.almostChampion.push(this.title[1]);
  }


  getPhoto() {

  }

  id: string;
  name: string;
  age: string;
  weight: string;

  category: string;
  notes: string;
  photo: string;




  constructor() {

    this.id = this.fighters[0].id
    this.name = this.fighters[0].name
    this.age = this.fighters[0].age
    this.weight = this.fighters[0].weight

    this.category = this.fighters[0].category
    this.notes = this.fighters[0].notes
    this.photo = this.fighters[0].photo


  }
}
