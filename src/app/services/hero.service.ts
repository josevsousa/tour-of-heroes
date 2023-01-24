import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//servicos importados
import { MessageService } from './message.service';

import { Hero } from '../models/hero';
import { HEROES } from '../mock-heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // retorna lista de Heroes de forma sincrona
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  // retorna lista de Heroes usando o observable para tornar a funão assincrona para o navegador
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;   
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

}
