import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { AddAdressComponent } from './add-adress/add-adress.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { EditAdressComponent } from './edit-adress/edit-adress.component';


const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'add_product', component:AddProductComponent},
  {path:'product_page/:id', component:ProductPageComponent},
  {path:'cart/:id', component:CartComponent},
  {path:'add_adress', component:AddAdressComponent},
  {path:'update_user', component:UserEditComponent},
  {path:'update_adress', component:EditAdressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
