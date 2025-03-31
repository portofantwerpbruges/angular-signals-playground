import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-my-first-signal',
  imports: [],
  template: `
    <h3>My First Signal 🚦</h3>

    <pre>mySignal: {{mySignal()}}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="setMySignal()">Set</button>
    <button class="btn btn-outline-primary" (click)="updateMySignal()">Update</button>
  `
})
export class MyFirstSignalComponent {
  // 👇 My First Signal 🚀
  mySignal = signal(1);
  // In RxJS: myBehaviorSubject = new BehaviorSubject(1);

  // 👇 Update Signal state with `set`
  setMySignal() {
    this.mySignal.set(42)
    // In RxJS: myBehaviorSubject.next(42);
  }

  // 👇 Update Signal state with `update` (`update` takes a callback function which gives access to the current signal value)
  updateMySignal() {
    this.mySignal.update(v => v + 1);
    // In RxJS: myBehaviorSubject.next(this.myBehaviorSubject.value + 1);
  }
}
