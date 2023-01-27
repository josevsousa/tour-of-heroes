import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  public teste: any[] = [2, "jose", "sousa"]; 

  constructor(private heroService: HeroService){}

  ngOnInit(): void{
  }

  // tem que se inscrever na getHeroes HeroService
  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes_ => this.heroes = heroes_.slice(1, 5)); 
  }
  // retorna a lista dividida de heróis nas posições 1 e 5, retornando apenas os Heróis dois, três, quatro e cinco.

}
