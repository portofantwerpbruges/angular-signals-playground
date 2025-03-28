import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-derived-state-with-computed',
  imports: [],
  template: `
    <h3>Derived State with <code>computed</code></h3>

    <pre>a: {{ a() }}</pre>
    <pre>b: {{ b() }}</pre>
    <pre>c.value: {{ c().value }}</pre>
    <pre>sum: {{ sum() }}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="incrementA()">Increment a</button>
    <button class="btn btn-outline-primary mr-2" (click)="incrementB()">Increment b</button>
    <button class="btn btn-outline-primary mr-2" (click)="incrementC()">Increment c.value</button>
    <button class="btn btn-outline-primary" (click)="mutateC()">❗ Mutate c.value</button>
  `
})
export class DerivedStateWithComputedComponent {
  a = signal(1);
  b = signal(2);
  c = signal({value: 3}); // This is an object to show-case mutation

  // 👇 Derived State with `computed`
  sum = computed(() => this.a() + this.b() + this.c().value)
  // In RxJS: combineLatest

  incrementA(): void {
    this.a.update(v => v + 1)
  }

  incrementB(): void {
    this.b.update(v => v + 1)
  }

  incrementC(): void {
    this.c.update(v => ({
      ...v,
      value: v.value + 1
    }))
  }

  // ❗ State mutation! the sum Signal will not know that the c Signal has a new value
  mutateC(): void {
    this.c.update(v => {
      v.value = v.value + 1 // Mutation of the value property
      return v;
    })
  }
}
