import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, JsonPipe, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // My First Signal 🚀
  mySignal = signal(1); // == BehaviorSubject(1)

  setMySignal() {
    this.mySignal.set(42)
  }

  updateMySignal() {
    this.mySignal.update(v => v + 1)
  }

  // Derived State with `computed`
  counter1 = signal(1);
  counter2 = signal(2);
  counter3 = signal({count: 3})
  sum = computed(() => this.counter1() + this.counter2() + this.counter3().count) // == combineLatest

  incrementCounter1(): void {
    this.counter1.update(v => v + 1) // == BehaviorSubject.next
  }

  incrementCounter2(): void {
    this.counter2.update(v => v + 1)
  }

  incrementCounter3(): void {
    this.counter3.update(v => ({
      // v.count = v.count + 1
      // return v
      ...v,
      count: v.count + 1
    }))
  }

  // Run side-effects with `effect`
  valueForEffect = signal(42);

  setValueForEffect() {
    this.valueForEffect.update(v => v)
  }

  updateValueForEffect() {
    this.valueForEffect.update(v => v + 1)
  }

  manyStateUpdates() {
    this.updateValueForEffect();
    this.updateValueForEffect();
    this.updateValueForEffect();
    this.updateValueForEffect();
    this.updateValueForEffect();
    this.updateValueForEffect();
    this.updateValueForEffect();
    this.updateValueForEffect();
    this.updateValueForEffect();
    this.updateValueForEffect();
  }

  // RxJS Interop
  observableFromSignal$ = toObservable(this.sum)

  private myBehaviorSubject = new BehaviorSubject(42);
  signalFromObservable = toSignal(this.myBehaviorSubject);

  incrementObservable() {
    this.myBehaviorSubject.next(this.myBehaviorSubject.value + 1);
  }

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
    // Run side-effects with `effect`
    effect(() => {
      console.log('valueForEffect updated', this.valueForEffect())
    });

    // RxJS Interop
    this.observableFromSignal$.subscribe(v => console.log('obs$ emit', v))
  }
}
