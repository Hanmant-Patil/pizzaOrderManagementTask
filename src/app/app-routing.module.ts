import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : "",
    component : AppComponent,
    children  : [
      {
        path: '', redirectTo: '/orders', pathMatch: 'full',
        data: { preload: true }
      },
      {
        path: 'orders',
        loadChildren : './order-management/orders.module#OrdersModule'
      },
      { path: '**', redirectTo: 'orders' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
