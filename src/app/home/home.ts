import { Component, signal } from '@angular/core';
import { Hydrated } from '../hydrated/hydrated';
import { Unhydrated } from '../unhydrated/unhydrated';

@Component({
  selector: 'app-home',
  imports: [Hydrated, Unhydrated],
  template: `
    <p>home works!</p>
    <p>Your state is {{ state }}</p>
    <p>Your signal state is {{ signalState() }}</p>
    <app-hydrated />
    <app-unhydrated />
  `,
  styles: ``,
})
export class Home {
  state = 'great';
  signalState = signal('awesome');

  constructor() {
    this.signalState.update((value) => value + '!!!');
  }
}
