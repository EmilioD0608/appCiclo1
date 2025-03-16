import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'botones',
    pathMatch: 'full',
  },
  {
    path: 'botones',
    loadComponent: () => import('./paginas/botones/botones.page').then( m => m.BotonesPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./paginas/card/card.page').then( m => m.CardPage)
  },

  {
    path: 'principal',
    loadComponent: () => import('./paginas/principal/principal.page').then( m => m.PrincipalPage)
  },
  {
    path: 'swiper',
    loadComponent: () => import('./paginas/swiper/swiper.page').then( m => m.SwiperPage)
  },
  {
    path: 'lector-qr',
    loadComponent: () => import('./paginas/lector-qr/lector-qr.page').then( m => m.LectorQRPage)
  },
];
