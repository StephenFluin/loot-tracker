import { Routes } from '@angular/router';
import { Home } from './home/home';

// export const routes: Routes = [
//   {
//     path: '',
//     children: [
//       { path: '', loadComponent: () => import('./home/home').then((m) => m.Home) },
//       {
//         path: 'about',
//         loadComponent: () => import('./about/about').then((m) => m.About),
//       },
//       {
//         path: 'auth',
//         loadComponent: () => import('./auth/auth').then((m) => m.Auth),
//       },
//     ],
//   },
// ];

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth').then((m) => m.Auth),
  },
];
