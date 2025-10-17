import { Component, signal } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-lazy',
  imports: [],
  template: `
    <p>lazy works!</p>
    <button (click)="complexProcess()">Enable Wow</button>
    {{ msg() }}
  `,
  styles: ``,
})
export class Lazy {
  msg = signal('');

  complexProcess() {
    const date = format(new Date('2025-10-17'), 'YYYY-MM-DD');
    this.msg.set('Wow is enabled!');
  }
}
