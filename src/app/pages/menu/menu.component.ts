import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private service:OrderDetailsService, private auth:AuthService) {}
  productData:any;
  ngOnInit(): void{
    this.productData=this.service.productsDetails;
    window.scroll(0,0);
    
  }

  incrementQuantity(pd: any){
   // console.log(pd.qnt);
   if(pd.qnt != 5)
   {
       pd.qnt +=1;
   }
  }
  
  decrementQuantity(pd: any){
    if(pd.qnt != 1){
      pd.qnt -=1;
    }

  }
 itemsCart: any = [{}];
  addCart(category: any){
      
      let cartDataNull = localStorage.getItem('localCart');
      if(cartDataNull == null){
        let storeDataGet: any = [];
        storeDataGet.push(category);
        localStorage.setItem('localCart',JSON.stringify(storeDataGet));
      }
      else{
       var id = category.id;
       let index: number = -1;
       this.itemsCart = JSON.parse(localStorage.getItem('localCart') || 'null');
      for(let i=0;i<this.itemsCart.lenght;i++){
          if(parseInt(id) === parseInt(this.itemsCart[i].id)){
              this.itemsCart[i].qnt =category.qnt;
              index = i;
              break;
            }
      }
      if(index == -1){
        this.itemsCart.push(Object.assign({},category));
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
      }else {
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart));
      }

      }

      this.cartNumberFunc();


      
  }

  cartNumber:number =0;
  cartNumberFunc(){
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
  
}

