import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { rxResource } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bla',
  imports: [
    FormsModule,
    JsonPipe
  ],
  template: `
    <h3>Resource API</h3>

    <span class="badge badge-danger">Experimental</span>

    <div class="mt-3">
      <form>
        <input name="search" [ngModel]="search()" (ngModelChange)="search.set($event)" [placeholder]="'Search for jokes...'">
      </form>

      <pre>hasValue: {{ chuckNorrisJokes.hasValue() | json }}</pre>
      <pre>value: {{ chuckNorrisJokes.value() | json }}</pre>
      <pre>error: {{ chuckNorrisJokes.error() | json }}</pre>
      <pre>isLoading: {{ chuckNorrisJokes.isLoading() }}</pre>
      <pre>status: {{ chuckNorrisJokes.status() }}</pre>
    </div>
  `
})
export class RxResourceComponent {
  private httpClient = inject(HttpClient);

  fetchJokes(v: string) {
    return this.httpClient.get(
      'https://api.chucknorris.io/jokes/search?query=' + v
    );
  }

  search = signal('');
  chuckNorrisJokes = rxResource({
    request: () => ({search: this.search()}),
    loader: (v) => this.fetchJokes(v.request.search)
  })
}
