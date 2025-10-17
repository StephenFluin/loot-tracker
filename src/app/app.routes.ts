import { Routes } from '@angular/router';
import { Other } from './other/other';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'hydration-demo',
    loadComponent: () => import('./hydration-demo/hydration-demo').then((m) => m.HydrationDemo),
  },
  {
    path: 'defer-demo',
    loadComponent: () => import('./defer-demo/defer-demo').then((m) => m.DeferDemo),
  },
  {
    path: 'state',
    loadComponent: () => import('./state/state').then((m) => m.State),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth').then((m) => m.Auth),
  },
  {
    path: 'rich-data',
    loadComponent: () => import('./rich-data/rich-data').then((m) => m.RichData),
  },
  { path: 'other', component: Other },
];
