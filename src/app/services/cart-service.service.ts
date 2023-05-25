import { Injectable } from '@angular/core';
import { OrderDetailsService } from './order-details.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items: OrderDetailsService[] = [];
  constructor() { }

  addToCart(product: OrderDetailsService){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items =[];
    return this. items;
  }


}
