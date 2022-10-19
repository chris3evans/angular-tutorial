import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
    // heroService = instance of HeroService when a new HeroesComponent is created
  }

  selectedHero?: Hero;
  heroes: Hero[] = [];

  onSelect(hero: Hero): void {
    // The current "selectedHero" is set to whatever "hero" was clicked on
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((result) => (this.heroes = result));
  }

  ngOnInit(): void {
    // Call the getHeroes method in this component class
    this.getHeroes();
  }
}
