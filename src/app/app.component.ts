import { Component, computed, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mySignal = signal(42); // == BehaviorSubject(42)

  counter1 = signal(1);
  counter2 = signal(2);
  sum = computed(() => this.counter1() + this.counter2()) // == combineLatest

  myValue = signal(42)

  constructor() {
    effect(() => {
      console.log('sum updated', this.sum())
    }); // == subscribe to sum Observable; do something when there is a new emission

    effect(() => {
      console.log('value updated', this.myValue())
    });
  }

  incrementCounter1(): void {
    this.counter1.update(v => v + 1) // == BehaviorSubject.next
  }

  incrementCounter2(): void {
    this.counter2.update(v => v + 1) // == BehaviorSubject.next
  }

  setValue() {
    this.myValue.set(42)
  }
}
