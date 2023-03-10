import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';
import { Hero } from '../models/hero';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // recebe um valor na chamada desse component "<app-hero-detail [hero]="selectedHero"></app-hero-detail>"
  // @Input() hero?: Hero;
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private http: HttpClient,
    private location: Location
  ){}
  //O location um serviço Angular para interagir com o navegador. Este serviço permite navegar de volta para a visualização anterior.

  ngOnInit(): void{
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    if(this.hero){ //pegar o hero selecionado
      this.heroService.updateHero(this.hero) //chama func updateHero passando o hero selicionado
        .subscribe(()=> this.goBack());
    }
  }

  
}
