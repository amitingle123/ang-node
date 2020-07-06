import { Component, OnInit, OnChanges } from '@angular/core';

import { HEROES } from './hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  `
})
export class HeroParentComponent implements OnInit, OnChanges{
    heroes = HEROES;
    master = 'Master';

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log('------ngOnChanges-----');
  }
  ngOnInit(): void {
      console.log('******ngOnInit******');
  }
 
}
