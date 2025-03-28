import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-sum',
  imports: [],
  template: `
    <h5>Sum Component with Signal inputs</h5>
    <pre>sum: {{sum()}}</pre>
  `
})
export class SumComponent {
  // 👇 Signal-based inputs
  a = input(0); // Old days: @Input() a: number;
  b = input(0);

  sum = computed(() => this.a() + this.b()); // Calculate derived state with `computed`
}
