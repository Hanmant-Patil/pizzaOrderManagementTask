import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../orders.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})

export class OrderDetailsComponent implements OnInit {
  private customerId;
  public order = new Order();
  private orders : Order[];

  constructor(private titleService: Title,
    private router : Router,
    private route: ActivatedRoute,
    private ordersService : OrdersService) { 
      this.customerId = parseInt(this.route.snapshot.paramMap.get('id'))
      this.titleService.setTitle("Order Details");
  }

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
    const order = this.orders.filter(element => {
      return element.customerId == this.customerId;
    });

    if(order.length) {
      this.order = order[0];
    } else {
      this.onCancel();
    }    
  }

  public onCancel() {
    this.router.navigate(["orders"]);
  }
  
}
