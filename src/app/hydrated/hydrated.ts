import { Component } from '@angular/core';

@Component({
  selector: 'app-hydrated',
  imports: [],
  template: `
    <p>hydrated works!</p>
    <p>{{ description }}</p>
  `,
  styles: ``,
})
export class Hydrated {
  description = 'This component was hydrated from the server and did not have to be recreated.';
}
