import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  totalcheckout: number = 0;
  getCartDetails:any = [];
  orderTotal: any = [];

  ngOnInit(): void {
      
  }

  constructor(private router: Router){

   
  }





}
