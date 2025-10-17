import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1 (click)="incrementCounter()">
      <span>{{ title() }}!</span>
      @if(increment()) { ({{ increment() }}) }
    </h1>
    <nav>
      <div><a routerLink="/">Home</a></div>
      <div><a routerLink="/state">State Transfer</a></div>
      <div><a routerLink="/hydration-demo">Hydration Demo</a></div>
      <div><a routerLink="/defer-demo">Defer Demo</a></div>
    </nav>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal("Stephen's ng-conf Demo");
  protected readonly increment = signal(0);

  protected incrementCounter() {
    this.increment.update((value) => value + 1);
  }
}
