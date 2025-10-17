import { Component } from '@angular/core';

@Component({
  selector: 'app-unhydrated',
  host: { ngSkipHydration: 'true', style: '' },
  template: `
    <h3>Unhydrated Component</h3>
    <p>{{ description }}</p>
  `,
  styles: ``,
})
export class Unhydrated {
  description = 'This component had to be recreated to be rendered.';
}
