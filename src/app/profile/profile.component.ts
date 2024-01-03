import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Adress } from '../model/Adress';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',

})
export class ProfileComponent implements OnInit{

  userLog : UserLogin = new UserLogin

  adress : Adress = new Adress

  with_adress: boolean = false; 
  with_out_adress: boolean = false; 


  ngOnInit() {
    window.scroll(0,0) 

    this.userLog.id = environment.user_id 
    this.userLog.name = environment.user_name 
    this.userLog.last_name = environment.user_last_name
    this.userLog.email = environment.user_email 
    this.userLog.phone = environment.user_phone

    this.adress.id = environment.Adress_id
    this.adress.adress_1 = environment.adress_1
    this.adress.adress_2 = environment.adress_2 
    this.adress.country = environment.country 
    this.adress.state = environment.state
    this.adress.province = environment.province 
    this.adress.postal_code = environment.postal_code

    this.with_adress = this.adress.id !== 0; 
    this.with_out_adress = this.adress.id == 0; 

  }




  


}
