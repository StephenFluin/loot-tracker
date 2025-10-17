import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1 (click)="incrementCounter()">
      <span>Welcome to {{ title() }}! </span>
      @if(increment()) { ({{ increment() }}) }
    </h1>
    <nav>
      <div><a routerLink="/">Home</a></div>
      <div><a routerLink="/about">About</a></div>
      <div><a routerLink="/auth">Sign In</a></div>
    </nav>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('loot-tracker');
  protected readonly increment = signal(0);

  protected incrementCounter() {
    this.increment.update((value) => value + 1);
  }
}
