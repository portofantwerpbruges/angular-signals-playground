import { Component, computed, signal } from '@angular/core';

@Component({
  template: `
    <h3>Derived State with <code>computed</code></h3>

    <pre>a: {{a}}</pre>
    <pre>b: {{b}}</pre>
    <pre>sum: {{sum}}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="incrementA()">Increment a</button>
    <button class="btn btn-outline-primary" (click)="incrementB()">Increment b</button>
 `
})
export class DerivedStateComponent {
  // ⚠️ Ugly imperative code!
  // Refactor to Signals! use `signal` and `computed`!

  a: number = 1;
  b: number = 2;

  sum: number = 0;

  constructor() {
    this.updateSum();
  }

  updateSum(): void {
    this.sum = this.a + this.b;
  }

  incrementA() {
    this.a++;
    this.updateSum();
  }

  incrementB() {
    this.b++;
    this.updateSum();
  }
}
