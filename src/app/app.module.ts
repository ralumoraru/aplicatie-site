import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { DashboardComponent } from './ComponentAuth/dashboard/dashboard.component';
import { LoginComponent } from './ComponentAuth/login/login.component';
import { RegisterComponent } from './ComponentAuth/register/register.component';
import { VarifyEmailComponent } from './ComponentAuth/varify-email/varify-email.component';
import { ForgotPasswordComponent } from './ComponentAuth/forgot-password/forgot-password.component';
import { CartComponent } from './pages/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore,getFirestore} from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    MenuComponent,
    ProductpageComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    VarifyEmailComponent,
    ForgotPasswordComponent,
    CartComponent,
    CheckoutComponent,
    

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   // AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
     MatGridListModule
   
   
    
  ],
  providers: [
    CartComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
