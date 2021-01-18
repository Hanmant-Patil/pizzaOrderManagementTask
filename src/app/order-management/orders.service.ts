import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  orders : any = [
    {
      customerId : 1,
      customerName : "Hanmant",
      itemsOrderedCount : 3,
      totalOrderAmount : 300,
      orderStatus : "Order Received",
      deliveryAddress  : "Pimpri Chinchwad Pune-18",
      items : [{
        name : "Item 1",
        price : 10
      },{
        name : "Item 2",
        price : 70
      },{
        name : "Item 3",
        price : 20
      }]
    },
    {
      customerId : 2,
      customerName : "Venkat",
      itemsOrderedCount : 5,
      totalOrderAmount : 400,
      orderStatus : "Preparing",
      deliveryAddress  : "Sadashiv Peth Pune",
      items : [{
        name : "Item 1",
        price : 100
      },{
        name : "Item 2",
        price : 100
      },{
        name : "Item 3",
        price : 50
      },{
        name : "Item 4",
        price : 100
      }]
    },
    {
      customerId : 3,
      customerName : "Ankita",
      itemsOrderedCount : 1,
      totalOrderAmount : 300,
      orderStatus : "Order Received",
      deliveryAddress  : "Pimpri Chinchwad Pune-18",
      items : [{
        name : "Item 1",
        price : 300
      }],
    }
  ];

  constructor() { }

  public getOrders() {
    return this.orders;
  }

}
