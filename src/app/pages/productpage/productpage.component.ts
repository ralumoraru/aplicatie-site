import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private cartService:CartServiceService){}
  GetProdId:any;
  productData:any;
  productQuantity:number=1;
 
 
  
 
  ngOnInit(): void{
    this.GetProdId = this.param.snapshot.paramMap.get('id');
    console.log(this.GetProdId,'getmenu');
    if(this.GetProdId){
      this.productData = this.service.productsDetails.filter((value)=>{
         return value.id == this.GetProdId;
       });
       console.log(this.productData,'productData>>');
    }
  }

  addToCart(){
    if(this.productData){
      this.productData.qnt=this.productQuantity;
      if(localStorage.getItem('user')){
           console.warn(this.productData);

      }
      
    }
  }
  
 
 
 

}
