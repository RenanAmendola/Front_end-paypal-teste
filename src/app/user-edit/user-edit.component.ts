import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { environment } from '../../environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit{

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  userLog : UserLogin = new UserLogin
  password_confirm: String



  ngOnInit() {
    window.scroll(0,0) 

    this.userLog.id = environment.user_id 
    this.userLog.name = environment.user_name 
    this.userLog.last_name = environment.user_last_name
    this.userLog.email = environment.user_email 
    this.userLog.phone = environment.user_phone


  
  }


  confirm_password(event: any) {

    this.password_confirm = event.target.value

  }

  update() {

    if (this.userLog.password != this.password_confirm) {
      alert("Passwords are not compatible")
    } else {
      this.auth.update_user(this.userLog).subscribe((resp: UserLogin) => {
        this.userLog = resp
        this.router.navigate(['/login'])
        alert("Account updated successfully, please log in again!")
      })
    }

  }

}

