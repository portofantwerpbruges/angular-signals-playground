import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'non-reactive', loadComponent: () => import('./components/01-non-reactive.component').then(v => v.NonReactiveComponent) },
  { path: 'reactive-with-rxjs', loadComponent: () => import('./components/02-reactive-with-rxjs.component').then(v => v.ReactiveWithRxjsComponent) },
  { path: 'my-first-signal', loadComponent: () => import('./components/03-my-first-signal.component').then(v => v.MyFirstSignalComponent) },
  { path: 'derived-state', loadComponent: () => import('./components/04-derived-state-with-computed.component').then(v => v.DerivedStateWithComputedComponent) },
  { path: 'effect', loadComponent: () => import('./components/05-effect.component').then(v => v.EffectComponent) },
  { path: 'rxjs-interop', loadComponent: () => import('./components/06-rxjs-interop.component').then(v => v.RxjsInteropComponent) },
  { path: 'signal-input', loadComponent: () => import('./components/07-signal-input/signal-input-shell.component').then(v => v.SignalInputShellComponent) },
  { path: 'rx-resource', loadComponent: () => import('./components/08-rx-resource.component').then(v => v.RxResourceComponent) },
  { path: '', redirectTo: '/non-reactive', pathMatch: 'full' },
];

