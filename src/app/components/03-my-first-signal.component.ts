import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-my-first-signal',
  imports: [],
  template: `
    <h3>My First Signal 🚦</h3>

    <!--           👇 Signal read-->
    <pre>mySignal: {{mySignal()}}</pre>

    <button class="btn btn-outline-primary mr-2" (click)="setMySignal()">Set</button>
    <button class="btn btn-outline-primary" (click)="updateMySignal()">Update</button>
  `
})
export class MyFirstSignalComponent {
  // 👇 My First Signal
  mySignal = signal(1);
  // In RxJS: myBehaviorSubject = new BehaviorSubject(1);

  setMySignal() {
    // 👇 Update Signal state with `set`
    this.mySignal.set(42)
    // In RxJS: myBehaviorSubject.next(42);
  }

  updateMySignal() {
    // 👇 Update Signal state with `update` (`update` takes a callback function which gives access to the current signal value)
    this.mySignal.update(v => v + 1);
    // In RxJS: myBehaviorSubject.next(this.myBehaviorSubject.value + 1);
  }
}
