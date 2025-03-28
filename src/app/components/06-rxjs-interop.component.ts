import { Component, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-rxjs-interop',
  imports: [
    AsyncPipe
  ],
  template: `
    <h3>RxJS Interop: <code>toObservable</code> and <code>toSignal</code></h3>
    <span class="badge badge-warning">Developer Preview</span>

    <div class="mt-3">
      <h5>Signal to Observable</h5>

      <pre>mySignal: {{ mySignal() }}</pre>
      <pre>observableFromSignal$: {{ observableFromSignal$ | async }}</pre>

      <button class="btn btn-outline-primary" (click)="updateSignal()">Update Signal</button>


      <h5 class="mt-4">Observable to Signal</h5>

      <pre>myObservable$: {{ myObservable$ | async }}</pre>
      <pre>signalFromObservable: {{ signalFromObservable() }}</pre>

      <button class="btn btn-outline-primary" (click)="updateObservable()">Update Observable</button>
    </div>
  `
})
export class RxjsInteropComponent {
  // Signal to Observable
  mySignal = signal(1);
  // 👇 Convert Signal to Observable with `toObservable`
  observableFromSignal$ = toObservable(this.mySignal);

  // Observable to Signal
  private myBehaviorSubject = new BehaviorSubject(42);
  myObservable$ = this.myBehaviorSubject.asObservable();
  // 👇 Convert Observable to Signal with `toSignal`
  signalFromObservable = toSignal(this.myObservable$);

  updateObservable() {
    this.myBehaviorSubject.next(this.myBehaviorSubject.value + 1);
  }

  updateSignal() {
    this.mySignal.update(v => v + 1);
  }
}
