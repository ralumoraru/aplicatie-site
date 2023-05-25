import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { OrderDetailsService } from './services/order-details.service';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { LoginComponent } from './ComponentAuth/login/login.component';
import { RegisterComponent } from './ComponentAuth/register/register.component';
import { DashboardComponent } from './ComponentAuth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './ComponentAuth/forgot-password/forgot-password.component';
import { VarifyEmailComponent } from './ComponentAuth/varify-email/varify-email.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path: 'services',component: OrderDetailsService},
  {path:'menu/:id',component:ProductpageComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'varify-email',component:VarifyEmailComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
