import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  
  

  productsDetails = [
    {
      id:1,
      productName:"Roată dințată cu sistem de angrenare",
      productDetails:"Util la pompe sumersibile. Diamnetru de 44 milimetrii.",
      productPrice:150,
      productImg:"..\\..\\assets\\img\\P1.jpg",
      qnt: 1,
    },
    {
      id:2,
      productName:"Roată dinîată simplă ",
      productDetails:"Utilă la pompe sumersibile. Diamnetru de 44 milimetrii.",
      productPrice:150,
      productImg:"..\\..\\assets\\img\\P2.jpg",
      qnt: 1,
    },
    {
      id:3,
      productName:"Roată dințată cu sistem de angrenare + Roată dinîată simplă",
      productDetails:"Utile la pompele sumersibile. Diamnetru de 44 milimetrii.",
      productPrice:275,
      productImg:"..\\..\\assets\\img\\P3.jpg",
      qnt: 1,
    },
    {
      id:4,
      productName:"DILM - Contactor",
      productDetails:"",
      productPrice:70,
      productImg:"..\\..\\assets\\img\\P4.jpg",
      qnt: 1,
    },
    {
      id:5,
      productName:"Dop electrovalvă",
      productDetails:"",
      productPrice:94,
      productImg:"..\\..\\assets\\img\\P5.jpg",
      qnt: 1,
    },
    {
      id:6,
      productName:"Valvă silicon",
      productDetails:"",
      productPrice:125,
      productImg:"..\\..\\assets\\img\\P6.jpg",
      qnt: 1,
    },
    {
      id:7,
      productName:"Limitator",
      productDetails:"",
      productPrice:125,
      productImg:"..\\..\\assets\\img\\P7.jpg",
      qnt: 1,
    },
    {
      id:9,
      productName:"Oring 153",
      productDetails:"",
      productPrice:6,
      productImg:"..\\..\\assets\\img\\P9.jpg",
      qnt: 1,
    },
    {
      id:11,
      productName:"Tijă regulator",
      productDetails:"",
      productPrice:200,
      productImg:"..\\..\\assets\\img\\P11.jpg",
      qnt: 1,
    },
    {
      id:12,
      productName:"Garnituri",
      productDetails:"",
      productPrice:80,
      productImg:"..\\..\\assets\\img\\P12.jpg",
      qnt: 1,
    },
    {
      id:13,
      productName:"O-ring 253",
      productDetails:"",
      productPrice:118,
      productImg:"..\\..\\assets\\img\\P13.jpg",
      qnt: 1,
    },
    {
      id:14,
      productName:"Curățător mare",
      productDetails:"Se vănd la set de cate 4 bucăți.",
      productPrice:190,
      productImg:"..\\..\\assets\\img\\P14.jpg",
      qnt: 1,
    },
    {
      id:15,
      productName:"Griday",
      productDetails:"",
      productPrice:350,
      productImg:"..\\..\\assets\\img\\P15.jpg",
      qnt: 1,
    },
    
]
 orderTotal =[
  {total:0}
 ]


constructor() { }




}
