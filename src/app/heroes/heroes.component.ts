import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

 heroes: Hero[] = []; 

 constructor(private heroService: HeroService){}

  ngOnInit(): void{
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes_ => this.heroes = heroes_)
  }

  add(name: String): void{
    name = name.trim();
    if(!name){return};
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}