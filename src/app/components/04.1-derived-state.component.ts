import { Component, computed, signal } from '@angular/core';

@Component({
  template: `
    <h3>Derived State with <code>computed</code></h3>

    <pre>a: {{a()}}</pre>
    <pre>b: {{b()}}</pre>
    <pre>sum: {{sum()}}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="incrementA()">Increment a</button>
    <button class="btn btn-outline-primary" (click)="incrementB()">Increment b</button>
 `
})
export class DerivedStateComponent {
  a = signal(1);
  b = signal(2);

  // 👇 Derived State with `computed`
  sum = computed(() => this.a() + this.b());

  incrementA() {
    this.a.update(value => value + 1);
  }

  incrementB() {
    this.b.update(value => value + 1);
  }
}
