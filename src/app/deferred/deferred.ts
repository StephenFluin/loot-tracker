import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-deferred',
  imports: [RouterOutlet],
  template: `
    <p>deferred works!</p>
    <p>
      This component isn't wired up until the deferred event fires, so we won't load the lazy
      component in its outlet.
    </p>
    <router-outlet></router-outlet>
  `,
  styles: ``,
})
export class Deferred {}
