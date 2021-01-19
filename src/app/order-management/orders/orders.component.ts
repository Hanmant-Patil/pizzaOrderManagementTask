import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { OrdersService } from '../orders.service';
import { Order } from './order';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

  rows : any = [];
  orders : Order[];

  constructor(private titleService: Title,
    private router : Router,
    private toastr: ToastrService,
    private ordersService : OrdersService) { 
      this.titleService.setTitle("Orders");
  }

  ngOnInit() {
    this.orders = this.ordersService.getOrders();  // get orders list from order service
    this.rows = this.orders;
  }

  // naviagte to order details page
  public onOrderDetails(order) {
    this.router.navigate([`orders/details/${order.customerId}`]);
  }

  public onChangeOrderStatus(order) {
    const orders = this.orders.filter(element => {
      if(element.customerId == order.customerId) {
        switch (element.orderStatus) {
          case "Order Received":
            element.orderStatus = "Preparing";
            this.toastr.success('Order Status Changes');
            break;
          case "Preparing":
            element.orderStatus = "Ready to serve";
            this.toastr.success('Order Status Changes');
            break;         
          default:
        }
      }
      return element;
    });
    this.rows = this.orders = orders; 
  }

}
