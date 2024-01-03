import { Component, EnvironmentProviders, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  userLog : UserLogin = new UserLogin

  email: string = '';
  password: string = '';
  

  constructor(

    private auth: AuthService,
    private router: Router

  ){}

  ngOnInit() {
    window.scroll(0,0) 
  }



  login(): void {
    if (this.userLog.email && this.userLog.password) {
      this.auth.login(this.userLog).subscribe(
        (resp: UserLogin) => {
          this.userLog = resp

          environment.user_id = this.userLog.id
          environment.user_name = this.userLog.name
          environment.user_last_name = this.userLog.last_name
          environment.user_email = this.userLog.email
          environment.user_phone = this.userLog.phone





          this.router.navigate(['/home']);
        });
    } else {
      
      alert('Username and password are required.');
    }
  }

}
