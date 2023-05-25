import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { NavbarComponent } from 'src/app/sharepage/navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
email : string ='';
password : string ='';
isLoggedIn : boolean = false;


constructor(private auth: AuthService){
 
}

login()
{
  if(this.email == '') {
    alert('Please enter email');
    return;
  }

  if(this.password == '') {
    alert('Please enter password');
    return;
  }

  

  this.auth.login(this.email,this.password);
  
  this.email = '';
  this.password = '';
  this.isLoggedIn = true;
 
 
  

}




signInWithGoogle() {
  this.auth.googleSignIn();
}
}
