import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public text: string ="Login";

  constructor(private auth:AuthService){
    this.auth.cartSubject.subscribe((data)=>{
      this.cartItem = data;
    })
  }
  ngOnInit():void{
    this.cartItemFunc();
  }

  

  cartItem:number =0;

  cartItemFunc(){
    if(localStorage.getItem('localCart')!=null){
      var cartCount = JSON.parse(localStorage.getItem('localCart')||'{}');
      this.cartItem =cartCount.length;
    }
  }

   
 
}
