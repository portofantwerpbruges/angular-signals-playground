import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient, httpResource } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bla',
  imports: [
    FormsModule,
    JsonPipe
  ],
  template: `
    <h3>Http Resource</h3>

    <span class="badge badge-danger">Experimental</span>

    <div class="mt-3">
      <form>
        <input name="search" [ngModel]="search()" (ngModelChange)="search.set($event)" [placeholder]="'Search for jokes...'">
      </form>

      <button (click)="reload()">Reload</button>
      <button (click)="clear()">Clear</button>

      <pre>hasValue: {{ chuckNorrisJokes.hasValue() | json }}</pre>
      <pre>value: {{ chuckNorrisJokes.value() | json }}</pre>
      <pre>error: {{ chuckNorrisJokes.error() | json }}</pre>
      <pre>isLoading: {{ chuckNorrisJokes.isLoading() }}</pre>
      <pre>status: {{ chuckNorrisJokes.status() }}</pre>
    </div>
  `
})
export class HttpResourceComponent {
  search = signal('');

  chuckNorrisJokes = httpResource(() => 'https://api.chucknorris.io/jokes/search?query=' + this.search())

  reload(): void {
    this.chuckNorrisJokes.reload()
  }

  clear(): void {
    this.chuckNorrisJokes.set([])
  }
}
