import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // metodo usando o observable para tornar a funão assincrona para o navegador
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    return heroes;   
  }

}
