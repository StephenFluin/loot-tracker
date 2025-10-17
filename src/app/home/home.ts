import { Component, signal } from '@angular/core';
import { Hydrated } from '../hydrated/hydrated';
import { Unhydrated } from '../unhydrated/unhydrated';
import { Deferred } from '../deferred/deferred';

@Component({
  selector: 'app-home',
  imports: [Hydrated, Unhydrated, Deferred],
  template: `
    <p>home works!</p>
    <p>Your state is {{ state }}</p>
    <p>Your signal state is {{ signalState() }}</p>
    <app-hydrated />
    <app-unhydrated />

    @defer(hydrate on hover) {
    <app-deferred />
    }
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
