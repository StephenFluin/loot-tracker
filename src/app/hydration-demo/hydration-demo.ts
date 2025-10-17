import { Component } from '@angular/core';
import { Hydrated } from '../hydrated/hydrated';
import { Unhydrated } from '../unhydrated/unhydrated';

@Component({
  selector: 'app-hydration-demo',
  imports: [Hydrated, Unhydrated],
  template: `
    <h3>Hydration Demo</h3>
    <app-hydrated />
    <app-unhydrated />
  `,
  styles: ``,
})
export class HydrationDemo {}
