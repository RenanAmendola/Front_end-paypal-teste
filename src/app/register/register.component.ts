import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  user: User = new User

  password_confirm: String

  constructor(

    private auth: AuthService,
    private router: Router

  ){}

  ngOnInit() {
    window.scroll(0,0) 
  }

  confirm_password(event: any) {

    this.password_confirm = event.target.value

  }

  register() {

    if (this.user.password != this.password_confirm) {
      alert("Passwords are not compatible")
    } else {
      this.auth.register(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert("Account created successfully!")
      })
    }

  }

}
