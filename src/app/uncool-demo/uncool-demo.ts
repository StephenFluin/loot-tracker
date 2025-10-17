import { httpResource } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-uncool-demo',
  template: `<h3>State Demo - a list of UNCOOL things</h3>

    @if (coolThings.isLoading()) {
    <div class="loading">
      <p>Loading uncool things...</p>
    </div>
    } @if (coolThings.error()) {
    <div class="error">
      <p>Error loading uncool things: {{ coolThings.error()?.message }}</p>
      <button (click)="reload()">Try Again</button>
    </div>
    } @if (coolThings.value(); as coolThingsList) {
    <div class="cool-things">
      @if (coolThingsList.length === 0) {
      <p>No uncool things found.</p>
      } @else {
      <ul>
        @for (thing of coolThingsList; track $index) {
        <li>
          <h4>{{ thing }}</h4>
        </li>
        }
      </ul>
      }
    </div>
    }`,
  styles: ``,
})
export class UncoolDemo {
  coolThings = httpResource<string[]>(() => ({
    url: '/api/uncool-things',
    transferCache: false,
  }));
  reload() {
    this.coolThings.reload();
  }
}
