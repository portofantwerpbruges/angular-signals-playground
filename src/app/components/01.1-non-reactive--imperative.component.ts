import {  Component } from '@angular/core';

@Component({
  template: `
    <h3>👿Non reactive (imperative)</h3>

    <pre>a: {{a}}</pre>
    <pre>b: {{b}}</pre>
    <pre>sum: {{sum}}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="incrementA()">Increment a</button>
    <button class="btn btn-outline-primary" (click)="incrementB()">Increment b</button>
  `
})
export class NonReactiveComponent {
  // 👇 Raw values (JS primitives, objects, ...)
  // Raw values themselves do not know about value updates!
  a: number = 0;
  b: number = 0;

  sum: number = 0;

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
