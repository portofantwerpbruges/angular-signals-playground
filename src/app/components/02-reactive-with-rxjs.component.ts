import {  Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [
    AsyncPipe
  ],
  template: `
    <h3>😈Reactive with RxJS</h3>

    <pre>a: {{ a$ | async }}</pre>
    <pre>b: {{ b$ | async }}</pre>
    <pre>sum: {{ sum$ | async }}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="incrementA()">Increment a</button>
    <button class="btn btn-outline-primary" (click)="incrementB()">Increment b</button>
  `
})
export class ReactiveWithRxjsComponent {
  // 👇 BehaviorSubject is reactive!
  a$ = new BehaviorSubject(1);
  b$ = new BehaviorSubject(2);

  // Sum is calculated whenever a$ or b$ emit a value
  sum$ = combineLatest([this.a$, this.b$]).pipe(
    map(([a, b]) => {
      return a + b;
    })
  )

  incrementA() {
    this.a$.next(this.a$.value + 1);
  }

  incrementB() {
    this.b$.next(this.b$.value + 1);
  }
}
