import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent implements OnInit,OnChanges{
  @Input() hero: Hero;
  @Input('master') masterName: string;

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('HeroChildComponent _ On changes');
 }
 ngOnInit(): void {
     console.log('HeroChildComponent _ On INIT');
 }
}
