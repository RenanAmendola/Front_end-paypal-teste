import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { Adress } from '../model/Adress';

@Component({
  selector: 'app-add-adress',
  templateUrl: './add-adress.component.html',
  styleUrl: './add-adress.component.css'
})
export class AddAdressComponent implements OnInit{

  adress : Adress = new Adress()

  user : User = new User()
  userId = environment.user_id 


  constructor(

    private auth: AuthService,
    private router: Router

  ){}

  ngOnInit() {
    window.scroll(0,0) 
    

  }


  add_adress(){

    this.user.id = this.userId
    this.adress.user = this.user

    this.auth.add_adress(this.adress).subscribe((resp: Adress) => {
      this.adress = resp
      alert("Adress registred!")
      this.adress = new Adress()
      this.router.navigate(['/profile'])


      
    })




    /*   
    this.user.id = this.idUser
    this.noticias.usuario = this.user

    this.noticiasService.postNoticias(this.noticias).subscribe((resp: noticias) => {
      this.noticias = resp
      this.alerta.showAlertSuccess('Noticia postada com sucesso!')
      this.noticias = new noticias()
      this.router.navigate(['/home'])
      */
  }

}
