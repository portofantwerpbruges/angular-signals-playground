import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  template: `
    <h3>Listen to Signal state changes with <code>effect</code></h3>

    <p>Please check the JS console to see the effect logging</p>

    <pre>mySignal: {{ mySignal() }}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="updateWithNewValue()">Update with new value (increment)</button>
    <button class="btn btn-outline-primary mr-2" (click)="updateWithNewValueManyTimes()">❗Update with new value (increment) -- many times</button>
    <button class="btn btn-outline-primary" (click)="updateWithSameValue()">❗Update with same value</button>
  `
})
export class EffectComponent {
  mySignal = signal(42);

  constructor() {
    // 👇 Listen to Signal state changes with `effect`
    effect(() => {
      console.log('mySignal updated', this.mySignal()) // Logs when `mySignal` has a new value
    });
  }

  // Logs every call of the `update` method
  updateWithNewValue() {
    this.mySignal.update(v => v + 1)
  }

  // ❗ Logs once, when signal state "stabilized"
  updateWithNewValueManyTimes() {
    this.updateWithNewValue();
    this.updateWithNewValue();
    this.updateWithNewValue();
    this.updateWithNewValue();
    this.updateWithNewValue();
    this.updateWithNewValue();
    this.updateWithNewValue();
    this.updateWithNewValue();
    this.updateWithNewValue();
    this.updateWithNewValue();
  }

  // ❗ Nothing is logged, because the signal state did not change
  updateWithSameValue() {
    this.mySignal.update(v => v)
  }
}
