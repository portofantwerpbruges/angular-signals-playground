import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {




  // Resource API
  search = signal('');
  fetchJokes(v: string) {
    return this.httpClient.get(
      'https://api.chucknorris.io/jokes/search?query=' + v
    );
  }
  chuckNorrisJokes = rxResource({
    request: () => ({search: this.search()}),
    loader: (v) => this.fetchJokes(v.request.search)
  })

  constructor(private httpClient: HttpClient) {

  }
}
