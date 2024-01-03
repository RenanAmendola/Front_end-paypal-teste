import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { AddAdressComponent } from './add-adress/add-adress.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from './user-edit/user-edit.component';
import { EditAdressComponent } from './edit-adress/edit-adress.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AddProductComponent,
    OnlyNumbersDirective,
    ProductPageComponent,
    CartComponent,
    AddAdressComponent,
    ModalComponent,
    UserEditComponent,
    EditAdressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
