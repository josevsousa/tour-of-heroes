import { Component } from '@angular/core';
import { Hero } from '../models/hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
/*
    //modelo do balta
    public heroes: Hero[] = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

*/

 // modelo1 do Angular.io
//  heroes = HEROES;

 heroes: Hero[] = []; 

 constructor(private heroService: HeroService) {

 }

 //carrega na inicialização do component
 ngOnInit(): void{
  this.getHeroes();
 }

 // funcao para alimentar o arrey heroes desse componente
 getHeroes(): void{
  /* 
    //alimenta o array de forma sincrona
    this.heroes = this.heroService.getHeroes(); 
  */

  // alimaneta o array de forma assincrona se enscrevendo na funao getHeros do heroservice  
  this.heroService.getHeroes()
    .subscribe(heroes_ => this.heroes = heroes_)
}

 // armazena um hero pela funcao onSelect
 selectedHero?: Hero;  
 
 // envia o hero recebido para o selecteHero
 onSelect(hero: Hero): void{
  this.selectedHero = hero;
 }
  
}