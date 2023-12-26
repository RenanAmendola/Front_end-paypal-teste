import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { Adress } from '../model/Adress';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) {}

  userLog: UserLogin = new UserLogin
  adress: Adress = new Adress

  logout() {
    // User detailes
    environment.user_id = 0,
    environment.user_name= "",
    environment.user_last_name='',
    environment.user_phone='',
    environment.user_email='',
    environment.user_adress={},

   //Adress detailes

   environment.Adress_id= 0,
   environment.adress_1='',
   environment.adress_2='',
   environment.country='',
   environment.state='',
   environment.province='',
   environment.postal_code=0

    this.router.navigate(['/login']);
  }

}
