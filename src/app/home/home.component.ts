import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Product } from '../model/Product';
import { environment } from '../../environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Adress } from '../model/Adress';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  products: Product[] = []

  userLog : UserLogin = new UserLogin

  adress : Adress = new Adress


  constructor(
    private auth: AuthService
    ) {}

  ngOnInit() {

    this.userLog.id = environment.user_id 
    this.userLog.name = environment.user_name 
    this.userLog.last_name = environment.user_last_name
    this.userLog.email = environment.user_email 
    this.userLog.phone = environment.user_phone

    /*this.items = this.itemService.getItems();*/
    this.auth.get_all_products().subscribe(
      (resp) => {
        this.products = resp;})

      

    this.auth.get_adress_by_user(this.userLog.id).subscribe((resp: Adress) => {
      this.adress = resp

      environment.Adress_id = this.adress.id
      environment.adress_1 = this.adress.adress_1
      environment.adress_2 = this.adress.adress_2
      environment.country = this.adress.country
      environment.state = this.adress.state
      environment.province = this.adress.province
      environment.postal_code = this.adress.postal_code



    })
  }

}
