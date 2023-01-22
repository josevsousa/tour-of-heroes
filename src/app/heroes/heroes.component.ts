import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

 heroes = HEROES;

 // armazena um hero pela funcao onSelect
 selectedHero?: Hero;  
 
 // envia o hero recebido para o selecteHero
 onSelect(hero: Hero): void{
  this.selectedHero = hero;
 }
  
}
