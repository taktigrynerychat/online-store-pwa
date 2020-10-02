import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export enum MainRoutes {
  MAIN_PAGE = 'main',
  CART = 'cart'
}

const routes: Routes = [
  {
    path: '',
    redirectTo: `/${ MainRoutes.MAIN_PAGE }`,
    pathMatch: 'full',
  },
  {
    path: MainRoutes.MAIN_PAGE,
    loadChildren: () => import('./modules/main/main.module').then(module => module.MainModule),
    data: {
      state: MainRoutes.MAIN_PAGE
    },
  },
  {
    path: MainRoutes.CART,
    loadChildren: () => import('./modules/cart/cart.module').then(module => module.CartModule),
    data: {
      state: MainRoutes.CART
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
