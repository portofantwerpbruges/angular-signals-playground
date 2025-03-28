import { Component } from '@angular/core';
import { SumComponent } from './sum.component';

@Component({
  selector: 'app-signal-input-shell',
  imports: [
    SumComponent
  ],
  template: `
    <h3>Signal Input: <code>input</code></h3>

    <app-sum [a]="1" [b]="2"></app-sum>
  `
})
export class SignalInputShellComponent {

}
