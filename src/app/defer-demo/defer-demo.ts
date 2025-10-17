import { Component } from '@angular/core';
import { Deferred } from '../deferred/deferred';

@Component({
  selector: 'app-defer-demo',
  imports: [Deferred],
  template: `
    <h3>&#64;defer Demo</h3>
    <p>A component that is deferred loading hover:</p>
    @defer (on hover) {
    <app-deferred />
    } @placeholder {
    <div style="border:1px solid blue;padding:8px;">Component placeholder</div>
    }
    <p>A component that is deferred hydration until hover:</p>
    @defer(hydrate on hover) {
    <app-deferred />
    }
  `,
  styles: ``,
})
export class DeferDemo {}
