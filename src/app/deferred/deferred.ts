import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-deferred',
  template: `
    <h3>Deferred Component</h3>
    <p>
      This component isn't wired up until the deferred event fires, so we won't load the lazy
      component in its outlet.
    </p>
  `,
  styles: ``,
})
export class Deferred {
  constructor() {
    console.log('Calculated expensive thing');
  }
}
