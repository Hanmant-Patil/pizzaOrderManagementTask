import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';

const routes: Routes = [
  {
    path : "",
    children : [
      {
        path : "",
        component : OrdersComponent,
        data: {
          title: 'Orders',
        }
      },
      {
        path : "details/:id",
        component : OrderDetailsComponent,
        data: {
          title: 'Order Details',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule { }
