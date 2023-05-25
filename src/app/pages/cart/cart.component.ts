import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';
import { orderBy } from 'firebase/firestore';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  constructor(private formBuilder: FormBuilder, 
    private auth: AuthService,
     private route: Router,
     private firestore:Firestore) {}


  productData:any;
  shippingForm!: FormGroup;
  isSubmit = true;
  submitMessage ='';
 
  ngOnInit(): void{
    this.CartDetails();
    this.localCart();
    this.shippingForm = this.formBuilder.group({
      firstname:[null,Validators.required],
      lastname:[null,Validators.required],
      phone:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      address:[null,Validators.required],
      city:[null,Validators.required],
      zip:[null,Validators.required],
      total:[null,Validators.required],

    });
   
  }
  submitData(value:any){


    let $contactRef=collection(this.firestore,"shipping");
               

    
    addDoc($contactRef,value)
    .then(()=>{
        this.submitMessage ='Submitted Successfully';
      })
      .catch(err=>{
        console.log(err);
      })

      this.isSubmit =true;
      
      setTimeout(()=>{
        this.isSubmit=false;
      },8000);

  }




  getCartDetails:any = [];
  CartDetails(){
    if(localStorage.getItem('localCart')){
       this.getCartDetails = JSON.parse(localStorage.getItem('localCart')||'null');
       console.log(this.getCartDetails);
    }
  }

  incr(id:any, qnt: any){
      for(let i=0;i<this.getCartDetails.length;i++){
        if(this.getCartDetails[i].id === id){
          if(qnt != 5){
            this.getCartDetails[i].qnt = parseInt(qnt) +1;
          }
        }
      }
      localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
      this.localCart();
    }

  decr(id: any, qnt: any){
    for(let i=0;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].id === id){
        if(qnt != 1){
          this.getCartDetails[i].qnt = parseInt(qnt) -1;
        }
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.localCart();
  }

 total:number = 0;


localCart(){
  if(localStorage.getItem('localCart')){
    this.getCartDetails = JSON.parse(localStorage.getItem('localCart') || 'null');
   this.total = this.getCartDetails.reduce(function(acc:any, val:any){
       return acc + (val.productPrice * val.qnt);
    }, 0);
  }

  
  
}




  removeall(){
     localStorage.removeItem('localCart');
     this.getCartDetails = [];
     this.total = 0;
     this.cartNumber = 0;
     this.auth.cartSubject.next(this.cartNumber);
    }
  
    singleDelete(getCartDetail: any){
          if(localStorage.getItem('localCart')){
               this.getCartDetails = JSON.parse(localStorage.getItem('localCart')||'null');
             for(let i=0;i<this.getCartDetails.length;i++){
                if(this.getCartDetails[i].id === getCartDetail){
                  this.getCartDetails.splice(i, 1);
                  localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
                   this.localCart();
                   this.cartNumberFunc();
                }
             }
         }
    }


    cartNumber:number =0;
  cartNumberFunc(){
    var cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }

  checkout(){
    this.route.navigate(['/checkout'])
  }

  

  }

