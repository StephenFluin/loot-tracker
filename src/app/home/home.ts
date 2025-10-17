import { Component, signal } from '@angular/core';
import { Hydrated } from '../hydrated/hydrated';
import { Unhydrated } from '../unhydrated/unhydrated';
import { Deferred } from '../deferred/deferred';

@Component({
  selector: 'app-home',
  imports: [],
  template: ` Pick a demo to get started. `,
})
export class Home {
  state = 'great';
  signalState = signal('awesome');

  constructor() {
    this.signalState.update((value) => value + '!!!');
  }
}
