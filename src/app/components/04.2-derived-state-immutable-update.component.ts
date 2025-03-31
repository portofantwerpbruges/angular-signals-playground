import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-derived-state-with-computed',
  imports: [],
  template: `
    <h3>Derived State with <code>computed</code></h3>

    <h5>Immutable state updates</h5>

    <pre>a: {{ a() }}</pre>
    <pre>b.value: {{ b().value }}</pre>
    <pre>sum: {{ sum() }}</pre>

    <div class="mb-2">
      <button class="btn btn-outline-primary mr-2" (click)="incrementA()">Increment a</button>
      <button class="btn btn-outline-primary mr-2" (click)="incrementB()">Increment b.value</button>
    </div>
    <button class="btn btn-outline-primary" (click)="mutateB()">❗ Mutate b.value</button>
  `
})
export class DerivedStateImmutableUpdateComponent {
  a = signal(1);
  b = signal({value: 2}); // This is an object to show-case mutation

  // 👇 Derived State with `computed`
  sum = computed(() => this.a() + this.b().value)

  incrementA(): void {
    this.a.update(v => v + 1)
  }

  incrementB(): void {
    this.b.update(object => ({
      ...object,
      value: object.value + 1
    }))
  }

  // ❗ State mutation! The sum Signal will not know that b.value has a new value
  mutateB(): void {
    this.b.update(v => {
      v.value = v.value + 1 // Mutation of the value property
      return v;
    })
  }
}
