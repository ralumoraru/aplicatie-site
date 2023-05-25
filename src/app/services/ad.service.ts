import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from 'firebase/firestore';
import { Contact } from '../model/contact';


@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private firestore: Firestore) { }

  addProduct(contact:Contact)
  {
    let $productsRef=collection(this.firestore,"products");
    return addDoc($productsRef,contact);
  }
}
