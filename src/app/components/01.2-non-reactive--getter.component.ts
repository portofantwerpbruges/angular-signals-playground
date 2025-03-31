import {  Component } from '@angular/core';

@Component({
  template: `
    <h3>👿Non reactive (getter)</h3>

    <pre>a: {{a}}</pre>
    <pre>b: {{b}}</pre>
    <pre>sum: {{sum}}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="incrementA()">Increment a</button>
    <button class="btn btn-outline-primary mr-2" (click)="incrementB()">Increment b</button>

    <div class="mt-4">
      <button class="btn btn-sm btn-outline-primary" (click)="unrelated()">Unrelated</button>
    </div>
  `
})
export class NonReactiveComponent {
  // 👇 Raw values (JS primitives, objects, ...)
  // Raw values themselves do not know about value updates!
  a: number = 1;
  b: number = 2;

  // 👇 Called by Angular Change Detection / zone.js
  // Getter is called more often than necessary!
  get sum(): number {
    console.log('calculate sum...')
    return this.a + this.b;
  }

  incrementA() {
    this.a++;
  }

  incrementB() {
    this.b++;
  }

  unrelated() {
  // ❗ This totally unrelated method triggers Angular Change Detection!
  }
}
