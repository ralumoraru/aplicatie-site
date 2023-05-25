import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder} from '@angular/forms';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  
  contactForm!: FormGroup;
  isSubmit = true;
  submitMessage ='';

  

  constructor(private formBuilder: FormBuilder, private firestore: Firestore){
     
  }

  
  ngOnInit(): void {
   
      this.contactForm = this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      message:[null,Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(400)])],
      
    });
  }

  

  submitData(value:any){


    let $contactRef=collection(this.firestore,"contact");

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
      
    //console.log(value);

    // const collectionInstance = collection(this.firestore, 'enquiry');

    // addDoc(collectionInstance, value.value)
    // .then(()=>{
    //   this.submitMessage ='Submitted Successfully';
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
    
    // this.isSubmit =true;
    
    // setTimeout(()=>{
    //   this.isSubmit=false;
    // },8000);

  }



}
