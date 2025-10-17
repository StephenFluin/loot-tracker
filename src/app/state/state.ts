import { Component, resource } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';

interface CoolThing {
  id: number;
  name: string;
  description?: string;
}

@Component({
  selector: 'app-state',
  imports: [CommonModule],
  template: `
    <h3>State Demo - a list of cool things</h3>

    @if (coolThings.isLoading()) {
    <div class="loading">
      <p>Loading cool things...</p>
    </div>
    } @if (coolThings.error()) {
    <div class="error">
      <p>Error loading cool things: {{ coolThings.error()?.message }}</p>
      <button (click)="reload()">Try Again</button>
    </div>
    } @if (coolThings.value(); as coolThingsList) {
    <div class="cool-things">
      @if (coolThingsList.length === 0) {
      <p>No cool things found.</p>
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
    }
  `,
})
export class State {
  coolThings = httpResource<string[]>(() => '/api/cool-things');
  uncoolThings = httpResource<string[]>(() => ({
    url: '/api/uncool-things',
    transferCache: false,
  }));
  constructor() {}
  reload() {
    this.coolThings.reload();
    this.uncoolThings.reload();
  }
}
