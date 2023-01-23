import { Component, Input } from '@angular/core';
import { Hero } from '../models/hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  // recebe um valor na chamada desse component "<app-hero-detail [hero]="selectedHero"></app-hero-detail>"
  @Input() hero?: Hero;

}
