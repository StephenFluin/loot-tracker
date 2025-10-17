import { Component } from '@angular/core';

@Component({
  selector: 'app-unhydrated',
  imports: [],
  host: { ngSkipHydration: 'true', style: '' },
  template: `
    <p>unhydrated works!</p>
    <p>{{ description }}</p>
  `,
  styles: ``,
})
export class Unhydrated {
  description = 'This component had to be recreated to be rendered.';
}
